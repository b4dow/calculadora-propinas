export const formatCurrency = (quantity: number) => {
  return new Intl.NumberFormat("en-ES", {
    style: "currency",
    currency: "EUR",
  }).format(quantity);
};
