import { Dispatch } from "react";
import { formatCurrency } from "../../helpers";
import { OrderI } from "../../model/product.model";
import { OrderActionsT } from "../../reducers/orderReducer";

interface Props {
  order: OrderI[];
  dispatch: Dispatch<OrderActionsT>;
}
export const OrderContents = ({ order, dispatch }: Props) => {
  return (
    <div>
      <h2 className="font-black text-4xl">Consumo</h2>
      <div className="space-y-3 mt-10">
        {order.map((orderItem) => (
          <div
            key={orderItem.id}
            className="flex justify-between items-center border-t border-gray-200 py-5 last-of-type:border-b"
          >
            <div>
              <p className="text-lg ">
                {orderItem.name} - {formatCurrency(orderItem.price)}
              </p>
              <p className="font-black">
                Cantidad: {orderItem.quantity} -{" "}
                {formatCurrency(orderItem.price * orderItem.quantity)}
              </p>
            </div>
            <div>
              <button
                onClick={() =>
                  dispatch({
                    type: "remove-order-item",
                    payload: { id: orderItem.id },
                  })
                }
                className="bg-red-600 h-8 w-8 rounded-full text-white font-black cursor-pointer"
              >
                X
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
