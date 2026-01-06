import {
  getNewspaperForGrid,
  createGridCardListHTML,
  getArrowButtonPosition,
  insertArrowButtons,
} from '@/models';
import { GRID_VIEW } from '@/constants';
import { subscribeButtonTemplate, logoImageTemplate } from '@/templates';

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
    if (!$card || $card.contains(event.relatedTarget)) {
      return;
    }

    $card.innerHTML = subscribeButtonTemplate();
  });

  $gridView.addEventListener('mouseout', (event) => {
    const $card = event.target.closest('.news-grid-view__card');
    if (!$card || $card.contains(event.relatedTarget)) {
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
