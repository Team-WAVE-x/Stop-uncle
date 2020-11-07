# Stop-uncle
[![Hits](https://hits.seeyoufarm.com/api/count/incr/badge.svg?url=https%3A%2F%2Fgithub.com%2FTeam-WAVE-x%2FStop-uncle&count_bg=%23344C74&title_bg=%23555555&icon=&icon_color=%23E7E7E7&title=%EB%B0%A9%EB%AC%B8&edge_flat=false)](https://hits.seeyoufarm.com) <br>
아저씨 그만좀 (아재개그 API) <br>

## Database
![datatableimg](https://cdn.discordapp.com/attachments/620101634453667841/765196909794689024/1.PNG) <br>
나는 잘 모르겠고 어쨌든 이런식임

## Requirements
|Name|Version|Tested|
|:---|:---|:---|
|Windows|Windows 10 1909|✔️(Development)|
|Node.js|v.12.18.2|✔️|
|MariaDB|10.5.5-MariaDB|✔️|
|NPM|6.14.5|✔️|

## How to use
## 🔐 0. 서비스키 발급
### 1. 키 발급
- http://uncle.teamwv.ml 에 방문해서 이메일 주소를 입력하신후 `GetKey` 버튼을 눌러주세요.
- 버튼을 누르면 메일로 API 키가 발송됩니다.

## ✔ 1. 아재개그 퀴즈
 ### 📙 1-1. 랜덤 아재개그 퀴즈
  - 제공 정보: 아재개그 퀴즈와 답
 
```html
http://uncle.teamwv.ml/api?quiz=random
```
#### ※ 요청변수 [GET]
##### header
|parameter|항목설명|
|---|---|
|token|API 인증키|

 ### 📙 1-2. 엑슨바보
  - 제공 정보: 엑슨바보
 
```html
http://uncle.teamwv.ml/api?quiz=exonbabo
```
#### ※ 요청변수 [GET]
##### body
|parameter|항목설명|예시|
|---|---|---|
|quiz|엑슨바보|exonbabo|

### 이슈와 PR은 환영입니다!
- 원하는 아재개그나 새로운 기능은 건의해보세요!
