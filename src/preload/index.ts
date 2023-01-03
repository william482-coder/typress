import { electronAPI } from '@electron-toolkit/preload'
import { contextBridge, IpcRenderer, ipcRenderer } from 'electron'

// Custom APIs for renderer
const api = {
  exitWindows: (): Promise<void> => ipcRenderer.invoke('exitWindows'),
  minimizeWindows: (): Promise<void> => ipcRenderer.invoke('minimizeWindows'),
  maximizeWindows: (): Promise<void> => ipcRenderer.invoke('maximizeWindows'),
  isMaximizeWindows: (onMoved: (message: boolean) => void): IpcRenderer =>
    ipcRenderer.on('isMaximize', (_event, message) => {
      onMoved(message)
    }),
  unmaximizeWindows: (): Promise<void> => ipcRenderer.invoke('unmaximizeWindows')
}

// Use `contextBridge` APIs to expose Electron APIs to
// renderer only if context isolation is enabled, otherwise
// just add to the DOM global.
if (process.contextIsolated) {
  try {
    contextBridge.exposeInMainWorld('electron', electronAPI)
    contextBridge.exposeInMainWorld('api', api)
  } catch (error) {
    console.error(error)
  }
} else {
  // @ts-ignore (define in dts)
  window.electron = electronAPI
  // @ts-ignore (define in dts)
  window.api = api
}
