import Item from "../../../entities/Item";
import HttpClient from "../../../infra/http/HttpClient";

export default class ItemServiceHttp {

	constructor (readonly httpClient: HttpClient, readonly baseUrl: string) {
	}

	async list () {
		const itemsData = await this.httpClient.get(`${this.baseUrl}/items`);
		const items: Item[] = [];
		for (const itemData of itemsData) {
			items.push(new Item(itemData.idItem, itemData.description, itemData.price));
		}
		return items;
	}
}
