type Language = "it" | "en" | "fr";

type SeoEntry = {
  title: string;
  description: string;
};

export const seo = {
  home: {
    it: {
      title: "Pizza & Co - Pizzeria napoletana al trancio, Lecce (Le)",
      description: "Pizza & Co, pizzeria napoletana al trancio nel centro storico di Lecce. Pizze intere, pucce, frise, pizza fritta e proposte vegetariane.",
    },
    en: {
      title: "Pizza & Co - Neapolitan Pizza by the Slice in Lecce",
      description: "Pizza & Co is a Neapolitan pizzeria in Lecce's historic centre, serving pizza by the slice, whole pizzas, pucce, frise and fried pizza.",
    },
    fr: {
      title: "Pizza & Co - Pizzeria napolitaine à la part à Lecce",
      description: "Pizza & Co est une pizzeria napolitaine dans le centre historique de Lecce: pizzas à la part, pizzas entières, pucce, frise et pizzas frites.",
    },
  },
  menu: {
    it: {
      title: "Menu pizze al trancio, pucce e frise a Lecce | Pizza & Co",
      description: "Scopri il menu di Pizza & Co a Lecce: pizze napoletane al trancio e intere, pucce salentine, frise, pizze fritte, birre e proposte vegetariane.",
    },
    en: {
      title: "Pizza, Pucce and Frise Menu in Lecce | Pizza & Co",
      description: "Explore the Pizza & Co menu in Lecce: Neapolitan pizza by the slice and whole, Salento pucce, frise, fried pizza, beer and vegetarian options.",
    },
    fr: {
      title: "Menu pizzas, pucce et frise à Lecce | Pizza & Co",
      description: "Découvrez le menu de Pizza & Co à Lecce: pizzas napolitaines à la part ou entières, pucce, frise, pizzas frites, bières et options végétariennes.",
    },
  },
  story: {
    it: {
      title: "La storia di Pizza & Co, pizzeria napoletana a Lecce",
      description: "Scopri la storia di Pizza & Co, la passione familiare e la tradizione che animano la nostra pizzeria napoletana nel centro storico di Lecce.",
    },
    en: {
      title: "Our Story | Pizza & Co, Neapolitan Pizzeria in Lecce",
      description: "Discover the family story, passion and tradition behind Pizza & Co, our Neapolitan pizzeria in the historic centre of Lecce.",
    },
    fr: {
      title: "Notre histoire | Pizza & Co, pizzeria à Lecce",
      description: "Découvrez l'histoire familiale, la passion et la tradition de Pizza & Co, notre pizzeria napolitaine dans le centre historique de Lecce.",
    },
  },
  location: {
    it: {
      title: "Pizzeria nel centro storico di Lecce | Pizza & Co",
      description: "Trova Pizza & Co in Via Giuseppe Libertini 39A, nel centro storico di Lecce. Consulta la mappa e gli orari di apertura a pranzo e a cena.",
    },
    en: {
      title: "Pizzeria in Lecce Historic Centre | Pizza & Co",
      description: "Find Pizza & Co at Via Giuseppe Libertini 39A in Lecce's historic centre. View the map and our lunch and dinner opening hours.",
    },
    fr: {
      title: "Pizzeria dans le centre historique de Lecce | Pizza & Co",
      description: "Retrouvez Pizza & Co Via Giuseppe Libertini 39A, dans le centre historique de Lecce. Consultez la carte et nos horaires midi et soir.",
    },
  },
  contacts: {
    it: {
      title: "Contatti e orari della pizzeria a Lecce | Pizza & Co",
      description: "Contatta Pizza & Co e consulta indirizzo e orari della pizzeria in Via Giuseppe Libertini 39A, nel centro storico di Lecce.",
    },
    en: {
      title: "Contact and Opening Hours in Lecce | Pizza & Co",
      description: "Contact Pizza & Co and find the address and opening hours of our pizzeria at Via Giuseppe Libertini 39A in Lecce's historic centre.",
    },
    fr: {
      title: "Contact et horaires à Lecce | Pizza & Co",
      description: "Contactez Pizza & Co et consultez l'adresse et les horaires de notre pizzeria Via Giuseppe Libertini 39A, dans le centre historique de Lecce.",
    },
  },
} satisfies Record<string, Record<Language, SeoEntry>>;

export function getPageSeo(page: keyof typeof seo, lang: Language): SeoEntry {
  return seo[page][lang];
}
