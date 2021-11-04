import React from 'react';
import './index.scss';

const getGridStyle = (column) => ({
    gridTemplateColumns: `repeat(${column || 2}, auto)`,
})

const Grid = ({col, children}) => {
    return (
        <span className='grid' style={getGridStyle(col)}>
            {children}
         </span>
    )
}

export default Grid