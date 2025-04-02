const url =
  "https://newsapi.org/v2/top-headlines?country=us&apiKey=44eca781d6fb4e2da8fd8e7969b3b375";
fetch(url)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    const articles = data.articles;
    const articlesContainer = document.createElement("div");
    articlesContainer.className = "articles-container";
    articles.forEach(function (article) {
      const articleElement = document.createElement("div");
      articleElement.className = "article";
      articleElement.innerHTML = `
            <h2>${article.title}</h2>
            <p><strong>Author:</strong> ${
              article.author || "Unknown Author"
            }</p>
            <p>${article.description}</p>
            ${
              article.urlToImage
                ? `<img src="${article.urlToImage}" alt="Article Image">`
                : ""
            }
            <a href="${article.url}" target="_blank">Read more</a>
          `;
      articlesContainer.appendChild(articleElement);
    });
    document.body.appendChild(articlesContainer);
  })
  .catch(function (error) {
    console.error("There was a problem with the fetch operation:", error);
  });
