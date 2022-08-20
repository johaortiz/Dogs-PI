import React, { useState } from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom'
import { getDogById } from '../../utils/requests';

export const Details = () => {

    const notFound = 'https://thumbs.dreamstime.com/b/dog-error-page-not-found-template-webpage-landing-illustrator-vector-188039604.jpg';
    const [dog, setDog] = useState(null);

    const { id } = useParams();
    useEffect(() => {
        getDogById(id).then((dog) => {
            setDog(dog.data)
        });
    }, [id]);

    return (
        <div>
            {dog
                ? <div>
                    <img src={dog.image}
                        alt={notFound}
                        height={300}
                        onError={event => {
                            event.target.src = notFound;
                            event.onerror = null;
                        }}
                    />
                    <p>Name: {dog.name}</p>
                    <p>Temperaments: {dog.temperament.replace(/, /g, " ~ ")}</p>
                    <p>Height: {dog.height.replace(/-/g, " ~ ")}</p>
                    <p>Weight: {dog.weightMin}~{dog.weightMax}</p>
                    <p>Life Span: {dog.life_span.replace(/-/g, " ~ ")}</p>
                </div>
                : <div>Loading...</div>}

        </div>
    )
}
