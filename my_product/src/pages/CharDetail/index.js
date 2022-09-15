import { CHARACTER } from "../../Apis";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { selectedCharacter } from '../../redux/actions/index';

const CharDetails = () => {

	const { characterId } = useParams();
	const dispatch = useDispatch();
	const character = useSelector((state => state.character))
	const { image, name, gender, species } = character;

	const GetAllCharacters = () => {
		fetch(`${CHARACTER}/${characterId}`)
			.then((response) => response.json())
			.then((actualData) => {
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

					</div>
				</div>
			</div>
		</div>
	)
}

export default CharDetails