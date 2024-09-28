import { useState } from 'react';
import { Routes, Route, useLocation, Navigate } from 'react-router-dom';
import MobileNav from '@/components/navBar/MobileNav';
import NavBar from '@/components/navBar/NavBar';
import Productsview from '@/views/ProductsView';
import Offerts from '@/views/OffertsView';

const navigation = {
	routesNav: [
		{
			id: 'nosotros',
			name: 'Nosotros',
		},
		{
			id: 'tienda',
			name: 'Tienda',
		},
		{
			id: 'contacto',
			name: 'Contacto',
		},
	],
};

export default function App() {
	const [open, setOpen] = useState(false);
	const location = useLocation();
	console.log(location);

	return (
		<div>
			<div className='bg-white'>
				<MobileNav open={open} setOpen={setOpen} navigation={navigation} />

				<NavBar setOpen={setOpen} navigation={navigation} />
			</div>
			<Routes>
				<Route path='/' element={<Navigate to={'/tienda'} />} />
				<Route path='/tienda' element={<Productsview />} />
				<Route path='/nosotros' element={'Nosotros'} />
				<Route path='/contacto' element={'Contacto'} />
				<Route path='/ofertas' element={<Offerts />} />
				<Route path='/*' element={'NotFount'} />
			</Routes>
		</div>
	);
}
