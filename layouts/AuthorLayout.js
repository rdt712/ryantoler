import Education from '@/components/Education'
import Experience from '@/components/Experience'
import Image from '@/components/Image'
import SocialIcon from '@/components/social-icons'
import Technologies from '@/components/Technologies'
import { PageSEO } from '@/components/SEO'

export default function AuthorLayout({ children, frontMatter }) {
  const { name, avatar, occupation, company, email, twitter, linkedin, github } = frontMatter

  return (
    <>
      <PageSEO title={`About - ${name}`} description={`About me - ${name}`} />
      <div className="divide-y divide-gray-500 dark:divide-gray-500">
        <div className="space-y-2 pt-6 pb-8 md:space-y-5">
          <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            Hello{' '}
            <span className="wave" role="img" aria-label="Hello">
              👋🏻
            </span>
          </h1>
        </div>
        <div className="items-start space-y-2 divide-y divide-gray-500 dark:divide-gray-500 xl:grid xl:grid-cols-3 xl:gap-x-8 xl:space-y-0">
          <div className="flex flex-col items-center space-x-2 pt-8 pb-8">
            <Image
              src={avatar}
              alt="avatar"
              width="192px"
              height="192px"
              className="h-48 w-48 rounded-full"
            />
            <h3 className="pt-4 pb-2 text-2xl font-bold leading-8 tracking-tight">{name}</h3>
            <div className="text-gray-500 dark:text-gray-400">
              {occupation} @ {company}
            </div>
            <div className="text-center text-gray-500 dark:text-gray-400">
              I build things on AWS without thinking about servers.
            </div>
            <br />
            <br />
            <div className="text-center tracking-tighter text-gray-500 dark:text-gray-400">
              ~ Let's talk serverless ~
            </div>
            <div className="flex space-x-3 pt-4">
              <SocialIcon kind="mail" href={`mailto:${email}`} />
              <SocialIcon kind="github" href={github} />
              <SocialIcon kind="linkedin" href={linkedin} />
              <SocialIcon kind="twitter" href={twitter} />
            </div>
          </div>
          <div className="xl:border-top-0 prose max-w-none pt-8 pb-8 dark:prose-dark xl:col-span-2">
            {children}
          </div>
          <Experience />
          <div>
            <Education />
            <Technologies />
          </div>
        </div>
      </div>
    </>
  )
}
