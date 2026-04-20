import { visit } from 'unist-util-visit'

const CALLOUT_TYPES = [
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

const attribute = (name, value) => ({
  type: 'mdxJsxAttribute',
  name,
  value,
})

const element = (name, attributes = [], children = []) => ({
  type: 'mdxJsxFlowElement',
  name,
  attributes,
  children,
  data: { _xdmExplicitJsx: true },
})

const text = (value) => ({
  type: 'text',
  value,
})

function contentNode(type, children) {
  return element(
    'div',
    [attribute('className', 'callout-content')],
    [element('p', [], [text(type.toUpperCase())]), ...children]
  )
}

// Convert :::note-style directives into MDX-native wrapper nodes so they remain
// compatible with newer MDX compiler versions used by mdx-bundler.
export default function callout() {
  return (tree) => {
    visit(tree, 'containerDirective', (node) => {
      if (!CALLOUT_TYPES.includes(node.name)) {
        return
      }

      node.data = {
        hName: 'div',
        hProperties: {
          className: ['callout', node.name],
        },
      }

      node.children = [contentNode(node.name, node.children)]
    })
  }
}
