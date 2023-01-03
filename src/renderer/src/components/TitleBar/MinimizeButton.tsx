import { SubtractRegular } from '@fluentui/react-icons'

export const MinimizeButton = (): JSX.Element => {
  return (
    <span
      className="h-10 w-10 flex justify-center items-center hover:bg-gray-300"
      onClick={(): void => window.api.minimizeWindows()}
    >
      <SubtractRegular />
    </span>
  )
}
