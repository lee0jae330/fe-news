import {
  getNewspaperForGrid,
  createGridCardListHTML,
  getArrowButtonPosition,
  insertArrowButtons,
} from '@/models';
import { GRID_VIEW } from '@/constants';
import {
  subscribeButtonTemplate,
  logoImageTemplate,
  unsubscribeButtonTemplate,
} from '@/templates';
import { subscribedNewspaperStore } from '@/stores';

export const GridView = async () => {
  const { newspaperList } = await getNewspaperForGrid();
  const {
    PAGE_SIZE,
    INITIAL_PAGE,
    LEFT_BUTTON_CLASS_NAME,
    RIGHT_BUTTON_CLASS_NAME,
  } = GRID_VIEW;

  const totalPage = Math.ceil(newspaperList.length / PAGE_SIZE) - 1;
  let currentPage = INITIAL_PAGE;

  const $gridView = document.querySelector('.news-grid-view');

  $gridView.addEventListener('mouseover', (event) => {
    const $card = event.target.closest('.news-grid-view__card');
    if (
      !$card ||
      $card.contains(event.relatedTarget) ||
      event.relatedTarget.closest('.unsubscribe-button') ||
      event.relatedTarget.closest('.subscribe-button')
    ) {
      return;
    }

    const isSubscribed = subscribedNewspaperStore.isSubscribed(
      newspaperList[$card.getAttribute('data-index')].press,
    );

    $card.innerHTML = isSubscribed
      ? unsubscribeButtonTemplate()
      : subscribeButtonTemplate();
  });

  $gridView.addEventListener('mouseout', (event) => {
    const $card = event.target.closest('.news-grid-view__card');
    if (
      !$card ||
      $card.contains(event.relatedTarget) ||
      event.target.closest('.unsubscribe-button') ||
      event.target.closest('.subscribe-button')
    ) {
      return;
    }
    const index = $card.getAttribute('data-index');
    $card.innerHTML = logoImageTemplate({
      logoUrl: newspaperList[index].logo,
      className: 'news-grid-view__card--image',
    });
  });

  $gridView.addEventListener('click', (event) => {
    if (event.target.closest(`.${RIGHT_BUTTON_CLASS_NAME}`)) {
      currentPage++;
      const gridCardListHTML = createGridCardListHTML({
        newspaperList,
        currentPage,
        pageSize: PAGE_SIZE,
      });
      $gridView.innerHTML = gridCardListHTML;

      insertArrowButtons({
        parentElement: $gridView,
        position: getArrowButtonPosition(currentPage, totalPage),
        leftButtonClassName: LEFT_BUTTON_CLASS_NAME,
        rightButtonClassName: RIGHT_BUTTON_CLASS_NAME,
      });
    } else if (event.target.closest(`.${LEFT_BUTTON_CLASS_NAME}`)) {
      currentPage--;
      const gridCardListHTML = createGridCardListHTML({
        newspaperList,
        currentPage,
        pageSize: PAGE_SIZE,
      });
      $gridView.innerHTML = gridCardListHTML;

      insertArrowButtons({
        parentElement: $gridView,
        position: getArrowButtonPosition(currentPage, totalPage),
        leftButtonClassName: LEFT_BUTTON_CLASS_NAME,
        rightButtonClassName: RIGHT_BUTTON_CLASS_NAME,
      });
    } else if (event.target.closest('.subscribe-button')) {
      const $card = event.target.closest('.news-grid-view__card');
      const newspaperIndex = $card.getAttribute('data-index');
      subscribedNewspaperStore.subscribeNewspaper(
        newspaperList[newspaperIndex],
      );
      $card.innerHTML = unsubscribeButtonTemplate();
    } else if (event.target.closest('.unsubscribe-button')) {
      const $card = event.target.closest('.news-grid-view__card');
      const newspaperIndex = $card.getAttribute('data-index');
      subscribedNewspaperStore.unsubscribeNewspaper(
        newspaperList[newspaperIndex].press,
      );
      $card.innerHTML = subscribeButtonTemplate();
    }
  });

  const gridCardListHTML = createGridCardListHTML({
    newspaperList,
    currentPage,
    pageSize: PAGE_SIZE,
  });
  $gridView.innerHTML = gridCardListHTML;
  insertArrowButtons({
    parentElement: $gridView,
    position: getArrowButtonPosition(currentPage, totalPage),
    leftButtonClassName: LEFT_BUTTON_CLASS_NAME,
    rightButtonClassName: RIGHT_BUTTON_CLASS_NAME,
  });
};
