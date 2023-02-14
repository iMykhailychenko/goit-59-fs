# GOIT 59-FS REACT

## Lesson 1 - 13/12/2022

- Навіщо потрібні JS-фреймворки?
- Веб-додатки, порівняння MPA та SPA
- Концепція Virtual DOM
- create-react-app
- Пакети react та react-dom
- React-елементи
- JSX як шаблонізатор. Вирази та рендер за умовою.
- Компоненти-функції
- Передача даних через Props
- Дефолтні значення пропсів у компонентах-функціях
- Інструменти розробника - React DevTools
- Основи композиції компонентів
- Пакет prop-types, властивість propTypes
- Робота з колекціями, ключі
- React strict mode
- Аліаси та абсолютні імпорти

## Lesson 2 - 15/12/2022

- Ванільний CSS
- Інлайн стилі
- CSS-модулі
- Нормалізація стилів
- CSS in JS із бібліотекою styled-components
- Бібліотеки clsx / classNames
- Бібліотека react-icons

## Lesson 3 - 20/12/2022

- Компоненти-класи
- Події: SyntheticEvent Object
- Внутрішній стан компонента. Початковий стан від props
- Зміна стану
- Асинхронність оновлення стану
- Зміна стану від попереднього
- Підйом стану
- Обчислювані властивості

## Lesson 4 - 22/12/2022

- Неконтрольовані елементи
- Паттерн controlled element
- Створюємо форму реєстрації
- Форми та робота з input, checkbox, radio, select
- Генерація id для елементів форми
- Робота зі списком юзерів
- Рендер списку
- Видалення юзера
- фільтрація за вмістом (текст)

## Lesson 5 - 27/12/2022

Графік:
https://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/

- Життєвий цикл компонента.
- Методи життєвого циклу компонент-класів.
- Збереження колекції юзерів в localStorage (componentDidMount та componentDidUpdate)
- Модальне вікно (componentDidMount та componentWillUnmount)
- Таймер і memory leak з setState() - розібрати componentWillUnmount
- shouldComponentUpdate / PureComponent
- Портали (опціонально)

## Lesson 6 - 29/12/2022

https://github.com/iMykhailychenko/goit-blog-backend

- Методи життєвого циклу та HTTP-запити
- Стан та компонент для індикатора завантаження
- Стан та компонент для обробки помилки
- Паттерн "State machine" для зберігання статусу запиту
- Витік пам'яті при розмонтуванні компонента з активним запитом HTTP

## Lesson 7 - 10/01/2023

- useState
- useEffect (модалка)
- Рефи і useRef
- Контекст і useContext

## Lesson 8 - 12/01/2023

- список юзерів + localStorage
- useMemo і React.memo
- useCallback
- debounce пошукового запиту
- Кастомні хуки
- useReducer
- Бібліотека react-use

## Lesson 9 - 17/01/2023

https://miro.com/app/board/uXjVPxI6iaM=/?share_link_id=481867053248

- Концепція SPA (Single Page Application) та CSR (Client Side Rendering)
- Структура url-адреси та HTML5 History API https://textbook.edu.goit.global/react-zr7b4k/v1/uk/img/lesson-09/url-string.jpg
- Бібліотека react-router-dom https://reactrouter.com/en/main
- Компоненти BrowserRouter, Routes, Route
- Компоненти Link та NavLink
- Динамічні URL-параметри / useParams
- Вкладені маршрути та навігація

## Lesson 10 - 19/01/2023

- Програмна навігація з використанням useNavigate
- Компонент Navigate
- query params / useSearchParams
- Об'єкт місцезнаходження / useLocation / state
- Розділення коду / React.lazy / React.Suspense та fallback

## Lesson 11 - 31/01/2023

- Основні концепції: store, state, actions, reducers
- Створюємо та налаштовуємо сховище
- Пакет react-redux
- Компонент Provider
- Пишемо редюсер
- Готуємо екшени
- Хуки useDispatch і useSelector
- Redux DevTools
- Композиція редюсерів з combineReducers
- Feature based структура файлів та папок

## Lesson 12 - 4/11/2023

- Розбираємо Redux Toolkit та рефакторимо код попереднього заняття
- configureStore()
- createReducer()
- createAction()
- createSlice()
- Бібліотека redux-persist

## Lesson 13 7/02/2023

- Middleware
- Асинхронні дії (операції)
- Бібліотека redux-thunk
- HTTP-запити
- createAsyncThunk

## Lesson 14 09/02/2023

- Селектори
- Функція createSelector()
- RTK Query
- query
- mutations
- кешування


## Lesson 15 - 14/02/2023

https://github.com/iMykhailychenko/goit-blog-backend-auth

- Знайомство з JWT
- Реєстрація, логін та логаут користувача
- Персист токена з redux-persist
- Рефреш користувача за токеном
- Робота з приватними ресурсами користувача


## Lesson 16 - 16/02/2023

- Приватні та публічні маршрути
- Пишемо компоненти PrivateRoute, PublicRoute
- Просунуті редіректи з використанням location.state
