
function adicionarClasseAtiva() {
  document.querySelector('.content').classList.add('removeImage');
}
function removerClassAtiva() {
  document.querySelector('.content').classList.remove('removeImage');
}
function ativarArquivoJS() {
  /**
* demo.js
* http://www.codrops.com
*
* Licensed under the MIT license.
* http://www.opensource.org/licenses/mit-license.php
* 
* Copyright 2019, Codrops
* http://www.codrops.com
*/
  {
    // body element
    const body = document.body;

    // helper functions
    const MathUtils = {
      // linear interpolation
      lerp: (a, b, n) => (1 - n) * a + n * b,
      // distance between two points
      distance: (x1, y1, x2, y2) => Math.hypot(x2 - x1, y2 - y1)
    }

    // get the mouse position
    const getMousePos = (ev) => {
      let posx = 0;
      let posy = 0;
      if (!ev) ev = window.event;
      if (ev.pageX || ev.pageY) {
        posx = ev.pageX;
        posy = ev.pageY;
      }
      else if (ev.clientX || ev.clientY) {
        posx = ev.clientX + body.scrollLeft + docEl.scrollLeft;
        posy = ev.clientY + body.scrollTop + docEl.scrollTop;
      }
      return { x: posx, y: posy };
    }

    // mousePos: current mouse position
    // cacheMousePos: previous mouse position
    // lastMousePos: last last recorded mouse position (at the time the last image was shown)
    let mousePos = lastMousePos = cacheMousePos = { x: 0, y: 0 };

    // update the mouse position
    window.addEventListener('mousemove', ev => mousePos = getMousePos(ev));

    // gets the distance from the current mouse position to the last recorded mouse position
    const getMouseDistance = () => MathUtils.distance(mousePos.x, mousePos.y, lastMousePos.x, lastMousePos.y);

    class Image {
      constructor(el) {
        this.DOM = { el: el };
        // image default styles
        this.defaultStyle = {
          scale: 1,
          x: 0,
          y: 0,
          opacity: 0
        };
        // get sizes/position
        this.getRect();
        // init/bind events
        this.initEvents();
      }
      initEvents() {
        // on resize get updated sizes/position
        window.addEventListener('resize', () => this.resize());
      }
      resize() {
        // reset styles
        TweenMax.set(this.DOM.el, this.defaultStyle);
        // get sizes/position
        this.getRect();
      }
      getRect() {
        this.rect = this.DOM.el.getBoundingClientRect();
      }
      isActive() {
        // check if image is animating or if it's visible
        return this.animation && this.animation.isActive() || parseFloat(this.DOM.el.style.opacity) !== 0;
      }
    }

    class ImageTrail {
      constructor() {
        // images container
        this.DOM = { content: document.querySelector('.content') };
        // array of Image objs, one per image element
        this.images = [];
        [...this.DOM.content.querySelectorAll('img')].forEach(img => this.images.push(new Image(img)));
        // total number of images
        this.imagesTotal = this.images.length;
        // upcoming image index
        this.imgPosition = 0;
        // zIndex value to apply to the upcoming image
        this.zIndexVal = 1;
        // mouse distance required to show the next image
        this.threshold = 100;
        // render the images
        requestAnimationFrame(() => this.render());
      }
      render() {
        // get distance between the current mouse position and the position of the previous image
        let distance = getMouseDistance();
        // cache previous mouse position
        cacheMousePos.x = MathUtils.lerp(cacheMousePos.x || mousePos.x, mousePos.x, 0.1);
        cacheMousePos.y = MathUtils.lerp(cacheMousePos.y || mousePos.y, mousePos.y, 0.1);

        // if the mouse moved more than [this.threshold] then show the next image
        if (distance > this.threshold) {
          this.showNextImage();

          ++this.zIndexVal;
          this.imgPosition = this.imgPosition < this.imagesTotal - 1 ? this.imgPosition + 1 : 0;

          lastMousePos = mousePos;
        }

        // check when mousemove stops and all images are inactive (not visible and not animating)
        let isIdle = true;
        for (let img of this.images) {
          if (img.isActive()) {
            isIdle = false;
            break;
          }
        }
        // reset z-index initial value
        if (isIdle && this.zIndexVal !== 1) {
          this.zIndexVal = 1;
        }

        // loop..
        requestAnimationFrame(() => this.render());
      }
      showNextImage() {
        // show image at position [this.imgPosition]
        const img = this.images[this.imgPosition];
        // kill any tween on the image
        TweenMax.killTweensOf(img.DOM.el);

        new TimelineMax()
          // show the image
          .set(img.DOM.el, {
            startAt: { opacity: 0, scale: 1 },
            opacity: 1,
            scale: 1,
            zIndex: this.zIndexVal,
            x: cacheMousePos.x - img.rect.width / 2,
            y: cacheMousePos.y - img.rect.height / 2
          }, 0)
          // animate position
          .to(img.DOM.el, 0.9, {
            ease: Expo.easeOut,
            x: mousePos.x - img.rect.width / 2,
            y: mousePos.y - img.rect.height / 2
          }, 0)
          // then make it disappear
          .to(img.DOM.el, 1, {
            ease: Power1.easeOut,
            opacity: 0
          }, 0.4)
          // scale down the image
          .to(img.DOM.el, 1, {
            ease: Quint.easeOut,
            scale: 0.2
          }, 0.4);
      }
    }

    /***********************************/
    /********** Preload stuff **********/

    // Preload images
    const preloadImages = () => {
      return new Promise((resolve, reject) => {
        imagesLoaded(document.querySelectorAll('.content__img'), resolve);
      });
    };

    // And then..
    preloadImages().then(() => {
      // Remove the loader
      document.body.classList.remove('loading');
      new ImageTrail();
    });

  }
  const imgPortobello = document.querySelector('.imgPortobello');
  imgPortobello.style.opacity = 0; // Configura a opacidade inicial como 0

  gsap.from(imgPortobello, {
    opacity: 1, // Configura a opacidade final como 1
    duration: 1, // Duração da animação em segundos
    onComplete: function () {
      imgPortobello.classList.remove('removeImgPortobello'); // Remove a classe "removeImgPortobello" após a animação
    }
  });
}
function addBackgroundToParent() {
  const section03 = document.querySelector('.section03');
  if (section03) {
    const parentElement = section03.parentNode;
    parentElement.style.backgroundColor = '#E0E0E0';
    return parentElement;
  }
  return null;
}


