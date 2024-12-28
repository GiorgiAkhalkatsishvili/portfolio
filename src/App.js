import './App.css';
import AboutComponent from './components/AboutComponent';
import BannerComponent from './components/BannerComponent';
import CenterComponent from './components/CenterComponent';
import ContactComponent from './components/ContactComponent';
import FooterComponent from './components/FooterComponent';
import HeaderComponent from './components/HeaderComponent';
import ProjectsComponent from './components/ProjectsComponent';
import RatingsComponent from './components/RatingsComponent';


function App() {
  return (
    <div className="App">
      <HeaderComponent />
      <BannerComponent />
      <CenterComponent />
      <AboutComponent />
      <ProjectsComponent />
      <RatingsComponent />
      <ContactComponent />
      <FooterComponent/>
    </div>
  );
}

export default App;
