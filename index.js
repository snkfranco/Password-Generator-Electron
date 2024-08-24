const { app, BrowserWindow, Menu } = require('electron');

let mainWindow;

app.on('ready', () => {
    mainWindow = new BrowserWindow({
        width: 700,
        height: 400,
        resizable: false,
        webPreferences: {
            nodeIntegration: true,
            contextIsolation: false
        }
    });

    mainWindow.loadURL(`file://${__dirname}/index.html`);

    // Remove a barra de menu padrão
    Menu.setApplicationMenu(null);
});