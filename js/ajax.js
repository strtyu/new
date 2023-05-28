function showRent() {
    var element = document.getElementById('Rent');
    if (window.getComputedStyle(element).display === 'none') {
      element.style.display = 'block';
      element.style.transition = 'opacity 0.5s ease';
      setTimeout(function() {
        element.style.opacity = '1';
      }, 10);
    } else {
      element.style.opacity = '0';
      element.style.transition = 'opacity 0.5s ease';
      setTimeout(function() {
        element.style.display = 'none';
        element.style.transition = 'opacity 0.5s ease';
      }, 300); 
  }
}
function changeColor(obj) {
    if(obj.style.color == 'orange') {
        obj.style.color = 'black'
    }
    else{
        obj.style.color = 'orange'
    }
}
    function showmainten() {
        var element = document.getElementById('mainten');
        if (window.getComputedStyle(element).display === 'none') {
          element.style.display = 'block';
          element.style.transition = 'opacity 0.5s ease';
          setTimeout(function() {
            element.style.opacity = '1';
          }, 10);
        } else {
          element.style.opacity = '0';
          element.style.transition = 'opacity 0.5s ease';
          setTimeout(function() {
            element.style.display = 'none';
            element.style.transition = 'opacity 0.5s ease';
          }, 300);
        }
      }
    function showspare() {
        var element = document.getElementById('spare');
        if (window.getComputedStyle(element).display === 'none') {
          element.style.display = 'block';
          element.style.transition = 'opacity 0.5s ease';
          setTimeout(function() {
            element.style.opacity = '1';
          }, 10);
        } else {
          element.style.opacity = '0';
          element.style.transition = 'opacity 0.5s ease';
          setTimeout(function() {
            element.style.display = 'none';
            element.style.transition = 'opacity 0.5s ease';
          }, 300);
        }
      }
      function showAkma() {
        var element = document.getElementById('Akma');
        if (window.getComputedStyle(element).display === 'none') {
          element.style.display = 'block';
          element.style.transition = 'opacity 0.5s ease';
          setTimeout(function() {
            element.style.opacity = '1';
          }, 10);
        } else {
          element.style.opacity = '0';
          element.style.transition = 'opacity 0.5s ease';
          setTimeout(function() {
            element.style.display = 'none';
            element.style.transition = 'opacity 0.5s ease';
          }, 300);
        }
      }
      
      function showKana() {
        var element = document.getElementById('Kana');
        if (window.getComputedStyle(element).display === 'none') {
          element.style.display = 'block';
          element.style.transition = 'opacity 0.5s ease';
          setTimeout(function() {
            element.style.opacity = '1';
          }, 10);
        } else {
          element.style.opacity = '0';
          element.style.transition = 'opacity 0.5s ease';
          setTimeout(function() {
            element.style.display = 'none';
            element.style.transition = 'opacity 0.5s ease';
          }, 300);
        }
      }
      
      function showAlyo() {
        var element = document.getElementById('Alyo');
        if (window.getComputedStyle(element).display === 'none') {
          element.style.display = 'block';
          element.style.transition = 'opacity 0.5s ease';
          setTimeout(function() {
            element.style.opacity = '1';
          }, 10);
        } else {
          element.style.opacity = '0';
          element.style.transition = 'opacity 0.5s ease';
          setTimeout(function() {
            element.style.display = 'none';
            element.style.transition = 'opacity 0.5s ease';
          }, 300);
        }
      }
      
      function showEra() {
        var element = document.getElementById('Era');
        if (window.getComputedStyle(element).display === 'none') {
          element.style.display = 'block';
          element.style.transition = 'opacity 1s ease';
          setTimeout(function() {
            element.style.opacity = '1';
          }, 10);
        } else {
          element.style.opacity = '0';
          element.style.transition = 'opacity 1s ease';
          setTimeout(function() {
            element.style.display = 'none';
            element.style.transition = 'opacity 1s ease';
          }, 300);
        }
      }
      var swiper = new Swiper(".mySwiper", {
        slidesPerView: 1,
        spaceBetween: 30,
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        mousewheel: true,
        keyboard: true,
      });