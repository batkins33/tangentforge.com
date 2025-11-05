# Tangent Forge — Ready to Deploy

This folder contains your complete, enhanced Tangent Forge website with all brand assets integrated.

## What's Different from the Starter Pack

✅ Better logo (tf-mark-dark.svg instead of placeholder)
✅ Proper OG/social image (og-banner-dark.svg)
✅ Full favicon set (all sizes from 16px to 512px)
✅ CSS design tokens (tokens.css with color variables)
✅ Enhanced HTML with proper meta tags
✅ Gumroad product cover ready to use

## Files Structure

```
tangentforge-site/
├── index.html           # Main page with TODO markers for your links
├── style.css            # Styles (unchanged from starter)
├── script.js            # Minimal JS (just sets copyright year)
├── tokens.css           # Design system variables
└── assets/
    ├── tf-mark-dark.svg           # Logo
    ├── og-banner-dark.svg         # Social share image
    ├── gumroad_cover_1080.png     # Product cover for Gumroad
    ├── favicon-*.png              # All favicon sizes
    └── favicon.ico                # Browser favicon

netlify.toml             # Netlify config (publish directory: tangentforge-site)
```

## Deploy to GitHub & Netlify

### Step 1: Push to Your Repo

```bash
cd tangentforge-deploy

# Initialize git
git init
git checkout -b main

# Add all files
git add .
git commit -m "Deploy Tangent Forge with brand assets"

# Connect to your existing repo
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO.git

# Push
git push -u origin main --force
```

### Step 2: Netlify Will Auto-Deploy

Since your repo is already connected to Netlify, it should deploy automatically.

Check these settings in Netlify:
- **Build command:** (leave empty for static sites)
- **Publish directory:** `tangentforge-site`

## Before You Launch — Fill These Gaps

### 1. Update Links in index.html

Open `tangentforge-site/index.html` and search for `TODO`. Replace:

```html
<!-- Current placeholders -->
<li><a href="https://gumroad.com/YOUR_PRODUCT_LINK" ...>Buy on Gumroad — $27</a></li>
<li><a href="https://docs.google.com/YOUR_CHANGELOG" ...>Changelog</a></li>
<li><a href="https://docs.google.com/YOUR_ROADMAP" ...>Roadmap</a></li>
```

With your actual URLs after you:
- Create the Gumroad product
- Create a Changelog (Google Doc/Notion)
- Create a Roadmap (Google Doc/Notion)

### 2. Create Your Gumroad Product

1. Go to https://gumroad.com/products/new
2. Upload cover: `tangentforge-site/assets/gumroad_cover_1080.png`
3. Product name: **Prompt Pack #1 — Freelance Writers Edition**
4. Price: **$27** (or $19 for launch)
5. Description: See `GUMROAD_DESCRIPTION.md` (I can create this for you)
6. Product file: Your 30-prompt PDF (I can help create this too)

### 3. Test Your Email Form

After deploying:
1. Go to your live site
2. Submit the email form
3. Check Netlify Dashboard → Forms → Submissions
4. You should see it there

## What You Still Need

- [ ] **The actual 30 prompts** (I can help write these)
- [ ] **Gumroad product description** (I can write this)
- [ ] **Changelog page** (create a simple Google Doc)
- [ ] **Roadmap page** (create a simple Google Doc)

## Next Steps After Deploy

1. Test on mobile
2. Test social share (paste URL in Facebook/Twitter to see OG image)
3. Set up Google Analytics (optional)
4. Create first social posts announcing launch
5. Email 10 friends in your target market

## Need Help?

I can help you create:
- The 30 prompts content
- Gumroad description
- Launch tweets/posts
- Changelog and roadmap templates

Just ask!
