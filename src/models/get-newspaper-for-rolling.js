import { NUMBER_OF_NEWSPAPER } from '@/constants';
import { fetchNewspaper } from '@/apis';
import { getRandomNumberList } from '@/utils';

export const getNewspaperForRolling = async () => {
  const [firstNewspaper, secondNewspaper] = getRandomNumberList({
    max: NUMBER_OF_NEWSPAPER,
    count: 2,
  });
  const [firstNewspaperData, secondNewspaperData] = await Promise.all([
    fetchNewspaper(`_start=${firstNewspaper}&_limit=1`),
    fetchNewspaper(`_start=${secondNewspaper}&_limit=1`),
  ]);

  return {
    firstNewspaperData: firstNewspaperData[0],
    secondNewspaperData: secondNewspaperData[0],
  };
};
