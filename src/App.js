import "bootstrap/dist/css/bootstrap.min.css";
import "./netflix.css";
import NetflixNavbar from "./components/NetflixNavbar.jsx";
import NetflixFooter from "./components/NetflixFooter";
import NetflixCarousel from "./components/NetflixCarousel";
import SubNavbar from "./components/SubNavbar";

function App() {
  return (
    <div>
      <NetflixNavbar />
      <SubNavbar />
      <NetflixCarousel movie="Harry Potter" />
      <NetflixCarousel movie="Lord of the Rings" />
      <NetflixCarousel movie="Star Wars" />
      <NetflixCarousel movie="Top" />
      <NetflixFooter />
    </div>
  );
}

export default App;
