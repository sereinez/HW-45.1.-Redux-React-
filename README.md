# React + Redux Toolkit: DataFetcher



## Короткий опис проекту

Раніше `postId` зберігався локально в `App.jsx` через `useState` і передавався вниз
у `DataFetcher` як проп. Тепер `postId` живе у Redux store:

- **`postIdSlice`** (`src/redux/slices/postIdSlice.js`) — слайс зі станом `postId`,
  редюсерами `increment`, `decrement`, `setPostId` та селектором `selectPostId`.
- **`DataFetcher`** читає `postId` напряму зі стору через `useSelector`, більше не
  приймає його як проп.
- **`App`** керує зміною `postId` через `dispatch(increment())` / `dispatch(decrement())`.
- **`Provider`** з `react-redux` підключає стор до всього додатку в `main.jsx`.

## Аналіз стану (до міграції)

| Дані | Було | Стало |
|---|---|---|
| `postId` | `useState` в `App`, передавався пропом у `DataFetcher` | `postIdSlice` у Redux store |
| Зміна `postId` | `setPostId` напряму | `dispatch(increment())` / `dispatch(decrement())` |
| Читання `postId` | проп `postId` у `DataFetcher` | `useSelector(selectPostId)` |

## Структура проєкту

```
my-redux-app/
├── src/
│   ├── redux/
│   │   ├── store.js
│   │   └── slices/
│   │       └── postIdSlice.js
│   ├── components/
│   │   └── DataFetcher.jsx
│   ├── App.jsx
│   ├── App.css
│   └── main.jsx
├── index.html
├── package.json
└── package-lock.json
```

## Встановлення та запуск

```bash
npm install
npm install @reduxjs/toolkit react-redux axios
npm run dev
```

Відкрити посилання з терміналу, зазвичай `http://localhost:5173/`.



1. Відкрити сторінку — завантажується пост #1.
2. Натиснути "Наступний пост" — `postId` у Redux store збільшується, `DataFetcher`
   автоматично перезапитує дані.
3. Кнопка "Попередній пост" вимикається (`disabled`), коли `postId` дорівнює 1.

