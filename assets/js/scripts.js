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
        
        if (menuMobile.classList.contains('open')) {
          menuMobile.classList.remove('open')
          document.querySelector('.icon1').src = "assets/images/menu_white_36dp.svg";
        } else {
          menuMobile.classList.add('open')
          document.querySelector('.icon1').src = "assets/images/close_white_36dp.svg";
        }
      }
    
      function menuHide() {
        let menuMobile = document.querySelector('.mobile-menu')
    
        menuMobile.classList.remove('open')
        document.querySelector('.icon1').src = "assets/images/menu_white_36dp.svg";
      }