import logo from "../../assets/images/logo.png";
import "./Header.css";
import { useNavigate, useLocation } from "react-router-dom";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

function Header() {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const renderHeader = () => {
    if (pathname === "/") {
      return (
        <div className="title-container">
          <h2>My projects</h2>
          <button onClick={() => navigate("/add")}>
            <div>+</div> Add project
          </button>
        </div>
      );
    } else {
      return (
        <div className="goback-container">
          <button onClick={() => navigate("/")}>
            <ArrowBackIcon fontSize="12" /> Back
          </button>
          <h2>{pathname === "/add" ? "Add project" : "Edit project"}</h2>
        </div>
      );
    }
  };

  return (
    <div className="header-container">
      <div className="logo-container">
        <img src={logo} alt="Logo" />
      </div>
      {renderHeader()}
    </div>
  );
}

export default Header;
