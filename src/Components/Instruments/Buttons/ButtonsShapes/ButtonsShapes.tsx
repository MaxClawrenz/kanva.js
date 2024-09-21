import ShapeIcon from "../Icons/ShapeIcon";
import "./ButtonsShapes.css";
import ShapeSelect from "./ShapeSelect/ShapeSelect";
import selectedShapes from "../../../../store/selectedShapes";
import { observer } from "mobx-react-lite";

const ButtonsShapes = observer(() => {
  return (
    <div
      onClick={() => selectedShapes.setVisible()}
      title="Фигуры"
      className={
        selectedShapes.isVisible ? "ButtonsShapes_active" : "ButtonsShapes"
      }
    >
      <ShapeIcon />
      {selectedShapes.isVisible && (
        <div className="ButtonsShapes_list">
          <ul>
            <li className="listChild">
              <ShapeSelect shape={"Rect"} />
            </li>
            <li className="listChild">
              <ShapeSelect shape={"Circle"} />
            </li>
            <li className="listChild">
              <ShapeSelect shape={"Star"} />
            </li>
          </ul>
        </div>
      )}
    </div>
  );
});

export default ButtonsShapes;
