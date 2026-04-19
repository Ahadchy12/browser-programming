# Lecture 04 – Responsive Portfolio with JavaScript

## What I implemented this lecture
- ✅ External JavaScript file (script.js) linked at the end of body
- ✅ Console.log messages (page loaded, theme change, click count)
- ✅ Variables (let/const): isDarkMode, clickCount, DOM elements
- ✅ Functions: setTheme(), showGreeting(), updateClickCounter()
- ✅ Event handlers: theme toggle click, counter button click, contact button click
- ✅ State variables: isDarkMode (theme state), clickCount (counter state)

## Two Features Implemented

### Feature A: Theme Toggle (Dark/Light Mode)
**Description:** A button in the header that toggles between light and dark mode themes across the entire portfolio.

**How to test:**
1. Look for the button in the top-right corner of the page (or at the top on mobile)
2. Click the "🌙 Dark Mode" button
3. The page colors should change to dark theme
4. The button text changes to "☀️ Light Mode"
5. Click again to return to light mode
6. Check the browser console (F12) to see console.log messages when theme changes

### Feature B: Click Counter
**Description:** A button that counts how many times it has been clicked, displaying the number and logging it to console.

**How to test:**
1. Scroll down to the "Interactive Features" section
2. Find the "Click Counter" card with the "Click Me!" button
3. Click the button multiple times
4. Watch the number increase next to "Click count:"
5. Open browser console (F12) to see each click being logged with the current count
6. Special console messages appear at 5, 10, and 20 clicks

### Extra Feature C: Contact Quick Action (Bonus)
**Description:** A button that shows an alert with contact information (email, LinkedIn, GitHub) and a personalized greeting based on time of day.

**How to test:**
1. Scroll to the "Interactive Features" section
2. Find the "Quick Contact" card with the "Show Contact Info" button
3. Click the button
4. An alert popup will appear showing contact information with a greeting (Good morning/afternoon/evening)
5. Check console to see "Contact info displayed to user" message

## JavaScript Requirements Checklist
- ✅ **3+ console.log() messages** - Page load, theme changes, click counts
- ✅ **2+ variables** - isDarkMode (let), clickCount (let), plus const for DOM elements
- ✅ **2+ functions** - setTheme(), showGreeting(), updateClickCounter()
- ✅ **2+ event handlers** - click events on theme toggle, counter button, contact button
- ✅ **1+ state variable** - isDarkMode AND clickCount (both track state)

## Console Log Examples
Open browser console (F12 → Console tab) to see:
- "🚀 Page loaded successfully! Portfolio is ready."
- "🌙 Theme changed to DARK mode" (when toggling theme)
- "🖱️ Button clicked! Total clicks: X" (when clicking counter)
- "📧 Contact info displayed to user" (when clicking contact button)
- "🎉 You've clicked 5 times! Keep going!" (milestone messages)

## One thing I struggled with
Understanding how to properly manage state between different JavaScript functions and ensuring the DOM updates correctly when state changes. The theme toggle required careful CSS variable management and transition effects to work smoothly.

## One improvement I want to do next
Add localStorage to save the user's theme preference so it persists across page reloads. Also want to add animation effects when the click counter reaches certain milestones.
