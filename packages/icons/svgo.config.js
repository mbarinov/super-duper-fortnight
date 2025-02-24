export default {
  multipass: true,
  plugins: [
    {
      name: 'preset-default',
      params: {
        overrides: {
          removeViewBox: false,
          removeUnknownsAndDefaults: false
        }
      }
    },
    'removeDimensions',
    {
      name: 'addAttributesToSVGElement',
      params: {
        attributes: [
          { 'aria-hidden': 'true' },
          { 'width': '1em' },
          { 'height': '1em' },
          { 'fill': 'currentColor' }
        ]
      }
    }
  ]
} 