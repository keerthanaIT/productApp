import {  setCharactersFilter, setCharactersGenFilter, setCharactersPaginationOne } from "../../redux/actions";
import { useDispatch } from 'react-redux';

const FilterCharacter = () => {
	const dispatch = useDispatch();

	const handleFilterClick = (e, filter) =>{
		e.preventDefault()
		dispatch(setCharactersFilter(filter))
		dispatch(setCharactersPaginationOne(1))
	}

	const handleGenFilterClick = (e, filter) =>{
		e.preventDefault()
		dispatch(setCharactersGenFilter(filter))
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
								<button className="btn btn-outline-info mb-2" onClick={(e) => { handleGenFilterClick(e, "male")
									
									}} >Male </button>
							</form>
						</div>
						<div className="col-12">
							<form>
								<button className="btn btn-outline-info mb-2" onClick={(e) => { handleGenFilterClick(e, "female")}} >Female </button>
							</form>
						</div>
					</div>
					<div className="row mt-4">
						<div className="col-4 col-sm-12">
							<h6 className="text-start mb-4">Status </h6>
						</div>
						<div className="col-12 ">
							<form>
								<button className="btn btn-outline-info mb-2" onClick={(e) => { 
									handleFilterClick(e, "Alive")
									}} >Alive </button>
							</form>
						</div>
						<div className="col-12">
							<form>
								<button className="btn btn-outline-info mb-2" onClick={(e) => { 
									handleFilterClick(e, "Dead")
									}} >Dead </button>
							</form>
						</div>
						<div className="col-12">
							<form>
								<button className="btn btn-outline-info mb-2" onClick={(e) => {
									handleFilterClick(e, "unknown")
									}} >Unknown </button>
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