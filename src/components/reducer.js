export const initialState = {
  basket: [],
};

// Selector
export const getBasketTotal = (basket) =>
  basket?.reduce((amount, item) => {
      const priceWithoutCommas = item.price.replace(/,/g, '');
      return parseInt(priceWithoutCommas) * item.qty + amount;
  }, 0);

const reducer = (state, action) => {
  switch (action.type) {
      case "ADD_TO_BASKET":
          const existingIndex = state.basket.findIndex(
              (basketItem) => basketItem.id === action.item.id
          );
          if (existingIndex >= 0) {
              const updatedBasket = [...state.basket];
              updatedBasket[existingIndex].qty += 1;
              updatedBasket[existingIndex].total = (parseInt(updatedBasket[existingIndex].price) * updatedBasket[existingIndex].qty).toString();
              return {
                  ...state,
                  basket: updatedBasket,
              };
          } else {
              const newItem = {
                  ...action.item,
                  qty: 1,
                  total: action.item.price,
              };
              return {
                  ...state,
                  basket: [...state.basket, newItem],
              };
            
          }
          
      case "EMPTY_BASKET":
          return {
              ...state,
              basket: [],
          };

      case "REMOVE_FROM_CART":
          const index = state.basket.findIndex(
              (basketItem) => basketItem.id === action.id
          );
          let newBasket = [...state.basket];
          if (index >= 0) {
              newBasket.splice(index, 1);
          } else {
              console.warn(
                  `Cant remove product (id: ${action.id}) as its not in basket!`
              );
          }
          return {
              ...state,
              basket: newBasket,
          };

      case "INCREASE_QTY":
          const increasedBasket = state.basket.map((item) =>
              item.id === action.payload ? { ...item, qty: item.qty + 1, total: (parseInt(item.price) * (item.qty + 1)).toString() } : item
          );
          return {
              ...state,
              basket: increasedBasket,
          };

      case "DECREASE_QTY":
          const decreasedBasket = state.basket.map((item) =>
              item.id === action.payload && item.qty > 1 ? { ...item, qty: item.qty - 1, total: (parseInt(item.price) * (item.qty - 1)).toString() } : item
          );
          return {
              ...state,
              basket: decreasedBasket,
          };

      default:
          return state;
  }
};

export default reducer;
