import { ISource } from '../sources/sources';

import './news.css';

export interface INews {
  author: string,
  content: string,
  description: string,
  publishedAt: string,
  title: string,
  url: string,
  urlToImage: string,
  source: ISource
}


class News {
  draw(data: Array<INews>) {
    const news = data.length >= 10 ? data.filter((_item: INews, idx: number) => idx < 10) : data;
    
    const fragment = document.createDocumentFragment() as DocumentFragment;
    const newsItemTemp = document.querySelector('#newsItemTemp') as HTMLTemplateElement; //

    news.forEach((item: INews, idx: number) => {
      const newsClone = newsItemTemp.content.cloneNode(true) as HTMLElement; 
   
      if (idx % 2) (<HTMLDivElement>newsClone.querySelector('.news__item')).classList.add('alt');

      (<HTMLDivElement>newsClone.querySelector('.news__meta-photo')).style.backgroundImage = `url(${
        item.urlToImage || 'img/news_placeholder.jpg'
      })`;
      (<HTMLDivElement>newsClone.querySelector('.news__meta-author')).textContent = item.author || item.source.name;
      (<HTMLDivElement>newsClone.querySelector('.news__meta-date')).textContent = item.publishedAt
        .slice(0, 10)
        .split('-')
        .reverse()
        .join('-');

      (<HTMLDivElement>newsClone.querySelector('.news__description-title')).textContent = item.title;
      (<HTMLDivElement>newsClone.querySelector('.news__description-source')).textContent = item.source.name;
      (<HTMLDivElement>newsClone.querySelector('.news__description-content')).textContent = item.description;
      (<HTMLDivElement>newsClone.querySelector('.news__read-more a')).setAttribute('href', item.url);

      fragment.append(newsClone);
    });
    

    (<HTMLDivElement>document.querySelector('.news')).innerHTML = '';
    (<HTMLDivElement>document.querySelector('.news')).appendChild(fragment);
  }
}

export default News;
