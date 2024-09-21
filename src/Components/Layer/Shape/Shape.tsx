import { observer } from "mobx-react-lite";
import { iShape } from "../../../interfaces/iShape";
import { Circle, Rect, Star } from "react-konva";

const Shape = observer(({ shape }: { shape: iShape }) => {
  if (shape.shape === "Rect") {
    return <Rect {...shape.attributes} />;
  }
  if (shape.shape === "Circle") {
    return <Circle {...shape.attributes} />;
  }
  if (shape.shape === "Star") {
    return (
      <Star
        numPoints={0}
        innerRadius={0}
        outerRadius={0}
        {...shape.attributes}
      />
    );
  }
  return null;
});

export default Shape;
