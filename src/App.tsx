import { useEffect, useRef, useState } from "react";
import "./App.css";
import { World, type GlobeConfig, type Position } from "./components/ui/globe";
import point from './assets/placeholder.png';
import image1 from './assets/images1.jpeg'
import image2 from './assets/images2.jpeg'
import image3 from './assets/images3.jpeg'
import image4 from './assets/images4.jpeg'
import image5 from './assets/images5.jpeg'
// function generateFixedPoints(): Position[] {
//   const points: Position[] = [];
//   let order = 0;

//   for (let lat = -80; lat <= 80; lat += 50) {
//     for (let lng = -180; lng <= 180; lng += 50) {
//       points.push({
//         order: order++,
//         startLat: lat,
//         startLng: lng,
//         endLat: lat,
//         endLng: lng,
//         arcAlt: 0,
//         color: "#e21010",
//       });
//     }
//   }

//   return points;
// }

// const positions: Position[] = generateFixedPoints();

const positions: Position[] = [
  { order: 0, startLat: 28.6139, startLng: 77.2090, endLat: 28.6139, endLng: 77.2090, arcAlt: 0.5, color: "#22c55e" },
];

const globeConfig: GlobeConfig = {
  pointSize: 3,
  globeColor: "#212121",
  showAtmosphere: true,
  atmosphereColor: "#c6c6c6ff",
  atmosphereAltitude: 0.15,
  emissive: "#212121",
  emissiveIntensity: 0.5,
  shininess: 0.5,
  polygonColor: "rgba(255, 255, 255, 0.95)",
  pointLight: "#e21010",
  arcTime: 2000,
  arcLength: 0.5,
  rings: 1,
  initialPosition: { lat: 0, lng: 0 },
};

function App() {
  const headingRef = useRef<HTMLHeadingElement | null>(null);
  const [headingVisible, setHeadingVisible] = useState(false);

  useEffect(() => {
  const onScroll = () => {
    if (window.scrollY > 5) {
      setHeadingVisible(true);
    }
  };

  window.addEventListener("scroll", onScroll);

  if (window.scrollY > 5) {
    setHeadingVisible(true);
  }

  return () => {
    window.removeEventListener("scroll", onScroll);
  };
}, []);

  return (
    <div>
    <div className="main">
      <div>
  <div 
    style={{
      position: "absolute",
      left: "36vw",
      top: "60vh",
      zIndex: 2,
    }}
    className="pointer-wrapper"
  >
    <img
      src={point}
      alt="pointer"
      className="pointer-icon"
    />

    <div className="pointer-card">
      <div className="pointer-image-wrapper">
    <button className="arrow-btn arrow-left">❮</button>

    <img src={image1} alt="Location" className="pointer-card-image" />

    <button className="arrow-btn arrow-right">❯</button>
  </div>
      <div className="pointer-card-content">
        <h4>Location 1</h4>
        <p>Short description about this location or stat.</p>
      </div>
    </div>
  </div>

  <div
    style={{
      position: "absolute",
      left: "70vw",
      top: "50vh",
      zIndex: 2,
    }}
    className="pointer-wrapper"
  >
    <img
      src={point}
      alt="pointer"
      className="pointer-icon"
    />

    <div className="pointer-card">
      <div className="pointer-image-wrapper">
    <button className="arrow-btn arrow-left">❮</button>

    <img src={image2} alt="Location" className="pointer-card-image" />

    <button className="arrow-btn arrow-right">❯</button>
  </div>
      <div className="pointer-card-content">
        <h4>Location 2</h4>
        <p>Some details or metric related to this point.</p>
      </div>
    </div>
  </div>

  <div
    style={{
      position: "absolute",
      left: "22vw",
      top: "50vh",
      zIndex: 2,
    }}
    className="pointer-wrapper"
  >
    <img
      src={point}
      alt="pointer"
     className="pointer-icon"
    />

    <div className="pointer-card">
      <div className="pointer-image-wrapper">
    <button className="arrow-btn arrow-left">❮</button>

    <img src={image3} alt="Location" className="pointer-card-image" />

    <button className="arrow-btn arrow-right">❯</button>
  </div>
      <div className="pointer-card-content">
        <h4>Location 3</h4>
        <p>Any info you want to show here.</p>
      </div>
    </div>
  </div>

  <div
    style={{
      position: "absolute",
      left: "20vw",
      top: "80vh",
      zIndex: 2,
    }}
    className="pointer-wrapper"
  >
    <img
      src={point}
      alt="pointer"
      className="pointer-icon"
    />

    <div className="pointer-card">
      <div className="pointer-image-wrapper">
    <button className="arrow-btn arrow-left">❮</button>

    <img src={image4} alt="Location" className="pointer-card-image" />

    <button className="arrow-btn arrow-right">❯</button>
  </div>
      <div className="pointer-card-content">
        <h4>Location 4</h4>
        <p>You can put name, counts, etc. here.</p>
      </div>
    </div>
  </div>

  <div
    style={{
      position: "absolute",
      left: "80vw",
      top: "80vh",
      zIndex: 2,
    }}
    className="pointer-wrapper"
  >
    <img
      src={point}
      alt="pointer"
      className="pointer-icon"
    />

    <div className="pointer-card">
      <div className="pointer-image-wrapper">
    <button className="arrow-btn arrow-left">❮</button>

    <img src={image5} alt="Location" className="pointer-card-image" />

    <button className="arrow-btn arrow-right">❯</button>
  </div>
      <div className="pointer-card-content">
        <h4>Location 5</h4>
        <p>Details for this marker go here.</p>
      </div>
    </div>
  </div>
</div>
<div style={{width:"100vw", height:"100vh"}}>
      <World globeConfig={globeConfig} data={positions}/>
      </div>
</div>
      <section className="below-section">
        <h1
          ref={headingRef}
          className={`rise-heading ${headingVisible ? "visible" : ""}`}
        >
          Khel.ai
        </h1>
        <p className={`below-text ${headingVisible ? "visible" : ""}`}>
          We bridge sports, gaming, and
lifestyle by transforming collectibles
into dynamic, cross-platform
assets across mobile aames
        </p>
      </section>
    </div>
  );
}

export default App;
