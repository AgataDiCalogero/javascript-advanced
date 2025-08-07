// Converts a Unix timestamp to a formatted date string
export function formatDate(unixTime) {
    const date = new Date(unixTime * 1000);
    return date.toLocaleDateString("en-US", {
        day: '2-digit',
        month: 'long',
        year: 'numeric'
    });
}

// Scroll to top functionality
export function initScrollToTop() {
  const scrollToTopBtn = document.querySelector("#scroll-to-top");

  // Show/hide button based on scroll position
  const toggleScrollButton = () => {
    if (window.scrollY > 250) {
      scrollToTopBtn.removeAttribute("hidden");
    } else {
      scrollToTopBtn.setAttribute("hidden", "true");
    }
  };

  // Scroll to top smoothly
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  // Event listeners
  window.addEventListener("scroll", toggleScrollButton);
  scrollToTopBtn.addEventListener("click", scrollToTop);
}

