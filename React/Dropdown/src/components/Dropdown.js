import React, { useEffect, useState } from 'react';
import { CSSTransition } from 'react-transition-group';

import styles from '../styles/dropdown.module.css';

function Dropdown() {
  const [hover, setHover] = useState(false);

  //for removing findDOMNode deprecation warning
  const nodeRef = React.useRef(null);

  // dropdown list items
  const dropdownList = ['HTML', 'CSS', 'JavaScript'];

  useEffect(() => {}, [hover]);

  // called when mouse is over the button
  const handleMouseEnter = () => {
    setHover(true);
  };

  // called when mouse is moved out of the button
  const handleMouseLeave = () => {
    setHover(false);
  };

  return (
    <div className={styles.container}>
      <h1>Dropdown</h1>
      <div
        className={styles.dropdown_list_container}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <button id={styles.btn}>
          <span>SELECT</span>
          <img
            src='https://cdn-icons-png.flaticon.com/512/159/159694.png'
            alt=''
            height='16.5'
            width='16.5'
          />
        </button>
        <CSSTransition
          nodeRef={nodeRef}
          in={hover}
          timeout={500}
          classNames={{
            enter: styles.list_items_enter,
            enterActive: styles.list_items_enter_active,
            exit: styles.list_items_exit,
            exitActive: styles.list_items_exit_active,
          }}
          unmountOnExit
          children={() => {}}
        >
          <ul ref={nodeRef} className={styles.dropdown_list}>
            {dropdownList.map((item, index) => {
              return (
                <li
                  onClick={(e) => {
                    console.log(e.target.innerText);
                    setHover(false);
                  }}
                  key={index}
                >
                  {item}
                </li>
              );
            })}
          </ul>
        </CSSTransition>
      </div>
    </div>
  );
}

export default Dropdown;
