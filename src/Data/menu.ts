export type MenuCategory =
  | "pucce"
  | "friseddhra"
  | "pizze fritte"
  | "pizze"
  | "birre"
  | "birre-artigianali"
  | "bevande";

export type LocalizedString = string | { it: string; en: string; fr: string; };

export type MenuItem = {
  id: string;
  name: LocalizedString;
  description: LocalizedString;
  price: number | { trancio: number; intera: number };
  category: MenuCategory;
  icon?: string;
  image?: string;
  modes?: ("lunch" | "dinner")[];
};

export const menuItems: MenuItem[] = [
  {
    id: "capoca",
    name: "Capoca",
    description: structuredClone({
      it: "Mozzarella di bufala, Prosciutto crudo, Pomodoro, Rucola",
      en: "Buffalo mozzarella, Parma ham, Tomato, Rocket",
      fr: "Mozzarella di bufala, Jambon cru, Tomate, Roquette",
    }),
    price: 10,
    category: "pucce",
    modes: ["lunch"],
  },
  {
    id: "dumata",
    name: "Dumata",
    description: structuredClone({
      it: "Spianata calabrese, Carciofi, Mozzarella, Pomodoro, Rucola",
      en: "Spicy Calabrian salami, Artichokes, Mozzarella, Tomato, Rocket",
      fr: "Salami calabrais piquant, Artichauts, Mozzarella, Tomate, Roquette",
    }),
    price: 10,
    category: "pucce",
    modes: ["lunch"],
    icon: "/icons/pepper.jpg?v=2",
  },
  {
    id: "sana_sana",
    name: "Sana Sana",
    description: structuredClone({
      it: "Pomodoro, Mozzarella, Basilico",
      en: "Tomato, Mozzarella, Basil",
      fr: "Tomate, Mozzarella, Basilic",
    }),
    price: 6.5,
    category: "pucce",
    modes: ["lunch"],
    icon: "/icons/veg.jpeg?v=2",
  },
  {
    id: "grecoromana",
    name: "Grecoromana",
    description: structuredClone({
      it: "Porchetta, Pomodoro, Cipolla, Tzaziki",
      en: "Roast pork, Tomato, Onion, Tzatziki",
      fr: "Porc rôti, Tomate, Oignon, Tzatziki",
    }),
    price: 9.5,
    category: "pucce",
    modes: ["lunch"],
  },
  {
    id: "mescia",
    name: "Mescia",
    description: structuredClone({
      it: "Mortadella, Scamorza Affumicata, Pomodori secchi",
      en: "Mortadella, Smoked Scamorza, Sun-dried tomatoes",
      fr: "Mortadelle, Scamorza fumée, Tomates séchées",
    }),
    price: 9.5,
    category: "pucce",
    modes: ["lunch"],
  },
  {
    id: "preciata",
    name: "Preciata",
    description: structuredClone({
      it: "Tonno, Pomodoro, Mozzarella, Capperi, Rucola",
      en: "Tuna, Tomato, Mozzarella, Capers, Rocket",
      fr: "Thon, Tomate, Mozzarella, Câpres, Roquette",
    }),
    price: 9.5,
    category: "pucce",
    modes: ["lunch"],
  },
  {
    id: "menamè",
    name: "Menamè",
    description: structuredClone({
      it: "Mortadella, Burrata, Pesto di basilico, Tarallo napoletano sbriciolato",
      en: "Mortadella, Burrata, Basil pesto, Crumbled Neapolitan tarallo",
      fr: "Mortadelle, Burrata, Pesto au basilic, Tarallo napolitain émietté",
    }),
    price: 11.5,
    category: "pucce",
    modes: ["lunch"],
  },
  {
    id: "picciusa",
    name: "Picciusa",
    description: structuredClone({
      it: "Bresaola, Mozzarella, Pomodoro, Carciofi, Grana, Rucola",
      en: "Bresaola, Mozzarella, Tomato, Artichokes, Grana Padano, Rocket",
      fr: "Bresaola, Mozzarella, Tomate, Artichauts, Grana Padano, Roquette",
    }),
    price: 12,
    category: "pucce",
    modes: ["lunch"],
  },
  {
    id: "semplice",
    name: structuredClone({ it: "Semplice", en: "Simple", fr: "Simple" }),
    description: structuredClone({
      it: "Pomodorini, Rucola",
      en: "Cherry tomatoes, Rocket",
      fr: "Tomates cerises, Roquette",
    }),
    price: 6,
    category: "friseddhra",
    modes: ["lunch"],
  },
  {
    id: "salentina",
    name: "Salentina",
    description: structuredClone({
      it: "Pomodorini, Tonno, Capperi, Rucola",
      en: "Cherry tomatoes, Tuna, Capers, Rocket",
      fr: "Tomates cerises, Thon, Câpres, Roquette",
    }),
    price: 8,
    category: "friseddhra",
    modes: ["lunch"],
  },
  {
    id: "pugliese",
    name: "Pugliese",
    description: structuredClone({
      it: "Pomodorini, Burrata, Pesto di basilico, Rucola",
      en: "Cherry tomatoes, Burrata, Basil pesto, Rocket",
      fr: "Tomates cerises, Burrata, Pesto au basilic, Roquette",
    }),
    price: 10,
    category: "friseddhra",
    modes: ["lunch"],
    icon: "/icons/veg.jpeg?v=2",
  },
  {
    id: "grica",
    name: "Grica",
    description: structuredClone({
      it: "Pomodorini, Peperoni, Olive, Capperi, Cipolla, Feta, Rucola",
      en: "Cherry tomatoes, Peppers, Olives, Capers, Onion, Feta, Rocket",
      fr: "Tomates cerises, Poivrons, Olives, Câpres, Oignon, Feta, Roquette",
    }),
    price: 10,
    category: "friseddhra",
    modes: ["lunch"],
    icon: "/icons/veg.jpeg?v=2",
  },
  {
    id: "uccio",
    name: "Uccio",
    description: structuredClone({
      it: "Pomodorini, Mozzarella, Capocollo, Rucola",
      en: "Cherry tomatoes, Mozzarella, Capocollo, Rocket",
      fr: "Tomates cerises, Mozzarella, Capocollo, Roquette",
    }),
    price: 8.5,
    category: "friseddhra",
    modes: ["lunch"],
  },
  {
    id: "montanara",
    name: "Montanara",
    description: structuredClone({
      it: "Salsa di pomodoro, Mozzarella, Grana, Basilico",
      en: "Tomato sauce, Mozzarella, Grana Padano, Basil",
      fr: "Sauce tomate, Mozzarella, Grana Padano, Basilic",
    }),
    price: 6.5,
    category: "pizze fritte",
    modes: ["lunch"],
    icon: "/icons/veg.jpeg?v=2",
  },
  {
    id: "nennella",
    name: "Nennella",
    description: structuredClone({
      it: "Pomodorini, Burrata, Grana, Basilico",
      en: "Cherry tomatoes, Burrata, Grana Padano, Basil",
      fr: "Tomates cerises, Burrata, Grana Padano, Basilic",
    }),
    price: 9,
    category: "pizze fritte",
    modes: ["lunch"],
    icon: "/icons/veg.jpeg?v=2",
  },
  {
    id: "maradona",
    name: "Maradona",
    description: structuredClone({
      it: "Salsa di pomodoro, Mozzarella di bufala, Prosciutto Crudo, Grana, Basilico",
      en: "Tomato sauce, Buffalo mozzarella, Parma ham, Grana Padano, Basil",
      fr: "Sauce tomate, Mozzarella di bufala, Jambon cru, Grana Padano, Basilic",
    }),
    price: 9.5,
    category: "pizze fritte",
    modes: ["lunch"],
  },
  {
    id: "spaccanapoli",
    name: "Spaccanapoli",
    description: structuredClone({
      it: "Salsa di pomodoro, Mozzarella di bufala, Salame Piccante, Grana, Basilico",
      en: "Tomato sauce, Buffalo mozzarella, Spicy salami, Grana Padano, Basil",
      fr: "Sauce tomate, Mozzarella di bufala, Salami piquant, Grana Padano, Basilic",
    }),
    price: 9,
    category: "pizze fritte",
    modes: ["lunch"],
    icon: "/icons/pepper.jpg?v=2",
  },
  {
    id: "coca-cola",
    name: "Coca-Cola",
    description: structuredClone({ it: "Lattina 33cl", en: "Can 33cl", fr: "Canette 33cl" }),
    price: 2.5,
    category: "bevande",
    modes: ["lunch", "dinner"],
  },
  {
    id: "coca-cola",
    name: "Coca-Cola",
    description: structuredClone({ it: "Bottiglia 33cl", en: "Bottle 33cl", fr: "Bouteille 33cl" }),
    price: 3,
    category: "bevande",
    modes: ["lunch", "dinner"],
  },
  {
    id: "fanta",
    name: "Fanta",
    description: structuredClone({ it: "Lattina 33cl", en: "Can 33cl", fr: "Canette 33cl" }),
    price: 2.5,
    category: "bevande",
    modes: ["lunch", "dinner"],
  },
  {
    id: "fanta",
    name: "Fanta",
    description: structuredClone({ it: "Bottiglia 33cl", en: "Bottle 33cl", fr: "Bouteille 33cl" }),
    price: 3,
    category: "bevande",
    modes: ["lunch", "dinner"],
  },
  {
    id: "sprite",
    name: "Sprite",
    description: structuredClone({ it: "Lattina 33cl", en: "Can 33cl", fr: "Canette 33cl" }),
    price: 2.5,
    category: "bevande",
    modes: ["lunch", "dinner"],
  },
  {
    id: "sprite",
    name: "Sprite",
    description: structuredClone({ it: "Bottiglia 33cl", en: "Bottle 33cl", fr: "Bouteille 33cl" }),
    price: 3,
    category: "bevande",
    modes: ["lunch", "dinner"],
  },
  {
    id: "the_pesca",
    name: structuredClone({ it: "Thè Pesca", en: "Peach Tea", fr: "Thé à la Pêche" }),
    description: structuredClone({ it: "Lattina 33cl", en: "Can 33cl", fr: "Canette 33cl" }),
    price: 3,
    category: "bevande",
    modes: ["lunch", "dinner"],
  },
  {
    id: "the_limone",
    name: structuredClone({ it: "Thè Limone", en: "Lemon Tea", fr: "Thé au Citron" }),
    description: structuredClone({ it: "Lattina 33cl", en: "Can 33cl", fr: "Canette 33cl" }),
    price: 3,
    category: "bevande",
    modes: ["lunch", "dinner"],
  },
  {
    id: "the",
    name: structuredClone({ it: "Thè", en: "Tea", fr: "Thé" }),
    description: structuredClone({ it: "Bottiglia 33cl", en: "Bottle 33cl", fr: "Bouteille 33cl" }),
    price: 4,
    category: "bevande",
    modes: ["lunch", "dinner"],
  },
  {
    id: "chinotto",
    name: "Chinotto",
    description: structuredClone({ it: "Lattina 33cl", en: "Can 33cl", fr: "Canette 33cl" }),
    price: 2.5,
    category: "bevande",
    modes: ["lunch", "dinner"],
  },
  {
    id: "chinotto",
    name: "Chinotto",
    description: structuredClone({ it: "Bottiglia", en: "Bottle", fr: "Bouteille" }),
    price: 3.5,
    category: "bevande",
    modes: ["lunch", "dinner"],
  },
  {
    id: "acqua",
    name: structuredClone({ it: "Acqua", en: "Water", fr: "Eau" }),
    description: structuredClone({ it: "Bottiglia 50cl", en: "Bottle 50cl", fr: "Bouteille 50cl" }),
    price: 1,
    category: "bevande",
    modes: ["lunch", "dinner"],
  },
  {
    id: "limonata",
    name: "Limonata Artigianale Chiurazzi",
    description: structuredClone({ it: "Bottiglia", en: "Bottle", fr: "Bouteille" }),
    price: 6,
    category: "bevande",
    modes: ["lunch", "dinner"],
    icon: "/icons/gassosa_etichetta.png?v=2",
  },
  {
    id: "aranciata",
    name: "Aranciata Artigianale Chiurazzi",
    description: structuredClone({ it: "Bottiglia", en: "Bottle", fr: "Bouteille" }),
    price: 6,
    category: "bevande",
    modes: ["lunch", "dinner"],
    icon: "/icons/gassosa_etichetta.png?v=2",
  },
  {
    id: "gassosa",
    name: "Gassosa Artigianale Chiurazzi",
    description: structuredClone({ it: "Bottiglia", en: "Bottle", fr: "Bouteille" }),
    price: 6,
    category: "bevande",
    modes: ["lunch", "dinner"],
    icon: "/icons/gassosa_etichetta.png?v=2",
  },
  {
    id: "laurisia",
    name: "Laurisia",
    description: structuredClone({ it: "Bottiglia", en: "Bottle", fr: "Bouteille" }),
    price: 4.5,
    category: "bevande",
    modes: ["lunch", "dinner"],
  },
  {
    id: "peroni",
    name: "Peroni",
    description: structuredClone({ it: "Birra chiara 33cl", en: "Lager beer 33cl", fr: "Bière blonde 33cl" }),
    price: 2.5,
    category: "birre",
    modes: ["lunch", "dinner"],
  },
  {
    id: "nastro_azzurro",
    name: "Nastro Azzurro",
    description: structuredClone({ it: "Birra chiara 33cl", en: "Lager beer 33cl", fr: "Bière blonde 33cl" }),
    price: 3.5,
    category: "birre",
    modes: ["lunch", "dinner"],
  },
  {
    id: "ceres",
    name: "Ceres",
    description: structuredClone({ it: "Birra chiara 33cl", en: "Lager beer 33cl", fr: "Bière blonde 33cl" }),
    price: 4.5,
    category: "birre",
    modes: ["lunch", "dinner"],
  },
  {
    id: "menabrea",
    name: "Menabrea",
    description: structuredClone({ it: "Birra chiara 33cl", en: "Lager beer 33cl", fr: "Bière blonde 33cl" }),
    price: 5,
    category: "birre",
    modes: ["lunch", "dinner"],
  },
  {
    id: "tennens",
    name: "Tennens",
    description: structuredClone({ it: "Birra chiara 33cl", en: "Lager beer 33cl", fr: "Bière blonde 33cl" }),
    price: 4.5,
    category: "birre",
    modes: ["lunch", "dinner"],
  },
  {
    id: "icnusa",
    name: structuredClone({ it: "Icnusa Non Filtrata", en: "Unfiltered Icnusa", fr: "Icnusa Non Filtrée" }),
    description: structuredClone({ it: "Birra chiara 55cl", en: "Lager beer 55cl", fr: "Bière blonde 55cl" }),
    price: 6,
    category: "birre",
    modes: ["lunch", "dinner"],
  },
  {
    id: "raffo",
    name: "Raffo",
    description: structuredClone({ it: "Birra chiara 50cl", en: "Lager beer 50cl", fr: "Bière blonde 50cl" }),
    price: 6,
    category: "birre",
    modes: ["lunch", "dinner"],
  },
  {
    id: "messina",
    name: "Messina",
    description: structuredClone({ it: "Birra chiara 55cl", en: "Lager beer 55cl", fr: "Bière blonde 55cl" }),
    price: 6,
    category: "birre",
    modes: ["lunch", "dinner"],
  },
  {
    id: "becks",
    name: "Beck's",
    description: structuredClone({ it: "Birra chiara 33cl", en: "Lager beer 33cl", fr: "Bière blonde 33cl" }),
    price: 4.5,
    category: "birre",
    modes: ["lunch", "dinner"],
  },
  {
    id: "peroni-capri",
    name: "Peroni Capri",
    description: structuredClone({ it: "Birra chiara 33cl", en: "Lager beer 33cl", fr: "Bière blonde 33cl" }),
    price: 5,
    category: "birre",
    modes: ["lunch", "dinner"],
  },
  {
    id: "peroni-lemon",
    name: "Peroni Lemon",
    description: structuredClone({ it: "Birra chiara 33cl", en: "Lager beer 33cl", fr: "Bière blonde 33cl" }),
    price: 4,
    category: "birre",
    modes: ["lunch", "dinner"],
  },
  {
    id: "agricola",
    name: "Agricola",
    description: structuredClone({
      it: "Birra di colore oro chiaro in stile Lager in bassa fermentazione.",
      en: "Light gold colored Lager style bottom-fermented beer.",
      fr: "Bière de type Lager de fermentation basse à la robe dorée claire.",
    }),
    price: 6,
    category: "birre-artigianali",
    modes: ["lunch", "dinner"],
  },
  {
    id: "agricola_scura",
    name: "Agricola Scura",
    description: structuredClone({
      it: "Birra di colore ambrato carico in stile Red Lager in bassa fermentazione.",
      en: "Deep amber colored Red Lager style bottom-fermented beer.",
      fr: "Bière de type Red Lager de fermentation basse à la robe ambrée foncée.",
    }),
    price: 6.5,
    category: "birre-artigianali",
    modes: ["lunch", "dinner"],
  },
  {
    id: "nuda_e_cruda",
    name: "Nuda e Cruda",
    description: structuredClone({
      it: "Birra di colore dorato brillante in stile pils leggera dal gusto pulito.",
      en: "Brilliant golden colored light pilsner style beer with a clean taste.",
      fr: "Bière de type pils légère à la robe dorée brillante et au goût net.",
    }),
    price: 6.5,
    category: "birre-artigianali",
    modes: ["lunch", "dinner"],
  },
  {
    id: "tipa",
    name: "Tipa",
    description: structuredClone({
      it: "Ipa dal colore opalescente. fresca, beverina e accattivante. Una birra da bere in ogni momento della giornata.",
      en: "Opalescent colored IPA. Fresh, easy-drinking and captivating. A beer to drink at any time of the day.",
      fr: "IPA à la robe opalescente. Fraîche, désaltérante et captivante. Une bière à boire à tout moment de la journée.",
    }),
    price: 7,
    category: "birre-artigianali",
    modes: ["lunch", "dinner"],
  },
  {
    id: "chiara",
    name: "Chiara",
    description: structuredClone({
      it: "Gia dal nome la dice lunga. Fresca, richiama le birre bianche di frumento.",
      en: "The name says it all. Fresh, reminiscent of white wheat beers.",
      fr: "Le nom en dit long. Fraîche, rappelant les bières blanches au blé.",
    }),
    price: 6.5,
    category: "birre-artigianali",
    modes: ["lunch", "dinner"],
  },

  {
    id: "pizza-capoburra",
    name: "Capoburra",
    description: structuredClone({
      it: "Pomodoro, Burrata, Capocollo e Basilico.",
      en: "Tomato, Burrata, Capocollo, and Basil.",
      fr: "Tomate, Burrata, Capocollo, et Basilic."
    }),
    price: { trancio: 5.5, intera: 33 },
    category: "pizze",
    modes: ["dinner"],
  },
  {
    id: "pizza-margherita",
    name: "Margherita",
    description: structuredClone({
      it: "Pomodoro, Mozzarella e Basilico.",
      en: "Tomato, Mozzarella, and Basil.",
      fr: "Tomate, Mozzarella, et Basilic."
    }),
    price: { trancio: 2.5, intera: 15 },
    category: "pizze",
    modes: ["dinner"],
    icon: "/icons/veg.jpeg?v=2",
  },
  {
    id: "pizza-bufala",
    name: "Bufala",
    description: structuredClone({
      it: "Pomodoro, Mozzarella di Bufala e Basilico.",
      en: "Tomato, Buffalo Mozzarella, and Basil.",
      fr: "Tomate, Mozzarella di Bufala, et Basilic."
    }),
    price: { trancio: 5, intera: 30 },
    category: "pizze",
    modes: ["dinner"],
    icon: "/icons/veg.jpeg?v=2",
  },
  {
    id: "pizza-diavola",
    name: "Diavola",
    description: structuredClone({
      it: "Pomodoro, Mozzarella, Spianata Calabrese e Basilico.",
      en: "Tomato, Mozzarella, Spicy Salami, and Basil.",
      fr: "Tomate, Mozzarella, Salami piquant, et Basilic."
    }),
    price: { trancio: 4, intera: 24 },
    category: "pizze",
    modes: ["dinner"],
    icon: "/icons/pepper.jpg?v=2",
  },
  {
    id: "pizza-sud-tirol",
    name: "Sud-Tirol",
    description: structuredClone({
      it: "Mozzarella, Brie, Zucchine e Speck.",
      en: "Mozzarella, Brie, Zucchini, and Speck.",
      fr: "Mozzarella, Brie, Courgettes, et Speck."
    }),
    price: { trancio: 5.5, intera: 33 },
    category: "pizze",
    modes: ["dinner"],
  },
  {
    id: "pizza-rustica",
    name: "Rustica",
    description: structuredClone({
      it: "Pomodoro, Mozzarella, Scamorza Affumicata, Pancetta e Pepe.",
      en: "Tomato, Mozzarella, Smoked Scamorza, Bacon, and Pepper.",
      fr: "Tomate, Mozzarella, Scamorza fumée, Pancetta, et Poivre."
    }),
    price: { trancio: 5, intera: 30 },
    category: "pizze",
    modes: ["dinner"],
  },
  {
    id: "pizza-podolica",
    name: "Podolica",
    description: structuredClone({
      it: "Caciocavallo, Mozzarella, Funghi e Salsiccia.",
      en: "Caciocavallo cheese, Mozzarella, Mushrooms, and Sausage.",
      fr: "Fromage Caciocavallo, Mozzarella, Champignons, et Saucisse."
    }),
    price: { trancio: 5.5, intera: 33 },
    category: "pizze",
    modes: ["dinner"],
  },
  {
    id: "pizza-capri",
    name: "Capri",
    description: structuredClone({
      it: "Crudo, Mozzarella, Parmigiano, Pomodorini e Rucola.",
      en: "Parma Ham, Mozzarella, Parmesan, Cherry Tomatoes, and Rocket.",
      fr: "Jambon de Parme, Mozzarella, Parmesan, Tomates cerises, et Roquette."
    }),
    price: { trancio: 5.5, intera: 33 },
    category: "pizze",
    modes: ["dinner"],
  },
  {
    id: "pizza-valtellina",
    name: "Valtellina",
    description: structuredClone({
      it: "Bresaola, Mozzarella, Parmigiano, Pomodorini e Rucola.",
      en: "Bresaola, Mozzarella, Parmesan, Cherry Tomatoes, and Rocket.",
      fr: "Bresaola, Mozzarella, Parmesan, Tomates cerises, et Roquette."
    }),
    price: { trancio: 6, intera: 36 },
    category: "pizze",
    modes: ["dinner"],
  },
  {
    id: "pizza-primavera",
    name: "Primavera",
    description: structuredClone({
      it: "Mozzarella, Scamorza Affumicata, Pomodorini e Rucola.",
      en: "Mozzarella, Smoked Scamorza, Cherry Tomatoes, and Rocket.",
      fr: "Mozzarella, Scamorza fumée, Tomates cerises, et Roquette."
    }),
    price: { trancio: 4.5, intera: 27 },
    category: "pizze",
    modes: ["dinner"],
  }
];