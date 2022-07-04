import Loader from './loader';

class AppLoader extends Loader {
  constructor() {
    super('https://newsapi.org/v2/', {
      apiKey: '91dc140f06c94fbf9a3f595867f4f78d', // получите свой ключ https://newsapi.org/
    });
  }
}

export default AppLoader;
