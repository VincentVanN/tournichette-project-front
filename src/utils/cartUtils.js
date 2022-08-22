/* eslint-disable import/prefer-default-export */
export const changeQuantityProduct = (list, product, quantity) => {
  const productsCopy = [...list];
  if (productsCopy.some((element) => element.id === product.id)) {
    const item = productsCopy.find((element) => element.id === product.id);
    const newItem = { ...item };
    newItem.quantity += quantity;
    const newArrayForState = productsCopy.filter((element) => element.id !== product.id);
    if (newItem.quantity <= 0) {
      return newArrayForState;
    }
    newArrayForState.push(newItem);
    return newArrayForState;
  }
  productsCopy.push(product);
  return productsCopy;
};

export const navigationInProduct = (products, product, increment) => {
  const indexOfActuallyProduct = products.indexOf(product);
  const nextProduct = products[(indexOfActuallyProduct + increment)];
  return nextProduct.slug;
};
