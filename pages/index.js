import Seo from "../components/Seo";

export default function Home(){
    
    return (
        <div className="container">
            <Seo title="Home" />
            <div className="bg"><a href="http://www.freepik.com" target="_blank"><small>Designed by <strong>GarryKillian</strong> / Freepik</small></a></div>
            <div className="intro">
                <h1 className="welcome">
                    <span className="emphasize">S</span>
                    <span className="emphasize">Y</span>
                    <span className="emphasize">S</span>
                    <span>T</span>
                    <span>E</span>
                    <span>M</span>
                    <span>S</span>
                    <span> </span>
                    <span>O</span>
                    <span>F</span>
                    <span> </span>
                    <span className="emphasize">U</span>
                    <span className="emphasize">R</span>
                    <span className="emphasize">B</span>
                    <span className="emphasize">A</span>
                    <span className="emphasize">N</span>
                </h1>
                <div className="logo">
                    {/* <img src="/logo.png" /> */}
                    <svg viewBox="0 0 1320 160">
                        <text x="50%" y="50%" dy="0" textAnchor="middle">SYSURBAN</text>
                    </svg>
                </div>
            </div>
            <style jsx>{`
                .container {
                    position: relative;
                    /* padding: 20px; */
                    // top: -2rem;
                    width: 100%;
                    height: calc(100vh - 160px);
                }
                .bg {
                    position: absolute;
                    top: 0;
                    left: 0;
                    right: 0;
                    bottom: 80px;
                    height: calc(100vh - 160px);
                    background-color: white;
                    background-image: url('/images/main_bg.jpg');
                    background-position: center center;
                    background-size: cover;
                    background-repeat: no-repeat;
                    // opacity: 0.25;
                    // z-index: -1;
                }
                .bg a {
                    position: absolute;
                    bottom: 20px;
                    right: 20px;
                    color: var(--main-color);
                    background-color: var(--light-shadow);
                    padding: 4px 8px;
                    border-radius: 12px;
                }
                .intro {
                    position: absolute;
                    top: 50%;
                    left: 20px;
                    right: 20px;
                    height: 50%;
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    align-items: center;
                    gap: 20px;
                    background-color: rgba(255,255,255,0.75)
                    border-radius: 20px;
                    transform: translateY(-50%);
                }
                h1 {
                    position: relative;
                    width: 100%;
                    padding: 20px;
                    letter-spacing: 2px;
                    text-align: center;
                    font-size: 2rem;
                    font-weight: 600;
                    background-color: rgba(0,0,0,0.25);
                    text-transform: uppercase;
                }
                h1 > span {
                    position: relative;
                    color: #777;
                    font-weight: 800;
                    padding: 2px 2px;
                }
                h1 > .emphasize {
                    position: relative;
                    color: var(--main-color);
                    font-weight: 800;
                }
                h1 > .emphasize::before {
                    content: '';
                    position: absolute;
                    top: 0;
                    left: 50%;
                    width: 5px;
                    height: 5px;
                    background-color: var(--sub-color);
                    border-radius: 50%;
                    transform: translateX(-50%);
                }
                .welcome:hover::before {
                    content: '';
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 16px;
                    height: 16px;
                    border-top: 5px solid var(--sub-color);
                    border-left: 5px solid var(--sub-color);
                }
                .welcome:hover::after {
                    content: '';
                    position: absolute;
                    right: 0;
                    bottom: 0;
                    width: 16px;
                    height: 16px;
                    border-right: 5px solid var(--sub-color);
                    border-bottom: 5px solid var(--sub-color);
                }
                .logo {
                    width: 100%;
                    height: 180px;
                    background-color: rgba(0,0,0,0.35);
                }
                svg {
                    width: 100%;
                    max-height: 100%;
                    padding: 20px;
                    font-family: 'Arial Black';
                }
                svg text {
                    text-transform: uppercase;
                    letter-spacing: 15px;
                    font-size: 160px;
                    font-weight: 600;
                    animation: fontStroke 10s infinite alternate;
                    transform: translateY(50px)
                }
                
                @keyframes fontStroke {
                    0% {
                        fill: rgba(127,27,125,1);
                        // stroke: rgba(127,27,125,0);
                        stroke: rgba(255,140,0,0);
                        stroke-width: 0;
                        stroke-dashoffset: -25%;
                        stroke-dasharray: 50% 0;
                    }
                    25% {
                        fill: rgba(127,27,125,0.25);
                        // stroke: rgba(127,27,125,1);
                        stroke: rgba(255,140,0,1);
                        stroke-width: 2;
                        stroke-dashoffset: 25%;
                        stroke-dasharray: 0 50%;
                    }
                    50% {
                        fill: rgba(127,27,125,0.25);
                        // stroke: rgba(127,27,125,1);
                        stroke: rgba(255,140,0,1);
                    }
                    60% {
                        fill: rgba(127,27,125,0.25);
                        // stroke: rgba(127,27,125,1);
                        stroke: rgba(255,140,0,1);
                        stroke-width: 3;
                    }
                    70% {
                        fill: rgba(127,27,125,0.25);
                        // stroke: rgba(127,27,125,1);
                        stroke: rgba(255,140,0,1);
                        
                    }
                    80% {
                        fill: rgba(127,27,125,0.25);
                        // stroke: rgba(127,27,125,1);
                        stroke: rgba(255,140,0,1);
                        stroke-width: 2;
                    }
                    90% {
                        fill: rgba(127,27,125,1);
                        // stroke: rgba(127,27,125,0);
                        stroke: rgba(255,140,0,0);
                        stroke-width: 0;
                        // stroke-dashoffset: -25%;
                        // stroke-dasharray: 50% 0;
                    }
                    100% {
                        fill: rgba(127,27,125,1);
                        // stroke: rgba(127,27,125,0);
                        // stroke: rgba(255,140,0,0);
                        stroke-width: 0;
                        stroke-dashoffset: -25%;
                        stroke-dasharray: 50% 0;
                    }
                }
                @media screen and  (max-width: 660px) {
                    .logo {
                        width: 100%;
                        height: 80px;
                    }
                }
                @media (prefers-color-scheme: dark) {
                    h1 > span {
                        position: relative;
                        color: #ccc;
                        font-weight: 800;
                    }
                }
            `}</style>
        </div>
    )
}
