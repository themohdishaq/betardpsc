# Company logos

The home page and Partners & Customers page use the same company data in
`lib/relationships.ts`.

The seven existing partner logos are connected from `public/Partners/`. Preserve
the exact folder and filename casing when replacing those images.

The twelve customer logos are connected from `public/CustomerCategory/`, grouped
under their respective customer categories. Astranti remains a customer.

1. Add the official logo file to `public/images/relationships/`. SVG, PNG, and
   WebP are supported. Prefer a transparent background.
2. Set that company's `logoSrc`, for example:

   ```ts
   logoSrc: "/images/relationships/ivari.svg"
   ```

3. Keep partners in `strategicPartners` and customers in the appropriate
   `customerCategories` group. Astranti belongs to Professional Training customers.

Logo images fit inside a consistent white tile without cropping. An empty logo
path or an image that fails to load shows the company's display name instead.
Use `href` only when the company's website is known; omit it otherwise.

Add a new company using the same fields. Add a new customer category with a
unique `id`, a `title`, and a `companies` array; its horizontal row is created
automatically.
