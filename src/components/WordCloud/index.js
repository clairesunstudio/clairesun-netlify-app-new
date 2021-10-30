import React from 'react'
import PropTypes from 'prop-types';
import { TagCloud } from "react-tagcloud";

const WordCloud = ({ data }) => {
  const color = `#23A6D5`
  const tags = data && data.map(({ name, value }) => (
    { value: name, count: value, color }
  ))
    return (
      <TagCloud minSize={10}
                maxSize={30}
                tags={tags} />
    );
}

WordCloud.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string,
    value: PropTypes.number
  }))
};

export default WordCloud
