/** @jsxImportSource theme-ui */

import theme from './theme.js';
import './Styles/global.css';
import { ThemeUIProvider, Divider } from "theme-ui";
import Home from "./Pages/Homepage";
import Navbar from './Components/Navbar';
import Projects from "./Pages/Projects";
import AboutMe from "./Pages/AboutMe"
import Sidebar from './Components/Sidebar';

const App = () => {
  return (
    <>
    <div className = "container">
      <ThemeUIProvider theme = {theme}>
        <div className = "navbar">
          <Navbar />
        </div>
        <div className = "sidebar">
          <Sidebar />
        </div>
        <div className = "content">
          <Home />
          <AboutMe />
          <Projects />
        </div>
      </ThemeUIProvider> 
    </div> 
    </>
  );
}

export default App;
