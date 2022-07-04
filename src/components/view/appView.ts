import News from './news/news';
import Sources from './sources/sources';
import { ISources } from '../controller/loader';
import { INews } from './news/news';

export interface IEverything{
  status: string,
  totalResults: number,
  articles?: INews[]
}

export class AppView {
  news: News;
  sources: Sources;

  constructor() {
    this.news = new News();
    this.sources = new Sources();
  }

  drawNews(data: IEverything) {
    const values = data?.articles ? data?.articles : [];
    this.news.draw(values);
  }

  drawSources(data: ISources) {
    const values = data?.sources ? data?.sources : [];
    this.sources.draw(values);
  }
}

export default AppView;
