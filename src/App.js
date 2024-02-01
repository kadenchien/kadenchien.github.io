/** @jsxImportSource theme-ui */

import theme from './theme.js';
import './Styles/global.css';
import { ThemeUIProvider} from "theme-ui";
import Navbar from './Components/Navbar';
import Sidebar from './Components/Sidebar';
import Home from './Pages/Homepage';
import AboutMe from './Pages/AboutMe';
import Education from './Pages/Education';
import Projects from './Pages/Projects';
import Contact from './Pages/Contact';


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
        <Education id='education' />
        <Projects id='projects' />
        <Contact id='contact' />
      </ThemeUIProvider>
    </div>
  );
}

export default App;