export default function BizData(req, res) {
  const biz = [
    {
      "id": 0,
      "title": "스마트시티 솔루션 개발 및 연구",
      "image_dark": "/images/business/business1_dark.png",
      "image_light": "/images/business/business1_light.png"
    },
    {
      "id": 1,
      "title": "업무(행정)지원시스템 개발 및 공급",
      "image_dark": "/images/business/business2_dark.png",
      "image_light": "/images/business/business2_light.png"
    },
    {
      "id": 2,
      "title": "웹시스템 개발 및 위탁운영",
      "image_dark": "/images/business/business3_dark.png",
      "image_light": "/images/business/business3_light.png"
    }
  ]
  res.status(200).json(biz)
}