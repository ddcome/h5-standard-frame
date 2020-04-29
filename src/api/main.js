import { fetch } from 'apiconfig/index';

export function query(query) {
	if (query && query.type && query.type === 'preview') {
		return fetch('/resources/preview.json', 'get');
	} else {
		return fetch('/data/server.json', 'get');
	}
}
