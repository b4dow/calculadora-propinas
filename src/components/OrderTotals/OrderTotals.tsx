import { Dispatch, useMemo } from "react";
import { formatCurrency } from "../../helpers";
import { OrderActionsT } from "../../reducers/orderReducer";
import { OrderI } from "../../model/product.model";

interface Props {
  order: OrderI[];
  tip: number;
  dispatch: Dispatch<OrderActionsT>;
}

export const OrderTotals = ({ order, tip, dispatch }: Props) => {
  const subTotalAmount = useMemo(
    () => order.reduce((total, item) => total + item.quantity * item.price, 0),
    [order],
  );

  const tipAmount = useMemo(() => subTotalAmount * tip, [subTotalAmount, tip]);

  const totalAmount = useMemo(
    () => subTotalAmount + tipAmount,
    [subTotalAmount, tipAmount],
  );

  return (
    <>
      <div className="space-y-3 mt-5">
        <h2 className="font-black text-2xl">Totales y Propina: </h2>
        <p>
          Subtotal a pagar:
          <span className="font-bold">{formatCurrency(subTotalAmount)}</span>
        </p>
        <p>
          Propina:
          <span className="font-bold">{formatCurrency(tipAmount)}</span>
        </p>
        <p>
          Total a Pagar:
          <span className="font-bold">{formatCurrency(totalAmount)}</span>
        </p>
      </div>
      <button
        onClick={() => dispatch({ type: "clear-order" })}
        className="bg-red-600 hover:bg-red-700 text-white w-full font-black text-2xl uppercase py-3 mt-5 cursor-pointer "
      >
        Resetear
      </button>
    </>
  );
};
