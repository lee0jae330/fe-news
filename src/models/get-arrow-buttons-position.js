/**
 *
 * @param {number} currentPage
 * @param {number} totalPage
 * @returns {'left' | 'right' | 'both' | 'none'}
 */
export const getArrowButtonPosition = (currentPage, totalPage) => {
  if (currentPage === 0 && totalPage > 0) {
    return 'right';
  } else if (currentPage === totalPage && totalPage > 0) {
    return 'left';
  } else if (currentPage > 0 && currentPage < totalPage) {
    return 'both';
  } else {
    return 'none';
  }
};
