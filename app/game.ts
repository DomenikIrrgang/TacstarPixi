import { Renderer } from "pixi.js";

export interface Game {
    getRenderer(): Renderer
}