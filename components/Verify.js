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
                    width: 700px;
                    margin: 0 auto;
                    padding: 0;
                }
                .verify::before {
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
                    flex-direction: row;
                    align-items: center;
                    justify-content: center;
                }
                .verify li img {
                    width: 180px;
                    padding: 10px;
                }
                .verify li img:hover {
                    transform: scale(1.05) translateY(-5px);
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
                    
                }
            `}</style>
        </div>
    );
}