import React, { useState } from 'react';
import MarkX from './icons/MarkX';
import MarkMenu from './icons/MarkMenu';

function Toolbar() {
  const [toggle, setToggle] = useState(false);

  return (
    <div className="toolbar justify-content">
      <div className="toolbar-md">
        <nav>Lorem ipsum</nav>
        <nav>Lorem ipsum</nav>
        <nav>Lorem ipsum</nav>
      </div>

      <div className="toolbar-sm justify-content-end">
        <div className="d-flex">
          {!toggle
                    && (
                    <div className="cursor-pointer" onClick={() => setToggle(!toggle)}>
                      <MarkMenu />
                    </div>
                    )}
          {toggle
                    && (
                    <div className="cursor-pointer" onClick={() => setToggle(!toggle)}>
                      <MarkX />
                    </div>
                    )}
        </div>
        {toggle
                    && (
                    <div className="menu-mobile">
                      <nav>Lorem ipsum</nav>
                      <nav>Lorem ipsum</nav>
                      <nav>Lorem ipsum</nav>
                    </div>
                    )}
      </div>

    </div>
  );
}

export default Toolbar;
