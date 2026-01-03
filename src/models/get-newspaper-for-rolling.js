import { NUMBER_OF_NEWSPAPER } from '@/constants';
import { fetchNewspaper } from '@/apis';

export const getNewspaperForRolling = async () => {
  const selectedNewspapers = new Set();

  while (selectedNewspapers.size < 2) {
    const randomNumber = new Uint8Array(1);
    self.crypto.getRandomValues(randomNumber);
    selectedNewspapers.add(randomNumber % NUMBER_OF_NEWSPAPER);
  }
  const [firstNewspaper, secondNewspaper] = Array.from(selectedNewspapers);
  const [firstNewspaperData, secondNewspaperData] = await Promise.all([
    fetchNewspaper(`_start=${firstNewspaper}&_limit=1`),
    fetchNewspaper(`_start=${secondNewspaper}&_limit=1`),
  ]);

  return {
    firstNewspaperData: firstNewspaperData[0],
    secondNewspaperData: secondNewspaperData[0],
  };
};
