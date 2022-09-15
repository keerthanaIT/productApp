
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

	// Constants
	const genderOptions = [
		{
			"value": "Male",
			"label": "Male"
		},
		{
			"value": "Female",
			"label": "Female"
		}
	]

	// // Filter Alive
	// const getCharacterAlive = async () => {
	// 	const res = await fetch(
	// 		CHARACTER_ALIVE
	// 	)
	// 	const data = await res.json();
	// }

	// // Filter Dead
	// const getCharacterDead = async () => {
	// 	const res = await fetch(
	// 		CHARACTER_DEAD
	// 	)
	// 	const data = await res.json();
	// }

	// // Filter Male
	// const getCharacterMale = async () => {
	// 	const res = await fetch(
	// 		CHARACTER_MALE
	// 	)
	// 	const data = await res.json();
	// }

	// const getCharacterFemale = async () => {
	// 	const res = await fetch(
	// 		CHARACTER_FEMALE
	// 	)
	// 	const data = await res.json();
	// }


	// 	useEffect= () =>{
	// 		getCharacterAlive()
	// 		getCharacterDead()
	// 		getCharacterMale()
	// 		getCharacterFemale()
	// 	}

	function getFilteredList() {
		if (!charFilter) {
			return characters;
		}
		return characters.filter((item) => item.gender === charFilter);
	}
	var filteredList = getFilteredList();

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
			else if (charFilter !== "") {
				return filteredList
			}
		});



	// Add to Fav
	const removeFav = (id) => {
		setTempFav(false)
		setFavCharacter(state => [...state, id])
		localStorage.removeItem('id', id);
	}

	const addFav = (id) => {
		setTempFav(true)
		setFavCharacter(state => [...state, id])
		localStorage.setItem('id', favCharacter);
	}

	const setDataToLocalStorage = async () => {
		try {
			localStorage.setItem('data', JSON.stringify(characters))
		} catch (err) {
			console.log(err)
		}
	}

	useEffect(() => {
		// setDataToLocalStorage()
	}, []);

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
				<div className="col-md-3 animated fadeIn mt-8" key={id}>
					<div className="card">
						<div className="card-body">
							<Link to={`/character_details/${id}`}>
								<div className="avatar">
									<img src={image} className="card-img-top" alt="" />
								</div>
								<h6 className="card-title text-center">{name}</h6>
								<p className="card-text text-center">Gender: {gender}</p>
								<p className="card-text text-center">Species: {species}</p>
								<p className="card-text text-center">Status: {status}</p>

							</Link>
							{tempFav ?
								<img
									src={require('../../asserts/heart.svg').default}
									alt="empty"
									onClick={() => removeFav(id)}
								/> :
								<img
									src={require('../../asserts/empty.svg').default}
									alt="empty"
									onClick={() => addFav(id)}
								/>}
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

			<h3>Filter</h3>
			<select
				className="px-2 py-1 border mb-4"
				value={charFilter}
				onChange={(e) => setCharFilter(e.target.value)}
			>
				{genderOptions.map((option, i) => {
					return (
						<option className="py-2" value={option.value} key={i}>
							{option.label}
						</option>
					);
				})}
			</select>
			<br />

			{/* <p>Gender</p>
			<div class="container">
  <div className="row">
    <div className="col-12 col-md-1">
       <form>
        <button className="btn btn-primary" >Male </button>
       </form>
    </div>
    <div className="col-12 col-md-1">
      <form>
        <button className="btn btn-primary">Female </button>
       </form>
    </div>
  </div>
</div>
<p>Status</p>
			<div class="container">
  <div className="row">
    <div className="col-12 col-md-1">
       <form>
        <button className="btn btn-primary" type="submit" >Alive </button>
       </form>
    </div>
    <div className="col-12 col-md-1">
      <form>
        <button className="btn btn-primary" type="submit">Dead </button>
       </form>
    </div>
  </div>
</div> */}

			{renderChacters}


		</>
	)
};

export default CharacterComponent