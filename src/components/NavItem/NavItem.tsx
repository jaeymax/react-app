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
    <div className="nav-item" >
      {icon}
      {name}
    </div>
  )
}

export default NavItem
