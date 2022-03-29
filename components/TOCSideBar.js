/**
 * @typedef TocHeading
 * @prop {string} value
 * @prop {number} depth
 * @prop {string} url
 */

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
const TOCSideBar = ({ toc, indentDepth = 3, fromHeading = 1, toHeading = 6, exclude = '' }) => {
  const re = Array.isArray(exclude)
    ? new RegExp('^(' + exclude.join('|') + ')$', 'i')
    : new RegExp('^(' + exclude + ')$', 'i')

  const filteredToc = toc.filter(
    (heading) =>
      heading.depth >= fromHeading && heading.depth <= toHeading && !re.test(heading.value)
  )

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
            {filteredToc.map((heading) => (
              <div key={heading.value} className="transition-all duration-500 ease-in-out">
                <a href={heading.url} className="active-link">
                  <p data-before="❯" className="relative pl-2">
                    {heading.value}
                  </p>
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}

export default TOCSideBar
