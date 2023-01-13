import Link from 'next/link';
import { useRouter } from "next/router";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBarsStaggered, faBuilding, faCity, faEarthAsia, } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from 'react';

export default function NavBar(){
    const router = useRouter();
    const { width, height, isMobile } = getWindowSize();

    const [isHidden, setIsHidden] = useState(false)
    const changeTopMenu = () => {
        isMobile
        ? setIsHidden(!isHidden)
        : ""
    }
    useEffect(() => {
        if (width>660) {
            setIsHidden(false);
        } else {
            setIsHidden(true);
        }
    }, [width]);
    return (
        <nav>
            <div className={"topMenu"+(isHidden?" hidden":"")} onClick={(e)=>changeTopMenu(e)}>
            {/* <Link href="/">
                <span className={router.pathname === "/" ? "active":""}> Home </span>
            </Link> */}
            <Link href="/about">
                <span className={router.pathname === "/about" ? "active":""}  onClick={(e)=>changeTopMenu(e)}> <FontAwesomeIcon icon={faBuilding} /> About </span>
            </Link>
            <Link href="/business">
                <span className={router.pathname === "/business" ? "active":""}  onClick={e=> changeTopMenu(e)}> <FontAwesomeIcon icon={faCity} /> Business </span>
            </Link>
            <Link href="/contact">
                <span className={router.pathname === "/contact" ? "active":""}  onClick={e=> changeTopMenu(e)}> <FontAwesomeIcon icon={faEarthAsia} /> Contact </span>
            </Link>
            </div>
            <div className="toggleMenu"  onClick={e=> changeTopMenu(e)}>
                <FontAwesomeIcon icon={faBarsStaggered} />
            </div>
            
            {/* <Link href="/movie">
                <span className={router.pathname === "/movie" ? "active":""}> Movie Test</span>
            </Link> */}
            <style jsx>{`
                nav{
                    display: flex;
                    gap: 0;
                    flex-direction: row;
                    align-items: center;
                    padding: 0;
                    height: 40px;
                    z-index: 800;
                }
                img {
                    max-width: 100px;
                    margin-bottom: 5px;
                }
                nav span {
                    font-weight: 600;
                    font-size: 18px;
                    text-transform: uppercase;
                    padding: 10px 20px;
                    transition: border-bottom 0.2s ease-in-out;
                }
                span:not(.active):hover {
                    color: rgba(127,27,125,1);
                    border-bottom: 3px solid rgba(127,27,125,1);
                }
                .topMenu {
                    position: relative;
                    display: flex;
                    width: 100%;
                    gap: 0;
                    flex-direction: row;
                    justify-content: center;
                    align-items: center;
                }
                .topMenu.hidden {
                    display: none;
                }
                .toggleMenu {
                    display: none;
                }

                .active {
                    color: white;
                    background-color: rgba(127,27,125,1);
                }
                @media screen and  (max-width: 660px) {
                    nav {
                        display: flex;
                        gap: 10px;
                        flex-direction: column;
                        align-items: center;
                    }
                    .topMenu {
                        position: absolute;
                        top: 80px;
                        left: 20px;
                        right: 20px;
                        bottom: 80px;
                        display: flex;
                        width: calc(100% - 40px);
                        // height: 200px;
                        padding: 40px 0;
                        gap: 40px;
                        flex-direction: column;
                        align-items: center;
                        background-color: #222;
                        transition: height 2s;
                        color: var(--sub-color);
                    }
                    .topMenu.hidden {
                        display: none;
                        height: 0;
                        transition: height 2s;
                    }
                    .toggleMenu {
                        display: block;
                        font-size: 30px;
                        width: 40px;
                        height: 40px;
                        padding: 5px;
                        line-height: 30px;
                        text-align: center;
                        vertical-align: middle;
                        cursor: pointer;
                    }
                }
            `}</style>
        </nav>
    )
}

export const getWindowSize = () => {
    const [windowSize, setWindowSize] = useState({
      width: 0,
      height: 0,
      isMobile: true
    });
  
    useEffect(() => {
      if (typeof window !== "undefined") {
        const handleResize = () => {
          setWindowSize({
            width: window.innerWidth,
            height: window.innerHeight,
            isMobile: window.innerWidth>660?false:true
          });
        };
  
        window.addEventListener("resize", handleResize);
        handleResize();
        return () => window.removeEventListener("resize", handleResize);
      } else {
        return;
      }
    }, []);
    return windowSize;
};