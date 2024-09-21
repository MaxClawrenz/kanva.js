import { Layer, Stage } from "react-konva";
import "./MainLayer.css";
import selectedShapes from "../../store/selectedShapes";
import { observer } from "mobx-react-lite";
import Shape from "./Shape/Shape";

const MainLayer = observer(() => {
  return (
    <Stage
      className="MainLayer"
      width={window.innerWidth}
      height={window.innerHeight}
      draggable
    >
      <Layer>
        {selectedShapes.shapesArr.map((shape, index) => (
          <Shape key={index} shape={shape} />
        ))}
      </Layer>
    </Stage>
  );
});

export default MainLayer;
