import { LOGO_IMAGE_TEMPLATE } from './logo-image-template.js';

/**
 * @typedef {import('../../types').Newspaper} Newspaper
 *
 * @typedef {Object} GridItemTemplateParams
 * @property {Newspaper['logo']} logoUrl
 * @property {number} index
 *
 * @param {GridItemTemplateParams} gridItemTemplateParams
 * @returns
 */
export const GRID_ITEM_TEMPLATE = ({ logoUrl, index }) => {
  return `
  <div class="news-grid-view__card" data-index="${index}">
    ${LOGO_IMAGE_TEMPLATE({ logoUrl, className: 'news-grid-view__card--image' })}
  </div>
  `;
};
