---
sidebar_position: 1
slug: /
---

# ◆ Ostrak

Digital documents and identity plugin for Minecraft roleplay servers.

The core is a **document builder**: an admin describes a document type
(passport, license, permit, medical card) in YAML, and the plugin builds the
GUI, issuance, expiry, revocation and registry logging for it. No Java code
needed to add a new document type.

This documentation covers the **free version** (`Ostrak-Free.jar`, Modrinth).

## Sections

- **[Installation](installation)** — requirements, where to put the jar, first launch
- **[Commands & Permissions](commands-and-permissions)** — `/doc`, `/passport`, `/registry`, `/ostrak`
- **[Configuration](configuration)** — every `config.yml` key
- **[Passport & Its Fields](passport-and-fields)** — the built-in document type
- **[Messages & Styling](messages-and-styling)** — your own color/gradient/prefix for messages
- **[FAQ](faq)** — what people usually ask in the first week

## Philosophy, in short

- **Documents are presented, not peeked at.** `/doc inspect` sends a request
  to the nearby player — they decide whether to show the document or refuse.
  Refusing is a legitimate in-character action, not a bug.
- **Field visibility by permission.** A field like blood type on a medical
  card is only visible to whoever holds `ostrak.medic` — hidden from
  everyone else, including the document's owner, if the admin decided so.
- **1 player = 1 citizen.** The passport isn't a special case in the code —
  it's a document type like any other, just bundled with the plugin.

## Free vs Premium

The free build is a full document engine with one built-in type (passport)
and SQLite. Premium adds custom document types (`documents/*.yml`),
approval-queued issuance requests, document renewal, registry history, and a
PostgreSQL-backed web portal. This documentation covers what's in free —
premium features will get their own section once that build ships.
