import React from 'react';
import { getDiscount, setDiscount } from '@/api/products.api';
import { IDiscount } from '@/types/interfaces';

const discountCoupons = [
	{
		id: 1,
		title: '10% Off on Innovation Products',
		color: 'text-danger',
		bgColor: 'bg-danger',
		value: 10,
		className: 'border-top border-bottom border-gray',
	},
	{
		id: 2,
		title: '20% Off Digital Products',
		color: 'text-success',
		bgColor: 'bg-success',
		value: 20,
		className: 'border-top border-bottom border-gray',
	},
	{
		id: 3,
		title: '30% Off Design Services',
		color: 'text-primary',
		bgColor: 'bg-primary',
		value: 30,
		className: 'border-top border-bottom border-gray',
	},
	{
		id: 4,
		title: '40% Off Communication Tools',
		color: 'text-warning',
		bgColor: 'bg-warning',
		value: 40,
		className: 'border-top border-bottom border-gray',
	},
];

export default function Offerts() {
	const [selected, setSelected] = React.useState<IDiscount>(getDiscount());

	const selectDiscount = (id: number, value: number) => {
		if (selected.id === id) {
			setSelected({ id: 0, discount: 0 });
			setDiscount({ id: 0, discount: 0 });
			return;
		}
		const discount = {
			id,
			discount: value,
		};
		setSelected(discount);
		setDiscount(discount);
	};

	return (
		<div className='bg-white mt-0'>
			<div className='container py-4'>
				<div className='row'>
					{discountCoupons.map((item, i) => (
						<div
							key={i}
							className={`col-12 col-md-6 mb-4 ${item.className} ${selected.id === item.id ? item.bgColor : ''}`}
							onClick={() => selectDiscount(item.id, item.value)}
							style={{
								cursor: 'pointer',
								border: selected.id === item.id ? '2px solid #007bff' : '1px solid #ddd',
								borderRadius: '10px',
								padding: '20px',
								color: selected.id === item.id ? '#fff' : '',
							}}
						>
							<div className='d-flex align-items-center mb-2'>
								<h5 className={`ms-2 ${selected.id === item.id ? 'text-white' : item.color}`}>{item.title}</h5>
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	);
}
