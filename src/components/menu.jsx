import React from 'react';

const NavButton = ({ name, onClick }) => {
  return (
    <div className="nav-button" onClick={onClick}>
      {name}
    </div>
  );
};

export default NavButton;
