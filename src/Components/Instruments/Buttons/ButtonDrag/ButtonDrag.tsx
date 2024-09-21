import { observer } from "mobx-react-lite";
import selectedShapes from "../../../../store/selectedShapes";
import DragIcon from "../Icons/DragIcon";
import "./ButtonDrag.css";

const ButtonDrag = observer(() => {
  const handleDrag = () => {
    selectedShapes.makeDraggable(!selectedShapes.isDrag);
  };

  return (
    <div
      onClick={handleDrag}
      title="Курсор"
      className={selectedShapes.isDrag ? "ButtonDrag_active" : "ButtonDrag"}
    >
      <DragIcon />
    </div>
  );
});

export default ButtonDrag;
