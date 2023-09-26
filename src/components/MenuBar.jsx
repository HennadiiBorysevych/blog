import React, { useState } from "react";
import { Link } from "react-router-dom";

import { Menu } from "semantic-ui-react";

const MenuBar = () => {
  const [activeItem, setActiveItem] = useState("");

  const handleItemClick = (e) => {
    setActiveItem(e.target.name);
  };

  return (
    <Menu pointing secondary>
      <Menu.Item
        name="home"
        active={activeItem === "home"}
        onClick={handleItemClick}
        as={Link}
        to="/"
      />
      <Menu.Menu position="right">
        <Menu.Item
          name="login"
          active={activeItem === "login"}
          onClick={handleItemClick}
          as={Link}
          to="/login"
        />
        <Menu.Item
          name="register"
          active={activeItem === "register"}
          onClick={handleItemClick}
          as={Link}
          to="/register"
        />
      </Menu.Menu>
    </Menu>
  );
};

export default MenuBar;
