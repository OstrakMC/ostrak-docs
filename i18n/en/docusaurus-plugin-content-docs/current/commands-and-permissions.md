---
sidebar_position: 3
---

# Commands & Permissions

## `/doc` — documents

| Command | What it does | Permission |
|---|---|---|
| `/doc` | Your own documents and their expiry | `ostrak.use` (everyone by default) |
| `/doc show <player>` | Voluntarily present a document to a nearby player | `ostrak.use` |
| `/doc inspect <player>` | Request documents from a nearby player | `ostrak.inspect` (operator by default) |
| `/doc issue <type> <player>` | Issue a document | `ostrak.doc.<type>` (e.g. `ostrak.doc.passport`) |
| `/doc revoke <id>` | Revoke a document by id | `ostrak.revoke` (operator by default) |
| `/doc set <type> <player> <field> <value>` | Change a document field | `ostrak.doc.<type>` |
| `/doc info <player>` | All of a player's documents | `ostrak.admin` |

`ostrak.doc.<type>` is a dynamic permission, one per document type id
(`ostrak.doc.passport`, etc). It isn't declared in `plugin.yml` up front
(there can be any number of types), so it's granted manually via a
permissions plugin like LuckPerms. Until explicitly granted, only operators
have it — safer default than opening it up to everyone.

## `/passport` (alias `/pass`) — your own passport

| Command | What it does | Permission |
|---|---|---|
| `/passport` | Open your own passport (or the GUI, or a "no passport yet" message) | `ostrak.use` |
| `/passport fill` | Continue the fill-in wizard (only in `bootstrap-mode: self`) | `ostrak.use` |

## `/registry search` — registry search

| Command | What it does | Permission |
|---|---|---|
| `/registry search <field> <query>` | Search documents by a searchable field's value | `ostrak.registry` (operator by default) |

Only fields with `searchable: true` in the type definition are searchable —
for the built-in passport that's `given_name`, `family_name`, `citizenship`.

## `/ostrak` — administration

| Command | What it does | Permission |
|---|---|---|
| `/ostrak reload` | Reload `config.yml` and the language file | `ostrak.admin` |
| `/ostrak diagnostics` | Version, storage type, document types, PlaceholderAPI status | `ostrak.admin` |
| `/ostrak help` | List of all plugin commands | `ostrak.admin` |
| `/ostrak update` | Check for updates on Modrinth | `ostrak.admin` |

There's no `/cp` alias — only `/ostrak`.

## Full permission list

| Permission | Default | Governs |
|---|---|---|
| `ostrak.use` | everyone | base commands — `/doc`, `/doc show`, `/passport` |
| `ostrak.admin` | operator | `/ostrak`, `/doc info` |
| `ostrak.revoke` | operator | `/doc revoke` |
| `ostrak.inspect` | operator | `/doc inspect` |
| `ostrak.inspect.force` | operator | `/doc inspect` ignores the target's consent (distance is still checked) |
| `ostrak.registry` | operator | `/registry search` |
| `ostrak.doc.<type>` | operator (not granted by default) | `/doc issue`/`/doc set` for a specific document type |

Every permission except `ostrak.use` is meant to be granted via a
permissions plugin (LuckPerms and similar) to specific roles — not
necessarily full admins. For example, `ostrak.doc.passport` can be granted
to a "registry clerk" role without touching `ostrak.admin`.
