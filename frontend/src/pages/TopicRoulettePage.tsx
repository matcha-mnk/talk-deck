import { useState } from "react";
import { talkDecks, talkTopics } from '../App.tsx';
import '../styles/TopicRoulettePage.css'

let talkTopicHistory = [""];

const TopicRoulettePage = () => {
  const [viewTopic,setViewTopic] = useState('好きな天気は？');

    const changeViewTopic = () => {
      const r = Math.floor(Math.random() * talkTopics.length);
      const text = talkTopics[r].content;
      setViewTopic(text);
      talkTopicHistory.splice(0, 0, text);
      if(talkTopicHistory.length > 10) talkTopicHistory.splice(10, 1);
      console.log(talkTopicHistory);
    };
    const backViewTopic = () => {
      if (talkTopicHistory[1] != '' && talkTopicHistory[1] != undefined){
        setViewTopic(talkTopicHistory[1]);
        talkTopicHistory.splice(0,1);
      }
    };

  return(
    <div className="topic-roulette-page">
      <div className="content">
        <h1>話題ルーレット</h1>
        <div className="roulette-content">
            <div className="view-topic-area">
              <h2 className="view-topic">{viewTopic}</h2>
            </div>
            <button className="click-button-border back-button" onClick={backViewTopic}>Back</button>
            <button className="click-button-border start-button" onClick={changeViewTopic}>Next</button>
        </div>
      </div>

    </div>
  );
};

export default TopicRoulettePage;