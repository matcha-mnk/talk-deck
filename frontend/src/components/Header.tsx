import { useNavigate } from "react-router-dom";
import { MoonSvg } from "../svgs/MoonSvg";
import { SunSvg } from "../svgs/SunSvg";
import '../styles/Header.css';

const Header = ({handleToggle}: any) => {
  const navigate = useNavigate();
  return(
    <header>
      <div className="navigate-content">
        <button className="top-button" onClick={() => navigate("/")}><h1 className="logo">言の葉デッキMaker<span>β</span></h1></button>
        <button className="navigate-button" onClick={() => navigate("/decks")}>デッキ一覧</button>
        <button className="navigate-button" onClick={() => navigate("/manual")}>使い方</button>
      </div>
      <div className="theme-change-ui">
        <SunSvg size={24} color="#f4f4f4"/>
        <label className="toggle-button">
          <input type="checkbox" onChange={handleToggle} />
        </label>
        <MoonSvg size={24} color="#1f232a" />
      </div>
    </header>
  );
};

export default Header;