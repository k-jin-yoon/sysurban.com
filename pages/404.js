export default function NotFound() {
    return (
        <>
        <div className="error-body">
            <img src="/error/sorry.jpg" />
            <div>"잘못된 요청입니다."</div>
        </div>
        <style jsx>{`
            .error-body {
                width: 100%;
                height: calc(100vh - 164px);
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
            }
        `}</style>
        </>
    )
}