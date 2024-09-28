export interface Product {
	id: number;
	title: string;
	price: number;
	image: string;
}

export interface IDiscount {
	id: number;
	discount: number;
}

export interface NavRoutes {
	name: string;
	id: string;
}
