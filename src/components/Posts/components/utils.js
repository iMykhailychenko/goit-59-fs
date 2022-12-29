export const post = {
  id: 8,
  title: 'Microservices Design Patterns',
  content: `This is the 3rd post in a series on microservices architecture.
High availability, scalability, resilience to failure, and performance are characteristics of microservices. You can use the microservice architecture pattern in order to architect a microservice application, thereby reducing the risk of failures in microservices.

The patterns are divided into three layers:

Application Patterns
The application patterns address issues faced by developers such as the decomposition of data, data maintenance, testing, user interface, and some of the observability patterns.
Let’s go over the basics of these application patterns.

Decomposition patterns
Choosing how to decompose a monolithic system into services

Decompose by business capability — Services are organized around business capabilities.
Decompose by subdomain — Services are organized around subdomains of domain-driven design.
Data Patterns
Data consistency — A separate database is used by each service in order to ensure loose coupling. For data consistency across services, the Saga pattern must be used.
Querying —The other problem with using a database per service is that some queries need to join data from multiple services. It is impossible to perform distributed queries against a service’s database as its data can only be accessed via its API. Data scattered across multiple services must be retrieved using one of the querying patterns.
API composition — API calls are made to one or more services and results are aggregated.
Command Query Responsibility Segregation (CQRS) — The data is maintained in one or more replicas that can be easily queried.
Testing Patterns
Individual microservices are easier to test because they are much smaller than monolithic applications. While testing that the different services work together, it’s important to avoid the use of complex, slow, and unstable end-to-end tests that examine multiple services simultaneously.

Consumer-driven contract test — Ensure that a service meets the expectations of its clients.
Consumer side contract test — Make sure the client of the service can communicate with it.
Service component test — Isolate the service and test it.
UI Patterns
It is the responsibility of the different teams to display data that correspond to different services and how it is displayed.

Server-side page fragment composition — Each team develops a web application that generates the HTML fragment for the region of the page that their service implements. UI teams develop the page templates by aggregating service-specific HTML fragments on the server-side.
Client-side UI composition — Each team creates a client-side UI component implementing the region of the screen for their service, such as an AngularJS directive. By composing multiple, service-specific UI components, UI teams implement page skeletons to build screens.
Observability Patterns
In order to operate an application effectively, it is important to understand its runtime behavior and troubleshoot problems such as failed requests.

Audit Logging—Audit logging records the actions of each user. A log of audit activity is typically used to assist in customer support, ensure compliance, and detect suspicious activity.
Application metrics—Monitoring and alerting are key components of the production environment. There is a range of metrics, such as the utilization of CPU, memory, and disk, to the latency of service requests and the number of requests executed. Metrics are collected by a metric service, which provides alerting and visualization.
Application Infrastructure Patterns
They are for infrastructure issues that also affect development, such as communications, observability, reliability, and security patterns.`,
  image:
    'https://images.unsplash.com/photo-1638633898609-07028cc6d756?ixlib=rb-1.2.1&w=2400&q=80&fm=jpg&crop=entropy&cs=tinysrgb',
  views: 50,
  preview_image:
    'https://images.unsplash.com/photo-1638633898609-07028cc6d756?ixlib=rb-1.2.1&w=640&q=80&fm=jpg&crop=entropy&cs=tinysrgb',
  created_at: '2022-07-24T18:21:42.049514+00:00',
  updated_at: null,
};
