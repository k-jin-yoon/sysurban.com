import Seo from "../components/Seo";

export default function Business(){
    return (
        <div className="container">
            <Seo title="Business" />
            <h1>"Business Sysurban!!!"</h1>
            {/* 스마트시티 관련 시스템 개발 및 연구 */}
            <div className="smartcity">
                <h2>스마트시티 솔루션 개발 및 연구</h2>
            </div>
            {/* 행정지원시스템 개발 및 공급업 */}
            <div className="administration">
                <h2>행정지원시스템 개발 및 공급</h2>
            </div>
            {/* 생산 제품 및 디자인 등등등 */}
            <div className="product">
                <h2>웹시스템 개발 및 위탁운영</h2>
            </div>
            <style jsx>{`
                .container {
                    display: flex;
                    gap: 20px;
                    flex-direction: column;
                    align-items: start;
                    justify-content: center;
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