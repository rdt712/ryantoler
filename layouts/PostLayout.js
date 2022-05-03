import Comments from '@/components/comments'
import Image from '@/components/Image'
import Link from '@/components/Link'
import PageTitle from '@/components/PageTitle'
import ScrollTopAndComment from '@/components/ScrollTopAndComment'
import SectionContainer from '@/components/SectionContainer'
import { BlogSEO } from '@/components/SEO'
import Tag from '@/components/Tag'
import TOCSticky from '@/components/TOCSticky'
import siteMetadata from '@/data/siteMetadata'

const editUrl = (fileName) => `${siteMetadata.siteRepo}/blob/master/data/blog/${fileName}`
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
  const { slug, fileName, date, title, image, tags, readingTime } = frontMatter

  console.log(date)

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
                    className="mx-2 inline-block rounded border border-gray-700 py-1 px-2 text-xs font-medium hover:border-night-accent"
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
                      {/* add time to date to prevent date rollback during daylight savings time */}
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
            <div className="relative flex flex-col items-center">
              <Image
                src={image}
                alt={title}
                layout="fill"
                priority={true}
                className="my-4 mx-auto overflow-hidden rounded-lg object-cover shadow-lg md:w-3/4"
              />
            </div>
          </div>
          <div className="flex flex-col">
            <div
              className="divide-y divide-gray-200 pb-8 dark:divide-gray-700 xl:grid xl:grid-cols-4 xl:gap-x-6 xl:divide-y-0"
              style={{ gridTemplateRows: 'auto 1fr' }}
            >
              <div className="prose max-w-none pt-10 pb-8 dark:prose-dark xl:col-span-3 xl:row-span-2"></div>
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

            {/* <footer>
              <div className="divide-gray-200 text-sm font-medium leading-5 dark:divide-gray-700 xl:col-start-1 xl:row-start-2 xl:divide-y">
                {tags && (
                  <div className="py-4 xl:py-8">
                    <h2 className="text-xs uppercase tracking-wide text-gray-500 dark:text-gray-400">
                      Tags
                    </h2>
                    <div className="flex flex-wrap">
                      {tags.map((tag) => (
                        <Tag key={tag} text={tag} />
                      ))}
                    </div>
                  </div>
                )}
                {(next || prev) && (
                  <div className="flex justify-between py-4 xl:block xl:space-y-8 xl:py-8">
                    {prev && (
                      <div>
                        <h2 className="text-xs uppercase tracking-wide text-gray-500 dark:text-gray-400">
                          Previous Article
                        </h2>
                        <div className="text-day-accent hover:text-day-accent-hover dark:text-night-accent dark:hover:text-night-accent-hover">
                          <Link href={`/blog/${prev.slug}`}>{prev.title}</Link>
                        </div>
                      </div>
                    )}
                    {next && (
                      <div>
                        <h2 className="text-xs uppercase tracking-wide text-gray-500 dark:text-gray-400">
                          Next Article
                        </h2>
                        <div className="text-day-accent hover:text-day-accent-hover dark:text-night-accent dark:hover:text-night-accent-hover">
                          <Link href={`/blog/${next.slug}`}>{next.title}</Link>
                        </div>
                      </div>
                    )}
                  </div>
                )}
              </div>
              <div className="pt-4 xl:pt-8">
                <Link
                  href="/blog"
                  className="text-day-accent hover:text-day-accent-hover dark:text-night-accent dark:hover:text-night-accent-hover"
                >
                  &larr; Back to the blog
                </Link>
              </div>
            </footer> */}
          </div>
          <div className="border-b border-t border-gray-400 py-4 text-sm dark:border-gray-700">
            <Link href={discussUrl(slug)} rel="nofollow">
              {'Discuss on Twitter'}
            </Link>
            {` • `}
            <Link href={shareUrl(slug, title)}>{'Share on Twitter'}</Link>
          </div>
          <Comments frontMatter={frontMatter} />
        </div>
      </article>
    </SectionContainer>
  )
}
