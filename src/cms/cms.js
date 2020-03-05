import CMS from 'netlify-cms-app';

import Preview from './preview-templates/preview'

import styles from '!css-loader!sass-loader!../layout.scss'
CMS.registerPreviewStyle(styles.toString(), { raw: true });
CMS.registerPreviewTemplate('home', Preview);
CMS.registerPreviewTemplate('about', Preview);





const youtube = {
    // Internal id of the component
    id: "youtube",
    // Visible label
    label: "Youtube",
    // Fields the user need to fill out when adding an instance of the component
    fields: [{name: 'id', label: 'Youtube Video ID', widget: 'string'}],
    // Pattern to identify a block as being an instance of this component
    pattern: /<div class="video-container">.*youtube.com\/embed\/([^"]*).*<\/div>/,
    // Function to extract data elements from the regexp match
    fromBlock: function(match) {
      return {
        id: match[1]
      };
    },
    // Function to create a text block from an instance of this component
    toBlock: function(obj) {
      return (
        `<div class="video-container"><iframe src="https://www.youtube.com/embed/${obj.id}" class="video" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>`
      )
    },
    // Preview output for this component. Can either be a string or a React component
    // (component gives better render performance)
    toPreview: function(obj) {
        return (
            `<div class="video-container"><iframe src="https://www.youtube.com/embed/${obj.id}" class="video" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>`
        );
    },
}

const imageWithClass = {
    label: 'Image with styling',
    id: 'imageStyling',
    // pattern: /^!\[(.*)\]\((.*?)(\s"(.*)")?\)$/,
    pattern: /<img\ssrc="([^"]*)"\salt="([^"]*)"\stitle="([^"]*)"\sclass="([^"]*)"><\/img>/,
    fromBlock: match => {
        console.log(match);
        const classes = match[4] ? match[4].split(" ") : [];
        return match && {
            image: match[1],
            alt: match[2],
            title: match[3],
            className: classes,
        }
    },
    toBlock: ({ alt, image, title, className }) => {
        const classes = className ? className.join(' ') : "";
        return `<img src="${image || ''}" alt="${alt || ''}" title="${title || ""}" class="${classes}"></img>`;
    },
    toPreview: ({ alt, image, title, className }, getAsset, fields) => {
      const imageField = fields?.find(f => f.get('widget') === 'image');
      const src = getAsset(image, imageField);
      const classes = className ? className.join(' ') : "";
      return `<img src="${src || ''}" alt="${alt || ''}" title="${title || ""}" class="${classes || ''}"></img>`;
    },
    fields: [
      {
        label: 'Image',
        name: 'image',
        widget: 'image',
        media_library: {
          allow_multiple: false,
        },
      },
      {
        label: 'Alt Text',
        name: 'alt',
      },
      {
        label: 'Title',
        name: 'title',
      },
      {
        label: 'Styling',
        name: 'className',
        widget: 'select',
        multiple: true,
        options: ["half", "half-left", "half-right", "middle"],
        default: ["half", "half-left"],
      },
    ],
  };

const whitespace = {
    // Internal id of the component
    id: "whitespace",
    // Visible label
    label: "Whitespace",
    // Fields the user need to fill out when adding an instance of the component
    fields: [{name: 'amount', label: 'Whitespace Amount', widget: 'number', valueType: 'int', default: 15}],
    // Pattern to identify a block as being an instance of this component
    pattern: /<p style="padding-top: ([0-9]+)px;"><\/p>/,
    // Function to extract data elements from the regexp match
    fromBlock: function(match) {
        const num = parseInt(match[1]);
        return {
            amount: num,
        };
    },
    // Function to create a text block from an instance of this component
    toBlock: function(obj) {
      return (
        `<p style="padding-top: ${obj.amount}px;"></p>`
      )
    },
    // Preview output for this component. Can either be a string or a React component
    // (component gives better render performance)
    toPreview: function(obj) {
        return (
            `<p style="padding-top: ${obj.amount}px;"></p>`
          )
    },
}

  CMS.registerEditorComponent(youtube);
  CMS.registerEditorComponent(imageWithClass);
  CMS.registerEditorComponent(whitespace);