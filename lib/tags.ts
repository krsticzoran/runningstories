export const TAGS = {
  dailylog: "#daily-log",
  restday: "#rest-day",
} as const;

export type Tag = keyof typeof TAGS;

export const TAG_VALUES = Object.keys(TAGS) as Tag[];

export const TAG_OPTIONS = TAG_VALUES.map((tag) => ({
  value: tag,
  label: TAGS[tag],
}));
