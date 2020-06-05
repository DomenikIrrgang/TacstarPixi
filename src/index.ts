import { app as ElectronApp, BrowserWindow } from "electron";

let mainWindow: Electron.BrowserWindow;

ElectronApp.on("ready", () => {
    mainWindow = new BrowserWindow({ width: 1600, height: 900, resizable: true, center: true });
    mainWindow.setMenu(null);
    mainWindow.loadURL(`file://${__dirname}/app/index.html`);
    mainWindow.webContents.openDevTools();
    mainWindow.on("closed", () => {
        mainWindow = null;
    });
});

ElectronApp.on("window-all-closed", () => {
    ElectronApp.quit();
});
