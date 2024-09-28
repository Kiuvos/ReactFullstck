import { SearchIcon } from 'lucide-react';

interface SearchInputProps {
	searchTerm: string;
	setSearchTerm: (term: string) => void;
}

export default function SearchInput({ searchTerm, setSearchTerm }: SearchInputProps) {
	return (
		<form className='d-flex'>
			<div className='position-relative'>
				<input
					placeholder='Buscar...'
					className='form-control shadow-lg border-2 border-secondary px-3 py-2 rounded-pill'
					style={{
						height: '3rem',
						width: '14rem',
						transition: 'width 0.3s ease-in-out',
					}}
					name='search'
					type='search'
					onChange={(e) => setSearchTerm(e.target.value)}
				/>
				{!searchTerm && (
					<SearchIcon
						className='position-absolute'
						style={{
							top: '50%',
							right: '1rem',
							transform: 'translateY(-50%)',
							color: 'gray',
							height: '1.5rem',
							width: '1.5rem',
						}}
					/>
				)}
			</div>
		</form>
	);
}
