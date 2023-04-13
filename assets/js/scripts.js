reveal();

function reveal() {
    var reveals = document.querySelectorAll(".reveal");
  
    for (var i = 0; i < reveals.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = reveals[i].getBoundingClientRect().top;
      var elementVisible = 50;
  
      if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add("active");
      } else {
        reveals[i].classList.remove("active");
      }
    }
  }
  
  window.addEventListener("scroll", reveal);

    //////nav-bar////////

    function menuShow() {
        let menuMobile = document.querySelector('.mobile-menu')
        var bars = document.querySelector('#bars')
        
        if (menuMobile.classList.contains('open')) {
          menuMobile.classList.remove('open')
          bars.classList.remove('fa-xmark')
          bars.classList.add('fa-bars')
        } else {
          menuMobile.classList.add('open')
          bars.classList.remove('fa-bars')
          bars.classList.add('fa-xmark')
        }
      }
    
      function menuHide() {
        let menuMobile = document.querySelector('.mobile-menu')
        var bars = document.querySelector('#bars')
    
        menuMobile.classList.remove('open')
        bars.classList.remove('fa-xmark')
        bars.classList.add('fa-bars')
      }

      ////////////

      function darkMode() {
        var element = document.body
        var icon = document.querySelector('#icon')
        
        if(element.classList.contains('dark-mode')) {
          element.classList.remove('dark-mode') 
          icon.classList.remove('fa-moon')
          icon.classList.add('fa-moon')

        } else {
          element.classList.add('dark-mode')
          icon.classList.remove('fa-moon')
          icon.classList.add('fa-sun')
        }
      }