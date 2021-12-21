const { app, BrowserWindow} = require('electron');

let appWindow;
function crearVentana(){
    appWindow = new BrowserWindow({
        width:1400,
        height:800,
        minWidth: 800,
        minHeight: 600,
        center: true, 
        show: false
    });

    //Cuando la aplicacion es cerrada.
    appWindow.on('closed',()=>{
        appWindow = null;
    });

    //Cargar el archivo html
    appWindow.loadFile('./index.html');

    appWindow.once('ready-to-show', () =>{
        appWindow.show();
    });
}

app.on('ready',crearVentana);