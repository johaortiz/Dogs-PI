import styles from './App.module.css';
import { Routes, Route } from "react-router-dom";
import { Landing } from './Landing/Landing';
import { Home } from './Home/Home';

function App() {
  return (
    <div className={styles.App}>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
