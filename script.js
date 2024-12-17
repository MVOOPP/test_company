document.addEventListener("DOMContentLoaded", () => {
    const burgerMenu = document.getElementById("burger-menu");
    const mobileNav = document.getElementById("mobile-nav");
    const fadeElements = document.querySelectorAll('.fade-in');
    const header = document.querySelector('.wrapper_nav');
    let lastScrollTop = 0;

    // Бургер-меню: открытие и закрытие
    burgerMenu.addEventListener("click", () => {
        burgerMenu.classList.toggle("open");
        mobileNav.classList.toggle("active");
        document.body.classList.toggle("no-scroll"); // Блокируем прокрутку фона при открытии меню
    });

    // Добавляем видимость элементам с классом .fade-in при прокрутке
    function checkVisibility() {
        fadeElements.forEach(element => {
            const rect = element.getBoundingClientRect();
            if (rect.top < window.innerHeight && rect.bottom >= 0) {
                element.classList.add('visible');
            }
        });
    }

    window.addEventListener('scroll', checkVisibility);
    checkVisibility(); // Запускаем при первой загрузке страницы

    // Фиксируем шапку при прокрутке
    window.addEventListener("scroll", () => {
        const currentScroll = window.scrollY;

        if (currentScroll > 50) {
            header.classList.add("fixed-header");
        } else {
            header.classList.remove("fixed-header");
        }

        lastScrollTop = currentScroll <= 0 ? 0 : currentScroll; // Для предотвращения отрицательного значения
    });

    // Закрытие бургер-меню при клике на элемент меню
    document.querySelectorAll(".mobile-nav a").forEach(link => {
        link.addEventListener("click", () => {
            burgerMenu.classList.remove("open");
            mobileNav.classList.remove("active");
            document.body.classList.remove("no-scroll");
        });
    });
});
