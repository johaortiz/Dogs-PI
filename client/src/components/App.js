import styles from './App.module.css';
import { Routes, Route } from "react-router-dom";
import { Landing } from './Landing/Landing';
import { Home } from './Home/Home';
import { Details } from './Details/Details';

function App() {
  return (
    <div className={styles.App}>
      <Routes>
        <Route path='/' element={<Landing />} />
        <Route path='/home' element={<Home />} />
        <Route path='/dog/:id' element={<Details />} />
      </Routes>
    </div>
  );
}

export default App;
