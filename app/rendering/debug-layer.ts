import { GameContainer } from "./game-container";
import { FpsCounter } from "../ui/fps-counter";
import { Container } from "pixi.js";

export class DebugLayer extends GameContainer {

    public constructor() {
        super();
        let fpsCounter = new FpsCounter({ fontFamily: "Arial", fontSize: 32, fill: "white" });
        fpsCounter.position.set(5, 5);
        this.addChild(fpsCounter);
    }
}