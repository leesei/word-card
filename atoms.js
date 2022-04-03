import { atom } from "jotai";

export const DEFAULT_SETTINGS = {
  wordset: "letters_capital",
  words: [], // custom words
  shuffle: true,
};
export const settingsAtom = atom(DEFAULT_SETTINGS);
