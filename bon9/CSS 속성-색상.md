## color : 폰트의 색상 값을 적용할 때 사용하는 속성

### 핵심키워드
- 컬러 키워드
	- CSS 자체에서 사용 가능한 키워드로 미리 정해져 있는 색상
	```
	 <h1 style="color: red"> heading </h1>
	```
- 16진법
	- #000000
	- R(00)G(00)B(00)
	- #000(두자리수가 같을 경우)
	- 숫자 0~9 , 알파벳 a~f 까지
	- 0에 가까울수록 블랙 f에 가까울수록 화이트
	```
	<h1 style="color: #ff0000"> heading </h1>
    <h1 style="color: #f00"> heading </h1>
	```
- RGB()
	- RGB(255~0, 255~0, 255~0)
	- RGBA(255~0,  255~0, 255~0, 0~1)
	- Alpha 투명도 0~1
	```
    <h1 style="color: rgb(255,0,0)"> heading </h1>    
    <h1 style="color: rgba(255,0,0, 0.5)"> heading </h1>
	```
- HSL (CSS 3)
- HWB (CSS 4)

[[html&css]]