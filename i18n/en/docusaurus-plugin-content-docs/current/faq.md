---
sidebar_position: 7
---

# FAQ

## The plugin won't start / errors on startup

Check your Java version (must be exactly 17 — not 21, not 11) and your
Paper version (1.20.1–1.21.x). Vanilla/Spigot aren't supported — the plugin
uses the Adventure/Paper API, which they don't have.

## A player types in chat and the plugin asks them something instead

That's the passport fill-in wizard (`bootstrap-mode: self`) — it intercepts
the next chat message as an answer to its question. Click the "Skip" button
under the question (or type "пропустить" by hand) to get out of the wizard,
and finish it later via `/passport fill`.

## How do I remove a field I don't need (e.g. Discord)

`config.yml` → `passport.disabled-fields: [discord]`. See
[Passport & Its Fields](passport-and-fields) for details.

## How do I change message text/colors

`plugins/OstrakFree/lang/ru_RU.yml` — edit freely, `/ostrak reload` applies
changes without a restart. See [Messages & Styling](messages-and-styling)
for details.

## `/doc issue passport <player>` says "no permission" even though I'm an operator

`ostrak.doc.<type>` is a dynamic permission, unrelated to `ostrak.admin`.
Operators have it by default (like any unregistered permission), but if you
run a permissions plugin like LuckPerms that overrides that default —
grant it explicitly: `ostrak.doc.passport`.

## A player died — is their passport gone?

Depends on `death.mode` in the config. By default (`auto`) — nothing
happens to the passport, only the physical item is reissued if it was lost.
`restore` — the passport is revoked on death, and only someone with
`ostrak.doc.passport` can restore it. See [Configuration](configuration)
for details.

## I want my own document type (license, permit, medical card)

Only the built-in passport is available in the free build. Custom document
types (`documents/*.yml`) are a premium feature.

## Where is the data stored

SQLite, file `plugins/OstrakFree/ostrak.db`. In premium (the web portal) —
PostgreSQL.

## The plugin conflicts with another document/passport plugin

Disable the other plugin, or split commands apart at the server level (e.g.
via a command-alias plugin) — Ostrak isn't designed to coexist with another
document system operating on the same fields.
