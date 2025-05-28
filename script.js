function uniqueSlider(){
  if(window.innerWidth > 992){
    gsap.to('.unique_slider_content', {
      transform: "translateX(-503%)",
      duration: 5,
      scrollTrigger: {
        scroller: "body",
        trigger: '.pin_container',
        start: "top -3%",
        end: "top -503%",
        scrub: 2,
        pin: true,
      }
    })
  }else{
    gsap.to('.unique_slider_content',{
      transform: "translateX(-510%)",
      duration: 5,
      scrollTrigger: {
        scroller: "body",
        trigger: '.pin_container',
        start: "top -3%",
        end: "top -510%",
        scrub: 2,
        pin: true,
      }
    })
  }
}
uniqueSlider()

var tl = gsap.timeline();

tl.from(".nav_animation", {
  scale: 0,
  duration: 1,
  stagger: 0.1
})

  function counter(){
    var counted = 0;
    $(window).scroll(function() {

      var oTop = $('#counter').offset().top - window.innerHeight;
      if (counted == 0 && $(window).scrollTop() > oTop) {
        $('.count').each(function() {
          var $this = $(this),
            countTo = $this.attr('data-count');
          $({
            countNum: $this.text()
          }).animate({
              countNum: countTo
            },

            {

              duration: 2000,
              easing: 'swing',
              step: function() {
                $this.text(Math.floor(this.countNum));
              },
              complete: function() {
                $this.text(this.countNum);
                //alert('finished');
              }

            });
        });
        counted = 1;
      }

    });
  }
  counter()


  function onscrollNavAnimate(){
    let lastScrollY = window.scrollY;
    
    window.onscroll = () => {
      const navbar = document.querySelector('.navbar');
      const logo = document.querySelector('.logo');
      const currentScrollY = window.scrollY;
      const isMobile = window.innerWidth <= 991;

      if (currentScrollY === 0) {
        // At the top
        navbar.style.top = "0";
        navbar.style.backdropFilter = 'blur(0px)';
        navbar.style.backgroundColor = isMobile ? 'var(--lightgreen2)' : 'transparent';
        logo.style.scale = '1';
      } else if (currentScrollY < lastScrollY) {
        // Scrolling up
        navbar.style.top = "0";
        navbar.style.backdropFilter = 'blur(10px)';
        navbar.style.backgroundColor = isMobile ? 'var(--lightgreen2)' : 'transparent';
        logo.style.scale = '1';
      } else {
        // Scrolling down
        navbar.style.top = "-100px";
        navbar.style.backdropFilter = 'blur(0px)';
        navbar.style.backgroundColor = isMobile ? 'var(--lightgreen2)' : 'transparent';
        logo.style.scale = '0.3';
      }
      lastScrollY = currentScrollY;
    }
  }
  onscrollNavAnimate()

  //===BANNER---SWIPER---START===//

var swiper = new Swiper(".mySwiper", {
    loop: true,
    speed: 1200,
    effect: 'fade',
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
        // pauseOnMouseEnter: true,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  
  });
  
  
  //===BANNER---SWIPER---END===//

  function swiper2(){
    var swiper = new Swiper(".mySwiper2", {
      spaceBetween: 10,
      loop: true,
      speed: 1200,
      autoplay: {
          delay: 3000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    
    });
  }
  swiper2()

  function planswiper(){
    var swiper = new Swiper(".planswiper", {
      spaceBetween: 10,
      loop: true,
      speed: 1200,
      autoplay: {
          delay: 2500,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    
    });
  }
  planswiper()

  function headingLineAnimation(){
    const line = document.querySelectorAll('.heading_line');
    line.forEach((line)=>{
      gsap.fromTo(line,{
        width: "0",
      },{
        width: "100%",
        duration: 1,
        scrollTrigger: {
          scroller: "body",
          trigger: line,
          start: "top 80%",
          end: "top 40%",
          scrub: 2,
          // markers: true,
          toggleActions: "play none none reset",
        }
      })
    })
  }
  headingLineAnimation()

  function counterAnimation(){
    // Animate counter boxes fade in
    gsap.utils.toArray('.counter-box').forEach(box => {
     gsap.fromTo(box, 
         { opacity: 0, y: 50 },
         {
             opacity: 1,
             y: 0,
             duration: 0.2,
             scrollTrigger: {
                 trigger: box,
                 start: "top 80%",
                 onEnter: () => {
                     // Start counting for both counters
                     const counters = box.querySelectorAll('.counter');
                     counters.forEach(counter => startCounting(counter));
                 }
             }
         }
     );
  });
  
  function startCounting(counter) {
     const target = parseInt(counter.getAttribute('data-target'));
     const display = counter.querySelector('.counter-number') || counter;
     
     gsap.fromTo(display, 
         { innerText: 0 },
         {
             innerText: target,
             duration: 2,
             snap: { innerText: 1 }, // Ensures whole numbers
             ease: "power1.inOut"
         }
     );
  }
  }
  counterAnimation();

  function fancyBox(){
    document.addEventListener("DOMContentLoaded", function () {
      Fancybox.bind('[data-fancybox="gallery"]', {
        Image: {
          zoom: true, 
          wheel: "zoom", 
          click: "toggleZoom", 
          Panzoom: {
            maxScale: 3,
          },
        },
      });
    });
  }
  fancyBox()

  function tabs(){
    document.addEventListener('DOMContentLoaded', function() {
      const tabBtns = document.querySelectorAll('.tab-btn');
      const tabContents = document.querySelectorAll('.tab-content');
      
      // Initial animation for first tab
      gsap.to('#tab1', {
          opacity: 1,
          duration: 0.5,
          ease: 'power2.out'
      });

      function switchTab(tabId) {
          // Remove active class from all buttons and contents
          tabBtns.forEach(btn => btn.classList.remove('active'));
          tabContents.forEach(content => {
              content.classList.remove('active');
              gsap.set(content, { opacity: 0 });
          });

          // Add active class to clicked button and corresponding content
          const activeBtn = document.querySelector(`[data-tab="${tabId}"]`);
          const activeContent = document.getElementById(tabId);
          
          activeBtn.classList.add('active');
          activeContent.classList.add('active');

          // Animate the new content
          gsap.fromTo(activeContent,
              { 
                  opacity: 0,
                  y: 20
              },
              {
                  opacity: 1,
                  y: 0,
                  duration: 0.5,
                  ease: 'power2.out'
              }
          );
      }

      // Add click handlers to buttons
      tabBtns.forEach(btn => {
          btn.addEventListener('click', () => {
              const tabId = btn.getAttribute('data-tab');
              switchTab(tabId);
          });
      });
  });
  }
  tabs()

  function circleRotate(){
    const centerLogo = document.querySelector('.center_logo');
    gsap.to(centerLogo,{
      rotation: 360,
      ease: "none",
      duration: 3,
      scrollTrigger: {
        scroller: "body",
        trigger: centerLogo,
        start: "top bottom",
        end: "bottom top",
        scrub: 1,
        // markers:true
      }
    })
  }
  circleRotate()

  