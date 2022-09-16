
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { useEffect, useState } from "react";
// import { useMemo } from 'react';
// import { CHARACTER_ALIVE, CHARACTER_DEAD, CHARACTER_MALE, CHARACTER_FEMALE } from '../../Apis';


const CharacterComponent = (allChar) => {


	const characters = useSelector((state => state.allCharacters.characters))
	const [search, setSearch] = useState('');
	const [char, setChar] = useState(characters);
	const [charFilter, setCharFilter] = useState("");
	const [tempFav, setTempFav] = useState(false)
	const [favCharacter, setFavCharacter] = useState([])

	// Search and Filter
	let searchChar =
		characters.filter(char => {
			if (charFilter === "") {
				if (search === "") {
					return characters;
				} else if (search !== "") {
					return Object.keys(char).some(key =>
						char.name.toString().toLowerCase().includes(search.toString().toLowerCase())
					)
				}
			}
		});

	// Add to Fav

	const handleFav = (character) => {
		let oldData = JSON.parse(localStorage.getItem('data.app') || "[]")
		if (favCharacter.includes(character.id)) {
			oldData = oldData.filter((c) => c.id !== character.id)
		} else {
			oldData.push(character)
		}
		localStorage.setItem('data.app', JSON.stringify(oldData))
		handleFavState()
	}
	const handleFavState = () => {
		let oldData = JSON.parse(localStorage.getItem('data.app') || "[]")
		let temp = oldData.map((character) => character.id)
		setFavCharacter([...temp])
	}


	useEffect(() => {
		if (search !== "") {
			setCharFilter("");
		}
	}, [search]);

	// All characters 
	const renderChacters = searchChar.map((character) => {
		const { id, name, gender, species, image, status } = character;

		return (
			<>
				<div className="col" key={id}>
					<div className="card h-100 shadow-sm">
						<Link to={`/character_details/${id}`}>
							<img src={image} className="card-img-top" alt="" />
						</Link>
						<div className="card-body">
							<h6 className="card-title text-center">{name}</h6>
							<p className="card-text text-center">Gender: {gender}</p>
							<p className="card-text text-center">Species: {species}</p>
							<p className="card-text text-center">Status: {status}</p>
							<a onClick={() => handleFav(character)}>
								{favCharacter.includes(character.id) ?
									<img
										src={require('../../asserts/heart.svg').default}
										alt="empty"
									/>
									: <img
										src={require('../../asserts/empty.svg').default}
										alt="empty"
									/>
								}
							</a>
						</div>
					</div>
				</div>
			</>
		)
	})

	return (
		<>
			<input
				className="form-control mb-4"
				type="search"
				placeholder="Search"
				aria-label="Search"
				value={search}
				onChange={(e) => setSearch(e.target.value)}
			/>
			<br />
			{renderChacters}


		</>
	)
};

export default CharacterComponent