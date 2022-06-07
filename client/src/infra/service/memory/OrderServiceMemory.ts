import Order from "../../../entities/Order";

export default class OrderServiceMemory {
	orders: Order[];

	constructor () {
		this.orders = [];
	}

	async save (order: Order) {
		this.orders.push(order);
		return { code: "123"};
	}
}
