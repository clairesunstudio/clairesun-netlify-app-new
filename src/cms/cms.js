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

const youtubeVideo = ({ width, id, fullScreen }) => (
  // Video aspect-ratio style set in project.scss for responsive iframe width
  `<div class="youtubeWrapper" style="max-width:${width || 800}px"><iframe width="100%" src="https://www.youtube.com/embed/${id}" frameborder="0" ${fullScreen ? 'allowfullscreen' : ''}></iframe></div>`
)

CMS.registerEditorComponent({
  // Internal id of the component
  id: "youtube",
  // Visible label
  label: "Youtube",
  // Fields the user need to fill out when adding an instance of the component
  fields: [
    { name: "id", label: "Youtube Video ID", widget: "string" },
    { name: "width", label: "Max Width", widget: "number", default: 800 },
    { name: "fullScreen", label: "Allow Full Screen", widget: "boolean", default: true },
  ],
  // Pattern to identify a block as being an instance of this component
  pattern: /^<div class="youtubeWrapper" style="max-width:(.*)px"><iframe width="100%" src="https:\/\/www.youtube.com\/embed\/(\S+)" frameborder="0" (allowfullscreen)?><\/iframe><\/div>$/,
  // Function to extract data elements from the regexp match
  fromBlock: function(match) {
    return {
      width: match[1],
      id: match[2],
      fullScreen: match[3]
    };
  },
  // Function to create a text block from an instance of this component
  toBlock: (match) => youtubeVideo(match),
  // Preview output for this component. Can either be a string or a React component
  // (component gives better render performance)
  toPreview: (match) => youtubeVideo(match),
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
        `<lightbox imagesString="${images.toString()}"/>`
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
