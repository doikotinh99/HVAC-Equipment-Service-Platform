function initTypewriter() {
  const line1 = document.getElementById('type-line-1');
  const line2 = document.getElementById('type-line-2');
  if (!line1 || !line2) return;

  const firstText = 'Boiler Problems? No Heat?';
  const secondText = 'We Bring Heat Back in 60 Mins.';

  const prefersReduced = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const isMobile = window.innerWidth <= 768;
  if (prefersReduced || isMobile) {
    line1.textContent = firstText;
    line2.textContent = secondText;
    return;
  }

  function cycle() {
    line1.textContent = '\u00A0';
    line2.textContent = '\u00A0';
    let i = 0;
    let j = 0;

    function typeFirst() {
      if (i < firstText.length) {
        if (i === 0) line1.textContent = '';
        line1.textContent += firstText.charAt(i++);
        setTimeout(typeFirst, 70);
      } else {
        setTimeout(typeSecond, 240);
      }
    }

    function typeSecond() {
      if (j < secondText.length) {
        if (j === 0) line2.textContent = '';
        line2.textContent += secondText.charAt(j++);
        setTimeout(typeSecond, 60);
      } else {
        setTimeout(cycle, 3800);
      }
    }

    typeFirst();
  }

  cycle();
}

if (typeof window !== 'undefined') {
  window.initTypewriter = initTypewriter;
}
