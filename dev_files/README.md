# Tangent Forge Website - Deployment Package

## 📦 What's Included

### Core Files (Ready to Deploy)
- `index.html` - Main HTML structure
- `tokens.css` - Design system variables
- `style.css` - Complete styling
- `script.js` - Interactive functionality
- `assets/tf-mark-dark.svg` - Placeholder logo

### Design Features
✅ Clean, readable typography (Inter font)
✅ High contrast for accessibility
✅ Mobile responsive design
✅ Smooth scrolling navigation
✅ Netlify Forms integration (ready to use)
✅ SEO meta tags included
✅ Professional layout with cards and sections

## 🚀 Deployment to Netlify

### Option 1: Drag & Drop (Easiest)
1. Go to [Netlify](https://app.netlify.com/)
2. Click "Add new site" → "Deploy manually"
3. Drag the entire folder into the upload area
4. Done! Your site will be live

### Option 2: Git Deployment (Recommended for updates)
1. Create a new Git repository
2. Add all files to the repo
3. Push to GitHub/GitLab
4. Connect your repo to Netlify
5. Netlify auto-deploys on every push

### Netlify Forms Setup
The contact form is already configured! After deployment:
1. Go to Netlify Dashboard → Forms
2. You'll see "signup" form
3. Configure email notifications in Netlify settings
4. Test by submitting the form on your live site

## 🎨 Assets You Need to Create

### Required (Missing Currently)
These will show as broken until you create them:

1. **Favicons**
   - `/assets/favicon-32.png` (32x32px)
   - `/assets/favicon-16.png` (16x16px)  
   - `/assets/favicon-180.png` (180x180px)
   - `/assets/favicon.ico`

   **Quick fix**: Use [favicon.io](https://favicon.io/) to generate from text "TF"

2. **Social Media Image**
   - `/assets/og-banner-dark.png` (1200x630px recommended)
   - Shows when sharing on Twitter, Facebook, LinkedIn
   
   **Quick fix**: Use [Canva](https://canva.com) with text "Tangent Forge - Where your tangents become products that ship"

3. **Gumroad Cover Image** (optional for now)
   - `/assets/gumroad_cover.png`
   - Upload when you create your Gumroad product

### Optional Improvements
4. **Better Logo**
   - Replace `/assets/tf-mark-dark.svg` with your designed logo
   - Current is just a placeholder with "TF" text

## ⚙️ Configuration Needed

### Before Launch Checklist

- [ ] Replace Gumroad link (line 99 in index.html)
- [ ] Create favicons and add to `/assets/`
- [ ] Create social share image (`og-banner-dark.png`)
- [ ] Test form submission on live site
- [ ] Update Changelog Google Doc link (if needed)
- [ ] Update Roadmap Google Doc link (if needed)
- [ ] Set up custom domain in Netlify (tangentforge.com)

### Custom Domain Setup
Your DNS is already configured correctly! Once deployed:
1. In Netlify: Site settings → Domain management
2. Add custom domain: `tangentforge.com`
3. Add `www.tangentforge.com` as alias
4. Enable HTTPS (automatic with Netlify)

## 🎨 Customization Guide

### Colors
Edit `tokens.css` to change:
- `--color-primary` - Main accent color (currently blue)
- `--color-secondary` - Secondary accent (currently green)
- `--color-bg` - Page background
- `--color-surface` - Card backgrounds

### Typography
Change font in `index.html` line 30:
```html
<link href="https://fonts.googleapis.com/css2?family=YOUR_FONT:wght@400;600;800&display=swap" rel="stylesheet">
```
Then update `tokens.css` line 20:
```css
--font-family: 'YOUR_FONT', sans-serif;
```

### Spacing & Layout
Adjust spacing scale in `tokens.css` (lines 36-43)

## 🐛 Troubleshooting

### Forms not working?
- Make sure `data-netlify="true"` is in the form tag
- Forms only work on live Netlify sites (not localhost)
- Check Netlify Dashboard → Forms after first submission

### Images not loading?
- Verify file paths start with `/assets/`
- Check file names match exactly (case-sensitive)
- Ensure files are in the `assets` folder

### Site looks unstyled?
- Check that all CSS files are in the root directory
- View browser console for loading errors
- Clear cache and hard refresh (Cmd/Ctrl + Shift + R)

## 📊 Performance

Current setup includes:
- Font preloading for faster text rendering
- Optimized CSS with custom properties
- Minimal JavaScript for better load times
- Mobile-first responsive design

## 📝 File Structure

```
tangentforge/
├── index.html
├── tokens.css
├── style.css
├── script.js
├── assets/
│   ├── tf-mark-dark.svg (included)
│   ├── favicon-32.png (need to create)
│   ├── favicon-16.png (need to create)
│   ├── favicon-180.png (need to create)
│   ├── favicon.ico (need to create)
│   ├── og-banner-dark.png (need to create)
│   └── gumroad_cover.png (optional)
└── README.md (this file)
```

## 🎯 Next Steps

1. **Test locally** - Open `index.html` in browser
2. **Create missing assets** - Favicons and social image
3. **Deploy to Netlify** - Drag & drop or Git
4. **Connect custom domain** - In Netlify settings
5. **Test everything** - Forms, links, mobile view
6. **Launch!** 🚀

## 💡 Tips

- Keep backups of your files
- Test on multiple devices before announcing
- Monitor Netlify analytics for traffic
- Use Netlify's deploy previews for testing changes

## 🆘 Need Help?

- [Netlify Docs](https://docs.netlify.com/)
- [Netlify Forms Guide](https://docs.netlify.com/forms/setup/)
- [Netlify Support](https://www.netlify.com/support/)

---

Built with ❤️ for Tangent Forge
