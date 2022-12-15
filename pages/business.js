import Seo from "../components/Seo";

export default function Business(){
    return (
        <div>
            <Seo title="Business" />
            <h1>"Business Sysurban!!!"</h1>
            {/* 스마트시티 관련 시스템 개발 및 연구 */}
            <div className="smartcity"></div>
            {/* 행정지원시스템 개발 및 공급업 */}
            <div className="administration"></div>
            {/* 생산 제품 및 디자인 등등등 */}
            <div className="product"></div>
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