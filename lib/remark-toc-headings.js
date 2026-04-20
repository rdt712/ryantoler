import { visit } from 'unist-util-visit'
import GithubSlugger from 'github-slugger'
import toString from 'mdast-util-to-string'

export default function remarkTocHeadings(options) {
  return (tree) => {
    const slugger = new GithubSlugger()

    visit(tree, 'heading', (node, index, parent) => {
      const textContent = toString(node)
      const slug = slugger.slug(textContent)

      options.exportRef.push({
        value: textContent,
        url: '#' + slug,
        depth: node.depth,
        id: slug,
      })
    })
  }
}
