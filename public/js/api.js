import config from '../../config';

class CardsApi {
	static getFirstCards() {
		return fetch('/api/card/getFirstCards', {
			method: 'POST',
			//body: JSON.stringify({ cardid: cardid, yesorno: yesorno }),
			headers: config.configHeaders
		})
			.then(response => {
				return response.json();
			})
			.catch(error => {
				throw error;
			});
	}
	static getNextCard(cardAccum) {
		return fetch('/api/card/getNextCard', {
			method: 'POST',
			body: JSON.stringify({ cardAccum: cardAccum }),
			headers: config.configHeaders
		})
			.then(response => {
				return response.json();
			})
			.catch(error => {
				throw error;
			});
	}
	static markCard(cardid, yesorno) {
		return fetch('/api/card/markCard', {
			method: 'POST',
			body: JSON.stringify({ cardid: cardid, yesorno: yesorno }),
			headers: config.configHeaders
		})
			.then(response => {
				return response.json();
			})
			.catch(error => {
				throw error;
			});
	}
}
export default CardsApi;
