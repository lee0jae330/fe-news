import { GridView } from '../grid-view';
import { RollingSection } from '../rolling-section';
import { SubscribedNewsNumber } from '../subscribed-news-number';
import { NewsSectionHeader } from '../news-section-header';

export const Main = () => {
  RollingSection();
  NewsSectionHeader();
  SubscribedNewsNumber();
  GridView();
};
