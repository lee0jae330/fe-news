import { fetchNewspaper } from '@/apis';

/**
 *
 * @typedef {import('../types').Newspaper} Newspaper
 * @param {Object} params
 * @param {string} params.category
 * @returns {Promise<Newspaper[]>}
 */
export const getNewspaperForList = async ({ category }) => {
  const newspaperList = await fetchNewspaper(`category=${category}`);

  return {
    newspaperList,
  };
};
