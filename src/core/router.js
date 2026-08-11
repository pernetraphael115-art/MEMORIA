/* ============================================
   MÉMORÍA — SPA Router
   ============================================ */

const routes = {};
let currentRoute = null;
let appContainer = null;

/**
 * Register a route
 */
export function route(path, handler) {
  routes[path] = handler;
}

/**
 * Navigate to a route
 */
export function navigate(path, params = {}) {
  window.history.pushState({ path, params }, '', `#${path}`);
  renderRoute(path, params);
}

/**
 * Go back
 */
export function goBack() {
  window.history.back();
}

/**
 * Get current route info
 */
export function getCurrentRoute() {
  return currentRoute;
}

/**
 * Render a route
 */
async function renderRoute(path, params = {}) {
  const handler = routes[path];
  
  if (!handler) {
    console.warn(`Route not found: ${path}`);
    navigate('/');
    return;
  }
  
  currentRoute = { path, params };
  
  if (!appContainer) {
    appContainer = document.getElementById('app');
  }
  
  // Create page container
  const pageEl = document.createElement('div');
  pageEl.className = 'page page-enter';
  pageEl.id = `page-${path.replace(/\//g, '-')}`;
  
  // Get the existing page content area (keep nav)
  const existingPage = appContainer.querySelector('.page');
  
  // Render the page content
  const content = await handler(params);
  
  if (typeof content === 'string') {
    pageEl.innerHTML = content;
  } else if (content instanceof HTMLElement) {
    pageEl.appendChild(content);
  }
  
  // Replace old page
  if (existingPage) {
    existingPage.replaceWith(pageEl);
  } else {
    // First render: insert before nav
    const nav = appContainer.querySelector('.bottom-nav');
    if (nav) {
      appContainer.insertBefore(pageEl, nav);
    } else {
      appContainer.appendChild(pageEl);
    }
  }
  
  // Update active nav
  updateNav(path);
  
  // Scroll to top
  window.scrollTo(0, 0);
}

/**
 * Update active state in bottom nav
 */
function updateNav(path) {
  const navItems = document.querySelectorAll('.nav-item');
  const mainPath = '/' + (path.split('/')[1] || '');
  
  navItems.forEach(item => {
    const itemPath = item.dataset.path;
    item.classList.toggle('active', itemPath === mainPath || 
      (mainPath === '/' && itemPath === '/'));
  });
}

/**
 * Initialize router — listen for popstate
 */
export function initRouter() {
  window.addEventListener('popstate', (e) => {
    if (e.state && e.state.path) {
      renderRoute(e.state.path, e.state.params || {});
    } else {
      const hash = window.location.hash.slice(1) || '/';
      renderRoute(hash);
    }
  });
  
  // Handle initial route
  const hash = window.location.hash.slice(1) || '/';
  navigate(hash);
}
