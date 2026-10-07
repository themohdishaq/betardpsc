# Website typography

Use the Geist font and shared tokens in `app/globals.css`.

| Purpose | Class | Size |
| --- | --- | --- |
| Page title | `text-title` | 30–40px |
| Main section heading | `text-section` | 24–30px |
| Supporting statement | `text-subheading` | 20–24px |
| Card or category heading | `text-card-heading` | 18–20px |
| Paragraphs and form fields | `text-body` | 16px, 1.7 line height |
| Navigation and secondary labels | `text-small` | 14px |
| Eyebrows and short metadata | `text-caption` | 13px |

Use `text-ink` for headings, `text-copy` for descriptions, and `text-brand` for
links. `text-heading-accent` is the shared heading accent. Avoid adding new
hardcoded font sizes or text colours to page components.

Dark banners need `typography-inverse`; white panels inside them need
`typography-surface`. These classes switch the shared heading and body palette
so the same typography stays readable on both backgrounds. Plain white or
light sections use the normal navy and slate palette.

Compact footer and sidebar headings may use `text-card-heading`. Decorative
status numbers and text embedded in the service illustration have their own
display sizing; they do not set the surrounding page typography.
