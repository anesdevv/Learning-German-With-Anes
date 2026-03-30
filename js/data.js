// js/data.js
const STORIES = {
    "friends": {
        title: "MY FRIENDS",
        level: "A1",
        description: "Natalie describes her closest friends. Can you understand the text?",
        image: "https://picsum.photos/seed/friends/600/400",
        paragraphs: [
            "Ich habe auch viele Freunde, mit denen ich gerne Zeit verbringe. Einer meiner besten Freunde heißt James. Er ist sehr lustig und immer bereit, neue Dinge auszuprobieren. Wir gehen oft ins Kino oder spielen Videospiele zusammen.",
            "Mein Freund Tom ist auch ein guter Freund von mir. Er ist sehr sportlich und wir spielen oft Fußball zusammen. Er ist auch sehr klug und hilft mir manchmal bei meinen Hausaufgaben.",
            "Ich habe auch eine beste Freundin namens Emily. Wir kennen uns schon seit der Grundschule und machen immer noch viel zusammen. Wir mögen dieselben Dinge wie Filme und Bücher, und wir reden oft über unsere Lieblingsstars.",
            "Ich habe auch noch andere Freunde, aber das sind meine besten Freunde. Wir haben immer viel Spaß zusammen und ich mag sie alle sehr."
        ],
        quiz: [
            { question: "Wie heißt einer der besten Freunde?", options: ["Peter", "James", "Lukas"], answer: 1 },
            { question: "Was spielt Tom gerne?", options: ["Tennis", "Basketball", "Fußball"], answer: 2 },
            { question: "Über wen redet Natalie oft mit Emily?", options: ["Über Nachbarn", "Über Lehrer", "Über Lieblingsstars"], answer: 2 }
        ],
        vocabulary: [
            { de: "verbringen", en: "to spend (time)" },
            { de: "ausprobieren", en: "to try out" },
            { de: "sportlich", en: "athletic" },
            { de: "die Grundschule", en: "elementary school" },
            { de: "dieselben", en: "the same" },
            { de: "die Lieblingsstars", en: "favorite celebrities" }
        ]
    },
    "family": {
        title: "MY FAMILY",
        level: "A1",
        description: "Tim describes his family members. Meet his parents and siblings.",
        image: "https://picsum.photos/seed/family/600/400",
        paragraphs: [
            "Hallo, ich bin Tim und das ist meine Familie. Wir sind eine große Familie und wohnen in Berlin. Mein Vater heißt Michael und meine Mutter heißt Anna.",
            "Ich habe eine Schwester und einen Bruder. Meine Schwester ist jünger als ich. Sie geht noch zur Schule und liebt es, Bilder zu malen.",
            "Mein Bruder ist älter. Er studiert an der Universität und spielt Gitarre in einer Band.",
            "Am Wochenende essen wir oft alle zusammen. Meine Mutter kocht sehr gut und wir erzählen uns Geschichten aus der Woche."
        ],
        quiz: [
            { question: "Wo wohnt Tims Familie?", options: ["In München", "In Berlin", "In Hamburg"], answer: 1 },
            { question: "Was macht Tims Bruder?", options: ["Er geht zur Schule", "Er arbeitet", "Er studiert"], answer: 2 },
            { question: "Wann isst die Familie oft zusammen?", options: ["Am Wochenende", "Jeden Tag", "Am Montag"], answer: 0 }
        ],
        vocabulary: [
            { de: "die Familie", en: "the family" },
            { de: "wohnen", en: "to live" },
            { de: "jünger", en: "younger" },
            { de: "malen", en: "to paint" },
            { de: "die Universität", en: "the university" },
            { de: "zusammen", en: "together" }
        ]
    },
    "morning": {
        title: "MORNING ROUTINE",
        level: "A1",
        description: "Follow Anna's typical morning routine before work.",
        image: "https://picsum.photos/seed/morning/600/400",
        paragraphs: [
            "Jeden Morgen wache ich um sieben Uhr auf. Das ist manchmal sehr früh für mich. Danach stehe ich auf und trinke ein Glas Wasser.",
            "Ich gehe ins Badezimmer und putze mir die Zähne. Dann wasche ich mein Gesicht und kämme meine Haare.",
            "Zum Frühstück esse ich meistens ein Brötchen mit Marmelade und trinke einen großen Kaffee. Ohne Kaffee bin ich müde.",
            "Ich ziehe mich an und packe meine Tasche. Um acht Uhr gehe ich aus dem Haus und fahre mit dem Bus zur Arbeit."
        ],
        quiz: [
            { question: "Wann wacht Anna auf?", options: ["Um acht Uhr", "Um sechs Uhr", "Um sieben Uhr"], answer: 2 },
            { question: "Was isst Anna meistens zum Frühstück?", options: ["Müsli", "Ein Brötchen mit Marmelade", "Ein Ei"], answer: 1 },
            { question: "Wie fährt Anna zur Arbeit?", options: ["Mit dem Auto", "Mit dem Zug", "Mit dem Bus"], answer: 2 }
        ],
        vocabulary: [
            { de: "aufwachen", en: "to wake up" },
            { de: "das Badezimmer", en: "the bathroom" },
            { de: "die Zähne putzen", en: "to brush teeth" },
            { de: "das Frühstück", en: "the breakfast" },
            { de: "müde", en: "tired" },
            { de: "die Arbeit", en: "the work" }
        ]
    },
    "shopping": {
        title: "GOING SHOPPING",
        level: "A1",
        description: "Lukas goes to the supermarket to buy ingredients for dinner.",
        image: "https://picsum.photos/seed/shopping/600/400",
        paragraphs: [
            "Heute Abend möchte ich für meine Freunde kochen. Deshalb gehe ich in den Supermarkt. Ich brauche viele Dinge.",
            "Zuerst kaufe ich Gemüse. Ich brauche Tomaten, Zwiebeln und etwas Knoblauch. Die Karotten sind heute im Angebot.",
            "Dann gehe ich zur Bäckerei und kaufe frisches Brot. Für das Hauptgericht brauche ich auch Nudeln und Käse.",
            "An der Kasse bezahle ich mit meiner Karte. Nun habe ich alles und kann nach Hause gehen."
        ],
        quiz: [
            { question: "Warum geht Lukas in den Supermarkt?", options: ["Er möchte kochen", "Er hat Hunger", "Er trifft Freunde"], answer: 0 },
            { question: "Was kauft er zuerst?", options: ["Brot", "Gemüse", "Käse"], answer: 1 },
            { question: "Wie bezahlt Lukas an der Kasse?", options: ["Mit Bargeld", "Mit dem Handy", "Mit seiner Karte"], answer: 2 }
        ],
        vocabulary: [
            { de: "der Supermarkt", en: "the supermarket" },
            { de: "das Gemüse", en: "the vegetables" },
            { de: "im Angebot", en: "on sale" },
            { de: "frisch", en: "fresh" },
            { de: "die Kasse", en: "the checkout/register" },
            { de: "bezahlen", en: "to pay" }
        ]
    },
    "weekend": {
        title: "THE WEEKEND",
        level: "A1",
        description: "Discover what Maria and her dog do on a typical Saturday.",
        image: "https://picsum.photos/seed/weekend/600/400",
        paragraphs: [
            "Endlich ist Wochenende! Am Samstag schlafe ich immer lange. Mein Hund Max freut sich, wenn ich aufwache.",
            "Wir gehen dann zusammen in den Park spazieren. Max läuft gerne schnell und spielt mit anderen Hunden.",
            "Am Nachmittag treffe ich meine Freundin im Café. Wir essen ein Stück Kuchen und trinken Tee.",
            "Am Abend lese ich ein schönes Buch auf dem Sofa. So entspanne ich mich am besten."
        ],
        quiz: [
            { question: "Was macht Maria am Samstagmorgen?", options: ["Sie arbeitet", "Sie schläft lange", "Sie macht Sport"], answer: 1 },
            { question: "Wen trifft Maria am Nachmittag?", options: ["Ihre Freundin", "Ihre Mutter", "Ihren Bruder"], answer: 0 },
            { question: "Wo entspannt sich Maria am Abend?", options: ["Im Park", "Im Café", "Auf dem Sofa"], answer: 2 }
        ],
        vocabulary: [
            { de: "das Wochenende", en: "the weekend" },
            { de: "spazieren gehen", en: "to go for a walk" },
            { de: "der Nachmittag", en: "the afternoon" },
            { de: "treffen", en: "to meet" },
            { de: "der Abend", en: "the evening" },
            { de: "entspannen", en: "to relax" }
        ]
    },
    "cafe": {
        title: "AT THE CAFE",
        level: "A1",
        description: "Sophie visits her favorite cafe to relax and enjoy a warm drink.",
        image: "https://picsum.photos/seed/cafe/600/400",
        paragraphs: [
            "Das Wetter ist heute kalt und windig. Deshalb gehe ich in mein Lieblingscafé in der Innenstadt.",
            "Dort ist es schön warm. Ich sitze gerne am Fenster und beobachte die Leute auf der Straße.",
            "Die Kellnerin bringt mir eine heiße Schokolade und ein Stück Apfelkuchen. Der Kuchen schmeckt fantastisch.",
            "Ich habe ein neues Buch dabei. Ich lese zwei Stunden lang und vergesse die Zeit komplett."
        ],
        quiz: [
            { question: "Wie ist das Wetter heute?", options: ["Sonnig", "Kalt und windig", "Heiß"], answer: 1 },
            { question: "Wo sitzt Sophie gerne?", options: ["Draußen", "Am Fenster", "An der Bar"], answer: 1 },
            { question: "Was trinkt sie?", options: ["Kaffee", "Tee", "Heiße Schokolade"], answer: 2 }
        ],
        vocabulary: [
            { de: "die Innenstadt", en: "the downtown / city center" },
            { de: "beobachten", en: "to observe / watch" },
            { de: "die Kellnerin", en: "the waitress" },
            { de: "fantastisch", en: "fantastic" },
            { de: "vergessen", en: "to forget" }
        ]
    },
    "dog": {
        title: "A NEW PET",
        level: "A1",
        description: "Jonas gets a new puppy and learns how to take care of it.",
        image: "https://picsum.photos/seed/puppydog/600/400",
        paragraphs: [
            "Jonas ist sehr glücklich. Er hat gestern einen kleinen Hund bekommen. Der Hund ist noch ein Welpe und sehr süß.",
            "Sein Name ist Bruno. Er hat braune Ohren und einen schwarzen Punkt auf der Nase.",
            "Bruno spielt den ganzen Tag. Er hat einen roten Ball und bringt ihn immer wieder zurück zu Jonas.",
            "Am Abend ist Bruno sehr müde. Er schläft in seinem neuen Körbchen neben dem Bett von Jonas ein."
        ],
        quiz: [
            { question: "Wann hat Jonas den Hund bekommen?", options: ["Heute", "Gestern", "Letzte Woche"], answer: 1 },
            { question: "Welche Farbe hat der Punkt auf Brunos Nase?", options: ["Braun", "Rot", "Schwarz"], answer: 2 },
            { question: "Wo schläft Bruno?", options: ["Auf dem Sofa", "In seinem Körbchen", "Unter dem Tisch"], answer: 1 }
        ],
        vocabulary: [
            { de: "der Welpe", en: "the puppy" },
            { de: "die Ohren", en: "the ears" },
            { de: "der Punkt", en: "the spot" },
            { de: "zurück", en: "back" },
            { de: "das Körbchen", en: "the small basket / dog bed" }
        ]
    },
    "school": {
        title: "SCHOOL LIFE",
        level: "A1",
        description: "Felix describes his first day at a new secondary school.",
        image: "https://picsum.photos/seed/school/600/400",
        paragraphs: [
            "Heute ist mein erster Tag an der neuen Schule. Ich bin ein bisschen nervös, aber auch sehr aufgeregt.",
            "Mein neues Klassenzimmer ist groß und hell. Es gibt viele Tische und Stühle für die neuen Schüler.",
            "Meine erste Stunde ist Mathematik. Unser Lehrer heißt Herr Müller und er ist sehr freundlich.",
            "In der Pause spreche ich mit zwei Jungen aus meiner Klasse. Sie spielen beide gerne Tennis. Wir wollen uns bald am Nachmittag treffen."
        ],
        quiz: [
            { question: "Wie fühlt sich Felix am ersten Tag?", options: ["Wütend", "Nervös und aufgeregt", "Krank"], answer: 1 },
            { question: "Wie ist das Klassenzimmer?", options: ["Groß und hell", "Klein und dunkel", "Kalt"], answer: 0 },
            { question: "Mit wem spricht er in der Pause?", options: ["Mit seinem Bruder", "Mit dem Lehrer", "Mit zwei Jungen"], answer: 2 }
        ],
        vocabulary: [
            { de: "nervös", en: "nervous" },
            { de: "aufgeregt", en: "excited" },
            { de: "das Klassenzimmer", en: "the classroom" },
            { de: "die Pause", en: "the break" },
            { de: "bald", en: "soon" }
        ]
    },
    "apartment": {
        title: "MY NEW APARTMENT",
        level: "A2",
        description: "Leon talks about moving into his new apartment and decorating it. (Coming Soon)",
        image: "https://picsum.photos/seed/apartment/600/400",
        paragraphs: ["Die Geschichte ist derzeit nicht verfügbar. Bitte schauen Sie später wieder vorbei. (Content coming soon.)"],
        quiz: [],
        vocabulary: [],
        isComingSoon: true
    },
    "fruit": {
        title: "FRUIT & VEGETABLES",
        level: "A2",
        description: "Learn food vocabulary with this simple dialogue. (Coming Soon)",
        image: "https://picsum.photos/seed/fruitveg/600/400",
        paragraphs: ["Die Geschichte ist derzeit nicht verfügbar. Bitte schauen Sie später wieder vorbei. (Content coming soon.)"],
        quiz: [],
        vocabulary: [],
        isComingSoon: true
    },
    "smartphones": {
        title: "SMARTPHONES AND US",
        level: "B1",
        description: "A look into how smartphones have changed our daily lives and habits. (Coming Soon)",
        image: "https://picsum.photos/seed/smartphones/600/400",
        paragraphs: ["Die Geschichte ist derzeit nicht verfügbar. Bitte schauen Sie später wieder vorbei. (Content coming soon.)"],
        quiz: [],
        vocabulary: [],
        isComingSoon: true
    }
};
