import { useNavigate } from "react-router-dom";
import { MoonSvg } from "../svgs/MoonSvg";
import { SunSvg } from "../svgs/SunSvg";
import '../styles/Header.css';

const Header = ({handleToggle}: any) => {
  const navigate = useNavigate();
  return(
    <header>
      <button className="top-button" onClick={() => navigate("")}><h1 className="logo">言の葉デッキMaker</h1></button>
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