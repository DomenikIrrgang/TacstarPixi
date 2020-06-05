import { Screen } from "../rendering/screen";
import { GameContainer } from "../rendering/game-container";
import { GameText } from "../ui/game-text";
import { Container } from "pixi.js";

export class TitleScreen implements Screen {

    public generateLights(): GameContainer {
        return new GameContainer();
    }
    
    public generateBackground(): GameContainer {
        return new GameContainer();
    }

    public generateUserinterface(): GameContainer {
        const userInterface = new GameContainer();
        const test = new GameText(
            "UI",
            { fontFamily: "Arial", fontSize: 32, fill: "white" }
        );
        test.position.set(5, 50);
        userInterface.addChild(test);
        return userInterface;
    }
    
    public generateWorld(): GameContainer {
        const world = new GameContainer();
        const test = new GameText(
            "Game",
            { fontFamily: "Arial", fontSize: 32, fill: "white" }
        );
        test.position.set(5, 90);
        world.addChild(test);
        return world;
    }

}
