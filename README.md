<div align="center">

<img src="static/img/logo.png" width="96" alt="Ostrak" />

# ostrak-docs

**Документация Ostrak** — плагина цифровых документов для RP-серверов Minecraft.

![Docusaurus](https://img.shields.io/badge/Docusaurus-3-3ECC5F?logo=docusaurus&logoColor=white)
![Deploy](https://img.shields.io/github/actions/workflow/status/OstrakMC/ostrak-docs/deploy.yml?branch=main&label=deploy)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)

[Сайт](https://docs.ostrak.benovich.cc)

</div>

Исходники сайта документации — [Docusaurus](https://docusaurus.io/), контент
в `docs/*.md`. Деплой на GitHub Pages по пушу в `main`
(`.github/workflows/deploy.yml`), свой домен — `docs.ostrak.benovich.cc`.

## Технологии

| Слой | Стек |
|------|------|
| Генератор | [Docusaurus](https://docusaurus.io/) 3 |
| Хостинг | GitHub Pages (деплой через GitHub Actions) |
| Контент | Markdown, `docs/*.md`, автосортировка по `sidebar_position` |

## Разработка

```bash
git clone https://github.com/OstrakMC/ostrak-docs.git
cd ostrak-docs
npm install
npm run start
```

Открывает браузер с локальным сервером — изменения в `docs/*.md` подхватываются
без перезапуска.

## Сборка

```bash
npm run build
```

Статика собирается в `build/` — CI использует ровно эту команду.

## Структура

```
docs/                 контент документации (по одной странице на файл)
src/css/custom.css    брендовая палитра (та же, что в сообщениях плагина)
static/img/           иконка, favicon
.github/workflows/    деплой на GitHub Pages
```

---

<div align="center"><sub>by <a href="https://github.com/Denchikper">Benovich</a></sub></div>
