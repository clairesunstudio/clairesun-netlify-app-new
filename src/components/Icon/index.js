import React from 'react';

export default class Icon extends React.Component {
  static defaultProps = {
    title: null,
    classes: []
  }
  state = {
    content: null,
    loaded: null
  };

  loadAssets = (name) => import(`../../icons/${name}.svg`);

  render() {
    const {
      svgWidth,
      svgHeight,
      title,
      name,
      classes,
      ariaHidden,
      fill,
      ...rest
    } = this.props;
    // The promise will not be resolved until after render,
    // so re-render once the promise is finished by using state.
    this.loadAssets(name)
      .then(({ default: SVG }) => {
        if (SVG) {
          const attr = {
            width: svgWidth || '40',
            height: svgHeight || '40',
            className: (classes && classes.length > 0) ? classes.filter((c) => c).toString() : null,
            'aria-hidden': ariaHidden || null
          };
          const content = SVG(attr);
          if (this.state.loaded !== name) {
            this.setState({ loaded: name, content });
          }
        }
      });
    return this.state.content;
  }
}
