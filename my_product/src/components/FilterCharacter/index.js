import { CHARACTER } from "../../Apis";
import { filterCharacters, setCharactersPaginationOne } from "../../redux/actions";
import { useDispatch } from 'react-redux';

const FilterCharacter = () => {
	const dispatch = useDispatch();
	// Get Filter Character api starts
	const fetchCharactersFilter = async (filter) => {
		const res = await fetch(
			`${CHARACTER}/?${filter}`
		)
		const data = await res.json();
		return data.results
	}
	// Get Filter Character api ends

	const handleFilterClick = async (filter, e) => {
		e.preventDefault()
		const getCharMale = await fetchCharactersFilter(filter)
		dispatch(filterCharacters(getCharMale))
		dispatch(setCharactersPaginationOne(1))
	}

	return (
		<>
			<div>
				<div class="col-12 col-lg-3 mb-5">
					<h5 className="fw-bold fs-4 mb-2 text-center">Filter</h5>
					<div className="row mt-4">
						<div className="col-12 col-sm-12">
							<h6 className="text-start mb-4">Gender </h6>
						</div>
						<div className="col-12">
							<form>
								<button className="btn btn-outline-info mb-2" onClick={(e) => { handleFilterClick("gender=male", e) }} >Male </button>
							</form>
						</div>
						<div className="col-12">
							<form>
								<button className="btn btn-outline-info mb-2" onClick={(e) => { handleFilterClick("gender=female", e) }} >Female </button>
							</form>
						</div>
					</div>
					<div className="row mt-4">
						<div className="col-4 col-sm-12">
							<h6 className="text-start mb-4">Status </h6>
						</div>
						<div className="col-12 ">
							<form>
								<button className="btn btn-outline-info mb-2" onClick={(e) => { handleFilterClick("status=alive", e) }} >Alive </button>
							</form>
						</div>
						<div className="col-12">
							<form>
								<button className="btn btn-outline-info mb-2" onClick={(e) => { handleFilterClick("status=dead", e) }} >Dead </button>
							</form>
						</div>
						<div className="col-12">
							<form>
								<button className="btn btn-outline-info mb-2" onClick={(e) => { handleFilterClick("status=unknown", e) }} >Unknown </button>
							</form>
						</div>
					</div>
				</div>
			</div>
			<div>
			</div>
		</>
	)
}

export default FilterCharacter