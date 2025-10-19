# 📋 Quick Deployment Checklist

## Before You Deploy:

### ✅ Images Checklist (Save to `public/` folder):
- [ ] `green-haven-screenshot.png` - Green Haven project
- [ ] `raahi-screenshot.png` - Raahi AI Travel Planner
- [ ] `portfolio-screenshot.png` - Portfolio homepage
- [ ] `freelancing-screenshot.png` - SkillYatra platform
- [ ] `coders-circle-logo.png` - Coders Circle logo
- [ ] `Dharmendra_Kumar_Resume.pdf` - Your resume
- [ ] `dharmendra-photo.jpg` - Your photo (founder)
- [ ] `ujjwal-photo.jpg` - Co-founder photo

### ✅ Git Setup:
```powershell
git init
git add .
git commit -m "Initial commit: Complete portfolio"
```

### ✅ Create .gitignore:
```
node_modules/
dist/
.env
.DS_Store
*.log
```

### ✅ Push to GitHub:
```powershell
git remote add origin https://github.com/YOUR_USERNAME/portfolio-website.git
git branch -M main
git push -u origin main
```

### ✅ Deploy on Vercel:
1. Go to https://vercel.com
2. Sign up with GitHub
3. Import your repository
4. Click Deploy
5. Wait 2-3 minutes
6. Your site is live!

## 🌐 Your Live URLs:
- **GitHub Repo**: `https://github.com/YOUR_USERNAME/portfolio-website`
- **Live Site**: `https://portfolio-website-xxx.vercel.app`

## 📱 Test Checklist:
- [ ] Home page loads
- [ ] All images display
- [ ] Resume downloads
- [ ] Contact form works
- [ ] Mobile responsive (test on phone)
- [ ] Tablet responsive
- [ ] Desktop looks good

## 🔄 To Update Website:
```powershell
git add .
git commit -m "Update: describe changes"
git push
```
Vercel auto-deploys in 2-3 minutes!

---

## 🚨 Quick Fixes:

**Images not showing?**
→ Check file names match EXACTLY in `public/` folder

**Git command not found?**
→ Install Git: https://git-scm.com/download/win

**Build failed?**
→ Run `npm run build` locally to check errors

**Need help?**
→ Read full guide: `DEPLOYMENT_GUIDE.md`

---

**You're ready to deploy! 🚀**
