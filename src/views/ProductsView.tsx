import { getDiscount, getProducts } from '@/api/products.api';
import SearchInput from '@/components/SearchInput';
import { Product } from '@/types/interfaces';
import { useEffect, useState } from 'react';

export default function ProductsView() {
	const [loading, setLoading] = useState<boolean>(false);
	const [products, setProducts] = useState<Product[]>([]);
	const [filterProducts, setFilterProducts] = useState<Product[]>([]);
	const [searchTerm, setSearchTerm] = useState('');

	const productsToView = () => {
		if (searchTerm === '') {
			return products;
		}
		return filterProducts;
	};

	const productPrice = (price: number) => {
		const discount = getDiscount();
		if (discount.discount === 0) {
			return price;
		}
		return (price - (price * discount.discount) / 100).toFixed(2);
	};

	const fetchProducts = async () => {
		setLoading(true);
		const data = await getProducts();
		setProducts(data);
		setLoading(false);
	};

	useEffect(() => {
		fetchProducts();
	}, []);

	useEffect(() => {
		const productsFilter = products.filter((product) => {
			return product.title.toLowerCase().includes(searchTerm.toLowerCase());
		});
		setFilterProducts(productsFilter);
	}, [searchTerm, products]);

	const fixTitle = (title: string) => (title.length > 20 ? title.slice(0, 20) + '...' : title);

	return (
		<div className='bg-white mt-0'>
			<div className='container py-4'>
				<div className='d-flex justify-content-between align-items-center mb-4'>
					<h2 className='h4'>All items</h2>
					<SearchInput searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
				</div>
				{loading ? (
					<div className='text-center'>
						<span className='spinner-border spinner-border-sm' role='status' aria-hidden='true'></span>
						<span className='ms-2'>Loading...</span>
					</div>
				) : (
					<div className='row'>
						{productsToView().map((product) => (
							<div className='col-12 col-sm-6 col-lg-3 mb-4' key={product.id}>
								<div className='card shadow-sm'>
									<div
										className='card-img-top d-flex justify-content-center align-items-center overflow-hidden'
										style={{ height: '200px' }}
									>
										<img src={product.image} alt={product.title} className='img-fluid' />
									</div>
									<div className='card-body'>
										<h5 className='card-title'>
											<a href='#' className='text-dark'>
												{fixTitle(product.title)}
											</a>
										</h5>
										<p className='card-text fw-bold'>${productPrice(product.price)}</p>
									</div>
								</div>
							</div>
						))}
					</div>
				)}
			</div>
		</div>
	);
}
