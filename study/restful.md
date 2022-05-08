PUT

/users/id/transfer/id/
request
body: amout(int)

response

상태코드로 성공 여부 판별

---------

**/user/oauth**

GET
body: {id, passwd}

response: 성공 여부

유저 인증 및 로그인

**/user/id/mbti**

PUT

해당 id를 가진 유저의 mbti값을 변경

**/user/id/nickname**

PUT

해당 id를 가진 유저의 nickname 값을 변경

**/user/friend**

GET
query: {id}
해당 id를 가진 유저의 친구 리스트를 반환

**/user/friend**

POST
body: {from, to}
새로운 친구를 추가

**user/friend/chat**

GET
query: {from, to}
해당 유저가 상대 유저에게 보냈던 채팅 리스트를 반환

**user/friend/chat**

POST 
query: {from, to, msg}
유저에게 채팅 보내기
