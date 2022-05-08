CREATE TABLE users (
  id varchar(12),
  password varchar(20),

  primary key (id)
);

CREATE TABLE shop(
  id uuid DEFAULT uuid_generate_v4 (),
  name varchar(20),
  location varchar(50),
  type varchar(20),

  primary key(id)
);

CREATE TABLE review(
  author_id varchar(12),
  id uuid DEFAULT uuid_generate_v4 (),
  title varchar (50),
  modified_timestamp date
  description varchar(300),

  primary key(author_id, id),
  foreign key(author_id) references users(id)
);

CREATE TABLE shop_keyword(
  shop_id uuid,
  keyword varchar(20),

  primary key(shop_id, keyword),
  foreign key(shop_id) references shop(id)
);
