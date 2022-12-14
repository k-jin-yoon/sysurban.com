export default function Footer(){
    return (
        <>
            <footer>
                <div className="company">
                    <img src="/images/logo.png"/>
                    <span><strong>주식회사 시스어반</strong></span>
                    <span>SYSURBAN</span>
                </div>
                <div>
                    <span className="copyright">Copyright © SYSURBAN 2021</span>
                    <span>경기도 평택시 고덕면 울성길 169-69, 103호</span>
                </div>
            </footer>
            <style jsx>{`
                * {
                    line-height: 30px;
                    vertical-align: middle;
                }
                footer {
                    display: flex;
                    gap: 10px;
                    flex-direction: row;
                    align-items: center;
                    justify-content: center;
                    width: 100%;
                    height: 80px;
                    border-top: 1px solid rgba(190, 190, 190, 0.5);
                    box-shadow: 0 -1px 8px 10px rgba(190, 190, 190, 0.25);
                }
                img {
                    width: 80px
                }
                span {
                    padding: 10px 20px 0;
                }
            `}</style>
        </>
    )
}