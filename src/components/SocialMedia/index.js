import React from 'react'
import { SocialIcon } from 'react-social-icons';
import './index.scss'

const SocialMedia = ({socialIconStyle,socialIconColor,collapsed}) => {
    return (
            <div className={`social-media ${collapsed}`}>
            <SocialIcon style={socialIconStyle} color={socialIconColor} url="https://www.linkedin.com/in/minghuasun/" />
            <SocialIcon style={socialIconStyle} color={socialIconColor} url="http://github.com/clairesunstudio" />
            <SocialIcon style={socialIconStyle} color={socialIconColor} url="https://www.twitter.com/iamclairesun" />
            <SocialIcon style={socialIconStyle} color={socialIconColor} target="_self" network="email" url="mailto:clairesunstudio@gmail.com" />
            </div>
    );
}

export default SocialMedia
