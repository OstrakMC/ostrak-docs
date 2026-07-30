# ostrak-docs

Документация Ostrak — [Docusaurus](https://docusaurus.io/), деплой на GitHub
Pages через GitHub Actions (`.github/workflows/deploy.yml`, при пуше в `main`).

## Локальная разработка

```bash
npm install
npm run start
```

Открывает браузер с локальным сервером, изменения в `docs/*.md` подхватываются
без перезапуска.

## Сборка

```bash
npm run build
```

Статика собирается в `build/` — CI использует ровно эту команду.
