import { useEffect, useState } from "react";

const useLoadJson = () => {
  const [deckData, setDeckData] = useState(null);
  const [topicData, setTopicData] = useState(null);

  useEffect(() => {
    fetch('http://localhost:5000/../deck-data.json')
      .then((response) => response.json())
      .then((json) => setDeckData(json))
      .catch((error) => console.error('Error fetching json:', error));
  }, []);
  useEffect(() => {
    fetch('http://localhost:5000/../topic-data.json')
      .then((response) => response.json())
      .then((json) => setTopicData(json))
      .catch((error) => console.error('Error fetching json:', error));
  }, []);

  return {deckData,topicData};
}

export default useLoadJson;