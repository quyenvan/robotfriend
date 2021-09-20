import React from "react";

const SearchBox = ({searchChange}) => {
    return(
        <div className='pa1'>
            <input
                className='pa2 ba b--green bg-lightest-blue'
                type='search'
                placeholder='Robot name'
                onChange={searchChange}
            />
        </div>
    );
}

export default SearchBox;