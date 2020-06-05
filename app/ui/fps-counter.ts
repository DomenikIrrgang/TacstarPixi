import { GameText } from "./game-text";

export class FpsCounter extends GameText {

    private updateInterval = 500.0;
    private timeSinceLastUpdate = 0.0;

    public constructor(style: any) {
        super("0", style)
        this.position.set(100,100)
    }

    public update(delta: number): void {
        super.update(delta);
        this.timeSinceLastUpdate += delta;
        if (this.timeSinceLastUpdate > this.updateInterval) {
            this.text = (Math.floor(1000 / delta)).toString();
            this.timeSinceLastUpdate = 0;
        }
    }
}