const main = document.querySelector(".main");
const country = document.querySelector(".dropdownBox");
let mainUrl =
  "https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=d6c6ebd4c4c24e0b9538d66e3645becf";

function getData() {
  fetch(mainUrl)
    .then(response => {
      return response.json();
    })
    .then(data => {
      main.innerHTML = "";

      createHeader(data.articles[0]);
      data.articles.slice(1, 50).forEach(element => {
        createElem(element);
      });
    });
}

function createHeader(data) {
  const bgimg = document.querySelector(".background");
  bgimg.style.backgroundImage = "url('" + data.urlToImage + "')";

  document.querySelector(".hero").setAttribute("data-url", data.url);

  const title = document.querySelector(".article-name");
  title.innerHTML = data.title;

  const author = document.querySelector("author");
  author.innerHTML = data.author;

  const site = document.querySelector(".site");
  site.innerHTML = data.source.name;
}

function createElem(data) {
  const wrapper = document.createElement("div");
  wrapper.setAttribute("data-url", data.url);
  wrapper.addEventListener("click", clickOnNews);
  wrapper.innerHTML = `
    <div class="news">
            <div class="img">
                <img
                    src="${data.urlToImage}" />
            </div>


            <div class="text">
                <h2 class="text-title">${data.title}</h2>
                <author>${data.author}</author>
                <span class="site blue">${data.source.name}</span>
            </div>
        </div>
    `;
  main.appendChild(wrapper);
}

function clickOnNews(evt) {
  const url = evt.currentTarget.getAttribute("data-url");
  console.log(url);
  window.open(url, "_blank");
}

function selectChange(evt) {
  let val = evt.target.value;
  mainUrl = `https://newsapi.org/v2/top-headlines?country=${val}&category=business&apiKey=d6c6ebd4c4c24e0b9538d66e3645becf`;

  getData();
}

country.addEventListener("change", selectChange);
document.querySelector(".hero").addEventListener("click", clickOnNews);

getData();
