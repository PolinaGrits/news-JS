interface ISources { //это у меня был эндпоинт
  status: string,
  sources?: [
		{
			id: string,
			name: string,
			description: string,
			url: string,
			category: string,
			language: string,
			country: string
		}
	];    
}

interface IOptions { // это у меня опшинс
	[key: string]: string
};

export enum APIEndpoints { // теперь это у меня эндпоинт
		sources = 'sources',
		everything = 'everything',
}

export type Callback<T> = { (data: T): void };

class Loader {
	options: IOptions;
	baseLink: string;
  static sources: APIEndpoints;
  static everything: APIEndpoints;

	constructor(baseLink: string, options: IOptions) {
		this.baseLink = baseLink;
		this.options = options;
	}

	getResp(
		{ endpoint, options = {} }: { endpoint: APIEndpoints; options?: IOptions },
		callback = () : void => {
			console.error('No callback for GET response');
		}
	) {

		this.load('GET', endpoint, callback, options);

	}

	errorHandler(res: Response) {
		if (!res.ok) {
			if (res.status === 401 || res.status === 404)
				console.log(`Sorry, but there is ${res.status} error: ${res.statusText}`);
			throw Error(res.statusText);
		}
		return res;
	}

	makeUrl(options: IOptions, endpoint: APIEndpoints): string {
		const urlOptions: IOptions = { ...this.options, ...options };
		let url: string;
		url = `${this.baseLink}${endpoint}?`;
		
		Object.keys(urlOptions).forEach((key) => {
			url += `${key}=${urlOptions[key]}&`;
		});
		return url.slice(0, -1);
	}

	load<T>(method: string, endpoint: APIEndpoints, callback: Callback<T>, options = {}) {
		fetch(this.makeUrl(options, endpoint), { method })
			.then(this.errorHandler)
			.then((res) => res.json())
			.then((data) => callback(data))
			.catch((err) => console.error(err));
	}
}


export { ISources }
export default Loader;