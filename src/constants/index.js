import {
  benefitIcon1,
  benefitIcon2,
  benefitIcon3,
  benefitIcon4,
  benefitImage2,
  chromecast,
  disc02,
  discord,
  discordBlack,
  facebook,
  figma,
  file02,
  framer,
  homeSmile,
  instagram,
  notification2,
  notification3,
  notification4,
  notion,
  photoshop,
  plusSquare,
  protopie,
  raindrop,
  recording01,
  recording03,
  roadmap1,
  roadmap2,
  roadmap3,
  roadmap4,
  searchMd,
  slack,
  sliders04,
  telegram,
  twitter,
  yourlogo,
} from "../assets";

export const navigation = [
  {
    id: "0",
    title: "УСЛУГИ",
    url: "#features",
  },
  {
    id: "1",
    title: "",
    url: "#pricing",
  },
  {
    id: "2",
    title: "Наши работы",
    url: "#how-to-use",
  },
  {
    id: "3",
    title: "ИИ‑телефонный менеджер",
    url: "#roadmap",
  },
  {
    id: "4",
    title: "New account",
    url: "#signup",
    onlyMobile: true,
  },
  {
    id: "5",
    title: "Sign in",
    url: "#login",
    onlyMobile: true,
  },
];

export const heroIcons = [homeSmile, file02, searchMd, plusSquare];

export const notificationImages = [notification4, notification3, notification2];

export const companyLogos = [yourlogo, yourlogo, yourlogo, yourlogo, yourlogo];

export const brainwaveServices = [
  "Благодаря автодозвонам, менеджеры стали чаще дозваниваться до клиентов, что привело к значительному увеличению продаж.",
  "Интеграция телефонии и мессенджеров сделала общение с клиентами быстрее и удобнее для всех сторон.",
  "Руководство теперь видит полную картину по продажам и может легко управлять процессом.",
];

export const brainwaveServicesIcons = [
  recording03,
  recording01,
  disc02,
  chromecast,
  sliders04,
];

export const roadmap = [
  {
    id: "0",
    title: "Как вы теряете до 40% выручки каждый день",
    text: "Узнайте правду о своём отделе продаж",
    date: "May 2023",
    status: "done",
    imageUrl: roadmap1,
    colorful: true,
  },
  {
    id: "1",
    title: "Проблема",
    text: "Ошибки в звонках не фиксируются, не считаются и не исправляются системно. Как вы теряете до 40% выручки каждый день — и даже не знаете об этом",
    date: "May 2023",
    status: "progress",
    imageUrl: roadmap2,
  },
  {
    id: "2",
    title: "Индивидуальная настройка чат-бота",
    text: "Позвольте пользователям настраивать внешний вид и поведение чат-бота, делая взаимодействие более вовлечённым и интересным.",
    date: "May 2023",
    status: "done",
    imageUrl: roadmap3,
  },
  {
    id: "3",
    title: "Интеграция с внешними сервисами",
    text: "Подключите чат-бота к внешним источникам данных — например, к погодным и новостным сервисам, чтобы давать более точные и полезные рекомендации.",
    date: "May 2023",
    status: "progress",
    imageUrl: roadmap4,
  },
];

export const collabContent = [
  {
    id: "0",
    title: "Внедрили СРМ, после чего компания выросла до 200+ человек",
  },
  {
    id: "1",
    title: "После внедрения Ройстата и amoCRM увеличилась прибыль на 25%",
  },
  {
    id: "2",
    title: "Внедрили CRM и сократили время обработки заявок до 15 минут",
  },
];

export const collabApps = [
  {
    id: "0",
    title: "Figma",
    icon: figma,
    width: 26,
    height: 36,
  },
  {
    id: "1",
    title: "Notion",
    icon: notion,
    width: 34,
    height: 36,
  },
  {
    id: "2",
    title: "Discord",
    icon: discord,
    width: 36,
    height: 28,
  },
  {
    id: "3",
    title: "Slack",
    icon: slack,
    width: 34,
    height: 35,
  },
  {
    id: "4",
    title: "Photoshop",
    icon: photoshop,
    width: 34,
    height: 34,
  },
  {
    id: "5",
    title: "Protopie",
    icon: protopie,
    width: 34,
    height: 34,
  },
  {
    id: "6",
    title: "Framer",
    icon: framer,
    width: 26,
    height: 34,
  },
  {
    id: "7",
    title: "Raindrop",
    icon: raindrop,
    width: 38,
    height: 32,
  },
];

