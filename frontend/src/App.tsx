import { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './styles/App.css'
import useLoadJson from './components/useJsonLoader';
import ScrollTop from './components/ScrollTop';
import Header from './components/Header';
import TopPage from './pages/TopPage';
import ManualPage from './pages/ManualPage';
import DeckCollectionPage from './pages/DeckCollectionPage';
import TopicRoulettePage from './pages/TopicRoulettePage';

export let talkDecks:any;
export let talkTopics:any;

export function LoadJson(){
  const jsonData = useLoadJson();
  if (jsonData != undefined){
    talkDecks = jsonData.deckData;
    talkTopics = jsonData.topicData;
  }
};

function App() {
  const [isDarkTheme, setDarkTheme] = useState(false);

  const toggleTheme = () => {
    setDarkTheme(!isDarkTheme);
  };

  LoadJson();

  return (
    <Router>
      <div className={`theme ${isDarkTheme ? "dark" : "light"}`}>
        <ScrollTop />
        <Header handleToggle={toggleTheme}/>
        <Routes>
          <Route path='/' element={<TopPage />}></Route>
          <Route path='/roulette' element={<TopicRoulettePage />}></Route>
          <Route path='/decks' element={<DeckCollectionPage />}></Route>
          <Route path='/manual' element={<ManualPage />}></Route>
        </Routes>
      </div>
    </Router>
  );
};

export default App;
