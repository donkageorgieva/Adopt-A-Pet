import React from 'react';
import styles from './AdoptOptions.module.css'

const adoptOptions = (props) => {
    return(
<React.Fragment>


    <div className={styles.search__options}>
    <a href='#'>Dogs</a>
    <a href='#'> Cats</a>
    <a href='#'>Other Pets</a>
    </div>

   
    </React.Fragment>
    )
}

export default adoptOptions;