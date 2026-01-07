import { NEWS_SECTION_STATE } from '@/constants';
import { Observer } from '@/libs';
import { getNewspaperForGrid } from '@/models';
import { newsSectionStore } from '@/stores';

import { SubscribedGridView } from './subscribed-grid-view';
import { TotalGridView } from './total-grid-view';

/**
 * @returns {{cleanup: () => void}}
 */
export const GridView = async () => {
  let cleanupFunctions = null;
  const { newspaperList: totalNewspaperList } = await getNewspaperForGrid();

  const updateGridView = () => {
    const { type, view } = newsSectionStore.getState();
    if (view === NEWS_SECTION_STATE.VIEW.LIST) {
      cleanupFunctions?.();
      cleanupFunctions = null;
      return;
    }

    cleanupFunctions?.();
    cleanupFunctions = null;

    if (type === NEWS_SECTION_STATE.TYPE.TOTAL) {
      const { cleanup: cleanupTotalGridView } = TotalGridView({
        newspaperList: totalNewspaperList,
      });
      cleanupFunctions = cleanupTotalGridView;
    } else {
      const { cleanup: cleanupSubscribedGridView } = SubscribedGridView();
      cleanupFunctions = cleanupSubscribedGridView;
    }
  };

  const observer = new Observer(updateGridView);
  newsSectionStore.subscribe(observer);

  const { cleanup: cleanupTotalGridView } = TotalGridView({
    newspaperList: totalNewspaperList,
  });
  cleanupFunctions = cleanupTotalGridView;
};
