import { Bars3Icon } from '@heroicons/react/24/outline';
import { NavLink } from 'react-router-dom';
import { NavRoutes } from '@/types/interfaces';

interface NavProps {
	setOpen: (value: boolean) => void;
	navigation: {
		routesNav: NavRoutes[];
	};
}

export default function NavBar({ setOpen, navigation }: NavProps) {
	return (
		<header className='bg-white'>
			<nav aria-label='Top' className='container'>
				<div className='border-bottom'>
					<div className='d-flex align-items-center justify-content-between py-3'>
						<button type='button' onClick={() => setOpen(true)} className='btn p-2 text-secondary d-lg-none'>
							<Bars3Icon aria-hidden='true' className='h-6 w-6' />
							<span className='visually-hidden'>Open menu</span>
						</button>

						<div className='ml-4'>
							<NavLink to='/tienda'>
								<img
									alt='Logo'
									src='https://i.pinimg.com/originals/8a/0a/a6/8a0aa66e775608be9c378edc6864ca30.png'
									className='img-fluid'
									style={{ height: '40px', width: 'auto' }}
								/>
							</NavLink>
						</div>

						<div className='d-none d-lg-flex flex-grow-1 justify-content-center'>
							<div className='d-flex'>
								{navigation.routesNav.map((category) => (
									<NavLink
										key={category.id}
										to={category.id}
										className={`nav-link px-4 ${location.pathname.includes(category.id) ? 'border-bottom border-2' : ''}`}
										style={{ color: '#C8A2C8' }}
									>
										{category.name}
									</NavLink>
								))}
							</div>
						</div>

						<div className='ml-auto'>
							<NavLink to='/ofertas' className='btn btn-outline-light' style={{ backgroundColor: '#C8A2C8', color: '#fff' }}>
								Ofertas
							</NavLink>
						</div>
					</div>
				</div>
			</nav>
		</header>
	);
}
