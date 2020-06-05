import { Tacstar } from "./tacstar";

const game = Tacstar.getInstance();
game.init();

document.addEventListener('keydown', () => {
    Tacstar.getInstance().getRenderer().settings.renderUserinterface = !Tacstar.getInstance().getRenderer().settings.renderUserinterface;
});