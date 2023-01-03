import { ForwardIcon } from '@heroicons/react/24/outline'
import { ForwardIcon as ForwardIconSolid } from '@heroicons/react/24/solid'
import Tippy from '@tippyjs/react'
import { useState } from 'react'
import { ToolsTips } from './Toolstips'

export const CommandLine = (): JSX.Element => {
  const [isShown, setIsShown] = useState(false)

  return (
    <div className="flex p-2 overflow-auto border h-14">
      <input type="text" className="w-full h-full px-2 bg-white outline-none" />
      <Tippy render={ToolsTips} interactive={true} interactiveBorder={20}>
        <button
          onMouseEnter={(): void => setIsShown(true)}
          onMouseLeave={(): void => setIsShown(false)}
          className="flex items-center justify-center w-10 h-full bg-white justify-items-center"
        >
          {isShown ? (
            <ForwardIconSolid className="block w-5 h-5 text-gray-700" />
          ) : (
            <ForwardIcon className="block w-5 h-5 " />
          )}
        </button>
      </Tippy>
    </div>
  )
}
