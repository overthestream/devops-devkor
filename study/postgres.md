# PostgreSQL로 SQL 배워보기

## Domain Types

- char(n)
- varchar(n)
- int
- smallint
- numeric(p,d)
- real, double precision
- float(n)

## Create table

```SQL
create table r
  ( A D,
    A2 D2,
    (Constraint)
    );

create table instructor(
  ID char(5),
  name varchar(20) not null,
  dept_name varchar(20),
  salary numeric(8,2),
  primary key (ID),
  foreign key (dept_name) references department
);
```

## update table

### INSERT

```SQL
INSERT INTO instructor VALUES('10211', 'Smith', 'Biology', 66000);
```

### DELETE

```SQL
DELETE FROM instructor;
DELETE FROM instructor WHERE salary > 60000;
```

### Drop Table

```SQL
DROP TABLE instructor;
```

## SQL

basic query structure

```SQL
SELECT Attr1, Attr2, ...
FROM rel1, rel2, ...
WHERE P;  
```

### SELECT

```SQL
SELECT Attr1 FROM rel1, rel2;
```

relational operation에서 projection에 대응

rel1 X rel2 table (cartesian product) 에서 Attr1 column의 값들을 보여줌.

- SELECT `DISTINCT` dept_name FROM instructor : remove duplicate
- SELECT `ALL` dept_name FROM instructor : do not remove

### WHERE

WHERE은 SELECT 결과값 중 Predicate을 만족하는 값들만 보여주도록 함

```SQL
SELECT name
FROM instructor
WHERE dept_name = 'Comp. Sci.';
```

<. <=. >=, >, =, <>(!=)등의 operator 사용 가능

### Aggregate Function

avg, min, max, sum, count 등이 존재

\+ `GROUP BY`를 이용하면 aggregate function을 제외한 column들을 그룹지을 수 있음

### Nested Subquery

relation이 들어갈 자리 (ex FROM, set membership) 하에 다른 SQL query가 들어갈 수 있음

``` SQL
SELECT DISTINCT course_id
FROM section
WHERE semester = 'Fall' AND year = 2017 AND 
  course_id IN (SELECT course_id 
                FROM section
                WHERE semester = 'Spring' AND year = 2018);
```

### Join

두 relation을 합친 결과값을 리턴. 즉 cartesian product의 일종

보통 FROM clause 하에 들어간다.

#### Natural join

Foreign key로서 relation을 묶고, 중복 column(FK)은 삭제

```SQL
SELECT name, title
FROM student NATURAL JOIN takes, course
WHERE takes.course_id = course.course_id;
```

#### Inner Join

중복 Column이 삭제되지 않고, 특정 column으로 cartesian product를 만듦

```SQL
SELECT * 
FROM student JOIN takes ON student_ID = takes_ID;
```
equivalent to

```SQL
SELECT * 
FROM student, takes
WHERE student_ID = takes_ID;
```

#### Outer Join

match 되지 않으면 Null value를 삽입하는 join operation

## Transaction

```SQL
BEGIN TRANSACTION;
.
.
.
COMMIT; or ROLLBACK;
```