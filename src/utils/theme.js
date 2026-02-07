export const theme = {
  // Theme toggle logic
  init() {
    // Check for saved theme or prefer-color-scheme
    const savedTheme = localStorage.getItem('theme') || 
                      (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
    
    // Apply theme
    document.documentElement.classList.toggle('dark', savedTheme === 'dark');
    localStorage.setItem('theme', savedTheme);
    
    return savedTheme;
  },
  
  toggle() {
    const isDark = document.documentElement.classList.toggle('dark');
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
    return isDark ? 'dark' : 'light';
  },
  
  get() {
    return localStorage.getItem('theme') || 
           (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
  }
};