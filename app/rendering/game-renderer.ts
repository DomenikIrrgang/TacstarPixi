import { Screen } from "./screen"
import { Renderer } from "pixi.js";
import { RenderSettings } from "./render-settings";

export abstract class GameRenderer extends Renderer {

    protected constructor(public settings: RenderSettings) {
        super({
            height: settings.resolution.height,
            width: settings.resolution.width,
            clearBeforeRender: false,
        })
    }

    public abstract init(): void;
    public abstract drawNextFrame(delta: number): void;
    public abstract setScreen(screen: Screen): void;
    public abstract updateLayers(delta: number): void;
}
