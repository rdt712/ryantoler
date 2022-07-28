/**
 * @typedef TocHeading
 * @prop {string} value
 * @prop {number} depth
 * @prop {string} url
 * @prop {string} id
 */

/**
 * Generates a sticky table of contents
 *
 * @param {{
 *  toc: TocHeading[],
 *  fromHeading?: number,
 *  toHeading?: number,
 * }} props
 *
 */

import React, { useEffect, useState } from 'react'

const useIntersectionObserver = (headings) => {
  const [activeId, setActiveId] = useState()

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && entry.intersectionRatio === 1) {
            setActiveId(entry.target.id)
          }
        })
      },
      { rootMargin: '0px 0px -70% 0px', threshold: 1.0 }
    )

    headings.forEach((heading) => {
      observer.observe(document.getElementById(heading.id))
    })

    return () => {
      observer.disconnect()
    }
  }, [headings])
  return activeId
}

const useScrollHeight = () => {
  const [offset, setOffset] = useState()

  useEffect(() => {
    const onScroll = () =>
      setOffset(() => {
        const documentHeight = Math.max(
          document.body.scrollHeight || 0,
          document.documentElement.scrollHeight || 0,
          document.body.offsetHeight || 0,
          document.documentElement.offsetHeight || 0,
          document.body.clientHeight || 0,
          document.documentElement.clientHeight || 0
        )

        const windowHeight =
          window.innerHeight ||
          document.documentElement.clientHeight ||
          document.body.clientHeight ||
          0

        const scrollY =
          window.pageYOffset || document.body.scrollTop || document.documentElement.scrollTop || 0

        return Math.round(((scrollY + windowHeight) / documentHeight) * 100)
      })
    // clean up code
    window.removeEventListener('scroll', onScroll)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return offset
}

const getNestedHeadings = (headings) => {
  const nestedHeadings = []

  headings.forEach((heading, index) => {
    const { value, url, id, depth } = heading

    if (depth === 2) {
      nestedHeadings.push({ id, value, url, items: [] })
    } else if (depth === 3 && nestedHeadings.length > 0) {
      nestedHeadings[nestedHeadings.length - 1].items.push({
        id,
        value,
        url,
        parentId: nestedHeadings[nestedHeadings.length - 1].id,
      })
    }
  })

  return nestedHeadings
}

const Headings = ({ headings, activeId }) => (
  <ul>
    {headings.map((heading) => (
      <div key={heading.id} className="transition-all duration-500 ease-in-out">
        <a
          key={`a#${heading.id}`}
          href={heading.url}
          className={
            heading.id === activeId
              ? 'current-active-section font medium text-night dark:text-day'
              : ''
          }
        >
          <p className="relative pl-2">{heading.value}</p>
        </a>
        {heading.items.length > 0 && (
          <div className="spacy-y-10 mt-1 ml-4">
            {heading.items.map((child) => (
              <div key={child.id} className="transition-all duration-500 ease-in-out">
                <a
                  href={child.url}
                  className={
                    child.id === activeId
                      ? 'current-active-section font-medium text-night dark:text-day'
                      : ''
                  }
                >
                  <p className="relative pl-2">{child.value}</p>
                </a>
              </div>
            ))}
          </div>
        )}
      </div>
    ))}
  </ul>
)

const TOCSticky = ({ toc, fromHeading = 2, toHeading = 3 }) => {
  const headings = toc.filter(
    (heading) => heading.depth >= fromHeading && heading.depth <= toHeading
  )

  const nestedHeadings = getNestedHeadings(headings)
  const activeId = useIntersectionObserver(headings)
  const scrollHeight = useScrollHeight()

  return (
    <>
      <div className="sticky top-4 hidden xl:top-8 xl:block">
        <div className="mb-4 px-2 pl-10 text-sm tracking-tight text-gray-500 dark:text-gray-500">
          <p className="mb-4 text-xl font-bold">On this page</p>
          <div className="mt-1 transform space-y-1 transition duration-500 ease-in-out">
            <div
              className="pagescroll-progress-wrapper bg-gray-300 dark:bg-gray-500"
              style={{ opacity: 0.5 }}
            >
              <div
                className="pagescroll-progress-track bg-gray-500 dark:bg-gray-300"
                style={{ height: `${scrollHeight}%` }}
              ></div>
            </div>
            <Headings headings={nestedHeadings} activeId={activeId} />
          </div>
        </div>
      </div>
    </>
  )
}

export default TOCSticky
