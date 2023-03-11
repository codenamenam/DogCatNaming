# DogCatNaming

🐶, 🐱 이름을 지을 때 어떤 이름으로 지어야 될 지 고민하는 사람들이 많이 보여서 토이 프로젝트를 시작하게 되었습니다.

# 📝 프로젝트 소개

1. 강아지와 고양이 이름에 많이 사용되는 이름 상위 40~50개를 추립니다.
2. 강아지, 고양이 별로 많이 기르는 종을 선별합니다. 강아지는 9종, 고양이는 6종으로 선택하였습니다.
3. 강아지의 종, 고양이의 종 각각에 이름을 붙여서 조건 검색하여, 각 종마다 쓰이는 이름의 빈도를 파악합니다.
4. 이를 그래프로 정리하여 각 종별로 많이 사용되는 이름 상위 10개를 결과창에서 보여줍니다.

# 💻 개발 환경

- API server framework: Django
- Front-end framework: React
- Database: sqlite3(from Django)

# 배포를 하지 못한 이유

- 구글 검색결과를 정기적으로 크롤링할때 reCaptcha에 걸림😭 정적, 동적 크롤링 둘다 막혀서 결국 포기..
- ~~(배포완료)그래도 이왕에 프로젝트 엎어진겸, 공부나 해보려고 pythonanywhere랑 netlify 써서 어떻게든 웹서버랑 연결시켜서 억지로 배포라도 해볼 듯 합니다 하핳~~
