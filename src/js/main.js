import "./_functions";
import "./_components";

const addClass = (element, className) => element?.classList.add(className);
const removeClass = (element, className) =>
    element?.classList.remove(className);
const toggleClass = (element, className) =>
    element?.classList.toggle(className);

const heroVideo = document.querySelector(".hero__video video");
const heroImage = document.querySelector(".hero__image");
setTimeout(() => {
    if (heroVideo) {
        if (window.innerWidth >= 576) {
            heroVideo.volume = 0.2;
        }
    }
}, 2000);

setTimeout(() => {
    heroVideo?.setAttribute(
        "src",
        "https://dovkram.s3.eu-west-2.amazonaws.com/dovkram_promo.mp4"
    );
    addClass(heroImage, "hide");
    addClass(document.querySelector(".hero__video"), "show");
}, 1500);

setTimeout(() => {
    document.getElementById("preloader")?.remove();
}, 250);

const header = document.querySelector(".header");
if (header) {
    const top = window.scrollY;
    if (top > 30) {
        addClass(header, "scroll");
    } else {
        removeClass(header, "scroll");
    }
    window.addEventListener("scroll", () => {
        const top = window.scrollY;
        if (top > 30) {
            addClass(header, "scroll");
        } else {
            removeClass(header, "scroll");
        }
    });
}

const burger = document.querySelector(".burger");
const menu = document.querySelector(".nav");
const siteContainer = document.querySelector(".site-container");
const links = document.querySelectorAll(".nav-list__link");
if (burger) {
    burger.addEventListener("click", () => {
        if (document.querySelector('.nav')) {
            destroyMenu()
            burger.classList.remove('active')
            siteContainer.classList.remove('hidden')
        } else {
            addMenu()
            burger.classList.add('active')
            siteContainer.classList.add('hidden')
        }
    });
    siteContainer.addEventListener("click", (e) => {
        if (e.target.classList.contains("hidden")) {
            toggleClass(burger, "active");
            toggleClass(menu, "show");
            toggleClass(siteContainer, "hidden");
            destroyMenu()
        }
    });
    links.forEach((link) => {
        link.addEventListener("click", (e) => {
            e.preventDefault();
            const href = link.getAttribute("href");
            toggleClass(burger, "active");
            toggleClass(menu, "show");
            toggleClass(siteContainer, "hidden");
            setTimeout(() => {
                window.location.href = href;
            }, 500);
        });
    });
}

const modals = document.querySelectorAll(".modal");
const modalTriggers = document.querySelectorAll("*[data-modal]");
if (modalTriggers && modals) {
    modalTriggers.forEach((trigger) => {
        trigger.addEventListener("click", () => {
            const attr = trigger.dataset.modal;
            const modal = document.getElementById(attr);
            if (modal) {
                addClass(modal, "show");
            }
        });
    });
    modals.forEach((modal) => {
        modal.addEventListener("click", (e) => {
            e.stopImmediatePropagation();
            const target = e.target;
            const checkTarget =
                target.classList.contains("back-to") ||
                target.classList.contains("modal");

            if (checkTarget) {
                removeClass(modal, "show");
            }
        });
    });
}

const musicOff = document.querySelector(".button-sound");
if (musicOff) {
    musicOff.addEventListener("click", () => {
        if (musicOff.classList.contains("muted")) {
            musicOff.classList.remove("muted");
            heroVideo.muted = false;
        } else {
            musicOff.classList.add("muted");
            heroVideo.muted = true;
        }
    });
}

const propertyTabs = document.querySelectorAll(".property__tab");
const propertyContent = document.querySelectorAll(".property__item");
if (propertyTabs && propertyContent) {
    propertyTabs.forEach((tab, index) => {
        tab.addEventListener("click", (e) => {
            e.preventDefault();
            if (tab.classList.contains("active")) return;
            propertyTabs.forEach((t) => removeClass(t, "active"));
            propertyContent.forEach((c) => removeClass(c, "active"));
            addClass(tab, "active");
            addClass(propertyContent[index], "active");
        });
    });
}

