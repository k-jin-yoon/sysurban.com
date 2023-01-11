import Map from "../components/Map";
import Seo from "../components/Seo";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBuilding, faLaptopCode, faFlaskVial, faMapLocationDot } from "@fortawesome/free-solid-svg-icons";

export default function Contact(){
    return (
        <div className="container">
            <Seo title="Contact" />
            <h1 className="hidden">"Contact Sysurban!!!"</h1>
            {/* 오시는 길 -> 카카오맵 연동 */}
            <div className="location">
                <h4>오시는 길</h4>
                <div className="addr">
                    <h5>본사</h5>
                    <p><FontAwesomeIcon icon={faBuilding} /> 사무실: 경기도 평택시 고덕면 울성길 169-69, 102호</p>
                    <p><FontAwesomeIcon icon={faLaptopCode} /> 개발팀: 경기도 평택시 고덕면 울성길 169-69, 103호</p>
                </div>
                <hr />
                <div className="addr">
                    <h5>연구소</h5>
                    <p><FontAwesomeIcon icon={faFlaskVial} /> 연구소: 경기도 (안산시 || 수원시) 예정</p>
                </div>
            </div>
            {/* 오시는 길 -> 카카오맵 연동 */}
            <div className="kakaomap">
                <h4>위치 <FontAwesomeIcon icon={faMapLocationDot} /></h4>
                <Map />
            </div>
            <style jsx>{`
                .container {
                    display: flex;
                    gap: 20px;
                    flex-direction: column;
                    align-items: start;
                    justify-content: start;
                }
                h4 {
                    margin: 20px 0;
                }
                .addr {
                    padding: 12px 20px;
                }
                .addr h5 {
                    margin: 12px 0;
                }
                .addr p {
                    padding: 4px;
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