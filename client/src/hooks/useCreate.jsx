import { useState } from 'react'
import { validator } from '../components/Create/validate';
import { postDogs } from '../utils/requests';
const templateDog = {
    name: '',
    weightMin: '',
    weightMax: '',
    heightMin: '',
    heightMax: '',
    life_spanMin: '',
    life_spanMax: '',
    image: ''
};


export const useCreate = () => {

    const [dog, setDog] = useState(templateDog);
    const [temperamentSpan, setTemperamentSpan] = useState('');
    const [temperamentsO, setTemperamentsO] = useState('');


    const [errors, setErrors] = useState({});


    const handleChange = (e) => {
        e.preventDefault();
        setDog((dog) => ({ ...dog, [e.target.name]: e.target.value }));
        setErrors(validator({ ...dog, [e.target.name]: e.target.value }));
    };


    const handleSubmit = (e) => {
        e.preventDefault();
        if (Object.keys(errors).length < 1) {
            postDogs(dog, temperamentSpan)
            setDog(templateDog);
            setTemperamentSpan('');
        } else {
            alert('Check the form...')
        }
    };


    const handleDelete = (e) => {
        e.preventDefault();
        const value = e.target.id;
        let pushing = temperamentsO;
        pushing.push(value);
        pushing.sort();
        setTemperamentsO(pushing);
        let filteredTemperamentsSelected = temperamentSpan.filter(temperament => temperament !== value);
        setTemperamentSpan(filteredTemperamentsSelected);
    };


    return [handleSubmit, handleChange, handleDelete, dog, setTemperamentSpan, setTemperamentsO, temperamentsO, temperamentSpan, errors];
}
