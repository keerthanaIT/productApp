// import FetchCharacterApi from "../../Apis/FetchApis"
import { useEffect } from "react";
import CharacterComponent from "../CharacterComponent";
import { useDispatch } from 'react-redux';
import { CHARACTER } from "../../Apis";
import { filterCharacters, setCharacters, setCharactersInfo, setPerPageCharacters } from '../../redux/actions';
import ReactPaginate from 'react-paginate';

const Home = () => {
	const dispatch = useDispatch();

	// Single static page starts
	const getAllCharacters = async () => {
		const res = await fetch(
			`${CHARACTER}`
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
	// Get Male Character api starts
	const fetchCharactersFilter = async (filter) => {
		const res = await fetch(
			`${CHARACTER}/?${filter}`
		)
		const data = await res.json();
		return data.results
	}
	// Get Male Character api ends
	const handlePageClick = async (data) => {
		let currentPage = data.selected + 1;
		const chacterFromPerPage = await fetchCharacters(currentPage)
		dispatch(setPerPageCharacters(chacterFromPerPage))
	}
	const handleFilterClick = async (filter, e) => {
		e.preventDefault()
		const getCharMale = await fetchCharactersFilter(filter)
		dispatch(filterCharacters(getCharMale))
	}

	useEffect(() => {
		getAllCharacters();
	}, []);

	return (
		<div>
			<div>
				<p>Gender</p>
				<div class="container">
					<div className="row">
						<div className="col-12 col-md-1">
							<form>
								<button className="btn btn-primary" onClick={(e) => { handleFilterClick("gender=male", e) }} >Male </button>
							</form>
						</div>
						<div className="col-12 col-md-1">
							<form>
								<button className="btn btn-primary" onClick={(e) => { handleFilterClick("gender=female", e) }} >Female </button>
							</form>
						</div>
					</div>
				</div>
			</div>
			<div>
				<p>Status</p>
				<div class="container">
					<div className="row">
						<div className="col-12 col-md-1">
							<form>
								<button className="btn btn-primary" onClick={(e) => { handleFilterClick("status=alive", e) }} >Alive </button>
							</form>
						</div>
						<div className="col-12 col-md-1">
							<form>
								<button className="btn btn-primary" onClick={(e) => { handleFilterClick("status=dead", e) }} >Dead </button>
							</form>
						</div>
					</div>
				</div>
			</div>
			<div className="container-fluid bg-trasparent my-4 p-3 position-relative">
				<div className="row row-cols-1 row-cols-xs-2 row-cols-sm-2 row-cols-lg-4 g-3">
					<CharacterComponent />
					<ReactPaginate
						previousLabel={"previous"}
						nextLabel={"next"}
						breakLabel="..."
						pageCount={42}
						marginPagesDisplayed={2}
						pageRangeDisplayed={3}
						onPageChange={handlePageClick}
						containerClassName={'pagination justify-content-center'}
						pageClassName={'page-item'}
						pageLinkClassName={'page-link'}
						previousClassName={'page-item'}
						previousLinkClassName={'page-link'}
						nextClassName={'page-item'}
						nextLinkClassName={'page-link'}
						breakClassName={'page-item'}
						breakLinkClassName={'page-link'}
						activeClassName={'active'}
					/>
				</div>
			</div>
		</div>
	)
}

export default Home