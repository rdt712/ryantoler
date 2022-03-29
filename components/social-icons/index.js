import External from './external.svg'
import Facebook from './facebook.svg'
import Github from './github.svg'
import Instagram from './instagram.svg'
import Linkedin from './linkedin.svg'
import Mail from './mail.svg'
import Rss from './rss.svg'
import Twitter from './twitter.svg'
import Youtube from './youtube.svg'

import Link from '@/components/Link'

// Icons taken from: https://simpleicons.org/

const components = {
  external: External,
  facebook: Facebook,
  github: Github,
  instagram: Instagram,
  mail: Mail,
  linkedin: Linkedin,
  rss: Rss,
  twitter: Twitter,
  youtube: Youtube,
}

const SocialIcon = ({ kind, href, size = 8 }) => {
  if (!href || (kind === 'mail' && !/^mailto:\w+([.-]?\w+)@\w+([.-]?\w+)(.\w{2,3})+$/.test(href)))
    return null

  const SocialSvg = components[kind]

  return (
    <Link className="text-sm transition" href={href}>
      <>
        <span className="sr-only">{kind}</span>
        <SocialSvg
          className={`text-gray-500 hover:text-day-accent dark:text-gray-400 dark:hover:text-night-accent h-${size} w-${size}`}
        />
      </>
    </Link>
  )
}

export default SocialIcon
