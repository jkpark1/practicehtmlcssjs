let userName = prompt("이름을 입력해 주세요", "홍길동");
let userHeight = Number(prompt("신장을 입력해 주세요", "185"));
let userWeight = Number(prompt("체중을 입력해 주세요", "88"));
let nomalWeight = (userHeight - 100) * 0.9;
let result = userWeight >= nomalWeight - 5 && userWeight <= nomalWeight + 5;
result = result ? "적정 체중입니다." : "적정 체중이 아닙니다.";
document.write(`${userName}님은 ${result}<br>`);
document.write(
  `${userName}님의 적정 체중은 ${nomalWeight.toFixed(1) - 5}~${
    nomalWeight.toFixed(1) + 5
  }입니다.<br>`
);
if ((result = "적정 체중이 아닙니다.")) {
  nomal();
}
function nomal() {
  let less = nomalWeight - 5 - userWeight;
  let more = userWeight - (nomalWeight + 5);
  if (userWeight < nomalWeight - 5) {
    document.write(
      `${userName}님은 정상 체중 보다 ${less.toFixed(1)}kg 미달입니다.`
    );
  } else if (userWeight > nomalWeight + 5) {
    document.write(
      `${userName}님은 정상 체중 보다 ${more.toFixed(1)}kg 초과입니다.`
    );
  }
}
