import {
  mobile,
  backend,
  web,
  javascript,
  typescript,
  html,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  docker,
  angular, flask, python,
} from "../assets";
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  const services = [
    {
      title: "Data Analysis, Engineering & Production",
      icon: web,
    },
    {
      title: "Software Administrator",
      icon: mobile,
    },
    {
      title: "Frontend Developer",
      icon: backend,
    },
    {
      title: "Software Engineering",
      icon: creator,
    },
  ];
  const technologies = [
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Angular JS",
      icon: angular,
    },
    {
      name: "Python",
      icon: python,
    },
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "Redux Toolkit",
      icon: redux,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "docker",
      icon: docker,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
  ];
  const experiences = [
    {
      title: "Data Engineering & Analysis",
      company_name: "Cineplex Entertainment LP",
      icon: abaut,
      iconBg: "#ffffff",
      date: "May 2022 - Present",
      points: [
        "Performed comprehensive data quality assessments across multiple datasets, resolving over 200 anomalies through rigorous testing and collaborative problem-solving..",
        "Improved show-time optimization ML algorithm by 15% through model evaluations, fine-tuning, and data validation.",
        "Validated of 10TB data to Azure, ensuring 99% data integrity and automated data reporting workflows, reducing report generation time by 70%.",
        "Implemented data governance protocols via a coding management project implementing SQL Schema Compare and Git tools through Python shell scripting, achieving 100% compliance with industry standards.",
        "Developed custom data cube connections on the Cineplex Homepage Dashboard Power BI report, ran multiple testing scripts, & enhanced box office records displays via comprehensive data incident validation & tracking."
      ],
    },
    {
      title: "Software Administration Intern",
      company_name: "Alterra Mountain Company",
      icon: geeks,
      iconBg: "#000000",
      date: "June 2023 - September 2023",
      points: [
        "Implemented a Management System with Cenium 9, for a 20% reduction in check-in time via data streamlining.",
        "Enhanced the existing database scalability to handle 10,000+ guest records, achieving a 30% faster data retrieval in Tapechart via optimized indexing.",
        "Independently utilized Power BI for generating monthly reports, identifying upsell opportunities and driving a 15% revenue increase through data insights.",
      ],
    },
    {
      title: "Frontend Developer & Data Science Intern",
      company_name: "Nytia Labs",
      icon: lanet,
      iconBg: "#FAF9F6",
      date: "May 2023 - June 2023",
      points: [
        "Integrated libraries TensorFlow & Scikit-learn into Android watches, optimized data processing & efficiency by 20%.",
        "Leveraged Python and R with the Google BigQuery API, achieving a data processing rate of 1.5 Mbps.",
        "Developed real-time data visualization dashboards from A/B testing using Tableau, streamlining decision-making processes by 30%.",
      ],
    },
    {
      title: "Software Developer Intern",
      company_name: "VeDA Corporation",
      icon: gps,
      iconBg: "#FAF9F6",
      date: "May 2022 - Aug 2022",
      points: [
        "Reduced manual testing by 40% using Selenium-based scripts for content maintenance.",
        "Leveraged the Splunk monitoring tool and Docker for proactive identification and resolution of infrastructure issues, resulting in a 55% decrease in website downtime.",
        "Incorporated performance testing using Apache JMeter, identified and resolved bottlenecks resulting in a 10% increase in concurrent user capacity.",
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "Anay is an incredible communicator and problem-solver, always willing to help and share his expertise, making him a valuable resource for understanding complex topics with relative ease.",
      name: "Manju Tiwari",
      designation: "Senior Manager",
      company: "DreamWeb India",
      image: "https://media.licdn.com/dms/image/D4D03AQEO1P7quIcbyg/profile-displayphoto-shrink_100_100/0/1683222236604?e=1710979200&v=beta&t=Azg5LCvfTo1FJrazWYxuBiXYgYW2mdvjKPsRp1RXHX8",
    },
  ];
  
  const projects = [
    {
      name: "TechStackify",
      description:
        "TechStackify is a MERN-GraphQL solution built by me in November 2023. It efficiently manages user interactions using Apollo Client and Context API, reducing processing time by 30%. The project also features visually appealing interfaces that reduce bounce rates by 20%. By implementing authentication, CRUD operations, voting, tagging, and pagination, error rates are decreased by 25%.",
        tags: [
          {
              name: "ApolloClient",
              color: "blue-text-gradient",
          },
          {
              name: "ContextAPI",
              color: "pink-text-gradient",
          },
          {
              name: "MongoDB",
              color: "red-text-gradient",
          },
          {
              name: "ExpressJS",
              color: "green-text-gradient",
          },
          {
              name: "ReactJS",
              color: "orange-text-gradient",
          },
          {
              name: "NodeJS",
              color: "purple-text-gradient",
          },
          {
              name: "GraphQL",
              color: "grey-text-gradient",
          },
      ],      
      image: spplstm,
      source_code_link: "https://github.com/parth-ghinaiya/stock-price-prediction-with-lstm",
    },
    {
      name: "HackWestern — Best Gaming Hack (Big Blue Bubble)",
      description:
        "Led a 3-member team to develop an interactive animal welfare project Pashu, with WebGL & Unity frameworks, in C#.",
      tags: [
        {
          name: "WebGL",
          color: "blue-text-gradient",
        },
        {
          name: "Unity - Unreal Engine",
          color: "green-text-gradient",
        },
        {
          name: "C#",
          color: "pink-text-gradient",
        },
      ],
      image: geeksacademy,
      source_code_link: "https://www.youtube.com/playlist?list=PLjMIC_h0rNV1GmEoxd_7C77CJlbv_sHun",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };
