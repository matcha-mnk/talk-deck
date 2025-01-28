import { useEffect, useState } from "react";

type DeckItem = { id: number; name: string};
type TopicItem = { id: number; content: string; tags: []; decks: []};

const useLoadJson = () => {
  const [deckData, setDeckData] = useState<DeckItem[]>([]);
  const [deckLoding, setDeckLoding] = useState(true);
  const [topicData, setTopicData] = useState<TopicItem[]>([]);
  const [topickLoding, setTopicLoding] = useState(true);

  useEffect(() => {
    fetch('http://localhost:5000/../deck-data.json')
      .then((response) => response.json())
      .then((json) => {
        setDeckData(Object.values(json) as DeckItem[]);
        setDeckLoding(false);
      })
      .catch((error) => console.error('Error fetching json:', error));
  }, []);
  useEffect(() => {
    fetch('http://localhost:5000/../topic-data.json')
      .then((response) => response.json())
      .then((json) => {
        setTopicData(Object.values(json) as TopicItem[])
        setTopicLoding(false);
      })
      .catch((error) => console.error('Error fetching json:', error));
  }, []);

  if(deckLoding || topickLoding) return
  return {deckData,topicData};
}

export default useLoadJson;