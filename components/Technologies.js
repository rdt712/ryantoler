export default function Technologies() {
  const techList = [
    'API Gateway',
    'AWS',
    'Bash',
    'CDK',
    'CloudFormation',
    'CloudFront',
    'Code Build',
    'Code Deploy',
    'Code Pipeline',
    'Cognito',
    'CSS3',
    'Docker',
    'DynamoDB',
    'ECS Fargate',
    'ElasticSearch',
    'Event Bridge',
    'Git',
    'Gitlab CI',
    'IAM',
    'Lambda',
    'HTML5',
    'Java',
    'JavaScript',
    'Jest',
    'Next.js',
    'Node.js',
    'Python',
    'React',
    'Route53',
    'S3',
    'SAM',
    'Serverless',
    'SNS',
    'SpringBoot',
    'SQS',
    'Tailwind CSS',
    'TypeScript',
  ]

  return (
    <div className="max-w-none pt-8 pb-8 xl:col-span-1">
      <div className="my-4 flex flex-col">
        <span className="text-4xl font-bold">Technologies</span>
        <span className="mb-4 inline-block h-0.5 w-20 rounded bg-day-accent dark:bg-night-accent"></span>
      </div>
      <div className="flex w-full flex-wrap">
        {techList.map((tech) => (
          <span
            key={tech}
            className="m-1 inline-block rounded border border-gray-700 py-1 px-2 text-xs font-medium hover:border-day-accent-hover dark:bg-night dark:hover:border-night-accent-hover"
          >
            {tech}
          </span>
        ))}
      </div>
    </div>
  )
}
