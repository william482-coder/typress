import { CloseButton } from './CloseButton'
import { MaximizeButton } from './MaximizeButton'
import { MinimizeButton } from './MinimizeButton'

export const TitleBar = (): JSX.Element => {
  return (
    <header id="titlebar" className="h-10">
      <div className="flex justify-between draggable">
        <span className="ml-3 text-2xl font-bold">{document.title}</span>
        <div className="draggable-none flex">
          <MinimizeButton />
          <MaximizeButton />
          <CloseButton />
        </div>
      </div>
    </header>
  )
}
