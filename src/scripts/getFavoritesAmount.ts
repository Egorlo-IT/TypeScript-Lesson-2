export const getFavoritesAmount = () => {
  const favoritesAmount: unknown = localStorage.getItem("favoritesAmount");

  if (favoritesAmount == null) {
    return favoritesAmount + "";
  }
  return favoritesAmount;
};
