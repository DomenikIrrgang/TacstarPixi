import { Resolution } from "./resolution";

export interface RenderSettings {
    resolution: Resolution;
    renderBackground: boolean;
    renderLight: boolean;
    renderUserinterface: boolean;
    renderWorld: boolean;
    renderDebug: boolean;
}
