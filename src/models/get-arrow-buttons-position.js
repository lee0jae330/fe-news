/**
 *
 * @param {number} currentPage
 * @param {number} totalPage
 * @returns {'left' | 'right' | 'both'}
 */
export const getArrowButtonPosition = (currentPage, totalPage) => {
  if (currentPage === 0) {
    return 'right';
  } else if (currentPage === totalPage) {
    return 'left';
  } else {
    return 'both';
  }
};
