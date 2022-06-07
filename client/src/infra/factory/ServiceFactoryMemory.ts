import ItemServiceMemory from "../service/memory/ItemServiceMemory";
import OrderServiceMemory from "../service/memory/OrderServiceMemory";
import ServiceFactory from "./ServiceFactory";

export default class ServiceFactoryMemory implements ServiceFactory {

	createItemService () {
		return new ItemServiceMemory();
	}

	createOrderService () {
		return new OrderServiceMemory();
	}
}
