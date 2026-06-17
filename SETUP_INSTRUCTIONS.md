# 🚀 Java IPA Preparation Website - Setup Instructions

## Quick Start (Copy & Paste)

```bash
cd java-ipa-prep
npm install
npm run dev
```

Then open **http://localhost:5173** in your browser.

---

## What You Get

✅ **123 Java IPA Questions** - Pre-loaded with solutions
✅ **7 Interactive Pages** - Search, learn, practice, revise
✅ **Progress Tracking** - All saved locally (no backend)
✅ **Mock Tests** - Timed practice with 3/5/10 questions
✅ **Statistics** - Track weak/strong areas
✅ **Responsive Design** - Works on desktop, tablet, mobile

---

## System Requirements

- **Node.js** v14+ (download: https://nodejs.org)
- **npm** v6+ (comes with Node.js)
- **Browser** - Any modern browser (Chrome, Firefox, Safari, Edge)

---

## Installation Steps

### Step 1: Install Node.js
If not already installed, download from https://nodejs.org (LTS version recommended)

Verify installation:
```bash
node --version
npm --version
```

### Step 2: Navigate to Project
```bash
cd java-ipa-prep
```

### Step 3: Install Dependencies
```bash
npm install
```
Wait for it to complete (about 1-2 minutes)

### Step 4: Start Development Server
```bash
npm run dev
```

You'll see output like:
```
VITE v5.4.21  ready in 234 ms

➜  Local:   http://localhost:5173/
➜  press h to show help
```

### Step 5: Open in Browser
Click the link or manually go to **http://localhost:5173**

---

## First Time Usage

1. **Home Page** - See overview of questions
2. **All Questions** - Browse all 123 questions
3. **Pick a Question** - Click any question to see details
4. **Read & Learn** - View hints, solutions, add notes
5. **Mark Progress** - Click status buttons to track
6. **Take Mock Test** - Practice with timed tests
7. **Check Stats** - See your progress

---

## Available Commands

```bash
# Development server (what you'll use most)
npm run dev

# Production build (for deployment)
npm run build

# Preview production build locally
npm run preview
```

---

## Pages Guide

| Page | Purpose | Features |
|------|---------|----------|
| **Home** | Dashboard | Stats, progress, quick links |
| **All Questions** | Browse | Search, filter, view all questions |
| **Question Details** | Learn | Problem, hints, solution, notes |
| **Roadmap** | Path | 4 learning phases (Easy → Hard) |
| **Revision** | Review | Questions marked for revision |
| **Mock Test** | Practice | Timed tests (3/5/10 questions) |
| **Statistics** | Analytics | Progress charts, weak/strong areas |

---

## Status Tracking

Mark each question as:
- **Unattempted** - Haven't tried yet
- **Solved** - Successfully completed
- **Need Revision** - Need to practice more
- **Mastered** - Can solve confidently

---

## Data Storage

✅ All progress saved to browser's **localStorage**
✅ No internet required (after first load)
✅ 100% private - data never leaves your device
✅ Persists across browser sessions

To reset: Clear browser data/localStorage

---

## Troubleshooting

### Port Already in Use
→ Vite will automatically use next available port

### Questions Not Loading
→ Check that `src/data/questions.json` exists

### Progress Not Saving
→ Enable localStorage in browser settings

### Slow Performance
→ Try clearing browser cache or using incognito mode

---

## Tips for Learning

1. **Follow the Roadmap** - Start with Phase 1 (Easy)
2. **Use Hints First** - Challenge yourself before solution
3. **Add Notes** - Document your approach
4. **Take Mock Tests** - Regular practice
5. **Review Weak Areas** - Focus on statistics
6. **Be Consistent** - 30 mins daily is better than 5 hours once

---

## Questions Breakdown

**Total: 123 Questions**

By Difficulty:
- Easy: ~40 questions
- Medium: ~45 questions  
- Hard: ~38 questions

By Topic:
- Arrays, Strings, OOP, Collections, Sorting, Searching
- Employee/Student Problems, Object Filtering, IPA Pattern, Mixed Logic

---

## File Size & Performance

- **App Size**: ~530 KB (gzipped: 119 KB)
- **Load Time**: <1 second
- **Page Transitions**: Instant
- **localStorage Used**: ~10 MB

---

## Browser Support

✅ Chrome/Chromium (latest)
✅ Firefox (latest)
✅ Safari (latest)
✅ Edge (latest)
✅ Mobile browsers (iOS/Android)

---

## Production Deployment

To deploy your build:

```bash
# 1. Create production build
npm run build

# 2. Copy 'dist' folder to web server
# 3. Serve the files from your host

# Optional: test production build locally
npm run preview
```

The `dist` folder contains everything needed for deployment.

---

## Next Steps

1. ✅ Install Node.js if needed
2. ✅ Navigate to `java-ipa-prep` folder
3. ✅ Run `npm install`
4. ✅ Run `npm run dev`
5. ✅ Open browser to http://localhost:5173
6. ✅ Start learning!

---

## Support & Documentation

- **Full README**: See `java-ipa-prep/README.md`
- **Project Summary**: See `PROJECT_SUMMARY.md`
- **Browser Console**: F12 key shows any errors
- **Questions Source**: https://github.com/Arijit-SE/Java-Solutions-TCS-IPA-Questions

---

## Quick Reference

```bash
# If you get stuck:

# 1. Check Node.js is installed
node --version

# 2. Install dependencies
npm install

# 3. Start server
npm run dev

# 4. Clear cache and reinstall
cd java-ipa-prep
rm -rf node_modules
npm install
npm run dev
```

---

**Ready? Start learning! 🎓📚**

```bash
cd java-ipa-prep && npm install && npm run dev
```

Then open http://localhost:5173

Happy Learning! 🚀
