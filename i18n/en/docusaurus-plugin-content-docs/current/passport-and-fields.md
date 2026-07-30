---
sidebar_position: 5
---

# Passport & Its Fields

The passport isn't a special case in the code — it's a regular document
type whose definition (`passport.yml`) is bundled inside the jar. In the
free build this file can't be overridden with your own — instead of
editing YAML, you use config (`passport.disabled-fields`, see
[Configuration](configuration)).

## GUI sections

| Section | Fields |
|---|---|
| ◆ Identity | Given name, Family name, Gender, Date of birth, Birthplace, Photo |
| ◆ Family | Marital status, Spouse |
| ◆ Citizenship | Citizenship |
| ◆ Occupation | Occupation |
| ◆ Contacts | Discord, Telegram |

## All fields

| Key | Label | Type | Notes |
|---|---|---|---|
| `given_name` | Given name | text | searchable via `/registry search`, can't be disabled |
| `family_name` | Family name | text | searchable via `/registry search` |
| `gender` | Gender | choice ("Мужской"/"Женский") | picked via buttons in the wizard, not typed |
| `birth_date` | Date of birth | date | age (`%ostrak_age%`) is computed from it |
| `birth_place` | Birthplace | text | |
| `citizenship` | Citizenship | text | searchable via `/registry search` |
| `profession` | Occupation | text | |
| `marital_status` | Marital status | text | |
| `spouse` | Spouse | reference to another citizen | **optional** — not everyone has one, the wizard won't nag about it forever |
| `photo` | Photo | player head | automatic, not asked in the wizard |
| `discord` | Discord | text | |
| `telegram` | Telegram | text | |

## Disabling fields

If a field doesn't fit your server (say, you don't use Discord
integration), remove it entirely via `config.yml`:

```yaml
passport:
  disabled-fields: [discord, telegram, profession]
```

A disabled field disappears from the GUI, from the fill-in wizard, and from
`/doc set` (the command replies "no such field"). Values already saved
aren't deleted — they're just hidden until the field is re-enabled.

## Fill-in wizard (`bootstrap-mode: self`)

On first join (and via `/passport fill` if the wizard wasn't finished), the
plugin asks for fields one at a time. Every question comes with a clickable
"Skip" button (no need to type the word by hand), and fields with a
constrained set of values (like "Gender") get a button per option, so
there's no risk of a typo.

"Skip" only applies to the current session — on the next join, the plugin
asks about the unfilled field again, **except** for optional fields
(`spouse`) — skipping those doesn't count as "wizard incomplete", and the
join hint won't nag about them.
