import { iShape } from "../../../../../interfaces/iShape";
import selectedShapes from "../../../../../store/selectedShapes";
import "./ShapeSelect.css";

const ShapeSelect = ({ shape }: { shape: iShape["shape"] }) => {
  return (
    <div
      onClick={() => selectedShapes.addNewShape(shape)}
      className="ShapeSelect"
    >
      {shape}
    </div>
  );
};

export default ShapeSelect;
