/* eslint-disable react/display-name, @next/next/no-img-element */
import { useMemo } from 'react'
import { getMDXComponent } from 'mdx-bundler/client'
import Image from './Image'
import CustomLink from './Link'
import AuthorLayout from '@/layouts/AuthorLayout'
import ListLayout from '@/layouts/ListLayout'
import PostLayout from '@/layouts/PostLayout'
import PostSimple from '@/layouts/PostSimple'
import TOCInline from './TOCInline'
import Pre from './Pre'
import { BlogNewsletterForm } from './NewsletterForm'

const MdxImage = ({ alt, loading = 'lazy', ...props }) => (
  <img alt={alt} loading={loading} {...props} />
)

const layouts = {
  AuthorLayout,
  ListLayout,
  PostLayout,
  PostSimple,
}

export const MDXComponents = {
  Image,
  TOCInline,
  a: CustomLink,
  img: MdxImage,
  pre: Pre,
  BlogNewsletterForm: BlogNewsletterForm,
  wrapper: ({ components, layout, ...rest }) => {
    const Layout = layouts[layout] || PostLayout
    return <Layout {...rest} />
  },
}

export const MDXLayoutRenderer = ({ layout, mdxSource, ...rest }) => {
  const MDXLayout = useMemo(
    () =>
      getMDXComponent(mdxSource, {
        BlogNewsletterForm,
        Image,
        TOCInline,
      }),
    [mdxSource]
  )

  return <MDXLayout layout={layout} components={MDXComponents} {...rest} />
}
