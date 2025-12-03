# Technical Specifications - Yalda Fortune Wheel Redesign

## Project Structure

```
hafez-fortune-wheel-v2/
├── index.html                 # Main HTML document
├── styles.css                 # Comprehensive styling (1275 lines)
├── script.js                  # JavaScript functionality
├── poems.js                   # Hafez poetry database
├── REDESIGN_SUMMARY.md        # Design overview
├── FEATURE_GUIDE.md           # User guide
└── TECH_SPECS.md             # This file
```

---

## HTML Structure

### Sections
1. **Header** - Luxury introduction with dual language
2. **Yalda Night** - History and significance
3. **Traditions** - Six sacred rituals
4. **Hafez & Faal** - Poetry and divination
5. **Night's Wisdom Game** - Interactive memory game
6. **Fortune Wheel** - Spin for guidance
7. **Footer** - Copyright and info

### Key Elements
- Navigation Bar (sticky)
- Persian ornamental corners
- Glassmorphic cards
- Canvas wheel
- Interactive game board

---

## CSS Architecture

### Variables (20 color variables)
```css
--primary-dark: #0a0e1f
--primary-purple: #5d3a84
--accent-gold: #d4af37
--accent-light-gold: #f0d96a
--accent-red: #c41e3a
--accent-burgundy: #8b0000
--accent-blue: #1e3a8a
--text-light: #f0f0f0
--text-muted: #a0a0a0
--pomegranate: #dc2626
--midnight: #0f172a
```

### Components
- Background & animations (100 lines)
- Navigation (50 lines)
- Header (150 lines)
- Sections (400 lines)
- Game section (150 lines)
- Wheel section (200 lines)
- Footer (100 lines)
- Animations (50 lines)
- Responsive design (175 lines)

### Keyframe Animations
- `float` - Floating elements
- `titleGlow` - Glowing title effect
- `backgroundPulse` - Subtle background pulse
- `gradientShift` - Gradient movement
- `twinkle` - Star twinkling
- `iconBounce` - Icon bounce effect

---

## JavaScript Implementation

### Classes

#### MemoryGame
```javascript
class MemoryGame {
  constructor(boardId, resetBtnId, matchesId, movesId)
  init()           // Initialize/reset game
  flipCard()       // Handle card flip
  checkMatch()     // Check if cards match
  updateDisplay()  // Update statistics
}
```

**Properties:**
- `board` - DOM element for game board
- `resetBtn` - Reset button element
- `matchesDisplay` - Matches display element
- `movesDisplay` - Moves display element
- `cards` - Array of card elements
- `flipped` - Currently flipped cards
- `matched` - Number of matched pairs
- `moves` - Move counter

**Methods:**
- `init()` - Setup game, shuffle cards
- `flipCard(card)` - Flip a card and reveal
- `checkMatch()` - Compare two cards
- `updateDisplay()` - Refresh UI

#### FortuneWheel
```javascript
class FortuneWheel {
  constructor(canvasId, spellText)
  setupCanvas()        // Setup canvas
  drawWheel()          // Draw wheel segments
  generateColors()     // Generate segment colors
  spin()              // Start wheel spin
  animateSpin()       // Animate spin with easing
  displayFortune()    // Show fortune result
  playSound()         // Play audio chime
  attachEventListeners() // Setup listeners
  handleResize()      // Handle window resize
}
```

### Game Data

#### Card Pairs (6 pairs, 12 total)
```javascript
[
  { emoji: '🌙', label: 'Moon' },
  { emoji: '🍇', label: 'Grapes' },
  { emoji: '🕯️', label: 'Candle' },
  { emoji: '🍎', label: 'Pomegranate' },
  { emoji: '❤️', label: 'Love' },
  { emoji: '⭐', label: 'Star' }
]
```

#### Yalda Icons (12 icons for wheel)
```javascript
[
  { symbol: '🌙', rotation: 0 },
  { symbol: '🍇', rotation: 15 },
  { symbol: '🕯️', rotation: 0 },
  // ... etc
]
```

### Event Listeners
- `DOMContentLoaded` - Initialize both games
- `click` - Game card clicks
- `click` - Spin button
- `click` - Navigation links
- `resize` - Window resize for canvas

---

## Responsive Breakpoints

### Desktop (1024px+)
- 4-column grids
- Full side-by-side layouts
- Large font sizes
- Full ornament visibility

### Tablet (768px - 1023px)
- 2-3 column grids
- Adjusted spacing
- Medium font sizes
- Scaled ornaments

### Mobile (480px - 767px)
- Stacked single column
- 2x3 game grid
- Reduced padding
- Touch-optimized buttons

### Small Mobile (<480px)
- Maximum readability
- 2x6 game grid
- Minimal padding
- Large touch targets

