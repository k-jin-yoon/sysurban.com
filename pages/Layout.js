import Script from 'next/script';
import Footer from '../components/Footer';
import Header from './../components/Header';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faAnglesUp,
  faAmbulance,
  faAnchor,
} from "@fortawesome/free-solid-svg-icons";

export default function Layout({ children }){
    return (
        <>
            <Header />
            <main className="main">{children}</main>
            <div className="goto">
              <a href="#">
                <FontAwesomeIcon
                  icon={faAnglesUp}
                  style={{fontSize:20, color:'orange'}}
                />
              </a>
            </div>
            <Footer />
            <style jsx>{`
            .main {
                min-height: calc(100vh - 160px);
                padding: 2rem 0;
                flex: 1;
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                // position: relative;
              }
              .goto {
                position: fixed;
                right: 40px;
                bottom: 40px;
                width: 80px;
                height: 40px;
                color: var(--main-color);
                background-color: rgba(255,255,255,.5);
                border: 5px solid var(--sub-shadow);
                border-radius: 10px;
              }
              .goto a {
                display: inline-block;
                width: 100%;
                height: 30px;
                line-height: 30px;
                text-align: center;
                vertical-align: middle;
              }
              span.mousepointer {
                position: absolute;
                pointer-events: none;
              }
              
              span.mousepointer::after {
                content: '★';
                position: absolute;
                width: 100px;
                height: 100px;
                color: white;
                // background: url('/images/logo.png');
                background-color: white;
                background-size: cover;
                z-index: 9999;
              }
            `}</style>
            {/* <Script
                src="/lib/test.js"
                strategy="lazyOnload"
                onLoad={() =>
                    console.log(`스크립트가 올바르게 로드되었습니다.FB가 채워졌습니다.`)
                }
            /> */}
        </>
    );
}