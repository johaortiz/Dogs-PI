import React from 'react';
import notFound from '../../assets/notFounL.png';



export const Image = ({ styles }) => {
    return (
        <div>
            <img src={notFound} alt="Not Found :(" height={300} className={styles.image} />
            <p>Sorry... Search or Filter not Found...</p>
        </div>
    )
}
