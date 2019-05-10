const fetch = require("node-fetch");

exports.getArticles = async (req, res) => {
  const url = `https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=ff12d6130a334ddeaaa6e036dd47762e`;

  let response = await fetch(url);
  console.log("response", response);

  // // only proceed once promise is resolved
  let json = await response.json();
  console.log("json", json);

  const articles = await json.articles.map(article => {
    return article;
  });

  // const dataRes = await new Array(json).map((item, index) => {
  //   console.log("idex", item);
  //   return item;
  // });

  // let newArray = await [json];
  // // console.log("response", newArray);
  // let data = await newArray[0];
  res.send(articles);
};
