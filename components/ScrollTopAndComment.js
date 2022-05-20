import ThemeSwitch from './ThemeSwitch'
import { useEffect, useState } from 'react'
import smoothscroll from 'smoothscroll-polyfill'

const ScrollTopAndComment = () => {
  const [show, setShow] = useState(false)

  useEffect(() => {
    smoothscroll.polyfill()
    const handleWindowScroll = () => {
      if (window.scrollY > 50) setShow(true)
      else setShow(false)
    }

    window.addEventListener('scroll', handleWindowScroll)
    return () => window.removeEventListener('scroll', handleWindowScroll)
  }, [])

  const handleScrollTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }
  const handleScrollToComment = () => {
    document.getElementById('comment').scrollIntoView()
  }
  return (
    <div
      className={`fixed right-8 bottom-8 hidden flex-col gap-3 ${show ? 'md:flex' : 'md:hidden'}`}
    >
      <button
        title="Scroll To Top"
        aria-label="Scroll To Top"
        type="button"
        onClick={handleScrollTop}
        className="ml-1 mr-1 h-8 w-8 rounded-full p-1 text-gray-500 transition-all hover:bg-gray-300 dark:text-gray-400 dark:hover:bg-gray-600 sm:ml-4"
        style={{ opacity: '1px' }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="text-gray-900 dark:text-gray-100"
        >
          <path
            fill="currentColor"
            d="M7.41,18.41L6,17L12,11L18,17L16.59,18.41L12,13.83L7.41,18.41M7.41,12.41L6,11L12,5L18,11L16.59,12.41L12,7.83L7.41,12.41Z"
          ></path>
        </svg>
      </button>
      <ThemeSwitch />
      <button
        title="Scroll To Comments"
        aria-label="Scroll To Comments"
        type="button"
        onClick={handleScrollToComment}
        className="ml-1 mr-1 h-8 w-8 rounded-full p-1 text-gray-500 transition-all hover:bg-gray-300 dark:text-gray-400 dark:hover:bg-gray-600 sm:ml-4"
        style={{ opacity: '1px' }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="text-gray-900 dark:text-gray-100"
        >
          <path
            fill="currentColor"
            d="M18 14H20V17H23V19H20V22H18V19H15V17H18V14M12 3C17.5 3 22 6.58 22 11C22 11.58 21.92 12.14 21.78 12.68C20.95 12.25 20 12 19 12C15.69 12 13 14.69 13 18L13.08 18.95L12 19C10.76 19 9.57 18.82 8.47 18.5C5.55 21 2 21 2 21C4.33 18.67 4.7 17.1 4.75 16.5C3.05 15.07 2 13.14 2 11C2 6.58 6.5 3 12 3Z"
          ></path>
        </svg>
      </button>
    </div>
  )
}

export default ScrollTopAndComment
