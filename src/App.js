/** @jsxImportSource theme-ui */

import theme from './theme.js';
import './Styles/global.css';
import { ThemeUIProvider} from "theme-ui";
import Navbar from './Components/Navbar';
import Sidebar from './Components/Sidebar';
import Home from './Pages/Homepage';
import AboutMe from './Pages/AboutMe';
import Projects from './Pages/Projects';
import Education from './Pages/Education';
import Experience from './Pages/Experience';
import Footer from './Pages/Footer.js';


const App = () => {
  return (
    <div className="container">
      <ThemeUIProvider theme={theme}>
        <div className="navbar">
          <Navbar />
        </div>
        <div className="sidebar">
          <Sidebar />
        </div>
        <Home id='home' />
        <AboutMe id='about' />
        <Projects id='projects' />
        <Education id='education' />
        <Experience id='experience' />
        <Footer id='footer' />
      </ThemeUIProvider>
    </div>
  );
}

export default App;