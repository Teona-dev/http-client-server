# HTTP Client-Server

Простой HTTP-клиент и сервер, реализованные на Node.js и Express.  
Клиент загружает текстовые данные с внешних URL по ключевым словам, а также отображает и сохраняет их в `localStorage`.

## Демо

[Посмотреть развернутый проект (Render.com)](https://your-deployed-url.onrender.com)  
[Репозиторий на GitHub](https://github.com/your-username/http-client-server)

> _Ссылки выше нужно заменить на свои._

---

## Структура проекта

http-client-server/
├── server.js     # Node.js сервер
├── keywords.json # Словарь ключевых слов и URL
├── package.json  # Зависимости и скрипты
├── client/       # Клиентская часть (HTML + CSS + JS)
│ ├── index.html
│ ├── style.css
│ └── main.js


## Установка и запуск локально

1. Клонируй репозиторий:

```bash
git clone https://github.com/your-username/http-client-server.git
cd http-client-server

Установи зависимости:

npm install


Запусти сервер:

npm start

Перейди в браузере по адресу:

http://localhost:3000


Примеры ключевых слов

"news" - Новости - демонстрационные тексты	- https://www.w3.org/TR/PNG/iso_8859-1.txt
- https://raw.githubusercontent.com/mdn/content/main/files/en-us/index.md

"tech" - Технологии - программирование	- https://raw.githubusercontent.com/github/gitignore/main/Node.gitignore


Возможности
-Поиск URL по ключевому слову
-Загрузка содержимого файлов
-Просмотр содержимого
-Хранение загруженных данных в localStorage браузера
-Кроссплатформенность (десктоп и мобильные устройства)

Используемые технологии

-Frontend: HTML, CSS, JavaScript
-Backend: Node.js, Express, CORS, node-fetch
-Деплой: Render.com (можно использовать Vercel или другой сервис)