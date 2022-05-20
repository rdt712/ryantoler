import siteMetadata from '@/data/siteMetadata'
import headerNavLinks from '@/data/headerNavLinks'
import Logo from '@/data/logo.svg'
import HeaderIcon from '@/components/header-icons'
import Link from './Link'
import MobileNav from './MobileNav'
import Typewriter from 'typewriter-effect'
import ThemeSwitch from './ThemeSwitch'
import { useRouter } from 'next/router'

export default function Header() {
  const router = useRouter()

  let path
  if (router.pathname.endsWith('/[...slug]')) {
    path = router.pathname.replace('/[...slug]', '')
  } else if (router.pathname.endsWith('/[tag]')) {
    path = router.pathname.replace('/[tag]', '')
  } else if (router.pathname.endsWith('/')) {
    path = router.pathname + 'home'
  } else {
    path = router.pathname
  }

  return (
    <header className="flex flex-col items-center justify-between gap-4 py-10 sm:flex-row">
      <div>
        <Link href="/">
          <div className="flex items-center justify-between text-xl font-semibold text-gray-900 dark:text-white">
            <Logo className="mr-1 fill-day-accent dark:fill-night-accent" width={25} height={25} />
            {`${siteMetadata.headerTitle} ~${path}`}
            <Typewriter
              options={{
                strings: [],
                autoStart: true,
                loop: true,
              }}
            />
          </div>
        </Link>
      </div>
      <div className="flex items-center text-base leading-5">
        {/* Add hidden to class if you want to enable MobileNav */}
        <div>
          {headerNavLinks.map((link) => {
            if (!link?.hidden) {
              return (
                <Link
                  key={link.title}
                  href={link.href}
                  className={
                    router.asPath === link.href
                      ? 'hover-underline-animation inline-flex flex-row p-2 font-medium text-day-accent dark:text-night-accent'
                      : 'hover-underline-animation inline-flex flex-row p-2 font-medium text-gray-900 dark:text-gray-100'
                  }
                >
                  <HeaderIcon kind={link.kind} />
                  {link.title}
                </Link>
              )
            }
          })}
        </div>
        <ThemeSwitch />
        {/* <MobileNav /> */}
      </div>
    </header>
  )
}
