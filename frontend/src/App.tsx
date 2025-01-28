import { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './styles/App.css'
import Header from './components/Header';
import TopPage from './pages/TopPage';
import ManualPage from './pages/ManualPage';
import DeckCollectionPage from './pages/DeckCollectionPage';

function App() {
  const [isDarkTheme, setDarkTheme] = useState(false);

  const toggleTheme = () => {
    setDarkTheme(!isDarkTheme);
  };

  return (
    <Router>
      <div className={`theme ${isDarkTheme ? "dark" : "light"}`}>
        <Header handleToggle={toggleTheme}/>
        <Routes>
          <Route path='/' element={<TopPage />}></Route>
          <Route path='/decks' element={<DeckCollectionPage />}></Route>
          <Route path='/manual' element={<ManualPage />}></Route>
        </Routes>
      </div>
    </Router>
  )
}

export default App;
