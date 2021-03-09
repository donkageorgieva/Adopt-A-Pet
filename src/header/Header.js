import React from 'react';

import AdoptOptions from './AdoptOptions/AdoptOptions';
import styles from './Header.module.css';

const header = (props) => {
    return (
        <header>
              <nav>
             <div className={styles.burger_menu}>
               <div className={styles.burger__bar}></div>
               <div className={styles.burger__bar}></div>
               <div className={styles.burger__bar}></div>

        </div>
            <ul className={styles.menu}>
                
                <li><a href="#">Adopt</a></li>
                <li><a href="#"> Donate</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Contact</a></li>
            </ul>
        </nav>

<AdoptOptions />
        </header>
    )
}

export default header;