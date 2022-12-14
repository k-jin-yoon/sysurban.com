import Script from 'next/script';
import Footer from '../components/Footer';
import Header from './../components/Header';

export default function Layout({ children }){
    return (
        <>
            <Header />
            <main className="main">{children}</main>
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