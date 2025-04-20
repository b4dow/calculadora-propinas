import { useReducer } from "react";
import {
  Header,
  MenuItem,
  OrderContents,
  OrderTotals,
  TipPorcentageForm,
} from "./components";

import { initialState, orderReducer } from "./reducers/orderReducer";

function App() {
  const [state, dispatch] = useReducer(orderReducer, initialState);

  return (
    <>
      <Header />
      <main className="max-w-7xl mx-auto py-20 grid md:grid-cols-2">
        <div className="p-5">
          <h2 className="text-4xl font-black">Menú</h2>
          <div className="space-y-3 mt-10">
            {state.products.map((item) => (
              <MenuItem key={item.id} item={item} dispatch={dispatch} />
            ))}
          </div>
        </div>
        <div className="border border-dashed border-slate-300 p-5">
          {state.order.length === 0 ? (
            <p className="text-center">La orden esta vacia</p>
          ) : (
            <>
              <OrderContents order={state.order} dispatch={dispatch} />
              <TipPorcentageForm dispatch={dispatch} />
              <OrderTotals
                order={state.order}
                tip={state.tip}
                dispatch={dispatch}
              />
            </>
          )}
        </div>
      </main>
    </>
  );
}

export default App;
