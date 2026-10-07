# Brand palette

The master palette and supporting status tints live in `app/globals.css`.

Use semantic utilities rather than introducing new hex colours:

| Role | Utility |
| --- | --- |
| H1 and H2 | `text-heading` |
| H3, H4 and card titles | `text-card-ink` |
| Body copy | `text-copy` |
| Supporting copy | `text-secondary-copy` |
| Eyebrows and text links | `text-eyebrow` |
| Filled CTA | `button-primary` |
| Outline CTA | `button-secondary` |

Dark sections use `typography-inverse`; white cards inside those sections use
`typography-surface`. These scopes set text, button and focus colours together.
Keep one filled CTA per section. Red is reserved for errors and small decorative
sparks. Form feedback includes an icon and a written status.

Keep the existing section order, content, hero layout and original logo artwork.
Apply the palette to existing surfaces without adding or moving sections.
Partner and customer category logos retain their original colours. The credentials
section uses client-supplied experience and credentials; testimonials require
authentic client quotes. Keep the existing company logo on white.
