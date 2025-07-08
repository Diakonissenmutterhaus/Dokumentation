function toggleDarkMode() {
  const html = document.documentElement;
  if (html.classList.contains('dark')) {
    html.classList.remove('dark');
    localStorage.theme = 'light';
  } else {
    html.classList.add('dark');
    localStorage.theme = 'dark';
  }
}

let currentLang = localStorage.getItem('lang') || 'pt';

function setLanguage(lang) {
  currentLang = lang;
  localStorage.setItem('lang', lang);
  location.reload();
}

async function translateText(text) {
  if (currentLang === 'pt') return text;
  try {
    const res = await fetch(
      `https://translate.googleapis.com/translate_a/single?client=gtx&sl=auto&tl=${currentLang}&dt=t&q=${encodeURIComponent(
        text
      )}`
    );
    const data = await res.json();
    return data[0].map(part => part[0]).join('');
  } catch {
    return text;
  }
}

function appendDocToMenu(title, index) {
  const li = document.createElement('li');
  const a = document.createElement('a');
  a.href = `docs/template.html?doc=${index}`;
  a.textContent = title;
  a.className = 'block hover:underline';
  li.appendChild(a);
  document.getElementById('menu-list').appendChild(li);
}

function loadDocs() {
  const docs = JSON.parse(localStorage.getItem('customDocs') || '[]');
  docs.forEach((doc, idx) => appendDocToMenu(doc.title, idx));

  // load raw text docs listed in rawdocs/docs.json
  fetch('rawdocs/docs.json')
    .then(r => r.json())
    .then(list => {
      list.forEach(item => {
        const li = document.createElement('li');
        const a = document.createElement('a');
        a.href = `docs/template.html?raw=${item.file}`;
        a.textContent = item.title;
        a.className = 'block hover:underline';
        li.appendChild(a);
        document.getElementById('menu-list').appendChild(li);
      });
    })
    .catch(() => {});
}

function addDoc() {
  const titleEl = document.getElementById('docTitle');
  const textEl = document.getElementById('docText');
  const title = titleEl.value.trim();
  const text = textEl.value.trim();
  if (!title || !text) return;
  const docs = JSON.parse(localStorage.getItem('customDocs') || '[]');
  docs.push({ title, content: text });
  localStorage.setItem('customDocs', JSON.stringify(docs));
  appendDocToMenu(title, docs.length - 1);
  titleEl.value = '';
  textEl.value = '';
}

document.addEventListener('DOMContentLoaded', loadDocs);
