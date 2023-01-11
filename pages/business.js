import Seo from "../components/Seo";
// import Windmill from "../public/images/windmill.svg"
import Image from 'next/image'
import { useEffect, useState } from "react";

export default function Business(){
    let [goal, setGoal] = useState([30,40,100,90])
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
            <div className="smartcity">
                <h2>스마트시티 솔루션 개발 및 연구</h2>
                <div className="card">
                    <h4>에코시티</h4>
                    <p>지속가능한 친환경 도시를 만들기 위한 다양한 솔루션 제공</p>
                    <p className="goal">목표달성율</p>
                    <div className="bar-chart">
                        <span className="bar" style={{"width":`${goal[0]}%`}}></span>
                        <span className="tooltip">{goal[0]}%</span>
                    </div>
                </div>
                <div className="card">
                    <h4>스마트리빙랩 플랫폼</h4>
                    <p>시민참여로 나의 도시를 만들어가는 블록체인 기반의 스마트리빙랩 플랫폼 구축</p>
                    <p className="goal">목표달성율</p>
                    <div className="bar-chart">
                        <span className="bar" style={{"width":`${goal[1]}%`}}></span>
                        <span className="tooltip">{goal[1]}%</span>
                    </div>
                </div>
            </div>
            {/* 행정지원시스템 개발 및 공급업 */}
            <div className="administration">
                <h2>행정지원시스템 개발 및 공급</h2>
                <div className="card">
                    <h4>차세대 신분증 스캐너</h4>
                    <p>모바일신분증(주민등록증, 운전면허증, 여권 등), 기존 신분증, QR 코드 인식, 지문스캐너</p>
                    <div className="bar-chart">
                        <span className="bar" style={{"width":`${goal[2]}%`}}></span>
                        <span className="tooltip">{goal[2]}%</span>
                    </div>
                </div>
                <div className="card">
                    <h4>리플릿관리기</h4>
                    <p>담당부서별 많은 종류의 홍보 전단지와 포스터로 유효기간의 관리와 교체가 번거로움을 해결한 홍보물 통합 키오스크</p>
                    <div className="bar-chart">
                        <span className="bar" style={{"width":`${goal[3]}%`}}></span>
                        <span className="tooltip">{goal[3]}%</span>
                    </div>
                </div>
            </div>
            {/* 생산 제품 및 디자인 등등등 */}
            <div className="product">
                <h2>웹시스템 개발 및 위탁운영</h2>
                {
                    bgMode === true
                    ? <div><Image src="/images/windmill_white.svg" alt="windmill" className="cls-3" width={172} height={160}/><span>준비중</span></div>
                    : <div><Image src="/images/windmill.svg" alt="windmill" className="cls-3" width={172} height={160}/><span>준비중</span></div>
                }
            </div>
            <style jsx>{`
                .container {
                    display: flex;
                    gap: 20px;
                    flex-direction: column;
                    align-items: center;
                    justify-content: center;
                }
                .container div {
                    width: 90%;
                }
                .greeting p {
                    margin: 20px 30px;
                    line-height: 28px;
                }
                .card {
                    width: 100%;
                    margin: 40px 20px;
                    padding: 20px;
                    border: var(--border);
                    border-radius: var(--border-radius);
                    transition: box-shadow .3s ease-in-out;
                }
                .card:hover {
                    box-shadow: var(--box-shadow);
                }
                .goal {
                    margin: 12px 20px 0;
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
                .bar-chart span.tooltip {
                    display: none;
                    position: absolute;
                    top: 0;
                    right: 0;
                }
                .card:hover span.tooltip {
                    display: block;
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