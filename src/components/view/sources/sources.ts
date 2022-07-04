import './sources.css';

export interface ISource{
  id: string,
  name: string
}

class Sources {
  draw(data: Array<ISource>) {
    const fragment = document.createDocumentFragment() as DocumentFragment;
    const sourceItemTemp = document.querySelector('#sourceItemTemp') as HTMLTemplateElement;
    
    data.forEach((item: ISource) => {
      const sourceClone = sourceItemTemp.content.cloneNode(true) as HTMLElement;

      (sourceClone.querySelector('.source__item-name') as HTMLElement).textContent = item.name;
      (sourceClone.querySelector('.source__item') as HTMLElement).setAttribute('data-source-id', item.id);

      fragment.append(sourceClone);
    });

    (<HTMLDivElement>document.querySelector('.sources')).append(fragment);
  }
}


export default Sources;
