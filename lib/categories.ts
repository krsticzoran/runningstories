export const categoriesData: Record<
  string,
  {
    title: string;
    description: string;
    image: string;
    alt: string;
    objectPosition?: "center" | "top" | "bottom";
    excerpt: string;
  }
> = {
  trening: {
    title: "Trening",
    description:
      "Nauči kako da trčiš brže i duže - kompletan sistem treninga sa detaljnim nedeljnim planovima, ubrzanjima, intervalnim treninzima i raznovrsnim vežbama za sve nivoe iskustva i trkačke ciljeve",
    image: "/images/categories/trening.webp",
    alt: "mnoštvo trkača na Berlin maratonu",
    excerpt: "Trčiš bez plana? Nauči kako da trčiš duže i brže",
  },
  zdravlje: {
    title: "Zdravlje & Ishrana",
    description:
      "Otkrij koje su najčešće povrede kod trkača, zašto nastaju i kako ih sprečiti - sa praktičnim savetima o ishrani i regeneraciji. Nauči kako da održiš telo zdravim i sprečiš povrede pre nego što se desе.",
    image: "/images/categories/zdravlje.avif",
    alt: "Zena se isteže nako trčanja kako bi održala elastičnost i sprečila povrede",
    excerpt: "Zdravlje trkača - prevencija povreda, ishrana i regeneracija",
  },
  oprema: {
    title: "Trkačka oprema",
    description:
      "Pronađi pravu opremu za svoje trčanje - detaljni pregledi trkačkih patika, odeće, satova i gadžeta. Nauči kako da izabereš opremu koja će poboljšati tvoje performanse, pružiti komfor i zaštititi od povrede.",
    image: "/images/categories/oprema.avif",
    alt: "Trkačka oprema - patike, sat i odeća",
    excerpt: "Pronađi opremu koja pravi razliku - patike, satovi i odeća",
  },
  "simonin-kutak": {
    title: "Simonin kutak",
    description:
      "Simona će sa vama deliti svoja zapazanja i emocije sa treninga i trka, kao i deliti savete kako da trčanje uklopite u svakodnevne obaveze jednog tinejdžera.",
    image: "/images/categories/trening.webp",
    alt: "Simona na trkačkom treningu",
    excerpt: "Simonin kutak - svet trčanja kroz oči srednjoškolke",
  },
  "iz-sveta-trcanja": {
    title: "Iz sveta trčanja",
    description:
      "Vesti, priče i trendovi iz globalnog sveta trčanja – o današnjim herojima, kao i ljudima koji su kroz istoriju menjali trčanje .",
    image: "/images/categories/iz-sveta-trcanja.avif",
    alt: "Start velike međunarodne trke sa elitnim i rekreativnim trkačima",
    excerpt: "Globalne vesti, priče i trendovi iz sveta trčanja",
  },
};
