import siteMetadata from '@/data/siteMetadata'
import SocialIcon from '@/components/social-icons'
import { PageSeo } from '@/components/SEO'

export default function About() {
  return (
    <>
      <PageSeo
        title={`About - ${siteMetadata.author}`}
        description={`About me - ${siteMetadata.author}`}
        url={`${siteMetadata.siteUrl}/about`}
      />
      <div className="divide-y">
        <div className="pt-6 pb-8 space-y-2 md:space-y-5">
          <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            About
          </h1>
        </div>
        <div className="items-start space-y-2 xl:grid xl:grid-cols-3 xl:gap-x-8 xl:space-y-0">
          <div className="flex flex-col items-center pt-8 space-x-2">
            <img src={siteMetadata.image} alt="avatar" className="w-48 h-48 mr-2 rounded-full" />
            <h3 className="pt-4 pb-2 text-2xl font-bold leading-8 tracking-tight">
              {siteMetadata.author}
            </h3>
            <div className="text-gray-500 dark:text-gray-400">Staff Software Engineer</div>
            <div className="text-gray-500 dark:text-gray-400">General Electric</div>
            <div className="flex pt-6 space-x-3">
              <SocialIcon kind="mail" href={`mailto:${siteMetadata.email}`} />
              <SocialIcon kind="github" href={siteMetadata.github} />
              {/* <SocialIcon kind="facebook" href={siteMetadata.facebook} /> */}
              {/* <SocialIcon kind="youtube" href={siteMetadata.youtube} /> */}
              <SocialIcon kind="linkedin" href={siteMetadata.linkedin} />
              <SocialIcon kind="instagram" href={siteMetadata.instagram} />
              <SocialIcon kind="twitter" href={siteMetadata.twitter} />
            </div>
          </div>
          <div className="pt-8 pb-8 prose dark:prose-dark max-w-none xl:col-span-2">
            <p>
              Hi 👋🏻, my name is Ryan Toler, and I'm a Staff Sofware Engineer at GE Aviation in
              Cincinnati, Ohio. I graduated from the Georgia Institue of Technology in 2019 with my
              Master's in Computer Science. I specialize in using serverless technologies to build
              scalable and performant solutions.
            </p>
            <p>
              Outside of my day job, I am also an Instructional Associate at the Georgia Institute
              of Technology in the Computer Science Department. I currently help run one of the
              largest online classes in the world,{' '}
              <a href="https://omscs.gatech.edu/cse-6242-data-visual-analytics" target="_blank">
                CSE 6242 - Data and Visual Analytics
              </a>
              , which averages just under 1,000 graduate students a semester. I also assist with{' '}
              <a href="https://omscs.gatech.edu/cse-6242-data-visual-analytics" target="_blank">
                CS 7646 - Machine Learning for Trading, to scratch my itch for stock trading.
              </a>
              .
            </p>
            <p>
              In my free time, I enjoy working out, playing golf, trading stock options (my favorite
              ticker to trade is $TSLA), and staying up to date on the latest trends in computer
              science.
            </p>
          </div>
        </div>
      </div>
    </>
  )
}
