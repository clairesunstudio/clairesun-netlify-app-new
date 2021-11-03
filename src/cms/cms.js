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



/* Youtube
*/

CMS.registerEditorComponent({
  // Internal id of the component
  id: "youtube",
  // Visible label
  label: "Youtube",
  // Fields the user need to fill out when adding an instance of the component
  fields: [
    { name: "id", label: "Youtube Video ID", widget: "string" },
    { name: "width", label: "Width", widget: "string" },
    { name: "height", label: "Height", widget: "string" },
    { name: "fullScreen", label: "Allow Full Screen", widget: "boolean" },
  ],
  // Pattern to identify a block as being an instance of this component
  pattern: /^<iframe width="(.*)" height="(.*)" src="https:\/\/www.youtube.com\/embed\/(\S+)" frameborder="0" (allowfullscreen)?><\/iframe>$/,
  // Function to extract data elements from the regexp match
  fromBlock: function(match) {
    return {
      width: match[1],
      height: match[2],
      id: match[3],
      fullScreen: match[4]
    };
  },
  // Function to create a text block from an instance of this component
  toBlock: function({width, height, id, fullScreen}) {
    return `<iframe width="${width}" height="${height}" src="https://www.youtube.com/embed/${id}" frameborder="0" ${fullScreen && 'allowfullscreen'}></iframe>`
  },
  // Preview output for this component. Can either be a string or a React component
  // (component gives better render performance)
  toPreview: function({width, height, id, fullScreen}) {
    return (
      `<iframe width="${width}" height="${height}" src="https://www.youtube.com/embed/${id}" frameborder="0" ${fullScreen && 'allowfullscreen'}></iframe>`
    );
  }
});



/* Collage
*/

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
  pattern: /^collage (\S+)$/,
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

// gallery
CMS.registerEditorComponent({
  id: 'gallery',
  label: 'Gallery',
  fields: [
    {label: 'Gallery',
    name: 'images',
    widget: 'list',
    field:
     {label: 'Image', name: 'image',  widget: 'image'}
    }
  ],
  pattern: /^<lightbox imagesString="(.*)"\/>$/,
  fromBlock: function(match) {
    const images = match[1]
      .split(',')
      .filter(val => val)
      .map(image => ({ image }));
      const obj = {images};
      return obj;
  },
  toBlock: function({ images }) {
    if (images) {
      return (
        `<lightbox imagesString="${JSON.stringify(images)}"/>`
      );
    }
  }
});

// parse string inside component 



/* Blockquote
*/

CMS.registerEditorComponent({
  id: 'blockquote', // Internal id of the component
  label: 'Blockquote', // Visible label
  // Fields the user need to fill out when adding an instance of the component
  fields: [
      {name: 'quote', label: 'Quote', widget: 'string'},
      {name: 'author', label: 'Author', widget: 'string'}
  ],
  pattern:
      /^<blockquote>(.*)<footer>(.*)<\/footer><\/blockquote>/, // Pattern to identify a block as being an instance of this component
  // Function to extract data elements from the regexp match
  fromBlock: function (match) {
      return {
          quote: match[1],
          author: match[2],
      }
  },
  // Function to create a text block from an instance of this component
  toBlock: function (obj) {
      return (
          '<blockquote>' +
          obj.quote +
          '<footer>' +
          obj.author +
          '</footer></blockquote>'
      )
  },
  // Preview output for this component. Can either be a string or a React component
  // (component gives better render performance)
  toPreview: function (obj) {
      return (
          '<blockquote>' +
          obj.quote +
          '<footer>' +
          obj.author +
          '</footer></blockquote>'
      )
  },
});
