# Relational DataBase

## 관계형 데이터베이스란? (RDB, RDBMS)

`관계형 데이터베이스`는 `관계형 모델`을 기반으로 한 `데이터베이스`

1970년 6월 IBM 산호세 연구소의 에드거 커드가 처음 정의 `<A Relational Model of Data for Large Shared Data Banks>`

각 행은 `key`라는 `고유` 값(ID)이 포함된 `record`(`tuple`)

각 열에는 데이터의 `attribute`(`속성`)이 들어 있기에, 각 `record` 행에는 `attribute`의 실제 값이 저장되어 있음

`Codd's 12 rule`을 지키는 데이터베이스를 칭하는 말이었으나, 현재 상업적 데이터 베이스 중에는 그걸 모두 지키는 놈은 없음
 => 최소한의 조건으로,

1. relation으로 data를 user에게 보여준다.

2. 데이터를 조작할 realational operator를 제공한다.

즉, 데이터를 relational model로서 표현한다는 것.

## Relatioal Model이란?

`intersection`, `union`, `domain`, `range` 등의 연산이 가능한 집합론적 자료구조

`정의역`(`domain` = 자료형), `관계`(`relation`) 중심

n-ary relation은 n개의 집합의 `cartesian product`의 Subset

tuple은 cartesian product set의 원소를 지칭하므로, relation은 n개의 tuple의 집합이라고 할 수 있다.

데이터베이스는 `integrity constraint`를 만족하는 relation 값의 집합이다.

즉, 각 column 별 도메인 상의 값 쌍을 고유하게 저장해 놓은 것을 realtional model, rdb라고 할 수 있겠다.  

각각의 table은 하나의 entity type을 나타냄

초기에는 데이터베이스 별로 자체적인 고유 구조에 데이터를 저장했기에, 개발자는 각각의 데이터 구조에 알아야 했기에 비효율적이었음

`SQL(Structured Query Language)`의 등장으로 쿼리에 일관성을 가지게 됨

## Key in RDB

table의 각 행은 고유 key(`primary key`)를 가진다.

key는 table에서 고유하므로 다른 table에 `foreign key`로서 column을 추가함으로써 table을 연관지을 수 있다.

## Realtional Operations

### set operation

- union: 합집합 (`UNION`)

- intersection: 교집합(`INTERSECT`)

- set difference: 차집합(`EXCEPT`)

- cartesian product: `Cross join`
  
### operation for rdb

- selection: `SELECT` + `WHERE`

- projection: `FROM`

- inner join: cartesian product

## database normalization

데이터 중복을 줄이고, 데이터 일관성을 높이기 위해 여러 Normal form이 존재하며, 그 형식에 맞추도록 데이터베이스를 정규화할 수 있음

## ACID Transaction

데이터베이스 트랜잭션의 안전한 수행을 위한 성질

### 데이터베이스 트랜잭션

데이터에 대한 하나의 논리적 실행 단계, 여러 동작을 한 동작으로써 이뤄지도록 함

예를 들어, 계좌 이체는 송신 계좌 금액 감소, 수신자 계좌 금액 증가가 한 번에 이뤄져야 함

git의 commit 단위와 비슷하다고 할 수 있다.

### Atomicity

트랜잭션 작업이 부분적으로 실행되다가 중단되지 않도록 보장

중간에 작업이 실패하면 트랜잭션에 포함되는 모든 작업이 커밋되지 않도록 함

### Consistency

트랜잭션이 완료될 데이터들은 항상 integrity를 만족해야 함

### Isolation

트랜잭션 실행 중에 다른 트랜잭션의 연산 작업이 영향을 줄 수 없다.

즉 트랜잭션 밖의 어떤 연산도 트랜잭션 중간의 데이터를 볼 수 없다

### Durability

성공적으로 수행된 트랜잭션은 영원히 반영되어있어야 함

로그로 남고, 발생 전으로 되돌릴 수도 있다.

## constraints

attribute의 domain을 제한

## RDBMS의 장점

데이터를 연결짓고, 규칙을 기반으로 일관된 방식으로 관리하기 쉬움

### 관계형 모델 및 데이터 일관성

데이터베이스와 인스턴스 간에 데이터 일관성을 유지하기 쉬움 (constraint 이용)

여러 인스턴스가 항상 동일한 데이터를 갖도록 함

NoSQL등의 데이터베이스는 `결과적 일관성`만 제공 가능

쇼핑 카트, 금융 등의 트랜잭션과 같은 중요 비즈니스에서는 여전히 RDB가 우세

> NoSQL은 일반적으로 서버를 여러 개로 운영하는 분산 시스템으로 사용
> 서버가 여러 대이므로 데이터 조회 시 서버끼리 값이 다를 수 있으므로,
> 일관성을 위해 모든 서버에 결과값을 질의하고 N개 이상이 같은 값을
> 반환할 때 사용자에게 해당 값을 보여주는 형태의 일관성
> RDB와 결과는 같을 수 있겠으나 당연히 속도 면에서 차이가 생김

### 커밋 및 원자성

관계형 데이터베이스는 커밋(데이터베이스에 대한 영구적 변경)에 대하여 엄격하고 일관성있게 다룸

## 예시

기업의 제품 주문 처리를 위한 두 테이블

- 고객 정보 테이블: id, 이름, 주소, 배송 및 청구 정보, 연락처 정보

- 고객 주문 테이블: 주문한 고객의 id, 주문한 제품, 수량, 크기 및 색상

정보의 각 속성은 자체 레코드의 열에 존재함

고객 주문 테이블에는 id 외의 고객 정보는 포함되어 있지 않음

데이터베이스 테이블은 각 행에 고유한 값인 key가 존재

그러므로 두 테이블에서 공통된 값이 키 하나임에도 불구하고, 두 테이블 간에 `관계`를 형성가능

## 관계형 데이터베이스의 구조

관계형 모델에서는 데이터 테이블, 인덱스 등의 논리적 구조를 물리적 저장소와 분리할 수 있기에, 데이터베이스에 영향을 주지 않고 물리적 데이터 저장소(디스크 등)를 관리할 수 있다.



## Reference

[ORACLE - 관계형 데이터베이스란?](https://www.oracle.com/kr/database/what-is-a-relational-database/)

[Relational Model](http://wiki.c2.com/?RelationalModel)

[WikiPedia](https://en.wikipedia.org/wiki/Relational_database)
