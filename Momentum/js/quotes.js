const quotes = [
{
    quote : "산다는것 그것은 치열한 전투이다.",
    author : "로망로랑"

},
{
    quote : "진정으로 웃으려면 고통을 참아야하며 , 나아가 고통을 즐길 줄 알아야 해.",
    author : "찰리 채플린"

},
{
    quote : "직업에서 행복을 찾아라. 아니면 행복이 무엇인지 절대 모를 것이다.",
    author : "엘버트 허버드"

},
{
    quote : "신은 용기있는자를 결코 버리지 않는다.",
    author : "켄러"

},
{
    quote : "절대 어제를 후회하지 마라 . 인생은 오늘의 나 안에 있고 내일은 스스로 만드는 것이다",
    author : "L.론허바드"

},
{
    quote : "오랫동안 꿈을 그리는 사람은 마침내 그 꿈을 닮아 간다.",
    author : "앙드레 말로"

},
{
    quote : "좋은 성과를 얻으려면 한 걸음 한 걸음이 힘차고 충실하지 않으면 안 된다.",
    author : "단테"

},
{
    quote : "평생 살 것처럼 꿈을 꾸어라.그리고 내일 죽을 것처럼 오늘을 살아라.",
    author : "제임스 딘"

},
{
    quote : "절대 포기하지 말라. 당신이 되고 싶은 무언가가 있다면, 그에 대해 자부심을 가져라. 당신 자신에게 기회를 주어라. 스스로가 형편없다고 생각하지 말라. 그래봐야 아무 것도 얻을 것이 없다. 목표를 높이 세워라.인생은 그렇게 살아야 한다.",
    author : "마이크 맥라렌"

},
{
    quote : "행복의 문이 하나 닫히면 다른 문이 열린다 그러나 우리는 종종 닫힌 문을 멍하니 바라보다가 우리를 향해 열린 문을 보지 못하게 된다.",
    author : "헬렌켈러"

}
];

//console.log(quotes);

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todayQuote = quotes[Math.floor(Math.random()*quotes.length)].quote;
const todayAuthor = quotes[Math.floor(Math.random()*quotes.length)].author;

quote.innerText = todayQuote;
author.innerText = `- ${todayAuthor}`;