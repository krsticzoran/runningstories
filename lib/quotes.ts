export const runningQuotes = [
  {
    text: "Čudo nije u tome što sam završio. Čudo je u tome što sam imao hrabrosti da počnem.",
    author: "John Bingham",
  },
  {
    text: "Ako želiš da trčiš, istrči jedan kilometar. Ako želiš da doživiš drugačiji život, istrči maraton.",
    author: "Emil Zátopek",
  },
  {
    text: "Mnogi ljudi trče trku da bi videli ko je najbrži. Ja trčim da vidim ko ima najviše hrabrosti.",
    author: "Steve Prefontaine",
  },
  {
    text: "Samo disciplinovani ljudi u životu su zaista slobodni.",
    author: "Eliud Kipchoge",
  },
  {
    text: "Dobar smeh i dugo trčanje dva su najbolja leka za sve.",
    author: "Amby Burfoot",
  },
];

export function getRandomQuote() {
  const minute = Math.floor(Date.now() / (1000 * 60));
  return runningQuotes[minute % runningQuotes.length];
}
