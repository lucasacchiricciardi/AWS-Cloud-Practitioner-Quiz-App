const questions = [
  {
    "id": 1,
    "question": "A company isplanning to run a global marketing application in the AWS Cloud. The application will feature videos that can be viewed by users. The company must ensure that allusers can view these videos with low latency. Which AWS service should the company use to meet this requirement? Options:",
    "options": [
      "A. AWS Auto Scaling B.Amazon Kinesis Video Streams",
      "C. ElasticLoad Balancing",
      "D. Amazon CloudFront"
    ],
    "answer": "D",
    "raw_answer": "D. Amazon CloudFront Explanation: Amazon CloudFront isa global content delivery network (CDN) thatcaches content at edge locations worldwide. This ensures low latency for users, making itideal for delivering video content to a global audience with minimal delay."
  },
  {
    "id": 2,
    "question": "Which pillarof the AWS Well-Architected Framework refers to the ability of a system to recover from infrastructure or service disruptions and dynamically acquire computing resources to meet demand? Options:",
    "options": [
      "A. Security B.Reliability",
      "C. Performance efficiency",
      "D. Cost optimization"
    ],
    "answer": "B",
    "raw_answer": "B. Reliability Explanation: The Reliabilitypillarfocuses on a system's abilitytorecover from failuresand scale resources dynamically to meet demand. This includes strategies forredundancy, faulttolerance, and disaster recovery."
  },
  {
    "id": 3,
    "question": "Which of the following are benefits of migrating to the AWS Cloud? (Choose two.) Options:",
    "options": [
      "A. Operational resilience B.Discounts forproducts on Amazon.com",
      "C. Business agility",
      "D. Business excellence",
      "E. Increased staffretention"
    ],
    "answer": "A",
    "raw_answer": "A. Operational resilience, C. Business agility Explanation: AWS offers operational resilience through features like high availability,faulttolerance, and disaster recovery. Business agilityis achieved by enabling faster innovation, scalability,and the abilitytoquickly adapt to market changes."
  },
  {
    "id": 4,
    "question": "A company is planning to replace its physical on-premises compute servers with AWS serverless compute services. The company wants to be able to take advantage of advanced technologies quickly after the migration. Which pillar of the AWS Well-Architected Framework does this plan represent? Options:",
    "options": [
      "A. Security",
      "B. Performance efficiency",
      "C. Operational excellence",
      "D. Reliability"
    ],
    "answer": "B",
    "raw_answer": "B. Performance efficiency Explanation: Performance efficiency focuses on using advanced technologies tooptimize resource utilization and system performance. By migrating toserverless compute, the company can quickly adopt new technologies and improve efficiency."
  },
  {
    "id": 5,
    "question": "A large company has multiple departments. Each department has itsown AWS account. Each department has purchased Amazon EC2 Reserved Instances. Some departments do not use all the Reserved Instances that they purchased, and other departments need more Reserved Instances than they purchased. The company needs to manage the AWS accounts for allthe departments so that the departments can share the Reserved Instances. Which AWS service or tool should the company use to meet these requirements? Options:",
    "options": [
      "A. AWS Systems Manager",
      "B. Cost Explorer",
      "C. AWS Trusted Advisor",
      "D. AWS Organizations"
    ],
    "answer": "D",
    "raw_answer": "D. AWS Organizations Explanation: AWS Organizations allows multiple accounts within an organization to share Reserved Instances, optimizing cost efficiency and resource utilizationacross departments."
  },
  {
    "id": 6,
    "question": "Which component of the AWS global infrastructure is made up of one or more discrete data centers that have redundant power, networking, and connectivity? Options:",
    "options": [
      "A. AWS Region",
      "B. AvailabilityZone",
      "C. Edge location",
      "D. AWS Outposts"
    ],
    "answer": "B",
    "raw_answer": "B. Availability Zone Explanation: An Availability Zone consists of one or more isolated data centers with redundant power, networking, and connectivity. It isdesigned to provide high availability and faulttolerance."
  },
  {
    "id": 7,
    "question": "Which duties are the responsibility of a company that is using AWS Lambda? (Choose two.) Options:",
    "options": [
      "A. Security inside of code",
      "B. Selection of CPU resources",
      "C. Patching of operating system",
      "D. Writing and updating ofcode",
      "E. Security of underlying infrastructure"
    ],
    "answer": "A",
    "raw_answer": "A. Security inside of code, D. Writing and updating of code Explanation: With AWS Lambda, AWS manages the underlying infrastructure, including OS patching and resource selection. The company is responsible forwriting secure code and ensuring its functionality."
  },
  {
    "id": 8,
    "question": "Which AWS services or features provide disaster recovery solutions for Amazon EC2 instances? (Choose two.) Options:",
    "options": [
      "A. Reserved Instances",
      "B. EC2 Amazon Machine Images (AMIs)",
      "C. Amazon Elastic Block Store (Amazon EBS) snapshots",
      "D. AWS Shield",
      "E. Amazon GuardDuty"
    ],
    "answer": "B",
    "raw_answer": "B. EC2 Amazon Machine Images (AMIs), C. Amazon Elastic Block Store (Amazon EBS) snapshots Explanation: AMIs provide pre-configured templates forquick instance recovery. EBS snapshots enable point-in-time backups of volumes for disaster recovery incase of data loss."
  },
  {
    "id": 9,
    "question": "A company is migrating to the AWS Cloud instead of running its infrastructure on premises. Which of the following are advantages of this migration? (Choose two.) Options:",
    "options": [
      "A. Elimination of the need to perform security auditing",
      "B. Increased global reach and agility",
      "C. Abilityto deploy globally in minutes",
      "D. Elimination of the cost of IT staffmembers",
      "E. Redundancy by default for allcompute services"
    ],
    "answer": "B",
    "raw_answer": "B. Increased global reach and agility,C. Ability to deploy globally in minutes Explanation: AWS enables businesses to deploy resources globally inminutes, enhancing agilityand reach. While security auditing and IT staff costs may be reduced, they are not entirely eliminated in the cloud."
  },
  {
    "id": 10,
    "question": "A user is comparing purchase options for an application that runs on Amazon EC2 and Amazon RDS. The application cannot sustain any interruption. The application experiences a predictable amount of usage, including some seasonal spikes that last only a few weeks at a time. Itis not possible to modify the application. Which purchase option meets these requirements MOST cost-effectively? Options:",
    "options": [
      "A. Review the AWS Marketplace and buy Partial Upfront Reserved Instances to cover the predicted and seasonal load.",
      "B. Buy Reserved Instances forthe predicted amount of usage throughout the year. Allow any seasonal usage to run on Spot Instances.",
      "C. Buy Reserved Instances forthe predicted amount of usage throughout the year. Allow any seasonal usage to run at an On-Demand rate.",
      "D. Buy Reserved Instances to cover all potential usage thatresults from the seasonal usage."
    ],
    "answer": "C",
    "raw_answer": "C. Buy Reserved Instances forthe predicted amount of usage throughout the year. Allow any seasonal usage to run at an On-Demand rate. Explanation: Reserved Instances are cost-effective forpredictable workloads, providing a lower cost for the base usage. For seasonal spikes, On-Demand Instances can be used to avoid overcommitting resources while stillmeeting demand without interruption."
  },
  {
    "id": 11,
    "question": "Which AWS service or tool provides information about monthly costs of using Amazon EC2 and Amazon RDS for the past year? Options:",
    "options": [
      "A. AWS Trusted Advisor",
      "B. Cost Explorer",
      "C. Amazon Forecast",
      "D. Amazon CloudWatch"
    ],
    "answer": "B",
    "raw_answer": "B. Cost Explorer Explanation: AWS Cost Explorer is specifically designed to help users visualize and analyze theirAWS spending. Itprovides detailed reports of costs for services like Amazon EC2 and Amazon RDS over a specified time period, such as the past year."
  },
  {
    "id": 12,
    "question": "Which AWS solution should the company use to maximize operational efficiency and minimize the cost of running an application with a short runtime, invoked by data changes or system state shifts? Options:",
    "options": [
      "A. Amazon EC2 On-Demand Instances",
      "B. AWS Lambda",
      "C. Amazon EC2 Reserved Instances",
      "D. Amazon EC2 Spot Instances"
    ],
    "answer": "B",
    "raw_answer": "B. AWS Lambda Explanation: AWS Lambda is a serverless compute service that automatically scales based on demand. Itis idealfor short-lived tasks and applications that are triggered by events, such as changes in data orsystem state, as itminimizes costs by charging only forthe compute time used."
  },
  {
    "id": 13,
    "question": "Which AWS service or feature allows users to connect with and deploy AWS services programmatically? Options:",
    "options": [
      "A. AWS Management Console",
      "B. AWS Cloud9",
      "C. AWS CodePipeline",
      "D. AWS software development kits (SDKs)"
    ],
    "answer": "D",
    "raw_answer": "D. AWS software development kits(SDKs) Explanation: AWS SDKs are libraries that provide a programming interface for connecting with and deploying AWS services programmatically. They allow developers tointeract with AWS services using various programming languages, such as Python, Java, or Node.js."
  },
  {
    "id": 14,
    "question": "Which factor willhave the MOST effect on cost for a data lake using Amazon S3? Options:",
    "options": [
      "A. The selection of S3 storage tiers",
      "B. Charges to transfer existing data into Amazon S3",
      "C. The addition of S3 bucket policies",
      "D. S3 ingest fees for each request"
    ],
    "answer": "A",
    "raw_answer": "A. The selection of S3 storage tiers Explanation: The selection of S3 storage tiers(e.g., Standard, Intelligent-Tiering, Glacier) has the most significantimpact on cost, as each tier has different pricing models based on access frequency and retrieval times. This can affectthe overall cost of storing and accessing data in the data lake."
  },
  {
    "id": 15,
    "question": "What isthe MOST cost-effective instance purchasing option for a 12-month, always-available ecommerce application running on Amazon EC2? Options:",
    "options": [
      "A. Spot Instances",
      "B. Savings Plans",
      "C. Dedicated Hosts",
      "D. On-Demand Instances"
    ],
    "answer": "B",
    "raw_answer": "B. Savings Plans Explanation: Savings Plans offer significant savings (up to 72%) compared to On-Demand Instances when you commit to a consistent usage levelfor a 1- or 3-year term. This isthe most cost-effective option for an always-available application with predictable usage over 12 months."
  },
  {
    "id": 16,
    "question": "Which AWS service or feature allows users to connect with and deploy AWS services programmatically? Options:",
    "options": [
      "A. Cost allocation tags",
      "B. Key pairs",
      "C. Amazon Inspector",
      "D. AWS Trusted Advisor"
    ],
    "answer": "A",
    "raw_answer": "A. Cost allocation tags Explanation: Cost allocation tags help track costs by associating AWS resources with specific business units, projects, or departments. This helps users manage and allocate costs programmatically, allowing for better cost tracking and reporting."
  },
  {
    "id": 17,
    "question": "Which AWS service or feature will help a company migrate its workloads to AWS without expertise in AWS Cloud computing? Options:",
    "options": [
      "A. AWS Trusted Advisor",
      "B. AWS Consulting Partners",
      "C. AWS Artifacts",
      "D. AWS Managed Services"
    ],
    "answer": "B",
    "raw_answer": "B. AWS Consulting Partners Explanation: AWS Consulting Partners are third-party organizations with expertise inAWS cloud computing. They can assist with migrations by providing guidance, best practices, and hands-on support, making them ideal forcompanies lacking in-house AWS expertise."
  },
  {
    "id": 18,
    "question": "Which AWS service or tool should a company use to centrally request and track service limitincreases? Options:",
    "options": [
      "A. AWS Config",
      "B. Service Quotas",
      "C. AWS Service Catalog",
      "D. AWS Budgets"
    ],
    "answer": "B",
    "raw_answer": "B. Service Quotas Explanation: Service Quotas allows users to view and manage AWS service limits (quotas). Itenables users torequest increases for service limitsand track their usage, making itthe best tool formanaging resource limits across AWS services."
  },
  {
    "id": 19,
    "question": "Which documentation does AWS Artifact provide? Options:",
    "options": [
      "A. Amazon EC2 terms and conditions",
      "B. AWS ISO certifications",
      "C. A history of a company's AWS spending",
      "D. A listof previous-generation Amazon EC2 instance types"
    ],
    "answer": "B",
    "raw_answer": "B. AWS ISO certifications Explanation: AWS Artifact provides access toAWS compliance reports and security documentation, including ISO certifications,which help customers assess AWS\u2019s compliance with various standards."
  },
  {
    "id": 20,
    "question": "Which task requires using AWS account root user credentials? Options:",
    "options": [
      "A. Viewing billing information",
      "B. Changing the AWS Support plan",
      "C. Starting and stopping Amazon EC2 instances",
      "D. Opening an AWS Support case"
    ],
    "answer": "A",
    "raw_answer": "A. Viewing billinginformation Explanation: The root user is required for tasks that involve sensitive account management, such as viewing billinginformation. Other tasks like starting EC2 instances or opening support cases can be done with IAM user permissions, but billingaccess is restricted to the root user forsecurity reasons."
  },
  {
    "id": 21,
    "question": "A company needs tosimultaneously process hundreds of requests from different users. Which combination of AWS services should the company use to build an operationally efficient solution?",
    "options": [
      "A. Amazon Simple Queue Service (Amazon SQS) and AWS Lambda",
      "B. AWS Data Pipeline and Amazon EC2",
      "C. Amazon Kinesis and Amazon Athena",
      "D. AWS Amplify and AWS AppSync"
    ],
    "answer": "A",
    "raw_answer": "A. Amazon Simple Queue Service (Amazon SQS) and AWS Lambda Explanation: Amazon SQS isa fullymanaged message queue service that helps decouple and scale microservices, distributed systems, and serverless applications. AWS Lambda can be used toautomatically process requests from the queue, enabling the company to handle hundreds ofrequests efficientlywithout managing servers."
  },
  {
    "id": 22,
    "question": "What isthe scope of a VPC within the AWS network?",
    "options": [
      "A. A VPC can span all AvailabilityZones globally.",
      "B. A VPC must span atleast two subnets in each AWS Region.",
      "C. A VPC must span at least two edge locations ineach AWS Region.",
      "D. A VPC can span allAvailabilityZones within an AWS Region."
    ],
    "answer": "D",
    "raw_answer": "D. A VPC can span allAvailability Zones within an AWS Region. Explanation: A Virtual Private Cloud (VPC) isa logicallyisolated network within a specific AWS Region, and itcan span multiple Availability Zones within that region toprovide high availability and fault tolerance."
  },
  {
    "id": 23,
    "question": "Which of the following are components ofan AWS Site-to-Site VPN connection? (Choose two.)",
    "options": [
      "A. AWS Storage Gateway",
      "B. Virtualprivate gateway",
      "C. NAT gateway",
      "D. Customer gateway",
      "E. Internet gateway"
    ],
    "answer": "B",
    "raw_answer": "B. Virtual private gateway, D. Customer gateway Explanation: An AWS Site-to-Site VPN connection consists of two components: the Virtual Private Gateway on the AWS side and the Customer Gateway on the customer's side. These components establish a secure connection between the customer's on-premises network and AWS."
  },
  {
    "id": 24,
    "question": "A company needs to establish a connection between two VPCs. The VPCs are located in two differentAWS Regions. The company wants to use the existing infrastructure of the VPCs for thisconnection. Which AWS service or feature can be used to establish thisconnection?",
    "options": [
      "A. AWS Client VPN",
      "B. VPC peering",
      "C. AWS Direct Connect",
      "D. VPC endpoints"
    ],
    "answer": "B",
    "raw_answer": "B. VPC peering Explanation: VPC peering allows you to connect two VPCs in different AWS regions, enabling resources in both VPCs to communicate with each other using private IP addresses."
  },
  {
    "id": 25,
    "question": "According to the AWS shared responsibility model, what responsibility does a customer have when using Amazon RDS to host a database?",
    "options": [
      "A. Manage connections tothe database",
      "B. InstallMicrosoft SQL Server",
      "C. Design encryption-at-rest strategies",
      "D. Apply minor database patches"
    ],
    "answer": "C",
    "raw_answer": "C. Design encryption-at-rest strategies Explanation: In the AWS shared responsibility model, AWS is responsible for the security ofthe cloud infrastructure, while the customer is responsible for securing their data. This includes tasks like designing encryption-at-rest strategies for data stored in Amazon RDS."
  },
  {
    "id": 26,
    "question": "What are some advantages of using Amazon EC2 instances to host applications in the AWS Cloud instead ofon premises? (Choose two.)",
    "options": [
      "A. EC2 includes operating system patch management.",
      "B. EC2 integrates with Amazon VPC, AWS CloudTrail, and AWS Identity and Access Management (IAM).",
      "C. EC2 has a 100% service level agreement (SLA).",
      "D. EC2 has a flexible, pay-as-you-go pricing model.",
      "E. EC2 has automatic storage cost optimization."
    ],
    "answer": "B",
    "raw_answer": "B. EC2 integrates with Amazon VPC, AWS CloudTrail, and AWS Identity and Access Management (IAM), D. EC2 has a flexible, pay-as-you-go pricing model Explanation: EC2 integrates seamlessly with AWS services like VPC, IAM, and CloudTrail, providing a secure and scalable environment. Additionally, EC2 offersa flexiblepay-as-you-go pricing model, which isa key advantage over traditionalon-premises hosting."
  },
  {
    "id": 27,
    "question": "A user needs to determine whether an Amazon EC2 instance's security groups were modified in the lastmonth. How can the user see ifa change was made?",
    "options": [
      "A. Use Amazon EC2 to see ifthe security group was changed.",
      "B. Use AWS Identity and Access Management (IAM) to see which user or role changed the security group.",
      "C. Use AWS CloudTrail to see ifthe security group was changed.",
      "D. Use Amazon CloudWatch tosee ifthe security group was changed."
    ],
    "answer": "C",
    "raw_answer": "C. Use AWS CloudTrail to see if the security group was changed. Explanation: AWS CloudTrail records API calls and changes made to AWS resources, including changes to security groups. By reviewing CloudTrail logs, users can see ifand when changes were made tothe security group."
  },
  {
    "id": 28,
    "question": "Which AWS service willhelp protect applications running on AWS from DDoS attacks?",
    "options": [
      "A. Amazon GuardDuty",
      "B. AWS WAF",
      "C. AWS Shield",
      "D. Amazon Inspector"
    ],
    "answer": "C",
    "raw_answer": "C. AWS Shield Explanation: AWS Shield isa managed Distributed Denial of Service (DDoS) protection service thathelps protect applications running on AWS from DDoS attacks. AWS Shield provides automatic protection forallAWS customers."
  },
  {
    "id": 29,
    "question": "Which AWS service or feature acts as a firewallfor Amazon EC2 instances?",
    "options": [
      "A. Network ACL",
      "B. Elastic network interface",
      "C. Amazon VPC",
      "D. Security group"
    ],
    "answer": "D",
    "raw_answer": "D. Security group Explanation: A security group acts as a virtual firewall forAmazon EC2 instances, controlling inbound and outbound trafficbased on specified rules. Itoperates at the instance level."
  },
  {
    "id": 30,
    "question": "How does the AWS Cloud pricing model differ from the traditional on-premises storage pricing model?",
    "options": [
      "A. AWS resources do not incur costs",
      "B. There are no infrastructure operating costs",
      "C. There are no upfront cost commitments",
      "D. There are no software licensing costs"
    ],
    "answer": "C",
    "raw_answer": "C. There are no upfront cost commitments Explanation: The AWS Cloud pricing model follows a pay-as-you-go model, meaning customers only pay forthe resources they use without any upfront cost commitments. This is different from traditional on-premises storage, which typically involves upfront capital expenditure."
  },
  {
    "id": 31,
    "question": "A company has a single Amazon EC2 instance. The company wants toadopt a highly available architecture. What can the company do to meet thisrequirement?",
    "options": [
      "A. Scale vertically to a larger EC2 instance size.",
      "B. Scale horizontally across multiple Availability Zones.",
      "C. Purchase an EC2 Dedicated Instance.",
      "D. Change the EC2 instance family to a compute optimized instance."
    ],
    "answer": "B",
    "raw_answer": "B. Scale horizontally across multiple Availability Zones. Explanation: To achieve high availability,scaling horizontally by distributing workloads across multiple AvailabilityZones ensures that ifone zone goes down, the other zones can continue tooperate. This approach ismore effective than simply scaling verticallyor changing instance families."
  },
  {
    "id": 32,
    "question": "A company's on-premises application deployment cycle was 3-4 weeks. After migrating to the AWS Cloud, the company can deploy the application in 2-3 days. Which benefit has this company experienced by moving to the AWS Cloud?",
    "options": [
      "A. Elasticity",
      "B. Flexibility",
      "C. Agility",
      "D. Resilience"
    ],
    "answer": "C",
    "raw_answer": "C. Agility Explanation: Agilityrefers to the ability to quickly adapt and deploy changes. By migrating to the AWS Cloud, the company has reduced deployment times significantly,which demonstrates increased agility."
  },
  {
    "id": 33,
    "question": "Which of the following are included in AWS Enterprise Support? (Choose two.)",
    "options": [
      "A. AWS technical account manager (TAM)",
      "B. AWS partner-led support",
      "C. AWS Professional Services",
      "D. Support of third-party software integration to AWS",
      "E. 5-minute response time for criticalissues"
    ],
    "answer": "A",
    "raw_answer": "A. AWS technical account manager (TAM), E. 5-minute response time for critical issues Explanation: AWS Enterprise Support includes access to a Technical Account Manager (TAM) and offers a 5-minute response time for criticalissues. This level of support is designed for large organizations with complex needs."
  },
  {
    "id": 34,
    "question": "A global media company uses AWS Organizations tomanage multiple AWS accounts. Which AWS service or feature can the company use tolimit the access to AWS services for member accounts?",
    "options": [
      "A. AWS Identity and Access Management (IAM)",
      "B. Service control policies (SCPs)",
      "C. Organizational units (OUs)",
      "D. Access control lists(ACLs)"
    ],
    "answer": "B",
    "raw_answer": "B. Service control policies (SCPs) Explanation: Service Control Policies (SCPs) are used in AWS Organizations to set permission guardrails for member accounts. They help limit the access toAWS services for specific accounts within the organization."
  },
  {
    "id": 35,
    "question": "A company wants to limitits employees' AWS access to a portfolio of predefined AWS resources. Which AWS solution should the company use tomeet thisrequirement?",
    "options": [
      "A. AWS Config",
      "B. AWS software development kits(SDKs)",
      "C. AWS Service Catalog",
      "D. AWS AppSync"
    ],
    "answer": "C",
    "raw_answer": "C. AWS Service Catalog Explanation: AWS Service Catalog allows organizations to create and manage approved catalogs of resources. Employees can access only the predefined set of resources in the catalog, ensuring controlled access to AWS resources."
  },
  {
    "id": 36,
    "question": "An online company was running a workload on premises and was struggling to launch new products and features. After migrating the workload to AWS, the company can quickly launch products and features and can scale its infrastructure as required. Which AWS Cloud value proposition does this scenario describe?",
    "options": [
      "A. Business agility",
      "B. High availability",
      "C. Security",
      "D. Centralized auditing"
    ],
    "answer": "A",
    "raw_answer": "A. Business agility Explanation: Business agilityrefers to the abilityto quickly adapt to market changes and launch new products orfeatures. By migrating to AWS, the company gains the flexibilityto scale itsinfrastructure and deploy quickly."
  },
  {
    "id": 37,
    "question": "Which of the following are advantages of the AWS Cloud? (Choose two.)",
    "options": [
      "A. AWS management ofuser-owned infrastructure",
      "B. Abilityto quickly change required capacity",
      "C. High economies of scale",
      "D. Increased deployment time to market",
      "E. Increased fixed expenses"
    ],
    "answer": "B",
    "raw_answer": "B. Ability to quickly change required capacity, C. High economies of scale Explanation: AWS Cloud offers the abilityto quickly adjust capacity based on demand, and the economies of scale benefit allows AWS to offerlower costs due tolarge-scale operations."
  },
  {
    "id": 38,
    "question": "AWS has the abilityto achieve lower pay-as-you-go pricing by aggregating usage across hundreds of thousands of users. This describes which advantage of the AWS Cloud?",
    "options": [
      "A. Launch globally in minutes",
      "B. Increase speed and agility",
      "C. High economies of scale",
      "D. No guessing about compute capacity"
    ],
    "answer": "C",
    "raw_answer": "C. High economies of scale Explanation: By aggregating usage across a large number of customers, AWS achieves economies of scale, allowing itto offer lower pricing for services."
  },
  {
    "id": 39,
    "question": "A company has a database server that isalways running. The company hosts the server on Amazon EC2 instances. The instance sizes are suitable for the workload. The workload willrun for1 year. Which EC2 instance purchasing option willmeet these requirements MOST cost-effectively?",
    "options": [
      "A. Standard Reserved Instances",
      "B. On-Demand Instances",
      "C. Spot Instances",
      "D. Convertible Reserved Instances"
    ],
    "answer": "A",
    "raw_answer": "A. Standard Reserved Instances Explanation: Standard Reserved Instances offersignificant savings over On-Demand Instances forlong-term workloads, especially when the instance usage is predictable, likein thiscase for 1 year."
  },
  {
    "id": 40,
    "question": "A company isdeveloping a mobile app that needs a high-performance NoSQL database. Which AWS services could the company use for thisdatabase? (Choose two.)",
    "options": [
      "A. Amazon Aurora",
      "B. Amazon RDS",
      "C. Amazon Redshift",
      "D. Amazon DocumentDB (with MongoDB compatibility)",
      "E. Amazon DynamoDB"
    ],
    "answer": "D",
    "raw_answer": "D. Amazon DocumentDB (with MongoDB compatibility), E. Amazon DynamoDB Explanation: Both Amazon DynamoDB and Amazon DocumentDB are high-performance NoSQL databases suitable formobile app development. DynamoDB isa fully managed key-value and document database, while DocumentDB is compatible with MongoDB."
  },
  {
    "id": 41,
    "question": "Which tasks are the responsibility of AWS, according to the AWS shared responsibility model? (Choose two.)",
    "options": [
      "A. Patch the Amazon EC2 guest operating system.",
      "B. Upgrade the firmware of the network infrastructure.",
      "C. Apply password rotation for IAM users.",
      "D. Maintain the physical security of edge locations.",
      "E. Maintain least privilege access to the root user account."
    ],
    "answer": "B",
    "raw_answer": "B, D Explanation: According to the AWS shared responsibility model, AWS isresponsible for the security of the cloud, which includes maintaining the physical security of edge locations (D) and upgrading the firmware of the network infrastructure (B). The customer isresponsible formanaging the operating system (A), IAM user passwords (C), and least privilege access (E)."
  },
  {
    "id": 42,
    "question": "Which of the following are features of network ACLs as they are used in the AWS Cloud? (Choose two.)",
    "options": [
      "A. They are stateless.",
      "B. They are stateful.",
      "C. They evaluate allrules before allowing traffic.",
      "D. They process rules inorder, starting with the lowest numbered rule,when deciding whether toallow traffic.",
      "E. They operate at the instance level."
    ],
    "answer": "A",
    "raw_answer": "A, D Explanation: Network ACLs inAWS are stateless (A), meaning they don't track the state of connections. They process rules in order, starting with the lowest numbered rule (D), when determining whether to allow traffic. Stateful features (B) and instance-level operation (E) are characteristics ofsecurity groups, not ACLs."
  },
  {
    "id": 43,
    "question": "A company has designed itsAWS Cloud infrastructure to run itsworkloads effectively.The company also has protocols in place tocontinuously improve supporting processes. Which pillarof the AWS Well-Architected Framework does this scenario represent?",
    "options": [
      "A. Security",
      "B. Performance efficiency",
      "C. Cost optimization",
      "D. Operational excellence"
    ],
    "answer": "D",
    "raw_answer": "D Explanation: The scenario describes continuous improvement of processes, which ispart of the Operational excellence pillarof the AWS Well-Architected Framework. This pillarfocuses on operations and ongoing improvements to enhance performance and reduce risks."
  },
  {
    "id": 44,
    "question": "Which AWS service or feature can be used to create a private connection between an on-premises workload and an AWS Cloud workload?",
    "options": [
      "A. Amazon Route 53",
      "B. Amazon Macie",
      "C. AWS Direct Connect",
      "D. AWS PrivateLink"
    ],
    "answer": "C",
    "raw_answer": "C Explanation: AWS Direct Connect (C) provides a dedicated, private network connection between an on-premises data center and AWS. Amazon Route 53 (A) is forDNS management, Amazon Macie (B) is for data security, and AWS PrivateLink (D) isused for private access toservices in VPCs, not direct connections to on-premises workloads."
  },
  {
    "id": 45,
    "question": "A company needs to graphically visualize AWS billingand usage over time. The company also needs information about itsAWS monthly costs. Which AWS Billing and Cost Management toolprovides thisdata ina graphical format?",
    "options": [
      "A. AWS Bills",
      "B. Cost Explorer",
      "C. AWS Cost and Usage Report",
      "D. AWS Budgets"
    ],
    "answer": "B",
    "raw_answer": "B Explanation: AWS Cost Explorer (B) allows you to visualize and analyze your AWS spending and usage over time in a graphical format. AWS Bills(A) shows detailed billinginformation, AWS Cost and Usage Report (C) provides raw data, and AWS Budgets (D) helps track spending but does not provide graphical usage data."
  },
  {
    "id": 46,
    "question": "A company wants to run production workloads on AWS. The company needs concierge service, a designated AWS technical account manager (TAM), and technical support that isavailable 24 hours a day, 7 days a week. Which AWS Support plan willmeet these requirements?",
    "options": [
      "A. AWS Basic Support",
      "B. AWS Enterprise Support",
      "C. AWS Business Support",
      "D. AWS Developer Support"
    ],
    "answer": "B",
    "raw_answer": "B Explanation: AWS Enterprise Support (B) provides 24/7 technical support, a designated AWS technical account manager (TAM), and concierge service, which meets the company's requirements. AWS Basic Support (A) is forgeneral support, AWS Business Support (C) offers 24/7 support but not a TAM, and AWS Developer Support (D) is fordevelopment and testing, not production workloads."
  },
  {
    "id": 47,
    "question": "Which architecture design principle describes the need to isolate failures between dependent components in the AWS Cloud?",
    "options": [
      "A. Use a monolithic design.",
      "B. Design for automation.",
      "C. Design for single points offailure.",
      "D. Loosely couple components."
    ],
    "answer": "D",
    "raw_answer": "D Explanation: Loosely coupling components (D) helps isolate failures and ensures that one failuredoes not affectother components. A monolithic design (A) is the opposite of loose coupling, and designing forsingle points of failure(C) is not a recommended practice. Design forautomation (B) focuses on automating processes, not failureisolation."
  },
  {
    "id": 48,
    "question": "Which AWS services are managed database services? (Choose two.)",
    "options": [
      "A. Amazon Elastic Block Store (Amazon EBS)",
      "B. Amazon S3",
      "C. Amazon RDS",
      "D. Amazon Elastic File System (Amazon EFS)",
      "E. Amazon DynamoDB"
    ],
    "answer": "C",
    "raw_answer": "C, E Explanation: Amazon RDS (C) and Amazon DynamoDB (E) are managed database services provided by AWS. Amazon EBS (A) is a block storage service, Amazon S3 (B) isobject storage, and Amazon EFS (D) isa managed filestorage service."
  },
  {
    "id": 49,
    "question": "A company isusing the AWS Free Tierfor several AWS services for an application. What willhappen ifthe Free Tier usage period expires orifthe application use exceeds the Free Tierusage limits?",
    "options": [
      "A. The company willbe charged the standard pay-as-you-go service rates for the usage that exceeds the Free Tier usage.",
      "B. AWS Support willcontact the company toset up standard service charges.",
      "C. The company willbe charged for the services itconsumed during the Free Tier period, plus additional charges for service consumption after the Free Tier period.",
      "D. The company's AWS account willbe frozen and can be restarted after a payment plan is established."
    ],
    "answer": "A",
    "raw_answer": "A Explanation: Once the AWS Free Tier usage expires or exceeds the limits, the company willbe charged at the standard pay-as-you-go rates (A). AWS does not freeze accounts (D) or contact customers for service charges (B), and charges forpast usage are not added to future usage charges (C)."
  },
  {
    "id": 50,
    "question": "A company recently deployed an Amazon RDS instance in itsVPC. The company needs to implement a stateful firewall to limittrafficto the private corporate network. Which AWS service or feature should the company use to limitnetwork trafficdirectly toits RDS instance?",
    "options": [
      "A. Network ACLs",
      "B. Security groups",
      "C. AWS WAF",
      "D. Amazon GuardDuty"
    ],
    "answer": "B",
    "raw_answer": "B Explanation: Security groups (B) are stateful firewalls that control inbound and outbound trafficto AWS resources, including RDS instances. Network ACLs (A) are stateless and not ideal for limiting trafficto specific instances. AWS WAF (C) isused forweb application protection, and Amazon GuardDuty (D) is a threat detection service, not a firewall."
  },
  {
    "id": 51,
    "question": "- Which AWS service uses machine learning to help discover, monitor, and protect sensitive data that isstored in Amazon S3 buckets?",
    "options": [
      "A. AWS Shield",
      "B. Amazon Macie",
      "C. AWS Network Firewall",
      "D. Amazon Cognito"
    ],
    "answer": "B",
    "raw_answer": "B. Amazon Macie Explanation: Amazon Macie is a machine learning-powered service that helps discover, monitor, and protect sensitive data in Amazon S3. Itcan automatically identify sensitive data such as personally identifiable information (PII)and provides visibilityintohow thisdata is being accessed."
  },
  {
    "id": 52,
    "question": "- A company wants to improve the overall availabilityand performance of itsapplications that are hosted on AWS. Which AWS service should the company use?",
    "options": [
      "A. Amazon Connect",
      "B. Amazon Lightsail",
      "C. AWS Global Accelerator",
      "D. AWS Storage Gateway"
    ],
    "answer": "C",
    "raw_answer": "C. AWS Global Accelerator Explanation: AWS Global Accelerator improves the availability and performance of applications by routing trafficto the optimal endpoint based on health, geography, and routing policies. It helps reduce latency and increases the performance of applications hosted on AWS."
  },
  {
    "id": 53,
    "question": "- Which AWS service or feature identifies whether an Amazon S3 bucket or an IAM role has been shared with an external entity?",
    "options": [
      "A. AWS Service Catalog",
      "B. AWS Systems Manager",
      "C. AWS IAM Access Analyzer",
      "D. AWS Organizations"
    ],
    "answer": "C",
    "raw_answer": "C. AWS IAM Access Analyzer Explanation: AWS IAM Access Analyzer helps identify resources, such as S3 buckets and IAM roles,that are shared with external entities.Itprovides visibilityintounintended access to your AWS resources, ensuring that access policies are compliant with security best practices."
  },
  {
    "id": 54,
    "question": "- A company does not want to relyon elaborate forecasting to determine itsusage ofcompute resources. Instead, the company wants to pay only for the resources that ituses. The company also needs the abilityto increase or decrease itsresource usage to meet business requirements. Which pillar ofthe AWS Well-Architected Framework aligns with these requirements?",
    "options": [
      "A. Operational excellence",
      "B. Security",
      "C. Reliability",
      "D. Cost optimization"
    ],
    "answer": "D",
    "raw_answer": "D. Cost optimization Explanation: The Cost Optimization pillarof the AWS Well-Architected Framework emphasizes the abilityto control where the money is spent, including the use of pay-as-you-go pricing models, right-sizing resources, and scaling to meet demand while minimizing costs."
  },
  {
    "id": 55,
    "question": "- A company wants to launch itsworkload on AWS and requires the system to automatically recover from failure. Which pillar ofthe AWS Well-Architected Framework includes this requirement?",
    "options": [
      "A. Cost optimization",
      "B. Operational excellence",
      "C. Performance efficiency",
      "D. Reliability"
    ],
    "answer": "D",
    "raw_answer": "D. Reliability Explanation: The Reliability pillarfocuses on ensuring that workloads can recover from failures and continue to function as expected. Itinvolves designing systems that can automatically recover from failures, ensuring high availability and faulttolerance."
  },
  {
    "id": 56,
    "question": "- A large enterprise with multiple VPCs in several AWS Regions around the world needs to connect and centrally manage network connectivity between its VPCs. Which AWS service or feature meets these requirements?",
    "options": [
      "A. AWS Direct Connect",
      "B. AWS Transit Gateway",
      "C. AWS Site-to-Site VPN",
      "D. VPC endpoints"
    ],
    "answer": "B",
    "raw_answer": "B. AWS Transit Gateway Explanation: AWS Transit Gateway allows enterprises to connect and manage network connectivity between multiple VPCs in different AWS Regions. Itprovides a centralized hub for managing VPCs and on-premises networks."
  },
  {
    "id": 57,
    "question": "- Which AWS service supports the creation of visual reports from AWS Cost and Usage Report data?",
    "options": [
      "A. Amazon Athena",
      "B. Amazon QuickSight",
      "C. Amazon CloudWatch",
      "D. AWS Organizations"
    ],
    "answer": "B",
    "raw_answer": "B. Amazon QuickSight Explanation: Amazon QuickSight isa business intelligence service thatcan create visual reports and dashboards from various data sources, including AWS Cost and Usage Reports. It enables organizations to visualize and analyze theirAWS costs."
  },
  {
    "id": 58,
    "question": "- Which AWS service should be used tomonitor Amazon EC2 instances for CPU and network utilization?",
    "options": [
      "A. Amazon Inspector",
      "B. AWS CloudTrail",
      "C. Amazon CloudWatch",
      "D. AWS Config"
    ],
    "answer": "C",
    "raw_answer": "C. Amazon CloudWatch Explanation: Amazon CloudWatch provides monitoring forAWS resources, including EC2 instances. It can track metrics such as CPU utilization,network traffic,disk usage, and more, providing insights into the performance of your EC2 instances."
  },
  {
    "id": 59,
    "question": "- A company ispreparing to launch a new web store that isexpected to receive high trafficforan upcoming event. The web store runs only on AWS, and the company has an AWS Enterprise Support plan. Which AWS resource willprovide guidance about how the company should scale its architecture and operational support during the event?",
    "options": [
      "A. AWS Abuse team",
      "B. The designated AWS technical account manager (TAM)",
      "C. AWS infrastructure event management",
      "D. AWS Professional Services"
    ],
    "answer": "C",
    "raw_answer": "C. AWS infrastructure event management Explanation: AWS infrastructure event management provides guidance on scaling architecture and operational support during high-trafficevents. Ithelps ensure that the infrastructure is prepared to handle the expected load and provides support forevent planning."
  },
  {
    "id": 60,
    "question": "- A user wants to deploy a service tothe AWS Cloud by using infrastructure-as-code (IaC) principles. Which AWS service can be used to meet this requirement?",
    "options": [
      "A. AWS Systems Manager",
      "B. AWS CloudFormation",
      "C. AWS CodeCommit",
      "D. AWS Config"
    ],
    "answer": "B",
    "raw_answer": "B. AWS CloudFormation Explanation: AWS CloudFormation is an infrastructure-as-code (IaC) service that allows users todefine and provision AWS infrastructure using templates. Itenables users to automate the deployment of resources and manage them as code."
  },
  {
    "id": 61,
    "question": "- A company that has multiple business units wants to centrally manage and govern itsAWS Cloud environments. The company wants to automate the creation of AWS accounts, apply service control policies (SCPs), and simplify billingprocesses. Which AWS service or tool should the company use to meet these requirements?",
    "options": [
      "A. AWS Organizations",
      "B. Cost Explorer",
      "C. AWS Budgets",
      "D. AWS Trusted Advisor"
    ],
    "answer": "A",
    "raw_answer": "A. AWS Organizations Explanation: AWS Organizations allows you tocentrally manage and govern multiple AWS accounts. Ithelps automate the creation of AWS accounts, apply service control policies (SCPs), and simplify billingprocesses, making itthe best option for managing and governing AWS Cloud environments across multiple business units."
  },
  {
    "id": 62,
    "question": "- Which IT controls do AWS and the customer share, according to the AWS shared responsibility model? (Choose two.)",
    "options": [
      "A. Physical and environmental controls",
      "B. Patch management",
      "C. Cloud awareness and training",
      "D. Zone security",
      "E. Application data encryption"
    ],
    "answer": "A",
    "raw_answer": "A. Physical and environmental controls, B. Patch management Explanation: According to the AWS shared responsibility model, AWS isresponsible for physical and environmental controls, such as securing data centers. Both AWS and the customer share responsibility forpatch management. AWS manages the infrastructure patching, while the customer isresponsible for patching the software they deploy on AWS."
  },
  {
    "id": 63,
    "question": "- A company is launching an application in the AWS Cloud. The application willuse Amazon S3 storage. A large team of researchers willhave shared access to the data. The company must be able to recover data that is accidentally overwritten or deleted. Which S3 feature should the company turn on tomeet this requirement?",
    "options": [
      "A. Server access logging",
      "B. S3 Versioning",
      "C. S3 Lifecycle rules",
      "D. Encryption intransit and at rest"
    ],
    "answer": "B",
    "raw_answer": "B. S3 Versioning Explanation: S3 Versioning allows you to preserve, retrieve, and restore every version of every object stored in an S3 bucket. This feature isessential for recovering data that is accidentally overwritten or deleted."
  },
  {
    "id": 64,
    "question": "- A manufacturing company has a criticalapplication that runs at a remote site that has a slow internet connection. The company wants tomigrate the workload to AWS. The application is sensitive to latency and interruptions in connectivity. The company wants a solution that can host this application with minimum latency. Which AWS service or feature should the company use to meet these requirements?",
    "options": [
      "A. Availability Zones",
      "B. AWS Local Zones",
      "C. AWS Wavelength",
      "D. AWS Outposts"
    ],
    "answer": "B",
    "raw_answer": "B. AWS Local Zones Explanation: AWS Local Zones are a great solution for workloads that require low-latency access to AWS services. They extend AWS infrastructure tolocations closer toend-users, providing lower latency and better performance for applications sensitive to network interruptions."
  },
  {
    "id": 65,
    "question": "- A company wants to migrate itsapplications from its on-premises data center toa VPC inthe AWS Cloud. These applications willneed to access on-premises resources. Which actions willmeet these requirements? (Choose two.)",
    "options": [
      "A. Use AWS Service Catalog to identifya listofon-premises resources that can be migrated.",
      "B. Create a VPN connection between an on-premises device and a virtualprivate gateway in the VPC.",
      "C. Use an Amazon CloudFront distribution and configure itto accelerate content delivery close tothe on-premises resources.",
      "D. Set up an AWS Direct Connect connection between the on-premises data center and AWS.",
      "E. Use Amazon CloudFront to restrictaccess to staticweb content provided through the on-premises web servers."
    ],
    "answer": "B",
    "raw_answer": "B. Create a VPN connection between an on-premises device and a virtual private gateway inthe VPC, D. Set up an AWS Direct Connect connection between the on-premises data center and AWS Explanation: To allow applications in AWS to access on-premises resources, you can create a VPN connection or set up AWS Direct Connect to establish a secure and reliable network connection between your on-premises data center and AWS. These solutions ensure that the migration issmooth and that the applications can access necessary on-premises resources."
  },
  {
    "id": 66,
    "question": "- A company wants to use the AWS Cloud to provide secure access todesktop applications that are running in a fullymanaged environment. Which AWS service should the company use tomeet thisrequirement?",
    "options": [
      "A. Amazon S3",
      "B. Amazon AppStream 2.0",
      "C. AWS AppSync",
      "D. AWS Outposts"
    ],
    "answer": "B",
    "raw_answer": "B. Amazon AppStream 2.0 Explanation: Amazon AppStream 2.0 is a fullymanaged service that provides secure access to desktop applications. Itallows you tostream desktop applications tousers without needing to manage the underlying infrastructure."
  },
  {
    "id": 67,
    "question": "- A company wants to implement threat detection on itsAWS infrastructure. However, the company does not want to deploy additional software. Which AWS service should the company use to meet these requirements?",
    "options": [
      "A. Amazon VPC",
      "B. Amazon EC2",
      "C. Amazon GuardDuty",
      "D. AWS Direct Connect"
    ],
    "answer": "C",
    "raw_answer": "C. Amazon GuardDuty Explanation: Amazon GuardDuty is a threat detection service that continuously monitors for malicious or unauthorized behavior in AWS environments. Itdoes not require the deployment of additional software, as ituses machine learning and other techniques toidentify potential threats."
  },
  {
    "id": 68,
    "question": "- Which AWS service uses edge locations?",
    "options": [
      "A. Amazon Aurora",
      "B. AWS Global Accelerator",
      "C. Amazon Connect",
      "D. AWS Outposts"
    ],
    "answer": "B",
    "raw_answer": "B. AWS Global Accelerator Explanation: AWS Global Accelerator uses edge locations to improve the availabilityand performance of applications by routing trafficto the optimal endpoint based on health, geography, and routing policies. Edge locations help reduce latency forglobal applications."
  },
  {
    "id": 69,
    "question": "- A company needs to installan application ina Docker container. Which AWS service eliminates the need to provision and manage the container hosts?",
    "options": [
      "A. AWS Fargate",
      "B. Amazon FSx forWindows File Server",
      "C. Amazon Elastic Container Service (Amazon ECS)",
      "D. Amazon EC2"
    ],
    "answer": "A",
    "raw_answer": "A. AWS Fargate Explanation: AWS Fargate is a serverless compute engine forcontainers that eliminates the need to provision and manage the container hosts. Itautomatically provisions the required compute resources, allowing you to focus on running your containers without managing the underlying infrastructure."
  },
  {
    "id": 70,
    "question": "- Which AWS service or feature checks access policies and offers actionable recommendations to help users set secure and functional policies?",
    "options": [
      "A. AWS Systems Manager",
      "B. AWS IAM Access Analyzer",
      "C. AWS Trusted Advisor",
      "D. Amazon GuardDuty"
    ],
    "answer": "B",
    "raw_answer": "B. AWS IAM Access Analyzer Explanation: AWS IAM Access Analyzer helps you identifyresources that are shared with external entities and offers actionable recommendations toensure your access policies are secure and functional. Itprovides insights into potential security risks based on your IAM policies."
  },
  {
    "id": 71,
    "question": "A company has a fleet ofcargo ships. The cargo ships have sensors that collect data at sea, where there isintermittent or no internet connectivity. The company needs to collect,format, and process the data at sea and move the data to AWS later. Which AWS service should the company use to meet these requirements?",
    "options": [
      "A. AWS IoT Core",
      "B. Amazon Lightsail",
      "C. AWS Storage Gateway",
      "D. AWS Snowball Edge"
    ],
    "answer": "D",
    "raw_answer": "D. AWS Snowball Edge Explanation: AWS Snowball Edge isa physical device thatcan be used to collect and process data in environments with limited connectivity. Itallows for offlinedata processing and later transfer to AWS when connectivity is restored. AWS IoT Core isused for managing IoT devices but doesn\u2019t provide offlineprocessing. Amazon Lightsail is a simplified cloud service, and AWS Storage Gateway is primarily used for hybrid cloud storage."
  },
  {
    "id": 72,
    "question": "A retailcompany needs tobuild a highly available architecture for a new ecommerce platform. The company is using only AWS services that replicate data across multiple Availability Zones. Which AWS services should the company use to meet this requirement? (Choose two.)",
    "options": [
      "A. Amazon EC2",
      "B. Amazon Elastic Block Store (Amazon EBS)",
      "C. Amazon Aurora",
      "D. Amazon DynamoDB",
      "E. Amazon Redshift"
    ],
    "answer": "C",
    "raw_answer": "C. Amazon Aurora, D. Amazon DynamoDB Explanation: Both Amazon Aurora (a relational database service) and Amazon DynamoDB (a NoSQL database service) provide built-in replication across multiple Availability Zones forhigh availability.Amazon EC2 does not inherently replicate across AZs without additional configuration. Amazon EBS provides block storage, but itdoesn\u2019t replicate automatically across multiple AZs unless configured with a multi-AZ setup. Amazon Redshift is for data warehousing, and while itoffers high availability,it doesn\u2019t focus on replication across AZs forecommerce use cases."
  },
  {
    "id": 73,
    "question": "Which characteristic of the AWS Cloud helps users eliminate underutilized CPU capacity?",
    "options": [
      "A. Agility",
      "B. Elasticity",
      "C. Reliability",
      "D. Durability"
    ],
    "answer": "B",
    "raw_answer": "B. Elasticity Explanation: Elasticity refers to the abilityto automatically scale resources up or down based on demand, which helps eliminate underutilized CPU capacity. Agility refers to the abilityto quickly change or adapt to new requirements. Reliability refers to the abilityto maintain consistent performance, and durability refers to the long-term preservation of data."
  },
  {
    "id": 74,
    "question": "Service control policies (SCPs) manage permissions for which of the following?",
    "options": [
      "A. Availability Zones",
      "B. AWS Regions",
      "C. AWS Organizations",
      "D. Edge locations"
    ],
    "answer": "C",
    "raw_answer": "C. AWS Organizations Explanation: Service Control Policies (SCPs) are used to manage permissions within AWS Organizations, allowing administrators to set permission boundaries foraccounts and organizational units. SCPs do not directly manage permissions for AvailabilityZones, AWS Regions, or edge locations."
  },
  {
    "id": 75,
    "question": "Which AWS service can be used toencrypt data at rest?",
    "options": [
      "A. Amazon GuardDuty",
      "B. AWS Shield",
      "C. AWS Security Hub",
      "D. AWS Key Management Service (AWS KMS)"
    ],
    "answer": "D",
    "raw_answer": "D. AWS Key Management Service (AWS KMS) Explanation: AWS KMS isa service designed to create and manage cryptographic keys for encrypting data at rest, making itthe correct choice. Amazon GuardDuty isa threat detection service, AWS Shield provides DDoS protection, and AWS Security Hub is for security management but not for encryption."
  },
  {
    "id": 76,
    "question": "Which characteristics are advantages of using the AWS Cloud? (Choose two.)",
    "options": [
      "A. A 100% service level agreement (SLA) forallAWS services",
      "B. Compute capacity that is adjusted on demand",
      "C. Availabilityof AWS Support for code development",
      "D. Enhanced security",
      "E. Increases in cost and complexity"
    ],
    "answer": "B",
    "raw_answer": "B. Compute capacity that is adjusted on demand, D. Enhanced security Explanation: One of the key advantages of AWS Cloud isthe abilityto adjust compute capacity on demand (elasticity).AWS also provides enhanced security features to protect data and applications. While AWS does offersupport, itdoes not guarantee a 100% SLA for allservices, and the cloud typically reduces costs and complexity rather than increasing them."
  },
  {
    "id": 77,
    "question": "A user isstoring objects in Amazon S3. The user needs to restrict access to the objects to meet compliance obligations. What should the user do to meet this requirement?",
    "options": [
      "A. Use AWS Secrets Manager.",
      "B. Tag the objects inthe S3 bucket.",
      "C. Use security groups.",
      "D. Use network ACLs."
    ],
    "answer": "B",
    "raw_answer": "B. Tag the objects in the S3 bucket Explanation: Tagging objects in Amazon S3 allows users toapply access control policies based on object tags, which can be useful for compliance requirements. AWS Secrets Manager is for managing secrets, security groups are forcontrolling access to EC2 instances, and network ACLs are used for controlling trafficat the subnet level."
  },
  {
    "id": 78,
    "question": "A company wants to convert video filesand audio files from theirsource format intoa format thatwill play on smartphones, tablets, and web browsers. Which AWS service willmeet these requirements?",
    "options": [
      "A. Amazon Elastic Transcoder",
      "B. Amazon Comprehend",
      "C. AWS Glue",
      "D. Amazon Rekognition"
    ],
    "answer": "A",
    "raw_answer": "A. Amazon Elastic Transcoder Explanation: Amazon Elastic Transcoder isa service designed for converting media filesfrom one format to another, making itideal for this use case. Amazon Comprehend is fornatural language processing, AWS Glue is fordata integration, and Amazon Rekognition isfor image and video analysis, not transcoding."
  },
  {
    "id": 79,
    "question": "Which of the following are benefits of Amazon EC2 Auto Scaling? (Choose two.)",
    "options": [
      "A. Improved health and availabilityof applications",
      "B. Reduced network latency",
      "C. Optimized performance and costs",
      "D. Automated snapshots of data",
      "E. Cross-Region Replication"
    ],
    "answer": "A",
    "raw_answer": "A. Improved health and availabilityof applications, C. Optimized performance and costs Explanation: Amazon EC2 Auto Scaling automatically adjusts the number of EC2 instances based on demand, improving application health and availability and optimizing performance and costs. Itdoes not directly reduce network latency, automate snapshots, or provide cross-region replication."
  },
  {
    "id": 80,
    "question": "A company has several departments. Each department has itsown AWS accounts for its applications. The company wants all AWS costs on a single invoice tosimplify payment, but the company wants to know the costs that each department isincurring. Which AWS tool or feature will provide this functionality?",
    "options": [
      "A. AWS Cost and Usage Reports",
      "B. Consolidated billing",
      "C. Savings Plans",
      "D. AWS Budgets"
    ],
    "answer": "B",
    "raw_answer": "B. Consolidated billing Explanation: Consolidated billing allows multiple AWS accounts tobe linked together, enabling a single invoice for allaccounts while stillproviding cost breakdowns by account. AWS Cost and Usage Reports provide detailed cost data but do not consolidate billing.Savings Plans are for cost optimization, and AWS Budgets helps track costs but doesn\u2019t consolidate billing."
  },
  {
    "id": 81,
    "question": "- A company runs itsworkloads on premises. The company wants toforecast the cost of running a large application on AWS. Which AWS service or tool can the company use to obtain this information?",
    "options": [
      "A. AWS Pricing Calculator",
      "B. AWS Budgets",
      "C. AWS Trusted Advisor",
      "D. Cost Explorer"
    ],
    "answer": "A",
    "raw_answer": "A. AWS Pricing Calculator Explanation: The AWS Pricing Calculator helps customers estimate the cost of running workloads on AWS. Itallows users tocreate detailed cost estimates based on their usage patterns."
  },
  {
    "id": 82,
    "question": "- A company wants to eliminate the need to guess infrastructure capacity before deployments. The company also wants to spend itsbudget on cloud resources only as the company uses the resources. Which advantage ofthe AWS Cloud matches the company's requirements?",
    "options": [
      "A. Reliability",
      "B. Global reach",
      "C. Economies of scale",
      "D. Pay-as-you-go pricing"
    ],
    "answer": "D",
    "raw_answer": "D. Pay-as-you-go pricing Explanation: Pay-as-you-go pricing allows customers to pay only for the resources they use, which eliminates the need for guessing infrastructure capacity and ensures that the company only spends on what is actually used."
  },
  {
    "id": 83,
    "question": "- Which AWS service supports a hybrid architecture that gives users the abilityto extend AWS infrastructure, AWS services, APIs, and tools to data centers, co-location environments, or on-premises facilities?",
    "options": [
      "A. AWS Snowmobile",
      "B. AWS Local Zones",
      "C. AWS Outposts",
      "D. AWS Fargate"
    ],
    "answer": "C",
    "raw_answer": "C. AWS Outposts Explanation: AWS Outposts extends AWS infrastructure and services to on-premises environments, allowing users torun applications across hybrid environments with consistent APIs, tools, and services."
  },
  {
    "id": 84,
    "question": "- A company has a physical tape libraryto store data backups. The tape library isrunning out of space. The company needs to extend the tape library'scapacity to the AWS Cloud. Which AWS service should the company use to meet this requirement?",
    "options": [
      "A. Amazon Elastic Block Store (Amazon EBS)",
      "B. Amazon S3",
      "C. Amazon Elastic File System (Amazon EFS)",
      "D. AWS Storage Gateway"
    ],
    "answer": "D",
    "raw_answer": "D. AWS Storage Gateway Explanation: AWS Storage Gateway is a hybrid cloud storage service that enables on-premises applications to seamlessly use AWS cloud storage, including tape backup storage solutions."
  },
  {
    "id": 85,
    "question": "- An online retailcompany has seasonal sales spikes several times a year, primarily around holidays. Demand is lower at other times. The company finds itdifficulttopredict the increasing infrastructure demand foreach season. Which advantages of moving to the AWS Cloud would MOST benefit the company? (Choose two.)",
    "options": [
      "A. Global footprint",
      "B. Elasticity",
      "C. AWS service quotas",
      "D. AWS shared responsibility model",
      "E. Pay-as-you-go pricing"
    ],
    "answer": "B",
    "raw_answer": "B. Elasticity,E. Pay-as-you-go pricing Explanation: Elasticity allows the company to scale resources up or down based on demand, which isideal for handling seasonal spikes. Pay-as-you-go pricing ensures that the company only pays for the resources ituses, reducing costs during lower-demand periods."
  },
  {
    "id": 86,
    "question": "- Which AWS service can be used to turn textinto lifelikespeech?",
    "options": [
      "A. Amazon Polly",
      "B. Amazon Kendra",
      "C. Amazon Rekognition",
      "D. Amazon Connect"
    ],
    "answer": "A",
    "raw_answer": "A. Amazon Polly Explanation: Amazon Polly isa service that converts text into lifelikespeech, offering a wide variety ofvoices and languages."
  },
  {
    "id": 87,
    "question": "- Which AWS service or tool can be used tocapture information about inbound and outbound trafficinan Amazon VPC?",
    "options": [
      "A. VPC Flow Logs",
      "B. Amazon Inspector",
      "C. VPC endpoint services",
      "D. NAT gateway"
    ],
    "answer": "A",
    "raw_answer": "A. VPC Flow Logs Explanation: VPC Flow Logs capture information about the IP trafficgoing to and from network interfaces ina VPC, which is useful formonitoring and troubleshooting network traffic."
  },
  {
    "id": 88,
    "question": "- A company wants to ensure that two Amazon EC2 instances are in separate data centers with minimal communication latency between the data centers. How can the company meet this requirement?",
    "options": [
      "A. Place the EC2 instances in two separate AWS Regions connected with a VPC peering connection.",
      "B. Place the EC2 instances in two separate Availability Zones within the same AWS Region.",
      "C. Place one EC2 instance on premises and the other in an AWS Region. Then connect them by using an AWS VPN connection.",
      "D. Place both EC2 instances in a placement group for dedicated bandwidth."
    ],
    "answer": "B",
    "raw_answer": "B. Place the EC2 instances intwo separate AvailabilityZones within the same AWS Region. Explanation: AWS AvailabilityZones are distinct data centers within a region that are designed tobe isolated from failures inother zones, providing low-latency communication between instances in differentzones."
  },
  {
    "id": 89,
    "question": "- Inwhich situations should a company create an IAM user instead of an IAM role? (Choose two.)",
    "options": [
      "A. When an application that runs on Amazon EC2 instances requires access to other AWS services",
      "B. When the company creates AWS access credentials for individuals",
      "C. When the company creates an application that runs on a mobile phone that makes requests to AWS",
      "D. When the company needs to add users to IAM groups E.When users are authenticated inthe corporate network and want to be able to use AWS without having to sign in a second time"
    ],
    "answer": "B",
    "raw_answer": "B. When the company creates AWS access credentials forindividuals, D. When the company needs to add users to IAM groups Explanation: IAM users are used forindividual access, while IAM roles are typically used for applications or services that require access. IAM users can be added to groups for easier management."
  },
  {
    "id": 90,
    "question": "- Which AWS services should a company use toread and write data that changes frequently? (Choose two.)",
    "options": [
      "A. Amazon S3 Glacier",
      "B. Amazon RDS",
      "C. AWS Snowball",
      "D. Amazon Redshift E.Amazon Elastic File System (Amazon EFS)"
    ],
    "answer": "B",
    "raw_answer": "B. Amazon RDS, E. Amazon Elastic File System (Amazon EFS) Explanation: Amazon RDS is a managed relationaldatabase service suitable for frequent data reads and writes. Amazon EFS isa scalable filestorage system forapplications that require frequent read and write access to data."
  },
  {
    "id": 91,
    "question": "Which AWS service is used to provide encryption for Amazon EBS? A.AWS CertificateManager B.AWS Systems Manager",
    "options": [
      "C. AWS KMS",
      "D. AWS Config"
    ],
    "answer": "C",
    "raw_answer": "C. AWS KMS Explanation: AWS Key Management Service (KMS) isused to create and manage cryptographic keys for encrypting data. Amazon EBS uses KMS to provide encryption at rest for volumes."
  },
  {
    "id": 92,
    "question": "Which AWS services make use of global edge locations? (Choose two.) A.AWS Fargate B.Amazon CloudFront",
    "options": [
      "C. AWS Global Accelerator",
      "D. AWS Wavelength E.Amazon VPC"
    ],
    "answer": "B",
    "raw_answer": "B. Amazon CloudFront, C. AWS Global Accelerator Explanation: Amazon CloudFront and AWS Global Accelerator make use of AWS's global network of edge locations. CloudFront isa content delivery network (CDN), and Global Accelerator improves the availabilityand performance ofapplications by routing trafficthrough AWS's edge locations."
  },
  {
    "id": 93,
    "question": "A company is operating several factories where itbuilds products. The company needs the abilityto process data, store data, and run applications with local system interdependencies that require low latency. Which AWS service should the company use to meet these requirements?",
    "options": [
      "A. AWS IoT Greengrass",
      "B. AWS Lambda",
      "C. AWS Outposts",
      "D. AWS Snowball Edge"
    ],
    "answer": "A",
    "raw_answer": "A. AWS IoT Greengrass Explanation: AWS IoT Greengrass isdesigned forlocal data processing and low-latency interactions. Itallows devices toact locally on the data they generate, while stillusing the cloud formanagement, analytics, and storage."
  },
  {
    "id": 94,
    "question": "Which of the following is a recommended design principle for AWS Cloud architecture?",
    "options": [
      "A. Design tightly coupled components.",
      "B. Build a single application component that can handle allthe application functionality.",
      "C. Make large changes on fewer iterations toreduce chances of failure.",
      "D. Avoid monolithic architecture by segmenting workloads."
    ],
    "answer": "D",
    "raw_answer": "D. Avoid monolithic architecture by segmenting workloads. Explanation: Itisrecommended todesign loosely coupled components in AWS to enable flexibility,scalability,and resilience. Monolithic architectures are harder to scale and update."
  },
  {
    "id": 95,
    "question": "A company is designing its AWS workloads so that components can be updated regularly and so that changes can be made in small, reversible increments. Which pillar ofthe AWS Well-Architected Framework does thisdesign support?",
    "options": [
      "A. Security",
      "B. Performance efficiency",
      "C. Operational excellence",
      "D. Reliability"
    ],
    "answer": "C",
    "raw_answer": "C. Operational excellence Explanation: The pillarof operational excellence focuses on monitoring, incident response, and continuous improvement of workloads. Regular updates and reversible changes align with this principle."
  },
  {
    "id": 96,
    "question": "Which of the following acts as an instance-level firewall to control inbound and outbound access?",
    "options": [
      "A. Network access control list",
      "B. Security groups",
      "C. AWS Trusted Advisor",
      "D. Virtual private gateways"
    ],
    "answer": "B",
    "raw_answer": "B. Security groups Explanation: Security groups act as a virtualfirewall for EC2 instances tocontrol inbound and outbound traffic.They are associated with EC2 instances and operate at the instance level."
  },
  {
    "id": 97,
    "question": "A company has a workload that willrun continuously for 1 year. The workload cannot tolerate service interruptions. Which Amazon EC2 purchasing option willbe MOST cost-effective?",
    "options": [
      "A. AllUpfront Reserved Instances",
      "B. Partial Upfront Reserved Instances",
      "C. Dedicated Instances",
      "D. On-Demand Instances"
    ],
    "answer": "A",
    "raw_answer": "A. AllUpfront Reserved Instances Explanation: Reserved Instances offer significant savings over On-Demand Instances, especially when purchased as \"All Upfront\" for a 1-year term. They provide a cost-effective option for long-running, uninterrupted workloads."
  },
  {
    "id": 98,
    "question": "Which AWS service helps protect against DDoS attacks?",
    "options": [
      "A. AWS Shield",
      "B. Amazon Inspector",
      "C. Amazon GuardDuty",
      "D. Amazon Detective"
    ],
    "answer": "A",
    "raw_answer": "A. AWS Shield Explanation: AWS Shield provides DDoS protection for applications running on AWS. Itoffers both standard and advanced protection against infrastructure and application layer attacks."
  },
  {
    "id": 99,
    "question": "Using AWS Config to record, audit, and evaluate changes to AWS resources to enable traceabilityis an example of which AWS Well-Architected Framework pillar?",
    "options": [
      "A. Security",
      "B. Operational excellence",
      "C. Performance efficiency",
      "D. Cost optimization"
    ],
    "answer": "B",
    "raw_answer": "B. Operational excellence Explanation: The operational excellence pillarfocuses on monitoring and improving workloads over time. AWS Config helps track changes toAWS resources, ensuring traceability and facilitatingcontinuous improvement."
  },
  {
    "id": 100,
    "question": "Which AWS tool or feature acts as a VPC firewall at the subnet level?",
    "options": [
      "A. Security group",
      "B. Network ACL",
      "C. TrafficMirroring",
      "D. Internet gateway"
    ],
    "answer": "B",
    "raw_answer": "B. Network ACL Explanation: Network Access Control Lists (ACLs) provide a subnet-level firewall that controls inbound and outbound trafficforthe entire subnet, unlike security groups, which are instance-level firewalls."
  },
  {
    "id": 101,
    "question": "Which AWS service can be used to decouple applications?",
    "options": [
      "A. AWS Config",
      "B. Amazon Simple Queue Service (Amazon SQS)",
      "C. AWS Batch",
      "D. Amazon Simple Email Service (Amazon SES)"
    ],
    "answer": "B",
    "raw_answer": "B. Amazon Simple Queue Service (Amazon SQS) Explanation: Amazon SQS is a message queuing service that decouples applications by allowing them tocommunicate asynchronously. Ithelps in handling high-throughput and ensures thatapplications are not directly dependent on each other."
  },
  {
    "id": 102,
    "question": "Which disaster recovery option isthe LEAST expensive?",
    "options": [
      "A. Warm standby",
      "B. Multisite",
      "C. Backup and restore",
      "D. Pilotlight"
    ],
    "answer": "C",
    "raw_answer": "C. Backup and restore Explanation: The backup and restore disaster recovery option is the least expensive as it involves periodically backing up data and restoring itwhen needed. Itdoes not require running standby infrastructure likeother options."
  },
  {
    "id": 103,
    "question": "Which type of AWS storage is ephemeral and is deleted when an Amazon EC2 instance is stopped or terminated?",
    "options": [
      "A. Amazon Elastic Block Store (Amazon EBS)",
      "B. Amazon EC2 instance store",
      "C. Amazon Elastic File System (Amazon EFS)",
      "D. Amazon S3"
    ],
    "answer": "B",
    "raw_answer": "B. Amazon EC2 instance store Explanation: Amazon EC2 instance store provides ephemeral storage that is physically attached to the host machine. The data is lostwhen the EC2 instance isstopped or terminated."
  },
  {
    "id": 104,
    "question": "Which of the following isa characteristic of the AWS account root user?",
    "options": [
      "A. The root user is the only user that can be configured with multi-factor authentication (MFA).",
      "B. The root user is the only user that can access the AWS Management Console.",
      "C. The root user isthe firstsign-in identity that isavailable when an AWS account iscreated.",
      "D. The root user has a password that cannot be changed."
    ],
    "answer": "C",
    "raw_answer": "C. The root user isthe firstsign-in identitythat is available when an AWS account is created. Explanation: The root user isthe firstuser created when an AWS account isset up and has full access to allAWS services and resources. MFA can be configured forthe root user, and the password can be changed."
  },
  {
    "id": 105,
    "question": "A company hosts an application on an Amazon EC2 instance. The EC2 instance needs to access several AWS resources, including Amazon S3 and Amazon DynamoDB. What is the MOST operationally efficient solution todelegate permissions?",
    "options": [
      "A. Create an IAM role with the required permissions. Attach the role to the EC2 instance.",
      "B. Create an IAM user and use its access key and secret access key in the application.",
      "C. Create an IAM user and use itsaccess key and secret access key to create a CLI profile in the EC2 instance.",
      "D. Create an IAM role with the required permissions. Attach the role to the administrative IAM user."
    ],
    "answer": "A",
    "raw_answer": "A. Create an IAM role with the required permissions. Attach the role to the EC2 instance. Explanation: Using IAM roles is the most operationally efficientway to delegate permissions to EC2 instances. This allows the EC2 instance to securely access AWS resources without needing to manage access keys."
  },
  {
    "id": 106,
    "question": "Which of the following is a component of the AWS Global Infrastructure?",
    "options": [
      "A. Amazon Alexa",
      "B. AWS Regions",
      "C. Amazon Lightsail",
      "D. AWS Organizations"
    ],
    "answer": "B",
    "raw_answer": "B. AWS Regions Explanation: AWS Regions are geographical locations that contain multiple Availability Zones. They are a core component ofAWS's global infrastructure, providing high availability and fault tolerance."
  },
  {
    "id": 107,
    "question": "What is the purpose ofhaving an internet gateway within a VPC?",
    "options": [
      "A. To create a VPN connection to the VPC",
      "B. To allow communication between the VPC and the internet",
      "C. To impose bandwidth constraints on internet traffic",
      "D. To load balance trafficfrom the internet across Amazon EC2 instances"
    ],
    "answer": "B",
    "raw_answer": "B. To allow communication between the VPC and the internet Explanation: An internet gateway allows communication between resources ina VPC and the internet.Itenables instances in the VPC to send and receive trafficfrom the internet."
  },
  {
    "id": 108,
    "question": "Which AWS service allows users to download security and compliance reports about the AWS infrastructure on demand?",
    "options": [
      "A. Amazon GuardDuty",
      "B. AWS Security Hub",
      "C. AWS Artifact",
      "D. AWS Shield"
    ],
    "answer": "C",
    "raw_answer": "C. AWS Artifact Explanation: AWS Artifactprovides on-demand access to AWS\u2019s security and compliance reports, including certifications and audit reports."
  },
  {
    "id": 109,
    "question": "A pharmaceutical company operates itsinfrastructure ina single AWS Region. The company has thousands ofVPCs in various AWS accounts that itwants to interconnect. Which AWS service or feature should the company use tohelp simplify management and reduce operational costs?",
    "options": [
      "A. VPC endpoint",
      "B. AWS Direct Connect",
      "C. AWS Transit Gateway",
      "D. VPC peering"
    ],
    "answer": "C",
    "raw_answer": "C. AWS Transit Gateway Explanation: AWS Transit Gateway simplifies the management of inter-VPC connectivity by acting as a central hub toconnect thousands of VPCs across multiple accounts. Itreduces the complexity and operational overhead compared to VPC peering."
  },
  {
    "id": 110,
    "question": "A company is planning an infrastructure deployment to the AWS Cloud. Before the deployment, the company wants a cost estimate for running the infrastructure. Which AWS service or feature can provide this information?",
    "options": [
      "A. Cost Explorer",
      "B. AWS Trusted Advisor",
      "C. AWS Cost and Usage Report",
      "D. AWS Pricing Calculator"
    ],
    "answer": "D",
    "raw_answer": "D. AWS Pricing Calculator Explanation: The AWS Pricing Calculator allows users toestimate the costs of theirAWS infrastructure based on their specific usage and configuration before deployment. Ithelps in planning and budgeting costs accurately."
  },
  {
    "id": 111,
    "question": "Which AWS service or toolhelps to centrally manage billingand allow controlled access to resources across AWS accounts?",
    "options": [
      "A. AWS Identity and Access Management (IAM)",
      "B. AWS Organizations",
      "C. Cost Explorer",
      "D. AWS Budgets"
    ],
    "answer": "B",
    "raw_answer": "B. AWS Organizations Explanation: AWS Organizations allows you to manage multiple AWS accounts centrally. It enables consolidated billingand allows you to apply policies across accounts, which helps in controlling access toresources across AWS accounts."
  },
  {
    "id": 112,
    "question": "Which of the following are Amazon VirtualPrivate Cloud (Amazon VPC) resources?",
    "options": [
      "A. Objects; access control lists(ACLs)",
      "B. Subnets; internet gateways",
      "C. Access policies; buckets",
      "D. Groups; roles"
    ],
    "answer": "B",
    "raw_answer": "B. Subnets; internet gateways Explanation: Amazon VPC resources include subnets, internet gateways, route tables, and network interfaces. These resources are essential forsetting up a private network in AWS."
  },
  {
    "id": 113,
    "question": "A company needs to identifythe last time that a specificuser accessed the AWS Management Console. Which AWS service willprovide this information? A.Amazon Cognito B.AWS CloudTrail",
    "options": [
      "C. Amazon Inspector",
      "D. Amazon GuardDuty"
    ],
    "answer": "B",
    "raw_answer": "B. AWS CloudTrail Explanation: AWS CloudTrail records allAPI calls made to the AWS Management Console, including user access details.Itallows tracking of user activitiesand can provide the last time a user accessed the console."
  },
  {
    "id": 114,
    "question": "A company launched an Amazon EC2 instance with the latest Amazon Linux 2 Amazon Machine Image (AMI). Which actions can a system administrator take toconnect tothe EC2 instance? (Choose two.) A.Use Amazon EC2 Instance Connect. B.Use a Remote Desktop Protocol (RDP) connection.",
    "options": [
      "C. Use AWS Batch",
      "D. Use AWS Systems Manager Session Manager. E.Use Amazon Connect"
    ],
    "answer": "A",
    "raw_answer": "A. Use Amazon EC2 Instance Connect, D. Use AWS Systems Manager Session Manager Explanation: Amazon EC2 Instance Connect allows SSH access to EC2 instances. AWS Systems Manager Session Manager enables secure shell access to EC2 instances without needing an SSH key oropen ports."
  },
  {
    "id": 115,
    "question": "A company wants toperform sentiment analysis on customer service email messages that it receives. The company wants toidentify whether the customer service engagement was positiveor negative. Which AWS service should the company use to perform thisanalysis?",
    "options": [
      "A. Amazon Textract",
      "B. Amazon Translate",
      "C. Amazon Comprehend",
      "D. Amazon Rekognition"
    ],
    "answer": "C",
    "raw_answer": "C. Amazon Comprehend Explanation: Amazon Comprehend is a natural language processing (NLP) service that can perform sentiment analysis, among other tasks like entityrecognition, on text data such as customer emails."
  },
  {
    "id": 116,
    "question": "What is the totalamount of storage offered by Amazon S3?",
    "options": [
      "A. 100MB",
      "B. 5 GB",
      "C. 5 TB",
      "D. Unlimited"
    ],
    "answer": "D",
    "raw_answer": "D. Unlimited Explanation: Amazon S3 provides virtuallyunlimited storage capacity, allowing users to store as much data as needed without a predefined limit."
  },
  {
    "id": 117,
    "question": "A company ismigrating to Amazon S3. The company needs to transfer 60 TB of data from an on-premises data center to AWS within 10 days. Which AWS service should the company use to accomplish this migration?",
    "options": [
      "A. Amazon S3 Glacier",
      "B. AWS Database Migration Service (AWS DMS)",
      "C. AWS Snowball",
      "D. AWS Direct Connect"
    ],
    "answer": "C",
    "raw_answer": "C. AWS Snowball Explanation: AWS Snowball is a physical data transport solution that helps with large-scale data migrations. Itis ideal fortransferring large amounts of data, like 60 TB, within a short period."
  },
  {
    "id": 118,
    "question": "What type of database is Amazon DynamoDB?",
    "options": [
      "A. In-memory",
      "B. Relational",
      "C. Key-value",
      "D. Graph"
    ],
    "answer": "C",
    "raw_answer": "C. Key-value Explanation: Amazon DynamoDB is a fullymanaged NoSQL database service that uses a key-value and document data model, making itsuitable for applications that require high performance and scalability."
  },
  {
    "id": 119,
    "question": "A large organization has a single AWS account. What are the advantages of reconfiguring the single account into multiple AWS accounts? (Choose two.)",
    "options": [
      "A. Itallows for administrative isolation between different workloads.",
      "B. Discounts can be applied on a quarterly basis by submitting cases inthe AWS Management Console.",
      "C. Transitioning objects from Amazon S3 to Amazon S3 Glacier inseparate AWS accounts will be less expensive.",
      "D. Having multiple accounts reduces the risks associated with malicious activity targeted at a single account.",
      "E. Amazon QuickSight offers access to a cost tool that provides application-specific recommendations for environments running in multiple accounts."
    ],
    "answer": "A",
    "raw_answer": "A. Itallows for administrative isolation between different workloads, D. Having multiple accounts reduces the risks associated with malicious activity targeted at a single account Explanation: Using multiple AWS accounts helps isolate workloads for security and administrative purposes. It also limits the impact ofmalicious activity by reducing the blast radius."
  },
  {
    "id": 120,
    "question": "A retailcompany has recently migrated its website to AWS. The company wants to ensure that it isprotected from SQL injection attacks. The website uses an Application Load Balancer to distribute trafficto multiple Amazon EC2 instances. Which AWS service or feature can be used to create a custom rule that blocks SQL injection attacks?",
    "options": [
      "A. Security groups",
      "B. AWS WAF",
      "C. Network ACLs",
      "D. AWS Shield"
    ],
    "answer": "B",
    "raw_answer": "B. AWS WAF Explanation: AWS Web Application Firewall (WAF) allows you to create custom rules to block malicious traffic,including SQL injection attacks, toprotect web applications from common vulnerabilities."
  },
  {
    "id": 121,
    "question": "Which AWS service provides a feature that can be used to proactively monitor and plan forthe service quotas ofAWS resources?",
    "options": [
      "A. AWS CloudTrail",
      "B. AWS Personal Health Dashboard",
      "C. AWS Trusted Advisor",
      "D. Amazon CloudWatch"
    ],
    "answer": "C",
    "raw_answer": "C. AWS Trusted Advisor Explanation: AWS Trusted Advisor provides recommendations tohelp users optimize their AWS environment. Itincludes a feature for monitoring service quotas, helping users plan and manage AWS resource usage proactively."
  },
  {
    "id": 122,
    "question": "Which of the following is an advantage that users experience when they move on-premises workloads to the AWS Cloud?",
    "options": [
      "A. Elimination of expenses for running and maintaining data centers",
      "B. Price discounts that are identical to discounts from hardware providers",
      "C. Distribution of alloperational controls to AWS",
      "D. Elimination of operational expenses"
    ],
    "answer": "A",
    "raw_answer": "A. Elimination ofexpenses for running and maintaining data centers Explanation: Moving workloads tothe AWS Cloud eliminates the need to manage and maintain on-premises data centers, reducing costs associated with hardware, electricity,cooling, and physical space."
  },
  {
    "id": 123,
    "question": "Which design principle is included in the operational excellence pillarof the AWS Well-Architected Framework?",
    "options": [
      "A. Create annotated documentation.",
      "B. Anticipate failure.",
      "C. Ensure performance efficiency.",
      "D. Optimize costs."
    ],
    "answer": "B",
    "raw_answer": "B. Anticipate failure Explanation: The operational excellence pillaremphasizes anticipating failure and designing systems that can recover gracefully from failures,ensuring minimal disruption tothe business."
  },
  {
    "id": 124,
    "question": "Which AWS services offergateway VPC endpoints that can be used to avoid sending traffic over the internet? (Choose two.)",
    "options": [
      "A. Amazon Simple Notification Service (Amazon SNS)",
      "B. Amazon Simple Queue Service (Amazon SQS)",
      "C. AWS CodeBuild",
      "D. Amazon S3",
      "E. Amazon DynamoDB"
    ],
    "answer": "D",
    "raw_answer": "D. Amazon S3, E. Amazon DynamoDB Explanation: Amazon S3 and Amazon DynamoDB support gateway VPC endpoints, allowing traffictoremain within the AWS network and avoiding the need to route trafficover the internet."
  },
  {
    "id": 125,
    "question": "Which of the following isthe customer responsible for updating and patching, according to the AWS shared responsibility model?",
    "options": [
      "A. Amazon FSx forWindows File Server",
      "B. Amazon WorkSpaces virtualWindows desktop",
      "C. AWS Directory Service for Microsoft Active Directory",
      "D. Amazon RDS forMicrosoft SQL Server"
    ],
    "answer": "B",
    "raw_answer": "B. Amazon WorkSpaces virtual Windows desktop Explanation: According to the AWS shared responsibility model, customers are responsible for managing and patching the operating system and applications on Amazon WorkSpaces, a managed desktop service."
  },
  {
    "id": 126,
    "question": "Who has the responsibility to patch the host operating system of an Amazon EC2 instance, according to the AWS shared responsibility model?",
    "options": [
      "A. Both AWS and the customer",
      "B. The customer only",
      "C. The EC2 hardware manufacturer",
      "D. AWS only"
    ],
    "answer": "B",
    "raw_answer": "B. The customer only Explanation: The customer isresponsible forpatching the operating system of the EC2 instance, while AWS is responsible for the underlying infrastructure and hardware."
  },
  {
    "id": 127,
    "question": "A company isusing an Amazon RDS DB instance for an application that isdeployed in the AWS Cloud. The company needs regular patching of the operating system of the server where the DB instance runs. What is the company's responsibility in thissituation, according tothe AWS shared responsibility model?",
    "options": [
      "A. Open a support case to obtain administrative access to the server so that the company can patch the DB instance operating system.",
      "B. Open a support case and request that AWS patch the DB instance operating system.",
      "C. Use administrative access to the server, and apply the operating system patches during the regular maintenance window that is defined forthe DB instance.",
      "D. Establish a regular maintenance window that tellsAWS when to patch the DB instance operating system."
    ],
    "answer": "D",
    "raw_answer": "D. Establish a regular maintenance window that tellsAWS when topatch the DB instance operating system. Explanation: AWS manages the patching of the underlying infrastructure of Amazon RDS. Customers can define a maintenance window to specify when they prefer AWS to apply patches."
  },
  {
    "id": 128,
    "question": "Why isan AWS Well-Architected review a criticalpart of the cloud design process?",
    "options": [
      "A. A Well-Architected review is mandatory before a workload can run on AWS.",
      "B. A Well-Architected review helps identify design gaps and helps evaluate design decisions and related documents.",
      "C. A Well-Architected review isan audit mechanism that isa part of requirements for service level agreements.",
      "D. A Well-Architected review eliminates the need for ongoing auditing and compliance tests."
    ],
    "answer": "B",
    "raw_answer": "B. A Well-Architected review helps identify design gaps and helps evaluate design decisions and related documents. Explanation: A Well-Architected review evaluates the architecture based on AWS best practices. Itidentifies areas for improvement and ensures that the design is aligned with AWS's principles for security, reliability,and performance."
  },
  {
    "id": 129,
    "question": "A company implements an Amazon EC2 Auto Scaling policy along with an Application Load Balancer to automatically recover unhealthy applications that run on Amazon EC2 instances. Which pillarof the AWS Well-Architected Framework does this action cover?",
    "options": [
      "A. Security",
      "B. Performance efficiency",
      "C. Operational excellence",
      "D. Reliability"
    ],
    "answer": "D",
    "raw_answer": "D. Reliability Explanation: The action of using Auto Scaling and an Application Load Balancer to recover unhealthy applications addresses the reliabilitypillar,ensuring that the system can handle failures and maintain availability."
  },
  {
    "id": 130,
    "question": "Which AWS Cloud benefit is shown by an architecture's abilityto withstand failures with minimal downtime?",
    "options": [
      "A. Agility",
      "B. Elasticity",
      "C. Scalability",
      "D. High availability"
    ],
    "answer": "D",
    "raw_answer": "D. High availability Explanation: High availabilityrefers to a system's abilityto withstand failureswith minimal downtime, ensuring continuous service availability.Itis a core benefit of cloud architectures."
  },
  {
    "id": 131,
    "question": "Under the AWS shared responsibility model, which task is the customer's responsibility when managing AWS Lambda functions?",
    "options": [
      "A. Creating versions of Lambda functions",
      "B. Maintaining server and operating systems",
      "C. Scaling Lambda resources according todemand",
      "D. Updating the Lambda runtime environment"
    ],
    "answer": "A",
    "raw_answer": "A. Creating versions of Lambda functions Explanation: According to the AWS shared responsibility model, the customer is responsible formanaging the code and configurations of AWS Lambda functions, including creating versions. AWS manages the infrastructure, such as the servers and operating systems."
  },
  {
    "id": 132,
    "question": "What does the AWS Concierge Support team provide?",
    "options": [
      "A. A technical expert dedicated to the user",
      "B. A primary point ofcontact for AWS Billingand AWS Support",
      "C. A partner to help provide scaling guidance for an event launch",
      "D. A dedicated AWS staff member who reviews the user's application architecture"
    ],
    "answer": "B",
    "raw_answer": "B. A primary point of contact for AWS Billing and AWS Support Explanation: The AWS Concierge Support team provides a primary point ofcontact for AWS Billingand AWS Support. They assist with billinginquiries and offer guidance on AWS services."
  },
  {
    "id": 133,
    "question": "A company needs to generate reports that can break down cloud costs by product, by company-defined tags, and by hour, day, and month. Which AWS tool should the company use to meet these requirements?",
    "options": [
      "A. Reserved Instance utilizationand coverage reports",
      "B. Savings Plans utilizationreports",
      "C. AWS Budgets reports",
      "D. AWS Cost and Usage Reports"
    ],
    "answer": "D",
    "raw_answer": "D. AWS Cost and Usage Reports Explanation: AWS Cost and Usage Reports provide detailed insights intocloud costs, including breakdowns by product, tags, and time intervals (hourly, daily,monthly). This tool isideal for tracking costs in a granular manner."
  },
  {
    "id": 134,
    "question": "A company has a serverless application that includes an Amazon API Gateway API, an AWS Lambda function, and an Amazon DynamoDB database. Which AWS service can the company use to trace user requests as they move through the application's components?",
    "options": [
      "A. AWS CloudTrail",
      "B. Amazon CloudWatch",
      "C. Amazon Inspector",
      "D. AWS X-Ray"
    ],
    "answer": "D",
    "raw_answer": "D. AWS X-Ray Explanation: AWS X-Ray isused totrace requests as they travel through various AWS services, helping developers understand performance bottlenecks and troubleshoot errors in serverless applications."
  },
  {
    "id": 135,
    "question": "A company needs to set up a petabyte-scale data warehouse inthe AWS Cloud. Which AWS service willmeet this requirement?",
    "options": [
      "A. Amazon DynamoDB",
      "B. Amazon RDS",
      "C. Amazon Redshift",
      "D. Amazon ElastiCache"
    ],
    "answer": "C",
    "raw_answer": "C. Amazon Redshift Explanation: Amazon Redshift isa fullymanaged data warehouse service designed to handle large-scale data analytics, including petabyte-scale storage and processing."
  },
  {
    "id": 136,
    "question": "Which AWS service isalways provided at no charge?",
    "options": [
      "A. Amazon S3",
      "B. AWS Identity and Access Management (IAM)",
      "C. Elastic Load Balancers",
      "D. AWS WAF"
    ],
    "answer": "B",
    "raw_answer": "B. AWS Identity and Access Management (IAM) Explanation: AWS IAM is a service that allows users to manage access toAWS resources. Itis provided at no additional charge, though the resources itmanages may incur costs."
  },
  {
    "id": 137,
    "question": "A company needs todesign an AWS disaster recovery plan to cover multiple geographic areas. Which action willmeet this requirement?",
    "options": [
      "A. Configure multiple AWS accounts.",
      "B. Configure the architecture across multiple Availability Zones in an AWS Region.",
      "C. Configure the architecture across multiple AWS Regions.",
      "D. Configure the architecture among many edge locations."
    ],
    "answer": "C",
    "raw_answer": "C. Configure the architecture across multiple AWS Regions. Explanation: To ensure disaster recovery across multiple geographic areas, a company must architect itsinfrastructure across multiple AWS Regions. This provides high availabilityand redundancy incase of regional failures."
  },
  {
    "id": 138,
    "question": "Which of the following is a benefit of moving from an on-premises data center to the AWS Cloud?",
    "options": [
      "A. Compute instances can be launched and terminated as needed to optimize costs.",
      "B. Compute costs can be viewed in the AWS Billingand Cost Management console.",
      "C. Users retain fulladministrative access to their compute instances.",
      "D. Users can optimize costs by permanently running enough instances at peak load."
    ],
    "answer": "A",
    "raw_answer": "A. Compute instances can be launched and terminated as needed tooptimize costs. Explanation: One of the key benefits of AWS Cloud is the abilityto dynamically scale compute resources based on demand. This flexibilityhelps optimize costs by only running instances when needed."
  },
  {
    "id": 139,
    "question": "Inwhich ways does the AWS Cloud offer lower total cost of ownership (TCO) of computing resources than on-premises data centers? (Choose two.)",
    "options": [
      "A. AWS replaces upfront capital expenditures with pay-as-you-go costs.",
      "B. AWS isdesigned for high availability,which eliminates user downtime.",
      "C. AWS eliminates the need foron-premises IT staff.",
      "D. AWS uses economies of scale to continually reduce prices.",
      "E. AWS offers a single pricing model for Amazon EC2 instances."
    ],
    "answer": "A",
    "raw_answer": "A. AWS replaces upfront capital expenditures with pay-as-you-go costs, D. AWS uses economies of scale to continually reduce prices. Explanation: AWS helps lower TCO by shifting from capital expenditures (CapEx) to operational expenditures (OpEx) with pay-as-you-go pricing. Additionally, AWS's large-scale infrastructure allows ittopass on cost savings to customers through economies ofscale."
  },
  {
    "id": 140,
    "question": "Which AWS service monitors AWS accounts forsecurity threats?",
    "options": [
      "A. Amazon GuardDuty",
      "B. AWS Secrets Manager",
      "C. Amazon Cognito",
      "D. AWS Certificate Manager (ACM)"
    ],
    "answer": "A",
    "raw_answer": "A. Amazon GuardDuty Explanation: Amazon GuardDuty is a security service that continuously monitors AWS accounts for potential security threats, such as unusual API calls or suspicious network activity."
  },
  {
    "id": 141,
    "question": "Which benefit is included with an AWS Enterprise Support plan?",
    "options": [
      "A. AWS Partner Network (APN) support at no cost.",
      "B. Designated support from an AWS technical account manager (TAM)",
      "C. On-site support from AWS engineers",
      "D. AWS managed compliance as code with AWS Config"
    ],
    "answer": "B",
    "raw_answer": "B. Designated support from an AWS technical account manager (TAM) Explanation: The AWS Enterprise Support plan includes a designated Technical Account Manager (TAM) who provides proactive guidance and support. This is a key benefit for enterprise customers to help them manage their AWS environment effectively."
  },
  {
    "id": 142,
    "question": "Which task does AWS perform automatically? A.Encrypt data that isstored inAmazon DynamoDB. B.Patch Amazon EC2 instances.",
    "options": [
      "C. Encrypt user network traffic.",
      "D. Create TLS certificatesfor users' websites."
    ],
    "answer": "C",
    "raw_answer": "C. Encrypt user network traffic Explanation: AWS automatically encrypts network trafficusing protocols likeTLS forservices such as Amazon S3, Amazon EC2, and Amazon RDS. However, tasks likepatching EC2 instances orcreating TLS certificatesare not automatically performed by AWS."
  },
  {
    "id": 143,
    "question": "Which AWS service or tool can a company use to visualize, understand, and manage AWS spending and usage over time? A.AWS Trusted Advisor B.Amazon CloudWatch",
    "options": [
      "C. Cost Explorer",
      "D. AWS Budgets"
    ],
    "answer": "C",
    "raw_answer": "C. Cost Explorer Explanation: AWS Cost Explorer helps users visualize and manage their AWS spending and usage over time. Itprovides detailed insights intocost allocation, usage patterns, and allows users to forecast future costs."
  },
  {
    "id": 144,
    "question": "A company wants to deploy some of itsresources in the AWS Cloud. To meet regulatory requirements, the data must remain local and on premises. There must be low latency between AWS and the company resources. Which AWS service or feature can be used to meet these requirements? A.AWS Local Zones B.Availability Zones",
    "options": [
      "C. AWS Outposts",
      "D. AWS Wavelength Zones"
    ],
    "answer": "A",
    "raw_answer": "A. AWS Local Zones Explanation: AWS Local Zones extend AWS infrastructure to locations close to large population centers, providing low-latency access to AWS services while meeting regulatory requirements for data residency."
  },
  {
    "id": 145,
    "question": "A company requires an isolated environment within AWS for security purposes. Which action can be taken to accomplish this?",
    "options": [
      "A. Create a separate Availability Zone to host the resources.",
      "B. Create a separate VPC to host the resources.",
      "C. Create a placement group to host the resources.",
      "D. Create an AWS Direct Connect connection between the company and AWS."
    ],
    "answer": "B",
    "raw_answer": "B. Create a separate VPC to host the resources. Explanation: A Virtual Private Cloud (VPC) allows forthe creation of an isolated network environment within AWS. By creating a separate VPC, a company can ensure that itsresources are isolated from other AWS customers and networks."
  },
  {
    "id": 146,
    "question": "Which AWS service is a highly available and scalable DNS web service?",
    "options": [
      "A. Amazon VPC",
      "B. Amazon CloudFront",
      "C. Amazon Route 53",
      "D. Amazon Connect"
    ],
    "answer": "C",
    "raw_answer": "C. Amazon Route 53 Explanation: Amazon Route 53 isa highly available and scalable Domain Name System (DNS) web service. Itprovides DNS routing, health checks, and domain registration services."
  },
  {
    "id": 147,
    "question": "Which of the following is an AWS best practice for managing an AWS account root user?",
    "options": [
      "A. Keep the root user password with the security team.",
      "B. Enable multi-factor authentication (MFA) forthe root user.",
      "C. Create an access key for the root user.",
      "D. Keep the root user password consistent for compliance purposes."
    ],
    "answer": "B",
    "raw_answer": "B. Enable multi-factor authentication (MFA) for the root user. Explanation: AWS recommends enabling multi-factor authentication (MFA) for the root user to enhance security. This provides an additional layer of protection against unauthorized access."
  },
  {
    "id": 148,
    "question": "A company wants to improve its security and audit posture by limiting Amazon EC2 inbound access. What should the company use to access instances remotely instead of opening inbound SSH ports and managing SSH keys? A.EC2 key pairs B.AWS Systems Manager Session Manager",
    "options": [
      "C. AWS Identityand Access Management (IAM)",
      "D. Network ACLs"
    ],
    "answer": "B",
    "raw_answer": "B. AWS Systems Manager Session Manager Explanation: AWS Systems Manager Session Manager allows for secure, auditable access to EC2 instances without needing toopen inbound SSH ports or manage SSH keys. Itprovides a more secure and controlled access method."
  },
  {
    "id": 149,
    "question": "After selecting an Amazon EC2 Dedicated Host reservation, which pricing option would provide the largest discount? A.No upfront payment B.Hourly on-demand payment",
    "options": [
      "C. Partialupfront payment",
      "D. Allupfront payment"
    ],
    "answer": "D",
    "raw_answer": "D. Allupfront payment Explanation: The \"Allupfront payment\" option for EC2 Dedicated Host reservations provides the largest discount. This option offerssignificant savings compared to hourly or partial upfront payment options."
  },
  {
    "id": 150,
    "question": "A company has refined its workload to use specific AWS services to improve efficiency and reduce cost. Which best practice for cost governance does this example show? A.Resource controls B.Cost allocation",
    "options": [
      "C. Architecture optimization",
      "D. Tagging enforcement"
    ],
    "answer": "C",
    "raw_answer": "C. Architecture optimization Explanation: Architecture optimization involves refiningworkloads to use AWS services that improve efficiency and reduce cost. This is a key practice for cost governance, ensuring that resources are used in the most cost-effective manner."
  },
  {
    "id": 151,
    "question": "A company would like to host its MySQL databases on AWS and maintain fullcontrol over the operating system, database installation, and configuration. Which AWS service should the company use to host the databases?",
    "options": [
      "A. Amazon RDS",
      "B. Amazon EC2",
      "C. Amazon DynamoDB",
      "D. Amazon Aurora"
    ],
    "answer": "B",
    "raw_answer": "B. Amazon EC2 Explanation: Amazon EC2 provides fullcontrol over the operating system, database installation,and configuration. While Amazon RDS and Amazon Aurora offer managed database services, they do not provide fullcontrol over the underlying infrastructure. DynamoDB isa NoSQL database service, not suitable for MySQL."
  },
  {
    "id": 152,
    "question": "How does the AWS global infrastructure offer high availability and fault tolerance to itsusers?",
    "options": [
      "A. The AWS infrastructure ismade up ofmultiple AWS Regions within various Availability Zones located in areas that have low flood risk,and are interconnected with low-latency networks and redundant power supplies.",
      "B. The AWS infrastructure consists of subnets containing various Availability Zones with multiple data centers located in the same geographic location.",
      "C. AWS allows users to choose AWS Regions and data centers so that users can select the closest data centers indifferent Regions.",
      "D. The AWS infrastructure consists ofisolated AWS Regions with independent Availability Zones that are connected with low-latency networking and redundant power supplies."
    ],
    "answer": "D",
    "raw_answer": "D. The AWS infrastructure consists of isolated AWS Regions with independent Availability Zones that are connected with low-latency networking and redundant power supplies. Explanation: AWS infrastructure is designed with high availabilityand faulttolerance by using multiple Availability Zones within each AWS Region. These Availability Zones are isolated from each other but connected with low-latency networking to ensure reliabilityand redundancy."
  },
  {
    "id": 153,
    "question": "A company is using Amazon EC2 Auto Scaling to scale its Amazon EC2 instances. Which benefit of the AWS Cloud does this example illustrate?",
    "options": [
      "A. High availability",
      "B. Elasticity",
      "C. Reliability",
      "D. Global reach"
    ],
    "answer": "B",
    "raw_answer": "B. Elasticity Explanation: Elasticity refers tothe abilitytoautomatically scale resources up or down based on demand. EC2 Auto Scaling isa key feature that enables elasticity by automatically adjusting the number of EC2 instances to match the application's needs."
  },
  {
    "id": 154,
    "question": "Which AWS service or feature is used to send both text and email messages from distributed applications?",
    "options": [
      "A. Amazon Simple Notification Service (Amazon SNS)",
      "B. Amazon Simple Email Service (Amazon SES)",
      "C. Amazon CloudWatch alerts",
      "D. Amazon Simple Queue Service (Amazon SQS)"
    ],
    "answer": "A",
    "raw_answer": "A. Amazon Simple Notification Service (Amazon SNS) Explanation: Amazon SNS isa fullymanaged messaging service that allows sending both text and email messages from distributed applications. Itcan also send messages toother endpoints likemobile devices orHTTP endpoints."
  },
  {
    "id": 155,
    "question": "A user is able to set up a master payer account to view consolidated billing reports through:",
    "options": [
      "A. AWS Budgets",
      "B. Amazon Macie",
      "C. Amazon QuickSight",
      "D. AWS Organizations"
    ],
    "answer": "D",
    "raw_answer": "D. AWS Organizations Explanation: AWS Organizations allows users to set up a master payer account to view consolidated billingreports formultiple AWS accounts. This feature helps manage and optimize costs across multiple accounts within the organization."
  },
  {
    "id": 156,
    "question": "According to the AWS shared responsibility model, which task is the customer's responsibility? A.Maintaining the infrastructure needed torun AWS Lambda B.Updating the operating system of Amazon DynamoDB instances",
    "options": [
      "C. Maintaining Amazon S3 infrastructure",
      "D. Updating the guest operating system on Amazon EC2 instances"
    ],
    "answer": "D",
    "raw_answer": "D. Updating the guest operating system on Amazon EC2 instances Explanation: In the shared responsibility model, AWS isresponsible forthe underlying infrastructure,while the customer is responsible formanaging and updating the guest operating system on Amazon EC2 instances."
  },
  {
    "id": 157,
    "question": "A company wants to migrate a small website and database quickly from on-premises infrastructure to the AWS Cloud. The company has limited operational knowledge to perform the migration. Which AWS service supports this use case? A.Amazon EC2 B.Amazon Lightsail",
    "options": [
      "C. Amazon S3",
      "D. AWS Lambda"
    ],
    "answer": "B",
    "raw_answer": "B. Amazon Lightsail Explanation: Amazon Lightsailis a simplified AWS service designed foreasy deployment and management of websites and databases. Itisideal for users with limited operational knowledge who want toquickly migrate to the cloud."
  },
  {
    "id": 158,
    "question": "A company ismoving multiple applications to a single AWS account. The company wants to monitor the AWS Cloud costs incurred by each application. What can the company do to meet this requirement? A.Set up invoiced billing. B.Use AWS Artifact.",
    "options": [
      "C. Set budgets in Cost Explorer.",
      "D. Create cost allocation tags."
    ],
    "answer": "D",
    "raw_answer": "D. Create cost allocation tags Explanation: Cost allocation tags allow users to categorize and track AWS costs forspecific resources. By creating tags for each application, the company can track and monitor costs associated with each one."
  },
  {
    "id": 159,
    "question": "Which design principle is achieved by following the reliability pillarof the AWS Well-Architected Framework?",
    "options": [
      "A. Verticalscaling",
      "B. Manual failure recovery",
      "C. Testing recovery procedures",
      "D. Changing infrastructure manually"
    ],
    "answer": "C",
    "raw_answer": "C. Testing recovery procedures Explanation: The reliabilitypillarofthe AWS Well-Architected Framework emphasizes the importance oftesting recovery procedures to ensure that systems can recover from failures quickly and effectively."
  },
  {
    "id": 160,
    "question": "A user needs to quickly deploy a non-relational database on AWS. The user does not want to manage the underlying hardware or the database software. Which AWS service can be used to accomplish this?",
    "options": [
      "A. Amazon RDS",
      "B. Amazon DynamoDB",
      "C. Amazon Aurora",
      "D. Amazon Redshift"
    ],
    "answer": "B",
    "raw_answer": "B. Amazon DynamoDB Explanation: Amazon DynamoDB is a fullymanaged NoSQL database service that does not require users to manage the underlying hardware or database software. Itprovides fastand predictable performance at any scale."
  },
  {
    "id": 161,
    "question": "() Which task is an AWS responsibility when a workload is running inAmazon RDS?",
    "options": [
      "A. Creating the database table",
      "B. Updating the database schema",
      "C. Installingthe database engine",
      "D. Dropping the database records"
    ],
    "answer": "C",
    "raw_answer": "C. Installing the database engine Explanation: InAmazon RDS, AWS is responsible for the underlying infrastructure, including the installation and management ofthe database engine. The user isresponsible forcreating and managing database tables, schemas, and records."
  },
  {
    "id": 162,
    "question": "() A development team wants to publish and manage web services that provide REST APIs. Which AWS service willmeet this requirement?",
    "options": [
      "A. AWS App Mesh",
      "B. Amazon API Gateway",
      "C. Amazon CloudFront",
      "D. AWS Cloud Map"
    ],
    "answer": "B",
    "raw_answer": "B. Amazon API Gateway Explanation: Amazon API Gateway isdesigned specifically tocreate, publish, and manage REST APIs. It provides a fullymanaged service for deploying APIs that can be integrated with other AWS services."
  },
  {
    "id": 163,
    "question": "() A company has a social media platform inwhich users upload and share photos with other users. The company wants to identifyand remove inappropriate photos. The company has no machine learning (ML) scientists and must build thisdetection capability with no ML expertise. Which AWS service should the company use tobuild this capability?",
    "options": [
      "A. Amazon SageMaker",
      "B. Amazon Textract",
      "C. Amazon Rekognition",
      "D. Amazon Comprehend"
    ],
    "answer": "C",
    "raw_answer": "C. Amazon Rekognition Explanation: Amazon Rekognition is a machine learning-based service thatcan detect inappropriate content inimages. Itisfullymanaged and does not require the company to have ML expertise."
  },
  {
    "id": 164,
    "question": "() Which responsibility belongs toAWS when a company hosts itsdatabases on Amazon EC2 instances?",
    "options": [
      "A. Database backups",
      "B. Database software patches",
      "C. Operating system patches",
      "D. Operating system installations"
    ],
    "answer": "C",
    "raw_answer": "C. Operating system patches Explanation: When hosting databases on Amazon EC2 instances, AWS isresponsible for managing the physical infrastructure and providing the underlying virtual machines. The company is responsible for the database software, backups, and patching. AWS handles operating system patches."
  },
  {
    "id": 165,
    "question": "() A company wants to use Amazon S3 to store its legacy data. The data is rarely accessed. However, the data iscriticaland cannot be recreated. The data needs to be available for retrievalwithin seconds. Which S3 storage class meets these requirements MOST cost-effectively?",
    "options": [
      "A. S3 Standard",
      "B. S3 One Zone-Infrequent Access (S3 One Zone-IA)",
      "C. S3 Standard-Infrequent Access (S3 Standard-IA)",
      "D. S3 Glacier"
    ],
    "answer": "C",
    "raw_answer": "C. S3 Standard-Infrequent Access (S3 Standard-IA) Explanation: S3 Standard-IA isdesigned for data that isinfrequently accessed but needs to be retrieved quickly when required. Itismore cost-effective than S3 Standard for infrequently accessed data while stilloffering fast retrievaltimes."
  },
  {
    "id": 166,
    "question": "() An online retailcompany wants to migrate itson-premises workload to AWS. The company needs to automatically handle a seasonal workload increase ina cost-effective manner. Which AWS Cloud features willhelp the company meet this requirement? (Choose two.)",
    "options": [
      "A. Cross-Region workload deployment",
      "B. Pay-as-you-go pricing",
      "C. Built-inAWS CloudTrail audit capabilities",
      "D. Auto Scaling policies",
      "E. Centralized logging"
    ],
    "answer": "B",
    "raw_answer": "B. Pay-as-you-go pricing, D. Auto Scaling policies Explanation: Pay-as-you-go pricing allows the company to only pay for the resources ituses, which helps manage seasonal workload increases cost-effectively. Auto Scaling automatically adjusts the resources based on demand, ensuring the company can scale up or down efficiently."
  },
  {
    "id": 167,
    "question": "() Which AWS service helps developers use loose coupling and reliable messaging between microservices?",
    "options": [
      "A. Elastic Load Balancing",
      "B. Amazon Simple Notification Service (Amazon SNS)",
      "C. Amazon CloudFront",
      "D. Amazon Simple Queue Service (Amazon SQS)"
    ],
    "answer": "D",
    "raw_answer": "D. Amazon Simple Queue Service (Amazon SQS) Explanation: Amazon SQS is a fullymanaged message queue service that enables loose coupling between microservices. Ithelps ensure reliable messaging, allowing services to communicate asynchronously and handle varying loads."
  },
  {
    "id": 168,
    "question": "() A company needs to build an application that uses AWS services. The application willbe delivered to residents in European Countries. The company must abide by regional regulatory requirements. Which AWS service or program should the company use to determine which AWS services meet the regional requirements?",
    "options": [
      "A. AWS Audit Manager",
      "B. AWS Shield",
      "C. AWS Compliance Program",
      "D. AWS Artifact"
    ],
    "answer": "D",
    "raw_answer": "D. AWS Artifact Explanation: AWS Artifactis a service that provides on-demand access to AWS compliance reports and other security and compliance documentation. Ithelps companies understand how AWS services meet regional regulatory requirements."
  },
  {
    "id": 169,
    "question": "() A company needs to implement identity management for a fleetof mobile apps that are running inthe AWS Cloud. Which AWS service will meet this requirement?",
    "options": [
      "A. Amazon Cognito",
      "B. AWS Security Hub",
      "C. AWS Shield",
      "D. AWS WAF"
    ],
    "answer": "A",
    "raw_answer": "A. Amazon Cognito Explanation: Amazon Cognito provides user identity and access management for mobile and web applications. Itsupports features such as user sign-up, sign-in, and access control."
  },
  {
    "id": 170,
    "question": "() A company needs an Amazon EC2 instance for a rightsized database server that must run constantly for1 year. Which EC2 instance purchasing option willmeet these requirements MOST cost-effectively?",
    "options": [
      "A. Standard Reserved Instance",
      "B. Convertible Reserved Instance",
      "C. On-Demand Instance",
      "D. Spot Instance"
    ],
    "answer": "A",
    "raw_answer": "A. Standard Reserved Instance Explanation: A Standard Reserved Instance offers significant savings over On-Demand Instances when running continuously fora year. Itisthe most cost-effective option for long-term, predictable workloads."
  },
  {
    "id": 171,
    "question": "() A company has multiple applications and is now building a new multi-tier application. The company willhost the new application on Amazon EC2 instances. The company wants the network routing and trafficbetween the various applications to follow the security principle of least privilege. Which AWS service or feature should the company use to enforce this principle?",
    "options": [
      "A. Security groups",
      "B. AWS Shield",
      "C. AWS Global Accelerator",
      "D. AWS Direct Connect gateway"
    ],
    "answer": "A",
    "raw_answer": "A. Security groups Explanation: Security groups act as virtual firewalls forAmazon EC2 instances. They allow you to control incoming and outgoing trafficbased on specific rules, ensuring that only authorized trafficcan reach the application, thus enforcing the principle of least privilege."
  },
  {
    "id": 172,
    "question": "() A company's web application requires AWS credentials and authorizations to use an AWS service. Which IAM entity should the company use as best practice?",
    "options": [
      "A. IAM role",
      "B. IAM user",
      "C. IAM group",
      "D. IAM multi-factor authentication (MFA)"
    ],
    "answer": "A",
    "raw_answer": "A. IAM role Explanation: IAM roles are best practice for granting permissions to applications or services that need to access AWS resources. Unlike IAM users, roles are not associated with specific individuals but can be assumed by any trusted entity, such as EC2 instances or AWS Lambda functions."
  },
  {
    "id": 173,
    "question": "() A company iscreating a document that defines the operating system patch routine for allthe company's systems. Which AWS resources should the company include inthis document? (Choose two.)",
    "options": [
      "A. Amazon EC2 instances",
      "B. AWS Lambda functions",
      "C. AWS Fargate tasks",
      "D. Amazon RDS instances",
      "E. Amazon Elastic Container Service (Amazon ECS) instances"
    ],
    "answer": "A",
    "raw_answer": "A. Amazon EC2 instances, D. Amazon RDS instances Explanation: Amazon EC2 instances and Amazon RDS instances require regular operating system and database software patching. AWS Lambda functions and AWS Fargate tasks are serverless, and Amazon ECS instances use containerized applications that may not require the same patching routine as EC2 or RDS."
  },
  {
    "id": 174,
    "question": "() Which AWS service or feature gives a company the abilityto control incoming trafficand outgoing trafficforAmazon EC2 instances?",
    "options": [
      "A. Security groups",
      "B. Amazon Route 53",
      "C. AWS Direct Connect",
      "D. Amazon VPC"
    ],
    "answer": "A",
    "raw_answer": "A. Security groups Explanation: Security groups are used to control the inbound and outbound trafficto Amazon EC2 instances. They act as firewalls,ensuring only authorized trafficcan reach the instances."
  },
  {
    "id": 175,
    "question": "() A company isstarting to build itsinfrastructure in the AWS Cloud. The company wants access totechnical support during business hours. The company also wants general architectural guidance as teams build and testnew applications. Which AWS Support plan willmeet these requirements at the LOWEST cost?",
    "options": [
      "A. AWS Basic Support",
      "B. AWS Developer Support",
      "C. AWS Business Support",
      "D. AWS Enterprise Support"
    ],
    "answer": "B",
    "raw_answer": "B. AWS Developer Support Explanation: The AWS Developer Support plan provides access to technical support during business hours and offers architectural guidance. Itisthe most cost-effective option for companies building and testing new applications inthe AWS Cloud."
  },
  {
    "id": 176,
    "question": "() A company ismigrating itspublic website to AWS. The company wants to host the domain name for the website on AWS. Which AWS service should the company use to meet this requirement?",
    "options": [
      "A. AWS Lambda",
      "B. Amazon Route 53",
      "C. Amazon CloudFront",
      "D. AWS Direct Connect"
    ],
    "answer": "B",
    "raw_answer": "B. Amazon Route 53 Explanation: Amazon Route 53 is a scalable Domain Name System (DNS) web service that is used to manage domain names. Itcan be used to host the domain name for the company's public website."
  },
  {
    "id": 177,
    "question": "() A company needs to evaluate itsAWS environment and provide best practice recommendations infive categories: cost, performance, service limits,fault tolerance, and security. Which AWS service can the company use tomeet these requirements?",
    "options": [
      "A. AWS Shield",
      "B. AWS WAF",
      "C. AWS Trusted Advisor",
      "D. AWS Service Catalog"
    ],
    "answer": "C",
    "raw_answer": "C. AWS Trusted Advisor Explanation: AWS Trusted Advisor provides real-time best practice recommendations inseveral categories, including cost optimization, performance, faulttolerance, and security. Ithelps evaluate AWS environments and improve their efficiency."
  },
  {
    "id": 178,
    "question": "() Which AWS service provides the capability toview end-to-end performance metrics and troubleshoot distributed applications?",
    "options": [
      "A. AWS Cloud9",
      "B. AWS CodeStar",
      "C. AWS Cloud Map",
      "D. AWS X-Ray"
    ],
    "answer": "D",
    "raw_answer": "D. AWS X-Ray Explanation: AWS X-Ray helps developers analyze and debug distributed applications, providing end-to-end performance metrics and insights into application performance. It helps in identifying performance bottlenecks and troubleshooting issues."
  },
  {
    "id": 179,
    "question": "() Which cloud computing benefit does AWS demonstrate with itsabilityto offer lower variable costs as a result of high purchase volumes?",
    "options": [
      "A. Pay-as-you-go pricing",
      "B. High availability",
      "C. Global reach",
      "D. Economies of scale"
    ],
    "answer": "D",
    "raw_answer": "D. Economies of scale Explanation: Economies ofscale refer to the cost advantages that AWS achieves due to itslarge-scale infrastructure. As AWS purchases resources inbulk, itcan offer lower costs to customers, resulting inlower variable costs."
  },
  {
    "id": 180,
    "question": "() Which AWS service provides threat detection by monitoring for malicious activities and unauthorized actions to protect AWS accounts, workloads, and data that isstored in Amazon S3?",
    "options": [
      "A. AWS Shield",
      "B. AWS Firewall Manager",
      "C. Amazon GuardDuty",
      "D. Amazon Inspector"
    ],
    "answer": "C",
    "raw_answer": "C. Amazon GuardDuty Explanation: Amazon GuardDuty is a threat detection service that continuously monitors formalicious activity and unauthorized behavior in AWS accounts, workloads, and data. Ithelps protect AWS resources by identifying potential threats in real-time."
  },
  {
    "id": 181,
    "question": "() Which AWS service can a company use to store and manage Docker images?",
    "options": [
      "A. Amazon DynamoDB",
      "B. Amazon Kinesis Data Streams",
      "C. Amazon Elastic Container Registry (Amazon ECR)",
      "D. Amazon Elastic File System (Amazon EFS)"
    ],
    "answer": "C",
    "raw_answer": "C. Amazon Elastic Container Registry (Amazon ECR) Explanation: Amazon Elastic Container Registry (Amazon ECR) isa fully managed Docker container registry thatallows you to store, manage, and deploy Docker container images. Itintegrates with Amazon ECS, EKS, and other AWS services for easy deployment."
  },
  {
    "id": 182,
    "question": "() A company needs an automated security assessment report that willidentify unintended network access toAmazon EC2 instances. The report also must identifyoperating system vulnerabilitieson those instances. Which AWS service or feature should the company use to meet thisrequirement?",
    "options": [
      "A. AWS Trusted Advisor",
      "B. Security groups",
      "C. Amazon Macie",
      "D. Amazon Inspector"
    ],
    "answer": "D",
    "raw_answer": "D. Amazon Inspector Explanation: Amazon Inspector isan automated security assessment service that helps identify vulnerabilities and unintended network access on Amazon EC2 instances. Itevaluates instances for security best practices, including operating system vulnerabilities."
  },
  {
    "id": 183,
    "question": "() A global company is building a simple time-tracking mobile app. The app needs to operate globally and must store collected data ina database. Data must be accessible from the AWS Region that is closest to the user. What should the company do to meet these data storage requirements with the LEAST amount ofoperational overhead?",
    "options": [
      "A. Use Amazon EC2 in multiple Regions tohost separate databases",
      "B. Use Amazon RDS cross-Region replication",
      "C. Use Amazon DynamoDB global tables",
      "D. Use AWS Database Migration Service (AWS DMS)"
    ],
    "answer": "C",
    "raw_answer": "C. Use Amazon DynamoDB global tables Explanation: Amazon DynamoDB global tables provide a fullymanaged, multi-region, and multi-master database solution that replicates data across multiple AWS Regions. This allows for low-latency access to data from the closest region to the user with minimal operational overhead."
  },
  {
    "id": 184,
    "question": "() Which of the following are economic advantages ofthe AWS Cloud? (Choose two.)",
    "options": [
      "A. Increased workforce productivity",
      "B. Decreased need to encrypt user data",
      "C. Manual compliance audits",
      "D. Simplified total cost of ownership (TCO) accounting",
      "E. Faster product launches"
    ],
    "answer": "A",
    "raw_answer": "A. Increased workforce productivity, D. Simplified total cost of ownership (TCO) accounting Explanation: The AWS Cloud offers increased workforce productivity by enabling automation, scalability,and flexibility.Italsosimplifies TCO accounting by offering pay-as-you-go pricing and reducing the need for upfront investments in hardware."
  },
  {
    "id": 185,
    "question": "() Which controls does the customer fully inheritfrom AWS in the AWS shared responsibility model?",
    "options": [
      "A. Patch management controls",
      "B. Awareness and training controls",
      "C. Physical and environmental controls",
      "D. Configuration management controls"
    ],
    "answer": "C",
    "raw_answer": "C. Physical and environmental controls Explanation: Inthe AWS shared responsibility model, AWS isresponsible for the physical and environmental controls of the data centers, such as hardware security, physical access, and environmental monitoring. Customers are responsible forother aspects likepatch management and configuration management."
  },
  {
    "id": 186,
    "question": "() Which task isa customer's responsibility, according to the AWS shared responsibility model?",
    "options": [
      "A. Management ofthe guest operating systems",
      "B. Maintenance of the configuration of infrastructure devices",
      "C. Management of the host operating systems and virtualization",
      "D. Maintenance of the software that powers Availability Zones"
    ],
    "answer": "A",
    "raw_answer": "A. Management of the guest operating systems Explanation: Inthe AWS shared responsibility model, customers are responsible for managing the guest operating systems (such as patching and security) for theirEC2 instances, while AWS manages the underlying infrastructure and virtualization."
  },
  {
    "id": 187,
    "question": "() A company needs to deliver new website features quickly in an iterative manner tominimize the time to market. Which AWS Cloud concept does thisrequirement represent?",
    "options": [
      "A. Reliability",
      "B. Elasticity",
      "C. Agility",
      "D. High availability"
    ],
    "answer": "C",
    "raw_answer": "C. Agility Explanation: Agilityin the AWS Cloud refers to the abilityto rapidly develop, test,and deploy applications with minimal friction.This allows companies to quickly deliver new features and respond to market changes, which is key to minimizing time to market."
  },
  {
    "id": 188,
    "question": "() A company wants to increase itsability to recover its infrastructure in the case of a natural disaster. Which pillarof the AWS Well-Architected Framework does this abilityrepresent?",
    "options": [
      "A. Cost optimization",
      "B. Performance efficiency",
      "C. Reliability",
      "D. Security"
    ],
    "answer": "C",
    "raw_answer": "C. Reliability Explanation: Reliability inthe AWS Well-Architected Framework focuses on the abilityto recover from failures and meet business continuity requirements. Increasing the abilityto recover infrastructure during a natural disaster aligns with the reliabilitypillar."
  },
  {
    "id": 189,
    "question": "() Which AWS service tracks API calls and user activity?",
    "options": [
      "A. AWS Organizations",
      "B. AWS Config",
      "C. Amazon CloudWatch",
      "D. AWS CloudTrail"
    ],
    "answer": "D",
    "raw_answer": "D. AWS CloudTrail Explanation: AWS CloudTrail is a service that enables governance, compliance, and operational and risk auditing by logging API calls and user activityacross AWS services. Itprovides detailed records ofactions taken on your AWS resources."
  },
  {
    "id": 190,
    "question": "() Which AWS service, feature, or tooluses machine learning to continuously monitor cost and usage for unusual cloud spending?",
    "options": [
      "A. Amazon Lookout for Metrics",
      "B. AWS Budgets",
      "C. Amazon CloudWatch",
      "D. AWS Cost Anomaly Detection"
    ],
    "answer": "D",
    "raw_answer": "D. AWS Cost Anomaly Detection Explanation: AWS Cost Anomaly Detection uses machine learning to monitor your AWS usage and cost data, identifyingunusual spending patterns and alerting you to potential anomalies. This helps manage and control cloud costs effectively."
  },
  {
    "id": 191,
    "question": "() A company deployed an application on an Amazon EC2 instance. The application ran as expected for 6 months, but inthe past week, users have reported latency issues. A system administrator found thatthe CPU utilizationwas at 100% during business hours. The company wants a scalable solution to meet demand. Which AWS service or feature should the company use to handle the load foritsapplication during periods of high demand?",
    "options": [
      "A. Auto Scaling groups",
      "B. AWS Global Accelerator",
      "C. Amazon Route 53",
      "D. An Elastic IP address"
    ],
    "answer": "A",
    "raw_answer": "A. Auto Scaling groups Explanation: Auto Scaling groups allow you toautomatically scale your EC2 instances in and out based on demand. This ensures that your application can handle periods ofhigh demand by adding more instances when needed and reducing them when the demand decreases."
  },
  {
    "id": 192,
    "question": "() A company wants to migrate toAWS and use the same security software ituses on premises. The security software vendor offers itssecurity software as a service on AWS. Where can the company purchase the security solution?",
    "options": [
      "A. AWS Partner Solutions Finder",
      "B. AWS Support Center",
      "C. AWS Management Console",
      "D. AWS Marketplace"
    ],
    "answer": "D",
    "raw_answer": "D. AWS Marketplace Explanation: AWS Marketplace is an online store where you can find,test, and buy software solutions that run on AWS, including security software offered as a service by third-party vendors."
  },
  {
    "id": 193,
    "question": "() A company isgenerating large sets of criticaldata initson-premises data center. The company needs to securely transfer the data to AWS for processing. These transfers must occur daily over a dedicated connection. Which AWS service should the company use to meet these requirements?",
    "options": [
      "A. AWS Backup",
      "B. AWS DataSync",
      "C. AWS Direct Connect",
      "D. AWS Snowball"
    ],
    "answer": "C",
    "raw_answer": "C. AWS Direct Connect Explanation: AWS Direct Connect provides a dedicated, high-bandwidth connection between your on-premises data center and AWS, which is ideal forsecurely transferring large sets of critical data on a regular basis."
  },
  {
    "id": 194,
    "question": "() A company wants to run production workloads on AWS. The company wants access to technical support from engineers 24 hours a day, 7 days a week. The company also wants access to the AWS Health API and contextual architectural guidance for business use cases. The company has a strong IT support team and does not need concierge support. Which AWS Support plan will meet these requirements at the LOWEST cost?",
    "options": [
      "A. AWS Basic Support",
      "B. AWS Developer Support",
      "C. AWS Business Support",
      "D. AWS Enterprise Support"
    ],
    "answer": "C",
    "raw_answer": "C. AWS Business Support Explanation: AWS Business Support provides 24/7 access to AWS engineers, AWS Health API access, and architectural guidance at a lower cost than the Enterprise Support plan. Itis suitable for businesses that need technical support without concierge-level services."
  },
  {
    "id": 195,
    "question": "() Which of the following is a managed AWS service that is used specifically for extract, transform, and load (ETL) data?",
    "options": [
      "A. Amazon Athena",
      "B. AWS Glue",
      "C. Amazon S3",
      "D. AWS Snowball Edge"
    ],
    "answer": "B",
    "raw_answer": "B. AWS Glue Explanation: AWS Glue is a fullymanaged ETL service that allows you to easily prepare and transform data foranalytics. It automates the process of discovering, cataloging, and transforming data."
  },
  {
    "id": 196,
    "question": "() Which of the following actions are controlled with AWS Identity and Access Management (IAM)? (Choose two.)",
    "options": [
      "A. Control access to AWS service APIs and to other specific resources.",
      "B. Provide intelligentthreat detection and continuous monitoring.",
      "C. Protect the AWS environment using multi-factor authentication (MFA).",
      "D. Grant users access to AWS data centers.",
      "E. Provide firewall protection for applications from common web attacks."
    ],
    "answer": "A",
    "raw_answer": "A. Control access to AWS service APIs and to other specific resources, C. Protect the AWS environment using multi-factor authentication (MFA) Explanation: IAM controls access to AWS services and resources, and italso supports the use ofmulti-factor authentication (MFA) to enhance security."
  },
  {
    "id": 197,
    "question": "() Which of the following are shared controls that apply to both AWS and the customer, according tothe AWS shared responsibility model? (Choose two.)",
    "options": [
      "A. Resource configuration management",
      "B. Network data integrity",
      "C. Employee awareness and training",
      "D. Physical and environmental security",
      "E. Replacement and disposal of disk drives"
    ],
    "answer": "A",
    "raw_answer": "A. Resource configuration management, B. Network data integrity Explanation: Both AWS and the customer share responsibilities for resource configuration management and network data integrity.AWS manages the underlying infrastructure, while the customer manages the configuration of theirresources and network security."
  },
  {
    "id": 198,
    "question": "() What information is found on an AWS Identity and Access Management (IAM) credential report? (Choose two.)",
    "options": [
      "A. The date and time when an IAM user's password was last used to sign in to the AWS Management Console.",
      "B. The type of multi-factor authentication (MFA) device assigned to an IAM user.",
      "C. The User-Agent browser identifierfor each IAM user currently logged in.",
      "D. Whether multi-factor authentication (MFA) has been enabled for an IAM user.",
      "E. The number of incorrect login attempts by each IAM user in the previous 30 days."
    ],
    "answer": "A",
    "raw_answer": "A. The date and time when an IAM user's password was last used to sign in to the AWS Management Console, D. Whether multi-factor authentication (MFA) has been enabled for an IAM user Explanation: The IAM credential report provides information such as the lasttime an IAM user's password was used and whether MFA is enabled forthe user. Itdoes not track browser identifiersor incorrect login attempts."
  },
  {
    "id": 199,
    "question": "() What is the LEAST expensive AWS Support plan that contains a fullset of AWS Trusted Advisor best practice checks?",
    "options": [
      "A. AWS Enterprise Support",
      "B. AWS Business Support",
      "C. AWS Developer Support",
      "D. AWS Basic Support"
    ],
    "answer": "B",
    "raw_answer": "B. AWS Business Support Explanation: AWS Business Support provides access to a fullset of AWS Trusted Advisor best practice checks, which are not available in the lower-tier support plans likeBasic or Developer Support."
  },
  {
    "id": 200,
    "question": "() Which AWS service provides domain registration, DNS routing, and service health checks?",
    "options": [
      "A. AWS Direct Connect",
      "B. Amazon Route 53",
      "C. Amazon CloudFront",
      "D. Amazon API Gateway"
    ],
    "answer": "B",
    "raw_answer": "B. Amazon Route 53 Explanation: Amazon Route 53 is a scalable DNS and domain registration service that also provides health checks for monitoring the status of your resources. Itcan route trafficto healthy endpoints based on DNS queries."
  },
  {
    "id": 201,
    "question": "A bank needs to store recordings of callsmade to itscontact center for6 years. The recordings must be accessible within 48 hours from the time they are requested. Which AWS service willprovide a secure and cost-effective solution forretaining these files?",
    "options": [
      "A. Amazon DynamoDB",
      "B. Amazon S3 Glacier",
      "C. Amazon Connect",
      "D. Amazon ElastiCache"
    ],
    "answer": "B",
    "raw_answer": "B. Amazon S3 Glacier Explanation: Amazon S3 Glacier isa secure, durable, and low-cost storage service for data archiving and long-term backup. Itis designed fordata that isinfrequently accessed but needs tobe retained forextended periods. S3 Glacier allows forretrieval times ranging from minutes tohours, making ita suitable choice for storing recordings thatneed to be accessible within 48 hours."
  },
  {
    "id": 202,
    "question": "Which AWS service should be used tomigrate a company's on-premises MySQL database to Amazon RDS?",
    "options": [
      "A. AWS Direct Connect",
      "B. AWS Server Migration Service (AWS SMS)",
      "C. AWS Database Migration Service (AWS DMS)",
      "D. AWS Schema Conversion Tool (AWS SCT)"
    ],
    "answer": "C",
    "raw_answer": "C. AWS Database Migration Service (AWS DMS) Explanation: AWS Database Migration Service (DMS) is used tomigrate databases toAWS, including migrations from on-premises databases to Amazon RDS. Itsupports continuous data replication with minimal downtime, making itideal formigrating MySQL databases to Amazon RDS."
  },
  {
    "id": 203,
    "question": "Which benefits does a company gain when the company moves from on-premises IT architecture tothe AWS Cloud? (Choose two.)",
    "options": [
      "A. Reduced or eliminated tasks forhardware troubleshooting, capacity planning, and procurement",
      "B. Elimination of the need for trained IT staff",
      "C. Automatic security configuration of allapplications that are migrated to the cloud",
      "D. Elimination of the need fordisaster recovery planning",
      "E. Faster deployment ofnew features and applications"
    ],
    "answer": "A",
    "raw_answer": "A. Reduced or eliminated tasks for hardware troubleshooting, capacity planning, and procurement, E. Faster deployment of new features and applications Explanation: Moving to the AWS Cloud eliminates the need for hardware troubleshooting, capacity planning, and procurement because AWS provides these services as part of its offering. Additionally, AWS enables faster deployment of new features and applications by offering a scalable, flexible infrastructure."
  },
  {
    "id": 204,
    "question": "Which of the following is a benefit of decoupling an AWS Cloud architecture?",
    "options": [
      "A. Reduced latency",
      "B. Abilityto upgrade components independently",
      "C. Decreased costs",
      "D. Fewer components to manage"
    ],
    "answer": "B",
    "raw_answer": "B. Ability to upgrade components independently Explanation: Decoupling in cloud architecture allows differentcomponents of the system to operate independently. This enables each component tobe upgraded or scaled independently without affecting other components, making the system more flexible and easier to manage."
  },
  {
    "id": 205,
    "question": "Which task isthe responsibility of the customer according to the AWS shared responsibility model?",
    "options": [
      "A. Maintain the security of the hardware that runs Amazon EC2 instances.",
      "B. Patch the guest operating system of Amazon EC2 instances.",
      "C. Protect the security of the AWS global infrastructure.",
      "D. Patch Amazon RDS software."
    ],
    "answer": "B",
    "raw_answer": "B. Patch the guest operating system of Amazon EC2 instances. Explanation: According to the AWS shared responsibility model, AWS is responsible forthe security of the cloud infrastructure (hardware, network, etc.),while customers are responsible for securing the operating system and applications they run on AWS services, such as patching the guest operating system of Amazon EC2 instances."
  },
  {
    "id": 206,
    "question": "Which AWS Organizations feature can be used to track charges across multiple accounts and report the combined cost?",
    "options": [
      "A. Service control policies (SCPs)",
      "B. Cost Explorer",
      "C. Consolidated billing",
      "D. AWS Identity and Access Management (IAM)"
    ],
    "answer": "C",
    "raw_answer": "C. Consolidated billing Explanation: Consolidated billing isa feature of AWS Organizations that allows you to combine billingfor multiple AWS accounts, making iteasier to track and manage costs. Itprovides a single invoice forall accounts inthe organization, with detailed usage and cost reports."
  },
  {
    "id": 207,
    "question": "Which of the following is a cloud benefit that AWS offers to its users?",
    "options": [
      "A. The abilityto configure AWS data center hypervisors",
      "B. The abilityto purchase hardware in advance of increased traffic",
      "C. The abilityto deploy to AWS on a global scale",
      "D. Compliance audits for user IT environments"
    ],
    "answer": "C",
    "raw_answer": "C. The ability to deploy to AWS on a global scale Explanation: One of the primary benefits ofAWS is itsabilityto deploy applications globally across multiple regions, providing users with scalable and highly available infrastructure. This global reach enables businesses to expand their operations without needing to manage physical hardware."
  },
  {
    "id": 208,
    "question": "An ecommerce company has migrated itsIT infrastructure from an on-premises data center to the AWS Cloud. Which cost is the company's direct responsibility?",
    "options": [
      "A. Cost of application software licenses",
      "B. Cost of the hardware infrastructure on AWS",
      "C. Cost of power forthe AWS servers",
      "D. Cost of physical security forthe AWS data center"
    ],
    "answer": "A",
    "raw_answer": "A. Cost of application software licenses Explanation: The company is responsible for the cost of application software licenses they use in the AWS Cloud. AWS handles the infrastructure costs (e.g., hardware, power, and physical security), but customers must pay forsoftware licenses, whether they are using AWS services or running their own applications."
  },
  {
    "id": 209,
    "question": "What are the five pillars ofthe AWS Well-Architected Framework?",
    "options": [
      "A. Encryption, documentation, speed, hybrid design, and cost optimization",
      "B. Containerization, cost margins, globalization, marketplace, and developer operations",
      "C. Network, compute, storage, security, and developer operations",
      "D. Operational excellence, reliability,performance efficiency, security, and cost optimization"
    ],
    "answer": "D",
    "raw_answer": "D. Operational excellence, reliability,performance efficiency, security, and cost optimization Explanation: The AWS Well-Architected Framework isbased on five pillars:operational excellence, reliability, performance efficiency, security, and cost optimization. These pillars provide best practices for building secure, high-performing, resilient, and efficientinfrastructure for applications on AWS."
  },
  {
    "id": 210,
    "question": "A company accepts enrollment applications on handwritten paper forms. The company uses a manual process to enter the form data into its backend systems. The company wants toautomate the process by scanning the forms and capturing the enrollment data from scanned PDF files. Which AWS service should the company use to build this process?",
    "options": [
      "A. Amazon Rekognition",
      "B. Amazon Textract",
      "C. Amazon Transcribe",
      "D. Amazon Comprehend"
    ],
    "answer": "B",
    "raw_answer": "B. Amazon Textract Explanation: Amazon Textract isa fully managed service that automatically extracts text, forms, and tables from scanned documents, including PDFs. Itis ideal for automating the process of capturing data from handwritten or printed forms and converting itinto structured data for backend systems."
  },
  {
    "id": 211,
    "question": "Which AWS service should a company use to organize, characterize, and search large numbers ofimages?",
    "options": [
      "A. Amazon Transcribe",
      "B. Amazon Rekognition",
      "C. Amazon Aurora",
      "D. Amazon QuickSight"
    ],
    "answer": "B",
    "raw_answer": "B. Amazon Rekognition Explanation: Amazon Rekognition is a service that can analyze and search large numbers of images and videos. Itprovides capabilities like image recognition, object detection, facial analysis, and more, making itsuitable for organizing and searching large image datasets."
  },
  {
    "id": 212,
    "question": "An ecommerce company wants to use Amazon EC2 Auto Scaling to add and remove EC2 instances based on CPU utilization. Which AWS service or feature can initiatean Amazon EC2 Auto Scaling action to achieve this goal?",
    "options": [
      "A. Amazon Simple Queue Service (Amazon SQS)",
      "B. Amazon Simple Notification Service (Amazon SNS)",
      "C. AWS Systems Manager",
      "D. Amazon CloudWatch alarm"
    ],
    "answer": "D",
    "raw_answer": "D. Amazon CloudWatch alarm Explanation: Amazon CloudWatch alarms can monitor metrics like CPU utilizationand trigger actions such as scaling EC2 instances up or down using EC2 Auto Scaling. CloudWatch is designed for monitoring AWS resources and applications in real-time."
  },
  {
    "id": 213,
    "question": "A company wants to host a private version control system for itsapplication code inthe AWS Cloud. Which AWS service should the company use to meet this requirement?",
    "options": [
      "A. AWS CodePipeline",
      "B. AWS CodeStar",
      "C. AWS CodeCommit",
      "D. AWS CodeDeploy"
    ],
    "answer": "C",
    "raw_answer": "C. AWS CodeCommit Explanation: AWS CodeCommit is a fullymanaged source control service that can be used to host private Git repositories. Itis specificallydesigned for version control and integrates with other AWS services likeAWS CodePipeline and AWS CodeBuild."
  },
  {
    "id": 214,
    "question": "Which AWS service or toolcan a company set up to send notifications that a custom spending threshold has been reached or exceeded?",
    "options": [
      "A. AWS Budgets",
      "B. AWS Trusted Advisor",
      "C. AWS CloudTrail",
      "D. AWS Support"
    ],
    "answer": "A",
    "raw_answer": "A. AWS Budgets Explanation: AWS Budgets allows users to set custom spending thresholds and receive notificationswhen the budget is exceeded. Ithelps manage costs and usage within AWS."
  },
  {
    "id": 215,
    "question": "Which AWS service isused to host staticwebsites?",
    "options": [
      "A. Amazon S3",
      "B. Amazon Elastic Block Store (Amazon EBS)",
      "C. AWS CloudFormation",
      "D. Amazon Elastic File System (Amazon EFS)"
    ],
    "answer": "A",
    "raw_answer": "A. Amazon S3 Explanation: Amazon S3 iscommonly used to host static websites. Itcan store staticcontent likeHTML, CSS, and JavaScript files,and itsupports static website hosting features such as custom domain names and HTTPS."
  },
  {
    "id": 216,
    "question": "Which AWS service contains built-inengines to protect web applications that run in the cloud from SQL injection attacks and cross-site scripting?",
    "options": [
      "A. AWS WAF",
      "B. AWS Shield Advanced",
      "C. Amazon GuardDuty",
      "D. Amazon Detective"
    ],
    "answer": "A",
    "raw_answer": "A. AWS WAF Explanation: AWS Web Application Firewall (WAF) protects web applications from common web exploits like SQL injection and cross-site scripting (XSS). It allows users to create custom rules to block malicious traffic."
  },
  {
    "id": 217,
    "question": "A company owns per-core software licenses. Which Amazon EC2 instance purchasing option must the company use for this license type?",
    "options": [
      "A. Reserved Instances",
      "B. Dedicated Hosts",
      "C. Spot Instances",
      "D. Dedicated Instances"
    ],
    "answer": "B",
    "raw_answer": "B. Dedicated Hosts Explanation: Dedicated Hosts are physical servers dedicated to a single customer. This option isnecessary for companies that need to bring theirown per-core software licenses because it ensures that the software runs on specific physical hardware."
  },
  {
    "id": 218,
    "question": "A company needs toset up user authentication for a new application. Users must be able to sign in directlywith a user name and password, or through a third-party provider. Which AWS service should the company use to meet these requirements?",
    "options": [
      "A. AWS Single Sign-On",
      "B. AWS Signer",
      "C. Amazon Cognito",
      "D. AWS Directory Service"
    ],
    "answer": "C",
    "raw_answer": "C. Amazon Cognito Explanation: Amazon Cognito provides user authentication, including sign-up, sign-in, and access control. Itsupports integration with third-party identityproviders (likeGoogle, Facebook, and others) and can also handle username and password-based sign-ins."
  },
  {
    "id": 219,
    "question": "A company's IT team is managing MySQL database server clusters. The IT team has to patch the database and take backup snapshots ofthe data in the clusters. The company wants to move thisworkload to AWS so that these tasks will be completed automatically. What should the company do to meet these requirements?",
    "options": [
      "A. Deploy MySQL database server clusters on Amazon EC2 instances.",
      "B. Use Amazon RDS with a MySQL database.",
      "C. Use an AWS CloudFormation template to deploy MySQL database servers on Amazon EC2 instances.",
      "D. Migrate allthe MySQL database data to Amazon S3."
    ],
    "answer": "B",
    "raw_answer": "B. Use Amazon RDS with a MySQL database. Explanation: Amazon RDS (Relational Database Service) is a fullymanaged service that automates tasks likepatching, backups, and scaling forMySQL databases. This is the best option for automating the management of MySQL databases."
  },
  {
    "id": 220,
    "question": "What is the primary use case for Amazon GuardDuty?",
    "options": [
      "A. Prevention of DDoS attacks",
      "B. Protection against SQL injection attacks",
      "C. Automatic monitoring for threats to AWS workloads",
      "D. Automatic provisioning of AWS resources"
    ],
    "answer": "C",
    "raw_answer": "C. Automatic monitoring for threats to AWS workloads Explanation: Amazon GuardDuty isa threat detection service that continuously monitors for malicious activityand unauthorized behavior in AWS environments. Ithelps identify potential security threats like unusual API calls, compromised instances, and more."
  },
  {
    "id": 221,
    "question": "Which statements explain the business value of migration to the AWS Cloud? (Choose two.)",
    "options": [
      "A. The migration of enterprise applications to the AWS Cloud makes these applications automatically available on mobile devices.",
      "B. AWS availabilityand security provide the abilityto improve service level agreements (SLAs) while reducing risk and unplanned downtime.",
      "C. Companies that migrate to the AWS Cloud eliminate the need to plan for high availability and disaster recovery.",
      "D. Companies that migrate to the AWS Cloud reduce IT costs related to infrastructure, freeing budget for reinvestment in other areas.",
      "E. Applications are modernized because migration to the AWS Cloud requires companies to rearchitect and rewrite all enterprise applications."
    ],
    "answer": "B",
    "raw_answer": "B. AWS availability and security provide the abilityto improve service level agreements (SLAs) while reducing risk and unplanned downtime. D. Companies that migrate to the AWS Cloud reduce IT costs related to infrastructure, freeing budget for reinvestment in other areas. Explanation: Migrating to AWS can improve SLAs through better availability and security, reducing downtime and risk.Additionally, companies often save on infrastructure costs by using AWS, which can free up budget for other investments. Option C is incorrect because high availabilityand disaster recovery stillneed to be planned. Option E isincorrect as not all applications need to be rearchitected."
  },
  {
    "id": 222,
    "question": "A company needs to identify personally identifiable information (PII),such as credit card numbers, from data that isstored in Amazon S3. Which AWS service should the company use to meet this requirement?",
    "options": [
      "A. Amazon Inspector",
      "B. AWS Shield",
      "C. Amazon GuardDuty",
      "D. Amazon Macie"
    ],
    "answer": "D",
    "raw_answer": "D. Amazon Macie Explanation: Amazon Macie isa service that uses machine learning to automatically discover, classify,and protect sensitive data, such as PII,in Amazon S3. Itis specifically designed to help identifysensitive data and ensure compliance."
  },
  {
    "id": 223,
    "question": "Which AWS services or tools are designed to protect a workload from SQL injections, cross-site scripting, and DDoS attacks? (Choose two.)",
    "options": [
      "A. VPC endpoint",
      "B. Virtual private gateway",
      "C. AWS Shield Standard",
      "D. AWS Config",
      "E. AWS WAF"
    ],
    "answer": "C",
    "raw_answer": "C. AWS Shield Standard E. AWS WAF Explanation: AWS Shield Standard provides protection against DDoS attacks, while AWS WAF (Web Application Firewall) helps protect against SQL injection and cross-site scripting (XSS) attacks. VPC endpoints and virtual private gateways are used for network connectivity and security but not specifically for these protections."
  },
  {
    "id": 224,
    "question": "A company wants to forecast future costs and usage ofAWS resources based on past consumption. Which AWS service or tool willprovide this forecast?",
    "options": [
      "A. AWS Cost and Usage Report",
      "B. Amazon Forecast",
      "C. AWS Pricing Calculator",
      "D. Cost Explorer"
    ],
    "answer": "D",
    "raw_answer": "D. Cost Explorer Explanation: AWS Cost Explorer provides visualizations and forecasting tools to help companies predict future AWS costs and usage based on historical data. Itis specifically designed for cost analysis and forecasting."
  },
  {
    "id": 225,
    "question": "Which AWS services use cloud-native storage thatprovides replication across multiple AvailabilityZones by default? (Choose two.)",
    "options": [
      "A. Amazon ElastiCache",
      "B. Amazon RDS for Oracle",
      "C. Amazon Neptune",
      "D. Amazon DocumentDB (with MongoDB compatibility)",
      "E. Amazon Redshift"
    ],
    "answer": "D",
    "raw_answer": "D. Amazon DocumentDB (with MongoDB compatibility) E. Amazon Redshift Explanation: Both Amazon DocumentDB and Amazon Redshift provide cloud-native storage thatautomatically replicates data across multiple Availability Zones for high availabilityand durability.ElastiCache, Neptune, and RDS for Oracle do not offerthis by default."
  },
  {
    "id": 226,
    "question": "Which AWS services are serverless? (Choose two.)",
    "options": [
      "A. AWS Fargate",
      "B. Amazon Managed Streaming forApache Kafka",
      "C. Amazon EMR",
      "D. Amazon S3",
      "E. Amazon EC2"
    ],
    "answer": "A",
    "raw_answer": "A. AWS Fargate D. Amazon S3 Explanation: AWS Fargate is a serverless compute engine forcontainers, and Amazon S3 isa serverless storage service. Both allow you to manage resources without needing to provision or manage servers. Amazon EMR and EC2 require server management, and Amazon Managed Streaming forApache Kafka isnot fully serverless."
  },
  {
    "id": 227,
    "question": "Which task isthe responsibility ofAWS, according to the AWS shared responsibility model?",
    "options": [
      "A. Apply guest operating system patches to Amazon EC2 instances.",
      "B. Provide monitoring of human resources information management (HRIM) systems.",
      "C. Perform automated backups of Amazon RDS instances.",
      "D. Optimize the costs of running AWS services."
    ],
    "answer": "C",
    "raw_answer": "C. Perform automated backups of Amazon RDS instances. Explanation: According to the AWS shared responsibility model, AWS isresponsible for the infrastructure, including automated backups for managed services likeAmazon RDS. The customer isresponsible fortasks likeapplying patches to EC2 instances and managing costs."
  },
  {
    "id": 228,
    "question": "A company needs to deploy a PostgreSQL database into Amazon RDS. The database must be highly available and fault tolerant. Which AWS solution should the company use to meet these requirements?",
    "options": [
      "A. Amazon RDS with a single Availability Zone",
      "B. Amazon RDS snapshots",
      "C. Amazon RDS with multiple Availability Zones",
      "D. AWS Database Migration Service (AWS DMS)"
    ],
    "answer": "C",
    "raw_answer": "C. Amazon RDS with multiple Availability Zones Explanation: Amazon RDS with multiple AvailabilityZones provides high availabilityand fault tolerance by replicating data across multiple Availability Zones. This ensures that the database remains available even in the event of a failurein one AvailabilityZone."
  },
  {
    "id": 229,
    "question": "A company wants to add facialidentification to itsuser verification process on an application. Which AWS service should the company use to meet this requirement?",
    "options": [
      "A. Amazon Polly",
      "B. Amazon Transcribe",
      "C. Amazon Lex",
      "D. Amazon Rekognition"
    ],
    "answer": "D",
    "raw_answer": "D. Amazon Rekognition Explanation: Amazon Rekognition provides facial recognition capabilities, making itthe best choice foradding facialidentification to an application. Amazon Polly is fortext-to-speech, Amazon Transcribe is forspeech-to-text, and Amazon Lex isfor building conversational interfaces."
  },
  {
    "id": 230,
    "question": "A company wants the ability toquickly upload its applications tothe AWS Cloud without needing toprovision underlying resources. Which AWS service will meet these requirements?",
    "options": [
      "A. AWS CloudFormation",
      "B. AWS Elastic Beanstalk",
      "C. AWS CodeDeploy",
      "D. AWS CodeCommit"
    ],
    "answer": "B",
    "raw_answer": "B. AWS Elastic Beanstalk Explanation: AWS Elastic Beanstalk isa Platform as a Service (PaaS) that allows you to deploy applications quickly without worrying about the underlying infrastructure. Ithandles resource provisioning, load balancing, and scaling. AWS CloudFormation is forinfrastructure as code, AWS CodeDeploy is for deployment automation, and AWS CodeCommit is for source control."
  },
  {
    "id": 231,
    "question": "Which AWS service monitors CPU utilizationon Amazon EC2 instances?",
    "options": [
      "A. AWS CloudTrail",
      "B. Amazon Inspector",
      "C. AWS Config",
      "D. Amazon CloudWatch"
    ],
    "answer": "D",
    "raw_answer": "D. Amazon CloudWatch Explanation: Amazon CloudWatch monitors various metrics, including CPU utilization,on Amazon EC2 instances. Itprovides detailed metrics to track and monitor the performance of AWS resources."
  },
  {
    "id": 232,
    "question": "A company needs to label itsAWS resources so that the company can categorize and track costs. What should the company do tomeet thisrequirement?",
    "options": [
      "A. Use cost allocation tags.",
      "B. Use AWS Identity and Access Management (IAM).",
      "C. Use AWS Organizations.",
      "D. Use the AWS Cost Management coverage report."
    ],
    "answer": "A",
    "raw_answer": "A. Use cost allocation tags. Explanation: Cost allocation tags allow a company to categorize and track costs for AWS resources. This helps to break down costs forspecific resources and projects, making iteasier totrack and manage expenses."
  },
  {
    "id": 233,
    "question": "A company wants itsemployees to have access to virtualdesktop infrastructure to securely access company-provided desktops through the employees' personal devices. Which AWS service should the company use to meet these requirements?",
    "options": [
      "A. Amazon AppStream 2.0",
      "B. AWS AppSync",
      "C. Amazon FSx forWindows File Server",
      "D. Amazon WorkSpaces"
    ],
    "answer": "D",
    "raw_answer": "D. Amazon WorkSpaces Explanation: Amazon WorkSpaces provides a managed, secure Desktop-as-a-Service (DaaS) solution,allowing employees to access company desktops from their personal devices. Itis specificallydesigned for virtualdesktop infrastructure."
  },
  {
    "id": 234,
    "question": "Which task can a company complete by using AWS Organizations?",
    "options": [
      "A. Track application deployment statuses globally.",
      "B. Remove unused and underutilized AWS resources across allaccounts.",
      "C. Activate DDoS protection across allaccounts.",
      "D. Share pre-purchased Amazon EC2 resources across accounts."
    ],
    "answer": "D",
    "raw_answer": "D. Share pre-purchased Amazon EC2 resources across accounts. Explanation: AWS Organizations allows you tomanage and consolidate billingfor multiple AWS accounts. Italso enables sharing pre-purchased resources, likeReserved EC2 instances, across accounts within the organization."
  },
  {
    "id": 235,
    "question": "A user has been granted permission to change their own IAM user password. Which AWS services can the user use to change the password? (Choose two.) A.AWS Command Line Interface (AWS CLI) B.AWS Key Management Service (AWS KMS)",
    "options": [
      "C. AWS Management Console",
      "D. AWS Resource Access Manager (AWS RAM) E.AWS Secrets Manager"
    ],
    "answer": "A",
    "raw_answer": "A. AWS Command Line Interface (AWS CLI), C. AWS Management Console Explanation: A user can change theirIAM password through the AWS Management Console or the AWS CLI. AWS KMS, AWS RAM, and AWS Secrets Manager are not used forchanging IAM passwords."
  },
  {
    "id": 236,
    "question": "A company needs torun an application on Amazon EC2 instances. The instances cannot be interrupted atany time. The company needs an instance purchasing option thatrequires no long-term commitment or upfront payment. Which instance purchasing option will meet these requirements MOST cost-effectively? A.On-Demand Instances B.Spot Instances",
    "options": [
      "C. Dedicated Hosts",
      "D. Reserved Instances"
    ],
    "answer": "A",
    "raw_answer": "A. On-Demand Instances Explanation: On-Demand Instances provide the flexibilityofpaying forcompute capacity by the hour or second, with no long-term commitment or upfront payment, while ensuring the instances are not interrupted."
  },
  {
    "id": 237,
    "question": "A company uses Amazon EC2 instances to run its web application. The company uses On-Demand Instances and Spot Instances. The company needs to visualize itsmonthly spending on both types of instances. Which AWS service or feature will meet thisrequirement?",
    "options": [
      "A. AWS Cost Explorer",
      "B. AWS Budgets",
      "C. Amazon CloudWatch",
      "D. AWS Cost Categories"
    ],
    "answer": "A",
    "raw_answer": "A. AWS Cost Explorer Explanation: AWS Cost Explorer allows users tovisualize and analyze theirspending on AWS services, including On-Demand and Spot Instances. Ithelps in understanding cost trends and resource usage."
  },
  {
    "id": 238,
    "question": "Which task can a user complete by using AWS Identity and Access Management (IAM)?",
    "options": [
      "A. Validate JSON syntax from an application configuration file.",
      "B. Analyze logs from an Amazon API Gateway call.",
      "C. Filtertraffictoor from an Amazon EC2 instance.",
      "D. Grant permissions toapplications that run on Amazon EC2 instances."
    ],
    "answer": "D",
    "raw_answer": "D. Grant permissions to applications that run on Amazon EC2 instances. Explanation: IAM is used to manage access to AWS resources by granting permissions to users, groups, and roles. Itallows users to control who can access applications running on EC2 instances."
  },
  {
    "id": 239,
    "question": "A company needs to generate reports for business intelligence and operational analytics on petabytes of semi-structured and structured data. These reports are produced from standard SQL queries on data that isin an Amazon S3 data lake. Which AWS service provides the abilityto analyze this data?",
    "options": [
      "A. Amazon RDS",
      "B. Amazon Neptune",
      "C. Amazon DynamoDB",
      "D. Amazon Redshift"
    ],
    "answer": "D",
    "raw_answer": "D. Amazon Redshift Explanation: Amazon Redshift is a data warehouse service that allows companies to run complex queries on large datasets, including semi-structured and structured data stored in Amazon S3. It isoptimized for business intelligence and operational analytics."
  },
  {
    "id": 240,
    "question": "A system automatically recovers from failure when a company launches itsworkload on the AWS Cloud services platform. Which pillar of the AWS Well-Architected Framework does this situation demonstrate?",
    "options": [
      "A. Cost optimization",
      "B. Operational excellence",
      "C. Performance efficiency",
      "D. Reliability"
    ],
    "answer": "D",
    "raw_answer": "D. Reliability Explanation: Reliability refers to the ability of a system to recover from failures and continue to function as expected. The AWS Well-Architected Framework includes this pillarto ensure systems can withstand and recover from disruptions. Q241: According to AWS, what is the benefit of Elasticity? A. Minimize storage requirements by reducing logging and auditing activities B. Create systems that scale to the required capacity based on changes in demand C. Enable AWS to automatically select the most cost-effective services D. Accelerate the design process because recovery from failureis automated, reducing the need for testing Answer \u2013 B Explanation: Elasticityallows an application to scale up and scale down based on demand. For example, AWS Autoscaling adjusts the number of instances running depending on the load. A, C, and D are incorrect because Elasticity does not directly affect storage, cost selection, or design agility. Q242: Which tool can you use to forecast your AWS spending? A. AWS Organizations B. Amazon Dev Pay C. AWS Trusted Advisor D. AWS Cost Explorer Answer \u2013 D Explanation: AWS Cost Explorer is a free tool that allows you to view your costs and forecast future spending based on usage patterns. Ithelps you track costs, identify trends, and get recommendations for Reserved Instances. A, B, and C are incorrect because they do not focus on cost forecasting. Q243: A business analyst would like tomove away from creating complex database queries and staticspreadsheets when generating regular reports forhigh-level management. They would liketo publish insightful,graphically appealing reports with interactive dashboards. Which service can they use to accomplish this? A. Amazon QuickSight B. Business intelligence on Amazon Redshift C. Amazon CloudWatch dashboards D. Amazon Athena integrated with Amazon Glue Correct Answer \u2013 A Explanation: Amazon QuickSight isa fully-managed service designed for business intelligence, offering graphical and interactive dashboards. Itincludes machine learning to help discover trends and patterns indata. Option B is incorrect because Amazon Redshift is a data warehouse, not a reporting tool. Option C is incorrect because Amazon CloudWatch dashboards are used formonitoring AWS resources, not business reporting. Option D is incorrect because Amazon Athena is forquerying data inS3, not for publishing reports. Q244: What is the AWS feature that enables fast, easy, and secure transfers of files over long distances between your client and your Amazon S3 bucket? A. File Transfer B. HTTP Transfer C. Amazon S3 Transfer Acceleration D. S3 Acceleration Answer \u2013 C Explanation: Amazon S3 Transfer Acceleration speeds up filetransfers over long distances by using Amazon CloudFront's globally distributed edge locations. Options A, B, and D are incorrect because they do not specifically relate to S3's acceleration feature. Q245: What best describes the \u201cPrinciple of Least Privilege\u201d? Choose the correct answer from the options given below. A. Allusers should have the same baseline permissions granted to them touse basic AWS services. B. Users should be granted permission toaccess only resources they need todo their assigned job. C. Users should submit allaccess requests in written form so that there is a paper trailof who needs access to different AWS resources. D. Users should always have a littlemore permission than they need. Answer \u2013 B Explanation: The Principle of Least Privilege means granting users only the permissions they need to perform their job functions. This reduces the risk of accidental or malicious misuse of permissions. A, C, and D are incorrect because they do not align with the principle of least privilege. Q246: What AWS service would you use toconnect an on-premises data center to AWS over a dedicated network connection? A. Amazon Direct Connect B. AWS VPN C. AWS Snowball D. Amazon VPC Peering Answer \u2013 A Q247: Which AWS service isdesigned to help you monitor and troubleshoot your AWS cloud applications in real time? A. Amazon CloudWatch B. AWS CloudTrail C. Amazon Inspector D. AWS X-Ray Answer \u2013 D Q248: You are designing an application that will run in multiple AWS regions. The application must be highly available, fault-tolerant,and scalable. Which of the following is the most cost-effective way to meet these requirements? A. Use Amazon EC2 Auto Scaling in each region to automatically scale your application. B. Use Amazon Route 53 to route trafficto the region with the lowest latency. C. Use AWS Elastic Load Balancing to distribute trafficacross multiple regions. D. Use AWS Lambda to run your application code in each region. Answer \u2013 A Q249: Which of the following is a benefit of using Amazon RDS (Relational Database Service)? A. Itallows you toset up, operate, and scale a relational database inthe cloud with just a few clicks. B. Itoffers unlimited storage and compute capacity. C. Itenables you tostore unstructured data with high durability. D. Itprovides real-time data streaming for high-volume applications. Answer \u2013 A Q250: What is the maximum number of Availability Zones that can be ina single AWS Region? A. 3 B. 5 C. 6 D. 8 Answer \u2013 B Q251: You need to ensure that your application can automatically scale up or down based on demand. Which AWS service would you use to achieve this? A.Amazon EC2 B.AWS Auto Scaling C. AWS Lambda D. Amazon CloudWatch Answer \u2013 B Q252: Which AWS service isdesigned toprovide automatic scaling foryour Amazon EC2 instances based on incoming traffic? A.AWS Auto Scaling B.Amazon ElasticLoad Balancing C. AWS Lambda D. Amazon EC2 Spot Instances Answer \u2013 A Q253: Which AWS service provides a managed message queuing service fordecoupling and scaling microservices, distributed systems, and serverless applications? A.Amazon SQS B.Amazon SNS C. AWS Lambda D. AWS Step Functions Answer \u2013 A Q254: Which AWS service provides a fullymanaged, petabyte-scale data warehouse service? A.Amazon Redshift B.Amazon RDS C. Amazon DynamoDB D. Amazon Aurora Answer \u2013 A Q255: What isthe purpose of Amazon CloudTrail? A.To provide monitoring and alerting for AWS resources B.To collectand store log filesfrom AWS services C. To provide real-time application performance monitoring D. To automate the creation of AWS resources Answer \u2013 B Q256: You need to deploy a highly available, fault-tolerantapplication across multiple AWS regions. Which AWS service can help you automate the deployment of resources across multiple regions? A.AWS CloudFormation B.Amazon EC2 Auto Scaling C. AWS Lambda D. Amazon Route 53 Answer \u2013 A Q257: What is the maximum size of a single object that can be stored inAmazon S3? A.5 GB B.10 GB C. 25 GB D. 5 TB Answer \u2013 D Q258: You want tocreate a virtualprivate network (VPN) connection between your on-premises network and your VPC inAWS. Which AWS service should you use? A.Amazon VPC Peering B.AWS VPN C. AWS Direct Connect D. Amazon CloudFront Answer \u2013 B Q259: What is the benefit of using Amazon CloudFront? A. Itprovides secure storage for your data. B. Itautomatically scales your application based on demand. C. Itaccelerates the delivery of your content to users worldwide. D. Itenables you to monitor your AWS resources inreal time. Answer \u2013 C Q260: You want to create a highly available database with automatic backups and automatic failover.Which AWS service would you use? A. Amazon RDS B. Amazon DynamoDB C. Amazon Redshift D. Amazon Aurora Answer \u2013 A Q261: Which AWS service isdesigned to help you deploy, manage, and scale web applications without managing the underlying infrastructure? A. AWS Elastic Beanstalk B. Amazon EC2 C. AWS Lambda D. Amazon Lightsail Answer \u2013 A: AWS Elastic Beanstalk Reason: AWS Elastic Beanstalk is a Platform-as-a-Service (PaaS) offering that automatically handles the deployment, scaling, and management of applications without requiring you to manage the underlying infrastructure. You only need to upload your code, and Elastic Beanstalk takes care of the rest. Q262: Which of the following AWS services allows you to easily provision and manage a content delivery network (CDN)? A. Amazon S3 B. AWS CloudFront C. Amazon EC2 D. AWS Direct Connect Answer \u2013 B: AWS CloudFront Reason: AWS CloudFront isa Content Delivery Network (CDN) service that caches content at edge locations worldwide to deliver itwith low latency and high transfer speeds to users. Q263: You need to store sensitive data inAmazon S3. What is the most secure way to encrypt the data at rest? A. Enable server-side encryption with Amazon S3-managed keys (SSE-S3) B. Enable client-side encryption before uploading to Amazon S3 C. Enable server-side encryption with AWS Key Management Service (SSE-KMS) D. Enable client-side encryption with AWS Key Management Service (SSE-KMS) Answer \u2013 C: Enable server-side encryption with AWS Key Management Service (SSE-KMS) Reason: SSE-KMS uses AWS Key Management Service (KMS) to manage encryption keys, providing more control over key management and audit logging compared to S3-managed keys (SSE-S3). Itisthe most secure option for encryption at rest. Q264: You need to create a virtualprivate cloud (VPC) inAWS with two subnets: one public and one private. What should you do to ensure that the private subnet has internet access? A. Attach an Internet Gateway to the VPC and route trafficfrom the private subnet through the public subnet. B. Attach a NAT Gateway tothe private subnet and route trafficthrough the NAT Gateway. C. Use AWS Direct Connect toestablish a dedicated connection between your VPC and your on-premises network. D. Use an AWS VPN connection to route trafficfrom the private subnet to the internet. Answer \u2013 B: Attach a NAT Gateway to the private subnet and route trafficthrough the NAT Gateway Reason: A NAT Gateway allows instances ina private subnet to access the internet while keeping the instances in the private subnet secure from inbound internet traffic.The NAT Gateway is placed ina public subnet, and the private subnet routes trafficthrough it. Q265: What isthe maximum number of security groups that can be associated with a single EC2 instance? A. 5 B. 10 C. 15 D. 50 Answer \u2013 B: 10 Reason: AWS allows up to 5 security groups to be associated with an EC2 instance by default. However, you can request a limitincrease to up to 50 security groups ifneeded. Q266: You want to ensure that your EC2 instances are automatically terminated when they are no longer needed. Which AWS service can you use to automatically manage the lifecycle of EC2 instances? A. AWS Lambda B. AWS Auto Scaling C. Amazon CloudWatch D. AWS Instance Scheduler Answer \u2013 D: AWS Instance Scheduler Reason: AWS Instance Scheduler allows you to automatically startand stop EC2 instances based on a schedule. This is useful for automatically terminating instances when they are no longer needed, helping you save costs. Q267: You are migrating an on-premises application to AWS and want to maintain fullcontrol over the virtual servers and storage, while also ensuring scalability.Which AWS service would you choose? A. Amazon EC2 B. AWS Lambda C. Amazon S3 D. Amazon Lightsail Answer \u2013 A: Amazon EC2 Reason: Amazon EC2 provides scalable computing capacity inthe cloud and allows fullcontrol over the virtual servers, making itthe best choice for applications that need control over the infrastructure. Q268: Which AWS service can help you automatically back up your Amazon EC2 instances? A. Amazon CloudWatch B. AWS Backup C. AWS Elastic Beanstalk D. Amazon S3 Answer \u2013 B: AWS Backup Reason: AWS Backup isa fullymanaged backup service that automates the backup of AWS resources, including EC2 instances. Itallows you to centrally manage backups and restore them when needed. Q269: What is the maximum number of VPCs that can be created per AWS account? A.3 B.5 C. 10 D. 20 Answer \u2013 B: 5 Reason: By default, AWS allows up to 5 VPCs per AWS account per region. You can request a limitincrease ifyou need more. Q270: You are running a mission-critical application in AWS and want toensure itremains highly available even in the event of a failurein one AvailabilityZone. Which AWS service can you use to achieve this? A.Amazon EC2 Auto Scaling B.Amazon Route 53 C. AWS Elastic Load Balancing D. Amazon RDS Multi-AZ deployments Answer \u2013 D: Amazon RDS Multi-AZ deployments Reason: Amazon RDS Multi-AZ deployments automatically replicate database instances across multiple AvailabilityZones to ensure high availabilityand failover support incase of an AZ failure. Q271: Which AWS service provides a fullymanaged message queue that can be used to decouple components of an application? A.Amazon SQS B.Amazon SNS C. Amazon MQ D. AWS Step Functions Answer \u2013 A: Amazon SQS Reason: Amazon Simple Queue Service (SQS) is a fullymanaged message queue service that helps decouple and scale microservices, distributed systems, and serverless applications. Q272: What is the purpose ofAmazon Route 53? A. To monitor your AWS resources in realtime B. To distribute trafficacross multiple AWS regions C. To register domain names and route internet traffictoAWS resources D. To provide a content delivery network for your application Answer \u2013 C: To register domain names and route internet traffic to AWS resources Reason: Amazon Route 53 is a scalable Domain Name System (DNS) web service that allows you to register domain names and route internet traffictoresources such as EC2 instances, load balancers, and S3 buckets. Q273: You need to store large amounts of unstructured data in a scalable and cost-effective way. Which AWS service should you use? A. Amazon RDS B. Amazon S3 C. Amazon DynamoDB D. Amazon EFS Answer \u2013 B: Amazon S3 Reason: Amazon S3 is an object storage service that provides scalable, cost-effective storage forlarge amounts of unstructured data, such as images, videos, backups, and logs. Q274: Which ofthe following AWS services isa fullymanaged, scalable NoSQL database? A. Amazon Aurora B. Amazon RDS C. Amazon DynamoDB D. Amazon Redshift Answer \u2013 C: Amazon DynamoDB Reason: Amazon DynamoDB isa fullymanaged NoSQL database service that provides fast and predictable performance with seamless scalability. Q275: Which AWS service helps you automate the process of deploying applications on EC2 instances and other AWS resources? A. AWS CloudFormation B. AWS Lambda C. AWS Elastic Beanstalk D. Amazon EC2 Auto Scaling Answer \u2013 C: AWS Elastic Beanstalk Reason: AWS Elastic Beanstalk isa Platform-as-a-Service (PaaS) offering thatautomates the deployment, scaling, and management of applications, making iteasy to deploy applications to EC2 instances and other AWS resources. Q276: You need to analyze log data from your AWS environment. Which AWS service would you use to aggregate, search, and visualize the log data? A. Amazon CloudWatch Logs B. Amazon Athena C. Amazon Redshift D. AWS X-Ray Answer \u2013 A: Amazon CloudWatch Logs Reason: Amazon CloudWatch Logs allows you to collect,monitor, and analyze log data from various AWS resources and applications in real-time. Q277: Which ofthe following isa fullymanaged relational database service that iscompatible with MySQL, PostgreSQL, and other database engines? A. Amazon Aurora B. Amazon RDS C. Amazon DynamoDB D. Amazon Redshift Answer \u2013 B: Amazon RDS Reason: Amazon RDS is a fullymanaged relational database service that supports multiple database engines, including MySQL, PostgreSQL, MariaDB, and others. Q278: Which AWS service provides a fullymanaged, scalable, and secure object storage service for storing large amounts of unstructured data? A. Amazon S3 B. Amazon EBS C. Amazon EFS D. Amazon Glacier Answer \u2013 A: Amazon S3 Reason: Amazon S3 is an object storage service that provides scalable, secure, and cost-effective storage forunstructured data such as documents, images, and videos. Q279: You are running an application that requires high-performance block storage. Which AWS service would you use? A. Amazon EBS B. Amazon S3 C. Amazon EFS D. Amazon Glacier Answer \u2013 A: Amazon EBS Reason: Amazon Elastic Block Store (EBS) provides high-performance block storage for EC2 instances, suitable for applications thatrequire low-latency and high-throughput access to data. Q280: Which AWS service can be used to run containerized applications in a fullymanaged environment? A. Amazon ECS B. Amazon EC2 C. AWS Lambda D. Amazon Lightsail Answer \u2013 A: Amazon ECS Reason: Amazon Elastic Container Service (ECS) is a fullymanaged container orchestration service that allows you to run and manage Docker containers ina scalable environment."
  }
];