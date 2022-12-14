import Seo from "../components/Seo";

export default function About(){
    return (
        <div className="container">
            <Seo title="About" />
            <h1>"About Sysurban!!!"</h1>
            {/* 간단한 인사말 쓰기 */}
            <div className="greeting">
                시스어반에서는
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Eligendi quos mollitia, dolore ab veniam, dignissimos earum voluptatem praesentium illum sequi laboriosam ducimus quo? Nostrum recusandae dicta expedita illo sit ipsam?
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Neque harum a aut omnis eum mollitia, dolores perspiciatis illum! Maxime voluptatem fugiat ex recusandae dolorum repellendus, ducimus tempore impedit aliquid unde!
            </div>
            {/* 연혁 */}
            <div className="history"></div>
            {/* 각종 인증 및 특허 */}
            <div className="verify"></div>
        </div>
    );
}