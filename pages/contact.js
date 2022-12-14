import Seo from "../components/Seo";

export default function About(){
    return (
        <div>
            <Seo title="Contact" />
            <h1>"Contact Sysurban!!!"</h1>
            {/* 오시는 길 -> 카카오맵 연동 */}
            <div className="location"></div>
        </div>
    );
}