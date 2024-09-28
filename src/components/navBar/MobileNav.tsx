import { NavRoutes } from '@/types/interfaces';
import { Dialog } from '@headlessui/react';
import { XMarkIcon } from '@heroicons/react/24/outline';
import { useEffect } from 'react';

interface MobileNavProps {
	open: boolean;
	setOpen: (value: boolean) => void;
	navigation: {
		routesNav: NavRoutes[];
	};
}

export default function MobileNav({ open, setOpen, navigation }: MobileNavProps) {
	useEffect(() => {
		if (open) {
			document.body.style.overflow = 'hidden';
		} else {
			document.body.style.overflow = 'unset';
		}
	}, [open]);

	return (
		<Dialog open={open} onClose={() => setOpen(false)} className='relative z-40 lg:hidden'>
			<div className='fixed inset-0 flex'>
				<div className='flex w-full max-w-xs transform flex-col overflow-y-auto bg-white pb-12 shadow-xl transition duration-300 ease-in-out'>
					<div className='flex px-4 pb-2 pt-5'>
						<button
							type='button'
							onClick={() => setOpen(false)}
							className='relative -m-2 inline-flex items-center justify-center rounded-md p-2 text-gray-400'
						>
							<span className='sr-only'>Close menu</span>
							<XMarkIcon className='h-6 w-6' />
						</button>
					</div>

					<div className='flex flex-col p-4'>
						{navigation.routesNav.map((category) => (
							<a
								key={category.id}
								href={`/${category.id}`}
								className='py-2 text-gray-900 hover:text-indigo-600'
								onClick={() => setOpen(false)}
							>
								{category.name}
							</a>
						))}
					</div>
				</div>
			</div>
		</Dialog>
	);
}
