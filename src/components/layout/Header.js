import React from "react";

function Header() {
  //Styling for Header
  const headerStyle = {
    background: "#333",
    color: "#fff",
    textAlign: "center",
    padding: "10px"
  };
  return (
    <header>
      <h1 style={headerStyle}> TodoList</h1>
    </header>
  );
}

export default Header;
