// ============================================
// Lecture 05 - Portfolio with Skills, Projects & API Integration
// Features: Theme toggle, localStorage persistence, Last updated, API Data Fetching
// ============================================

// ============================================
// API INTEGRATION (NEW REQUIREMENT)
// Using async/await, fetch(), try/catch, response.ok
// ============================================

// Why do we use async/await?
// Answer: async/await makes asynchronous code look and behave like synchronous code,
// making it easier to read, write, and debug. Instead of chaining .then() callbacks,
// we can write code that reads top-to-bottom, which is especially helpful when
// dealing with multiple API calls or complex data processing.

// Why do we check response.ok?
// Answer: response.ok checks if the HTTP request was successful (status code 200-299).
// Even if the server returns a response, it might be an error like 404 (Not Found)
// or 500 (Server Error). Checking response.ok ensures we only try to parse the JSON
// data when we actually received a valid response, preventing errors and allowing
// us to show meaningful error messages to users.

// Why do we use try/catch?
// Answer: try/catch allows us to handle errors gracefully without crashing the entire
// application. Network requests can fail for many reasons (no internet connection,
// server down, timeout, etc.). By wrapping our async code in try/catch, we can catch
// these errors and display user-friendly messages instead of having the console show
// cryptic error messages that break the page functionality.

// Function to fetch user data from API
async function fetchUserData() {
    const apiDisplay = document.getElementById('apiDataDisplay');
    
    // Show loading message while fetching
    apiDisplay.innerHTML = '<div class="loading-message">⏳ Loading...</div>';
    
    try {
        // Fetch data from the API endpoint
        const response = await fetch('https://jsonplaceholder.typicode.com/users/1');
        
        // Check if the response was successful (status code 200-299)
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        
        // Parse the JSON data from the response
        const userData = await response.json();
        
        // Display the data on the page
        displayUserData(userData);
        
        console.log('✅ API data loaded successfully:', userData);
        
    } catch (error) {
        // Handle any errors that occurred during the fetch
        console.error('❌ Error fetching data:', error);
        
        // Display error message to user
        apiDisplay.innerHTML = '<div class="error-message">❌ Error loading data. Please try again later.</div>';
    }
}

// Function to display user data in the DOM
function displayUserData(user) {
    const apiDisplay = document.getElementById('apiDataDisplay');
    
    // Create HTML structure to display user information
    const userHTML = `
        <div class="user-card">
            <h3>👤 User Information</h3>
            <div class="user-info">
                <p><strong>📛 Name:</strong> ${escapeHtml(user.name)}</p>
                <p><strong>📧 Email:</strong> <a href="mailto:${user.email}" style="color: var(--link-color);">${user.email}</a></p>
                <p><strong>🏢 Company:</strong> ${escapeHtml(user.company.name)}</p>
                <p><strong>💼 Company Catchphrase:</strong> "${escapeHtml(user.company.catchPhrase)}"</p>
                <p><strong>🔗 Website:</strong> <a href="https://${user.website}" target="_blank" style="color: var(--link-color);">${user.website}</a></p>
                <p><strong>📍 Address:</strong> ${escapeHtml(user.address.street)}, ${escapeHtml(user.address.suite)}, ${escapeHtml(user.address.city)}</p>
            </div>
        </div>
    `;
    
    apiDisplay.innerHTML = userHTML;
}

// Helper function to prevent XSS attacks by escaping HTML special characters
function escapeHtml(str) {
    if (!str) return '';
    const div = document.createElement('div');
    div.textContent = str;
    return div.innerHTML;
}

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

// API Load Data button event listener
const loadDataBtn = document.getElementById('loadDataBtn');
if (loadDataBtn) {
    loadDataBtn.addEventListener('click', fetchUserData);
    console.log('✅ API load data button event handler attached');
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
console.log('   ✅ API Integration with async/await, fetch(), try/catch');
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
