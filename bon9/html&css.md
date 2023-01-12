# html

# css

## 1. start

#### CSS란
html의 문서를 꾸미고 표현하는데 특화된 언어로   크게 두 가지로 이해할 수 있다. 
1. 어느 요소(html)를 
2. 어떻게 

##### 규칙(rule set)
```
p {color: red;}---> a rule set
```
아래 구성들의 총 집합을 규칙(rule set)이라고 한다.

###### 어느요소를
- 선택자(selector)
h1과 같은 html 태그를 지정한다.

###### 어떻게

`h1 {color: yellow; font-size: 2em;}`

|           이름            |              해당 부분              |
|:-------------------------:|:-----------------------------------:|
|      속성(property)       |        "color", "font-size"         |
|        값 (value)         |          :"yellow", "2em"           |
|     선언(declaration)     | "color: yellow;", "font-size: 2em;" |
| 선언부(declaration block) |  "{color: yellow; font-size: 2em}"  |

###### CSS적용방식

1. inline style 
해당요소에 직접 선언한다
```
<p style="color: yellow">텍스트 컬러 노란색 직접 지정<p>
```
2. internal
head에 셀렉터를 포함한 룰셋 전부를 추가한다
```
<html lang="ko">
	<head>
		<meta charset="utf-8">
		<title>internal</title>
		<style media="screen">
			p {color: red;}
		</style>
	</head>
	<body>
		<p>internal green text</p>
	</body>
</html>
```

3. External
별도의 외부 css파일을 만들어 연결해서 사용한다
link 태그 사용 
```
<link rel="stylesheet" href="./style.css">
```
4. @import
성능이 안좋아 사용X
외부 css문서를 참조함


## 선택자(SELECTOR)

### 선택자의 종류

#### 1. 요소 선택자(TAG)
##### 문서내의 선택자에 해당되는 모든 헤딩요소에 스타일이 적용된다

```
h1 { color: yellow; }
h2 { color: yellow; }
h3 { color: yellow; }
h4 { color: yellow; }
h5 { color: yellow; }
h6 { color: yellow; }
```

#### 2. GROUPING
##### 선택자는 쉼표를 통해 그룹화가 가능하다

`h1, h2, h3, h4, h5, h6 { color: yellow; }`

전체선택자는 `*`를 사용한다 편하지만 성능에는 좋지 않아 사용을 지양한다.
`* { color: yellow; }`

선언 역시 그룹화 ;를 사용해서 가능하다
`h1 { color: yellow; font-size: 2em; background-color: gray; }`

선언그룹과 선택자 그룹을 또 그룹화 가능하다
`h1, h2, h3, h4, h5, h6 { color: yellow; font-size: 2em; background-color: gray; }`

#### 3. CLASS 선택자
요소에 구애받지 않고 스타일을 적용할 수 있는 방법

- css
`.foo {font-size: 30px}`

- html
`<p class="foo">....</p>`

##### 1. 다중 CLASS

CSS에 적용한 클래스로 지정한 스타일을 html에 중첩해서 사용할 수 있다.

- css
```
.foo {font-size: 30px;}
.bar {color: blue;}
```
- html
`<p class="foo bar"></p>`


##### 2. ID 선택자
class 선택자와 유사
- css
`#bar { background-color: yellow; }`
- html
`<p id="bar"></p>`

- 차이점 
1. '.'기호가 아닌 '#'기호 사용
2. 태그의 class 속성이 아닌 id 속성을 참조
3. 문서 내에 유일한 요소에 사용
4. 구체성 

##### 코드실습
```
<!DOCTYPE html>
<html lang="ko">
<head>
	<meta charset="UTF-8">
	<title>css</title>
	<style>
		.item { background: gray; }
		.a { color: yellow; }
		.b { color: blue; }
		#special { color: red; }
	</style>
</head>
<body>
	<ul>
		<li class="item a">first</a>
		<li class="item b">second</a>
		<li class="item" id="special">third</a>
	</ul>
</body>
</html>
```

##### 3.선택자의 조합

요소와 클래스의 조합 :해당 요소와 클래스 모두 포함되어야 스타일 적용
`p.class {property: value;}`

다중 class : 해당 클래스가 모두 포함되어야 스타일 적용
`.class1.class2 {property: value;}`

아이디와 클래스의 조합 : 특정 아이디와 클래스가 모두 포함되어야 스타일 적용
`#id.class {property: value;}`
##### 4.속성 선택자

