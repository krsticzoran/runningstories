import treningImg from "@/assets/images/categories/trening.webp";
import zdravljeImg from "@/assets/images/categories/zdravlje.webp";
import opremaImg from "@/assets/images/categories/oprema.webp";
import simoninKutakImg from "@/assets/images/categories/simona.webp";
import izSvetaTrcanjaImg from "@/assets/images/categories/iz-sveta-trcanja.webp";
import zajednicaImg from "@/assets/images/categories/zajednica.webp";
import { StaticImageData } from "next/image";

export const categoriesData: Record<
  string,
  {
    title: string;
    description: string;
    image: StaticImageData;
    alt: string;
    objectPosition?: "center" | "top" | "bottom";
    excerpt: string;
  }
> = {
  trening: {
    title: "Trening",
    description:
      "Nauči kako da trčiš brže i duže - kompletan sistem treninga sa detaljnim nedeljnim planovima, ubrzanjima, intervalnim treninzima i raznovrsnim vežbama za sve nivoe iskustva i trkačke ciljeve",
    image: treningImg,
    alt: "mnoštvo trkača na Berlin maratonu",
    excerpt: "Trčiš bez plana? Nauči kako da trčiš duže i brže",
  },
  zdravlje: {
    title: "Zdravlje & Ishrana",
    description:
      "Otkrij koje su najčešće povrede kod trkača, zašto nastaju i kako ih sprečiti - sa praktičnim savetima o ishrani i regeneraciji. Nauči kako da održiš telo zdravim i sprečiš povrede pre nego što se desе.",
    image: zdravljeImg,
    alt: "Zena se isteže nako trčanja kako bi održala elastičnost i sprečila povrede",
    excerpt: "Zdravlje trkača - prevencija povreda, ishrana i regeneracija",
  },
  oprema: {
    title: "Oprema",
    description:
      "Pronađi pravu opremu za svoje trčanje - detaljni pregledi trkačkih patika, odeće, satova i gadžeta. Nauči kako da izabereš opremu koja će poboljšati tvoje performanse, pružiti komfor i zaštititi od povrede.",
    image: opremaImg,
    alt: "Trkačka oprema - patike, sat i odeća",
    excerpt: "Pronađi opremu koja pravi razliku - patike, satovi i odeća",
  },
  "simonin-kutak": {
    title: "Simonin kutak",
    description:
      "Simona će sa vama deliti svoja zapazanja i emocije sa treninga i trka, kao i deliti savete kako da trčanje uklopite u svakodnevne obaveze jednog tinejdžera.",
    image: simoninKutakImg,
    alt: "Simona na trkačkom treningu",
    excerpt: "Simonin kutak - svet trčanja kroz oči srednjoškolke",
  },
  zajednica: {
    title: "Zajednica",
    description:
      "Mnoštvo priča običnih trkača iz regiona, zašto su počeli da trče i sta im je trčanje donelo, kao i utiske sa trka",
    image: zajednicaImg,
    alt: "Grupa trkača u novogodišnjem izdanju",
    excerpt: "Priče običnih trkača koje inspirišu više nego medalje",
  },
  "iz-sveta-trcanja": {
    title: "Iz sveta trčanja",
    description:
      "Vesti, priče i trendovi iz globalnog sveta trčanja – o današnjim herojima, kao i ljudima koji su kroz istoriju menjali trčanje .",
    image: izSvetaTrcanjaImg,
    alt: "Start velike međunarodne trke sa elitnim i rekreativnim trkačima",
    excerpt: "Globalne vesti, priče i trendovi iz sveta trčanja",
  },
};
