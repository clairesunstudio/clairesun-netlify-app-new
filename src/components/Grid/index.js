import React from 'react';
import './index.scss';

// const getGridStyle = (column) => ({
//     gridTemplateColumns: `repeat(${column}, fit-content(100%/${column}))`,
// })

const Grid = ({col, children}) => {
    return (
        <span className={`grid grid--col_${col}`}>
            {children}
         </span>
    )
}

export default Grid