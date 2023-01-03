import { ElectronAPI } from '@electron-toolkit/preload'

declare global {
  interface Window {
    electron: ElectronAPI
    api: {
      exitWindows()
      minimizeWindows()
      maximizeWindows()
      unmaximizeWindows()
      isMaximizeWindows(onMoved: (message: boolean) => void)
    }
  }
}
