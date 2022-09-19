
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import {  useState } from "react";
import './index.css'
import NotFoundPage from '../NotFound';


const CharacterComponent = () => {

	const characters = useSelector((state => state.allCharacters.characters))
	const [favCharacter, setFavCharacter] = useState([])

	// Search and Filter
	// let searchChar =
	// 	characters.filter(char => {
	// 		if (charFilter === "") {
	// 			if (search === "") {
	// 				return characters;
	// 			} else if (search !== "") {
	// 				return Object.keys(char).some(key =>
	// 					char.name.toString().toLowerCase().includes(search.toString().toLowerCase())
	// 				)
	// 			}
	// 		}
	// 	});

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

	// All characters 
	const renderChacters = characters.map((character) => {
		const { id, name, gender, location,species, image, status } = character;

		return (
			<>
				<div className="col-lg-4 col-md-6 col-12 mb-4 position-relative" key={id}>
					<div className="card shadow-sm d-flex flex-column justify-content-center">
						<Link to={`/character_details/${id}`}>
							<img src={image} className="card-img-top" alt="" />
						</Link>
						<div className="card-body">
							<h6 className="card-title text-center  fw-bold mb-4">{name}</h6>
							<div className='fs-6 text-center'>Gender: {gender}</div>
							<div className='fs-6 mb-4 text-center'>Species: {species}</div>
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
					{(status === "Dead") ?
					<div className=" position-absolute badge bg-danger custom-badge">{status}</div> : 
					(status === "Alive") ?
					<div className="position-absolute badge bg-success custom-badge ">{status}</div> : 
					<div className=" position-absolute badge bg-secondary custom-badge">{status}</div>
					}
					
				</div>
			</>
		)
	})

	return (
		<>
		{renderChacters}
		{/* {console.log('characters----',characters)}
		{characters == undefined ? 
		<>{console.log('d-------------------------------------------')} <NotFoundPage /></> :
		<>{console.log('not---------------------------------------')} {renderChacters}</>
		 } */}
		</>
	)
};

export default CharacterComponent