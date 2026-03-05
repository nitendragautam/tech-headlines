const rssFeed =
  "https://api.allorigins.win/raw?url=https://www.techmeme.com/feed.xml";

fetch(rssFeed)
  .then(response => response.text())
  .then(str => new window.DOMParser().parseFromString(str, "text/xml"))
  .then(data => {

    const items = data.querySelectorAll("item");
    const container = document.getElementById("feed");

    items.forEach(el => {

      const title = el.querySelector("title").textContent;
      const link = el.querySelector("link").textContent;
      const pubDate = el.querySelector("pubDate").textContent;

      const html = `
        <div class="article">
          <a href="${link}" target="_blank">
            <h3>${title}</h3>
          </a>
          <p>${pubDate}</p>
        </div>
      `;

      container.insertAdjacentHTML("beforeend", html);

    });

  });