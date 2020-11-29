# Todo-List-with-Papago
네이버 파파고 API를 이용한 간단한 TodoList
## 사용 스택
  - Node js , Express js , Mysql(ORM : sequelize) , Vanilla JS , Naver open api
## 설명
  - 사용 스택을 공부하기 위해 만든 간단한 예제 코드
  - request 모듈을 request-promise-native를 사용해서 promise 및 async await 문법을 활용함
  - mysql db를 사용하기위해 Sequelize ORM을 사용
  - open api사용 연습
## 실행방식
  - 브라우저 입력칸에 한글을 입력하면 fetch api를 통해 json형식의 택스트가 전송
  - 서버에서 받은 택스트를 naver api를 호출하여 번역
  - 텍스트와 번역텍스트, 현재시간을 sequelize를 통해 mysql db에 저장
  - 저장 된값 반환
  - 반환된 값으로 js에서 랜더링
  - 새로고침 및 페이지가 로드될때 전체 list 조회
## 실행예시
  ![image](https://user-images.githubusercontent.com/42242359/100550750-5ddf7500-32bf-11eb-95f2-860dfec49ae3.png)