###### 1. 단순 속성으로 선택 : 특정 속성이 포함된 요소를 꾸밈 
- css
`p[class] { color: silver; }
`p[class][id] { text-decoration: underline; }`

- html
```
1. <p class="foo">Hello</p>
2. <p class="bar">CSS</p>
3. <p class="baz" id="title">HTML</p>
```

첫 번째는 p 이면서 class속성이 있는 요소에 color:silver 적용
두 번째는 p 이면서 class,id속성이 모두 있는 요소에 text-decoration:underline 적용
첫 번째 룰셋에 따르면 1,2,3요소 모두 첫 번째 룰셋 스타일이 적용됨
두 번째 룰셋에 따르면 3요소 만이 두 번째 룰셋 스타일이 적용됨

###### 2. 정확한 속성값으로 선택 : 특정 속성과 그 값이 맞는 요소를 꾸밈
- css
`1. p[class="foo"] {color: silver;}`
`2. p[id=title] {text-decoration: underline;}`

1. p이면서 class의 값이 foo인 요소에 color: silver가 적용됨
2. p이면서 id의 값이 title인 요소에 text-decoration: underline 이 적용됨


###### 3. 부분 속성값으로 선택
`[class~=""]` : 공백으로 구분한 단어가 포함된 요소 선택
`[class^=""]` : 클래스 속성의 시작단어가 같으면 선택
`[class$=""]` : 클래스 속성의 뒷단어가 같으면 선택
`[class*=""]` : 클래스 속성에 특정 문자가 있기만 하면 선택

- css
```
p[class~="color"] { font-style: italic; }
p[class^="color"] { font-style: italic; }
p[class$="color"] { font-style: italic; }
p[class*="color"] { font-style: italic; }
```

- html
```
1. <p class="color hot">red</p>
2. <p class="cool color">blue</p>
3. <p class="colorful nature">rainbow</p>
```
- 적용
```
p[class~="color"] { font-style: italic; } 1, 2번째 요소에 적용
p[class^="color"] { font-style: italic; } 1, 3번째 요소에 적용
p[class$="color"] { font-style: italic; } 2번째 요소에 적용
p[class*="color"] { font-style: italic; } 1, 2, 3번째 요소에 적용
```


7. 문서 구조 관련 선택자

부모와 자식 관계 이해

부모 자식 관계 트리

	html
		head
			body
				div
					span
					h1
						span
				span
				p

부모/자식
한 다리 걸쳐서 연결된 트리

	html
		head

조상/자손
몇 다리를 걸치든 상관 없이 연결된 트리

	head 조상(부모)
		html 자식((부모))
			body 자손((자식))(((부모)))
				div 자손(((자식)))

형제 요소

	div
		span 형제
			h1 형제

자손 선택자

공백 요소를 사용해 선택

div span {.....} ---> div 요소의 자손 span을 선택


자식 선택자


7. 가상선택자
	가상 클래스 : 미리 정의해놓은 상황에 적용할 수 있는 클래스
	
	가상 클래스 name:pseudo-class{
		property: value;
		}
	- 마우스를 올리면 빨간색으로 변하는 스타일
		.red {color: red;} 

	- 문서 구조와 관련된 가상 클래스
		:first-child
		:last-child

	- 링크 관련된 가상 클래스
		:link : 하이퍼링크이면서 아직 방문하지 않은 앵커
		:visited : 이미 방문한 적 있는 링크의 앵커

	- 사용자 동작과 관련된 가상 클래스
		:focus : 현재 입력 포커스를 갖고 있는 요소에 적용 ( 포커스:현재 선택되고 있는 요소)
		:hover : 마우스 포인터가 위치해 있는 요소에 적용
		:active : 사용자 입력에 의해 활성화된 요소에 적용

8. 가상 요소
	미리 정의해놓은 위치에 삽입이 되도록 약속이되어있는 보이지 않는 요소
	- :before : 가장 앞에 요소를 삽입
	- :after : 가장 뒤에 요소를 삽입
	- :first- line : 요소의 첫 번째 줄에 있는 텍스트
	- :first-letter : 블록 레벨 요소의 첫 번째 문자



##### 중요도&출저
	우선순위
	5. 사용자 에이전트 스타일
	4. 사용자 스타일
	3. 제작자 스타일
	2. 제작자 !important
	1. 사용자 !important

##### 구체성


선언 순서




#### 4. [[CSS 길이 단위]]
#### 5. [[CSS 속성-색상]]
#### 6. [[CSS 속성-background]]