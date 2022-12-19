export default function Verify(){
    return (
        <div className="verify">
            <ul>
                <li>
                    <h4>인증</h4>
                    <div className="content">
                        <img src="/images/verify/worklife.jpg"/>
                    </div>
                </li>
                <li>
                    <h4>특허</h4>
                    <div className="content">
                        <img src="/images/verify/nose.jpg"/>
                        <img src="/images/verify/aircondition.jpg"/>
                        <img src="/images/verify/ipaddress.jpg"/>
                        <img src="/images/verify/graphic.jpg"/>
                    </div>
                </li>
            </ul>
            <style jsx>{`
                .verify {
                    position: relative;
                    min-width: 480px;
                    margin: 0 auto;
                    padding: 0;
                }
                .verify::before {
                }
                .content {
                    margin: 20px 0;
                }
                .verify li {
                    list-style: none;
                    padding: 10px;
                    margin-top: 20px;
                    border-bottom: 2px dotted #ccc;
                }
                .verify li:last-child {
                    border-bottom: none;
                }
                .verify li div {
                    display: flex;
                    flex-flow: row wrap;
                    flex-direction: row;
                    align-items: center;
                    justify-content: center;
                    gap: 10px;
                }
                .verify li img {
                    width: 160px;
                    padding: 8px;
                    box-shadow: 0 0 8px 4px rgba(0,0,0,.25);
                }
                .verify li img:hover {
                    transform: scale(1.05) translateY(-5px);
                }
                @media screen and  (max-width: 480px) {
                    .verify {
                        min-width: 100%;
                    }
                }
                @media (prefers-color-scheme: dark) {
                    .verify li img {
                        box-shadow: 0 0 8px 4px rgba(255,255,255,.25);
                    }
                }
            `}</style>
        </div>
    );
}