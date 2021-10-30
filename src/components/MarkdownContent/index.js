// This is a solution for clientside rendering markdown string as serialized HTML 
// For server-side solution, see https://github.com/gatsbyjs/gatsby/issues/5021 and https://github.com/WhiteAbeLincoln/gatsby-transformer-remark-frontmatter
import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types';
import { unified } from 'unified';
import remarkParse from 'remark-parse';
import remarkRehype from 'remark-rehype';
import rehypeStringify from 'rehype-stringify';


const MarkdownContent = ({ content, ...attributes }) => {
    const [rehype, setRehype] = useState();
    const converter = (md) => {
        unified()
            .use(remarkParse)
            .use(remarkRehype)
            .use(rehypeStringify)
            .process(md)
            .then(
                (result) => {
                    // return String(html)
                    setRehype(String(result))
                },
                (error) => {
                    throw error
                }
            )
    }
    useEffect(() => {
        converter(content)
    });
    
    console.log(rehype)
    return (
        <div {...attributes} dangerouslySetInnerHTML={{ __html: rehype }} />
    )
      
}
MarkdownContent.propTypes = {
  content: PropTypes.string
}

export default MarkdownContent