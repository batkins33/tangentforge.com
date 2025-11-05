# Quick Asset Creation Guide

## 🎨 Create Your Missing Assets in 10 Minutes

### 1. Favicons (2 minutes)
**Use favicon.io - it's free and easy:**

1. Go to https://favicon.io/favicon-generator/
2. Enter:
   - Text: **TF**
   - Background: **#2563EB** (or your preferred color)
   - Font: **Inter** or **Bold**
   - Font Color: **#FFFFFF** (white)
3. Click "Download"
4. Extract the ZIP file
5. Copy these files to your `/assets/` folder:
   - `favicon-16x16.png` → rename to `favicon-16.png`
   - `favicon-32x32.png` → rename to `favicon-32.png`
   - `apple-touch-icon.png` → rename to `favicon-180.png`
   - `favicon.ico` → keep as is

### 2. Social Share Image (5 minutes)
**Use Canva - free account works:**

1. Go to https://canva.com
2. Create design → Custom size: **1200 x 630 pixels**
3. Design a simple banner with:
   - Background: Your brand color or gradient
   - Text: "Tangent Forge"
   - Subtitle: "Where your tangents become products that ship"
4. Download as PNG
5. Rename to `og-banner-dark.png`
6. Save to `/assets/` folder

**Or use this quick CLI method if you have ImageMagick:**
```bash
convert -size 1200x630 xc:'#2563EB' \
  -gravity center \
  -font Arial-Bold -pointsize 72 -fill white \
  -annotate +0-50 'Tangent Forge' \
  -font Arial -pointsize 36 -fill '#E0E0E0' \
  -annotate +0+50 'Where your tangents become products that ship' \
  og-banner-dark.png
```

### 3. Better Logo (Optional - 5 minutes)
**If you want a custom logo:**

1. Use https://hatchful.shopify.com/ (free logo maker)
2. Or hire on Fiverr ($5-20 for quick logo)
3. Export as SVG
4. Replace `/assets/tf-mark-dark.svg`

**Or keep the simple placeholder!** The current TF text logo is clean and functional.

### 4. Gumroad Product Cover (When you're ready to sell)
1. Go to Canva → Custom size: **1200 x 630 pixels**
2. Design your product cover:
   - Product name: "Prompt Pack #1"
   - Key benefits
   - Brand colors
3. Download as PNG
4. Save as `gumroad_cover.png` in `/assets/`

## ⚡ Super Quick Option (1 minute)

**Don't want to create anything right now?**

Just remove or comment out the favicon and social image references in `index.html` (lines 21-25 and 12) until you're ready. The site will work fine without them - they're nice-to-haves!

## 🎯 Priority Order

1. **Deploy first** (test everything works)
2. **Add favicons** (shows in browser tabs)
3. **Add social image** (for sharing)
4. **Improve logo** (if you want custom branding)

Remember: Perfect is the enemy of shipped! Get it live first, improve assets later.
