import React from 'react';
import './index.scss';

const getGridStyle = (column) => ({
    gridTemplateColumns: `repeat(${column || 2}, auto)`,
})

const Grid = ({col, children}) => {
    return (
        <div className='grid' style={getGridStyle(col)}>
            {children}
         </div>
    )
}

export default Grid