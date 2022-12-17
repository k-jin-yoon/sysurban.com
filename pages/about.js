import Seo from "../components/Seo";
import Timeline from "../components/Timeline";

export default function About(){
    return (
        <div className="container">
            <Seo title="About" />
            <h1>"About Sysurban!!!"</h1>
            {/* 간단한 인사말 쓰기 */}
            <div className="greeting">
                <h2>인사말</h2>
                <div className="maxim">
                    <p className="text-center">
                        과거로부터 배우고 현재를 살며 내일을 꿈꿔라.<br/>
                        중요한 것은 질문을 멈추지 않는 것이다.
                    </p>
                    <p className="text-end">
                        - 알베르트 아인슈타인
                    </p>
                </div>
                <div>
                    <p>
                        시스어반에서는 <br/>
                        지속가능한 스마트시티를 구현하기 위한 다양한 솔루션을 연구하고 있습니다.<br/>
                        또한 전세계의 다양한 솔루션을 벤치마킹하여 국내의 실정에 맞게 개선하는데 노력하고 있습니다.<br/>
                    </p>
                    <p>
                        미래지향적이고 지속가능한 도시시스템을 위해 유관 업체와의 업무협약을 통해<br/>
                        다양한 분야로 접근을 할 수 있도록 모든 임직원이 함께 합니다.<br/>
                    </p>
                    <p>
                        앞으로도 많은 분들의 박수와 격려로 더욱 노력하는 시스어반이 되겠습니다.<br/>
                        관심을 가져주시고 찾아오신 분들께 감사드립니다.<br/>
                    </p>
                    <p className="text-end"> - 임직원 일동 - </p>
                </div>
            </div>
            {/* 연혁 */}
            <div className="history">
                <h2>History</h2>
                <Timeline />
            </div>
            {/* 각종 인증 및 특허 */}
            <div className="verify">
                <h2>인증/특허</h2>
                <div>
                    시스어반에서는
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.<br/>
                    Eligendi quos mollitia, dolore ab veniam, dignissimos earum voluptatem<br/>
                    praesentium illum sequi laboriosam ducimus quo? Nostrum recusandae dicta expedita illo sit ipsam?<br/>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.<br/>
                    Neque harum a aut omnis eum mollitia, dolores perspiciatis illum! Maxime voluptatem<br/>
                    fugiat ex recusandae dolorum repellendus, ducimus tempore impedit aliquid unde!<br/>Lorem ipsum dolor sit amet consectetur adipisicing elit.<br/>
                    Eligendi quos mollitia, dolore ab veniam, dignissimos earum voluptatem<br/>
                    praesentium illum sequi laboriosam ducimus quo? Nostrum recusandae dicta expedita illo sit ipsam?<br/>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.<br/>
                    Neque harum a aut omnis eum mollitia, dolores perspiciatis illum! Maxime voluptatem<br/>
                    fugiat ex recusandae dolorum repellendus, ducimus tempore impedit aliquid unde!<br/>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.<br/>
                    Eligendi quos mollitia, dolore ab veniam, dignissimos earum voluptatem<br/>
                    praesentium illum sequi laboriosam ducimus quo? Nostrum recusandae dicta expedita illo sit ipsam?<br/>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.<br/>
                    Neque harum a aut omnis eum mollitia, dolores perspiciatis illum! Maxime voluptatem<br/>
                    fugiat ex recusandae dolorum repellendus, ducimus tempore impedit aliquid unde!<br/>
                </div>
            </div>
            <style jsx>{`
                .container {
                    display: flex;
                    gap: 20px;
                    flex-direction: column;
                    align-items: start;
                    justify-content: start;
                }
                .greeting p {
                    margin: 20px 30px;
                }
                .maxim {
                    margin: 20px;
                    border-top: 1px solid var(--main-color);
                    border-bottom: 1px solid var(--main-color);
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