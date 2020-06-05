import { Game } from "./game";
import { GameRenderer } from "./rendering/game-renderer";
import { LayerRenderer } from "./rendering/layer-renderer";
import { TitleScreen } from "./stages/title-screen";

export class Tacstar implements Game {

    private static instance: Tacstar
    private renderer: GameRenderer;
    private gameTime: number = 0;

    private TacStar() {}

    public static getInstance(): Tacstar {
        if (this.instance === undefined) {
            this.instance = new Tacstar();
        }
        return this.instance;
    }

    public init(): void {
        this.renderer = new LayerRenderer({
            resolution: {
               width: 1920,
               height: 1080 
            },
            renderUserinterface: false,
            renderWorld: false,
            renderBackground: false,
            renderLight: false,
            renderDebug: true
        });
        this.renderer.init();
        this.renderer.setScreen(new TitleScreen());
        this.gameLoop(0);
    }

    public getRenderer(): GameRenderer {
        return this.renderer;
    }

    public gameLoop(time: number): void {
        const delta = time - this.gameTime;
        this.gameTime = time;
        requestAnimationFrame(this.gameLoop.bind(this));
        this.renderer.updateLayers(delta);
        this.renderer.drawNextFrame(delta);
    }

}