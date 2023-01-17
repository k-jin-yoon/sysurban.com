export default function BizData(req, res) {
  const biz = [
    {
      "id": 0,
      "title": "스마트시티 솔루션 개발 및 연구",
      "image": "/images/business/business1.jpg"
    },
    {
      "id": 1,
      "title": "업무(행정)지원시스템 개발 및 공급",
      "image": "/images/business/business2.jpg"
    },
    {
      "id": 2,
      "title": "웹시스템 개발 및 위탁운영",
      "image": "/images/business/business3.jpg"
    }
  ]
  res.status(200).json(biz)
}