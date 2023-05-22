window.addEventListener('DOMContentLoaded', () => {
    const deliveryTabs = document.querySelectorAll('.delivery__header__item'),
          deliveryContent = document.querySelectorAll('.content__item'),
          deliveryTabActive = 'delivery__header__item-active';

    tabs(deliveryTabs, deliveryContent, deliveryTabActive);
    // like
    const like = document.querySelectorAll('[data-like]');

    like.forEach(item => {
        item.addEventListener('click', () => {
            item.classList.toggle('fa-heart_active')
        })
    });

    // photo tabs
    const photosPreviews = document.querySelectorAll('.photo__preview__item'),
          photosMain = document.querySelectorAll('.main-photo'),
          previewActive = 'preview__item-active';
          prevBtn = document.querySelector('.btn-prev'),
          nextBtn = document.querySelector('.btn-next');

    tabs(photosPreviews, photosMain, previewActive);

    // slide
    prevBtn.addEventListener('click', () => {
        plusSlides(-1);
    });

    nextBtn.addEventListener('click', () => {
        plusSlides(1);
    });

    let slideIndex = 1;

    function plusSlides(count) {
        showSlides(slideIndex += count);
    }

    function showSlides(n) {
        if (n > photosMain.length) {slideIndex = 1}
        if (n < 1) {slideIndex = photosMain.length}
        for (let i = 0; i < photosMain.length; i++) {
            photosMain[i].classList.add('hide');
            photosMain[i].classList.remove('show');
        }
        for (let i = 0; i < photosPreviews.length; i++) {
            photosPreviews[i].className = photosPreviews[i].className.replace(" preview__item-active", "");
        }
        photosMain[slideIndex-1].classList.remove('hide');
        photosMain[slideIndex-1].classList.add('show');
        photosPreviews[slideIndex-1].className += " preview__item-active";
    }

    // tabs

    const tabHeader = document.querySelectorAll('.tabheader__item'),
          tabContent = document.querySelectorAll('.tabcontent__item'),
          tabHeaderActive = 'tabheader__item-active';

    function tabs(tabs, tabContent, activeClass) {
        
        function hideTabContent() {
            tabContent.forEach(item => {
                item.classList.add('hide');
                item.classList.remove('show');
            });
    
            tabs.forEach(item => {
                item.classList.remove(`${activeClass}`);
            });
        }
    
        function showTabContent(i = 0) {
            tabContent[i].classList.add('show', 'fade');
            tabContent[i].classList.remove('hide');
            tabs[i].classList.add(`${activeClass}`);
        }
    
        hideTabContent()
        showTabContent()
    
        tabs.forEach((item, i) => {
            item.addEventListener('click', (event) => {
                hideTabContent();
                showTabContent(i);
            });
        });
    }

    tabs(tabHeader, tabContent, tabHeaderActive);

    // Smooth scroll
    $("[data-scroll]").on("click", function (event) {
        event.preventDefault();

        let elementID = $(this).data('scroll');
        let elementOffset = $(elementID).offset().top;

        $("html, body").animate({
            scrollTop: elementOffset - 260
        }, 700);
    });
});

// slick

$('.slider').slick({
    slidesToShow: 5,
    slidesToScroll: 1,
    arrows: true,
  });
