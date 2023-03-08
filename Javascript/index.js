let site = prompt(
  "구글, 네이버, 다음, 빙 중 자주 이용하는 포털 사이트 이름을 적어주세요."
);
let url;

switch (site) {
  case "구글":
  case "google":
    url = "www.google.com";
    break;
  case "네이버":
  case "naver":
    url = "www.naver.com";
    break;
  case "다음":
  case "daum":
    url = "www.daum.net";
    break;
  case "빙":
  case "bing":
    url = "bing.com";
    break;
  default:
    alert("아쉽지만 보기에 없습니다.");
}

if (url) location.href = "https://" + url;
