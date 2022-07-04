import AppLoader from './appLoader';
import { APIEndpoints} from './loader';
import { IEverything } from '../view/appView';
import { Callback } from './loader';
import { INews } from '../view/news/news';

class AppController extends AppLoader {
  getSources(callback: Callback <IEverything>) {
    super.getResp(
      {
        endpoint: APIEndpoints.sources,
      },
      callback
    );
  }

  getNews(e: MouseEvent, callback: Callback <INews>) {
    let target = e.target as HTMLElement;
    const newsContainer = e.currentTarget as HTMLElement;
     
     while (target !== newsContainer) {
      if (target.classList.contains('source__item')) {
        const sourceId  = target.getAttribute('data-source-id') as string;
        
        if (newsContainer.getAttribute('data-source') !== sourceId) {
          newsContainer.setAttribute('data-source', sourceId);
          super.getResp(
            {
              endpoint: APIEndpoints.everything,
              options: {
                sources: sourceId,
              },
            },
            callback
          );
        }
        return;
      }
      target = <HTMLElement>target.parentNode;
    }
  }
}

export default AppController;
