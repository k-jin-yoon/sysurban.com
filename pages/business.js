import Seo from "../components/Seo";

export default function Business(){
    return (
        <div>
            <Seo title="Business" />
            <h1>"Business Sysurban!!!"</h1>
            {/* 스마트시티 관련 시스템 개발 및 연구 */}
            <div className="smartcity"></div>
            {/* 행정지원시스템 개발 및 공급업 */}
            <div className="administration"></div>
            {/* 생산 제품 및 디자인 등등등 */}
            <div className="product"></div>
        </div>
    );
}