import { useState } from "react";
import { talkDecks, talkTopics } from '../App.tsx';
import { LoadJson } from "../App.tsx";
import '../styles/TopicRoulettePage.css'

let topics:any = [];
let talkTopicHistory = [""];
let validTags:any = [];
let isTagExactMatch = true;

const TopicRoulettePage = () => {
  const [viewTopic,setViewTopic] = useState('好きな天気は？');

    const changeViewTopic = () => {
      if(isTagExactMatch){
        // 完全一致フィルタリング
        topics = talkTopics?.filter((item:any) =>
          validTags.every((tag:any) => item.tags.includes(tag))
        );
      }else{
        if(validTags.length != 0){
          // 部分一致フィルタリング
          topics = talkTopics?.filter((item:any) =>
          item.tags.some((tag:any) => validTags.includes(tag))
        );
        }
      }
      // ランダム生成
      if(topics.length != 0){
        const r = Math.floor(Math.random() * topics.length);
        const text = topics[r].content;
        setViewTopic(text);
        talkTopicHistory.splice(0, 0, text);
        if(talkTopicHistory.length > 10) talkTopicHistory.splice(10, 1);
      }else{
        setViewTopic('ヒットするものが存在しません(・ω・)');
      }
    };
    // 前の抽選結果表示
    const backViewTopic = () => {
      if (talkTopicHistory[1] != '' && talkTopicHistory[1] != undefined){
        setViewTopic(talkTopicHistory[1]);
        talkTopicHistory.splice(0,1);
      }
    };

    if(talkTopics == undefined || talkTopics[0] == undefined) {
      LoadJson();
    };
    // Jsonからタグ全部とってくる
    const tags = [... new Set(talkTopics?.flatMap((item:any) => item.tags))];

    // タグの有効/無効 切り替え
    const ChangeValidTag = (tag:string) =>{
      if(!validTags.includes(tag)){
        validTags.push(tag);
      }else {
        validTags = validTags.filter((_tag:string) => _tag !== tag);
      }
    };

    const ChangeIsTagExactMatch = () => {
      isTagExactMatch = !isTagExactMatch;
    }

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
        <div className="filtering">
          <div className="filtering-menu">
            <h1>絞り込み</h1>
            <div className="filtering-toggle-ui">
              <p>完全一致</p>
              <label className="filtering-toggle-button">
                  <input type="checkbox" onChange={ChangeIsTagExactMatch}/>
              </label>
              <p>部分一致</p>
            </div>
          </div>
          <div className="tag-filter">
            {tags?.map((item:any, index:any) => (
              <label className="tag-content" key={index}>
                <input type="checkbox" onChange={() => ChangeValidTag(item)} />
                <p>{item}</p>
              </label>
            ))}
          </div>
        </div>
      </div>

    </div>
  );
};

export default TopicRoulettePage;