import React from 'react';
import { useCreate } from '../../hooks/useCreate';
import { BackHome } from '../BtnsFilters/BackHome';
import { TemperamentsOptionsCreate } from './TemperamentsOptionsCreate';
import styles from './Create.module.css';

export const Create = () => {

    const [handleSubmit, handleChange, handleDelete,
        dog, setTemperamentSpan, setTemperamentsO,
        temperamentsO, temperamentSpan, errors] = useCreate();


    return (
        <span>
            <h1>Create a new Dog</h1>
            <BackHome />
            <form onSubmit={handleSubmit} className={styles.container}>
                <div className={styles.div} >Name:
                    <input className={styles.handle} type="text" name='name' onChange={handleChange} value={dog.name} autoComplete='off' required placeholder='Name...' />
                    {errors.name && (<p className={styles.p}>{errors.name}</p>)}
                </div>
                <div className={styles.div} >Weight Min:
                    <input className={styles.handle} type="text" name='weightMin' onChange={handleChange} value={dog.weightMin} autoComplete='off' required placeholder='Weight Min...' />
                </div>
                {errors.weightMin && (<p className={styles.p}>{errors.weightMin}</p>)}
                <div className={styles.div} >Weight Max:
                    <input className={styles.handle} type="text" name='weightMax' onChange={handleChange} value={dog.weightMax} autoComplete='off' required placeholder='Weight Max...' />
                </div>
                {errors.weightMax && (<p className={styles.p}>{errors.weightMax}</p>)}
                <div className={styles.div} >Height Min:
                    <input className={styles.handle} type="text" name='heightMin' onChange={handleChange} value={dog.heightMin} autoComplete='off' required placeholder='Height Min...' />
                </div>
                {errors.heightMin && (<p className={styles.p}>{errors.heightMin}</p>)}
                <div className={styles.div} >Height Max:
                    <input className={styles.handle} type="text" name='heightMax' onChange={handleChange} value={dog.heightMax} autoComplete='off' required placeholder='Height Max...' />
                </div>
                {errors.heightMax && (<p className={styles.p}>{errors.heightMax}</p>)}
                <div className={styles.div} >Life Span Min:
                    <input className={styles.handle} type="text" name='life_spanMin' onChange={handleChange} value={dog.life_spanMin} autoComplete='off' required placeholder='Life Span Min...' />
                </div>
                {errors.life_spanMin && (<p className={styles.p}>{errors.life_spanMin}</p>)}
                <div className={styles.div} >Life Span Max:
                    <input className={styles.handle} type="text" name='life_spanMax' onChange={handleChange} value={dog.life_spanMax} autoComplete='off' required placeholder='Life Span Max...' />
                </div>
                {errors.life_spanMax && (<p className={styles.p}>{errors.life_spanMax}</p>)}
                <div className={styles.div} >Image URL:
                    <input className={styles.handle} type="text" name='image' onChange={handleChange} value={dog.image} autoComplete='off' placeholder='(Optional) URL...' />
                </div>

                <TemperamentsOptionsCreate setTemperamentSpan={setTemperamentSpan} temperamentsO={temperamentsO} setTemperamentsO={setTemperamentsO} /> <br></br>
                <span>{temperamentSpan.length > 0 ? temperamentSpan?.map(temperament => {
                    return <span className={styles.ul} key={temperament}>{temperament} <span className={styles.close} id={temperament} onClick={handleDelete}>x</span></span>
                }) : <p></p>}</span> <br />

                <button className={styles.btn} type="submit" >Add Breed</button>

            </form>
        </span>

    )
}
