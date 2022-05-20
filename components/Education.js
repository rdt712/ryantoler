import Link from './Link'
import HeaderIcon from './header-icons'

export default function Education() {
  return (
    <div className="max-w-none pt-8 pb-8 xl:col-span-2">
      <div className="my-4 flex flex-col">
        <span className="text-4xl font-bold">Education</span>
        <span className="mb-4 inline-block h-0.5 w-20 rounded bg-day-accent dark:bg-night-accent"></span>
      </div>
      <div className="ml-[22px]">
        <div className="flex flex-col place-items-start border-l border-b border-gray-300 pl-4 dark:border-gray-700">
          <span className="relative mt-4 ml-[-40px] inline-block rounded border border-gray-700 bg-day py-1 px-2 text-xs font-medium hover:border-day-accent-hover dark:bg-night dark:hover:border-night-accent-hover">
            Aug 2017 - Dec 2019
          </span>
          <div className="w-full py-4">
            <div className="flex w-full flex-col justify-between whitespace-pre font-bold sm:grid sm:grid-cols-3 sm:gap-x-8 sm:space-y-0">
              <span className="col-span-2 inline-flex place-items-center">
                {/* <HeaderIcon kind="about" size="24" /> */}
                <Link
                  className="xl:text-md whitespace-normal break-words text-lg hover:text-day-accent-hover dark:hover:text-night-accent-hover"
                  href="https://www.trek10.com"
                >
                  Georgia Institute of Technology
                </Link>
              </span>
              <span className="xs:text-left col-span-1 mt-4 text-sm font-bold text-gray-700 dark:text-gray-300 sm:text-right">
                GPA: 3.5
              </span>
            </div>
          </div>
          <span className="text-sm font-bold text-gray-700 dark:text-gray-300">Atlanta, GA</span>
          <div className="prose mt-4 mb-4 dark:prose-dark">
            <ul className="block space-y-2 text-base">
              <li>M.S. Computer Science</li>
            </ul>
          </div>
        </div>
        <div className="flex flex-col place-items-start border-l border-b border-gray-300 pl-4 dark:border-gray-700">
          <span className="relative mt-4 ml-[-40px] inline-block rounded border border-gray-700 bg-day py-1 px-2 text-xs font-medium hover:border-day-accent-hover dark:bg-night dark:hover:border-night-accent-hover">
            Aug 2012 - May 2016
          </span>
          <div className="w-full py-4">
            <div className="flex w-full flex-col justify-between whitespace-pre font-bold sm:grid sm:grid-cols-3 sm:gap-x-8 sm:space-y-0">
              <span className="col-span-2 inline-flex place-items-center">
                {/* <HeaderIcon kind="about" size="24" /> */}
                <Link
                  className="xl:text-md whitespace-normal break-words text-lg hover:text-day-accent-hover dark:hover:text-night-accent-hover"
                  href="https://www.nku.edu/"
                >
                  Northern Kentucky University
                </Link>
              </span>
              <span className="xs:text-left col-span-1 mt-4 text-sm font-bold text-gray-700 dark:text-gray-300 sm:text-right">
                GPA: 3.8
              </span>
            </div>
          </div>
          <span className="text-sm font-bold text-gray-700 dark:text-gray-300">
            Highland Heights, KY
          </span>
          <div className="prose mt-4 mb-4 dark:prose-dark">
            <ul className="block space-y-2 text-base">
              <li>B.S. Computer Science</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
