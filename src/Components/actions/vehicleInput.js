export const allDataFilter = () => {
  return {
    type: "allVehicles",
  };
};
export const carFilter = () => {
  return {
    type: "Car",
  };
};
export const bikeFilter = () => {
  return {
    type: "Bike",
  };
};
export const detailDisplay = (item) => {
  return {
    type: "displayItem",
    value: item,
  };
};
