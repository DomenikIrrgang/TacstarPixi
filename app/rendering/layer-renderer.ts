import { GameRenderer } from "./game-renderer";
import { Container } from "pixi.js";
import { RenderSettings } from "./render-settings";
import { RenderingLayer } from "./rendering-layer";
import { Screen } from "./screen"
import { GameContainer } from "./game-container";
import { DebugLayer } from "./debug-layer";

export class LayerRenderer extends GameRenderer {

    private layers: Map<RenderingLayer, GameContainer>;
    public stage: Container;

    public constructor(settings: RenderSettings) {
        super(settings)
    }

    public init(): void {
        this.layers = new Map();
        this.view.style.height = "100vh"
        this.view.style.width = "100vw";
        document.body.appendChild(this.view);
        this.stage = new Container();
    }

    public setScreen(screen: Screen): void {
        this.layers.set(RenderingLayer.BACKGROUND, screen.generateBackground());
        this.layers.set(RenderingLayer.WORLD, screen.generateWorld());
        this.layers.set(RenderingLayer.LIGHT, screen.generateLights());
        this.layers.set(RenderingLayer.INTERFACE, screen.generateUserinterface());
        this.layers.set(RenderingLayer.DEBUG, new DebugLayer());
    }
    
    public drawNextFrame(delta: number): void {
        this.clear();
        if (this.settings.renderBackground == true)
            this.layers.get(RenderingLayer.BACKGROUND).render(this);
        if (this.settings.renderWorld == true)
            this.layers.get(RenderingLayer.WORLD).render(this);
        if (this.settings.renderLight == true)
            this.layers.get(RenderingLayer.LIGHT).render(this);
        if (this.settings.renderUserinterface == true)
            this.layers.get(RenderingLayer.INTERFACE).render(this);
        if (this.settings.renderDebug == true)
            this.layers.get(RenderingLayer.DEBUG).render(this);
        this.render(this.stage);
    }

    public updateLayers(delta: number): void {
        this.layers.forEach(layer => {
            layer.update(delta);
        })
    }

}