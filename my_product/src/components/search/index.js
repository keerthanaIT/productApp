import { useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { Link } from "react-router-dom";
import { setCharactersPaginationOne, setCharactersSearch } from "../../redux/actions";
import './index.css'

const Search = () => {
	
	const intialSearch= useSelector((state => state.characterSearch.characterSearch))
	const pageCount = useSelector((state => state.characterPgNum.characterspgnation.characterspgnation)) 
	const dispatch = useDispatch();

	return (
		<>
		<form className="d-flex flex-sm-row flex-column align-items-center justify-content-center gap-4 mb-5">
      <input 
			placeholder="Search" 
			type="text" 
			className="custom-input" 
			onChange={(e) =>{ 
				dispatch(setCharactersPaginationOne(1))
				dispatch(setCharactersSearch(e.target.value))
			}} 
			/>
		</form>
		</>
	)
}

export default Search