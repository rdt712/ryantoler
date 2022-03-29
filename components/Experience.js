import Link from './Link'
import HeaderIcon from './header-icons'

export default function Experience() {
  return (
    <div className="max-w-none pt-8 pb-8 xl:col-span-2">
      <div className="my-4 flex flex-col">
        <span className="text-4xl font-bold">Work Experience</span>
        <span className="mb-4 inline-block h-0.5 w-20 rounded bg-day-accent dark:bg-night-accent"></span>
      </div>
      <div className="ml-[22px]">
        <div className="flex flex-col place-items-start border-l border-b border-gray-300 pl-4 dark:border-gray-700">
          <span className="relative mt-4 ml-[-40px] inline-block rounded border border-gray-700 bg-day py-1 px-2 text-xs font-medium hover:border-day-accent-hover dark:bg-night dark:hover:border-night-accent-hover">
            March 2022 - Current
          </span>
          <div className="flex flex-col place-content-between py-4">
            <div className="relative flex flex-row place-items-center whitespace-pre font-bold">
              <HeaderIcon kind="about" size="24" />
              <Link className="text-2xl" href="https://www.trek10.com">
                Trek10, Inc.
              </Link>
            </div>
            <span className="mx-4 text-sm font-bold text-gray-700 dark:text-gray-300">
              › Cloud Architect
            </span>
            <div className="prose mt-4 dark:prose-dark">
              <ul className="block space-y-2 text-base">
                <li>
                  Collaborating on building consumer revenue products, working closely with Product
                  Managers, Engineering Managers and various other stakeholders across Condé Nast.
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="flex flex-col place-items-start border-l border-b border-gray-300 pl-4 dark:border-gray-700">
          <span className="relative mt-4 ml-[-40px] inline-block rounded border border-gray-700 bg-day py-1 px-2 text-xs font-medium hover:border-day-accent-hover dark:bg-night dark:hover:border-night-accent-hover">
            Mar 2019 - Jan 2021
          </span>
          <div className="flex flex-col place-content-between py-4">
            <div className="relative flex flex-row place-items-center whitespace-pre font-bold">
              <HeaderIcon kind="about" size="24" />
              <Link className="text-2xl" href="https://www.trek10.com">
                Trek10, Inc.
              </Link>
            </div>
            <span className="mx-4 text-sm font-bold text-gray-700 dark:text-gray-300">
              › Engineer - Web Development
            </span>
            <div className="prose mt-4 dark:prose-dark">
              <ul className="block space-y-2 text-base">
                <li>
                  Developed a micro-frontend framework to run multiple frontend applications on the
                  same page, where each application can be built independently and ships with
                  necessary JavaScript and bundled assets.
                </li>
                <li>
                  Improved page load times by ~15% by optimizing build files, using Webpack plugins,
                  to split large javascript files to multiple chunks and employing an on-demand lazy
                  loading of assets.
                </li>
                <li>
                  Optimized server query response time from 17ms to 3ms by restructuring API at
                  NodeJS proxy layer.
                </li>
                <li>
                  Collaborated with DevSecOps to optimize build and deployment pipelines, which
                  helped reduce the time to setup a new infrastructure for test-driven deployment of
                  web applications and NodeJS applications.
                </li>
              </ul>
            </div>
          </div>
        </div>
        {/* <div className="flex flex-col place-items-start border-l border-b border-gray-300 pl-4 dark:border-gray-700">
          <span className="relative mt-4 ml-[-40px] inline-block rounded border border-gray-700 bg-day py-1 px-2 text-xs font-medium hover:border-accent dark:bg-night">
            Feb 2017 - Dec 2018
          </span>
          <div className="flex flex-col place-content-between py-4">
            <div className="relative flex flex-row place-items-center whitespace-pre font-bold">
              <svg
                viewBox="0 0 24 24"
                fill="currentColor"
                className="group-hover:animate-spin-slow mr-1 text-gray-900 dark:text-gray-100"
                style="width:24px;height:24px"
                role="presentation"
              >
                <path
                  d="M20,6C20.58,6 21.05,6.2 21.42,6.59C21.8,7 22,7.45 22,8V19C22,19.55 21.8,20 21.42,20.41C21.05,20.8 20.58,21 20,21H4C3.42,21 2.95,20.8 2.58,20.41C2.2,20 2,19.55 2,19V8C2,7.45 2.2,7 2.58,6.59C2.95,6.2 3.42,6 4,6H8V4C8,3.42 8.2,2.95 8.58,2.58C8.95,2.2 9.42,2 10,2H14C14.58,2 15.05,2.2 15.42,2.58C15.8,2.95 16,3.42 16,4V6H20M4,8V19H20V8H4M14,6V4H10V6H14Z"
                  fill="currentColor"
                ></path>
              </svg>
              <a
                className="text-2xl"
                href="https://www.linkedin.com/company/widasconcepts-india-private-limited"
                target="_blank"
                rel="noreferrer nofollow"
              >
                WidasConcepts
              </a>
            </div>
            <span className="mx-4 text-sm font-bold text-gray-700 dark:text-gray-300">
              › Full Stack Web Developer
            </span>
            <div className="prose mt-4 dark:prose-dark">
              <ul className="block space-y-2 text-base">
                <li>
                  Spearheaded a team of 5 developers, following Agile Methodologies to effectively
                  design, develop and test Angular based web applications, with 100% on time
                  delivery.
                </li>
                <li>
                  Built, tested and deployed scalable, high availability, modular and secure web
                  applications with emphasis on user accessibility, based on ReactJS and Angular
                  frameworks.
                </li>
                <li>
                  Configured Docker deployment solutions using Gitlab CI for JavaScript based Web
                  and Server side applications.
                </li>
                <li>
                  Developed a Live Tracking Platform using NodeJS and Socket.io to provide near real
                  time tracking of on-road vehicles using OBD systems, and rendered the data on the
                  front-end using Google Maps APIs.
                </li>
                <li>
                  Designed &amp; developed telematics products, from the Android app in Java, to web
                  applications in ReactJS and Angular, and several backend systems in NodeJS which
                  required rapid transition between different technologies.
                </li>
                <li>
                  Helped formulate and document software development and deployment best practices,
                  by sharing sample code changes from various development teams within the
                  organization.
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="flex flex-col place-items-start border-l border-b border-gray-300 pl-4 dark:border-gray-700">
          <span className="relative mt-4 ml-[-40px] inline-block rounded border border-gray-700 bg-day py-1 px-2 text-xs font-medium hover:border-accent dark:bg-night">
            Oct 2013 - Oct 2016
          </span>
          <div className="flex flex-col place-content-between py-4">
            <div className="relative flex flex-row place-items-center whitespace-pre font-bold">
              <svg
                viewBox="0 0 24 24"
                fill="currentColor"
                className="group-hover:animate-spin-slow mr-1 text-gray-900 dark:text-gray-100"
                style="width:24px;height:24px"
                role="presentation"
              >
                <path
                  d="M20,6C20.58,6 21.05,6.2 21.42,6.59C21.8,7 22,7.45 22,8V19C22,19.55 21.8,20 21.42,20.41C21.05,20.8 20.58,21 20,21H4C3.42,21 2.95,20.8 2.58,20.41C2.2,20 2,19.55 2,19V8C2,7.45 2.2,7 2.58,6.59C2.95,6.2 3.42,6 4,6H8V4C8,3.42 8.2,2.95 8.58,2.58C8.95,2.2 9.42,2 10,2H14C14.58,2 15.05,2.2 15.42,2.58C15.8,2.95 16,3.42 16,4V6H20M4,8V19H20V8H4M14,6V4H10V6H14Z"
                  fill="currentColor"
                ></path>
              </svg>
              <a
                className="text-2xl"
                href="https://ve.linkedin.com/company/humesis-corporation"
                target="_blank"
                rel="noreferrer nofollow"
              >
                Humesis
              </a>
            </div>
            <span className="mx-4 text-sm font-bold text-gray-700 dark:text-gray-300">
              › Software Engineer - Mobile &amp; Web
            </span>
            <div className="prose mt-4 dark:prose-dark">
              <ul className="block space-y-2 text-base">
                <li>
                  Integrated REST APIs for Android &amp; Angular based Web apps to consume JSON data
                  and developed reusable code and libraries to facilitate smooth future usage.
                </li>
                <li>
                  Improved application resiliency by setting up a pre-commit hook to run tests,
                  before code is committed and pushed to reduce the risk of breaking live production
                  applications after enabling new features and bug fixes.
                </li>
                <li>
                  Designed and Built an all in one Cloud Storage application using APIs from Google
                  Drive, OneDrive, Box, Dropbox.
                </li>
                <li>
                  Built prototypes for Android and Web applications integrating with 3rd party APIs
                  for modules pertaining to User Identity Management using Google, Facebook,
                  Microsoft APIs.
                </li>
              </ul>
            </div>
          </div>
        </div> */}
      </div>
    </div>
  )
}
