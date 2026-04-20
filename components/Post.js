import Image from './Image'
import Link from './Link'
import formatDate from '@/lib/utils/formatDate'

export default function Post({ frontMatter }) {
  const { slug, date, title, image, tags, summary } = frontMatter
  return (
    <div className="group w-full">
      <div className="c-card overflow-hidden rounded-lg bg-transparent transition duration-500 group-hover:scale-105">
        <div className="relative max-h-4 overflow-hidden rounded-lg pb-60">
          <Link href={`/blog/${slug}`} aria-label={`Read ${title}`}>
            <Image alt={title} src={image} layout="fill" objectFit="cover" />
          </Link>
        </div>
        <div className="py-4">
          <div className="flex w-full flex-wrap place-content-between items-center gap-4">
            <div className="-mx-2">
              {tags.slice(0, 2).map((tag) => (
                <span
                  key={tag}
                  className="mx-2 inline-block rounded border border-gray-700 px-2 py-1 text-xs font-medium hover:border-day-accent-hover dark:bg-night dark:hover:border-night-accent-hover"
                >
                  <Link href={`/tags/${tag}`}>{tag}</Link>
                </span>
              ))}
            </div>
            <time dateTime={date}>{formatDate(date)}</time>
          </div>
          <h2 className="mb-2 mt-2 font-bold md:text-xl">
            <Link href={`/blog/${slug}`}>{title}</Link>
          </h2>
          <p className="text-sm tracking-wider text-gray-600 dark:text-gray-300">{summary}</p>
        </div>
      </div>
    </div>
  )
}
