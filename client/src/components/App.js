import styles from './App.module.css';
import { Routes, Route } from "react-router-dom";
import { Landing } from './Landing/Landing';
import { Home } from './Home/Home';
import { Details } from './Details/Details';
import { Create } from './Create/Create';
import { NotFound } from './NotFound/NotFound';

function App() {
  return (
    <div className={styles.App}>
      <Routes>
        <Route exact path='/' element={<Landing />} />
        <Route exact path='/home' element={<Home />} />
        <Route exact path='/dog/:id' element={<Details />} />
        <Route exact path='/create' element={<Create />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
