function removeShortVideos() {
  const spans = document.querySelectorAll(
    "span.style-scope.ytd-thumbnail-overlay-time-status-renderer"
  );

  const shorts = document.querySelectorAll("ytd-reel-shelf-renderer.style-scope.ytd-item-section-renderer");

  shorts.forEach((short) => {
    short.remove()
  })
  

  spans.forEach((span) => {
    const time = span.innerHTML;

    if (time === "SHORTS") {
      span.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.remove();
    } else {
      if (time.length < 11) {
        span.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.remove();
      }
    }
  });
}


  setInterval(removeShortVideos, 100); 

