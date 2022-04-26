# Rentateam test SPA

Ссылка на работающее приложение:
# https://delivery-spa-react-rentateam.herokuapp.com/

- товары загружаются с бэкэнда при открытии страницы (node.js)
- товары разделены по категориям, названия категорий отображаются на панели категорий, при клике на название происходитс скролл к соответствующей категории
- панель с названиями категорий при скроле вниз "прилипает" к верхней части экрана
- у меню есть 2‑е вкладки, "доставка" и "самовывоз", при клике на "доставку" появляются панели для ввода адреса
- некоторые товары нельзя получить доставкой, поэтому при включённой вкладке "доставка" они скрываются
- товары можно добавить в корзину и удалить из неё. При нажатии на кнопку плюс, товар добавляется в корзину, и появляется кнопки изменения количества товара
- общая сумма товара отображается в корзине справа сверху
- при клике на кнопку корзины, блюда добавленные в корзину уходят на бэкэнд, а корзина очищается
- при выбранной вкладке "доставка", на странице появляются 2а поля для ввода адреса. Данные не отправляются, пока пользователь не заполнит их, при попытке отправить корзину до заполнения всплывает тултип.
- состояние корзины хранится в redux
