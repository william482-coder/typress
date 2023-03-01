import { Placement } from 'tippy.js'

export const ToolsTips = (attrs: {
  'data-placement': Placement
  'data-reference-hidden'?: string
  'data-escaped'?: string
}): JSX.Element => {
  return (
    <div {...attrs} className="px-2 py-1 bg-white rounded">
      Execute
    </div>
  )
}
