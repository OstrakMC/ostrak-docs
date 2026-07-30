---
sidebar_position: 6
---

# Messages & Styling

Not a single text a player sees is hardcoded — all of it lives in
`plugins/OstrakFree/lang/ru_RU.yml`. Edit it freely, it's not code, just
output style. For your own translation/style, don't edit `ru_RU.yml`
directly — copy it next to itself under a different name (e.g.
`lang/en_US.yml`), edit that, and point `config.yml` → `language: en_US` at
it. That way a plugin update never wipes your version — the plugin only
recreates `ru_RU.yml` on startup if it was deleted, it never touches other
files in `lang/`.

## Color & formatting — MiniMessage

Colors, gradients, bold/italic and so on — via
[MiniMessage](https://docs.advntr.dev/minimessage/format.html) tags:

```yaml
common:
  no-permission: "<#F87171>✖ Недостаточно прав.</#F87171>"
```

- HEX color: `<#RRGGBB>text</#RRGGBB>`
- Named color: `<red>`, `<green>`, `<gray>`, `<dark_gray>`...
- Gradient: `<gradient:#38BDF8:#C084FC>text</gradient>` (multiple color
  stops via colons are supported too)
- Decorations: `<bold>`, `<italic>`, `<underlined>`

## The old format still works

Classic `&`-codes (`&c`, `&l`, etc.) are still understood — no need to
relearn anything. So is the per-character HEX gradient format from Minecraft
chat gradient generators:

```
&#54daf4O&#54cbecs&#54bbe5t&#54acddr&#549cd5a&#548dcdk
```

You can paste a string like that as-is — it's converted to MiniMessage tags
automatically before display.

## Placeholders

Via `{braces}` — the set for each key is documented in the comment above it
in the file. Extra/missing placeholders don't break anything.

## Prefix

Every plugin message automatically gets a prefix (except the divider — see
below):

```yaml
common:
  prefix: "<gradient:#38BDF8:#818CF8:#C084FC>◆ Ostrak</gradient> <dark_gray>»</dark_gray> "
```

You can change the text, the color, or turn it into a gradient — it's
parsed through the same engine as everything else.

## Divider

`common.divider` — a line sent before/after multi-line blocks (document
lists, `/ostrak help`, `/ostrak diagnostics`, `/registry search`) so
several messages in a row don't blur into one unreadable wall of text.

- A completely empty string (`""`) — the divider is never sent at all.
- A string with just a space (`" "`, the default) — just a blank line
  instead of a decorative rule.
- You can also use an actual rule:
  ```yaml
  common:
    divider: "<dark_gray>▬▬▬▬▬▬▬▬▬</dark_gray> <gradient:#38BDF8:#C084FC>◆</gradient> <dark_gray>▬▬▬▬▬▬▬▬▬</dark_gray>"
  ```

## Line breaks

`\n` inside a single message (double quotes only — single-quoted YAML
strings don't turn `\n` into an actual line break).

## Typo in a key

Delete a key or break the YAML, and the player sees the key itself instead
of text (e.g. `common.no-permission`). That way a typo in `lang/ru_RU.yml`
is immediately obvious instead of silently swallowed.

## Default palette

Every plugin message already follows one consistent color scheme — useful
to know if you're only tweaking things, not rewriting from scratch:

| Message type | Color | Icon |
|---|---|---|
| Success | green `#34D399` | ✔ |
| Error | red `#F87171` | ✖ |
| Warning | amber `#FBBF24` | ⚠ |
| Info | sky blue `#38BDF8` | — |
| Secondary text | muted gray `#94A3B8` | — |
| Values (names, numbers) | near-white `#E2E8F0` | — |

`◆` is used as a decorative separator between fields within a line (for
example in `/registry search`, between the document type and the
character's name).
