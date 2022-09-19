import { useEffect, useState } from "react";
import CharacterComponent from "../CharacterComponent";
import { useDispatch, useSelector } from 'react-redux';
import { CHARACTER } from "../../Apis";
import { setCharacters, setCharactersInfo, setPerPageCharacters } from '../../redux/actions';
import FilterCharacter from "../../components/FilterCharacter";
import Pagination from "../../components/Pagination";
import Search from "../../components/search";
import NotFoundPage from "../NotFound";

const Home = () => {
	const dispatch = useDispatch();
	const intialPageCount= useSelector((state => state.characterPgNum.characterspgnation))
	
	const intialSearch= useSelector((state => state.characterSearch.characterSearch))
	const intialFilter= useSelector((state => state.characterFilter.characterFilter))
	const intialGenFilter= useSelector((state => state.characterGenFilter.characterGenFilter))
	const characters = useSelector((state => state.allCharacters.characters))

let getAllCharactersApi = `${CHARACTER}?page=${intialPageCount}&name=${intialSearch}&status=${intialFilter}&gender=${intialGenFilter}`;
	useEffect(() => {
		(async () => {
			const res = await fetch(
				getAllCharactersApi
			).then((res) => res.json())
		dispatch(setCharacters(res.results))
		dispatch(setCharactersInfo(res.info))
		// dispatch(setCharactersPagination(pgNum))
		})();
		// getAllCharacters();
	}, [getAllCharactersApi]);

	return (
		<div>
			<Search />
			<div className="container-fluid bg-trasparent my-4 p-3 position-relative">
				<div className="row row-cols-1 row-cols-xs-2 row-cols-sm-12 row-cols-md-12 row-cols-lg-4 g-3">
					<div className="col-3 col-md-12">
						<FilterCharacter />
					</div>
					<div className="col-12 col-lg-8">
						<div className="row">
							{characters === undefined ? <NotFoundPage /> : <CharacterComponent />}
						</div>
					</div>
				</div>
			</div>
			{characters === undefined ? <NotFoundPage /> : <Pagination />}
		</div>
	)
}

export default Home