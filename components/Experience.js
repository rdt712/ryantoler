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
            Mar 2022 - Present
          </span>
          <div className="w-full py-4">
            <div className="flex w-full flex-col justify-between whitespace-pre font-bold sm:grid sm:grid-cols-3 sm:gap-x-8 sm:space-y-0">
              <span className="col-span-2 inline-flex place-items-center">
                <HeaderIcon kind="about" size="24" />
                <Link
                  className="whitespace-normal break-words text-2xl hover:text-day-accent-hover dark:hover:text-night-accent-hover"
                  href="https://www.trek10.com"
                >
                  Trek10, Inc.
                </Link>
              </span>
              <span className="xs:text-left col-span-1 mx-4 mt-2 text-sm font-bold text-gray-700 dark:text-gray-300 sm:text-right">
                South Bend, IN
              </span>
            </div>
          </div>
          <span className="m-4 text-sm font-bold text-gray-700 dark:text-gray-300">
            › Cloud Architect
          </span>
          <p className="text-tighter text-sm font-light text-gray-700 dark:text-gray-300"></p>
          <div className="prose mt-4 mb-4 dark:prose-dark">
            <ul className="block space-y-4 text-base">
              <li>I build stuff on AWS.</li>
            </ul>
          </div>
        </div>
        <div className="flex flex-col place-items-start border-l border-b border-gray-300 pl-4 dark:border-gray-700">
          <span className="relative mt-4 ml-[-40px] inline-block rounded border border-gray-700 bg-day py-1 px-2 text-xs font-medium hover:border-day-accent-hover dark:bg-night dark:hover:border-night-accent-hover">
            Jan 2020 - Present
          </span>
          <div className="w-full py-4">
            <div className="flex w-full flex-col justify-between whitespace-pre font-bold sm:grid sm:grid-cols-3 sm:gap-x-8 sm:space-y-0">
              <span className="col-span-2 inline-flex place-items-center">
                <HeaderIcon kind="about" size="24" />
                <Link
                  className="whitespace-normal break-words text-2xl hover:text-day-accent-hover dark:hover:text-night-accent-hover"
                  href="https://omscs.gatech.edu/"
                >
                  Georgia Institute of Technology
                </Link>
              </span>
              <span className="xs:text-left col-span-1 mx-4 mt-2 text-sm font-bold text-gray-700 dark:text-gray-300 sm:text-right">
                Atlanta, GA
              </span>
            </div>
          </div>
          <span className="m-4 text-sm font-bold text-gray-700 dark:text-gray-300">
            › OMSCS Instructional Associate
          </span>
          <p className="text-tighter text-sm font-light text-gray-700 dark:text-gray-300">
            Instructional Associate for{' '}
            <span>
              <Link
                className="whitespace-normal break-words hover:text-day-accent-hover dark:hover:text-night-accent-hover"
                href="https://omscs.gatech.edu/cse-6242-data-visual-analytics"
              >
                CSE 6242 - Data and Visual Analytics
              </Link>
            </span>{' '}
            &{' '}
            <span>
              <Link
                className="whitespace-normal break-words hover:text-day-accent-hover dark:hover:text-night-accent-hover"
                href="https://omscs.gatech.edu/cs-7646-machine-learning-trading"
              >
                CS 7646 - Machine Learning for Trading
              </Link>
            </span>
            {'.'}
          </p>
          <div className="prose mt-4 mb-4 dark:prose-dark">
            <ul className="block space-y-4 text-base">
              <li>
                Grade assignments and projects, hold weekly office hours, and respond to students'
                questions in Piazza - an online chat forum used for both classes.
              </li>
              <li>
                Consistently improve the overall quality of both classes by updating the content of
                assignments each semester and building out automated grading scripts when
                applicable.
              </li>
            </ul>
          </div>
        </div>
        <div className="flex flex-col place-items-start border-l border-b border-gray-300 pl-4 dark:border-gray-700">
          <span className="relative mt-4 ml-[-40px] inline-block rounded border border-gray-700 bg-day py-1 px-2 text-xs font-medium hover:border-day-accent-hover dark:bg-night dark:hover:border-night-accent-hover">
            Dec 2020 - Mar 2022
          </span>
          <div className="w-full py-4">
            <div className="flex w-full flex-col justify-between whitespace-pre font-bold sm:grid sm:grid-cols-3 sm:gap-x-8 sm:space-y-0">
              <span className="col-span-2 inline-flex place-items-center">
                <HeaderIcon kind="about" size="24" />
                <Link
                  className="whitespace-normal break-words text-2xl hover:text-day-accent-hover dark:hover:text-night-accent-hover"
                  href="https://www.geaviation.com/"
                >
                  GE Aviation
                </Link>
              </span>
              <span className="xs:text-left col-span-1 mx-4 mt-2 text-sm font-bold text-gray-700 dark:text-gray-300 sm:text-right">
                Cincinnati, OH
              </span>
            </div>
          </div>
          <span className="m-4 text-sm font-bold text-gray-700 dark:text-gray-300">
            › Staff Software Engineer
          </span>
          <p className="text-tighter text-sm font-light text-gray-700 dark:text-gray-300">
            Promoted to Staff Software Engineer on the core asset data team.
          </p>
          <div className="prose mt-4 mb-4 dark:prose-dark">
            <ul className="block space-y-4 text-base">
              <li>
                Develop scalable and performant event driven services built on AWS Serverless
                technologies to process and store thousands of asset change events per minute in an
                API consumable format for our customers.
              </li>
              <li>Provide technical leadership to an agile team of 5-7.</li>
              <li>
                Work with product line leaders and architects to translate business requirements and
                vision into user stories and develop multi generation software technology plans.
              </li>
              <li>
                Influence and lead the adoption of AWS Serverless technologies by implementing
                serverless application best practices.
              </li>
              <li>
                Architected and developed reusable middleware to ensure each service has structured
                logging, idempotency, and the correct configuration.
              </li>
              <li>
                Architected and developed a serverless failed event dashboard using AWS Lambda, API
                Gateway, Event Bridge, and DynamoDB to quickly capture and replay asset change
                events.
              </li>
              <li>
                Architected and developed a CI/CD pipeline using AWS Code Pipeline, Code Build, and
                Code Deploy for the core asset data team's services which includes automated unit,
                integration, and regression tests.
              </li>
            </ul>
          </div>
        </div>
        <div className="flex flex-col place-items-start border-l border-b border-gray-300 pl-4 dark:border-gray-700">
          <span className="relative mt-4 ml-[-40px] inline-block rounded border border-gray-700 bg-day py-1 px-2 text-xs font-medium hover:border-day-accent-hover dark:bg-night dark:hover:border-night-accent-hover">
            Aug 2018 - Dec 2020
          </span>
          <div className="w-full py-4">
            <div className="flex w-full flex-col justify-between whitespace-pre font-bold sm:grid sm:grid-cols-3 sm:gap-x-8 sm:space-y-0">
              <span className="col-span-2 inline-flex place-items-center">
                <HeaderIcon kind="about" size="24" />
                <Link
                  className="whitespace-normal break-words text-2xl hover:text-day-accent-hover dark:hover:text-night-accent-hover"
                  href="https://www.geaviation.com/"
                >
                  GE Aviation
                </Link>
              </span>
              <span className="xs:text-left col-span-1 mx-4 mt-2 text-sm font-bold text-gray-700 dark:text-gray-300 sm:text-right">
                Cincinnati, OH
              </span>
            </div>
          </div>
          <span className="m-4 text-sm font-bold text-gray-700 dark:text-gray-300">
            › Senior Software Engineer
          </span>
          <p className="text-tighter text-sm font-light text-gray-700 dark:text-gray-300">
            Senior backend software engineer and AWS cloud architect working on GE Aviation's
            Customer Portals - a web application for airline customers to view, analyze, and manage
            their fleet of jet engines.
          </p>
          <div className="prose mt-4 mb-4 dark:prose-dark">
            <ul className="block space-y-4 text-base">
              <li>
                Utilized cloud native services such as AWS Lambda, API Gateway, DynamoDB, Aurora,
                S3, ElasticSearch, CloudFront, SQS, SNS, and Secrets Manager to re- architect legacy
                on-premise applications and services.
              </li>
              <li>
                Architected and developed a solution that utilizes AWS CloudFront's global edge
                locations to increase download speeds of large (3-6 GB) jet engine manuals on the
                Portal by 7x on average which saved GE Aviation $0.3MM/year in engine manual
                shipping costs.
              </li>
              <li>
                Architected and developed a serverless audit logging solution using AWS Lambda, API
                Gateway, SQS, and DynamoDB that is in use by 8 backend services for tracking
                administrative actions for compliance purposes.
              </li>
              <li>
                Architected and developed a CI/CD pipeline using AWS Code Pipeline, Code Build, and
                Code Deploy for the Customer Portals' backend services and AWS Lambda functions
                built using SAM.
              </li>
              <li>
                Led GE Aviation's Dev Chapter, an extracurricular internal group at GE Aviation that
                develops and hosts coding dojos and teaches new technologies and coding best
                practices.
              </li>
            </ul>
          </div>
        </div>
        <div className="flex flex-col place-items-start border-l border-b border-gray-300 pl-4 dark:border-gray-700">
          <span className="relative mt-4 ml-[-40px] inline-block rounded border border-gray-700 bg-day py-1 px-2 text-xs font-medium hover:border-day-accent-hover dark:bg-night dark:hover:border-night-accent-hover">
            Jul 2016 - Aug 2018
          </span>
          <div className="w-full py-4">
            <div className="flex w-full flex-col justify-between whitespace-pre font-bold sm:grid sm:grid-cols-3 sm:gap-x-8 sm:space-y-0">
              <span className="col-span-2 inline-flex place-items-center">
                <HeaderIcon kind="about" size="24" />
                <Link
                  className="whitespace-normal break-words text-2xl hover:text-day-accent-hover dark:hover:text-night-accent-hover"
                  href="https://www.geaviation.com/"
                >
                  GE Aviation
                </Link>
              </span>
              <span className="xs:text-left col-span-1 mx-4 mt-2 text-sm font-bold text-gray-700 dark:text-gray-300 sm:text-right">
                Cincinnati, OH
              </span>
            </div>
          </div>
          <span className="m-4 text-sm font-bold text-gray-700 dark:text-gray-300">
            › Digital Technology Leadership Program
          </span>
          <p className="text-tighter text-sm font-light text-gray-700 dark:text-gray-300">
            A full time, two-year leadership program with four, six-month rotations that focus on
            building the necessary technical and leadership skills in software and information
            technology.
          </p>
          <div className="prose mt-4 mb-4 dark:prose-dark">
            <ul className="block space-y-4 text-base">
              <li>
                <strong>Infrastructure Architect (1st Rotation)</strong> - Utilized Chef to automate
                the migration of over 20 on-premise applications to AWS. Developed 12 different
                analytics for the shutdown of a GE data center to identify trends in assets,
                financials, and applications to make decisions about various migration strategies.
              </li>
              <li>
                <strong>Software Engineer (2nd Rotation)</strong> - Developed reusable
                micro-services using Java/Springboot. Apply principles of SDLC and methodologies
                like Lean/Agile/XP, CI, software and product security, scalability, documentation
                practices, refactoring and testing techniques.
              </li>
              <li>
                <strong>Data Engineer (3rd Rotation)</strong> - Led back-end Python development to
                build new features for Self- Service Data Platforms. Collaborated with Engineering
                to create a curriculum for a week-long internal data science training that has been
                taught to over 4,000 employees.
              </li>
              <li>
                <strong>Product Owner (4th Rotation)</strong> - Defined the strategy, gathered
                requirements, and built the backlog for network monitoring and data collection
                architecture in GE's Core Technology organization. Built analytics using network
                device performance metrics to capture trends and insights and monitor the health of
                devices in GE's core data centers and hubs.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
