import { createI18n } from "vue-i18n";

const messages = {
  TM: {
    nav: {
      title1: "Baş sahypa",
      title2: "Biz barada",
      title3: "Enjamlar",
      title4: "Programma üpjünçiligi",
      title5: "Taslamalar",
      title6: "Habarlaşmak",
    },
    home: {
      title1: "Pikirleriňizi durmuşa geçiriň",
      title2: "Biz näme edýäris",
      cards: {
        title1: "En köp sanly çözümler",
        title2: "Islendik çylkarylykdaky web sahypalaryny işläp düzmek",
        title3: "Mobil programmalar işläp düzmek",
        title4: "Programmalaryň UI / UX dizaýny",
        title5: "Motion dizaýn",
        subtitle1: "Serwerler / Tor enjamlary / Kompýuterler",
        subtitle2: "Wizitka sahypalary / Elektron söwda / LMS / CRM",
        subtitle3: "Android & IOS",
        subtitle4: "Web sahypalary we mobil programmalar",
        subtitle5:
          "Motion Graphics / Logo Animation / UI/UX Animation / 3D Animation",
      },
    },
    about: {
      title1: "Biz siziň",
      title2: "Görüşiňizi hakykata öwürýäris",
      title3: "IT-niň baş direktory",
      title4: "Biziň toparymyz",
      desc1:
        "Parlak Nesil, ähli ugurlary öz içine alýan IT hyzmatlaryny üpjün edýän güýçli hyzmatdaşdyr. Biz enjamlary, programma üpjünçiligini, frontend, backend we mobil programmalary öz içine alýan çözgütleri işläp düzmäge ýöriteleşýäris. Biziň hyjuwymyz UI/UX dizaýny bilen iň täze tehnologiýalary birleşdirip, ulanyjyda täsir galdyrýan sanly tejribeleri döretmekdir. Biz siziň ideýaňyzy durmuşa geçirýäris, IT strategiýalaryny size mahsus ýagdaýda işläp düzmek bilen maksatlaryňyza laýyk gelmegini üpjün edýäris.",
    },
    hardware: {
      desc1:
        "Biziň enjamlarymyz hyzmatlary enjamlary ösdürmegiň we integrasiýasynyň ähli tapgyrlaryny öz içine alýar. Biz taslamaňyzyň anyk zerurlyklaryny kanagatlandyrmak üçin her bir komponentiň ünsli saýlanylmagyny üpjün etmek bilen jikme-jik ulgam dizaýnyndan başlaýarys. Biziň hünärlerimizde ýöriteleşdirilen tegelek plata dizaýny, prototiplemek we önümçilik bar, bu bolsa bizden size aýratyn islegleriňize laýyk enjam çözgütlerini döretmäge mümkinçilik berýär.",
      desc2:
        "Biz iň ýokary hilli bölekleriň ulanylmagyny üpjün etmek üçin komponentleri saýlamak bilen meşgullanýarys. Biziň ýygnama prosesimiz berk bolup, ygtybarlylygy we öndürijiligi kepillendirmek üçin birnäçe synag tapgyryndan geçýär. Enjamlaryň ýygnanmagyndan soň, biz ony ähli platformalarda söhbetdeşligi we laýyklygy üpjün etmek bilen bar bolan ulgamlara birleşdirýäris. Täze enjam çözgütlerini döretmekden başga-da, biz bar bolan ulgamlary optimizirlemäge we kämilleşdirmäge ýöriteleşýäris. Performansy ýokarlandyrmak, howpsuzlygy gowulandyrmak ýa-da täze aýratynlyklary goşmak bolsun, biziň toparymyz enjamlara hyzmat etmek we kämilleşdirmek bilen bagly ähli ugurlar boýunça taýýar.",
      desc3:
        "Parlak Nesil-de biz diňe bir işjeň däl-de, eýsem täsirli, köpeldip boljak we siziň iş maksatlyňyza laýyk enjamlary çözgütlerini hödürlemäge borçlanýarys.",
    },
    software: {
      desc1:
        "Biziň toparymyz programmalaşdyryş dilleriniň we çarçuwalaryň giň görnüşine eýe bolup, bize web we ykjam programmalardan başlap, çylşyrymly kärhana ulgamlaryna çenli ähli zady ösdürmäge mümkinçilik berýär. Biz ulaldylyp bilýän, ygtybarly we ýokary öndürijilikli programmalary döretmäge üns berýäris, bu bolsa bar bolan infrastrukturaňyz bilen birkemsiz birleşýär.",
      desc2:
        "Sargyt esasynda programma üpjünçiligini döretmekden başga-da, biz optimizasiýa we hyzmat hyzmatlaryny hem hödürleýäris. Eger bar bolan programmalaryňyzyň öndürijiligini gowulandyrmagy, täze aýratynlyklary goşmagy ýa-da iň soňky tehnologiýalar bilen laýyklygy üpjün etmegi göz öňünde tutsaňyz, bizde netijeleri eltip bermek üçin zerur başarnyklar we tejribe bar.",
      desc3:
        "Biz dürli ulgamlary we platformalary birleşdirip, bitewi, täsirli iş akymyny döretmek üçin programma üpjünçiligini integrirlemek hyzmatlaryny hem hödürleýäris. Biziň hünärlerimiz bulut hasaplamalaryna, maglumatlar bazasyny dolandyrmaga we API ösüşine çenli uzalyp gidýär, bu bolsa siziň programma üpjünçiligiňiziň ekosistemasynyň ygtybarly we geljege taýýardygyny üpjün edýär.",
      desc4:
        "Parlak Nesil-de biz diňe bir talaplaryňyza laýyk däl-de, eýsem olary aşýan programma üpjünçiligini hödürlemäge borçlanýarys. Biz prosesiň ähli basgançaklarynda size ýakyn aragatnaşykda işleşip, soňky önümiň siziň iş maksatlyňyz we iş amallaryňyz bilen doly laýyk gelmegini üpjün edýäris.",
    },
    contact: {
      title1: 'E-poçta salgyňyz',
      title2: 'Mazmunyň Ady',
      title3: 'Pikiriňizi paýlaşyň',
      title4: 'Teswiriňizi paýlaşyň',
    },
    footer: {
      title1: "Habarlaşyň",
      title2: "Biziň salgymyz",
      title3: "E-poçta ugratmak",
    },
  },
  RU: {
    nav: {
      title1: "Главная",
      title2: "О нас",
      title3: "Железо",
      title4: "ПО",
      title5: "Проекты",
      title6: "Контакт",
    },
    home: {
      title1: "Позвольте нам сделать ваше видение реальностью",
      title2: "Чем мы занимаемся",
      cards: {
        title1: "Полный спектр аппаратных решений",
        title2: "Разработка сайтов любой сложности",
        title3: "Разработка мобильных приложений",
        title4: "UI / UX дизайн приложений",
        title5: "Моушн дизайн",
        subtitle1: "Серверы / Сетевое оборудование / Компьютеры",
        subtitle2: "Сайты визитки / Электронная коммерция / LMS / CRM",
        subtitle3: "Android & IOS",
        subtitle4: "Веб-сайты и мобильные приложения",
        subtitle5:
          "Моушн графика / Анимация логотипов / Анимация UI/UX / 3D Анимация",
      },
    },
    about: {
      title1: "Мы воплощаем",
      title2: "Вашу мечту в реальность",
      title3: "Генеральный директор IT",
      title4: "Наша команда",
      desc1:
        "Parlak Nesil — это мощный IT-партнер, который предоставляет комплексные решения. Мы специализируемся на разработке полного спектра услуг, включая аппаратное обеспечение, программное обеспечение, фронтенд, бэкенд и мобильную разработку. Наша страсть — это объединение передовых технологий с великолепным дизайном UI/UX для создания цифровых решений, которые находят отклик у пользователей. Мы воплощаем ваши идеи в реальность, разрабатывая индивидуальные IT-стратегии, гарантируя, что каждая деталь идеально соответствует вашим целям.",
    },
    hardware: {
      desc1:
        "Наши услуги в области аппаратного обеспечения охватывают полный жизненный цикл разработки и интеграции оборудования. Мы начинаем с детального проектирования системы, обеспечивая тщательный выбор каждого компонента для удовлетворения специфических нужд вашего проекта. Наши специалисты обладают опытом в проектировании, прототипировании и производстве индивидуальных печатных плат, что позволяет нам создавать уникальные аппаратные решения, адаптированные под ваши требования.",
      desc2:
        "Мы занимаемся поиском компонентов, гарантируя использование только самых качественных деталей. Наш процесс сборки тщателен и включает несколько этапов тестирования для гарантии надежности и производительности. После сборки оборудования мы интегрируем его с существующими системами, обеспечивая бесшовную связь и совместимость на всех платформах. Помимо разработки нового оборудования, мы специализируемся на оптимизации и обновлении существующих систем. Будь то улучшение производительности, усиление безопасности или добавление новых функций, наша команда готова справиться с любыми аспектами обслуживания и модернизации оборудования.",
      desc3:
        "В Parlak Nesil мы стремимся предоставлять аппаратные решения, которые не только функциональны, но и инновационны, масштабируемы и соответствуют вашим бизнес-целям.",
    },
    software: {
      desc1:
        "Наша команда владеет широким спектром языков программирования и фреймворков, что позволяет нам разрабатывать как веб- и мобильные приложения, так и сложные корпоративные системы. Мы сосредоточены на создании масштабируемого, безопасного и высокопроизводительного программного обеспечения, которое бесшовно интегрируется с вашей существующей инфраструктурой.",
      desc2:
        "Помимо разработки индивидуального программного обеспечения, мы предлагаем услуги по его оптимизации и сопровождению. Если вы хотите улучшить производительность существующих приложений, добавить новые функции или обеспечить совместимость с новейшими технологиями, у нас есть навыки и опыт для достижения результатов.",
      desc3:
        "Мы также предоставляем услуги по интеграции программного обеспечения, соединяя различные системы и платформы для создания слаженного и эффективного рабочего процесса. Наша экспертиза охватывает облачные вычисления, управление базами данных и разработку API, что гарантирует, что ваша программная экосистема будет надежной и готовой к будущим вызовам.",
      desc4:
        "В Parlak Nesil мы стремимся предоставлять программные решения, которые не только соответствуют вашим ожиданиям, но и превосходят их. Мы тесно сотрудничаем с вами на протяжении всего процесса, гарантируя, что конечный продукт идеально соответствует вашим бизнес-целям и операционным потребностям.",
    },
    contact: {
      title1: 'Ваша электронная почта',
      title2: 'Заголовок контента',
      title3: 'Поделитесь своими мыслями',
      title4: 'Поделитесь своим отзывом',
    },
    footer: {
      title1: "Позвоните",
      title2: "Наш адрес",
      title3: "Отправить Email",
    },
  },
  EN: {
    nav: {
      title1: "Home",
      title2: "About us",
      title3: "Hardware",
      title4: "Software",
      title5: "Projects",
      title6: "Contact us",
    },
    home: {
      title1: "Let Us Make Your Vision a Reality",
      title2: "What We Do",
      cards: {
        title1: "Full range of hardware solutions",
        title2: "Development of websites of any complexity",
        title3: "Mobile application development",
        title4: "UI / UX design of applications",
        title5: "Motion design",
        subtitle1: "Servers / Networking equipment / Computers",
        subtitle2: "Business card sites / E-commerce / LMS / CRM",
        subtitle3: "Android & IOS",
        subtitle4: "Websites and mobile applications",
        subtitle5:
          "Motion Graphics / Logo Animation / UI/UX Animation / 3D Animation",
      },
    },
    about: {
      title1: "We make your",
      title2: "Vision a reality",
      title3: "Ceo of IT",
      title4: "Our team",
      desc1:
        "Parlak Nesil is a full-spectrum IT powerhouse. We excel in crafting end-to-end solutions that span hardware, software, frontend, backend, and mobile development. Our passion lies in fusing cutting-edge technology with stunning UI/UX design to create digital experiences that resonate. We turn your vision into reality by developing bespoke IT strategies, ensuring that every detail is perfectly aligned with your goals.",
    },
    hardware: {
      desc1:
        "Our hardware services encompass the complete lifecycle of hardware development and integration. We begin with detailed system design, ensuring that every component is carefully selected to meet the specific needs of your project. Our expertise includes custom circuit board design, prototyping, and manufacturing, enabling us to create unique hardware solutions tailored to your requirements.",
      desc2:
        "We handle component sourcing, ensuring that only the highest quality parts are used. Our assembly process is rigorous, with multiple stages of testing to guarantee reliability and performance. Once the hardware is assembled, we integrate it with existing systems, ensuring seamless communication and compatibility across all platforms. In addition to new hardware development, we specialize in optimizing and upgrading existing systems. Whether it's improving performance, enhancing security, or adding new features, our team is equipped to handle all aspects of hardware maintenance and upgrades.",
      desc3:
        "At Parlak Nesil, we are committed to delivering hardware solutions that are not only functional but also innovative, scalable, and aligned with your business objectives.",
    },
    software: {
      desc1:
        "Our team is proficient in a wide range of programming languages and frameworks, enabling us to develop everything from web and mobile applications to complex enterprise systems. We focus on building scalable, secure, and high-performance software that integrates seamlessly with your existing infrastructure.",
      desc2:
        "In addition to custom software development, we offer software optimization and maintenance services. Whether you're looking to improve the performance of existing applications, add new features, or ensure compatibility with the latest technologies, we have the skills and experience to deliver results.",
      desc3:
        "We also provide software integration services, connecting different systems and platforms to create a cohesive, efficient workflow. Our expertise extends to cloud computing, database management, and API development, ensuring that your software ecosystem is robust and future-proof.",
      desc4:
        "At Parlak Nesil, we are committed to delivering software solutions that not only meet but exceed your expectations. We work closely with you throughout the entire process, ensuring that the final product aligns perfectly with your business goals and operational needs.",
    },
    contact: {
      title1: "Your Email",
      title2: "Content Title",
      title3: "Share your thoughts",
      title4: "Share your feedback",
    },
    footer: {
      title1: "Call",
      title2: "Our Address",
      title3: "Send An Email",
    },
  },
};

export const i18n = createI18n({
  locale: "EN",
  fallbackLocale: "EN",
  messages,
});
