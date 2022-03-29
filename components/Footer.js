import Link from './Link'
import siteMetadata from '@/data/siteMetadata'
import HeaderIcon from '@/components/header-icons'
import SocialIcon from '@/components/social-icons'

export default function Footer() {
  return (
    <footer className="border-t border-gray-500 dark:border-gray-500">
      <div className="mt-4 mb-4 flex flex-col items-center justify-between sm:flex-row">
        <div className="mb-2 flex space-x-2 text-sm text-gray-500 dark:text-gray-400">
          <div>{`© ${new Date().getFullYear()}`}</div>
          <Link className="hover:text-day-accent-hover dark:hover:text-night-accent-hover" href="/">
            {siteMetadata.title}
          </Link>
        </div>
        <div className="mb-2 flex space-x-2 text-sm text-gray-500 dark:text-gray-400">
          <Link
            className="inline-flex flex-row hover:text-day-accent dark:hover:text-night-accent"
            href="/tags"
          >
            <HeaderIcon kind="tags" />
            Tags
          </Link>
        </div>
        <div className="mb-2 flex space-x-4">
          <SocialIcon kind="github" href={siteMetadata.github} size="5" />
          <SocialIcon kind="linkedin" href={siteMetadata.linkedin} size="5" />
          <SocialIcon kind="twitter" href={siteMetadata.twitter} size="5" />
          <SocialIcon kind="rss" href="/feed.xml" size="5" />
        </div>
      </div>
    </footer>
  )
}
