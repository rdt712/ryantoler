import Link from '@/components/Link'
import formatDate from '@/lib/utils/formatDate'

export default function Snippet({ frontMatter }) {
  const { slug, date, title, summary, tags } = frontMatter
  return (
    <div className="group w-full">
      <Link
        href={`/snippets/${slug}`}
        className="c-card block transform cursor-pointer overflow-hidden rounded border border-gray-200 p-px transition duration-500 group-hover:scale-105 dark:border-gray-700"
      >
        <div className="absolute bottom-0 left-0 h-1 w-full origin-left scale-x-0 transform bg-day-accent duration-300 group-hover:scale-x-100 dark:bg-night-accent"></div>
        <div className="absolute bottom-0 left-0 h-full w-1 origin-bottom scale-y-0 transform bg-day-accent duration-300 group-hover:scale-y-100 dark:bg-night-accent"></div>
        <div className="absolute top-0 left-0 h-1 w-full origin-right scale-x-0 transform bg-day-accent duration-300 group-hover:scale-x-100 dark:bg-night-accent"></div>
        <div className="absolute bottom-0 right-0 h-full w-1 origin-top scale-y-0 transform bg-day-accent duration-300 group-hover:scale-y-100 dark:bg-night-accent"></div>
        <div className="relative space-y-2 p-4 dark:bg-gray-900">
          <h2 className="mt-2 mb-2 font-bold md:text-xl">{title}</h2>
          <span className="inline-flex w-full items-center justify-between">
            <span className="inline-block rounded border border-gray-700 py-1 px-2 text-xs font-medium">
              {tags[0]}
            </span>
            <time dateTime={date} className="text-sm font-semibold text-gray-500">
              {formatDate(date)}
            </time>
          </span>
          <p className="text-sm tracking-wider text-gray-600 dark:text-gray-300">{summary}</p>
        </div>
      </Link>
    </div>
  )
}
