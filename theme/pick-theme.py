#!/usr/bin/env python3
"""
Peachteq Theme Picker
---------------------
Picks a random theme for a new client site, or lets you specify one.

Usage:
  python3 pick-theme.py                 # picks a random theme
  python3 pick-theme.py list            # lists all themes
  python3 pick-theme.py harvest         # confirms a specific theme
  python3 pick-theme.py random          # explicit random pick
"""

import random, sys, os

TEMPLATES = {
    "harvest": "Warm green/earthy — conservative, good for agribusiness & traditional services",
    "summit":  "Dark navy/slate with cyan accents — modern corporate, good for consulting & tech",
    "field":   "Light/white space with serif headings & amber — premium editorial feel",
    "forge":   "Full dark mode with orange/copper — bold industrial & manufacturing",
}

TEMPLATE_DIR = os.path.dirname(os.path.abspath(__file__))

def list_templates():
    print("Available Peachteq Themes:\n")
    for name, desc in TEMPLATES.items():
        css_path = os.path.join(TEMPLATE_DIR, f"{name}.css")
        exists = "✓" if os.path.exists(css_path) else "✗"
        print(f"  {exists}  {name:10s}  {desc}")

def pick_random():
    name = random.choice(list(TEMPLATES.keys()))
    css_path = os.path.join(TEMPLATE_DIR, f"{name}.css")
    print(f"🎲 Random pick: {name}")
    print(f"📄 CSS: templates/{name}.css")
    print(f"📝 {TEMPLATES[name]}")
    print()
    print(f"To use, link this in your HTML:")
    print(f'  <link rel="stylesheet" href="templates/{name}.css">')
    return name

def pick_specific(name):
    if name not in TEMPLATES:
        print(f"❌ Unknown template: '{name}'")
        print(f"   Available: {', '.join(TEMPLATES.keys())}")
        sys.exit(1)
    css_path = os.path.join(TEMPLATE_DIR, f"{name}.css")
    if not os.path.exists(css_path):
        print(f"❌ CSS file missing: {css_path}")
        sys.exit(1)
    print(f"📄 {name}")
    print(f"📝 {TEMPLATES[name]}")
    print(f'   <link rel="stylesheet" href="templates/{name}.css">')
    return name

if __name__ == "__main__":
    if len(sys.argv) == 1:
        pick_random()
    elif sys.argv[1] == "list":
        list_templates()
    elif sys.argv[1] in ("random", "r"):
        pick_random()
    else:
        pick_specific(sys.argv[1])
