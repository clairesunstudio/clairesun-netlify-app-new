import CMS from 'netlify-cms-app'
import uploadcare from 'netlify-cms-media-library-uploadcare'
import cloudinary from 'netlify-cms-media-library-cloudinary'

import AboutPagePreview from './preview-templates/AboutPagePreview'
// import BlogPostPreview from './preview-templates/BlogPostPreview'
import ProductPagePreview from './preview-templates/ProductPagePreview'
import IndexPagePreview from './preview-templates/IndexPagePreview'
import ProjectPreview from './preview-templates/ProjectPreview'

CMS.registerMediaLibrary(uploadcare);
CMS.registerMediaLibrary(cloudinary);

CMS.registerPreviewTemplate('index', IndexPagePreview)
CMS.registerPreviewTemplate('about', AboutPagePreview)
CMS.registerPreviewTemplate('products', ProductPagePreview)
// CMS.registerPreviewTemplate('blog', BlogPostPreview)
CMS.registerPreviewTemplate('project', ProjectPreview)


CMS.registerEditorComponent({
  // Internal id of the component
  id: "youtube",
  // Visible label
  label: "Youtube",
  // Fields the user need to fill out when adding an instance of the component
  fields: [{name: 'id', label: 'Youtube Video ID', widget: 'string'}],
  // Pattern to identify a block as being an instance of this component
  pattern: /^youtube (\S+)$/,
  // Function to extract data elements from the regexp match
  fromBlock: function(match) {
    return {
      id: match[1]
    };
  },
  // Function to create a text block from an instance of this component
  toBlock: function({id}) {
    return `<iframe src="https://www.youtube.com/embed/${id}" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`
  },
  // Preview output for this component. Can either be a string or a React component
  // (component gives better render performance)
  toPreview: function({id}) {
    return (
      '<img src="http://img.youtube.com/vi/' + id + '/maxresdefault.jpg" alt="Youtube Video"/>'
    );
  }
});

CMS.registerEditorComponent({
  // Internal id of the component
  id: "collage",
  // Visible label
  label: "Collage",
  // Fields the user need to fill out when adding an instance of the component
  fields: [{
    name: 'images',
    label: 'Images',
    widget: 'list',
    default: [{ image: '', text: ''}],
    fields: [
      {label: 'Image', name: 'image', widget: 'image'},
      {label: 'Text', name: 'text', widget: 'string'}
    ]
  }],
  // Pattern to identify a block as being an instance of this component
  pattern: /^<rehype-image (\S+)"><\/rehype-image>$/,
  // Function to extract data elements from the regexp match
  fromBlock: function(match) {
    return {
      id: match[1]
    };
  },
  // Function to create a text block from an instance of this component
  toBlock: function(list) {
    if (list.images && list.images.length > 0) {
      list.images.map((item) => (
        `<rehype-image src="../..${item.image}" text="${item.text}}"></rehype-image>`
      ))
    }
  },
  // Preview output for this component. Can either be a string or a React component
  // (component gives better render performance)
  toPreview: function(list) {
    if (list.images && list.images.length > 0) {
      return (list.images.map((item) => {
        <img src={item.image} alt={item.text} />
      }))
    }
  }
});
