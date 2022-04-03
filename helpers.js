// shuffle array in-place
export function shuffle(array) {
  array.sort(() => Math.random() - 0.5);
}
