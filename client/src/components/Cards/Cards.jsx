import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Cards.module.css';

export const Cards = ({ dog }) => {
    const notFound = 'https://thumbs.dreamstime.com/b/dog-error-page-not-found-template-webpage-landing-illustrator-vector-188039604.jpg';
    return (
        <div className={styles.cards}>
            <Link to={`/dog/${dog.id}`} className={styles.link} >
                <img className={styles.image}
                    src={dog.image}
                    alt={dog.name}
                    height={300}
                    onError={event => {
                        event.target.src = notFound;
                        event.onerror = null;
                    }} />
                <p>{dog.name}</p>
                <p>{dog.temperament.replace(/, /g, " ~ ")}</p>
                <p>{dog.weightMin}~{dog.weightMax}</p>
            </Link>
        </div>
    )
}
