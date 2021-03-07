import React from 'react';
import styles from './Nav.module.css'


const nav = () => {
    return (
      
       
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
       
    )

}








export default nav;