import { useEffect, useState } from "react";

type DeckItem = { id: number; name: string};
type TopicItem = { id: number; content: string; tags: []; decks: []};

const useLoadJson = () => {
  const [deckData, setDeckData] = useState<DeckItem[]>([]);
  const [topicData, setTopicData] = useState<TopicItem[]>([]);

  useEffect(() => {
    fetch('http://localhost:5000/../deck-data.json')
      .then((response) => response.json())
      .then((json) => setDeckData(Object.values(json) as DeckItem[]))
      .catch((error) => console.error('Error fetching json:', error));
  }, []);
  useEffect(() => {
    fetch('http://localhost:5000/../topic-data.json')
      .then((response) => response.json())
      .then((json) => setTopicData(Object.values(json) as TopicItem[]))
      .catch((error) => console.error('Error fetching json:', error));
  }, []);

  return {deckData,topicData};
}

export default useLoadJson;