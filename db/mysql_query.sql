-- create user query

-- CREATE USER IF NOT EXISTS 'user'@'localhost' IDENTIFIED BY 'pass'

-- show mysql users
select * from mysql.user

-- delete user
-- DROP USER IF EXISTS 'DICT_DEV'@'localhost'

-- 일반 사용자 추가
-- GRANT ALL PRIVILEGES ON db_name.* to 'user'@'localhost' WITH GRANT OPTION;

-- flush privileges

-- 특정 이름의 데이터베이스에 대한 사용자 추가
-- grant all privileges on db_name_%.* to user@% with grant option;
-- flush privileges;

-- 전체 DB에 대해 권한을 가진 사용자 추가
-- grant all privileges on *.* to root@localhost identified by 'dbPass';
-- flush privileges;

-- 특정 사용자에게 DB 권한 추가
-- grant all on db_name to user@'*';
-- flush privileges;






-- database query
-- show databases

-- CREATE database IF NOT EXISTS db_name CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci

-- drop database db_name








-- Alter query
-- ALTER TABLE tb_name ADD col_name data_type COMMENT '' FIRST | LAST col_name

-- ALTER TABLE tb_name DROP COLUMN col_name

-- ALTER TABLE tb_name CHANGE old_col new_col data_type COMMENT ''




