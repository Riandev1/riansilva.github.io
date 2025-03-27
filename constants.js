export const METADATA = {
  author: "Rian Silva",
  title: "Portfolio |Rian Silva",
  description:
    "Rian Silva is a passionate FullStack Engineer, dedicated to crafting aesthetic and modern apps that captivate and engage users.",
  siteUrl: "https://www.shubhporwal.me/",
  twitterHandle: "@oDevRian",
  keywords: [
    "Rian Silva",
    "FullStack Engineer",
    "React Native Developer",
    "Software Engineer",
    "Portfolio",
    "Devfolio",
    "Folio",
  ].join(", "),
  image:
    "",
  language: "English",
  themeColor: "#000000",
};

export const MENULINKS = [
  {
    name: "Home",
    ref: "home",
  },
  {
    name: "Skills",
    ref: "skills",
  },
  {
    name: "Projects",
    ref: "projects",
  },
  {
    name: "Work",
    ref: "work",
  },
  {
    name: "Contact",
    ref: "contact",
  },
];

export const TYPED_STRINGS = [
  "A pragmatic FullStack Developer",
  "I build things for the web",
  "I create aesthetic and modern apps",
];

export const SOCIAL_LINKS = [
  {
    name: "mail",
    url: "mailto: realrian@outlook.com",
  },
  {
    name: "linkedin",
    url: "https://www.linkedin.com/in/rian-dev/",
  },
  {
    name: "github",
    url: "https://github.com/Riandev1",
  },
  {
    name: "instagram",
    url: "https://www.instagram.com/_rian.code/",
  },
  {
    name: "X",
    url: "https://x.com/oDevRian",
  },
];

export const SKILLS = {
  languagesAndTools: [
    "html",
    "css",
    "javascript",
    "typescript",
    "python",
    "nodejs",
    "webpack",
    "vite",
    "firebase",
    "figma",
    "tanstack-query",
  ],
  librariesAndFrameworks: [
    "react",
    "redux",
    "nextjs",
    "tailwindcss",
    "styledcomponents",
    "antdesign",
    "chakra-ui",
  ],
  databases: ["mysql", "mongodb"],
  other: ["git", "sanity-io"],
};

export const PROJECTS = [
  {
    name: "Football Table",
    image: "/projects/FootballTable.webp",
    blurImage: "/projects/blur/FootballTable-blur.webp",
    description: "An API with endpoints that show the table sorted by points, wins, and goal difference.⚽",
    gradient: ["#2E8B57", "#3CB371"],
    url: "https://github.com/Riandev1/tfc-project",
    tech: ["html", "css", "javascript", "nodejs", "mongodb",],
  },
  {
    name: "Trybe Wallet",
    image: "/projects/TrybeWallet.webp",
    blurImage: "/projects/TrybeWallet.webp",
    description: "A simple application that simulates an expense tracking wallet.💸",
    gradient: ["#006400", "#3CB371"],
    url: "https://github.com/Riandev1/Trybe-Wallet",
    tech: ["html", "css", "javascript", "react"],
  },
  {
    name: "Trybe Tunes",
    image: "/projects/TrybeTunes.webp",
    blurImage: "/projects/TrybeTunes.webp",
    description:
      "An application capable of playing music from various bands and artists.🎵",
    gradient: ["#8A2BE2", "#6699FF"],
    url: "https://github.com/Riandev1/project-tunes",
    tech: ["html", "css", "javascript", "react", "chakra-ui", "redux"],
  },
]; 

export const WORK_CONTENTS = {
  Automotive: [
    {
      title: "Automotive Parts E-commerce",
      description:
        "Development of an e-commerce with cart and payments, improving thesales conversion.",
      content: (
        <div className="h-full w-full flex items-center justify-center text-white px-4">
          Revolutionizing commerce, one click at a time
        </div>
      ),
    }, 
    {
      title: "Transformation",
      description:
        "Since 2023, the FLV Automotive Cars Seller Dashboard struggled with technical issues and a broken user experience due to accumulated technical debt. Leading a team of two junior developers, we migrated the dashboard from CSR to SSR, redesigned the UI, and overhauled the codebase in the process. This resolved the technical debt and vastly improved the user experience, making it Flv largest and most impactful migration.",
      content: (
        <div className="h-full w-full flex items-center justify-center text-white px-4">
          Júnior FullStack Engineer
        </div>
      ),
    },
    {
      title: "Evolution",
      description:
        "Recognizing the need for improved performance and user engagement, I spearheaded the migration of the Flv App from native to React-Native for iOS and Android platforms. This strategic move led to a X% enhancement in app performance and a Y% boost in user engagement, representing a significant milestone in the app's evolution.",
      content: (
        <div className="h-full w-full flex items-center justify-center text-white px-4">
         Backend Engineer
        </div>
      ),
    },
    {
      title: "Optimization",
      description:
        "Leveraging user feedback and analytics, I improved the seller web dashboard design, reducing bounce rates. Simultaneously, I overhauled the build process, slashing bundle size and boosting overall performance.",
      content: (
        <div className="h-full w-full flex items-center justify-center text-white px-4">
         Backend Engineer Intern
        </div>
      ),
    },
  ],
  NewRiver: [
    {
      title: "NewRiver",
      description:
        "It is a FiveM company that specializes in offering high-performance VPS sales and reliable hosting services, tailored to meet the needs of gaming communities and developers.",
      content: (
        <div className="h-full w-full flex items-center justify-center text-white px-4">
          Finding the right job isn&apos;t fate, it&apos;s navigation
        </div>
      ),
    },
    {
      title: "Innovation",
      description:
        "I led the optimization of their website, implementing improvements to enhance performance and user experience. Additionally, I took initiatives to resolve various bugs that customers were facing, resulting in a significant decrease in complaints and an increase in user engagement.",
      content: (
        <div className="h-full w-full flex items-center justify-center text-white px-4">
          Backend Developer Intern
        </div>
      ),
    },
  ],
  MrCat: [
    {
      title: "MrCat",
      description:
        "Mr. Cat is a dynamic store dedicated to offering stylish and high-quality footwear and accessories, blending fashion with comfort. With a focus on innovation and customer satisfaction, they strive to create products that make a statement and elevate everyday wear.",
      content: (
        <div className="h-full w-full flex items-center justify-center text-white px-4">
          We build apps that solve problems for the next billion people
        </div>
      ),
    },
    {
      title: "Trailblazing",
      description:
        "I worked in the inventory, where I was responsible for managing deliveries on the store's website, ensuring accuracy and efficiency in the process. Additionally, I was responsible for fixing issues such as bugs and system errors, and I also implemented improvements, such as adjustments to the order flow and optimizations in the delivery process, ensuring a smoother experience for customers.",
      content: (
        <div className="h-full w-full flex items-center justify-center text-white px-4">
          Web Developer Intern
        </div>
      ),
    },
  ],
};

export const GTAG = "G-5HCTL2TJ5W";
