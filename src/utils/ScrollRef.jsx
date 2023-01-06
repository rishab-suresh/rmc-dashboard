export function scrollDown(ref) {
  window.scrollBy({
    top:200,
    behavior:"smooth"
  }); // scroll 200 pixels down
  if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
    window.scrollTo(0, 0); // scroll to the top if we have reached the bottom
  }
}

