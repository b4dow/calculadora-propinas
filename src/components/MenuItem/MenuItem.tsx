import { Dispatch } from "react";
import { MenuItemsI } from "../../model/product.model";
import { OrderActionsT } from "../../reducers/orderReducer";

interface Props {
  item: MenuItemsI;
  dispatch: Dispatch<OrderActionsT>;
}

export const MenuItem = ({ item, dispatch }: Props) => {
  return (
    <>
      <button
        className="border-2 border-teal-400 hover:bg-teal-200 w-full p-3 flex justify-between 
        mb-2 rounded-lg cursor-pointer"
        onClick={() => dispatch({ type: "add-order-item", payload: { item } })}
      >
        <p>{item.name}</p>
        <p className="font-black">{item.price}</p>
      </button>
    </>
  );
};
