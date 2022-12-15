export default function Timeline(){
    return (
        <div className="timeline">
            <ul>
                <li>
                    <div className="content">
                        <h4>일‧생활 균형 캠페인 참여</h4>
                        <p>고용노동부 산하 일‧생활 균형 캠페인 참여기업 확인 완료</p>
                    </div>
                    <div className="time">
                        <h5>2022.05.27</h5>
                    </div>
                </li>
                <li>
                    <div className="content">
                        <h4>특허 등록</h4>
                        <p>산학연 특허 이전 및 등록(4종)</p>
                    </div>
                    <div className="time">
                        <h5>2022.05.24</h5>
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
                    width: 700px;
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