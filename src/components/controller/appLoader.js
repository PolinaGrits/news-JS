import Loader from './loader';

class AppLoader extends Loader {
    constructor() {
        super('https://newsapi.org/v2/', {
            apiKey: '709eb7aec53b4bce98866de8523eee4c', // получите свой ключ https://newsapi.org/
        });
    }
}

export default AppLoader;
