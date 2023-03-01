import { MenuList } from '@renderer/config/menu'
import { Link } from 'react-router-dom'

export const Menu = (): JSX.Element => {
  return (
    <nav className="bg-gray-100 w-36">
      <ul className="flex-1 py-1">
        {MenuList.map((menu) => (
          <li className="w-full px-1 py-1 hover:bg-white" key={menu.path}>
            <Link className="block w-full" to={menu.path ? menu.path : '/'}>
              {menu.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}
