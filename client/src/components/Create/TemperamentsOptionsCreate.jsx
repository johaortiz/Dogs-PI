import React, { useEffect } from 'react'
import { getTemperaments } from '../../utils/requests';
import styles from './Temperaments.module.css'

export const TemperamentsOptionsCreate = ({ setTemperamentSpan, temperamentsO, setTemperamentsO }) => {

  useEffect(() => {
      getTemperaments()
        .then(temperament => setTemperamentsO(temperament.data));
  }, []);


  const handleChange = (e) => {
    e.preventDefault();
    const value = e.target.value;
    setTemperamentSpan(dog => [...dog, value]);
    const filter = temperamentsO.filter(temperament => {
      return temperament !== value
    });
    setTemperamentsO(filter);
  }



  return (
    <select onChange={handleChange} className={styles.slc} >
      <option>Select a Dog...</option>
      {temperamentsO ? temperamentsO?.map(temperament => {
        return <option key={temperament} >{temperament}</option>
      }) : <option>Loading..</option>}
    </select>
  )
}
