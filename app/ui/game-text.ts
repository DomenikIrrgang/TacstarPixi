import { GameObject } from "../rendering/game-object";
import { GameRenderer } from "../rendering/game-renderer";
import { Text } from "pixi.js";

export class GameText extends Text implements GameObject {

    public constructor(text: string, style: any) {
        super(text, style)
    }

    public render(renderer: GameRenderer): void {
        super.render(renderer);
    }

    public update(delta: number): void {}

}