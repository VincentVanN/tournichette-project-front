/* eslint-disable import/prefer-default-export */
export const changeQuantityProduct = (list, product, quantity) => {
  const productsCopy = [...list];
  if (productsCopy.some((element) => element.id === product.id)) {
    const item = productsCopy.find((element) => element.id === product.id);
    const newItem = { ...item };
    newItem.quantity += quantity;
    const newArrayForState = productsCopy.filter((element) => element.id !== product.id);
    if (newItem.quantity > 0) {
      newArrayForState.push(newItem);
      return newArrayForState;
    }
    return newArrayForState;
  }
  productsCopy.push(product);
  return productsCopy;
};
