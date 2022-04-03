import letters_capital from "./letters_capital";
import letters_small from "./letters_small";

import chinese_animals from "./chinese_animals";
import chinese_body from "./chinese_body";
import chinese_colors from "./chinese_colors";
import chinese_comparatives from "./chinese_comparatives";
import chinese_family from "./chinese_family";
import chinese_house from "./chinese_house";
import chinese_nature from "./chinese_nature";
import chinese_numbers from "./chinese_numbers";
import chinese_others from "./chinese_others";
import chinese_plants from "./chinese_plants";
import chinese_pronouns from "./chinese_pronouns";

export default {
  letters_capital,
  letters_small,

  chinese_animals,
  chinese_body,
  chinese_colors,
  chinese_comparatives,
  chinese_family,
  chinese_house,
  chinese_nature,
  chinese_numbers,
  chinese_others,
  chinese_plants,
  chinese_pronouns,
  chinese: [
    ...chinese_animals,
    ...chinese_body,
    ...chinese_colors,
    ...chinese_comparatives,
    ...chinese_family,
    ...chinese_house,
    ...chinese_nature,
    ...chinese_numbers,
    ...chinese_others,
    ...chinese_plants,
    ...chinese_pronouns,
  ],
};
