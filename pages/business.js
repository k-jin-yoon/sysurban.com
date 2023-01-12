import Seo from "../components/Seo";
// import Windmill from "../public/images/windmill.svg"
import Image from 'next/image'
import { useEffect, useState } from "react";

export default function Business(){
    let [process, setprocess] = useState([15,25,100,100,90,40])
    let [bgMode, setBgMode] = useState(true)
    useEffect(() => {
        const systemPrefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
        setBgMode(systemPrefersDark)
    })
    return (
        <div className="container">
            <Seo title="Business" />
            <h1 className="hidden">"Business Sysurban!!!"</h1>
            {/* 스마트시티 관련 시스템 개발 및 연구 */}
            <div className="business-field">
                <h2>스마트시티 솔루션 개발 및 연구</h2>
                <div className="field">
                    <div className="card">
                        <h4>에코시티</h4>
                        <p>지속가능한 친환경 도시를 만들기 위한 다양한 솔루션 제공</p>
                        <p className="process">
                            진행율 : <span className="tooltip">{process[0]}%</span>,
                            진행단계: 기획
                        </p>
                        <div className="bar-chart">
                            <span className="bar" style={{"width":`${process[0]}%`}}></span>
                        </div>
                    </div>
                    <div className="card">
                        <h4>스마트리빙랩 플랫폼</h4>
                        <p>시민참여로 나의 도시를 만들어가는 블록체인 기반의 스마트리빙랩 플랫폼 구축</p>
                        <p className="process">
                            진행율 : <span className="tooltip">{process[1]}%</span>,
                            진행단계: 기획
                        </p>
                        <div className="bar-chart">
                            <span className="bar" style={{"width":`${process[1]}%`}}></span>
                        </div>
                    </div>
                </div>
            </div>
            {/* 행정지원시스템 개발 및 공급업 */}
            <div className="business-field">
                <h2>업무(행정)지원시스템 개발 및 공급</h2>
                <div className="field">
                    <div className="card">
                        <h4>예약시스템</h4>
                        <p>공공기관의 예약시스템 개발 및 유지관리</p>
                        <p className="process">
                            진행율 : <span className="tooltip">{process[2]}%</span>,
                            진행단계: 완료
                        </p>
                        <div className="bar-chart">
                            <span className="bar" style={{"width":`${process[2]}%`}}></span>
                        </div>
                    </div>
                    <div className="card">
                        <h4>차세대 신분증 스캐너</h4>
                        <p>모바일신분증(주민등록증, 운전면허증, 여권 등), 기존 신분증, QR 코드 인식, 지문스캐너</p>
                        <p className="process">
                            진행율 : <span className="tooltip">{process[3]}%</span>,
                            진행단계: 완료
                        </p>
                        <div className="bar-chart">
                            <span className="bar" style={{"width":`${process[3]}%`}}></span>
                            
                        </div>
                    </div>
                </div>
            </div>
            {/* 생산 제품 및 디자인 등등등 */}
            <div className="business-field">
                <h2>웹시스템 개발 및 위탁운영</h2>
                <div className="field">
                    <div className="card">
                        <h4>리플릿관리기</h4>
                        <p>담당부서별 많은 종류의 홍보 전단지와 포스터로 유효기간의 관리와 교체가 번거로움을 해결한 홍보물 통합 키오스크</p>
                        <p className="process">
                            진행율 : <span className="tooltip">{process[4]}%</span>,
                            진행단계: 인증완료
                        </p>
                        <div className="bar-chart">
                            <span className="bar" style={{"width":`${process[4]}%`}}></span>
                        </div>
                    </div>
                    <div className="card">
                        <h4>문화콘텐츠 플랫폼</h4>
                        <p>한국적인 문화콘텐츠에 관련된 플랫폼을 구축 및 위탁운영</p>
                        <p className="process">
                            진행율 : <span className="tooltip">{process[5]}%</span>, 
                            진행단계 : 기획
                        </p>
                        <div className="bar-chart">
                            <span className="bar" style={{"width":`${process[5]}%`}}></span>
                        </div>
                    </div>
                </div>
                {/* {
                    bgMode === true
                    ? <div><Image src="/images/windmill_white.svg" alt="windmill" className="cls-3" width={172} height={160}/><span>준비중</span></div>
                    : <div><Image src="/images/windmill.svg" alt="windmill" className="cls-3" width={172} height={160}/><span>준비중</span></div>
                } */}
            </div>
            <style jsx>{`
                .container {
                    display: flex;
                    gap: 60px;
                    flex-direction: column;
                    align-items: center;
                    justify-content: center;
                }
                .container div {
                    width: 90%;
                }
                .business-field {
                    display: flex;
                    gap: 20px;
                    flex-direction: column;
                    align-items: center;
                    justify-content: center;
                }
                .field {
                    display: flex;
                    gap: 20px;
                    flex-direction: row;
                    align-items: stretch;
                    justify-content: center;
                }
                .card {
                    height: 100%;
                    padding: 20px;
                    border: var(--border);
                    border-radius: var(--border-radius);
                    transition: box-shadow .3s ease-in-out;
                }
                .card p {
                    margin: 12px 20px 0;
                }
                .card:hover {
                    box-shadow: var(--box-shadow);
                }
                .process {
                    position: relative;
                    margin-left: 40px;
                }
                .card .process .tooltip {
                    display: inline;
                }
                .card:hover .process .tooltip {
                    display: inline;
                }
                .bar-chart {
                    position: relative;
                    margin: 10px auto;
                    width: 100%;
                    height: 16px;
                    background-color: #ccc;
                    border-radius: 8px;
                    padding: 2px;
                }
                .bar-chart span.bar {
                    display: block;
                    height: 12px;
                    background-color: var(--main-color);
                    border-radius: 6px;
                }
                .active {
                    color: white;
                    background-color: rgba(127,27,125,1);
                }
                @media screen and  (max-width: 660px) {
                    .container {
                        display: flex;
                        gap: 20px;
                        flex-direction: column;
                        align-items: center;
                        padding-top: 20px;
                        padding-bottom: 10px;
                    }
                    .field {
                        flex-direction: column;
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