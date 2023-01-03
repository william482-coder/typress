import { SquareMultipleRegular, SquareRegular } from '@fluentui/react-icons'
import { useState } from 'react'

export const MaximizeButton = (): JSX.Element => {
  const [isMaximized, setIsMaximized] = useState(false)
  window.api.isMaximizeWindows((msg) => setIsMaximized(msg))
  return (
    <span
      className="flex items-center justify-center w-10 h-10 hover:bg-gray-300"
      onClick={(): void => {
        setIsMaximized(!isMaximized)
        isMaximized ? window.api.unmaximizeWindows() : window.api.maximizeWindows()
      }}
    >
      {isMaximized ? (
        <SquareRegular fontSize={'0.95rem'} />
      ) : (
        <SquareMultipleRegular fontSize={'0.95rem'} />
      )}
    </span>
  )
}
