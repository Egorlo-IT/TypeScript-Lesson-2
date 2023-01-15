import { SearchFormData } from "./searchFormData.js";
import { Place } from "./place.js";

export const search = (entity: SearchFormData, place: Place) => {
  const number = Math.random();

  console.log("entity:", entity);

  setTimeout(() => {
    if (number < 0.5) {
      return console.log("place:", place);
    } else {
      return console.log(new Error("There was a terrible error :)"));
    }
  }, 3000);
};
