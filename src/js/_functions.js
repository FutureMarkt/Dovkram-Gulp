// Данный файл - лишь собрание подключений готовых компонентов.
// Рекомендуется создавать отдельный файл в папке components и подключать все там

// Подключение свайпера
import Swiper, {
    Navigation,
    Pagination,
    EffectFade,
    EffectCoverflow,
} from "swiper";
Swiper.use([Navigation, Pagination, EffectFade, EffectCoverflow]);
// const propertySlider = new Swiper(".property-slider", {
//     slidesPerView: 1,
//     observer: true,
//     observeParents: true,
//     watchSlidesVisibility: true,
//     watchSlidesProgress: true,
//     effect: "coverflow",
//     speed: 1500,
//     navigation: {
//         nextEl: ".swiper-button-next",
//         prevEl: ".swiper-button-prev",
//     },
// });
// const propertyPagination = document.querySelectorAll(".block-services");
// if (propertyPagination) {
//     propertySlider.on("slideChange", () => {
//         propertyPagination.forEach((p) => p.classList.remove("active"));
//         propertyPagination[propertySlider.activeIndex].classList.add("active");
//     });
//     propertyPagination.forEach((element, index) => {
//         element.addEventListener("click", (e) => {
//             if (e.target.classList.contains("active")) return;
//             propertyPagination.forEach((p) => p.classList.remove("active"));
//             element.classList.add("active");
//             propertySlider.slideTo(index);
//         });
//     });
// }

// function initTeamSwiper() {
//     // if (window.innerWidth <= 576) {
//     const teamSlider = new Swiper(".team-slider", {
//         speed: 1000,
//         observer: true,
//         updateOnWindowResize: true,
//         observeParents: true,
//         watchOverflow: true,
//         slidesPerView: 1.5,
//         spaceBetween: 20,
//     });
//     teamSlider.on("resize", () => {
//         if (window.innerWidth >= 576) {
//             teamSlider.destroy();
//         } else {
//             teamSlider.init();
//         }
//     });
//     // }
// }
// initTeamSwiper();
// window.addEventListener("orientationchange", () => {
//     console.log("changed");
//     initTeamSwiper();
// });

new Swiper(".reviews-slider", {
    speed: 1000,
    spaceBetween: 10,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    breakpoints: {
        319: {
            slidesPerView: 1,
            spaceBetween: 0,
        },
        767: {
            slidesPerView: 1,
            spaceBetween: 10,
        },
        991: {
            slidesPerView: 1,
            spaceBetween: 10,
        },
    },
});

import { Fancybox } from "@fancyapps/ui";
Fancybox.bind("[data-fancybox]", {
    // Your options go here
    hideScrollbar: false,
});
