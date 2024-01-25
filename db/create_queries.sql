-- AB Dictionary - Web & App

-- SHOW tables

-- CREATE TABLE IF NOT EXISTS tb_words (
-- 	wrd_id INT NOT NULL	AUTO_INCREMENT PRIMARY KEY COMMENT 'word id'
-- ,	wrdfst VARCHAR(255) NOT NULL COMMENT 'fist'
-- ,	wrdsnd VARCHAR(255) NOT NULL COMMENT 'second'
-- , wrdlvl VARCHAR(10) COMMENT 'word level'
-- , wrdknd VARCHAR(10) COMMENT 'word kind'
-- ,	reg_dt DATETIME DEFAULT NULL COMMENT 'registration date'
-- ,	upd_dt DATETIME DEFAULT NULL COMMENT 'date of change'
-- ,	wrkstn VARCHAR(50) DEFAULT NULL COMMENT 'workstation'
-- ) COMMENT 'word lists'

-- CREATE TABLE IF NOT EXISTS tb_codes (
-- 	codeid varchar(100) NOT NULL COMMENT 'code id'
-- ,	code varchar(255) NOT NULL COMMENT 'code'
-- ,	codenm varchar(255) NOT NULL COMMENT 'code name'
-- ,	pseq int NOT NULL COMMENT 'seq'
-- ,	pused char(1) NOT NULL DEFAULT 'Y' COMMENT '("Y","N")'
-- ,	reg_dt datetime DEFAULT NULL COMMENT 'registration date'
-- ,	upd_dt datetime DEFAULT NULL COMMENT 'date of change'
-- ,	wrkstn varchar(50) DEFAULT NULL COMMENT 'workstation'
-- ) COMMENT 'various codes'

-- CREATE TABLE IF NOT EXISTS tb_rules (
-- 	ruleid INT NOT NULL	AUTO_INCREMENT PRIMARY KEY COMMENT 'rule id'
-- ,	rulenm varchar(255) NOT NULL COMMENT 'code name'
-- ,	contnt varchar(255) NOT NULL COMMENT 'content'
-- ,	reg_dt datetime DEFAULT NULL COMMENT 'registration date'
-- ,	upd_dt datetime DEFAULT NULL COMMENT 'date of change'
-- ,	wrkstn varchar(50) DEFAULT NULL COMMENT 'workstation'
-- ) COMMENT 'rule list'
