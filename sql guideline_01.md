###sql 정리 
	<<<<<<<<로그인>>>>>>>>>>
	
	SELECT personpid FROM profile WHERE kakaopid="kakaopid3";
	// 디비에 없으면
	INSERT INTO profile(phone,kakaonickname,kakaoPW,email,kakaopid) VALUES(01012345678,"kakaonick","kakaoPW","email","kakaopid");
	INSERT INTO profile(phone,kakaonickname,kakaoPW,email,kakaopid) VALUES(123,"kakaonick2","kakaoPW2","email2","kakaopid2");
	INSERT INTO profile(phone,kakaonickname,kakaoPW,email,kakaopid) VALUES(456,"kakaonick3","kakaoPW3","email3","kakaopid3");

	SELECT personpid FROM profile WHERE kakaopid="kakaopid3";
	// 디비에 있으면 바로 토큰만들기

	<<<<<<<<<<<MAIN 정렬>>>>>>>>>>
	var a, var b ,var c

	b= 들어온거

	if (b = date ? c = asc : c = desc)

	select productname, formerprice, productprice, productdate, productimage, productpid
	from productinfo
	where date(productdate)>=date(now()) and productaddress like('%%') and checker=0 and productname like('%%')
	order by  b c;

	<<<<<<<제품등록>>>>>>>>
	INSERT INTO productinfo(productname,productdate,productprice,productimage,personpid,productUrl,formerprice,productaddress_x,productaddress_y,productaddress,text)
	values("A펜션",20180807,150000,"이미지경로",2,"URL",6000000,19.234,14.254,"경기도","팝니다");
	values("B펜션",20180807,150000,"이미지경로",1,"URL",6000000,19.234,14.254,"경기도","팝니다");
	values("C펜션",20180807,150000,"이미지경로",2,"URL",6000000,19.234,14.254,"부산","팝니다");
	values("D펜션",20180807,150000,"이미지경로",1,"URL",6000000,19.234,14.254,"부산","팝니다");
	values("E펜션",20180807,150000,"이미지경로",1,"URL",6000000,19.234,14.254,"부산","팝니다");
	values("F펜션",20180810,150000,"이미지경로",1,"URL",6000000,19.234,14.254,"부산","팝니다");
	values("G펜션",20180801,150000,"이미지경로",1,"URL",6000000,19.234,14.254,"부산","팝니다");
	values("H펜션",20180815,150000,"이미지경		 		 로",1,"URL",6000000,19.234,14.254,"부산","팝니다");


	<<<<<<<제품수정>>>>>>>>>
	x,y 다시 계산
	UPDATE productinfo
	set productname=?,productdate=?,producprice=?,productimage=?,productUrl=?,formerprice=?,productaddress=?,productaddress_x=?,productaddress_y=?,text=?
	where productpid=?;

	<<<<<<<제품 삭제>>>>>>>>>
	delete from productinfo where productpid=?;


	<<<<<<<<<<찜 -등록>>>>>>>>>>
	insert into productchoice(choice_productpid,choice_personpid) values(?,?);

	<<<<<<<<<<찜- 삭제>>>>>>>>>>>
	delete from productchoice where choice_personpid=? and choice_productpid=?;


	<<<<<<<판매완료>>>>>>>>>
	Update productinfo set checker=0 where productpid=?;

	Delete from productsell where seller_personpid=? and sell_productpid=?;

	Insert into productsold value (?,?);

	<<<<<<<검색>>>>>>>>
	select productname, formerprice, productprice, productdate, productimage, productpid
	from productinfo
	where productname like ("%종로%") or productaddress like("%종로%");;

	//공유하기

	<<<<<<<<<찜조회>>>>>>>>
	select productname, formerprice,productprice,productdate,productimage from productinfo left outer join productchoice on productpid=choice_productpid group by choice_personpid having choice_personpid=?;

	<<<<<<<최근-조회>>>>>>>>
	select productname, formerprice,productprice,productdate,productimage from productinfo left outer join productchoice on productpid=search_productpid group by search_personpid having search_personpid=?;

	<<<<<<<판매중인 내역조회>>>>>>>>
	select productname, formerprice,productprice,productdate,productimage from productinfo left outer join productsell on productpid=sell_productpid group by seller_personpid having seller_personpid=?;


	<<<<<<<구매 내역 조회>>>>>>>>
	select productname, formerprice,productprice,productdate,productimage from productinfo left outer join productsold on productpid=sold_productpid group by buyer_personpid having buyer_personpid=?;

	<<<<<<<판매된 내역조회>>>>>>>>>
	select productname, formerprice,productprice,productdate,productimage from productinfo where check=1 and personpid=?;

	<<<<<<<제품 상세조회>>>>>>>>>
	select productaddress_x,productaddress_y, productpid, productname, formerprice,productprice,productdate_s,productdate_e,productimage,text,productUrl,productaddress from productinfo where productpid=?;

	select  choice_productpid from productchoice where choice_productpid=? and choice_personpid=?

	update productinfo set producthit=producthit+1 where productpid=? ;
