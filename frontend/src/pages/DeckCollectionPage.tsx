import '../styles/DeckCollectionPage.css'
import { talkDecks, talkTopics } from '../App.tsx';
import LoadJson from '../App.tsx';

const DeckCollectionPage = () => {
  if(talkDecks == undefined || talkDecks[0] == undefined){
    LoadJson();
  };

  return(
    <div className="deck-collection-page">
      <h1>デッキコレクション</h1>
      <div className="decks">
        {talkDecks?.map((item:any, index:any) => (
          <button className="deck-content" key={index}>
            <h2>{item.name}</h2>
            <p>{item.description}</p>
          </button>
        ))}
      </div>
    </div>
  );
};

export default DeckCollectionPage;