import { CHARACTER } from "../../Apis";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { selectedCharacter } from '../../redux/actions/index';

const CharDetails = () => {

	const { characterId } = useParams();
	const dispatch = useDispatch();
	const [show, setShow] = useState(false)
	const character = useSelector((state => state.character))
	const { image, name, gender, species } = character;
	console.log('actual000--', character)

	const GetAllCharacters = () => {
		fetch(`${CHARACTER}/${characterId}`)
			.then((response) => response.json())
			.then((actualData) => {
				console.log('actualData--', actualData)
				dispatch(selectedCharacter(actualData))
			})
			.catch((err) => {
				console.log(err.message);
			});
	}

	useEffect(() => {
		if (characterId && characterId !== "")
			GetAllCharacters();
	}, [characterId]);

	const addFav = () => {
		setShow(true)
		localStorage.setItem('fav', JSON.stringify(character));
	}

	const removeFav = () => {
		setShow(false)
		localStorage.removeItem('fav', JSON.stringify(character));
	}
	console.log('show', show)
	return (
		<div>
			<div class="container p-4">
				<div class="row">
					<div class="col-6">
						<img src={image} alt="" />
					</div>
					<div class="col-6">
						<h6>Name: {name}</h6>
						<p>Gender: {gender}</p>
						<p>Species: {species}</p>
						{show ? <button onClick={removeFav}>Remove</button> : <button onClick={addFav}>Add to fav</button>}

					</div>
				</div>
			</div>
		</div>
	)
}

export default CharDetails