const animSections = document.querySelectorAll(".section-animation");
if (animSections) {
    setTimeout(() => {
        animSections.forEach((section) => {
            removeClass(section, "section-animation");
        });
    }, 800);
}



  const addMenu = () => {
    console.log('create')
      // Create menu
      let $menu = document.createElement("nav")
      $menu.classList = 'nav'
      $menu.insertAdjacentHTML('afterbegin', `
            <ul class="nav-list list-reset">
              <li class="nav-list__item" aria-label='Link to home page'><a href="https://dovkram.com" class="nav-list__link" aria-label='Link to home page'>Home</a></li>
              <li class="nav-list__item" aria-label='Link to about us page'><a href="about-us" class="nav-list__link" aria-label='Link to about us page'>About Us</a></li>
              <li class="nav-list__item" aria-label='Link to services page'><a href="services" class="nav-list__link" aria-label='Link to services page'>Services</a></li>
              <li class="nav-list__item" aria-label='Link to gallery page'><a href="gallery" class="nav-list__link" aria-label='Link to gallery page'>Gallery</a></li>
              <li class="nav-list__item" aria-label='Link to reviews page'><a href="reviews" class="nav-list__link" aria-label='Link to reviews page'>Reviews</a></li>
              <li class="nav-list__item" aria-label='Link to contact us page'><a href="contact-us" class="nav-list__link" aria-label='Link to contact us page'>Contact Us</a></li>
            </ul>
            <div class="nav-links">
              <a href="" aria-label='Link to Dov Kram Ltd. Facebook page'>
                <svg width="12" height="21" viewBox="0 0 12 21" fill="none" xmlns="http://www.w3.org/2000/svg" aria-label='Link to Dov Kram Ltd. Facebook page icon'>
                  <path d="M10.3046 11.6938L10.8865 8.0002H7.30226V5.59935C7.30226 4.58938 7.80266 3.60249 9.40275 3.60249H11.0552V0.457149C10.0929 0.30383 9.12053 0.220885 8.14595 0.208984C5.19595 0.208984 3.27002 1.98076 3.27002 5.18382V8.0002H0V11.6938H3.27002V20.6277H7.30226V11.6938H10.3046Z" fill="white"></path>
                </svg>
              </a>
              <a href="" aria-label='Link to Dov Kram Ltd. Instagram page'>
                <svg width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg" aria-label='Link to Dov Kram Ltd. Instagram page icon'>
                  <path d="M7.49422 11.4188C7.49422 9.36618 9.15875 7.70176 11.2126 7.70176C13.2665 7.70176 14.9319 9.36618 14.9319 11.4188C14.9319 13.4714 13.2665 15.1359 11.2126 15.1359C9.15875 15.1359 7.49422 13.4714 7.49422 11.4188ZM5.48365 11.4188C5.48365 14.581 8.0485 17.1443 11.2126 17.1443C14.3767 17.1443 16.9416 14.581 16.9416 11.4188C16.9416 8.2566 14.3767 5.69329 11.2126 5.69329C8.0485 5.69329 5.48365 8.2566 5.48365 11.4188ZM15.8295 5.46627C15.8294 5.73091 15.9078 5.98963 16.0549 6.20973C16.2019 6.42983 16.4109 6.60141 16.6555 6.70278C16.9001 6.80415 17.1693 6.83075 17.429 6.77923C17.6888 6.7277 17.9274 6.60036 18.1147 6.41331C18.302 6.22626 18.4296 5.9879 18.4814 5.72837C18.5331 5.46883 18.5067 5.19979 18.4055 4.95526C18.3043 4.71072 18.1327 4.50168 17.9126 4.35457C17.6925 4.20746 17.4337 4.12888 17.1689 4.12877H17.1684C16.8134 4.12894 16.4731 4.26989 16.222 4.52067C15.971 4.77144 15.8298 5.11154 15.8295 5.46627V5.46627ZM6.7052 20.4948C5.61745 20.4453 5.02622 20.2643 4.63331 20.1113C4.11242 19.9086 3.74076 19.6672 3.35 19.2772C2.95924 18.8872 2.71735 18.5162 2.51546 17.9956C2.3623 17.6031 2.18111 17.012 2.13166 15.9249C2.07757 14.7496 2.06677 14.3966 2.06677 11.4189C2.06677 8.44125 2.07846 8.08916 2.13166 6.91286C2.1812 5.82575 2.36372 5.23586 2.51546 4.84221C2.71825 4.32163 2.95977 3.95019 3.35 3.55966C3.74022 3.16914 4.11153 2.9274 4.63331 2.72562C5.02604 2.57255 5.61745 2.39147 6.7052 2.34206C7.88123 2.288 8.23451 2.27721 11.2126 2.27721C14.1907 2.27721 14.5443 2.28889 15.7214 2.34206C16.8091 2.39156 17.3994 2.57398 17.7932 2.72562C18.3141 2.9274 18.6858 3.16967 19.0766 3.55966C19.4673 3.94966 19.7083 4.32163 19.9111 4.84221C20.0643 5.2347 20.2454 5.82575 20.2949 6.91286C20.349 8.08916 20.3598 8.44125 20.3598 11.4189C20.3598 14.3966 20.349 14.7486 20.2949 15.9249C20.2454 17.012 20.0633 17.6029 19.9111 17.9956C19.7083 18.5162 19.4668 18.8876 19.0766 19.2772C18.6863 19.6669 18.3141 19.9086 17.7932 20.1113C17.4005 20.2644 16.8091 20.4454 15.7214 20.4948C14.5453 20.5489 14.192 20.5597 11.2126 20.5597C8.23317 20.5597 7.88088 20.5489 6.7052 20.4948V20.4948ZM6.61282 0.336081C5.4251 0.390137 4.6135 0.578353 3.90472 0.853988C3.17068 1.13863 2.54929 1.52051 1.92833 2.1401C1.30738 2.7597 0.926263 3.38171 0.641448 4.1153C0.365649 4.8241 0.177319 5.63477 0.123231 6.82178C0.0682491 8.01067 0.0556641 8.39076 0.0556641 11.4188C0.0556641 14.4469 0.0682491 14.827 0.123231 16.0158C0.177319 17.2029 0.365649 18.0135 0.641448 18.7223C0.926263 19.4555 1.30747 20.0782 1.92833 20.6975C2.5492 21.3168 3.17068 21.6982 3.90472 21.9836C4.61484 22.2593 5.4251 22.4475 6.61282 22.5015C7.80305 22.5556 8.18274 22.5691 11.2126 22.5691C14.2425 22.5691 14.6228 22.5565 15.8124 22.5015C17.0002 22.4475 17.8113 22.2593 18.5205 21.9836C19.2541 21.6982 19.8759 21.3171 20.4969 20.6975C21.1178 20.0779 21.4982 19.4555 21.7838 18.7223C22.0596 18.0135 22.2488 17.2028 22.302 16.0158C22.3561 14.8261 22.3687 14.4469 22.3687 11.4188C22.3687 8.39076 22.3561 8.01067 22.302 6.82178C22.2479 5.63468 22.0596 4.82366 21.7838 4.1153C21.4982 3.38215 21.1169 2.76068 20.4969 2.1401C19.8769 1.51952 19.2541 1.13863 18.5214 0.853988C17.8113 0.578353 17.0001 0.389245 15.8133 0.336081C14.6237 0.282024 14.2434 0.268555 11.2135 0.268555C8.18363 0.268555 7.80305 0.281132 6.61282 0.336081Z" fill="white"></path>
                  <path d="M7.49422 11.4188C7.49422 9.36618 9.15875 7.70176 11.2126 7.70176C13.2665 7.70176 14.9319 9.36618 14.9319 11.4188C14.9319 13.4714 13.2665 15.1359 11.2126 15.1359C9.15875 15.1359 7.49422 13.4714 7.49422 11.4188ZM5.48365 11.4188C5.48365 14.581 8.0485 17.1443 11.2126 17.1443C14.3767 17.1443 16.9416 14.581 16.9416 11.4188C16.9416 8.2566 14.3767 5.69329 11.2126 5.69329C8.0485 5.69329 5.48365 8.2566 5.48365 11.4188ZM15.8295 5.46627C15.8294 5.73091 15.9078 5.98963 16.0549 6.20973C16.2019 6.42983 16.4109 6.60141 16.6555 6.70278C16.9001 6.80415 17.1693 6.83075 17.429 6.77923C17.6888 6.7277 17.9274 6.60036 18.1147 6.41331C18.302 6.22626 18.4296 5.9879 18.4814 5.72837C18.5331 5.46883 18.5067 5.19979 18.4055 4.95526C18.3043 4.71072 18.1327 4.50168 17.9126 4.35457C17.6925 4.20746 17.4337 4.12888 17.1689 4.12877H17.1684C16.8134 4.12894 16.4731 4.26989 16.222 4.52067C15.971 4.77144 15.8298 5.11154 15.8295 5.46627V5.46627ZM6.7052 20.4948C5.61745 20.4453 5.02622 20.2643 4.63331 20.1113C4.11242 19.9086 3.74076 19.6672 3.35 19.2772C2.95924 18.8872 2.71735 18.5162 2.51546 17.9956C2.3623 17.6031 2.18111 17.012 2.13166 15.9249C2.07757 14.7496 2.06677 14.3966 2.06677 11.4189C2.06677 8.44125 2.07846 8.08916 2.13166 6.91286C2.1812 5.82575 2.36372 5.23586 2.51546 4.84221C2.71825 4.32163 2.95977 3.95019 3.35 3.55966C3.74022 3.16914 4.11153 2.9274 4.63331 2.72562C5.02604 2.57255 5.61745 2.39147 6.7052 2.34206C7.88123 2.288 8.23451 2.27721 11.2126 2.27721C14.1907 2.27721 14.5443 2.28889 15.7214 2.34206C16.8091 2.39156 17.3994 2.57398 17.7932 2.72562C18.3141 2.9274 18.6858 3.16967 19.0766 3.55966C19.4673 3.94966 19.7083 4.32163 19.9111 4.84221C20.0643 5.2347 20.2454 5.82575 20.2949 6.91286C20.349 8.08916 20.3598 8.44125 20.3598 11.4189C20.3598 14.3966 20.349 14.7486 20.2949 15.9249C20.2454 17.012 20.0633 17.6029 19.9111 17.9956C19.7083 18.5162 19.4668 18.8876 19.0766 19.2772C18.6863 19.6669 18.3141 19.9086 17.7932 20.1113C17.4005 20.2644 16.8091 20.4454 15.7214 20.4948C14.5453 20.5489 14.192 20.5597 11.2126 20.5597C8.23317 20.5597 7.88088 20.5489 6.7052 20.4948V20.4948ZM6.61282 0.336081C5.4251 0.390137 4.6135 0.578353 3.90472 0.853988C3.17068 1.13863 2.54929 1.52051 1.92833 2.1401C1.30738 2.7597 0.926263 3.38171 0.641448 4.1153C0.365649 4.8241 0.177319 5.63477 0.123231 6.82178C0.0682491 8.01067 0.0556641 8.39076 0.0556641 11.4188C0.0556641 14.4469 0.0682491 14.827 0.123231 16.0158C0.177319 17.2029 0.365649 18.0135 0.641448 18.7223C0.926263 19.4555 1.30747 20.0782 1.92833 20.6975C2.5492 21.3168 3.17068 21.6982 3.90472 21.9836C4.61484 22.2593 5.4251 22.4475 6.61282 22.5015C7.80305 22.5556 8.18274 22.5691 11.2126 22.5691C14.2425 22.5691 14.6228 22.5565 15.8124 22.5015C17.0002 22.4475 17.8113 22.2593 18.5205 21.9836C19.2541 21.6982 19.8759 21.3171 20.4969 20.6975C21.1178 20.0779 21.4982 19.4555 21.7838 18.7223C22.0596 18.0135 22.2488 17.2028 22.302 16.0158C22.3561 14.8261 22.3687 14.4469 22.3687 11.4188C22.3687 8.39076 22.3561 8.01067 22.302 6.82178C22.2479 5.63468 22.0596 4.82366 21.7838 4.1153C21.4982 3.38215 21.1169 2.76068 20.4969 2.1401C19.8769 1.51952 19.2541 1.13863 18.5214 0.853988C17.8113 0.578353 17.0001 0.389245 15.8133 0.336081C14.6237 0.282024 14.2434 0.268555 11.2135 0.268555C8.18363 0.268555 7.80305 0.281132 6.61282 0.336081Z" fill="white"></path>
                </svg>
              </a>
            </div>
      `)

      const headerContainer = document.querySelector(".header__container")
      headerContainer.append($menu)

      setTimeout(() => {
          $menu.classList.add('show')
      }, 100)

      return $menu
  }

const destroyMenu = () => {
    console.log('destroy!')
    const $menu = document.querySelector('.nav')
    $menu.classList.remove('show')

    setTimeout(() => {
      if ($menu.remove()) console.log('destroy!!')
      console.log('destroy!!!')
          
    }, 500)
}