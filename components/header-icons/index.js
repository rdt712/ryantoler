import About from './about.svg'
import Blog from './blog.svg'
import Snippets from './snippets.svg'
import Tags from './tags.svg'

const components = {
  about: About,
  blog: Blog,
  snippets: Snippets,
  tags: Tags,
}

const HeaderIcon = ({ kind, size = '20' }) => {
  const HeaderSvg = components[kind]

  return (
    <>
      <HeaderSvg className={`mr-1`} style={{ width: `${size}px`, height: `${size}px` }} />
    </>
  )
}

export default HeaderIcon
