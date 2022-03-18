import siteMetadata from '@/data/siteMetadata'
import headerNavLinks from '@/data/headerNavLinks'
import Logo from '@/data/logo.svg'
import Link from './Link'
import SectionContainer from './SectionContainer'
import Footer from './Footer'
import MobileNav from './MobileNav'
import Typewriter from 'typewriter-effect'
import ThemeSwitch from './ThemeSwitch'
import { useRouter } from 'next/router'

const LayoutWrapper = ({ children }) => {
  const router = useRouter()

  let path
  if (router.pathname.endsWith('/[...slug]')) {
    path = router.pathname.replace('/[...slug]', '')
  } else {
    path = router.pathname
  }
  return (
    <SectionContainer>
      <div className="flex h-screen flex-col justify-between">
        <header className="flex items-center justify-between py-10">
          <div>
            <Link href="/">
              <div className="text-primary dark:text-primary flex items-center justify-between text-xl font-semibold">
                <Logo className="mr-1 fill-gray-800 dark:fill-white" width={25} height={25} />
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
            <div className="hidden sm:block">
              {headerNavLinks.map((link) => (
                <Link
                  key={link.title}
                  href={link.href}
                  className="p-1 font-medium text-gray-900 dark:text-gray-100 sm:p-4"
                >
                  {link.title}
                </Link>
              ))}
            </div>
            <ThemeSwitch />
            <MobileNav />
          </div>
        </header>
        <main className="mb-auto">{children}</main>
        <Footer />
      </div>
    </SectionContainer>
  )
}

export default LayoutWrapper
