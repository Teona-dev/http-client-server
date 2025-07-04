# HTTP Client-Server

Простой HTTP-клиент и сервер, реализованные на Node.js и Express.  
Клиент загружает текстовые данные с внешних URL по ключевым словам, а также отображает и сохраняет их в `localStorage`.

## Демо

[Посмотреть развернутый проект Render.com](hhttps://http-client-server-o6k5.onrender.com)  
[Репозиторий на GitHub](https://github.com/Teona-dev/http-client-server)



## Структура проекта

http-client-server/
├── server.js
├── keywords.json
├── package.json
├── client/
│ ├── index.html
│ ├── style.css
│ └── main.js


## Установка и запуск локально

1. Клонируй репозиторий:

git clone https://github.com/Teona-dev/http-client-server
cd http-client-server

Установи зависимости:

npm install


Запусти сервер:

npm start

Перейди в браузере по адресу:

http://localhost:3000


Примеры ключевых слов

"news" - Новости
- https://www.w3.org/TR/PNG/iso_8859-1.txt
- https://raw.githubusercontent.com/mdn/content/main/files/en-us/index.md

"tech" - Технологии
- https://raw.githubusercontent.com/github/gitignore/main/Node.gitignore


Возможности
-Поиск URL по ключевому слову
-Загрузка содержимого файлов
-Просмотр содержимого
-Хранение загруженных данных в localStorage браузера
-Кроссплатформенность

Используемые технологии

-Frontend: HTML, CSS, JavaScript
-Backend: Node.js, Express, CORS, node-fetch
-Деплой: Render.com
