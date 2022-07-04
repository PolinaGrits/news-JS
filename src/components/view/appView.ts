import News from './news/news';
import Sources from './sources/sources';
import { ISources } from '../controller/loader';

interface IEverything{
  status: string,
  totalResults: number,
  articles: [
    {
      source: 
      {
        id: string,
        name: string
      },
      author: string,
      title: string,
      description: string,
      url: string,
      urlToImage: string,
      publishedAt: string,
      content: string
    }
  ]
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
    this.sources.draw(values);console.log(data)
  }
}

export default AppView;
