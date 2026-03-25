export type LocalizedString = string | { it: string; en: string; fr: string; };

export const site = {
    name: "Pizza & Co",
    tagline: {
        it: "Pizzeria artigianale a Lecce",
        en: "Artisan pizzeria in Lecce",
        fr: "Pizzeria artisanale à Lecce",
    } as LocalizedString,
    description: {
        it: "Pizza artigianale, ingredienti selezionati e atmosfera di quartiere.",
        en: "Artisan pizza, selected ingredients and a neighborhood atmosphere.",
        fr: "Pizza artisanale, ingrédients sélectionnés et atmosphère de quartier.",
    } as LocalizedString,
    phone: "393277157705",
    email: "ortona@live.it",
    address: "Via Giuseppe Libertini 39A, Lecce",
    mapsUrl: "https://maps.app.goo.gl/1EKvCqQosZUBWVR49",
    mapsEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6081.132692468888!2d18.16501547618984!3d40.351964971450094!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x13442ee087e27f21%3A0x6605c4b8100744db!2sPizza%26Co.!5e0!3m2!1sit!2sit!4v1773422677262!5m2!1sit!2sit",
    instagramUrl: "https://www.instagram.com/pizzaeco.98/",
    facebookUrl: "https://www.facebook.com/PizzAndCoLecce",
    tiktokUrl: "https://www.tiktok.com/@pizzandco.98",
    openingHours: {
        it: [
            "Lunedì - Domenica",
            "11:30 - 14:30 | 19:00 - 22:30"
        ],
        en: [
            "Monday - Sunday",
            "11:30 - 14:30 | 19:00 - 22:30"
        ],
        fr: [
            "Lundi - Dimanche",
            "11:30 - 14:30 | 19:00 - 22:30"
        ],
    } as Record<'it' | 'en' | 'fr', string[]>,
};
