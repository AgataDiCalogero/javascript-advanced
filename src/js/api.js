/* API functions for Hacker News */

const apiBase = "https://hacker-news.firebaseio.com/v0";

/* Fetch of the latest news IDs */
export const fetchNewsIds = async () => {
  const response = await fetch(`${apiBase}/newstories.json`);
  return response.json();
};

/* Fetch of a single news item by ID */
export const fetchNewsItem = async (id) => {
  const response = await fetch(`${apiBase}/item/${id}.json`);
  return response.json();
};

export const fetchNewsItems = async (ids) => {
  return Promise.all(ids.map((id) => fetchNewsItem(id)));
};
