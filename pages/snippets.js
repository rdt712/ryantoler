import siteMetadata from '@/data/siteMetadata'
import Card from '@/components/Card'
import { PageSEO } from '@/components/SEO'

export default function Snippets() {
  return (
    <>
      <PageSEO title={`Snippets - ${siteMetadata.author}`} description={siteMetadata.description} />
      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        <div className="space-y-2 pt-6 pb-8 md:space-y-5">
          <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            Code Snippets
          </h1>
          <p className="text-lg leading-7 text-gray-500 dark:text-gray-400">
            These are a collection of code snippets I've used in the past and saved. Some are
            Serverless Functions, which include set up instructions. Others are anything from random
            CSS snippets to Node.js scripts and Python scripts.
          </p>
        </div>
        <div className="container py-12">
          <div className="-m-4 flex flex-wrap"></div>
        </div>
      </div>
    </>
  )
}
