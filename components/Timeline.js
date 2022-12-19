export default function Timeline(){
    return (
        <div className="timeline">
            <ul>
                <li>
                    <div className="content">
                        <h4>MOU 체결</h4>
                        <p>행정지원시스템 관련 업무제휴 협약체결<br/><small>(주식회사 오성시스템)</small></p>
                    </div>
                    <div className="time">
                        <h5>2022.09</h5>
                    </div>
                </li>
                <li>
                    <div className="content">
                        <h4>MOU 체결</h4>
                        <p>문화콘텐츠 서비스 업무제휴 협약체결<br/><small>(주식회사 결)</small></p>
                    </div>
                    <div className="time">
                        <h5>2022.06</h5>
                    </div>
                </li>
                <li>
                    <div className="content">
                        <h4>특허 등록</h4>
                        <p>산학연 특허 이전 및 등록(4종)</p>
                    </div>
                    <div className="content">
                        <h4>일‧생활 균형 캠페인 참여</h4>
                        <p>고용노동부 산하 일‧생활 균형 캠페인 참여기업 확인 완료</p>
                    </div>
                    <div className="time">
                        <h5>2022.05</h5>
                    </div>
                </li>
                <li>
                    <div className="content">
                        <h4>연구용역 수행</h4>
                        <p>평택시 중요자료 디지털 표준화 연구사업 수행</p>
                    </div>
                    <div className="time">
                        <h5>2021.11</h5>
                    </div>
                </li>
                <li>
                    <div className="content">
                        <h4>예약시스템 구축 및 유지보수</h4>
                        <p>평택도시공사 예약시스템 구축 및 유지보수 사업수행</p>
                    </div>
                    <div className="time">
                        <h5>2021.07</h5>
                    </div>
                </li>
                <li>
                    <div className="content">
                        <h4>법인 설립</h4>
                        <p>주식회사 시스어반 법인 설립</p>
                    </div>
                    <div className="time">
                        <h5>2021.06</h5>
                    </div>
                </li>
                <div className="clearfix"></div>
            </ul>
            <style jsx>{`
                .timeline {
                    position: relative;
                    width: 100%;
                    min-width: 740px;
                    margin: 0 auto;
                    padding: 0;
                }
                .timeline::before {
                    content: '';
                    position: absolute;
                    left: 50%;
                    width: 2px;
                    height: 100%;
                    background-color: #999;
                }
                .timeline ul {
                    width: 100%;
                }
                .timeline li {
                    list-style: none;
                    position: relative;
                    width: 50%;
                    padding: 20px;
                }
                .timeline li:nth-child(odd) {
                    float: left;
                    text-align: right;
                    clear: both;
                }
                .timeline li:nth-child(odd)::before {
                    content: '';
                    position: absolute;
                    top: 24px;
                    right: -6px;
                    width: 10px;
                    height: 10px;
                    border-radius: 50%;
                    background-color: var(--sub-color);
                    box-shadow: 0 0 0 4px var(--sub-shadow);
                }
                .timeline li:nth-child(odd) .time {
                    left: calc(100% + 40px);
                }
                .timeline li:nth-child(even) {
                    float: right;
                    text-align: left;
                    clear: both;
                }
                .timeline li:nth-child(even)::before {
                    content: '';
                    position: absolute;
                    top: 24px;
                    left: -4px;
                    width: 10px;
                    height: 10px;
                    border-radius: 50%;
                    background-color: var(--sub-color);
                    box-shadow: 0 0 0 4px var(--sub-shadow);
                }
                .timeline li:nth-child(even) .time {
                    right: calc(100% + 40px);
                }
                .content {
                    padding-bottom: 20px;
                }
                .timeline ul li .time {
                    position: absolute;
                    top: 16px;
                    margin: 0;
                    padding: 8px 16px;
                    background-color: var(--sub-color);
                    border-radius: 16px;
                    box-shadow: 0 0 0 8px var(--sub-shadow);
                }
                .timeline ul li h4 {
                    margin: 0;
                    padding: 0;
                    font-weight: 600;
                    color: var(--main-color);
                }
                @media screen and  (max-width: 760px) {
                    .timeline {
                        min-width: 100%;
                    }
                }
                @media screen and  (max-width: 480px) {
                    .timeline {
                        min-width: 100%;
                    }
                }
                @media (prefers-color-scheme: dark) {
                    .timeline::before {
                        background-color: #ccc;
                    }
                    .timeline li:nth-child(odd)::before {
                        background-color: var(--sub-color);
                        box-shadow: 0 0 0 4px var(--sub-shadow);
                    }
                    .timeline li:nth-child(even)::before {
                        background-color: var(--sub-color);
                        box-shadow: 0 0 0 4px var(--sub-shadow);
                    }
                    .timeline ul li .time {
                        color: var(--main-color);
                        background-color: var(--sub-color);
                        box-shadow: 0 0 0 8px var(--sub-shadow);
                    }
                    .timeline ul li h4 {
                        color: var(--sub-color);
                    }
                }
            `}</style>
        </div>
    );
}