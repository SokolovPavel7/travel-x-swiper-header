## Сайт Travel-X с Swiper-слайдером на Gulp сборке

1. Использование css переменных через root:{}
2. Скрытие header с сылками меню под слоем слайдера и использование настройки pointer-events: all, чтобы проходили клики по ссылкам сквозь слайдер
3. Использование хака с пустым псевдоэлементом before, чтобы сместить другие два блока в центр и вниз, используя настройку justify-content: space-between
4. Привязывание размера шрифта к размеру окна через единицы vw, чтобы при мобильной адаптации уменьшить количество точек перехода. Для определения пропорции можно воспользоваться конвертером https://only-to-top.ru/services/px-to-vw.html
5. Подключение npm-пакета swiper https://swiperjs.com/get-started

-   добавление к слайдеру parallax-эффекта:
    parallax: true
-   добавление управления с клавиатуры:
    keyboard: {
    enabled: true,
    }

6. Для мобильного меню используем css правило, которое скрывает панель навигации справа, а при нажатии на кнопку или на оверлей проявляет его:

-   .mobile-nav {
    transform: translate(100%, 0%); //скрыть по х на 100%
    }

-   .mobile-nav--open {
    transform: translate(0%, 0%);
    }

7. Добавление на сайт прелоадера - избражения процесса загрузки

- ссылка на готовые решения https://cssloaders.github.io/