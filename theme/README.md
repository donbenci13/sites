# Peachteq Theme Templates

4 distinct visual themes for client sites. Each is a standalone CSS file you drop in — just change `<link rel="stylesheet">` in the HTML.

## The Themes

| Theme | Vibe | Best For |
|----------|------|----------|
| **Harvest** | Warm greens, cream, earthy | Agribusiness, farming, traditional services |
| **Summit** | Dark navy/slate, cyan accent, sharp | Consulting, tech-forward, modern B2B |
| **Field** | White space, serif headings, amber | Premium/small biz, consultants, creative |
| **Forge** | Full dark mode, orange/copper, bold | Industrial, construction, manufacturing |

## Usage

### Build a new site
When generating a new client site, pick a theme:

```bash
# Random pick
python3 theme/pick-theme.py

# Specific pick
python3 theme/pick-theme.py summit

# List all
python3 theme/pick-theme.py list
```

### Link it in your HTML
Replace the existing CSS link:

```html
<!-- Before -->
<link rel="stylesheet" href="css/style.css">

<!-- After -->
<link rel="stylesheet" href="theme/summit.css">
```

Or copy the theme CSS into the site's own `css/` dir if you want it self-contained:

```bash
cp theme/forge.css your-new-site/css/style.css
```

## Page Class Reference

All themes use the same HTML class names so they're drop-in compatible:

- `.site-nav`, `.nav-wrap`, `.brand`, `.brand-badge`, `.nav-links`, `.nav-toggle`
- `.hero`, `.hero-grid`, `.hero-badge`, `.hero-actions`, `.hero-media`, `.hero-panel`
- `.page-hero` (for inner pages)
- `.section-head`, `.section-kicker`, `.section-title`, `.section-sub`
- `.cards-3`, `.cards-4`, `.card`, `.icon`
- `.split-grid`, `.split-grid.reverse`, `.media-frame`
- `.strip`, `.timeline`
- `.contact-grid`, `.contact-list`, `.contact-item`, `.contact-item-icon`
- `.form`, `.field`
- `.site-footer`, `.footer-grid`, `.footer-bottom`
- `.placeholder`, `.team-card`, `.about-values`, `.photogrid`
- `.btn`, `.btn-primary`, `.btn-outline`, `.btn-dark`
