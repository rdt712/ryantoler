import Link from '@/components/Link'
import { PageSEO } from '@/components/SEO'
import Post from '@/components/Post'
import siteMetadata from '@/data/siteMetadata'
import { getAllFilesFrontMatter } from '@/lib/mdx'
import NowPlaying from '@/components/NowPlaying'

import NewsletterForm from '@/components/NewsletterForm'

const MAX_DISPLAY = 5

export async function getStaticProps() {
  const posts = await getAllFilesFrontMatter('blog')

  return { props: { posts } }
}

export default function Home({ posts }) {
  return (
    <>
      <PageSEO title={siteMetadata.title} description={siteMetadata.description} />
      <div className="divide-y divide-gray-500 dark:divide-gray-500">
        <div className="space-y-2 pt-6 pb-8 md:space-y-5">
          <h1 className="text-4xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:leading-10 md:leading-14">
            Hey, I'm{' '}
            <Link
              href={`/about`}
              className="hover-underline-animation text-day-accent dark:text-night-accent"
            >
              Ryan
            </Link>{' '}
            <span className="wave" role="img" aria-label="Hello">
              👋🏻
            </span>
          </h1>
          <p className="font-mono text-lg tracking-tighter text-gray-600 dark:text-gray-400">
            I build things on AWS without thinking about servers.
          </p>
          <p className="text-lg font-light tracking-tighter text-gray-600 dark:text-gray-400">
            Let's talk <span className="font-bold">serverless</span>.
          </p>
          <NowPlaying />
        </div>
        <div className="container mx-auto pt-4 pb-4">
          <div className="my-4 flex flex-col">
            <span className="font-poppins title-font text-3xl font-bold">Recent Posts</span>
            <span className="mb-4 inline-block h-0.5 w-20 rounded bg-day-accent dark:bg-night-accent"></span>
          </div>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3">
            {!posts.length && 'No posts found.'}
            {posts.slice(0, MAX_DISPLAY).map((frontMatter) => {
              return <Post key={frontMatter.slug} frontMatter={frontMatter}></Post>
            })}
          </div>
          {posts.length > MAX_DISPLAY && (
            <div className="flex justify-end text-base font-medium leading-6">
              <Link
                href="/blog"
                className="text-day-accent hover:text-day-accent-hover dark:text-night-accent dark:hover:text-night-accent-hover"
                aria-label="all posts"
              >
                All Posts &rarr;
              </Link>
            </div>
          )}
          {siteMetadata.newsletter.provider !== '' && (
            <div className="flex items-center justify-center p-8">
              <NewsletterForm />
            </div>
          )}
        </div>
      </div>
    </>
  )
}
