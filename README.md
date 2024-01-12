# DogCatNaming

강아지, 고양이 이름 통계 웹사이트


## 📝 프로젝트 소개

1. 반려견, 반려묘 이름을 빈도 순 상위 40~50개로 사전에 선별
2. 반려견 상위 9종, 반려묘 상위 6종 선별
3. 반려동물의 각각의 종에 이름을 붙인 키워드를 동적 크롤링으로 주기적으로 검색하여 각 종별 이름 사용 빈도 카운트
   - ex) "푸들 + 호두", "푸들 + 두부", .. "치와와 + 호두", "치와와 + 두부"...
4. 각 종마다 사용된 이름 상위 10개를 막대 그래프로 시각화

## 💻 개발 환경
- JavaScript, HTML/CSS, Python
- Library: React, Selenium
- API Server Framework: Django-rest-framework
- Database: sqlite3 from Django

## ✅ 배포


#### 웹사이트: https://capable-scone-0d39bb.netlify.app/

![스크린샷 2023-03-11 오후 8.27.13.png](https://file.notion.so/f/f/25b30375-1d49-4fa3-9949-243fe4fff8aa/ecc30517-ee39-4dac-a63f-aca32ee9fe0e/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA_2023-03-11_%E1%84%8B%E1%85%A9%E1%84%92%E1%85%AE_8.27.13.png?id=0ebf5b1e-14c5-4913-bfeb-dab83e5f0f46&table=block&spaceId=25b30375-1d49-4fa3-9949-243fe4fff8aa&expirationTimestamp=1705125600000&signature=zLrScB3eTP0fK_26QM2tV0GW0L7kWwXH1Fc953teMTc&downloadName=%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA+2023-03-11+%E1%84%8B%E1%85%A9%E1%84%92%E1%85%AE+8.27.13.png)
