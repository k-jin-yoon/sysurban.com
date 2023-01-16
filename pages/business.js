import Seo from "../components/Seo";
// import Windmill from "../public/images/windmill.svg"
import Image from 'next/image'
import { useEffect, useState } from "react";
import Biz from "../components/Biz";
import Items from "../components/Items";

export default function Business(){
    let [bgMode, setBgMode] = useState(true)
    useEffect(() => {
        const systemPrefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
        setBgMode(systemPrefersDark);
    },[])
    
    return (
        <div className="container">
            <Seo title="Business" />
            <h1 className="hidden">"Business Sysurban!!!"</h1>
            <Biz />
            <Items />
                {/* {
                    bgMode === true
                    ? <div><Image src="/images/windmill_white.svg" alt="windmill" className="cls-3" width={172} height={160}/><span>준비중</span></div>
                    : <div><Image src="/images/windmill.svg" alt="windmill" className="cls-3" width={172} height={160}/><span>준비중</span></div>
                } */}
            <style jsx>{`
                .container {
                    display: flex;
                    gap: 60px;
                    flex-direction: column;
                    align-items: center;
                    justify-content: center;
                    padding: 2rem 1rem;
                }
                .container div {
                    width: 90%;
                }
                .active {
                    color: white;
                    background-color: rgba(127,27,125,1);
                }
                @media screen and  (max-width: 660px) {
                    .container {
                        display: flex;
                        gap: 20px;
                        flex-direction: column;
                        align-items: center;
                        padding-top: 20px;
                        padding-bottom: 10px;
                    }
                    .field {
                        flex-direction: column;
                    }
                }
                @media (prefers-color-scheme: dark) {
                    .maxim {
                        border-top: 2px solid var(--sub-shadow);
                        border-bottom: 2px solid var(--sub-shadow);
                    }
                }
            `}</style>
        </div>
    );
}