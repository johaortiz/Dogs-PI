import React from 'react';
import { useDogDetail } from '../../hooks/useDogDetail';
import styles from './Details.module.css';
import { BackHome } from '../BtnsFilters/BackHome';

export const Details = () => {

    const [dog, notFound] = useDogDetail();


    return (
        <div className={styles.detailsContainer}>
            {dog
                ? <div className={styles.columns}>
                    <img
                        className={styles.image}
                        src={dog.image}
                        alt={notFound}
                        height={300}
                        onError={event => {
                            event.target.src = notFound;
                            event.onerror = null;
                        }}
                    />
                    <span className={styles.text}>
                        <p>Name: {dog.name}</p>
                        <p>Temperaments: {dog.temperament.replace(/, /g, " ~ ")}</p>
                        <p>Height: {dog.height.replace(/-/g, " ~ ")}</p>
                        <p>Weight: {dog.weightMin}~{dog.weightMax}</p>
                        <p>Life Span: {dog.life_span.replace(/-/g, " ~ ")}</p>
                    </span>
                    <BackHome />
                </div>
                : <div>Loading...</div>}

        </div>
    )
}
