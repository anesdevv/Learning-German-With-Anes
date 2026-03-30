// js/app.js

document.addEventListener('DOMContentLoaded', () => {
    const urlParams = new URLSearchParams(window.location.search);
    const storyId = urlParams.get('id') || 'friends';
    const storyData = STORIES[storyId];

    if (!storyData) {
        document.getElementById('story-content').innerHTML = '<p>Story not found.</p>';
        return;
    }

    // 1. Render Header
    document.title = `${storyData.title} - Sloeful German`;
    const headerContainer = document.getElementById('story-header');
    headerContainer.innerHTML = `
        <span class="badge">${storyData.level}</span>
        <h1>${storyData.title}</h1>
        <p>${storyData.description}</p>
    `;

    // 2. Render Story Content with Translations
    const contentContainer = document.getElementById('story-content');

    // Helper to wrap EVERY sentence
    const wrapTranslatable = (text) => {
        // Simple regex to split by sentences (looks for . ! ? followed by space or end)
        // We capture the delimiter to reconstruct the text
        const matches = text.match(/[^.!?]+[.!?]+(?:\s|$)/g);

        if (!matches) {
            // Fallback if no punctuation matches
            const cleanText = text.trim();
            return `<span class="translatable" data-de="${cleanText}">${cleanText}</span>`;
        }

        return matches.map(match => {
            const trimmed = match.trim();
            if (!trimmed) return match; // Keep just spaces
            // We use the raw match inside the span to preserve correct spacing in DOM
            return `<span class="translatable" data-de="${trimmed}">${match}</span>`;
        }).join('');
    };

    let storyHTML = '';

    storyData.paragraphs.forEach(p => {
        storyHTML += `<p>${wrapTranslatable(p)}</p>`;
    });
    contentContainer.innerHTML = storyHTML;

    // 3. Tooltip and Auto-Translation Logic
    const tooltip = document.getElementById('tooltip');
    const translatables = document.querySelectorAll('.translatable');
    const translationCache = {}; // Cache to avoid duplicate requests

    let hideTimeout;

    translatables.forEach(sentence => {
        sentence.addEventListener('mouseenter', async (e) => {
            clearTimeout(hideTimeout);
            const target = e.target;
            const deSentence = target.getAttribute('data-de');

            // Set tooltip position
            const positionTooltip = () => {
                const rect = target.getBoundingClientRect();
                const tooltipRect = tooltip.getBoundingClientRect();

                // Allow tooltip wrapping by setting max-width
                tooltip.style.whiteSpace = 'normal';
                tooltip.style.maxWidth = '300px';
                tooltip.style.textAlign = 'center';

                // Recalculate dimensions after allowing wrap
                const newTooltipRect = tooltip.getBoundingClientRect();

                let leftPos = rect.left + (rect.width / 2) - (newTooltipRect.width / 2) + window.scrollX;

                // Keep tooltip within viewport bounds
                if (leftPos < 10) leftPos = 10;
                if (leftPos + newTooltipRect.width > window.innerWidth - 10) {
                    leftPos = window.innerWidth - newTooltipRect.width - 10;
                }

                tooltip.style.left = `${leftPos}px`;
                tooltip.style.top = `${rect.top - newTooltipRect.height - 8 + window.scrollY}px`;
            };

            // Display cached or static translation if available
            if (translationCache[deSentence]) {
                tooltip.textContent = translationCache[deSentence];
                target.setAttribute('data-en', translationCache[deSentence]);
            } else if (storyData.translations && storyData.translations[deSentence]) {
                tooltip.textContent = storyData.translations[deSentence];
                target.setAttribute('data-en', storyData.translations[deSentence]);
            } else if (target.hasAttribute('data-en')) {
                tooltip.textContent = target.getAttribute('data-en');
            } else {
                tooltip.textContent = "..."; // Loading state
                target.classList.add('loading');

                // Fetch translation dynamically
                try {
                    const response = await fetch(`https://api.mymemory.translated.net/get?q=${encodeURIComponent(deSentence)}&langpair=de|en`);
                    const data = await response.json();
                    if (data && data.responseData && data.responseData.translatedText) {
                        const translation = data.responseData.translatedText;
                        translationCache[deSentence] = translation;
                        target.setAttribute('data-en', translation);
                        // If we are still hovering on this sentence, update tooltip
                        if (tooltip.classList.contains('visible') && tooltip.currentWord === deSentence) {
                            tooltip.textContent = translation;
                            positionTooltip(); // Adjust position since width/height changed
                        }
                    } else {
                        throw new Error("Translation not found");
                    }
                } catch (error) {
                    console.error("Translation failed:", error);
                    if (tooltip.classList.contains('visible') && tooltip.currentWord === deSentence) {
                        tooltip.textContent = deSentence; // Fallback to German text
                        positionTooltip();
                    }
                } finally {
                    target.classList.remove('loading');
                }
            }

            tooltip.currentWord = deSentence; // Reuse same property name for simplicity
            tooltip.classList.add('visible');
            positionTooltip();
        });

        sentence.addEventListener('mouseleave', () => {
            hideTimeout = setTimeout(() => {
                tooltip.classList.remove('visible');
                tooltip.currentWord = null;
            }, 100);
        });
    });

    // 4. Vocabulary Rendering
    if (storyData.vocabulary && storyData.vocabulary.length > 0) {
        document.getElementById('vocab-section').style.display = 'block';
        const vocabGrid = document.getElementById('vocab-grid');
        let vocabHTML = '';
        storyData.vocabulary.forEach(v => {
            vocabHTML += `
                <div class="vocab-item">
                    <span class="vocab-de">${v.de}</span>
                    <span class="vocab-en">${v.en}</span>
                </div>
            `;
        });
        vocabGrid.innerHTML = vocabHTML;
    }

    // 5. Quiz Logic
    if (storyData.quiz && storyData.quiz.length > 0) {
        document.getElementById('quiz-section').style.display = 'block';

        let currentQuestion = 0;
        const totalQuestions = storyData.quiz.length;
        let selectedAnswers = new Array(totalQuestions).fill(null);

        const qText = document.getElementById('quiz-question');
        const qOptions = document.getElementById('quiz-options');
        const qCurrent = document.getElementById('quiz-current');
        const qTotal = document.getElementById('quiz-total');
        const btnPrev = document.getElementById('quiz-prev');
        const btnNext = document.getElementById('quiz-next');

        qTotal.textContent = totalQuestions;

        const renderQuestion = () => {
            qCurrent.textContent = currentQuestion + 1;
            const q = storyData.quiz[currentQuestion];
            qText.textContent = q.question;

            const letters = ['A', 'B', 'C', 'D'];
            let optionsHTML = '';
            q.options.forEach((opt, idx) => {
                let statusClass = '';
                if (selectedAnswers[currentQuestion] !== null) {
                    if (idx === q.answer) statusClass = 'correct';
                    else if (idx === selectedAnswers[currentQuestion]) statusClass = 'wrong';
                }

                optionsHTML += `
                    <button class="quiz-option ${statusClass}" data-index="${idx}" ${selectedAnswers[currentQuestion] !== null ? 'disabled' : ''}>
                        ${opt}
                    </button>
                `;
            });
            qOptions.innerHTML = optionsHTML;

            btnPrev.disabled = currentQuestion === 0;
            btnNext.disabled = currentQuestion === totalQuestions - 1;

            // Attach click listeners if not yet answered
            if (selectedAnswers[currentQuestion] === null) {
                const optEls = qOptions.querySelectorAll('.quiz-option');
                optEls.forEach(el => {
                    el.addEventListener('click', () => {
                        selectedAnswers[currentQuestion] = parseInt(el.getAttribute('data-index'));
                        renderQuestion(); // re-render to show correct/wrong state
                    });
                });
            }
        };

        btnPrev.addEventListener('click', () => {
            if (currentQuestion > 0) {
                currentQuestion--;
                renderQuestion();
            }
        });

        btnNext.addEventListener('click', () => {
            if (currentQuestion < totalQuestions - 1) {
                currentQuestion++;
                renderQuestion();
            }
        });

        renderQuestion();
    }



});
