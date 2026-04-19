
# Lecture 05 – Portfolio with Skills, Projects, Theme Toggle & API Integration

## What I implemented this lecture

### ✅ 1. Skills Section
- Added "Skills" section with 6 skills displayed as interactive cards
- Skills: HTML5, CSS3, JavaScript, Python, IoT, LTspice
- Each card has icon, title, and description
- Hover effects and responsive grid layout

### ✅ 2. Projects Section
- Added "Projects" section with 3 projects
- Each project includes: title, description, and GitHub link
- Projects: Smart Home IoT Dashboard, Personal Portfolio Website, Weather Forecast App
- Card layout with hover animations

### ✅ 3. Theme Toggle Button
- Button with text "Toggle Theme" in header
- Changes between Light and Dark mode when clicked
- Uses state variable `isDark` in script.js
- Updates UI using `classList.add/remove('dark')` on body

### ✅ 4. Save Theme Choice (localStorage)
- Theme preference saved to localStorage with key `portfolio_theme`
- On page load, reads from localStorage and applies saved theme
- Falls back to system preference if no saved theme exists

### ✅ 5. Last Updated Text
- Shows "Last updated: YYYY-MM-DD at HH:MM" at page bottom
- Generated automatically with JavaScript using `new Date()`
- Updates when page loads (not hardcoded)

### ✅ 6. External Data Demo (API Integration)
- New section "External Data Demo" with "Load Data" button
- Fetches data from `https://jsonplaceholder.typicode.com/users/1`
- Uses `async/await`, `fetch()`, `try/catch`, and `response.ok` check
- Displays: Name, Email, Company name
- Shows "Loading..." message while fetching
- Shows "Error loading data" if something goes wrong
- Includes code comments explaining why we use async/await, response.ok, and try/catch

## How to Test

1. **Skills Section**: Scroll to see 6 skill cards, click any to see console log
2. **Projects Section**: Scroll to see 3 projects, click GitHub links (open in new tab)
3. **Theme Toggle**: Click "Toggle Theme" button → page changes colors, refresh to see persistence
4. **localStorage**: Open DevTools (F12) → Application → Local Storage → see `portfolio_theme` key
5. **Last Updated**: Scroll to bottom, see current date/time
6. **API Integration**: 
   - Scroll to "External Data Demo" section
   - Click "Load Data" button
   - Watch for "Loading..." message
   - See user data appear (Name, Email, Company)
   - Try disconnecting internet to see error handling

## API Features Demonstrated
- ✅ async/await for cleaner asynchronous code
- ✅ fetch() to make HTTP request
- ✅ try/catch for error handling
- ✅ response.ok check for HTTP status validation
- ✅ Dynamic DOM updates
- ✅ Loading states
- ✅ Error messages

## Code Comments Included
The JavaScript file includes comments answering:
- Why do we use async/await?
- Why do we check response.ok?
- Why do we use try/catch?

## File Structure
