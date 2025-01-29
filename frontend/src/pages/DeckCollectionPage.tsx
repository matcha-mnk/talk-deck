import { useState } from 'react';
import '../styles/DeckCollectionPage.css'
import { talkDecks, talkTopics } from '../App.tsx';
import LoadJson from '../App.tsx';

let topics:any;
let validTags:any = [];
let isTagExactMatch = true;
let road = false;

const DeckCollectionPage = () => {
  const [update, setUpdate] = useState(false);
  const [isOpenPopup, setIsOpenPopup] = useState(false);

  const ViewEditPopup = (topicContent:any) => {
    setIsOpenPopup(!isOpenPopup);
  };

  if(talkDecks == undefined || talkDecks[0] == undefined || talkTopics == undefined || talkTopics[0] == undefined){
    LoadJson();
  };
  // Jsonからタグ全部とってくる
  const tags = [... new Set(talkTopics?.flatMap((item:any) => item.tags))];

  const ChangeIsTagExactMatch = () => {
    isTagExactMatch = !isTagExactMatch;
    ChangeTopic();
  };

  // タグの有効/無効 切り替え
  const ChangeValidTag = (tag:string) =>{
    if(!validTags.includes(tag)){
      validTags.push(tag);
    }else {
      validTags = validTags.filter((_tag:string) => _tag !== tag);
    }
    ChangeTopic();
  };

  function ChangeTopic() {
    if(validTags.length != 0){
      if(isTagExactMatch){
        // 完全一致フィルタリング
        topics = talkTopics?.filter((item:any) =>
          validTags.every((tag:any) => item.tags.includes(tag))
        );
      }else{
        // 部分一致フィルタリング
        topics = talkTopics?.filter((item:any) =>
          item.tags.some((tag:any) => validTags.includes(tag))
          );
      }
    }else{
      topics = talkTopics;
    }

    Update();
  }

  function Update(){
    // 良いやり方が思いつかん
    road = !road;
    setUpdate(road);
  }

  if(topics == undefined) topics = talkTopics;

  return(
    <div className="deck-collection-page">
      <h1>デッキコレクション</h1>
      <p>※現在は観賞用です</p>
      <div className="decks">
        {talkDecks?.map((item:any, index:any) => (
          <button className="deck-content" key={index}>
            <h2>{item.name}</h2>
            <p>{item.description}</p>
          </button>
        ))}
      </div>
      <h1>カードコレクション</h1>
      <details>
        <summary>絞り込み</summary>
        <div className="filtering-toggle-ui">
              <p>完全一致</p>
              <label className="filtering-toggle-button">
                  <input type="checkbox" onChange={ChangeIsTagExactMatch}/>
              </label>
              <p>部分一致</p>
        </div>
        <div className="tag-filter">
            {tags?.map((item:any, index:any) => (
              <label className="tag-content" key={index}>
                <input type="checkbox" onChange={() => ChangeValidTag(item)} />
                <p>{item}</p>
              </label>
            ))}
        </div>
      </details>
      <div className="cards">
        {topics?.map((item:any, index:any) => (
          <button className="card-content" key={index} onClick={() => ViewEditPopup(item)}>
            <h2>{item.content}</h2>
            <div className="tags">
              {item.tags.map((tag:any, idx:any) => (
                <p key={idx} className="tag">{tag}</p>
              ))}
            </div>
          </button>
        ))}
      </div>
      {isOpenPopup && (
        <div className="edit-popup">
          <div className='edit-popup-content'>
            <h2>編集...</h2>
            <p>内容</p>
            <button onClick={ViewEditPopup}>キャンセル</button>
            <button>保存</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default DeckCollectionPage;