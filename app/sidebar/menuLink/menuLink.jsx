"use client"

import classNames from 'classnames';
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const MenuLink = ({item}) => {
  const currentPath = usePathname();

  return (
    <Link href={item.path} className={classNames({
      'flex items-center py-2 ml-5 px-4 rounded transition-colors hover:text-slate-300 hover:bg-zinc-700': true,
      'bg-zinc-700' : item.path === currentPath,
      'text-slate-300' : item.path === currentPath,
  })}>
      <span className='pr-2'>{item.icon}</span>
      {item.title}
    </Link>
  )
}

export default MenuLink