const { ipcRenderer } = require("electron")

window.General = {
    Widget: {
        Max: () => {
            ipcRenderer.send("DawnMax")
        }
    },
    ipcRenderer: ipcRenderer
}