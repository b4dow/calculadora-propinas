import { MenuItemsI, OrderI } from "../model/product.model";
import { menuItems } from "../data/db";

export type OrderActionsT =
  | {
      type: "add-order-item";
      payload: { item: MenuItemsI };
    }
  | {
      type: "remove-order-item";
      payload: { id: MenuItemsI["id"] };
    }
  | {
      type: "clear-order";
    }
  | {
      type: "add-tip";
      payload: { value: number };
    };

export type OrderStateT = {
  products: MenuItemsI[];
  order: OrderI[];
  tip: number;
};

export const initialState: OrderStateT = {
  products: menuItems,
  order: [],
  tip: 0,
};

export const orderReducer = (
  state: OrderStateT = initialState,
  actions: OrderActionsT,
) => {
  if (actions.type === "add-order-item") {
    const itemExist = state.order.find(
      (orderItem) => orderItem.id === actions.payload.item.id,
    );
    let updatedOrder: OrderI[] = [];
    if (itemExist) {
      updatedOrder = state.order.map((orderItem) => {
        if (orderItem.id === actions.payload.item.id) {
          return {
            ...orderItem,
            quantity: orderItem.quantity + 1,
          };
        } else {
          return orderItem;
        }
      });
    } else {
      const newItem: OrderI = {
        ...actions.payload.item,
        quantity: 1,
      };
      updatedOrder = [...state.order, newItem];
    }

    return {
      ...state,
      order: updatedOrder,
    };
  }

  if (actions.type === "remove-order-item") {
    const updatedOrder = state.order.filter(
      (item) => item.id !== actions.payload.id,
    );

    return {
      ...state,
      order: updatedOrder,
    };
  }

  if (actions.type === "clear-order") {
    return {
      ...state,
      order: [],
      tip: 0,
    };
  }

  if (actions.type === "add-tip") {
    const tip = actions.payload.value;
    return {
      ...state,
      tip,
    };
  }

  return state;
};
