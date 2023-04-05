const spans = document.querySelectorAll(
  "span.style-scope.ytd-thumbnail-overlay-time-status-renderer"
);

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
