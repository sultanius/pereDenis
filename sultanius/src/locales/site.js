/** Единый словарь: ключ → { ru, en } */

export const site = {
    nav: {
        home: { ru: 'ГЛАВНАЯ', en: 'HOME' },
        about: { ru: 'ОБО МНЕ', en: 'ABOUT' },
        projects: { ru: 'ПРОЕКТЫ', en: 'PROJECTS' },
        price: { ru: 'СТОИМОСТЬ', en: 'PRICING' },
        contacts: { ru: 'КОНТАКТЫ', en: 'CONTACTS' },
    },

    firstMain: {
        heroLine1: { ru: 'АРХИТЕКТУРА', en: 'ARCHITECTURE' },
        heroLine2: { ru: 'КОМФОРТНОЙ ЖИЗНИ', en: 'FOR COMFORTABLE LIVING' },
    },

    firstMainMobile: {
        line1: { ru: 'АРХИТЕКТУРА', en: 'ARCHITECTURE' },
        line2: { ru: 'КОМФОРТНОЙ', en: 'COMFORTABLE' },
        line3: { ru: 'ЖИЗНИ', en: 'LIVING' },
    },

    about: {
        title: { ru: 'ДЕНИС ПЕРЕВОЗНИКОВ', en: 'DENIS PEREVOZNIKOV' },
        p1: {
            ru: 'Начиная каждый проект, целиком и полностью отдаю ему время и себя, с первой личной встречи с заказчиком, заканчивая различными деталями в архитектуре или при выборе декора в интерьере.',
            en: 'With every project, I give it my full time and attention—from the first in-person meeting with the client to the smallest details in architecture or interior decor choices.',
        },
        p2: {
            ru: 'Сфера проектирования частных пространств особенно близка мне. В этом случае, ты более конкретно, с особым трепетом стараешься сделать идеально для конкретного заказчика и от этого получаю максимальное удовольствие и мотивацию.',
            en: 'Private space design is especially close to my heart. There you work more personally, striving with special care to make everything perfect for a specific client—and that gives me the greatest joy and motivation.',
        },
        p3: {
            ru: 'Быть архитектором, значит каждый день строить в голове какие-то образы, искать, смотреть и сохранять всевозможные текстуры объемы, ракурсы, технологии и делать зарисовки. И не важно пригодится это или нет, чаще всего все это делается на подсознании и в последствие может всплыть в люблю секунду.',
            en: 'Being an architect means building images in your mind every day—searching, observing, saving textures, volumes, angles, technologies, and sketching. Whether it will be useful or not, most of it happens subconsciously and can surface at any moment.',
        },
        principlesTitle: { ru: 'ПРИНЦИПЫ МОЕЙ РАБОТЫ', en: 'HOW I WORK' },
        projectsBtn: { ru: 'ПРОЕКТЫ', en: 'PROJECTS' },
        comfortTitle: { ru: 'Комфорт и удобство', en: 'Comfort and ease' },
        comfortBody: {
            ru: 'Пространство должно быть эргономичным и удобным для жизни каждый день',
            en: 'Space should be ergonomic and comfortable to live in every day',
        },
        aestheticsTitle: { ru: 'Эстетика и индивидуальность', en: 'Aesthetics and individuality' },
        aestheticsBody: {
            ru: 'Дом отражает личность хозяина, а не просто следует трендам',
            en: 'A home reflects its owner’s personality, not just trends',
        },
        practicalTitle: { ru: 'Практичность', en: 'Practicality' },
        practicalBody: {
            ru: 'Использую решения, которые служат годами и упрощают эксплуатацию',
            en: 'I use solutions that last for years and simplify day-to-day use',
        },
        feasibleTitle: { ru: 'Реализуемость проекта', en: 'Buildable design' },
        feasibleBody: {
            ru: 'Проектирую то, что реально построить в срок и в бюджет',
            en: 'I design what can actually be built on time and on budget',
        },
    },

    stats: {
        homesDesigned: { ru: 'Домов спроектировано', en: 'Homes designed' },
        inProgress: { ru: 'На стадии реализации', en: 'Under construction' },
        completed: { ru: 'Завершенных проектов', en: 'Completed projects' },
        timeline: { ru: 'Месяца срок проекта', en: 'Months project timeline' },
    },

    footer: {
        contacts: { ru: 'КОНТАКТЫ', en: 'CONTACTS' },
        privacy: { ru: 'Политика конфиденциальности', en: 'Privacy policy' },
        discuss: { ru: 'ОБСУДИМ ПРОЕКТ', en: "LET'S DISCUSS YOUR PROJECT" },
        namePh: { ru: 'Имя*', en: 'Name*' },
        emailPh: { ru: 'Email*', en: 'Email*' },
        phonePh: { ru: 'Телефон', en: 'Phone' },
        commentPh: { ru: 'Доп.информация', en: 'Additional details' },
        submit: { ru: 'ОТПРАВИТЬ', en: 'SEND' },
        telegramBody: {
            ru: 'Привет, меня зовут {name}. Контакты: тел. {phone}, email {email}. Комментарий: {comment}',
            en: 'Hi, my name is {name}. Phone: {phone}, email: {email}. Note: {comment}',
        },
        alertOk: { ru: 'Сообщение отправлено!', en: 'Message sent!' },
        alertErr: { ru: 'Ошибка отправки', en: 'Failed to send' },
    },

    calc: {
        archTitle: { ru: 'Стоимость архитектурного проекта', en: 'Architectural design cost' },
        interiorTitle: { ru: 'Стоимость дизайна интерьера', en: 'Interior design cost' },
        pickServices: { ru: 'Выберите услуги:', en: 'Select services:' },
        perM2: { ru: 'руб/м²', en: 'RUB/m²' },
        areaLabel: { ru: 'Площадь (м²):', en: 'Area (m²):' },
        rangeMin: { ru: '10 м²', en: '10 m²' },
        rangeMax: { ru: '1000 м²', en: '1000 m²' },
        cta: { ru: 'УЗНАТЬ СТОИМОСТЬ', en: 'REQUEST A QUOTE' },
        arch: {
            1: { ru: 'Эскизный проект', en: 'Sketch design' },
            2: { ru: 'Рабочий проект АР', en: 'Working drawings (architecture)' },
            3: { ru: 'Конструктивный раздел КЖ', en: 'Structural section (RC)' },
            4: { ru: 'Инженерия ВК и ОВ', en: 'MEP (water supply & HVAC)' },
        },
        interior: {
            1: { ru: 'Эскизный проект', en: 'Sketch design' },
            2: { ru: 'Рабочий проект РП', en: 'Working design package' },
        },
    },

    priceProjects: {
        pageTitle: { ru: 'СТОИМОСТЬ ПРОЕКТА', en: 'PROJECT PRICING' },
        archFrom: { ru: 'от 1800 руб\\м2', en: 'from 1,800 RUB/m²' },
        archTitle: { ru: 'АРХИТЕКТУРНЫЙ ПРОЕКТ', en: 'ARCHITECTURAL DESIGN' },
        designFrom: { ru: 'от 2000 руб\\м2', en: 'from 2,000 RUB/m²' },
        designTitle: { ru: 'ДИЗАЙН ИНТЕРЬЕРА', en: 'INTERIOR DESIGN' },
        structFrom: { ru: 'от 450 руб\\м2', en: 'from 450 RUB/m²' },
        structTitle: { ru: 'КОНСТРУКТИВНЫЙ ПРОЕКТ', en: 'STRUCTURAL DESIGN' },
        mepFrom: { ru: 'от 400 руб\\м2', en: 'from 400 RUB/m²' },
        mepTitle: { ru: 'ПРОЕКТ ОВ И ВК', en: 'HVAC & PLUMBING DESIGN' },
        supervisionFrom: { ru: 'от 30 000 руб\\месяц', en: 'from 30,000 RUB/month' },
        supervisionTitle: { ru: 'АВТОРСКИЙ НАДЗОР', en: 'AUTHOR’S SUPERVISION' },
    },

    mobileMenu: {
        writeMe: { ru: 'НАПИСАТЬ МНЕ', en: 'CONTACT ME' },
    },

    contacts: {
        headline1: { ru: 'ОТКРЫТ ДЛЯ ПРОЕКТОВ', en: 'OPEN FOR PROJECTS' },
        headline2: { ru: 'В ЛЮБОЙ ТОЧКЕ МИРА', en: 'WORLDWIDE' },
        locationLine1: { ru: 'Текущее', en: 'Current' },
        locationLine2: { ru: 'местоположение', en: 'location' },
        city: { ru: 'Санкт-Петербург,', en: 'Saint Petersburg,' },
        country: { ru: 'Россия', en: 'Russia' },
        phoneEmail: { ru: 'Телефон / Email', en: 'Phone / Email' },
        social: { ru: 'Социальные сети', en: 'Social media' },
    },

    projectsPage: {
        title: { ru: 'ПРОЕКТЫ', en: 'PROJECTS' },
        intro1: {
            ru: 'Каждый проект, который я реализую, отражает нашу философию минимализма и стремление к идеальному балансу между стилем и функциональностью',
            en: 'Every project I deliver reflects a minimalist philosophy and a drive for the right balance between style and function.',
        },
        intro2: {
            ru: 'Я горжусь тем, что мои дома становятся не просто архитектурными сооружениями, а пространствами для жизни, наполненными комфортом и светом',
            en: 'I’m proud that my houses become more than buildings—living spaces filled with comfort and light.',
        },
        intro3: {
            ru: 'В этом разделе представлены некоторые из моих самых успешных проектов, которые подчеркивают наш подход к индивидуальности и вниманию к деталям',
            en: 'Here are some of my strongest projects, highlighting individuality and attention to detail.',
        },
        filterAll: { ru: 'Все проекты', en: 'All projects' },
        filterHouses: { ru: 'Частные дома', en: 'Private houses' },
        filterInterior: { ru: 'Интерьер', en: 'Interiors' },
        selectStage: { ru: 'Стадия', en: 'Stage' },
        optConstruction: { ru: 'Строительство', en: 'Under construction' },
        optTypical: { ru: 'Типовой проект', en: 'Standard package' },
        optDone: { ru: 'Реализован', en: 'Built' },
        optWaiting: { ru: 'Ожидание строительства', en: 'Pre-construction' },
        optConcept: { ru: 'Концепт', en: 'Concept' },
    },

    projectMeta: {
        year: { ru: 'Год', en: 'Year' },
        stage: { ru: 'Стадия', en: 'Stage' },
        area: { ru: 'Площадь', en: 'Area' },
        author: { ru: 'Автор', en: 'Author' },
        authorName: { ru: 'Денис Перевозников', en: 'Denis Perevoznikov' },
    },

    stages: {
        construction: { ru: 'Строительство', en: 'Under construction' },
        standard_design: { ru: 'Типовой проект', en: 'Standard design package' },
        completed: { ru: 'Реализован', en: 'Completed' },
        pending_build: { ru: 'Ожидание строительства', en: 'Awaiting construction' },
        concept: { ru: 'Концепт', en: 'Concept' },
    },

    projectHeader: {
        writeMe: { ru: 'Написать мне', en: 'Contact me' },
    },
}

/** @param {import('vue').Ref<string>} localeRef */
export function localizeSquare(str, localeRef) {
    if (!str || typeof str !== 'string') return str
    if (localeRef?.value !== 'en') return str
    return str.replace(/\s*м2/gi, ' m²').replace(/\s*м²/gi, ' m²')
}
