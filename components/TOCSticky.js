/**
 * @typedef TocHeading
 * @prop {string} value
 * @prop {number} depth
 * @prop {string} url
 */

import React, { useEffect, useRef, useState } from 'react'

/**
 * Generates an inline table of contents
 * Exclude titles matching this string (new RegExp('^(' + string + ')$', 'i')).
 * If an array is passed the array gets joined with a pipe (new RegExp('^(' + array.join('|') + ')$', 'i')).
 *
 * @param {{
 *  toc: TocHeading[],
 *  indentDepth?: number,
 *  fromHeading?: number,
 *  toHeading?: number,
 *  exclude?: string|string[]
 * }} props
 *
 */

const useHeadingsData = () => {
  const [nestedHeadings, setNestedHeadings] = useState([])

  useEffect(() => {
    const headingElements = Array.from(document.querySelectorAll('h2[id], h3[id]'))

    console.log(headingElements)

    const newNestedHeadings = getNestedHeadings(headingElements)
    setNestedHeadings(newNestedHeadings)
  }, [])

  return { nestedHeadings }
}

const getNestedHeadings = (headingElements) => {
  const nestedHeadings = []

  headingElements.forEach((heading, index) => {
    const { innerText: title, id } = heading

    if (heading.nodeName === 'H2') {
      nestedHeadings.push({ id, title, items: [] })
    } else if (heading.nodeName === 'H3' && nestedHeadings.length > 0) {
      nestedHeadings[nestedHeadings.length - 1].items.push({
        id,
        title,
      })
    }
  })

  return nestedHeadings
}

const useIntersectionObserver = (setActiveId) => {
  const headingElementsRef = useRef({})
  // const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const callback = (headings) => {
      headingElementsRef.current = headings.reduce((map, headingElement) => {
        map[headingElement.target.id] = headingElement
        return map
      }, headingElementsRef.current)

      const visibleHeadings = []
      Object.keys(headingElementsRef.current).forEach((key) => {
        const headingElement = headingElementsRef.current[key]
        if (headingElement.isIntersecting) visibleHeadings.push(headingElement)
      })

      const getIndexFromId = (id) => headingElements.findIndex((heading) => heading.id === id)

      if (visibleHeadings.length === 1) {
        setActiveId(visibleHeadings[0].target.id)
      } else if (visibleHeadings.length > 1) {
        const sortedVisibleHeadings = visibleHeadings.sort(
          (a, b) => getIndexFromId(a.target.id) > getIndexFromId(b.target.id)
        )
        setActiveId(sortedVisibleHeadings[0].target.id)
      }
    }

    const observer = new IntersectionObserver(callback, {
      rootMargin: '0px 0px -40% 0px',
      threshold: 1.0,
    })

    // Observe all the Section Headers
    const headingElements = Array.from(document.querySelectorAll('h2, h3'))
    headingElements.forEach((element) => observer.observe(element))

    return () => observer.disconnect()
  }, [setActiveId])
}

const Headings = ({ headings, activeId }) => (
  <ul>
    {headings.map((heading) => (
      <div key={heading.id} className="transition-all duration-500 ease-in-out">
        <a
          href={`#${heading.id}`}
          className={
            heading.id === activeId ? 'active-link current-active-selection' : 'active-link'
          }
        >
          <p data-before="❯" className="relative pl-2">
            {heading.title}
          </p>
        </a>
        {heading.items.length > 0 && (
          <div className="spacy-y-1 mt-1 ml-4">
            {heading.items.map((child) => (
              <div key={child.id} className="transition-all duration-500 ease-in-out">
                <a
                  href={`#${child.id}`}
                  className={
                    child.id === activeId ? 'active-link current-active-selection' : 'active-link'
                  }
                >
                  <p data-before="❯" className="relative pl-2">
                    {child.title}
                  </p>
                </a>
              </div>
            ))}
          </div>
        )}
      </div>
    ))}
  </ul>
)

const TOCSticky = ({ toc, indentDepth = 3, fromHeading = 1, toHeading = 6, exclude = '' }) => {
  const [activeId, setActiveId] = useState()
  const { nestedHeadings } = useHeadingsData()
  console.log(toc)
  useIntersectionObserver(setActiveId)

  const re = Array.isArray(exclude)
    ? new RegExp('^(' + exclude.join('|') + ')$', 'i')
    : new RegExp('^(' + exclude + ')$', 'i')

  const headings = toc.filter(
    (heading) =>
      heading.depth >= fromHeading && heading.depth <= toHeading && !re.test(heading.value)
  )

  console.log(headings)

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
                style={{ height: '6%' }}
              ></div>
            </div>
            <Headings headings={nestedHeadings} activeId={activeId} />
          </div>
        </div>
      </div>
    </>
  )
}

// const TOCSideBar = ({ toc, indentDepth = 3, fromHeading = 1, toHeading = 6, exclude = '' }) => {
//   const re = Array.isArray(exclude)
//     ? new RegExp('^(' + exclude.join('|') + ')$', 'i')
//     : new RegExp('^(' + exclude + ')$', 'i')

//   const headings = toc.filter(
//     (heading) =>
//       heading.depth >= fromHeading && heading.depth <= toHeading && !re.test(heading.value)
//   )

//   const [containerRef, isVisible] = useIntersectionObserver({
//       rootMargin: '0px 0px -40% 0px',
//       threshold: 1.0,
//     })

//   const TocHeadings = ({ headings, activeId }) => (
//     <>
//       {headings.map((heading) => (
//         <div key={heading.value} className="transition-all duration-500 ease-in-out">
//           <a href={heading.url} className="active-link">
//             <p data-before="❯" className="relative pl-2">
//               {heading.value}
//             </p>
//           </a>
//         </div>
//       ))}
//     </>
//   )

//   return (
//     <>
//       <div className="sticky top-4 hidden xl:top-8 xl:block">
//         <div className="mb-4 px-2 pl-10 text-sm tracking-tight text-gray-500 dark:text-gray-500">
//           <p className="mb-4 text-xl font-bold">On this page</p>
//           <div className="mt-1 transform space-y-1 transition duration-500 ease-in-out">
//             <div
//               className="pagescroll-progress-wrapper bg-gray-300 dark:bg-gray-500"
//               style={{ opacity: 0.5 }}
//             >
//               <div
//                 className="pagescroll-progress-track bg-gray-500 dark:bg-gray-300"
//                 style={{ height: '6%' }}
//               ></div>
//             </div>
//             <TocHeadings headings={headings} activeId={activeId} />
//             {/* {headings.map((heading) => (
//               <div key={heading.value} className="transition-all duration-500 ease-in-out">
//                 <a href={heading.url} className="active-link">
//                   <p data-before="❯" className="relative pl-2">
//                     {heading.value}
//                   </p>
//                 </a>
//               </div>
//             ))} */}
//           </div>
//         </div>
//       </div>
//     </>
//   )
// }

export default TOCSticky
