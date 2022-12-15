import Seo from "../components/Seo";

export default function About(){
    return (
        <div className="container">
            <Seo title="About" />
            <h1>"About Sysurban!!!"</h1>
            {/* 간단한 인사말 쓰기 */}
            <div className="greeting">
                <h4>인사말</h4>
                시스어반에서는
                Lorem ipsum dolor sit amet consectetur adipisicing elit.<br/>
                Eligendi quos mollitia, dolore ab veniam, dignissimos earum voluptatem<br/>
                 praesentium illum sequi laboriosam ducimus quo? Nostrum recusandae dicta expedita illo sit ipsam?<br/>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.<br/>
                Neque harum a aut omnis eum mollitia, dolores perspiciatis illum! Maxime voluptatem<br/>
                fugiat ex recusandae dolorum repellendus, ducimus tempore impedit aliquid unde!<br/>
            </div>
            {/* 연혁 */}
            <div className="history">
                <h4>History</h4>
            </div>
            {/* 각종 인증 및 특허 */}
            <div className="verify">
                <h4>인증/특허</h4>
            </div>
            <style jsx>{`
                .container {
                    display: flex;
                    gap: 0;
                    flex-direction: column;
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