const urlList = document.getElementById('urlList');
const downloads = document.getElementById('downloads');
const contentView = document.getElementById('contentView');
const progress = document.getElementById('progress');

function search() {
  const keyword = document.getElementById('keyword').value;
  fetch(`/urls?keyword=${keyword}`)
    .then(res => {
      if (!res.ok) throw new Error('Ключевое слово не найдено');
      return res.json();
    })
    .then(data => {
      urlList.innerHTML = '';
      data.urls.forEach(url => {
        const btn = document.createElement('button');
        btn.textContent = url;
        btn.onclick = () => download(url);
        urlList.appendChild(btn);
      });
    })
    .catch(err => {
      alert(err.message);
    });
}

function download(url) {
  progress.textContent = 'Загрузка...';
  fetch(`/fetch?url=${encodeURIComponent(url)}`)
    .then(res => {
      if (!res.ok) throw new Error('Ошибка загрузки');
      const size = res.headers.get('X-Content-Length');
      progress.textContent = `Загружено: ${size} байт`;
      return res.text();
    })
    .then(data => {
      localStorage.setItem(url, data);
      addToDownloads(url);
    })
    .catch(err => {
      progress.textContent = 'Ошибка';
      alert(err.message);
    });
}

function addToDownloads(url) {
  const li = document.createElement('li');
  li.textContent = url;
  li.onclick = () => {
    const content = localStorage.getItem(url);
    contentView.textContent = content || 'Нет данных';
  };
  downloads.appendChild(li);
}

window.onload = () => {
  for (let i = 0; i < localStorage.length; i++) {
    const url = localStorage.key(i);
    addToDownloads(url);
  }
};