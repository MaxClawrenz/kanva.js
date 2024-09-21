import ButtonDrag from "./Buttons/ButtonDrag/ButtonDrag";
import ButtonsShapes from "./Buttons/ButtonsShapes/ButtonsShapes";
import "./Instruments.css";

const Instruments = () => {
  return (
    <div className="Instruments">
      <ButtonsShapes />
      <ButtonDrag />
    </div>
  );
};

export default Instruments;
