import { useState } from "react";
import { useSelector } from 'react-redux';
import { Link } from "react-router-dom";


const Search = () => {
	const characters = useSelector((state => state.allCharacters.characters))
	const [search , setSearch] = useState('');

	const onSearch = (e) =>{
		setSearch(e.target.value)
	}
let searchChar = characters.filter(char => {
	return Object.keys(char).some(key => 
		char[key].toString().toLowerCase().includes(search.toString().toLowerCase())
		)

});

	console.log('search--',search)

	return (
		<div>
			<input
				className="form-control me-2"
				type="search"
				placeholder="Search"
				aria-label="Search"
				value={search}
				onChange={onSearch}
			/>
			{searchChar.map((char , i) =>{
				return(
					<>
					<div className="col-md-3 animated fadeIn" key={char.id}>
						<div className="card">
						<Link to={`/character_details/${char.id}`}>
							<div className="card-body">
								<div className="avatar">
									<img src={char.image} className="card-img-top" alt="" />
								</div>
								<h6 className="card-title text-center">{char.name}</h6>
								<p className="card-text text-center">Gender: {char.gender}</p>
								<p className="card-text text-center">Species: {char.species}</p>
								<p className="card-text text-center">Status: {char.status}</p>
							</div>
						</Link>
						</div>
					</div>
					</>
				)
			})}
		
		</div>
	)
}

export default Search