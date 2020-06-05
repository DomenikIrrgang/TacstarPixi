import { GameContainer } from "./game-container";

export interface Screen {
    generateUserinterface(): GameContainer
    generateWorld(): GameContainer
    generateLights(): GameContainer
    generateBackground(): GameContainer
}