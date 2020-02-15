# Newssite
This is a fronend newssite using [newsapi](https://newsapi.org/).

## Demo
A live demo can be seen [here](https://sivaranjith1.github.io/newssite/).

## Endpoint provided by newsapi

```json
{
    "status": "ok",
    "totalResults": 3531,
    "articles": [
    {
        "source": {
            "id": null,
            "name": "Mirror.co.uk"
        },
        "author": "mirrornews@mirror.co.uk (Lottie Gibbons)",
        "title": "Man with OCD who left school at 16 now earns £3,000 a week valeting cars",
        "description": "Liam Maguire, 30, boast clients including famous football players and high-flying Dubai businessmen who are prepared to fork out big money for his services",
        "url": "https://www.mirror.co.uk/news/uk-news/man-ocd-who-left-school-21503164",
        "urlToImage": "https://i2-prod.mirror.co.uk/incoming/article21503167.ece/ALTERNATES/s1200/0_Boy-who-left-school-at-16-now-earns-£3000-a-week-thanks-to-his-OCD.jpg",
        "publishedAt": "2020-02-15T15:04:44Z",
        "content": "A man with OCD who left school at 16 now earns up to £3,000 a week valeting cars.\r\nLiam Maguire, 30, counts famous footballers and high-flying Dubai business men amongst his clients after launching his own business three years ago.\r\nNow, he earns big money cl… [+4505 chars]"
    },
    {
        "source": {
            "id": null,
            "name": "Bitcoinist.com"
        },
        "author": "Ricardo Martinez",
        "title": "Should you Buy Bitcoin on Fridays and Sell on Mondays?",
        "description": "A comprehensive study analyzed 2 years’ worth of Bitcoin buying and selling data. The findings were pretty surprising. The research took a look at the average weekly market cycle to find the best day of the week to buy, and also to sell. What Were the Finding…",
        "url": "https://bitcoinist.com/buy-bitcoin-friday-sell-on-monday/",
        "urlToImage": "https://bitcoinist.com/wp-content/uploads/2020/02/15-Feb-5.jpg",
        "publishedAt": "2020-02-15T15:00:04Z",
        "content": "A comprehensive study analyzed 2 years’ worth of Bitcoin buying and selling data. The findings were pretty surprising. The research took a look at the average weekly market cycle to find the best day of the week to buy, and also to sell.\r\nWhat Were the Findin… [+2607 chars]"
    }]
}
```

### Loading the data in js
fetch has been used to get the data from newsapi.org
```js
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
```