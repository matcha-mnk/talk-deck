import { useEffect, useState } from "react";

type DeckItem = { id: number; name: string};
type TopicItem = { id: number; content: string; tags: []; decks: []};

const useLoadJson = () => {
  const [deckData, setDeckData] = useState<DeckItem[]>([]);
  const [deckLoding, setDeckLoding] = useState(true);
  const [topicData, setTopicData] = useState<TopicItem[]>([]);
  const [topickLoding, setTopicLoding] = useState(true);

  const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000';

  useEffect(() => {
    fetch(`${API_URL}/../deck-data.json`)
      .then((response) => response.json())
      .then((json) => {
        setDeckData(Object.values(json) as DeckItem[]);
        setDeckLoding(false);
      })
      .catch((error) => console.error('Error fetching json:', error));
  }, []);
  useEffect(() => {
    fetch(`${API_URL}/../topic-data.json`)
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