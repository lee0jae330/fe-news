import { gridItemTemplate } from '@/templates';

/**
 * @typedef {import('../types').Newspaper} Newspaper
 *
 * @typedef { Object } CreateGridCardListHTMLParams
 * @property {Newspaper[]} newspaperList
 * @property {number} currentPage
 * @property {number} pageSize
 *
 * @param {CreateGridCardListHTMLParams} createGridCardListHTMLParams
 * @returns {string}
 */
export const createGridCardListHTML = ({
  newspaperList,
  currentPage,
  pageSize,
}) => {
  return Array.from({ length: pageSize })
    .map((_, index) => {
      const newspaperIndex = index + currentPage * pageSize;
      return gridItemTemplate({
        logoUrl: newspaperList[newspaperIndex].logo,
        index: newspaperIndex,
      });
    })
    .join('');
};
