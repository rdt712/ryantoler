import { visit } from 'unist-util-visit'
import { h } from 'hastscript'

// This plugin is an example to turn `:::note` into divs, passing arbitrary attributes.
/** @type {import('unified').Plugin<[], import('mdast').Root>} */
export default function callout() {
  const calloutTypes = [
    'warning',
    'important',
    'caution',
    'tip',
    'note',
    'question',
    'quote',
    'comment',
    'docs',
  ]

  return (tree) => {
    visit(tree, 'containerDirective', (node, index, parent) => {
      if (node.type === 'containerDirective') {
        if (!calloutTypes.includes(node.name)) return
        const tagName = 'div'
        const attributes = { className: ['callout', node.name] }

        node.data = {
          hName: tagName,
          hProperties: h(tagName, attributes).properties,
        }

        node.children = [IconNode(node), ContentNode(node)]
      }
    })
  }
}

const code = (name) => ({
  type: 'mdxJsxFlowElement',
  name: 'code',
  attributes: [],
  children: [{ type: 'text', value: name.toUpperCase() }],
  data: { _xdmExplicitJsx: true },
})

const element = (tagName, attributes = {}, children = []) => {
  return {
    type: 'element',
    data: {
      hName: tagName,
      hProperties: h(tagName, attributes, children).properties,
    },
    children,
  }
}

const IconNode = (node) => {
  const iconClasses = [
    'callout-icon',
    'inline-flex',
    'items-center',
    'text-center',
    'bg-day',
    'dark:bg-night',
    'rounded-full',
    'h-10',
    'w-10',
  ]

  const iconSvg = {
    warning: {
      path: 'M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z',
      width: 16,
      height: 16,
    },
    important: {
      path: 'M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z',
      width: 16,
      height: 16,
    },
    caution: {
      path: 'M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z',
      width: 16,
      height: 16,
    },
    tip: {
      path: 'M20,11H23V13H20V11M1,11H4V13H1V11M13,1V4H11V1H13M4.92,3.5L7.05,5.64L5.63,7.05L3.5,4.93L4.92,3.5M16.95,5.63L19.07,3.5L20.5,4.93L18.37,7.05L16.95,5.63M12,6A6,6 0 0,1 18,12C18,14.22 16.79,16.16 15,17.2V19A1,1 0 0,1 14,20H10A1,1 0 0,1 9,19V17.2C7.21,16.16 6,14.22 6,12A6,6 0 0,1 12,6M14,21V22A1,1 0 0,1 13,23H11A1,1 0 0,1 10,22V21H14M11,18H13V15.87C14.73,15.43 16,13.86 16,12A4,4 0 0,0 12,8A4,4 0 0,0 8,12C8,13.86 9.27,15.43 11,15.87V18Z',
      width: 24,
      height: 24,
    },
    note: {
      path: 'M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z',
      width: 14,
      height: 16,
    },
    question: {
      path: 'M6 10h2v2H6v-2zm4-3.5C10 8.64 8 9 8 9H6c0-.55.45-1 1-1h.5c.28 0 .5-.22.5-.5v-1c0-.28-.22-.5-.5-.5h-1c-.28 0-.5.22-.5.5V7H4c0-1.5 1.5-3 3-3s3 1 3 2.5zM7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7s7-3.14 7-7s-3.14-7-7-7z',
      width: 14,
      height: 16,
    },
    quote: {
      path: 'M10,7L8,11H11V17H5V11L7,7H10M18,7L16,11H19V17H13V11L15,7H18Z',
      width: 24,
      height: 24,
    },
    comment: {
      path: 'M9 22C8.4 22 8 21.6 8 21V18H4C2.9 18 2 17.1 2 16V4C2 2.9 2.9 2 4 2H20C21.1 2 22 2.9 22 4V16C22 17.1 21.1 18 20 18H13.9L10.2 21.7C10 21.9 9.8 22 9.5 22H9M10 16V19.1L13.1 16H20V4H4V16H10M16.3 6L14.9 9H17V13H13V8.8L14.3 6H16.3M10.3 6L8.9 9H11V13H7V8.8L8.3 6H10.3Z',
      width: 24,
      height: 24,
    },
    docs: {
      path: 'M19 1L14 6V17L19 12.5V1M21 5V18.5C19.9 18.15 18.7 18 17.5 18C15.8 18 13.35 18.65 12 19.5V6C10.55 4.9 8.45 4.5 6.5 4.5C4.55 4.5 2.45 4.9 1 6V20.65C1 20.9 1.25 21.15 1.5 21.15C1.6 21.15 1.65 21.1 1.75 21.1C3.1 20.45 5.05 20 6.5 20C8.45 20 10.55 20.4 12 21.5C13.35 20.65 15.8 20 17.5 20C19.15 20 20.85 20.3 22.25 21.05C22.35 21.1 22.4 21.1 22.5 21.1C22.75 21.1 23 20.85 23 20.6V6C22.4 5.55 21.75 5.25 21 5M10 18.41C8.75 18.09 7.5 18 6.5 18C5.44 18 4.18 18.19 3 18.5V7.13C3.91 6.73 5.14 6.5 6.5 6.5C7.86 6.5 9.09 6.73 10 7.13V18.41Z',
      width: 24,
      height: 24,
    },
  }

  const pathNode = element('path', {
    'fill-rule': 'evenodd',
    d: iconSvg[node.name].path,
  })
  const svgNode = element(
    'svg',
    {
      xmlns: 'http://www.w3.org/2000/svg',
      width: iconSvg[node.name].width,
      height: iconSvg[node.name].height,
      viewBox: `0 0 ${iconSvg[node.name].width} ${iconSvg[node.name].height}`,
    },
    [pathNode]
  )
  const svgWrapper = element('div', { className: iconClasses }, [svgNode])
  return element('div', {}, [svgWrapper])
}

const ContentNode = (node) => {
  const titleNode = element('p', {}, [code(node.name)])
  return element('div', { className: 'callout-content' }, [titleNode, ...node.children])
}
