import { SvgIconProps } from "@mui/material"
import React, { ReactNode } from "react"
import './NavItem.css'

type MaterialUIIcon = React.ComponentType<SvgIconProps>;

interface NavItemProps{
    name:string,
    icon:ReactNode;
}

const NavItem:React.FC<NavItemProps> = ({icon,name}) => {
  return (
    <div className="flex items-center gap-1 cursor-pointer hover:text-zinc-500" >
      {icon}
      {name}
    </div>
  )
}

export default NavItem
