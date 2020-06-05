import { GameObject } from "./game-object";
import { GameRenderer } from "./game-renderer";
import { Updateable } from "./updateable";
import { Container, Renderer } from "pixi.js";
import { Renderable } from "./renderable";

export class GameContainer implements GameObject {

    private children: GameObject[] = []

    public render(renderer: GameRenderer): void {
        this.children.forEach(gameObject => {
            gameObject.render(renderer);
        })
    }

    public update(delta: number): void {
        this.children.forEach(gameObject => {
            gameObject.update(delta);
        })
    }

    public addChild(child: GameObject): void {
        this.children.push(child);
    }
}