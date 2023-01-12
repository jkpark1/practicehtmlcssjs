## html의 모든 요소는 사각형의 박스 형태로 만들어짐

![[Pasted image 20230111173720.png]]

### 속성
- content
	- 요소의 실제 내용을 포함 
- border
	- 기본값 : none
	- content의 외곽선
	- px단위
	```html
	border 속성
	border-width:[t][r][b][l];
	border-style:[t][r][b][l];
	border-color:[t][r][b][l];
	border:[-width] [-style] [-color];
	```
- padding
	- content와 border사이의 여백
	- content의 연장선 배경 색, 이미지 등 함께 적용
	- 음수 X
	- auto X
	- px, %:width값에 영향을 받음
	```html
	padding 속성
	padding-top:length ot percent
	padding-right:length ot percent
	padding-bottom::length ot percent
	padding-left::length ot percent
	padding:[-top] [-right] [-bottom] [-left]
           0      10        10      30    상,우,하,좌 모두 다름
           0      10        20            우, 좌 같음
           0      10                      상,하 같음 & 우,좌 같음
           0                              상,우,하,좌 모두 같음
	```
- margin
	- 요소와 요소사이를 구분하는 여백(border밖 여백)
	- 기본 적인 속성 적용은 padding과 같음
	- 음수 O
	- px, %:width값에 영향을 받음
	- 마진 병합(collaps) 
		- 인접한 수직 방향의 마진들의 병합
		- 상하 인접 : 위 요소의 하단 마진,아래 요소의 상단 마진 병합
		- 부모 요소와 첫 자식 요소 or 마지막 자식 요소
			- padding&border 가 없어야됨
			- 부모 요소의 상단 마진과 첫 자식 요소의 상단 마진 병합
			- 부모 요소의 하단 마진과 마지막 자식 요소의 하단 마진 병합
		- 내용이 없는 요소 : 해당 요소의 상단 마진과 하단 마진이 병합
			- - padding&border 가 없어야됨
	- auto O
		- 브라우저가 자동으로 여백 계산 보통은 0
		- 요소가 사용가능한 공간과 같음
		- -right, -left auto를 사용하면 수평 중앙 정렬 
- width
	- 요소의 가로 크기 지정 인라인 레벨 제외(content 영역)
	- 기본 값 : 0
	- auto : 브라우저가 자동으로 적용
	- length : px, em,...
	- percent : 부모 요소의 width에 대한 상대적인 크기(content 영역)
	- content영역에 적용시 margin을 제외한 모든 영역에 영
- heigth
	- 요소의 세로 크기 지정(content 영역)
	- 기본적으로 width와 같이 동작 %는 예외
	- percent : 부모 요소의 height에 대해 상대적 크기 지정
		- 부모 요소에 height가 명시가 되어있어야 함
정리 https://www.boostcourse.org/cs120/lecture/92920/?isDesc=false

[[html&css]]