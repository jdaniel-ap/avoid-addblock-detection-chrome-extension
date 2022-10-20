const body = document.querySelector('body');

body.addEventListener('DOMNodeInserted', DOMObserver);

function DOMObserver() {
  const blocker = document.querySelector('.fc-ab-root');
  if (blocker) {
    remover([blocker]);
  }
}

function remover(DOMElements) {
  body.style.overflow = 'none';
  DOMElements && DOMElements?.forEach((element) => element.remove());
}
