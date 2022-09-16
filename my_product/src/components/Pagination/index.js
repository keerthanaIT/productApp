import { useDispatch, useSelector } from "react-redux"
import { setCharactersPaginationNext } from "../../redux/actions";
import ReactPaginate from 'react-paginate';

const Pagination = () => {
	const info = useSelector((state => state.characterInfo.charactersInfo))
	const dispatch = useDispatch();
	return (
		<div className="container d-flex justify-content-center gap-5 my-5">
			<div className="row">
				<ReactPaginate
					className='pagination justify-content-center gap-4 my-4'
					breakLabel="..."
					marginPagesDisplayed={2}
					pageRangeDisplayed={3}
					nextLabel="next"
					previousLabel="previous"
					nextClassName='page-item'
					previousClassName='page-item'
					pageClassName='page-item'
					pageLinkClassName='page-link'
					previousLinkClassName='page-link'
					nextLinkClassName='page-link'
					onPageChange={(data) => {
						dispatch(setCharactersPaginationNext(data.selected))
					}}
					pageCount={info.pages}
				/>
			</div>
		</div>
	)
}

export default Pagination