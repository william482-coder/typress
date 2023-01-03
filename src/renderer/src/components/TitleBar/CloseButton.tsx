import { DismissRegular } from '@fluentui/react-icons'

export const CloseButton = (): JSX.Element => {
  return (
    <span
      className="h-10 w-10 flex justify-center items-center hover:bg-red-500 hover:text-white"
      onClick={(): void => window.api.exitWindows()}
    >
      <DismissRegular />
    </span>
  )
}
