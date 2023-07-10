import React from "react";
import { NavLink } from "react-router-dom";
import SidebarNavItemStyles from "./_sidebarNavItem.module.scss";

export interface SidebarNavItemProps {
  children: React.ReactNode;
  navlink: string,
}

export default function SidebarNavItem(props: SidebarNavItemProps) {
  return (
    <li className={SidebarNavItemStyles.sidebar__navItem}>
      <NavLink className={SidebarNavItemStyles.sidebar__navLink} to={`${props.navlink}`}>
        {props.children}
      </NavLink>
    </li>
  );
}
