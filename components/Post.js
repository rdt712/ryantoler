import Image from './Image'
import Link from './Link'
import formatDate from '@/lib/utils/formatDate'

export default function Post({ frontMatter }) {
  const { slug, date, title, image, tags, summary, permalink } = frontMatter
  return (
    <div className="group w-full">
      <Link
        href={`/blog/${slug}`}
        className="c-card block transform overflow-hidden rounded-lg bg-transparent transition duration-500 group-hover:scale-105"
      >
        <div className="relative max-h-4 overflow-hidden rounded-lg pb-60">
          <Image alt={title} src={image} layout="fill" />
        </div>
        <div className="py-4">
          <span className="inline-flex w-full items-center justify-between">
            <span className="inline-block rounded border border-gray-700 py-1 px-2 text-xs font-medium">
              {tags[0]}
            </span>
            <time dateTime={date}>{formatDate(date)}</time>
          </span>
          <h2 className="mt-2 mb-2 font-bold md:text-xl">{title}</h2>
          <p className="text-sm tracking-wider text-gray-600 dark:text-gray-300">{summary}</p>
        </div>
      </Link>
    </div>
  )
}