---

## Performance Metrics

### File Sizes
- `index.html` - ~315 lines
- `styles.css` - ~1,275 lines
- `script.js` - ~359 lines
- `poems.js` - ~615 lines (unchanged)

### Load Optimization
- CSS variables for efficient repainting
- Hardware-accelerated animations
- Minimal DOM manipulation
- Efficient event delegation

### Animation Performance
- GPU-accelerated transforms
- `will-change` CSS for optimization
- Smooth 60fps animations
- RequestAnimationFrame for wheel spin

---

## Accessibility Features

### WCAG Compliance
- ✅ Semantic HTML structure
- ✅ High contrast ratios
- ✅ Clear link targets
- ✅ Keyboard navigation
- ✅ Touch-friendly (48px+ targets)

### Features
- Smooth scroll navigation
- Clear labeling
- Readable fonts
- Adequate spacing
- Color + pattern distinction

---

## Browser Support

### Tested On
- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+
- Mobile Safari (iOS 14+)
- Chrome Mobile

### Technology Stack
- HTML5
- CSS3 (Grid, Flexbox, Custom Properties)
- ES6 JavaScript
- Canvas API
- Web Audio API (optional)

---

## CSS Features Used

### Modern CSS
- CSS Grid
- Flexbox
- CSS Variables
- CSS Gradients
- CSS Animations
- CSS Transforms
- Backdrop Filters
- Box Shadow

### Responsive Techniques
- Mobile-first design
- Media queries
- Flexible grid layouts
- Scalable typography
- Touch-optimized interactions

---

## Animation Details

### Ornament Float
```
Duration: 4-5.5s
Timing: ease-in-out
Transform: translateY(-15px) rotate(3deg)
```

### Title Glow
```
Duration: 3s
Timing: ease-in-out
Effect: Text shadow pulse
```

### Card Hover
```
Duration: 0.4s
Timing: cubic-bezier(0.34, 1.56, 0.64, 1)
Transform: translateY(-12px) scale(1.05)
```

### Game Card Flip
```
Duration: 0.3-0.6s
Timing: ease
Effect: Background + text change
```

### Wheel Spin
```
Duration: 3.5s
Timing: ease-out cubic (1 - (1-t)³)
Rotation: 5+ full rotations
```

---

## Security Considerations

### Client-Side Only
- No server required
- No user data collection
- No external API calls
- All data processed locally

### Safe Practices
- No inline scripts
- Proper DOM manipulation
- Input validation for game
- No eval() or dynamic code

---

## Customization Guide

### Color Scheme
Edit CSS root variables:
```css
:root {
  --accent-gold: #d4af37;
  --accent-red: #c41e3a;
  /* etc... */
}
```

### Game Cards
Edit `gameCardPairs` in `script.js`:
```javascript
const gameCardPairs = [
  { emoji: '🌙', label: 'Moon' },
  // Add more pairs...
];
```

### Animations
Adjust keyframes and durations:
```css
@keyframes float {
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-15px); }
}
```

### Sections
Add/remove sections in `index.html` and corresponding CSS.

---

## Testing Checklist

- [x] All links navigate correctly
- [x] Game board initializes
- [x] Cards flip on click
- [x] Matches are detected
- [x] Statistics update
- [x] Reset works
- [x] Wheel spins
- [x] Fortune displays
- [x] Responsive on all sizes
- [x] No JavaScript errors
- [x] Smooth animations
- [x] Accessibility features

---

## Future Enhancement Ideas

### Gameplay
- Difficulty levels (easy/hard)
- Leaderboard system
- Sound effects
- Combo counter
- Time challenge mode

### Content
- More poems in wheel
- Poet biographies
- Audio pronunciation
- Video tutorials
- Persian history lessons

### Design
- Theme variations (seasonal)
- Dark/light mode toggle
- Custom animations
- Particle effects
- Parallax scrolling

### Features
- Save game progress
- Share results
- Multiplayer game
- Social integration
- Mobile app version

---

## Maintenance Notes

### Regular Updates
- Monitor browser compatibility
- Test on new devices
- Update dependencies (if any)
- Refresh content seasonally

### Performance
- Monitor load times
- Check animation performance
- Profile memory usage
- Optimize where needed

### Accessibility
- Regular WCAG audits
- User testing
- Screen reader testing
- Keyboard navigation verification

---

## Version History

### v2.0 - Luxury Redesign (Current)
- Complete design overhaul
- Added memory game
- Enhanced animations
- Improved typography
- Better accessibility
- Responsive optimization

### v1.0 - Original (Previous)
- Basic wheel functionality
- Simple styling
- Fixed layout

---

*Last Updated: December 3, 2025*
*Design by: Mahya Eslami*
*Celebrating the majesty of Yalda Night*
