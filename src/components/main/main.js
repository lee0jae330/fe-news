import { GridView } from '../grid-view';
import { NewsSectionHeader } from '../news-section-header';
import { RollingSection } from '../rolling-section';
import { SubscribedNewsNumber } from '../subscribed-news-number';

export const Main = () => {
  RollingSection();
  NewsSectionHeader();
  SubscribedNewsNumber();
  GridView();
};
