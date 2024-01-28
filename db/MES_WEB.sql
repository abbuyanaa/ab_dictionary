create table tb_codes (
		codeid varchar(255) not null comment '코드 ID'
	, code varchar(255) not null comment '코드'
	, codenm varchar(255) comment '명칭'
	, gubun1 varchar(255) comment '구분1'
	, gubun2 varchar(255) comment '구분2'
	, gubun3 varchar(255) comment '구분3'
	, aused varchar(1) default '1' comment '사용여부(1.사용)'
	, abase enum(1,0) comment '기본값(1.예)'
	, pseq int comment '순번'
)
