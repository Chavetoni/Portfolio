/**
 * Smooth scrolls to a specific element on the page
 * 
 * @param {string} elementId - The ID of the element to scroll to
 * @param {Object} options - Scroll options
 * @param {string} options.behavior - Scroll behavior ('auto', 'smooth')
 * @param {number} options.offset - Offset from the top in pixels
 * @returns {boolean} - True if the element was found and scrolled to, false otherwise
 */
export const scrollToElement = (elementId, options = {}) => {
  const { behavior = 'smooth', offset = 0 } = options;
  const element = document.getElementById(elementId);
  
  if (element) {
    const elementPosition = element.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - offset;
    
    window.scrollTo({
      top: offsetPosition,
      behavior,
    });
    
    return true;
  }
  
  return false;
};

/**
 * Gets the current active section based on scroll position
 * 
 * @param {string[]} sectionIds - Array of section IDs to check
 * @param {number} offset - Offset from the top to consider a section "active"
 * @returns {string|null} - ID of the active section or null if none found
 */
export const getActiveSection = (sectionIds = [], offset = 150) => {
  if (!sectionIds.length) return null;
  
  // Default to first section
  let activeSection = sectionIds[0];
  
  // Check each section's position
  for (const id of sectionIds) {
    const element = document.getElementById(id);
    if (element) {
      const rect = element.getBoundingClientRect();
      // If section is in view (top is at or above offset, and bottom is below offset)
      if (rect.top <= offset && rect.bottom >= offset) {
        activeSection = id;
        break;
      }
    }
  }
  
  return activeSection;
};

/**
 * Checks if an element is in the viewport
 * 
 * @param {HTMLElement} element - Element to check
 * @param {number} offset - Optional offset
 * @returns {boolean} - True if element is in viewport
 */
export const isElementInViewport = (element, offset = 0) => {
  if (!element) return false;
  
  const rect = element.getBoundingClientRect();
  
  return (
    rect.top <= (window.innerHeight || document.documentElement.clientHeight) + offset &&
    rect.bottom >= 0 - offset &&
    rect.left <= (window.innerWidth || document.documentElement.clientWidth) + offset &&
    rect.right >= 0 - offset
  );
};