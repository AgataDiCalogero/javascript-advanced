/* Main NewsApp Class */
import { formatDate, initScrollToTop } from "./helpers.js";
import { fetchNewsIds, fetchNewsItems } from "./api.js";
import '../css/style.css';
import get from 'lodash/get';

class NewsApp {
  constructor() {
    // Initial state
    this.newsPerPage = 10;
    this.currentPage = 0;
    this.newsIds = [];
    this.container = document.querySelector("#news-container");
    this.loadMoreBtn = document.querySelector("#load-more");
    this.loader = document.querySelector("#loader");
  }

  // App initialization
  init() {
    this.setupEvents();
    this.fetchNewsIds(); // Fetch ID list
  }

  // Event binding (like "Load More" button)
  setupEvents() {
    this.loadMoreBtn.addEventListener("click", () => this.loadMoreNews());
  }

  // Fetch news IDs from API
  async fetchNewsIds() {
    this.showLoading("Loading news...");
    fetchNewsIds()
      .then((ids) => {
        this.newsIds = ids;
        this.loadMoreNews(); // Load first batch of news
      })
      .catch((error) => {
        this.showError("API connection error");
        console.error(error);
      })
      .finally(() => {
        this.hideLoading();
      });
  }

  // Fetch and display next batch of news
  loadMoreNews() {
    const start = this.currentPage * this.newsPerPage;
    const end = start + this.newsPerPage;
    const idsToLoad = this.newsIds.slice(start, end);

    this.showLoading("Loading more news...");

    this.currentPage++;

    fetchNewsItems(idsToLoad)
      .then((newsArray) => {
        newsArray.forEach((news) => this.renderNews(news));
        if (end >= this.newsIds.length) {
          this.handleEndOfNews();
        }
      })
      .catch((error) => {
        this.showError("Error loading news");
        console.error(error);
      })
      .finally(() => {
        this.hideLoading();
      });
  }

  // Loading message
  showLoading(message) {
    this.loader.innerHTML = `
      <div class="loader-container" role="status" aria-label="${message}">
        <div class="spinner">
          <div class="spinner-ring"></div>
          <div class="spinner-ring"></div>
          <div class="spinner-ring"></div>
        </div>
        <p class="loader-message">${message}</p>
      </div>
    `;
  }

  // Hide loading message
  hideLoading() {
    this.loader.innerHTML = "";
  }

  // Render news cards in DOM
  renderNews(news) {
    // Handle missing news object or title using Lodash get
    const title = get(news, 'title', '');
    if (!news || !title) return;

    // Date formatting with safe access
    const timestamp = get(news, 'time', Date.now() / 1000);
    const date = formatDate(timestamp);

    // Create news card
    const card = document.createElement("div");
    
    // Safe access to URL property
    const url = get(news, 'url', null);
    
    if (url) {
      // Card with link - focus on link only
      card.className = "news-card news-card--with-link";
      card.innerHTML = `
      <h2><a href="${url}" target="_blank" rel="noopener noreferrer" class="news-card__link">${title}</a></h2>
      <time>${date}</time>
      `;
    } else {
      // Card without link - make card focusable
      card.className = "news-card news-card--no-link";
      card.tabIndex = 0;
      card.setAttribute('role', 'article');
      card.setAttribute('aria-label', `News: ${title}`);
      card.innerHTML = `
      <h2><span>${title}</span></h2>
      <time>${date}</time>
      `;
    }

    this.container.appendChild(card);
  }

  // Display error message
  showError(message) {
    this.container.innerHTML = `<p class="message error">${message}</p>`;
  }

  // Handle end of news
  handleEndOfNews() {
    this.loadMoreBtn.disabled = true;
    this.loadMoreBtn.innerText = "No more news";
    if (!document.querySelector("#end-message")) {
      const endMsg = document.createElement("p");
      endMsg.id = "end-message";
      endMsg.className = "message";
      this.loadMoreBtn.insertAdjacentElement("afterend", endMsg);
    }
  }
}

// App instance and startup
const app = new NewsApp();
app.init();

initScrollToTop(); // Initialize scroll to top functionality