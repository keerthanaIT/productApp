import { useEffect, useState } from "react";
import CharacterComponent from "../CharacterComponent";
import { useDispatch, useSelector } from 'react-redux';
import { CHARACTER } from "../../Apis";
import { setCharacters, setCharactersInfo, setPerPageCharacters } from '../../redux/actions';
import FilterCharacter from "../../components/FilterCharacter";
import Pagination from "../../components/Pagination";
import Search from "../../components/search";

const Home = () => {
	const dispatch = useDispatch();
	const intialPageCount= useSelector((state => state.characterPgNum.characterspgnation))
	
	const intialSearch= useSelector((state => state.characterSearch.characterSearch))

	// Single static page starts
	const getAllCharacters = async () => {
		const res = await fetch(
			// `${CHARACTER}?page=${pgNum}`
		)
		const data = await res.json();
		dispatch(setCharacters(data.results))
		dispatch(setCharactersInfo(data.info))
	}
	// Single static page ends
	// Dynamic page starts
	const fetchCharacters = async (currentPage) => {
		const res = await fetch(
			`${CHARACTER}?page=${currentPage}`
		)
		const data = await res.json();
		return data.results
	}
	// Dynamic page ends
	const handlePageClick = async (data) => {
		let currentPage = data.selected + 1;
		const chacterFromPerPage = await fetchCharacters(currentPage)
		dispatch(setPerPageCharacters(chacterFromPerPage))
	}
let getAllCharactersApi = `${CHARACTER}?page=${intialPageCount}&name=${intialSearch}`;
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
				<div className="row row-cols-1 row-cols-xs-2 row-cols-sm-2 row-cols-lg-4 g-3">
					<div className="col-3 col-md-12">
						<FilterCharacter />
					</div>
					<div className="col-12 col-lg-8">
						<div className="row">
						<CharacterComponent />
						</div>
					</div>
				</div>
			</div>
			<Pagination />
		</div>
	)
}

export default Home