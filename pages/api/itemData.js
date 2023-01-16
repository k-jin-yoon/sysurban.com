export default function ItemData(req, res){
  const items = [
        {
            "id": 0,
          "itemname": "에코시티",
            "description": "지속가능한 친환경 도시를 만들기 위한 다양한 솔루션 연구 및 적용",
            "process": 15,
            "step": "Planning"
        },
        {
            "id": 1,
          "itemname": "스마트리빙랩 플랫폼",
            "description": "시민의 참여로 도시를 만들어가는 블록체인 기반의 스마트리빙랩 플랫폼 구축",
            "process": 20,
            "step": "Planning"
        },
        {
            "id": 2,
          "itemname": "예약시스템",
            "description": "공공기관의 예약시스템 개발 및 유지관리",
            "process": 100,
            "step": "Completion"
        },
        {
            "id": 3,
          "itemname": "차세대 신분증 스캐너",
            "description": "모바일신분증(주민등록증, 운전면허증, 여권 등), 기존 신분증, QR 코드 인식, 지문스캐너를 통합한 신분증 스캐너",
            "process": 100,
            "step": "Completion"
        },
        {
            "id": 4,
          "itemname": "리플릿관리기",
            "description": "담당부서별 많은 종류의 홍보 전단지와 포스터로 유효기간의 관리와 교체가 번거로움을 해결한 홍보물 통합 키오스크",
            "process": 100,
            "step": "Completion"
        },
        {
            "id": 5,
          "itemname": "문화콘텐츠 플랫폼",
            "description": "한국적인 문화콘텐츠에 관련된 플랫폼을 구축 및 위탁운영",
            "process": 20,
            "step": "Planning"
        }
  ]

  res.status(200).json(items)
}