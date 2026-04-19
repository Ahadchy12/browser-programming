// ============================================
// Lecture 04 - JavaScript Basics
// Console messages, variables, functions, events, state
// ============================================

// CONSOLE LOG #1: Page loaded message
console.log("🚀 Page loaded successfully! Portfolio is ready.");

// STATE VARIABLE (Feature A)
let isDarkMode = false;  // Track theme state

// STATE VARIABLE (Feature B)
let clickCount = 0;  // Track click counter state

// CONSTANT variables for DOM elements
const themeToggleBtn = document.getElementById('themeToggle');
const clickButton = document.getElementById('clickButton');
const contactButton = document.getElementById('contactButton');
const clickCountDisplay = document.getElementById('clickCount');

// ============================================
// FUNCTION 1: Theme toggle functionality
// ============================================
function setTheme() {
    // Toggle the dark-mode class on body
    document.body.classList.toggle('dark-mode');
    
    // Update state variable
    isDarkMode = document.body.classList.contains('dark-mode');
    
    // Update button text based on theme
    if (isDarkMode) {
        themeToggleBtn.textContent = '☀️ Light Mode';
        console.log("🌙 Theme changed to DARK mode");
    } else {
        themeToggleBtn.textContent = '🌙 Dark Mode';
        console.log("☀️ Theme changed to LIGHT mode");
    }
    
    // CONSOLE LOG #2: Current theme state
    console.log(`Current theme state: ${isDarkMode ? 'Dark' : 'Light'} mode`);
}

// ============================================
// FUNCTION 2: Show greeting/contact info
// ============================================
function showGreeting() {
    const currentHour = new Date().getHours();
    let greeting = '';
    
    if (currentHour < 12) {
        greeting = 'Good morning';
    } else if (currentHour < 18) {
        greeting = 'Good afternoon';
    } else {
        greeting = 'Good evening';
    }
    
    // Show contact info with greeting
    const contactMessage = `${greeting}! 👋\n\n📧 Email: ahad.chy@example.com\n🔗 LinkedIn: linkedin.com/in/abul-ahad-chy\n💻 GitHub: github.com/Ahadchy12\n\nFeel free to connect with me!`;
    
    alert(contactMessage);
    console.log("📧 Contact info displayed to user");
}

// ============================================
// FUNCTION 3: Update click counter
// ============================================
function updateClickCounter() {
    // Increment the state variable
    clickCount++;
    
    // Update the display
    if (clickCountDisplay) {
        clickCountDisplay.textContent = clickCount;
    }
    
    // CONSOLE LOG #3: Current click count
    console.log(`🖱️ Button clicked! Total clicks: ${clickCount}`);
    
    // Optional: Add special message at certain milestones
    if (clickCount === 5) {
        console.log("🎉 You've clicked 5 times! Keep going!");
    } else if (clickCount === 10) {
        console.log("🌟 Wow! 10 clicks! You're on fire!");
    } else if (clickCount === 20) {
        console.log("💪 20 clicks! You're a clicking champion!");
    }
}

// ============================================
// EVENT HANDLERS (at least 2)
// ============================================

// EVENT 1: Theme toggle button click
if (themeToggleBtn) {
    themeToggleBtn.addEventListener('click', setTheme);
    console.log("✅ Theme toggle event handler attached");
}

// EVENT 2: Click counter button click
if (clickButton) {
    clickButton.addEventListener('click', updateClickCounter);
    console.log("✅ Click counter event handler attached");
}

// EVENT 3 (Extra): Contact button click
if (contactButton) {
    contactButton.addEventListener('click', showGreeting);
    console.log("✅ Contact button event handler attached");
}

// ============================================
// Additional initialization
// ============================================
console.log("🎯 JavaScript initialized with:");
console.log(`   - Theme state: ${isDarkMode ? 'Dark' : 'Light'}`);
console.log(`   - Click count: ${clickCount}`);
console.log(`   - Features: Theme Toggle + Click Counter + Contact Action`);

// Optional: Add keyboard shortcut for theme toggle (Ctrl/Cmd + T)
document.addEventListener('keydown', function(event) {
    if ((event.ctrlKey || event.metaKey) && event.key === 't') {
        event.preventDefault();
        setTheme();
        console.log("⌨️ Theme toggled via keyboard shortcut (Ctrl+T)");
    }
});

// Optional: Log when page visibility changes (just for fun)
document.addEventListener('visibilitychange', function() {
    if (document.hidden) {
        console.log("👋 Page hidden - user switched tabs");
    } else {
        console.log("👀 Page visible again - welcome back!");
    }
});
