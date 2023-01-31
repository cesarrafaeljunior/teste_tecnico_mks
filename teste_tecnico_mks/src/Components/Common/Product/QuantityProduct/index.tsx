import { IPropsQuantityProduct } from "../../../../Interfaces/Props";
import { QuantitySyled } from "./Quantity";

const QuantityProduct = ({
  children,
  updateProductIncrement,
  updateProductDecrement,
}: IPropsQuantityProduct) => {
  return (
    <QuantitySyled>
      <p className="quantity__product">Qtd:</p>
      <button onClick={updateProductDecrement} className="button__minus">
        {" "}
        -{" "}
      </button>
      {children}
      <button onClick={updateProductIncrement} className="button__more">
        {" "}
        +{" "}
      </button>
    </QuantitySyled>
  );
};

export { QuantityProduct };
