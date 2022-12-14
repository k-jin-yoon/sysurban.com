import Link from 'next/link';
import { useRouter } from "next/router";
export default function NavBar(){
    const router = useRouter();
    return (
        <nav>
            {/* <Link href="/">
                <span className={router.pathname === "/" ? "active":""}> Home </span>
            </Link> */}
            <Link href="/about">
                <span className={router.pathname === "/about" ? "active":""}> About </span>
            </Link>
            <Link href="/business">
                <span className={router.pathname === "/business" ? "active":""}> Business </span>
            </Link>
            <Link href="/contact">
                <span className={router.pathname === "/contact" ? "active":""}> Contact </span>
            </Link>
            <Link href="/movie">
                <span className={router.pathname === "/movie" ? "active":""}> Movie Test</span>
            </Link>
            <style jsx>{`
                nav {
                    display: flex;
                    gap: 0;
                    flex-direction: row;
                    align-items: center;
                    padding: 0;
                    height: 40px;
                }
                img {
                    max-width: 100px;
                    margin-bottom: 5px;
                }
                nav span {
                    font-weight: 600;
                    font-size: 20px;
                    text-transform: uppercase;
                    padding: 10px 20px;
                    transition: transform 0.2s ease-in-out;
                }
                span:not(.active):hover {
                    color: rgba(127,27,125,1);
                    border-bottom: 3px solid rgba(127,27,125,1);
                    transform: scale(1.05) translateY(-10px);
                }
                .active {
                    color: white;
                    background-color: rgba(127,27,125,1);
                }
                @media screen and  (max-width: 480px) {
                    nav {
                        display: flex;
                        gap: 10px;
                        flex-direction: column;
                        align-items: center;
                        padding-top: 20px;
                        padding-bottom: 10px;
                        box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
                            rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;
                    }
                }
            `}</style>
        </nav>
    )
}