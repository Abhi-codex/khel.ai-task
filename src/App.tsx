import { useEffect, useRef, useState } from "react";
import "./App.css";
import { World, type GlobeConfig, type Position } from "./components/ui/globe";
import point from './assets/placeholder.avif';
import image1 from './assets/images1.jpeg'
import image2 from './assets/images2.jpeg'
import image3 from './assets/images3.jpeg'
import image4 from './assets/images4.jpeg'
import image5 from './assets/images5.jpeg'
import sign from './assets/sign.png'

const positions: Position[] = [
  { order: 0, startLat: 28.6139, startLng: 77.2090, endLat: 28.6139, endLng: 77.2090, arcAlt: 0, color: "#22c55e" },
];

const globeConfig: GlobeConfig = {
  pointSize: 1,
  globeColor: "#212121",
  showAtmosphere: true,
  atmosphereColor: "#c6c6c6ff",
  atmosphereAltitude: 0.15,
  emissive: "#212121",
  emissiveIntensity: 0.5,
  shininess: 0.5,
  polygonColor: "rgb(171,171,171)",
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
      if (window.scrollY > 5) setHeadingVisible(true);
    };
    window.addEventListener("scroll", onScroll);
    if (window.scrollY > 5) setHeadingVisible(true);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div>
      <div className="main">
        {/* --- FIXED POINTERS (Your Manual Setup) --- */}
        <div style={{ position: "absolute", left: "29%", top: "28%", zIndex: 2 }} className="pointer-wrapper">
            <img src={point} alt="pointer" className="pointer-icon" />
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

        {/* Pointer 2 */}
        <div style={{ position: "absolute", left: "60%", top: "30%", zIndex: 2 }} className="pointer-wrapper">
            <img src={point} alt="pointer" className="pointer-icon" />
            <div className="pointer-card">
                <div className="pointer-image-wrapper">
                    <button className="arrow-btn arrow-left">❮</button>
                    <img src={image2} alt="Location" className="pointer-card-image" />
                    <button className="arrow-btn arrow-right">❯</button>
                </div>
                <div className="pointer-card-content">
                    <h4>Location 2</h4>
                    <p>Details here.</p>
                </div>
            </div>
        </div>

        {/* Pointer 3 */}
        <div style={{ position: "absolute", left: "50%", top: "35%", zIndex: 2 }} className="pointer-wrapper">
            <img src={point} alt="pointer" className="pointer-icon" />
            <div className="pointer-card">
                <div className="pointer-image-wrapper">
                    <button className="arrow-btn arrow-left">❮</button>
                    <img src={image3} alt="Location" className="pointer-card-image" />
                    <button className="arrow-btn arrow-right">❯</button>
                </div>
                <div className="pointer-card-content">
                    <h4>Location 3</h4>
                    <p>Info goes here.</p>
                </div>
            </div>
        </div>

         {/* Pointer 4 */}
         <div style={{ position: "absolute", left: "32%", top: "50%", zIndex: 2 }} className="pointer-wrapper">
            <img src={point} alt="pointer" className="pointer-icon" />
            <div className="pointer-card">
                <div className="pointer-image-wrapper">
                    <button className="arrow-btn arrow-left">❮</button>
                    <img src={image4} alt="Location" className="pointer-card-image" />
                    <button className="arrow-btn arrow-right">❯</button>
                </div>
                <div className="pointer-card-content">
                    <h4>Location 4</h4>
                    <p>Counts etc.</p>
                </div>
            </div>
        </div>

         {/* Pointer 5 */}
         <div style={{ position: "absolute", left: "70%", top: "40%", zIndex: 2 }} className="pointer-wrapper">
            <img src={point} alt="pointer" className="pointer-icon" />
            <div className="pointer-card">
                <div className="pointer-image-wrapper">
                    <button className="arrow-btn arrow-left">❮</button>
                    <img src={image5} alt="Location" className="pointer-card-image" />
                    <button className="arrow-btn arrow-right">❯</button>
                </div>
                <div className="pointer-card-content">
                    <h4>Location 5</h4>
                    <p>More details.</p>
                </div>
            </div>
        </div>

        <div style={{ width: "100vw", height: "100vh" }}>
          <World globeConfig={globeConfig} data={positions} />
        </div>
      </div>

      {/* --- BOTTOM SECTION (MATCHING YOUR IMAGE) --- */}
      <div className="below-section">
        <div className="content-container">
            {/* Left Side: Text */}
            <div className="text-content">
                <div className="heading-label">
                    <img src={sign} alt="" className="sign-icon" /> 
                    <span>ECOSYSTEM</span>
                </div>
                
                <h2 ref={headingRef} className={`hero-text ${headingVisible ? "visible" : ""}`}>
                    We bridge sports, gaming, and lifestyle by transforming collectibles into dynamic, cross-platform assets across mobile games
                </h2>
            </div>

            {/* Right Side: Buttons */}
            <div className="nav-buttons">
                <button className="nav-btn">←</button>
                <button className="nav-btn">→</button>
            </div>
        </div>
      </div>
    </div>
  );
}

export default App;