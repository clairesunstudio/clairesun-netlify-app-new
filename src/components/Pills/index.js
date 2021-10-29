import React from 'react'
import './index.scss'

const Pill = ({ text }) => (<span className="capsule">{text}</span>);

const Pills = ({ data }) => {
    const dataArray = data.split(',');
    return (
      <div className='pills'>
        {
          dataArray.map((pill)=> <Pill text={pill} key={`pill_${pill}`} />)
        }
      </div>
    );
}

export default Pills
