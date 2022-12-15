import Link from 'next/link';
import { useEffect, useState } from "react";
import NavBar from './../components/NavBar';
export default function Header(){
    let [bgMode, setBgMode] = useState(true)
    useEffect(() => {
        const systemPrefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
        setBgMode(systemPrefersDark)
    })
    return (
        <>
        <header>
            <Link href="/" className="link">
                <div className="logo-box">
                {
                    bgMode === true
                    ? <img src="/images/logo_white.png" alt="SYSURBAN Logo"/>
                    : <img src="/images/logo.png" alt="SYSURBAN Logo"/>
                }
                {/* <span className={router.pathname === "/" ? "active":""}> Home </span> */}
                </div>
            </Link>
            
            <NavBar />
        </header>
        <style jsx>{`
            header {
                display: flex;
                gap: 10px;
                flex-direction: row;
                justify-content: space-between;
                align-items: center;
                padding: 12px 20px;
                height: 80px;
                box-shadow: rgba(50, 50, 50, 0.25) 0px 8px 10px 0px,
                    rgba(0, 0, 0, 0.3) 0px 4px 10px -10px;
            }
            
            .logo-box {
                position: relative;
                padding: 3px;
                width: 160px;
                height: 60px;
                text-align: center;
                // background-color: #222;
            }
            .logo-box:hover::before {
                content: '';
                position: absolute;
                top: 0;
                left: 0;
                width: 16px;
                height: 16px;
                border-top: 5px solid orange;
                border-left: 5px solid orange;
            }
            .logo-box:hover::after {
                content: '';
                position: absolute;
                right: 0;
                bottom: 0;
                width: 16px;
                height: 16px;
                border-right: 5px solid orange;
                border-bottom: 5px solid orange;
            }
            img {
                position: absolute;
                top: 50%;
                left: 50%;
                width: 120px;
                transform: translate(-50%, -50%);
                // background-color: white;
                z-index: 9;
            }
        `}</style>
        </>
    )
}