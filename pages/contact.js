import Seo from "../components/Seo";

export default function About(){
    return (
        <div>
            <Seo title="Contact" />
            <h1>"Contact Sysurban!!!"</h1>
            {/* 오시는 길 -> 카카오맵 연동 */}
            <div className="location">
                <h4>오시는 길</h4>
            </div>
            {/* 오시는 길 -> 카카오맵 연동 */}
            <div className="kakaomap">
                <h4>위치</h4>
                <div></div>
            </div>
            <style jsx>{`
                .container {
                    display: flex;
                    gap: 0;
                    flex-direction: row;
                    align-items: center;
                    padding: 0;
                    height: 40px;
                }
                
                .active {
                    color: white;
                    background-color: rgba(127,27,125,1);
                }
                @media screen and  (max-width: 480px) {
                    .container {
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
        </div>
    );
}