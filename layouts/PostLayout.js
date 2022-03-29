import Comments from '@/components/comments'
import Image from '@/components/Image'
import Link from '@/components/Link'
import PageTitle from '@/components/PageTitle'
import ScrollTopAndComment from '@/components/ScrollTopAndComment'
import SectionContainer from '@/components/SectionContainer'
import { BlogSEO } from '@/components/SEO'
import Tag from '@/components/Tag'
import TOCSideBar from '@/components/TOCSideBar'
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
            {/* <dl className="pt-6 pb-10 xl:border-b xl:border-gray-200 xl:pt-11 xl:dark:border-gray-700">
              <dt className="sr-only">Authors</dt>
              <dd>
                <ul className="flex justify-center space-x-8 sm:space-x-12 xl:block xl:space-x-0 xl:space-y-8">
                  {authorDetails.map((author) => (
                    <li className="flex items-center space-x-2" key={author.name}>
                      {author.avatar && (
                        <Image
                          src={author.avatar}
                          width="38px"
                          height="38px"
                          alt="avatar"
                          className="h-10 w-10 rounded-full"
                        />
                      )}
                      <dl className="whitespace-nowrap text-sm font-medium leading-5">
                        <dt className="sr-only">Name</dt>
                        <dd className="text-gray-900 dark:text-gray-100">{author.name}</dd>
                        <dt className="sr-only">Twitter</dt>
                        <dd>
                          {author.twitter && (
                            <Link
                              href={author.twitter}
                              className="text-day-accent hover:text-day-accent-hover dark:text-night-accent dark:hover:text-night-accent-hover"
                            >
                              {author.twitter.replace('https://twitter.com/', '@')}
                            </Link>
                          )}
                        </dd>
                      </dl>
                    </li>
                  ))}
                </ul>
              </dd>
            </dl> */}
            <div className="prose max-w-none pt-10 pb-8 dark:prose-dark xl:col-span-3 xl:row-span-2">
              {children}
            </div>
            <TOCSideBar toc={toc} toHeading={3} />
            {/* <div className="sticky top-4 hidden xl:top-8 xl:block">
              <div className="mb-4 px-2 pl-10 text-sm tracking-tight text-gray-500 dark:text-gray-500">
                <p className="mb-4 text-xl font-bold">On this page</p>
                <div className="mt-1 transform space-y-1 transition duration-500 ease-in-out">
                  <div
                    className="PageScroll_progress-wrapper__1EmZx bg-gray-300 dark:bg-gray-500"
                    style={{ opacity: 0.5 }}
                  >
                    <div
                      className="PageScroll_progress-track__3DWoM bg-gray-500 dark:bg-gray-300"
                      style={{ height: '6%' }}
                    ></div>
                  </div>
                  <div className="transition-all duration-500 ease-in-out">
                    <a href="#defining-a-flag" className="active-link">
                      <p data-before="❯" className="relative pl-2">
                        Defining a Flag
                      </p>
                    </a>
                  </div>
                </div>
              </div>
            </div> */}

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
