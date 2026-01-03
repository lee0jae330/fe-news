import { getNewspaperForRolling } from '@/models';

export const RollingSection = async () => {
  const { firstNewspaperData, secondNewspaperData } =
    await getNewspaperForRolling();
  const firstNewspaperPress = firstNewspaperData.press;
  const firstNewspaperArticles = firstNewspaperData.relatedArticles.slice(0, 5);
  const secondNewspaperPress = secondNewspaperData.press;
  const secondNewspaperArticles = secondNewspaperData.relatedArticles.slice(
    0,
    5,
  );

  const [$firstNewspaperItem, $secondNewspaperItem] = document.querySelectorAll(
    '.rolling-section__item',
  );

  $firstNewspaperItem.innerHTML = `
  <h1 class="rolling-section__item--newspaper">${firstNewspaperPress}</h1>
  <p class="rolling-section__item--title">${firstNewspaperArticles[0].title}</p>
  `;

  $secondNewspaperItem.innerHTML = `
  <h1 class="rolling-section__item--newspaper">${secondNewspaperPress}</h1>
  <p class="rolling-section__item--title">${secondNewspaperArticles[0].title}</p>
  `;
};
