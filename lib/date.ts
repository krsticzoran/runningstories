export function formatDate(date: string | Date) {
  return new Date(date).toLocaleDateString("sr-Latn-RS", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  });
}