export const pricing = [
  {
    id: "0",
    title: "Basic",
    description: "AI chatbot, personalized recommendations",
    price: "0",
    features: [
      "An AI chatbot that can understand your queries",
      "Personalized recommendations based on your preferences",
      "Ability to explore the app and its features without any cost",
    ],
  },
  {
    id: "1",
    title: "Premium",
    description: "Advanced AI chatbot, priority support, analytics dashboard",
    price: "9.99",
    features: [
      "An advanced AI chatbot that can understand complex queries",
      "An analytics dashboard to track your conversations",
      "Priority support to solve issues quickly",
    ],
  },
  {
    id: "2",
    title: "Enterprise",
    description: "Custom AI chatbot, advanced analytics, dedicated account",
    price: null,
    features: [
      "An AI chatbot that can understand your queries",
      "Personalized recommendations based on your preferences",
      "Ability to explore the app and its features without any cost",
    ],
  },
];

export const benefits = [
  {
    id: "0",
    title: "Внедрение amoCRM и Bitrix24",
    text: "Автоматизируйте продажи и маркетинг с помощью CRM-системы, чтобы повысить лояльность клиентов и увеличить продажи",
    href: "/services/amocrm-bitrix24",
    backgroundUrl: "./src/assets/benefits/card-1.svg",
    iconUrl: benefitIcon1,
    imageUrl: benefitImage2,
  },
  {
    id: "1",
    title: "Внедрение аналитики Roistat",
    text: "Настройка веб-аналитики и сквозной аналитики для контроля рекламы, конверсий и эффективности каналов привлечения",
    href: "/services/roistat",
    backgroundUrl: "./src/assets/benefits/card-2.svg",
    iconUrl: benefitIcon2,
    imageUrl: benefitImage2,
    light: true,
  },
  {
    id: "2",
    title: "Сопровождение CRM и техподдержка",
    text: "Регулярная поддержка и доработка CRM, обучение сотрудников, решение сбоев и консультации по работе с системой",
    backgroundUrl: "./src/assets/benefits/card-3.svg",
    iconUrl: benefitIcon3,
    imageUrl: benefitImage2,
  },
  {
    id: "3",
    title: "Сопровождение CRM и техподдержка",
    text: "Обслуживание и развитие вашей CRM, обновления, настройка отчётов и помощь в решении повседневных задач",
    backgroundUrl: "./src/assets/benefits/card-4.svg",
    iconUrl: benefitIcon4,
    imageUrl: benefitImage2,
    light: true,
  },
  {
    id: "4",
    title: "Боты и AI",
    text: "Разработка чат-ботов и внедрение решений на основе искусственного интеллекта для автоматизации общения с клиентами",
    backgroundUrl: "./src/assets/benefits/card-5.svg",
    iconUrl: benefitIcon1,
    imageUrl: benefitImage2,
  },
  {
    id: "5",
    title: "Помощь в телефонии",
    text: "Настройка и интеграция телефонии с CRM, облачная АТС, запись звонков и аналитика по входящим и исходящим",
    backgroundUrl: "./src/assets/benefits/card-6.svg",
    iconUrl: benefitIcon2,
    imageUrl: benefitImage2,
  },
];

export const socials = [
  {
    id: "0",
    title: "Discord",
    iconUrl: discordBlack,
    url: "#",
  },
  {
    id: "1",
    title: "Twitter",
    iconUrl: twitter,
    url: "#",
  },
  {
    id: "2",
    title: "Instagram",
    iconUrl: instagram,
    url: "#",
  },
  {
    id: "3",
    title: "Telegram",
    iconUrl: telegram,
    url: "#",
  },
  {
    id: "4",
    title: "Facebook",
    iconUrl: facebook,
    url: "#",
  },
];
