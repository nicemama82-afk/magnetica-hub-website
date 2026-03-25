# Magnetica Hub Website - Deployment Guide

## Overview

Your website is built and ready to deploy! Here's everything you need to know.

## Project Structure

```
magnetica-hub-website/
├── dist/                    # Production build (ready to deploy)
├── src/
│   ├── pages/              # Website pages
│   ├── components/         # React components
│   ├── App.tsx             # Main app
│   └── App.css             # Styling
├── public/                 # Static assets
│   └── magnetica-hub-logo.png
├── index.html              # HTML entry point
├── vite.config.ts          # Vite configuration
└── package.json            # Dependencies
```

## Deployment Options

### Option 1: Vercel (Recommended - Free & Easy)

1. **Install Vercel CLI**
```bash
npm install -g vercel
```

2. **Deploy**
```bash
cd /home/ubuntu/magnetica-hub-website
vercel
```

3. **Follow prompts** - Select your project settings
4. **Done!** Your site is live at a Vercel URL

### Option 2: Netlify (Free & Easy)

1. **Install Netlify CLI**
```bash
npm install -g netlify-cli
```

2. **Deploy**
```bash
cd /home/ubuntu/magnetica-hub-website
netlify deploy --prod --dir=dist
```

3. **Done!** Your site is live

### Option 3: GitHub Pages (Free)

1. **Create GitHub repository**
2. **Push code to GitHub**
3. **Enable GitHub Pages** in repository settings
4. **Select `dist` folder as source**

### Option 4: Traditional Hosting (Bluehost, GoDaddy, etc.)

1. **Build the project**
```bash
npm run build
```

2. **Upload `dist` folder** via FTP/SFTP to your hosting
3. **Set document root** to the `dist` folder
4. **Done!**

## Custom Domain Setup

### After deploying to Vercel/Netlify:

1. **Purchase domain** (GoDaddy, Namecheap, etc.)
2. **Update DNS records** to point to your hosting
3. **Enable HTTPS** (automatic on Vercel/Netlify)

### DNS Records to Add:

**For Vercel:**
```
CNAME: www -> cname.vercel-dns.com
A: @ -> 76.76.19.165
```

**For Netlify:**
```
CNAME: www -> your-site.netlify.app
A: @ -> 75.2.60.5
```

## Email Subscription Setup

The expression of interest form needs backend integration. Choose one:

### Option 1: Mailchimp (Free & Easy)

1. **Create Mailchimp account** - https://mailchimp.com
2. **Create audience/list**
3. **Get API key** from account settings
4. **Update HomePage.tsx** to call Mailchimp API

```typescript
const handleSubscribe = async (e: React.FormEvent) => {
  e.preventDefault();
  
  const response = await fetch('https://us1.api.mailchimp.com/3.0/lists/YOUR_LIST_ID/members', {
    method: 'POST',
    headers: {
      'Authorization': 'Bearer YOUR_API_KEY',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      email_address: email,
      status: 'pending',
    }),
  });
  
  if (response.ok) {
    setSubscribed(true);
    setEmail('');
  }
};
```

### Option 2: SendGrid (Paid but Reliable)

1. **Create SendGrid account** - https://sendgrid.com
2. **Create contact list**
3. **Get API key**
4. **Use similar integration as Mailchimp**

### Option 3: Firebase (Free & Easy)

1. **Create Firebase project** - https://firebase.google.com
2. **Set up Firestore database**
3. **Add emails to collection**
4. **Query from React**

## Environment Variables

Create a `.env` file for sensitive data:

```env
VITE_MAILCHIMP_API_KEY=your_api_key
VITE_MAILCHIMP_LIST_ID=your_list_id
VITE_FIREBASE_API_KEY=your_firebase_key
```

Access in code:
```typescript
const apiKey = import.meta.env.VITE_MAILCHIMP_API_KEY;
```

## Building for Production

```bash
# Build the project
npm run build

# Preview production build locally
npm run preview

# Deploy
vercel  # or netlify deploy --prod --dir=dist
```

## Performance Optimization

Your site is already optimized with:
- ✅ Code splitting
- ✅ Image optimization
- ✅ Minified CSS/JS
- ✅ Fast load times

## SEO Setup

Add to `index.html`:

```html
<meta name="description" content="Magnetica Hub - The spiritual marketplace for creators and healers">
<meta name="keywords" content="spiritual marketplace, creators, healers, meditation, manifestation">
<meta property="og:title" content="Magnetica Hub">
<meta property="og:description" content="The all-in-one spiritual marketplace">
<meta property="og:image" content="https://your-domain.com/magnetica-hub-logo.png">
```

## Monitoring & Analytics

Add Google Analytics:

```html
<!-- In index.html -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_ID');
</script>
```

## Troubleshooting

### Site not loading
- Check DNS settings
- Verify domain points to hosting
- Check browser cache (Ctrl+Shift+Del)

### Styles not loading
- Clear build cache: `rm -rf dist && npm run build`
- Check CSS file paths
- Verify public folder assets

### Email subscription not working
- Check API key is valid
- Verify CORS settings
- Check browser console for errors
- Test with Postman

## Next Steps

1. ✅ Choose hosting platform (Vercel recommended)
2. ✅ Deploy website
3. ✅ Set up custom domain
4. ✅ Configure email subscription
5. ✅ Add Google Analytics
6. ✅ Build mobile app backend
7. ✅ Launch on Google Play Store

## Support

- **Vercel Docs**: https://vercel.com/docs
- **Netlify Docs**: https://docs.netlify.com
- **React Docs**: https://react.dev
- **Vite Docs**: https://vitejs.dev

---

**Your website is ready to launch! 🚀✨**
