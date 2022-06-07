import Order from "../../../entities/Order";
import HttpClient from "../../../infra/http/HttpClient";

export default class OrderServiceHttp {

	constructor (readonly httpClient: HttpClient, readonly baseUrl: string) {
	}

	async save (order: Order) {
		const newOrder = await this.httpClient.post(`${this.baseUrl}/orders`, order);
		return newOrder;
	}
}
