import { GameRenderer } from "./game-renderer";

export interface Renderable {
    render(renderer: GameRenderer): void
}