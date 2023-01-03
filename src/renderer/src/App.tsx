import { Outlet } from 'react-router-dom'
import { CommandLine } from './components/CommandLine'
import { Menu } from './components/Menu'
import { TitleBar } from './components/TitleBar'

function App(): JSX.Element {
  return (
    <>
      <div className="flex flex-col w-screen h-screen bg-gray-200">
        <TitleBar />
        <div className="flex flex-1">
          <Menu />
          <Outlet />
        </div>
        <CommandLine />
      </div>
    </>
  )
}

export default App
