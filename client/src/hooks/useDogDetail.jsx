import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getDogById } from "../utils/requests";


export const useDogDetail = () => {
    const notFound = 'https://thumbs.dreamstime.com/b/dog-error-page-not-found-template-webpage-landing-illustrator-vector-188039604.jpg';
    const [dog, setDog] = useState(null);

    const { id } = useParams();
    useEffect(() => {
        getDogById(id).then((dog) => {
            setDog(dog.data)
        });
    }, [id]);

    return [dog, notFound];
}
