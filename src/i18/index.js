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
        title1: 'En köp sanly çözümler',
        title2: 'Islendik çylkarylykdaky web sahypalaryny işläp düzmek',
        title3: 'Mobil programmalar işläp düzmek',
        title4: 'Programmalaryň UI / UX dizaýny',
        title5: 'Motion dizaýn',
        subtitle1: 'Serwerler / Tor enjamlary / Kompýuterler',
        subtitle2: 'Wizitka sahypalary / Elektron söwda / LMS / CRM',
        subtitle3: 'Android & IOS',
        subtitle4: 'Web sahypalary we mobil programmalar',
        subtitle5: 'Motion Graphics / Logo Animation / UI/UX Animation / 3D Animation'
      }
    },
    footer: {
      title1: 'Habarlaşyň',
      title2: 'Biziň salgymyz',
      title3: 'E-poçta ugratmak'
    },
  },
  RU: {
    nav: {
      title1: "Главная",
      title2: "О нас",
      title3: "Аппаратное обеспечение",
      title4: "Программное обеспечение",
      title5: "Проекты",
      title6: "Свяжитесь с нами",
    },
    home: {
      title1: "Позвольте нам сделать ваше видение реальностью",
      title2: "Чем мы занимаемся",
      cards: {
        title1: 'Полный спектр аппаратных решений',
        title2: 'Разработка сайтов любой сложности',
        title3: 'Разработка мобильных приложений',
        title4: 'UI / UX дизайн приложений',
        title5: 'Моушн дизайн',
        subtitle1: 'Серверы / Сетевое оборудование / Компьютеры',
        subtitle2: 'Сайты визитки / Электронная коммерция / LMS / CRM',
        subtitle3: 'Android & IOS',
        subtitle4: 'Веб-сайты и мобильные приложения',
        subtitle5: 'Моушн графика / Анимация логотипов / Анимация UI/UX / 3D Анимация'
      }
    },
    footer: {
      title1: 'Позвоните',
      title2: 'Наш адрес',
      title3: 'Отправить Email'
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
        title1: 'Full range of hardware solutions',
        title2: 'Development of websites of any complexity',
        title3: 'Mobile application development',
        title4: 'UI / UX design of applications',
        title5: 'Motion design',
        subtitle1: 'Servers / Networking equipment / Computers',
        subtitle2: 'Business card sites / E-commerce / LMS / CRM',
        subtitle3: 'Android & IOS',
        subtitle4: 'Websites and mobile applications',
        subtitle5: 'Motion Graphics / Logo Animation / UI/UX Animation / 3D Animation'
      }
    },
    footer: {
      title1: 'Call',
      title2: 'Our Address',
      title3: 'Send An Email'
    },
  },
};

export const i18n = createI18n({
  locale: "EN",
  fallbackLocale: "EN",
  messages,
});
