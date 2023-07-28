> ## 주위
> ⚠️본 문서는 아직제작중입ㄴ다.

# APSU 백엔드
본 문서는 백엔드 서버를 설치하는 방법을 정리한 문서입니다.

## installation

해당 파일로 이동을 해서 `npm install`를 합니다.
그리고 .env.example을 이용해서 서버에서 기본적인 설정을 합니다.

```
HOST=0.0.0.0
PORT=1337
APP_KEYS="toBeModified1,toBeModified2"
API_TOKEN_SALT=tobemodified
ADMIN_JWT_SECRET=tobemodified
JWT_SECRET=tobemodified


# Database
DATABASE_CLIENT=mysql
DATABASE_HOST=127.0.0.1
DATABASE_PORT=3306
DATABASE_NAME=DATABASE NAME
DATABASE_USERNAME=TEST
DATABASE_PASSWORD=TESTPASSWORD
DATABASE_SSL=false
JWT_SECRET=
```
KEYS,나 JWT_SECRET 같은 경우는 22자리이내 랜덤으로 문자열로 생성을 해서 끝에 `==`를 넣고 키를 입력하면 됨니다.



