import { makeAutoObservable, runInAction } from "mobx";
import { iShape } from "../interfaces/iShape";

class selectedShapes {
    
    shapesArr: iShape[] = [];
    isDrag: boolean = false;
    isVisible: boolean = false;
    

    constructor(){
        makeAutoObservable(this);
    }

    //переключает видимость выпадающего меню
    setVisible(){
        runInAction(()=>{
            this.isVisible = !this.isVisible;
            this.isDrag = false;
            this.shapesArr = this.shapesArr.map(shape => {
                return {
                        ...shape,
                        attributes: {
                            ...shape.attributes,
                            draggable: false
                        }
                }
            })
        })
    }
    //добавляет новую фигуру на холст
    addNewShape(shape: string){
        runInAction(()=>{
            switch (shape) {
                case "Star":
                    this.shapesArr.push({
                        shape: "Star",
                        attributes: {
                            x: 150,
                            y: 150,
                            numPoints:5,
                            innerRadius:30,
                            outerRadius:50,
                            fill: "#bcbbbb",
                            stroke: "grey",
                            strokeWidth: 1,
                            draggable: false
                        }}
                    )
                    break;
                case "Circle":
                    this.shapesArr.push({
                        shape: "Circle",
                        attributes: {
                            x: 150,
                            y: 150,
                            radius: 50,
                            fill: "#bcbbbb",
                            stroke: "grey",
                            strokeWidth: 1,
                            draggable: false,
                        }
                    }
                    )
                    break;
                case "Rect":
                    this.shapesArr.push(
                    {
                        shape: "Rect",
                        attributes: {
                            x: 150,
                            y: 150,
                            width: 100,
                            height: 100,
                            fill: "#bcbbbb",
                            stroke: "grey",
                            strokeWidth: 1,
                            draggable: false,
                        }
                    }
                    )
                    break;
            
                default:
                    break;
            }
        })
    }

    //делает все элементы не/перетаскиваемыми
    makeDraggable(isDrag: boolean){
        runInAction(() => {
            this.isDrag = isDrag;
            this.isVisible = false;
            this.shapesArr = this.shapesArr.map(shape => {
                return {
                        ...shape,
                        attributes: {
                            ...shape.attributes,
                            draggable: isDrag
                        }
                }
            })
        })
    }
}

export default new selectedShapes()