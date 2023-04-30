# APSU 자동 유동병력 유틸리티

## 이 프로젝트는 무엇일까요?
본프로젝트는 현역이었시절일때 대대에서 유동병력보고가 구시대적이고 당직사관이나 당직병이 없으면 보고를 할수가 없어서 큰 불편함이 있었습니다.<br>
그래서 이때 당시는 핸드폰이 일과시간 까지 사용이 가능해서 모바일로 자동으로 보고를 할수 있는 플랫폼을 개발 하기로 시작했습니다.<br>
또 부대에 결식을 하는 인원들이 있어 누가 결식을 했는지 정확이 알기위해서 결식자 찾는 기능도 추가 했습니다.<br>

## 주요기능
 1. 유동병력 보고<br>
 2. 유동병력 승인<br>
 3. 결식자 확인<br>
 
 ## 사용한 언어 및 프레임워크
 ### vue 2.0 & vuetify
 군대에서는 컴퓨터를 만질 시간이 없어서 빠르게 작업을 할수 있는 vue를 선택을 했고<br>
 웹앱으로 개발되는 만큼 안드로이드와 애플의 디자인 간격을 줄이기 위해 vuetify를 사용했습니다
 
 ###WebNFC
 군 내무에서는 카메라가 사용이 금지가 되길래 NFC방식으로 인증 하는 수단을 선택했습니다.<Br>
 하지만 이경우 따로 추가작업이 필요하고 시간이 부족할거 같해서 빠르게 개발 가능한 WebNFC로<br>
 개발 했습니다.<br>
 > 하지만 아이폰은 WebNFC가 지원이 안되서 코드로 입력해서 인증합니다.

## 개발 방향
현재 개발방향은 간부나 용사가 사용을 할시 편하게 사용을 할수 있도록 디자인을 설계했고<br>
악용여부를 방지를 하기위해서 간부가 야간 순찰 NFC태그 데이터 변경하는 기술을 사용하기 위해 노력중입니다.<br>

### 전역후 이 프로젝트
전역후 이 프로젝트가 개발을 다하지 못해도 포폴에 사용하기 위해서 끝까지 개발할려고 합니다.
