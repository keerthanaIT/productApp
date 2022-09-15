import CharacterComponent from "../CharacterComponent"

const Characters = () =>{
    return(
        <div>
            <div className="container py-4">
				<div className="row">
                <h3>Filter</h3>
			{/* <select
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
			<br /> */}
                    <CharacterComponent />
                </div>
            </div>

        </div>
    )
}

export default Characters