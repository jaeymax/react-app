import React from "react"



const NavItem:React.FC<NavItemProps> = ({icon,name}) => {
  return (
    <div className="flex items-center gap-1 cursor-pointer hover:text-zinc-500" >
      {icon}
      {name}
    </div>
  )
}

export default NavItem
