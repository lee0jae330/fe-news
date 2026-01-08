import { listViewCategoryTabsTemplate } from './list-view-category-tabs-template.js';

export const listViewTemplate = () => {
  return `
  <div class="news-list-view__wrapper">
    <div class="news-list-view">
      ${listViewCategoryTabsTemplate()}
    </div>
  </div>
  `;
};
