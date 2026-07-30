---
sidebar_position: 2
---

# Installation

## Requirements

| | |
|---|---|
| Server | Paper 1.20.1 – 1.21.x (Paper forks work too, vanilla/Spigot don't) |
| Java | 17 (compilation is deliberately not on 21 — that would cut off 1.20.1) |
| Dependencies | none required. `PlaceholderAPI` — optional, adds `%ostrak_...%` placeholders |
| Database | SQLite, built in — nothing to install separately |

## Steps

1. Download `Ostrak-Free.jar` from [Modrinth](https://modrinth.com).
2. Drop it into `plugins/`.
3. Restart the server (not `/reload` — the first launch needs to create the
   folder structure and database file).
4. Check `plugins/OstrakFree/`:
   - `config.yml` — configuration (see [Configuration](configuration));
   - `lang/ru_RU.yml` — every message text (see [Messages & Styling](messages-and-styling));
   - `ostrak.db` — the SQLite database, created automatically.
5. The console should show:
   ```
   [OstrakFree] Ostrak включён: движок документов готов, встроенный тип «passport» загружен.
   ```
   If you see an error instead — check the [FAQ](faq).

## First check

Join the server and run `/passport` — if `citizen.bootstrap-mode` in the
config is set to `self` (the default), the passport-filling wizard starts
right away in chat. Then `/ostrak diagnostics` (needs the `ostrak.admin`
permission, granted to operators by default) shows the version, storage
type and the list of loaded document types — if passport is in that list,
the install is good.

## Updating

Replace the jar with the new version and restart the server. `config.yml`
and `lang/ru_RU.yml` are **not overwritten** on update — if a new version
adds a config key, you'll need to add it by hand (check the version's
release notes on Modrinth or this documentation for what it does).
