import { useNavigate } from "react-router-dom";
import '../styles/TopPage.css';
import { useState } from "react";

const TopPage = () => {
  const navigate = useNavigate();
  const [viewTopic,setViewTopic] = useState('親譲りの無鉄砲で小供の時から損ばかりしている。小学校に居る時分学校の二階から飛び降りて');

  const changeViewTopic = () => {
    setViewTopic('テスト');
  }

  return(
    <div className="top-page">
      <div className="content-name">
        <p className="quick-start">QUICK START</p>
        <p className="about">ABOUT</p>
      </div>
      <div className="top-page-content">
        <div className="quick-start-content">
          <div>
            <p className="quick-start">Quick Start</p>
            <h1 className="quick-start">とりあえず話題を抽選してみる</h1>
          </div>
          <div className="view-topic-area">
            <h2 className="view-topic">{viewTopic}</h2>
          </div>
          <button className="click-button-border back-button">Back</button>
          <button className="click-button-border start-button">Next</button>
        </div>

        <div className="one-line information">
          <h1 className="logo">言の葉デッキMaker</h1>
          <h1>は話題を提供します。</h1>
        </div>
        <h2>あなただけの最強会話デッキを作ろう！</h2>

        <div>
          <button className="click-button-color" onClick={() => navigate("/decks")}>
            デッキ作成
          </button>
          <button className="click-button-border" onClick={() => navigate("/manual")}>
            使い方
          </button>
        </div>

        <div>
          <h2 className="information">言の葉デッキMakerって何？</h2>
          <p>いわゆる「会話デッキ」を作成・抽選できるWebアプリケーションです。</p>
          <p>話題に詰まったときなどにどうぞ。</p>
          <h2>主要な機能</h2>
          <ul>
            <li>話題の抽選</li>
            <li>タグ・カテゴリを使った話題の絞り込み</li>
            <li>話題・デッキの作成</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default TopPage;