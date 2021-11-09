import React from 'react';
import GifPlayer from 'react-gif-player';
import './index.scss';

const Gif = ({gif, still, ...rest }) => {
    const gifProps = {
        gif, 
        still,
        ...rest
    }
    return(<GifPlayer {...gifProps} />)
}
export default Gif;
