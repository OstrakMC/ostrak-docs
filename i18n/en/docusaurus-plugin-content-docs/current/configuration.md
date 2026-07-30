---
sidebar_position: 4
---

# Configuration (config.yml)

File location: `plugins/OstrakFree/config.yml`. Every key below is listed
with its allowed values and default, matching the comments in the file
itself. Most keys are re-read on every action but only apply to new
requests/sessions — a GUI that's already open or a pending `/doc inspect`
request won't be affected by a change.

## `language`

Which file from `plugins/OstrakFree/lang/` to use for every plugin message.
For your own translation/style, copy `lang/ru_RU.yml` next to itself under a
different name (e.g. `lang/en_US.yml`), edit it, and point here without the
extension. File not found — silent fallback to `ru_RU` with a console
warning.

```yaml
language: ru_RU   # default
```

## `passport.disabled-fields`

A list of built-in passport field keys to remove entirely: not shown in the
GUI, not asked in the self-mode wizard, `/doc set` replies "no such field"
for them. This is the only way to remove a field in free — `passport.yml`
is baked into the jar and can't be edited directly.

```yaml
passport:
  disabled-fields: [discord, telegram, profession]   # default: []
```

Values already filled in for a disabled field aren't deleted — they just
stop being shown (re-enable the field and the data is still there). A field
with the `given_name` role (the citizen's name source) can't be disabled —
its key is silently ignored in the list. Full field list — on the
[Passport & Its Fields](passport-and-fields) page.

## `inspect.radius`

The maximum distance in blocks between whoever requests documents
(`/doc inspect`) and whoever is being asked. Beyond that, the command is
rejected — even if the requester has `ostrak.inspect.force` (force only
bypasses the target's consent, not the distance check).

```yaml
inspect:
  radius: 8   # default
```

## `inspect.timeout-seconds`

How many seconds an unaccepted/undeclined `/doc inspect` request stays
alive before it expires — the requester gets "didn't respond to the
document request", and the player can no longer respond to that specific
request via `/doc show`/`/doc deny` (a new request has to be made).

```yaml
inspect:
  timeout-seconds: 30   # default
```

## `expiration.interval-minutes`

How often (in minutes) the background task checks documents for an expired
term and flips them to `EXPIRED`. The built-in passport is permanent, but
this applies to any other document type with an expiry (coming in premium).

```yaml
expiration:
  interval-minutes: 5   # default
```

## `citizen.bootstrap-mode`

What happens on a player's first join.

| Value | Behavior |
|---|---|
| `self` (default) | A step-by-step wizard in chat: name, family name, date of birth, etc., one field at a time. A "Skip" button leaves the field empty |
| `auto` | An empty passport is created silently, no questions asked — fits servers where the passport is filled by an admin (`/doc set`) or a separate website/Discord form |
| `request` | An appearance request approved by an official — this is a **premium feature**; free falls back to `auto` with a console warning |

Any other/missing value also falls back to `auto`.

```yaml
citizen:
  bootstrap-mode: self   # default
```

## `gui.categories-enabled`

Document GUI visuals. `true` — fields of a document type that declares
`categories` (for the built-in passport: Identity/Family/Citizenship/
Occupation/Contacts) are shown as one large icon per category, with all
fields visible in the tooltip on hover. `false` — the old flat layout: one
inventory slot per field, even if the type declares categories. Nothing in
the YAML needs to change — it's purely a display setting.

```yaml
gui:
  categories-enabled: true   # default
```

## `death.mode`

What happens to the passport when a character dies.

| Value | Behavior |
|---|---|
| `auto` (default) | Death doesn't affect the document's status at all. The only action taken: if the physical passport item was lost (dropped on death and not picked up, because `keepInventory` is off on the server), the next respawn reissues a new item instance of the same active document |
| `restore` | On death, the active passport is revoked (set to `REVOKED`, like `/doc revoke`). There's no automatic restoration — to get it back, someone with the `ostrak.doc.passport` permission has to run `/doc issue passport <player>` (creates a new active document for that player). This permission doesn't have to belong to a full admin — it can be granted to a dedicated role (e.g. a "registry clerk" or "doctor") |

```yaml
death:
  mode: auto   # default
```

## `update-check`

Checks for a new version on Modrinth — on server start (console log only)
and via `/ostrak update` (chat reply). Doesn't download or install
anything, just reports the latest version number.

```yaml
update-check:
  enabled: true
  modrinth-slug: ""   # Modrinth project slug/id; empty — check disabled silently
```
