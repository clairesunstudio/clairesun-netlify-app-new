import React from 'react'
import './index.scss'

const TagPill = () => {
  const code = ['HTML', 'CSS', 'SASS', 'JS', 'Jquery', 'SQL', 'React.JS', 'Node.JS', 'D3.JS', 'P5.JS', 'Arduino', 'Processing', 'GTM', 'Drupal', 'Twig', 'Git', 'Regex', 'R', 'ggplot2', 'Python', 'Pandas', 'AWS'];
  const languages = ['English', 'Mandarin Chinese', 'Cantonese'];
    return (
      <div>
          <div className='pills'>
            {
              code.map((tag, i)=> <span className="capsule" key={tag}>{tag}</span>)
            }
          </div>
            <hr />
          <div className='pills'>
            {
              languages.map((tag, i)=> <span className="capsule" key={tag}>{tag}</span>)
            }
          </div>
      </div>
    );
}

export default TagPill
