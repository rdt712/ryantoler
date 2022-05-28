import Comments from '@/components/comments'
import Image from '@/components/Image'
import Link from '@/components/Link'
import PageTitle from '@/components/PageTitle'
import ScrollTopAndComment from '@/components/ScrollTopAndComment'
import SectionContainer from '@/components/SectionContainer'
import { BlogSEO } from '@/components/SEO'
import Post from '@/components/Post'
import TOCSticky from '@/components/TOCSticky'
import siteMetadata from '@/data/siteMetadata'

const discussUrl = (slug) =>
  `https://mobile.twitter.com/search?q=${encodeURIComponent(
    `${siteMetadata.siteUrl}/blog/${slug}`
  )}`
const shareUrl = (slug, title) =>
  `https://mobile.twitter.com/intent/tweet?text=${encodeURIComponent(
    `${title}`
  )}&url=${encodeURIComponent(`${siteMetadata.siteUrl}/blog/${slug}`)}&via=${
    siteMetadata.twitterHandle
  }`

const postDateTemplate = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }

export default function PostLayout({ frontMatter, authorDetails, toc, next, prev, children }) {
  const { slug, date, title, image, tags, readingTime } = frontMatter

  return (
    <SectionContainer>
      <BlogSEO
        url={`${siteMetadata.siteUrl}/blog/${slug}`}
        authorDetails={authorDetails}
        {...frontMatter}
      />
      <ScrollTopAndComment />
      <article>
        <div>
          <header className="flex flex-col items-start space-y-4 border-b border-double border-gray-500 py-4 dark:border-gray-500">
            <div>
              <PageTitle>{title}</PageTitle>
            </div>
            <div className="flex w-full flex-wrap place-content-between items-center gap-4">
              <div className="-mx-2">
                {tags.map((tag) => (
                  <span
                    key={tag}
                    className="mx-2 inline-block rounded border border-gray-700 py-1 px-2 text-xs font-medium hover:border-day-accent-hover dark:bg-night dark:hover:border-night-accent-hover"
                  >
                    <Link href={`/tags/${tag}`}>{tag}</Link>
                  </span>
                ))}
              </div>
              <dl>
                <div className="flex flex-row items-center gap-2 text-sm font-semibold text-gray-700 dark:text-gray-300">
                  <dt className="sr-only">Published on</dt>
                  <dd>
                    <time dateTime={date}>
                      {new Date(date).toLocaleDateString(siteMetadata.locale, postDateTemplate)}
                    </time>
                  </dd>
                  {' • '}
                  <span>{readingTime.text}</span>
                </div>
              </dl>
            </div>
          </header>
          <div className="divide-y divide-gray-200 pb-8 dark:divide-gray-700 xl:divide-y-0">
            <div className="relative my-4 mx-auto flex flex-col items-center overflow-hidden rounded-lg object-cover shadow-lg md:w-3/4">
              <Image src={image} alt={title} width={800} height={600} priority={true} />
            </div>
          </div>
          <div
            className="border-2 border-day bg-day bg-opacity-50 dark:border-night dark:bg-night dark:bg-opacity-75 xl:grid xl:grid-cols-4 xl:gap-x-6"
            style={{ gridTemplateRows: 'auto 1fr' }}
          >
            <div className="prose max-w-none pt-10 pb-8 dark:prose-dark xl:col-span-3 xl:row-span-2">
              {children}
            </div>
            <TOCSticky toc={toc} />
          </div>
          <div className="border-b border-t border-gray-400 py-4 text-sm dark:border-gray-700">
            <Link href={discussUrl(slug)} rel="nofollow">
              {'Discuss on Twitter'}
            </Link>
            {` • `}
            <Link href={shareUrl(slug, title)}>{'Share on Twitter'}</Link>
          </div>
          <Comments frontMatter={frontMatter} />
          <footer>
            <div className="my-4 flex flex-col">
              <span className="title-font text-3xl font-bold">Read More</span>
              <span className="mb-4 inline-block h-0.5 w-20 rounded bg-day-accent dark:bg-night-accent"></span>
            </div>
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
              {(next || prev) && (
                <div className="flex justify-between py-4 xl:block xl:space-y-8 xl:py-8">
                  {next && <Post key={next.slug} frontMatter={next}></Post>}
                  {prev && <Post key={prev.slug} frontMatter={prev}></Post>}
                </div>
              )}
            </div>
          </footer>
        </div>
      </article>
    </SectionContainer>
  )
}
