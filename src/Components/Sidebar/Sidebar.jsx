import React, { memo, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./style.scss";
const menuItems = [
  {
    title: "Home",
    icon: "fa fa-regular fa-house-user",
    url: "/",
  },
  {
    title: "Search",
    icon: "fa fa-solid fa-magnifying-glass",
    url: "/search",
  },
  {
    title: "Library",
    icon: "fa fa-solid fa-book-open",
    url: "/library",
  },
];
function Sidebar() {
  const navigate = useNavigate();
  const onMenuClick = useCallback(
    (path) => {
      navigate(path);
    },
    [navigate]
  );
  return (
    <div className="sidebar-container w-20 p-3">
      <div>
        <h3>Spotify</h3>
      </div>
      <div className="menu-container">
        <ul>
          {menuItems.map((item, i) => (
            <li onClick={() => onMenuClick(item.url)} key={i}>
              <i className={item.icon}></i>
              <span className="menu-header">{item.title}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default memo(Sidebar);
