import React from 'react'
import './SectionHeader.scss'

const SectionHeader = ({children}) => {

    return (
      <h2 className="section-divider-title"><span>{children}</span></h2>
    );
}

export default SectionHeader
