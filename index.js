function goodTime() {
    const now = new Date();
    const hour = now.getHours();

    const messages = {
        en: ["Good morning", "Good afternoon", "Good evening", "Good night"],
        fr: ["Bonjour", "Bon après-midi", "Bonsoir", "Bonne nuit"],
        es: ["¡Buenos días", "¡Buenas tardes", "¡Buenas noches", "¡Buenas noches"],
        de: ["Guten Morgen", "Guten Tag", "Guten Abend", "Gute Nacht"],
        zh: ["早上好！", "下午好！", "晚上好！", "晚安！"],
        jp: ["おはようございます！", "こんにちは！", "こんばんは！", "おやすみなさい！"],
        ru: ["Доброе утро", "Добрый день", "Добрый вечер", "Спокойной ночи"],
        it: ["Buongiorno", "Buon pomeriggio", "Buonasera", "Buonanotte"],
        pt: ["Bom dia", "Boa tarde", "Boa noite", "Boa noite"],
        ar: ["صباح الخير", "مساء الخير", "مساء الخير", "تصبح على خير"],
        hi: ["सुप्रभात", "नमस्कार", "शुभ संध्या", "शुभ रात्रि"],
        ko: ["좋은 아침", "안녕하세요", "안녕하세요", "안녕히 주무세요"],
        nl: ["Goedemorgen", "Goedemiddag", "Goedenavond", "Goedenacht"],
        sv: ["God morgon", "God eftermiddag", "God kväll", "God natt"],
        no: ["God morgen", "God ettermiddag", "God kveld", "God natt"],
        da: ["God morgen", "God eftermiddag", "God aften", "God nat"],
        fi: ["Hyvää huomenta", "Hyvää iltapäivää", "Hyvää iltaa", "Hyvää yötä"],
        tr: ["Günaydın", "Tünaydın", "İyi akşamlar", "İyi geceler"],
        he: ["בוקר טוב", "צהריים טובים", "ערב טוב", "לילה טוב"],
        pl: ["Dzień dobry", "Dzień dobry", "Dobry wieczór", "Dobranoc"],
        fa: ["صبح بخیر", "ظهر بخیر", "عصر بخیر", "شب بخیر"] // فارسی
    };

    function getMessage(lang) {
        if (hour < 5) {
            return messages[lang][3];
        } else if (hour < 12) {
            return messages[lang][0];
        } else if (hour < 16) {
            return messages[lang][1];
        } else if (hour < 20) {
            return messages[lang][2];
        } else {
            return messages[lang][3];
        }
    }

    return {
        en: () => getMessage('en'),
        fr: () => getMessage('fr'),
        es: () => getMessage('es'),
        de: () => getMessage('de'),
        zh: () => getMessage('zh'),
        jp: () => getMessage('jp'),
        ru: () => getMessage('ru'),
        it: () => getMessage('it'),
        pt: () => getMessage('pt'),
        ar: () => getMessage('ar'),
        hi: () => getMessage('hi'),
        ko: () => getMessage('ko'),
        nl: () => getMessage('nl'),
        sv: () => getMessage('sv'),
        no: () => getMessage('no'),
        da: () => getMessage('da'),
        fi: () => getMessage('fi'),
        tr: () => getMessage('tr'),
        he: () => getMessage('he'),
        pl: () => getMessage('pl'),
        fa: () => getMessage('fa')
    };
}

module.exports = goodTime();
