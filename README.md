# AFL Stats Matcher - 2026 Season

Match your AFL playing statistics with professional players! Compares your per-game averages against 50+ real AFL players from the 2025 season.


## 🎯 Features

- ✅ **50+ Real AFL Players** - 2025 season stats
- ✅ **11 Statistical Categories** - Disposals, Kicks, Handballs, Marks, Tackles, Goals, Behinds, Clearances, Inside 50s, Contested/Uncontested Possessions
- ✅ **18 AFL Positions** - From Full Forward to Ruck to Centre
- ✅ **Smart Matching Algorithm** - Weighted similarity scoring with position bonuses
- ✅ **Instant Results** - No API, no backend, 100% browser-based
- ✅ **Beautiful UI** - Retro AFL scoreboard aesthetic with animations
- ✅ **Social Sharing** - Twitter, Facebook, WhatsApp, SMS, and more

## 📦 Two Versions Available

### Version 1: Single File (Easiest)
**File:** `index-single-file.html`

**Pros:**
- One file = super easy deployment
- Just upload to GitHub Pages and go
- Perfect for quick setup

**Cons:**
- Harder to update player data
- All code in one file

**Use when:** You want the simplest possible deployment

---

### Version 2: Modular (Recommended)
**Folder:** `afl-modular/`
- `index.html` - Main HTML file
- `afl-data.js` - Player database & matching logic
- `app.jsx` - React component

**Pros:**
- Easy to update player stats (just edit `afl-data.js`)
- Clean separation of concerns
- Easier to maintain

**Cons:**
- 3 files instead of 1
- Must preserve folder structure

**Use when:** You plan to update player data regularly

## 🚀 Deployment

### Option A: GitHub Pages (Free!)

1. Create a new repository on GitHub
2. Choose your version:
   - **Single File:** Upload `index-single-file.html` and rename it to `index.html`
   - **Modular:** Upload all 3 files from `afl-modular/` folder
3. Go to Settings → Pages
4. Source: Deploy from branch `main` / `root`
5. Visit `https://your-username.github.io/your-repo-name/`

### Option B: Local Testing

**Single File:**
```bash
# Just open in browser
open index-single-file.html
```

**Modular:**
```bash
# Must use a local server (due to CORS)
cd afl-modular
python3 -m http.server 8000
# Visit http://localhost:8000
```

## 📊 How It Works

### Matching Algorithm

1. **Input Validation** - Requires minimum 3 stats
2. **Similarity Calculation**:
   - Compares each stat using percentage difference
   - Weighted by importance (Goals: 2.5x, Disposals: 3x, etc.)
   - Position bonus: +15% if positions match
3. **Scoring** - Returns 0-100% match score
4. **Results** - Top 5 best matches displayed

### Stat Weights
```javascript
{
  disposals: 3,           // Highest weight
  goals: 2.5,             // Key offensive stat
  kicks: 2,
  handballs: 2,
  marks: 2,
  tackles: 2,
  clearances: 2,
  inside50s: 1.5,
  contestedPossessions: 2,
  uncontestedPossessions: 1.5,
  behinds: 1              // Lowest weight
}
```

## 🔧 Updating Player Data (Modular Version Only)

Edit `afl-data.js`:

```javascript
// Add a new player
{
  name: "New Player",
  team: "Team Name",
  position: "Centre",
  stats: {
    disposals: 28.5,
    kicks: 18.2,
    handballs: 10.3,
    // ... all 11 stats
  }
}
```

## 🎨 Customization

### Change Colors
Edit the CSS variables in `app.jsx` or single file:
```css
:root {
  --primary: #D32F2F;    /* Red */
  --secondary: #FF6F00;  /* Orange */
  --accent: #FFA000;     /* Yellow */
}
```

### Add More Players
Modular version: Edit `afl-data.js`
Single file: Find the `AFL_PLAYERS` array

### Modify Matching Logic
Look for the `calculateSimilarity()` function in:
- Modular: `afl-data.js`
- Single: Inside `<script>` tag

## 📱 Browser Compatibility

- ✅ Chrome/Edge (87+)
- ✅ Firefox (78+)
- ✅ Safari (14+)
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)

## 🐛 Troubleshooting

**Blank page?**
- Check browser console for errors
- Make sure all CDN scripts loaded (React, Lucide, Tailwind)
- For modular version, must use local server or GitHub Pages

**Players not matching?**
- Enter at least 3 stats
- Check console for JavaScript errors
- Verify `afl-data.js` loaded (modular version)

**Sharing not working?**
- Native share: Only works on mobile/some desktops
- Use platform-specific buttons as fallback
- Copy to clipboard always works

## 📈 Next Steps

Planning to add:
- 🏀 Basketball stats matcher
- 🏏 Cricket stats matcher
- 📊 More detailed analytics
- 💾 Save/load your stats
- 📈 Historical comparisons

## 🙏 Credits

- **Player Data**: 2024 AFL season averages
- **Design**: Chris O'Malley (@4rs3nls)
- **Framework**: React 18
- **Styling**: Tailwind CSS
- **Icons**: Lucide React

## 📄 License

Free to use and modify. If you use this, a credit/link back would be appreciated!

---

**Made with ❤️ for AFL fans**
