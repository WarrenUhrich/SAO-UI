document.addEventListener('DOMContentLoaded', function() {
  var startY, endY, navOpen, modalOpen;
  var nav = document.getElementById('sao-ui');
  Array.from(document.getElementsByTagName('button')).forEach(function(button) {
    button.addEventListener('click', function() {
      if(modalOpen) return;
      modalOpen = true;
      var article = document.createElement('article');
      article.id = 'sao-ui-modal';
      var h2 = document.createElement('h2')
      h2.textContent = 'Message Modal';
      h2.classList.add('screen-reader-text');
      article.appendChild(h2);
      var header = document.createElement('header');
      var h3 = document.createElement('h3');
      h3.textContent = button.dataset.heading;
      header.appendChild(h3);
      article.appendChild(header);
      var section = document.createElement('section');
      h3 = document.createElement('h3');
      h3.textContent = 'Modal Content';
      h3.classList.add('screen-reader-text');
      section.appendChild(h3);
      var messageLines = button.dataset.message.split('\\r\\n') || [];
      messageLines.forEach(function(msg) {
        var p = document.createElement('p');
        p.textContent = msg;
        section.appendChild(p);
      });
      article.appendChild(section);
      var footer = document.createElement('footer');
      h3 = document.createElement('h3');
      h3.textContent = 'Modal Footer';
      h3.classList.add('screen-reader-text');
      footer.appendChild(h3);
      var accept = document.createElement('button');
      accept.id = 'sao-ui-accept';
      accept.title = 'Press here to accept.';
      var span = document.createElement('span');
      span.textContent = 'Accept';
      span.classList.add('screen-reader-text');
      accept.appendChild(span);
      footer.appendChild(accept);
      var decline = document.createElement('button');
      decline.id = 'sao-ui-decline';
      decline.title = 'Press here to decline.';
      span = document.createElement('span');
      span.textContent = 'Decline';
      span.classList.add('screen-reader-text');
      decline.appendChild(span);
      footer.appendChild(decline);
      article.appendChild(footer);
      document.body.appendChild(article);
      decline.addEventListener('click', function() {
        decline.setAttribute('disabled', 'disabled');
        article.classList.add('sao-ui-fade-out');
        setTimeout(function() {
          article.remove();
          modalOpen = false
        }, 250);
      });
    });
  });
  document.body.addEventListener('touchstart', function(e) { startY = e.touches[0].clientY });
  document.body.addEventListener('touchmove', function(e) { endY = e.touches[0].clientY });
  document.body.addEventListener('touchend', function(e) {
    var swipeDistance = Math.abs(endY - startY);
    var swipeDirection = endY > startY ? 'down' : 'up';
    if(swipeDistance > 50) handleSwipe(swipeDirection);
  });
  document.body.addEventListener('mousedown', function(e) { startY = e.clientY });
  document.body.addEventListener('mousemove', function(e) { endY = e.clientY });
  document.body.addEventListener('mouseup', function(e) {
    var swipeDistance = Math.abs(endY - startY);
    var swipeDirection = endY > startY ? 'down' : 'up';
    if(swipeDistance > 50) handleSwipe(swipeDirection);
  });
  function handleSwipe(direction) {
    if(modalOpen) return;
    if(navOpen && (direction==='up')) {
      navOpen = false;
      nav.classList.remove('open');
      return;
    }
    if(!navOpen && (direction==='down')) {
      navOpen = true;
      nav.classList.add('open');
      return;
    }
  }
});
