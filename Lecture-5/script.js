// ============================================
// Lecture 05 - Portfolio with Skills, Projects & Theme Toggle
// Features: Theme toggle, localStorage persistence, Last updated
// ============================================

// ============================================
// REQUIREMENT 3 & 4: Theme Toggle with localStorage
// ============================================

// State variable for theme (Requirement 3)
let isDark = false;

// Get the theme toggle button
const themeToggleBtn = document.getElementById('themeToggle');

// Function to apply theme based on isDark state
function applyTheme() {
    if (isDark) {
        document.body.classList.add('dark');
        if (themeToggleBtn) {
            themeToggleBtn.textContent = '☀️ Light Mode';
        }
        console.log('🌙 Dark mode applied');
    } else {
        document.body.classList.remove('dark');
        if (themeToggleBtn) {
            themeToggleBtn.textContent = '🌙 Dark Mode';
        }
        console.log('☀️ Light mode applied');
    }
}

// Function to toggle theme (Requirement 3)
function toggleTheme() {
    // Toggle the state variable
    isDark = !isDark;
    
    // Apply the theme
    applyTheme();
    
    // Save to localStorage (Requirement 4)
    localStorage.setItem('portfolio_theme', isDark ? 'dark' : 'light');
    
    console.log(`Theme toggled to ${isDark ? 'dark' : 'light'} mode and saved to localStorage`);
}

// Load theme from localStorage on page load (Requirement 4)
function loadThemeFromStorage() {
    const savedTheme = localStorage.getItem('portfolio_theme');
    
    if (savedTheme === 'dark') {
        isDark = true;
    } else if (savedTheme === 'light') {
        isDark = false;
    } else {
        // Check for system preference if no saved theme
        const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        isDark = prefersDark;
        console.log(`No saved theme, using system preference: ${isDark ? 'dark' : 'light'} mode`);
    }
    
    applyTheme();
    console.log(`Theme loaded from localStorage: ${isDark ? 'dark' : 'light'} mode`);
}

// ============================================
// REQUIREMENT 5: Last Updated Text (DOM)
// ============================================

function updateLastUpdated() {
    const lastUpdatedElement = document.getElementById('lastUpdated');
    
    if (lastUpdatedElement) {
        // Get current date
        const now = new Date();
        
        // Format: YYYY-MM-DD
        const year = now.getFullYear();
        const month = String(now.getMonth() + 1).padStart(2, '0');
        const day = String(now.getDate()).padStart(2, '0');
        
        const formattedDate = `${year}-${month}-${day}`;
        
        // Also get current time for extra detail
        const hours = String(now.getHours()).padStart(2, '0');
        const minutes = String(now.getMinutes()).padStart(2, '0');
        
        // Set the text
        lastUpdatedElement.textContent = `📅 Last updated: ${formattedDate} at ${hours}:${minutes}`;
        
        console.log(`Last updated set to: ${formattedDate} ${hours}:${minutes}`);
    }
}

// ============================================
// Additional Interactive Features (Bonus)
// ============================================

// Add click tracking for skills (console logging)
function addCardInteractivity() {
    const skillCards = document.querySelectorAll('.skill-card');
    const projectCards = document.querySelectorAll('.project-card');
    
    skillCards.forEach((card) => {
        card.addEventListener('click', () => {
            const skillName = card.querySelector('h3')?.textContent || 'Unknown skill';
            console.log(`📚 Skill clicked: ${skillName}`);
        });
    });
    
    projectCards.forEach((card) => {
        card.addEventListener('click', (e) => {
            // Don't trigger if clicking on the link itself
            if (e.target.classList.contains('project-link')) return;
            
            const projectTitle = card.querySelector('h3')?.textContent || 'Unknown project';
            console.log(`📁 Project clicked: ${projectTitle}`);
        });
    });
}

// ============================================
// Event Listeners
// ============================================

// Theme toggle button event listener (Requirement 3)
if (themeToggleBtn) {
    themeToggleBtn.addEventListener('click', toggleTheme);
    console.log('✅ Theme toggle button event handler attached');
}

// ============================================
// Initialization on page load
// ============================================

// Load theme from localStorage when page loads
loadThemeFromStorage();

// Update the last updated text
updateLastUpdated();

// Add interactivity to cards
addCardInteractivity();

// Log all initialized features
console.log('🚀 Page fully loaded with features:');
console.log('   ✅ Skills section with 6 skills (cards layout)');
console.log('   ✅ Projects section with 3 projects (cards layout)');
console.log('   ✅ Theme toggle button with state variable');
console.log('   ✅ localStorage persistence (portfolio_theme)');
console.log('   ✅ Last updated text (auto-generated with current date)');
console.log('   ✅ All requirements completed successfully!');

// Optional: Listen for system theme changes
window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
    if (!localStorage.getItem('portfolio_theme')) {
        // Only apply if user hasn't manually set a preference
        isDark = e.matches;
        applyTheme();
        console.log(`System theme changed to ${isDark ? 'dark' : 'light'} mode`);
    }
});
