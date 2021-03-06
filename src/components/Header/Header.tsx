import "./Header.css";
import { useTheme } from "context/Theme.context";
import { Link } from "react-router-dom";

export const Header = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <nav>
      <div className="brand-name">
        <Link className="link-to-home" to={`/`}>
          <i className="fas fa-bolt"></i> StormQuiz
        </Link>
      </div>
      <div>
        <a target={"_blank"} href="https://twitter.com/TheBestDhruv">
          <i className="theme fab fa-twitter"></i>
        </a>
        <a target={"_blank"} href="https://github.com/b0llu/StormQuiz">
          <i className="theme fab fa-github"></i>
        </a>
        {theme === "light" ? (
          <i onClick={toggleTheme} className="theme fas fa-moon"></i>
        ) : (
          <i onClick={toggleTheme} className="theme fas fa-sun"></i>
        )}
      </div>
    </nav>
  );
};
