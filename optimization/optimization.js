const ENABLE_HOVER_DELAY = 500;  
let timer;
window.addEventListener('scroll', function() {
  const bodyClassList = document.body.classList;
  clearTimeout(timer);
  if (!bodyClassList.contains('disable-hover')) {
    bodyClassList.add('disable-hover');
  }
  timer = setTimeout(function() {
    bodyClassList.remove('disable-hover');
  }, ENABLE_HOVER_DELAY);
}, false);
