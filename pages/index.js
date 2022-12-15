import Seo from "../components/Seo";

export default function Home(){
    
    return (
        <div className="container">
            <Seo title="Home" />
            <div className="bg"></div>
            <div className="intro">
                <h1><span className="welcome">Welcome to SYSURBAN</span></h1>
                <div className="logo">
                    {/* <img src="/logo.png" /> */}
                    <svg viewBox="0 0 1320 260">
                        <text x="50%" y="200" dy="0" textAnchor="middle">SYSURBAN</text>
                    </svg>
                </div>
            </div>
            <style jsx>{`
                .container {
                    /* padding: 20px; */
                }
                .bg {
                    position: absolute;
                    top: 80px;
                    left: 0;
                    right: 0;
                    bottom: 80px;
                    height: calc(100vh - 160px);
                    background-color: white;
                    background-image: url('/images/main_bg.jpg');
                    background-position: center center;
                    background-size: cover;
                    background-repeat: no-repeat;
                    opacity: 0.25;
                    z-index: -1;
                }
                .intro {
                    position: absolute;
                    top: 100px;
                    left: 20px;
                    right: 20px;
                    bottom: 100px;
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    align-items: center;
                    gap: 20px;
                    background-color: rgba(255,255,255,0.75)
                    border-radius: 20px;
                }
                h1 {
                    color: var(--main-color);
                    width: 100%;
                    padding: 20px;
                    letter-spacing: 2px;
                    text-align: center;
                    background-color: rgba(0,0,0,0.25);
                }
                h1 > .welcome {
                    position: relative;
                    padding: 10px 20px;
                    text-transform: uppercase;
                }
                .logo {
                    width: 100%;
                    height: 160px;
                    // background-color: rgba(255,255,255,0.5);
                    background-color: rgba(0,0,0,0.5);
                }
                svg {
                    /* display: absolute; */
                    width: 100%;
                    max-height: 100%;
                    padding: 20px;
                    /* font-family: raleway; */
                }
                svg text {
                    text-transform: uppercase;
                    letter-spacing: 15px;
                    font-size: 200px;
                    font-weight: 700;
                    animation: fontStroke 7s infinite alternate;
                    /* transform: translate(-50%, -50%) */
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
                @keyframes fontStroke {
                    0% {
                        fill: rgba(127,27,125,1);
                        stroke: rgba(127,27,125,0);
                        stroke-width: 0;
                        stroke-dashoffset: -25%;
                        stroke-dasharray: 50% 0;
                    }
                    25% {
                        fill: rgba(127,27,125,0.25);
                        stroke: rgba(127,27,125,1);
                        stroke-width: 5;
                        stroke-dashoffset: 25%;
                        stroke-dasharray: 0 50%;
                    }
                    50% {
                        fill: rgba(127,27,125,0.25);
                        stroke: rgba(127,27,125,1);
                    }
                    60% {
                        fill: rgba(127,27,125,0.25);
                        stroke: rgba(127,27,125,1);
                        stroke-width: 7;
                    }
                    70% {
                        fill: rgba(127,27,125,0.25);
                        stroke: rgba(127,27,125,1);
                        
                    }
                    80% {
                        fill: rgba(127,27,125,0.25);
                        stroke: rgba(127,27,125,1);
                        stroke-width: 5;
                    }
                    90% {
                        fill: rgba(127,27,125,1);
                        stroke: rgba(127,27,125,0);
                        stroke-width: 0;
                        // stroke-dashoffset: -25%;
                        // stroke-dasharray: 50% 0;
                    }
                    100% {
                        fill: rgba(127,27,125,1);
                        stroke: rgba(127,27,125,0);
                        stroke-width: 0;
                        stroke-dashoffset: -25%;
                        stroke-dasharray: 50% 0;
                    }
                }
                .movie {
                    cursor: pointer;
                }
                .movie img {
                    max-width: 100%;
                    border-radius: 12px;
                    transition: transform 0.2s ease-in-out;
                    box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
                }
                .movie:hover img {
                    transform: scale(1.05) translateY(-10px);
                }
                .movie h4 {
                    font-size: 18px;
                    text-align: center;
                }
            `}</style>
        </div>
    )
}
