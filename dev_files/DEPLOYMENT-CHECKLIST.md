# Deployment Checklist ✅

## Pre-Launch (Do These First)

- [ ] **Test locally** - Open `index.html` in your browser
  - Check all sections load correctly
  - Test navigation links
  - Check mobile view (resize browser)

- [ ] **Update Gumroad link** (line 99 in index.html)
  - Currently: `https://gumroad.com/YOUR_PRODUCT_LINK`
  - Replace with your actual product URL

- [ ] **Create basic favicons** (optional but recommended)
  - See ASSET-GUIDE.md for 2-minute solution
  - Or skip for now and add later

## Deploy to Netlify

### Method 1: Manual Deploy (Fastest)
1. Go to https://app.netlify.com/
2. Log in / Sign up
3. Click "Add new site" → "Deploy manually"
4. **Drag the entire folder** (not individual files!)
5. Wait 30 seconds
6. Your site is live! 🎉

### Method 2: Git Deploy (Best for updates)
1. Create new repo on GitHub
2. Upload all files to repo
3. In Netlify: "Import from Git"
4. Select your repo
5. Deploy settings:
   - Build command: (leave empty)
   - Publish directory: (leave empty or `/`)
6. Click "Deploy site"

## Post-Deploy

- [ ] **Test live site**
  - Visit the Netlify URL (e.g., `random-name-123.netlify.app`)
  - Click all navigation links
  - Test form submission
  - Check on mobile device

- [ ] **Connect custom domain**
  - In Netlify: Site settings → Domain management
  - Click "Add custom domain"
  - Enter: `tangentforge.com`
  - Add alias: `www.tangentforge.com`
  - Your DNS is already configured! Should work in minutes.

- [ ] **Enable HTTPS**
  - Should happen automatically
  - Check for the lock icon in browser

- [ ] **Set up form notifications**
  - Netlify Dashboard → Forms → Notifications
  - Add your email to receive form submissions

## Optional Polish

- [ ] Create social share image (`og-banner-dark.png`)
- [ ] Create proper favicons (all sizes)
- [ ] Design custom logo
- [ ] Set up Gumroad product
- [ ] Add Google Analytics (if desired)

## Testing After Live

Test these on your live site:

- [ ] All links work (including Changelog & Roadmap)
- [ ] Form submission works (you get email notification)
- [ ] Site loads fast (under 2 seconds)
- [ ] Looks good on mobile
- [ ] Looks good on tablet
- [ ] Looks good on desktop
- [ ] Navigation sticky header works
- [ ] Smooth scroll to sections works

## Launch! 🚀

Once everything is tested:
- [ ] Share on Twitter/LinkedIn
- [ ] Email your list (if you have one)
- [ ] Add to your profiles
- [ ] Start collecting signups!

---

**Need help?** Check README.md for troubleshooting tips.

**Your DNS is already configured** - once you add the custom domain in Netlify, it should work within minutes!
