import Seo from "../components/Seo";
import Timeline from "../components/Timeline";
import Verify from "../components/Verify";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuoteLeft, faQuoteRight, faCity, faEarthAsia, } from "@fortawesome/free-solid-svg-icons";

export default function About(){
    return (
        <div className="container">
            <Seo title="About" />
            <h1 className="hidden">"About Sysurban!!!"</h1>
            {/* 간단한 인사말 쓰기 */}
            <div className="greeting">
                <h2>인사말</h2>
                <div className="maxim">
                    <p className="text-center">
                        <FontAwesomeIcon color="orange" icon={faQuoteLeft} /> 
                         &nbsp; 과거로부터 배우고 현재를 살며 내일을 꿈꿔라.<br/>
                        중요한 것은 질문을 멈추지 않는 것이다.<br />
                        호기심은 자체만으로도 존재하는 이유가 있다. 
                         &nbsp; <FontAwesomeIcon color="orange" icon={faQuoteRight} />
                         {/*Learn from yesterday, live for today, hope for tomorrow.
                        The important thing is not to stop questioning.
                        Curiosity has its own reason for existing.  */}
                    </p>
                    <p className="text-end">
                        - Albert Einstein
                    </p>
                </div>
                <div>
                    <p>
                        <strong>시스어반</strong>에서는 <br/>
                        지속가능한 스마트시티를 구현하기 위한 다양한 솔루션을 연구하고 있습니다.<br/>
                        또한 전세계의 다양한 솔루션을 벤치마킹하여 국내의 실정에 맞게 개선하는데 노력하고 있습니다.<br/>
                    </p>
                    <p>
                        미래지향적이고 지속가능한 도시시스템을 위해 유관 업체와의 업무협약을 통해<br/>
                        다양한 분야를 접목할 수 있도록 협력사와 모든 임직원이 함께 유기적인 관계를 지속합니다.<br/>
                    </p>
                    <p>
                        앞으로도 많은 분들의 박수와 격려를 기반으로 더욱 노력하는 시스어반이 되겠습니다.<br/>
                        시스어반에 관심을 가져주시고 찾아와주신 모든 분들께 감사드립니다.<br/>
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
                <Verify />
            </div>
            <style jsx>{`
                .container {
                    display: flex;
                    gap: 20px;
                    flex-direction: column;
                    align-items: start;
                    justify-content: center;
                    padding: 2rem 1rem;
                }
                .greeting p {
                    margin: 20px 30px;
                    line-height: 28px;
                }
                .maxim {
                    margin: 20px;
                    border-top: 2px solid var(--main-shadow);
                    border-bottom: 2px solid var(--main-shadow);
                }
                .history {
                    width: 100%;
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