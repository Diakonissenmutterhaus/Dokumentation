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