function navbarBackground() {
  const navb = document.querySelector('.nav-menu');
  if (navb) {
    navb.style.backgroundColor = '#E0E0E0';
  }
}
function navbarBackgroundOff() {
  const navBoff = document.querySelector('.nav-menu');
  if (navBoff) {
    navBoff.style.backgroundColor = '#ffffff';
  }
}


const minWidth = 769;

if (window.innerWidth >= minWidth) {

  // LogoFixed
  var logoPb = document.querySelector(".logosPortobello");
  var navbarHeight = logoPb.offsetHeight;
  var lastScrollTop = 0;
  var bannerHeroElement = document.querySelector(".banner-hero");
  var bannerHeroHeight = bannerHeroElement.offsetHeight - 200;
  var bannerHeroBottom = bannerHeroElement.offsetTop + bannerHeroElement.offsetHeight;

  window.onscroll = function () {
    scrollHide();
  };

  function scrollHide() {
    var st = window.pageYOffset || document.documentElement.scrollTop;

    if (st > lastScrollTop && st > bannerHeroHeight) {
      logoPb.classList.add('hide');
    } else {
      logoPb.classList.remove('hide');
    }

    if (st > bannerHeroBottom && !logoPb.classList.contains('hide-bottom')) {
      logoPb.classList.add('hide-bottom');
    } else if (st <= bannerHeroBottom && logoPb.classList.contains('hide-bottom')) {
      logoPb.classList.remove('hide-bottom');
    }

    lastScrollTop = st <= 0 ? 0 : st;
  }

  const bloc = document.querySelector('.overlayBanner');

  window.addEventListener('load', revealAnim);

  function revealAnim() {
    const TLFADE = gsap.timeline();

    //Banner
    TLFADE
      .to(bloc, {
        duration: 2,
        top: "-100%",
        ease: Expo.easeInOut,
      });

    setTimeout(function () {
      gsap.to('.banner-hero', {
        scrollTrigger: {
          trigger: '.banner-hero',
          start: 'top center',
          end: 'bottom center',
          onEnter: function () {
            ativarArquivoJS();
          },
          onEnterBack: function () {
            removerClassAtiva();

          },
          onLeave: function () {
            adicionarClasseAtiva();
          },
          onLeaveBack: function () {
            removerClassAtiva();

          },
        }
      });
    }, 3000); // Atraso de 4 segundos (4000 milissegundos)



    //Section02
    gsap.registerPlugin(ScrollTrigger);
    gsap.utils.toArray(".panel").forEach((panel, i) => {
      ScrollTrigger.create({
        trigger: panel,
        start: "top top",
        pin: true,
        pinSpacing: false,

      });
    });

    // Section03    
    const textContainer = document.querySelector('.descriptionSection03');
    const text = textContainer.textContent;

    const words = text.split(' ');
    const wrappedWords = words.map((word) => {
      return `<span>${word}</span>`;
    });

    textContainer.innerHTML = wrappedWords.join(' ');

    gsap.registerPlugin(ScrollTrigger);

    gsap.to(".descriptionSection03 span", {
      backgroundPositionX: "0%",
      stagger: 1,
      scrollTrigger: {
        trigger: ".section03",
        pin: true,
        pinSpacing: true,
        scrub: 1,
        start: "top-=160",
        end: "bottom bottom",
        onEnter: function () {
          addBackgroundToParent();
        },
        onEnterBack: function () {
        }
      },
    });

    // Obtém a altura da seção
    var sectionHeight = document.querySelector(".section03").offsetHeight;


    gsap.to(".logoSection03", {
      y: sectionHeight,
      rotation: 360,
      scrollTrigger: {
        trigger: ".section03",
        scrub: 1,
        start: "top-=200",
        end: "bottom top",
      },
    });



    gsap.from(".description", {
      autoAlpha: 0, y: 200,duration:1, 
      scrollTrigger: {
        trigger: ".section04",
        start: "top-=500",
        end: "bottom+=200 top",
      },
    });

    gsap.from(".section04", {
      scrollTrigger: {
        trigger: ".section04",
        start: "top-=200 center",
        end: "bottom center",
        onEnter: function () {
          navbarBackground();
        },
        onEnterBack: function () {
          navbarBackground();
        },
        onLeave: function () {
          navbarBackgroundOff();
        },
        onLeaveBack: function () {
          navbarBackgroundOff();
        }
      },
    });
    gsap.to(".section07", {
      scrollTrigger: {
        trigger: ".section07",
        scrub: 1,
        start: "top-=200",
        end: "bottom bottom",
        onEnter: function () {
        },
        onEnterBack: function () {
        },
        onLeaveBack: function () {
        },
      },
    });

    gsap.from(".section10", {
      scrollTrigger: {
        trigger: ".section10",
        start: "top-=200 center",
        end: "bottom center",
        onEnter: function () {
          navbarBackground();
        },
        onEnterBack: function () {
          navbarBackground();
        },
        onLeave: function () {
          navbarBackgroundOff();
        },
        onLeaveBack: function () {
          navbarBackgroundOff();
        }
      },
    });


    TweenMax.to(".svgLogoS10", 4, { rotation: 360, repeat: -1, transformOrigin: "50% 50%", ease: Linear.easeNone })
  }
}


