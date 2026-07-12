const STORAGE = {
  theme: "mgimo-stp-theme",
  lang: "mgimo-stp-lang",
};

const PROJECT_ORDER = ["neiro", "atlas", "digital-systems"];

const COOPERATION_FORM = {
  endpoint: "https://formsubmit.co/ajax/project_office@inno.mgimo.ru",
  email: "project_office@inno.mgimo.ru",
  subject: "[СТП МГИМО] Новая заявка на сотрудничество",
};

const CONTACT_LOCATION = {
  coordinates: [55.6725952, 37.4857089],
  zoom: 15,
};

const CONTACT_TILESETS = {
  light: "https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png",
  dark: "https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png",
};

let contactMap = null;
let contactMarker = null;
let contactTileLayer = null;
let contactMapTheme = null;

const content = {
  ru: {
    metaTitle: "СТП МГИМО",
    metaDescription: "Стратегические технологические проекты МГИМО: витрина проектного портфеля, консорциумы и партнёрство.",
    nav: {
      about: "О проектах",
      projects: "СТП",
      partners: "Партнёрам",
      contacts: "Контакты",
      cta: "Сотрудничество",
    },
    hero: {
      eyebrow: "СТРАТЕГИЯ • ТЕХНОЛОГИИ • ПАРТНЁРСТВО",
      title: "Стратегические технологические проекты МГИМО",
      copy: "Витрина проектного портфеля МГИМО: консорциумы, прикладная экспертиза и решения для партнёров в логике программы «Приоритет 2030».",
      primary: "Сотрудничество",
      secondary: "Смотреть проекты",
      alt: "Экосистема стратегических технологических проектов МГИМО",
    },
    proof: [
      { title: "Модель", copy: "Консорциум под задачу" },
      { title: "Экспертиза", copy: "Исследования и платформы" },
      { title: "Пилот", copy: "Проверка решений" },
      { title: "Внедрение", copy: "Масштабирование эффекта" },
    ],
    audience: {
      title: "Для кого",
      items: [
        { title: "Государство", copy: "Стратегические приоритеты" },
        { title: "Бизнес", copy: "Рост и эффективность" },
        { title: "Вузы и НИИ", copy: "Исследования и кадры" },
        { title: "Техпартнёры", copy: "Интеграция решений" },
      ],
    },
    activity: {
      title: "Что делает МГИМО",
      items: [
        { title: "Исследования", copy: "Аналитика и прогнозы" },
        { title: "Цифровые платформы", copy: "Данные и сервисы" },
        { title: "Пилоты", copy: "Проверка гипотез" },
        { title: "Образование", copy: "Компетенции команд" },
        { title: "Внедрение", copy: "Масштабирование" },
      ],
    },
    projects: {
      title: "Избранные СТП",
      more: "Подробнее →",
    },
    projectPage: {
      back: "← К витрине СТП",
      eyebrow: "СТРАТЕГИЧЕСКИЙ ТЕХНОЛОГИЧЕСКИЙ ПРОЕКТ",
      contentTitle: "Материалы проекта",
    },
    flow: {
      title: "Как устроено партнёрство",
      steps: [
        { title: "Задача", copy: "Фиксируем цель" },
        { title: "Консорциум", copy: "Собираем партнёров" },
        { title: "Пилот", copy: "Проверяем решение" },
        { title: "Внедрение", copy: "Масштабируем эффект" },
      ],
    },
    cta: {
      title: "Опишите задачу — предложим формат сотрудничества",
      copy: "Подберём релевантный СТП, экспертов и партнёров.",
      contact: "Сотрудничество",
    },
    contact: {
      label: "ПРОЕКТНЫЙ ОФИС МГИМО",
      title: "Понравились проекты? Свяжитесь с нами!",
      phoneLabel: "Телефон",
      emailLabel: "E-mail",
      addressLabel: "Адрес",
      address: "Москва, просп. Вернадского, 76, корп. В",
      mapFallback: "Карта кампуса МГИМО",
      mapAria: "Интерактивная карта кампуса МГИМО на проспекте Вернадского",
      mapMarker: "МГИМО, проспект Вернадского, 76",
    },
    cooperation: {
      title: "Сотрудничество",
      intro: "Расскажите о задаче — проектный офис подберёт подходящий СТП и формат взаимодействия.",
      close: "Закрыть форму",
      project: "Интересующий СТП",
      projectNone: "Не выбран",
      fullName: "ФИО",
      phone: "Телефон",
      email: "E-mail",
      organization: "Организация",
      message: "Сообщение",
      consentBefore: "Я даю согласие на ",
      consentLink: "обработку персональных данных",
      consentAfter: ".",
      submit: "Отправить заявку",
      sending: "Отправляем…",
      successTitle: "Заявка отправлена",
      successCopy: "Спасибо. Проектный офис свяжется с вами по указанным контактам.",
      successClose: "Закрыть",
      error: "Не удалось отправить заявку. Попробуйте ещё раз или напишите на почту проектного офиса.",
      emailFallback: "Написать на project_office@inno.mgimo.ru",
      validation: {
        required: "Заполните это поле.",
        name: "Укажите ФИО полностью.",
        email: "Проверьте адрес электронной почты.",
        message: "Сообщение должно содержать не менее 10 символов.",
        consent: "Необходимо согласие на обработку персональных данных.",
      },
    },
    consentPage: {
      metaTitle: "Согласие на обработку персональных данных | СТП МГИМО",
      metaDescription: "Условия обработки данных, передаваемых через форму сотрудничества СТП МГИМО.",
      back: "← Вернуться на сайт",
      eyebrow: "СТП МГИМО",
      title: "Согласие на обработку персональных данных",
      intro: "Отправляя форму сотрудничества, пользователь добровольно предоставляет данные для обработки обращения проектным офисом МГИМО.",
      purposeTitle: "Цель обработки",
      purposeCopy: "Рассмотрение предложения о сотрудничестве, подбор подходящего стратегического технологического проекта и обратная связь с заявителем.",
      dataTitle: "Состав данных",
      dataCopy: "ФИО, телефон, адрес электронной почты, организация, выбранный проект, текст сообщения, язык интерфейса и адрес страницы отправки.",
      transferTitle: "Передача и хранение",
      transferCopy: "Данные направляются на project_office@inno.mgimo.ru через сервис FormSubmit. Согласно документации FormSubmit, отправления могут храниться сервисом до 30 дней.",
      withdrawalTitle: "Отзыв согласия",
      withdrawalCopy: "Запрос на уточнение, ограничение обработки или удаление данных можно направить на project_office@inno.mgimo.ru.",
    },
    logos: {
      mgimo: "МГИМО Университет",
      priority: "Приоритет 2030",
      ministry: "Минобрнауки России",
    },
    projectDetails: {
      neiro: {
        shortTitle: "Нейро- и AI-платформы",
        cardCopy: "Нейромаркетинговые и нейролингвистические исследования, генеративные нейросети и AI-инструменты для образования.",
        title: "Создание комплекса аппаратных и платформенных решений в сфере нейромаркетинговых, нейролингвистических исследований, генеративных нейросетей",
        summary: "Проект направлен на создание интегрированного аппаратного и платформенного комплекса для проведения нейромаркетинговых, нейролингвистических исследований и разработки генеративных нейросетей, ориентированного на исследовательские, образовательные и коммерческие задачи. В основе проекта лежит развитие существующей технологической базы, что позволит повысить качество образовательного процесса, усилить исследования в области стратегического маркетинга, клиентского поведения и прикладной лингвистики, а также создать экспериментальную платформу для Центра искусственного интеллекта.",
        sourceUrl: "https://2030.mgimo.ru/projects/2025-2036/neiro",
        imageAlt: "Нейро- и AI-платформы МГИМО",
        sections: [
          {
            heading: "Описание проекта",
            paragraphs: [
              "Проект направлен на создание интегрированного аппаратного и платформенного комплекса для проведения нейромаркетинговых, нейролингвистических исследований и разработки генеративных нейросетей, ориентированного на исследовательские, образовательные и коммерческие задачи. В основе проекта лежит развитие существующей технологической базы, что позволит повысить качество образовательного процесса, усилить исследования в области стратегического маркетинга, клиентского поведения и прикладной лингвистики, а также создать экспериментальную платформу для Центра искусственного интеллекта.",
            ],
          },
          {
            heading: "Команда",
            items: [
              "О.М.Хотяшева, директор Института маркетинга и предпринимательства, руководитель Стратегического технологического проекта 3",
              "М.А.Слесарев, директор Бизнес-инкубатора Института маркетинга и предпринимательства",
              "Е.В.Погребняк, проректор по цифровой трансформации, руководитель Стратегического технологического проекта 2, Цифровой кафедры",
              "И.С.Путинцев, проректор по языковой и довузовской подготовке",
              "Н.А.Чес, заместитель начальника Управления языковой подготовки",
              "В.А.Иконникова, декан факультета лингвистики и межкультурной коммуникации",
              "О.Е.Клепиков, заведующий Лабораторией нейромаркетинга МГИМО, основатель PSYCHEA и inFolio Research Group",
            ],
          },
          {
            heading: "Устойчивая экосистема маркетинга и предпринимательства университета на основе новейших нейротехнологий — учебные курсы, конкурсы, хакатоны",
            lead: "По проекту достигнуты следующие результаты:",
            items: [
              "3-й по счету конкурс инновационных студенческих бизнес-проектов «Нейро Стартап» и Первый межвузовский промпт-хакатон в области маркетинга и бизнеса MGIMO GPT Challenge 2025 – соревнование, направленное на развитие навыков промпт-инжиниринга и творческого использования больших языковых моделей (LLM).",
              "Также на базе Центра генеративных нейросетей разработан углубленный курс по промпт-инжинирингу, обобщающий все наработки, техники и примеры эффективного применения ИИ, накопленные за 4 года. Курс делает акцент на комплексном подходе, включая работу с локальными LLM-моделями и подбор моделей под конкретные задачи.",
              "Запущена специализация «Отраслевой нейромаркетинг» в рамках прикладной магистерской программы «Отраслевой маркетинг товаров и услуг». Практические занятия специализации, а также выпускные проекты реализуются на базе Лаборатории с применением специализированного оборудования.",
              "Запущена программа ДПО «Нейротехнологии в современном бизнесе», включающая модули «Нейромаркетинг» и «Генеративные нейросети в маркетинге». Модули реализуются соответственно на базе Лаборатории нейромаркетинга и Центра генеративных нейросетей.",
              "На базе Лаборатории нейромаркетинга и Центра генеративных нейросетей разработан прототип системы глубокого психодиагностического и профориентационного скрининга, работающей на базе больших языковых моделей (LLM) через интерактивное взаимодействие с пользователем (чат-бот).",
              "На базе Лаборатории нейромаркетинга запущен бесплатный сервис для студентов МГИМО – нейропрофилирование и выстраивание индивидуальной карьерной траектории. Сервис уже апробирован на фокус-группе из более 50 студентов программ ИМИП и в настоящее время масштабируется на студентов бакалавриата и магистратур других факультетов.",
              "Разработано и внедрено в программу прикладных магистратур по маркетингу ОМТУ и «Цифровой маркетинг» инновационное учебное пособие по английскому языку для маркетологов. Пособие имеет нестандартный формат, предполагает работу с экрана смартфона и высокую степень адаптации под конкретного учащегося, а также включает существенную интерактивную часть, реализованную с помощью ИИ.",
              "Запущен портал «ИИ-проекты ИМИП МГИМО», на котором публикуется информация обо всех инновационных проектах в области ИИ, генеративных нейросетей и нейромаркетинга ИМИП МГИМО.",
            ],
          },
          {
            heading: "Центр нейролингвистических исследований когнитивного потенциала",
            lead: "В рамках реализации проектов были получены следующие результаты:",
            items: [
              "Запуск инновационной магистерской программы «Когнитивные исследования и нейротехнологии в международных отношениях».",
              "Реализация серии экспериментов в рамках программы нейролингвистических исследований.",
              "Проект совершенствования образовательных практик в области нейролингвистики – научно-исследовательская работа (НИР). Цель данного исследования – выявить разницу в работе с нарушениями связности текстов у профессиональных переводчиков и студентов старших курсов бакалавриата и магистратуры и на основе полученных результатов разработать методические рекомендации для подготовки устных переводчиков высшей квалификации. Конечным продуктом НИР станут методические рекомендации, основанные на результатах проведенных экспериментов, в том числе с применением технологии айтрекинга. В перспективе результаты данной работы могут быть использованы для кардинального изменения подходов к преподаванию перевода и иностранных языков, а также для создания новых курсов и программ повышения квалификации.",
              "Разработан лингводидактический интеллектуальный роботизированный ассистент преподавателя (ЛИРА) – инструмент, призванный совершенствовать подготовку учебных материалов для обучения иностранным языкам с помощью ИИ.",
            ],
          },
          {
            heading: "Прикладная лингвистика, большие языковые модели. Исследования, платформенные решения, VR",
            lead: "По проекту достигнуты следующие результаты:",
            items: [
              "Старт совместного проекта по сертификации лингвистических компетенций MGIMO Professional Language Test.",
              "Терминологическая база данных. Платформа, состоящая из двух основных модулей: пополняемых глоссариев профессиональной терминологии на английском языке (например, в сфере юриспруденции или контрактного/корпоративного права, глоссарий о референдумах) и инструмента для анализа текста. Разработчики работают сейчас над новым обновлением – пользователи смогут загружать документы, а система будет автоматически подсвечивать в них сложную или новую лексику, сопровождая ее ссылками на глоссарии. Пилотная версия продукта будет представлена в ноябре 2025 года.",
              "Параллельно ведется работа по масштабированию проекта обучения иностранным языкам с использованием технологий виртуальной реальности (VR). Проект направлен на создание и внедрение в учебный процесс интерактивных VR-сценариев для освоения языковых навыков.",
            ],
          },
          {
            heading: "Автоматизированный анализ и оценка качества электронных учебных материалов с помощью средств ИИ",
            paragraphs: [
              "Проект направлен на создание автоматизированных средств для анализа качества электронных образовательных материалов, которые помогут в работе методологам, авторам и заказчикам образовательных программ, дисциплин и учебных модулей. В развитии проекта будут созданы технические средства, обеспечивающие улучшение электронных материалов. Использованные наработки будут полезны в экономической ценности образовательного контента на новых рынках данных, например, лицензирование учебных материалов одного вуза для использования в других вузах.",
              "Целью проекта является разработка новых технических средств, которые бы могли проводить как предварительный анализ качества образовательных материалов в интересах методологов, так выдавать автоматизированную оценку качества исходя из критериев набора заданных критериев, правил оценки и использованных для такой оценки данных.",
            ],
            lead: "Достигнутые результаты:",
            items: [
              "Спроектирована структура представления данных электронных учебных материалов. В нее входят элементы РПД, материалы лекционных, практических и самостоятельных занятий, фонды оценочных средств и иные материалы и сведения, необходимые для оценки качества курса. Помимо этого, реализован импорт данных из ЭИОС Moodle в данной структуре.",
              "Разработан набор из 6 групп критериев оценки качества электронных образовательных материалов, включая оценку отдельных элементов курса, их связанности и взаимного соответствия; программно реализованы первоначальный набор из 8 критериев оценки материалов.",
              "Проведен анализ состава и качества пробной выборки из 26 учебных курсов на МГИМО-Одинцово.",
              "Доклады о проектировании и ходе разработке системы на конференциях Ассоциации содействия цифровому развитию образовательных организаций (июнь 2025 года), Ассоциации ведущих университетов (июль 2025 года).",
              "Подана заявка на конкурс «Старт-ИИ» (очередь 1) Фонда содействия инновациям.",
            ],
          },
        ],
      },
      atlas: {
        shortTitle: "Атласы МГИМО",
        cardCopy: "Геоинформационные технологии, пространственный анализ, базы данных и аналитические продукты для международной деятельности.",
        title: "Атласы МГИМО. Геоинформационные технологии в интересах развития международной деятельности и социально-экономического развития (платформенные решения, базы данных)",
        summary: "Проект ориентирован на разработку и коммерческое распространение информационно-аналитических продуктов, основанных на геоинформационных технологиях, с целью поддержки международной деятельности и социально-экономического развития. Используя пространственный анализ и цифровую обработку данных, платформа предоставляет пользователям инструменты для визуализации и принятия модельных управленческих и инвестиционных решений, обеспечивая адаптируемые интерфейсы и механизм конструкторской настройки запрашиваемых аналитических материалов.",
        sourceUrl: "https://2030.mgimo.ru/projects/2025-2036/atlas",
        imageAlt: "Атласы МГИМО",
        sections: [
          {
            heading: "Описание проекта",
            paragraphs: [
              "Проект ориентирован на разработку и коммерческое распространение информационно-аналитических продуктов, основанных на геоинформационных технологиях, с целью поддержки международной деятельности и социально-экономического развития. Используя пространственный анализ и цифровую обработку данных, платформа предоставляет пользователям инструменты для визуализации и принятия модельных управленческих и инвестиционных решений, обеспечивая адаптируемые интерфейсы и механизм конструкторской настройки запрашиваемых аналитических материалов.",
            ],
          },
          {
            heading: "Команда",
            items: [
              "А.Л.Шахов, начальник Управления научных и инновационных проектов",
              "М.Г.Миронюк, первый заместитель декана Факультета социальных наук НИУ ВШЭ",
              "А.В.Мальгин, проректор по развитию",
              "В.Ю.Саламатов, директор Институт международной торговли и устойчивого развития",
              "В.А.Безвербный, и.о. заведующего кафедрой национальной экономики и экономического регулирования",
              "Е.В.Погребняк, проректор по цифровой трансформации, руководитель Стратегического технологического проекта 2, Цифровой кафедры",
            ],
          },
          {
            heading: "Туристский атлас. Путеводитель инвестора и руководителя",
            lead: "Промежуточные результаты:",
            items: [
              "Продолжена разработка геоинформационной системы и актуализацией данных по туристским регионам, рискам и нормативно-правовой базе.",
              "Проведены исследования запросов инвесторов и анализ факторов риска, результаты интегрированы в платформу для поддержки управленческих решений.",
            ],
          },
          {
            heading: "Атлас внешней торговли и логистики",
            lead: "По проекту достигнуты следующие результаты:",
            items: [
              "Формируется историческая база показателей для определения экспортного потенциала товаров на рынках стран-импортеров.",
              "Идет процесс расчета индекса экспортного потенциала товаров на рынках стран-импортеров.",
              "Работа над моделированием параметров расчета экспортного потенциала товаров на рынках стран-импортеров.",
              "Работа над моделированием изменений экспортного потенциала товаров на рынках стран-импортеров при изменении каких-либо исходных данных в рамках обучения студентов.",
            ],
          },
          {
            heading: "База данных и исследование глобальной демографии, миграции, рынка труда и человеческого капитала",
            paragraphs: [
              "Главная цель консорциума МГИМО и ФНИСЦ РАН – объединение научного и образовательного потенциала двух ведущих российских организаций для проведения фундаментальных и прикладных исследований в сфере цифровой демографии, трансформации трудовых ресурсов и развития человеческого капитала в условиях глобальной технологической конкуренции.",
              "Согласно утвержденному техническому заданию, проект рассчитан на четырехлетний цикл (2025–2028 гг.) и предполагает последовательное выполнение масштабной программы исследований и разработок. Уже в октябре 2025 года предусмотрено достижение первых значимых результатов, которые станут основой для последующих исследований и подтвердят практическую реализуемость поставленных задач.",
            ],
          },
          {
            heading: "Сервисы пространственного моделирования технологических рынков на основе микроданных",
            paragraphs: [
              "Проект представляет собой комплексную систему, предназначенную для сбора и интеграции микроданных из различных распределенных источников. В частности, осуществляется агрегация данных, получаемых из корпоративной отчетности, патентной статистики, научных публикаций и венчурных инвестиций. Для обеспечения интероперабельности и согласованного использования разнородных наборов данных применяется унифицированная онтологическая модель, которая служит базой для их интеграции. Кроме того, в рамках проекта реализуются механизмы верификации и обогащения данных с использованием современных методов машинного обучения. Особое внимание также уделяется образовательным технологиям в области анализа данных, где применяется специализированный инструментарий и методология микроданных.",
              "Целью проекта является разработка базы данных «Национальная торговая статистика — Китай, Индия, Турция».",
            ],
            lead: "Достигнутые результаты:",
            items: [
              "Созданы парсеры данных с национальных сайтов внешнеторговой статистики выбранных стран — Китай, Индия, Турция, собраны данные за текущий год.",
              "Определены процедуры гармонизации исходных данных национальной статистики для проведения ее к сопоставимому виду.",
              "Проведены переговоры с индустриальными партнерами — пользователями аналитических продуктов: Газпромбанк, Московский экспортный центр (МЭЦ), Фонд развития промышленности (ФРП).",
            ],
          },
        ],
      },
      "digital-systems": {
        shortTitle: "Цифровые технические системы",
        cardCopy: "Интеллектуальная аналитическая платформа для международных отношений, мировой экономики и технологических рынков.",
        title: "Цифровые технические системы для анализа данных и исследований международных отношений, мировой экономики и технологических рынков",
        summary: "Проект направлен на создание интеллектуальной аналитической платформы, интегрирующей технологии искусственного интеллекта, машинного обучения и обработки больших данных для мониторинга и прогнозирования международных процессов, включая мировую экономику, технологические рынки и геополитические риски. Платформа агрегирует информацию из различных источников и формирует детализированные аналитические продукты, обеспечивая стратегическое планирование, управление рисками и поддержку российским компаниям на зарубежных рынках.",
        sourceUrl: "https://2030.mgimo.ru/projects/2025-2036/digital-systems",
        imageAlt: "Цифровые технические системы МГИМО",
        sections: [
          {
            heading: "Описание проекта",
            paragraphs: [
              "Проект направлен на создание интеллектуальной аналитической платформы, интегрирующей технологии искусственного интеллекта, машинного обучения и обработки больших данных для мониторинга и прогнозирования международных процессов, включая мировую экономику, технологические рынки и геополитические риски. Платформа агрегирует информацию из различных источников и формирует детализированные аналитические продукты, обеспечивая стратегическое планирование, управление рисками и поддержку российским компаниям на зарубежных рынках.",
            ],
          },
          {
            heading: "Команда",
            items: [
              "А.А.Байков, проректор по научной работе, руководитель Стратегического технологического проекта 1",
              "В.Е.Таран, зам. декана Факультета международных отношений по международным программам",
              "Н.Ю.Силаев, директор Лаборатории интеллектуального анализа данных",
              "М.Ю.Архипова, профессор кафедры финансов и финансового менеджмента",
              "Е.В.Погребняк, проректор по цифровой трансформации, руководитель Стратегического технологического проекта 2, Цифровой кафедры",
            ],
          },
          {
            heading: "Развитие системы интеллектуального анализа данных в области международных отношений путем интеграции с существующими техническими решениями",
            lead: "В рамках проекта проделана следующая работа:",
            items: [
              "Завершена разработка внешнего интерфейса к Системе интеллектуального анализа данных в области международных отношений.",
              "Проведена техническая подготовка на серверных мощностях МГИМО по развертыванию внешнего интерфейса.",
              "Проведены переговоры и получено коммерческое предложение от АО \"Крибрум\" на проведение МГИМО закупки лицензии Системы для широкого круга пользователей в МГИМО.",
            ],
          },
          {
            heading: "Прикладные исследования на базе информационно-аналитической платформы в области международных отношений",
            lead: "По проекту достигнуты следующие промежуточные результаты:",
            items: [
              "Разработан пилотный проект базы знаний по мировым технологиям и опыту БПЛА в части её архитектуры и основных принципов функционирования: система способна обнаруживать основные модели беспилотников, их производителей, а также основные инциденты, новости и эпизоды сотрудничества по БПЛА в мировых СМИ на русском и иностранном языках.",
              "Разработана архитектура исследования развития коммерческих космических технологий США, проведены установочные и рабочие встречи исследовательского коллектива проекта. В проект впервые интегрировано подразделение Научного студенческого общества МГИМО на правах образовательной стажировки.",
              "Создана матрица-классификатор для пилотной базы знаний о технологическом развитии избранных стран Африки. Программа ИМИ по исследованию Африки ведёт подготовительную исследовательскую работу по выделению основных трендов технологического развития до создания базы знаний.",
              "В Системе интеллектуального анализа данных проведено подключение новых источников для мониторинга СМИ стран мира, проведена ревизия действующих источников, устранены некорректно работающие сборщики.",
              "Введен функционал автоматической разметки отдельных событий и концептов типа \"встреча\", \"звонок\", \"протест\", функционирующий с 90% точностью.",
            ],
            paragraphs: [
              "Ведётся дальнейшая работа с ИСП РАН по совершенствованию функционала Системы интеллектуального анализа данных в области международных отношений МГИМО: в 2025 году разработано ТЗ по модификациям и доработкам, завершены 70% работ на 2025 год.",
            ],
          },
          {
            heading: "Дата-продукты, статистические сервисы для поддержки работы российских технологических компаний на зарубежных рынках",
            paragraphs: [
              "Ключевой вектор проекта – оптимизация процесса сбора и анализа коммерчески релевантной информации за счет использования технологий машинного анализа данных и ИИ. Проект носит комплексный характер и ставит своей целью разработку практической методики создания в интересах заказчиков дата-продуктов, направленных на фасилитацию принятия бизнес-решений и создание дата-продукта, на основе машинного анализа массива данных в открытых источниках.",
            ],
            lead: "Промежуточные результаты:",
            items: [
              "Созданы референтные наборы данных по странам мира и международной экономической статистике; наборы данных использованы в учебных модулях Цифровой кафедры (программы «Международные технологические рынки», «Экономика данных», сквозной модуль по программированию).",
            ],
          },
        ],
      },
    },
  },
  en: {
    metaTitle: "MGIMO STP",
    metaDescription: "MGIMO Strategic Technological Projects: project portfolio, consortia and partnership formats.",
    nav: {
      about: "About",
      projects: "STP",
      partners: "Partners",
      contacts: "Contacts",
      cta: "Cooperation",
    },
    hero: {
      eyebrow: "STRATEGY • TECHNOLOGY • PARTNERSHIP",
      title: "MGIMO Strategic Technological Projects",
      copy: "A showcase of MGIMO’s project portfolio: consortia, applied expertise and partner-ready solutions within the Priority 2030 logic.",
      primary: "Cooperation",
      secondary: "View projects",
      alt: "MGIMO strategic technological projects ecosystem",
    },
    proof: [
      { title: "Model", copy: "Consortium for the task" },
      { title: "Expertise", copy: "Research and platforms" },
      { title: "Pilot", copy: "Solution validation" },
      { title: "Launch", copy: "Scaling the effect" },
    ],
    audience: {
      title: "For Whom",
      items: [
        { title: "Government", copy: "Strategic priorities" },
        { title: "Business", copy: "Growth and efficiency" },
        { title: "Universities and R&D", copy: "Research and talent" },
        { title: "Tech partners", copy: "Solution integration" },
      ],
    },
    activity: {
      title: "What MGIMO Does",
      items: [
        { title: "Research", copy: "Analytics and forecasts" },
        { title: "Digital platforms", copy: "Data and services" },
        { title: "Pilots", copy: "Hypothesis testing" },
        { title: "Education", copy: "Team competencies" },
        { title: "Launch", copy: "Scaling" },
      ],
    },
    projects: {
      title: "Featured STP",
      more: "Learn more →",
    },
    projectPage: {
      back: "← Back to STP showcase",
      eyebrow: "STRATEGIC TECHNOLOGICAL PROJECT",
      contentTitle: "Project materials",
    },
    flow: {
      title: "How Partnership Works",
      steps: [
        { title: "Task", copy: "Define the goal" },
        { title: "Consortium", copy: "Assemble partners" },
        { title: "Pilot", copy: "Validate the solution" },
        { title: "Launch", copy: "Scale the effect" },
      ],
    },
    cta: {
      title: "Describe the task and we will propose a cooperation format",
      copy: "We will select the relevant STP, experts and partners.",
      contact: "Cooperation",
    },
    contact: {
      label: "MGIMO PROJECT OFFICE",
      title: "Interested in the projects? Get in touch with us!",
      phoneLabel: "Phone",
      emailLabel: "E-mail",
      addressLabel: "Address",
      address: "Moscow, 76 Vernadsky Avenue, Building V",
      mapFallback: "MGIMO campus map",
      mapAria: "Interactive map of the MGIMO campus on Vernadsky Avenue",
      mapMarker: "MGIMO, 76 Vernadsky Avenue",
    },
    cooperation: {
      title: "Cooperation",
      intro: "Tell us about your task and the project office will suggest the relevant STP and cooperation format.",
      close: "Close form",
      project: "STP of interest",
      projectNone: "Not selected",
      fullName: "Full name",
      phone: "Phone",
      email: "E-mail",
      organization: "Organization",
      message: "Message",
      consentBefore: "I consent to the ",
      consentLink: "processing of my personal data",
      consentAfter: ".",
      submit: "Submit request",
      sending: "Sending…",
      successTitle: "Request submitted",
      successCopy: "Thank you. The project office will contact you using the details provided.",
      successClose: "Close",
      error: "The request could not be sent. Please try again or contact the project office by e-mail.",
      emailFallback: "E-mail project_office@inno.mgimo.ru",
      validation: {
        required: "Complete this field.",
        name: "Enter your full name.",
        email: "Check the e-mail address.",
        message: "The message must contain at least 10 characters.",
        consent: "Consent to personal data processing is required.",
      },
    },
    consentPage: {
      metaTitle: "Personal Data Processing Consent | MGIMO STP",
      metaDescription: "Terms for processing data submitted through the MGIMO STP cooperation form.",
      back: "← Back to the website",
      eyebrow: "MGIMO STP",
      title: "Consent to Personal Data Processing",
      intro: "By submitting the cooperation form, the user voluntarily provides data so that the MGIMO project office can process the request.",
      purposeTitle: "Purpose",
      purposeCopy: "Reviewing a cooperation proposal, selecting the relevant strategic technological project and contacting the applicant.",
      dataTitle: "Data processed",
      dataCopy: "Full name, phone number, e-mail address, organization, selected project, message, interface language and submission page address.",
      transferTitle: "Transfer and retention",
      transferCopy: "The data is delivered to project_office@inno.mgimo.ru through FormSubmit. According to FormSubmit documentation, submissions may be retained by the service for up to 30 days.",
      withdrawalTitle: "Withdrawal",
      withdrawalCopy: "Requests to correct, restrict or delete the submitted data may be sent to project_office@inno.mgimo.ru.",
    },
    logos: {
      mgimo: "MGIMO University",
      priority: "Priority 2030",
      ministry: "Ministry of Science and Higher Education of the Russian Federation",
    },
    projectDetails: {
      neiro: {
        shortTitle: "Neuro and AI Platforms",
        cardCopy: "Neuromarketing and neurolinguistic research, generative neural networks and AI tools for education.",
        title: "Creation of a Hardware and Platform Solution Suite for Neuromarketing and Neurolinguistic Research and Generative Neural Networks",
        summary: "The project is aimed at creating an integrated hardware and platform suite for neuromarketing and neurolinguistic research and the development of generative neural networks for research, education and commercial tasks. It builds on an existing technology base, improving the quality of education, strengthening research in strategic marketing, customer behavior and applied linguistics, and creating an experimental platform for the Artificial Intelligence Center.",
        sourceUrl: "https://2030.mgimo.ru/projects/2025-2036/neiro",
        imageAlt: "MGIMO neuro and AI platforms",
        sections: [
          {
            heading: "Project Description",
            paragraphs: [
              "The project is aimed at creating an integrated hardware and platform suite for neuromarketing and neurolinguistic research and the development of generative neural networks for research, education and commercial tasks. It builds on an existing technology base, improving the quality of education, strengthening research in strategic marketing, customer behavior and applied linguistics, and creating an experimental platform for the Artificial Intelligence Center.",
            ],
          },
          {
            heading: "Team",
            items: [
              "O.M. Khotyasheva, Director of the Institute of Marketing and Entrepreneurship, Head of Strategic Technological Project 3",
              "M.A. Slesarev, Director of the Business Incubator of the Institute of Marketing and Entrepreneurship",
              "E.V. Pogrebnyak, Vice-Rector for Digital Transformation, Head of Strategic Technological Project 2 and the Digital Department",
              "I.S. Putintsev, Vice-Rector for Language and Pre-University Training",
              "N.A. Ches, Deputy Head of the Language Training Department",
              "V.A. Ikonnikova, Dean of the Faculty of Linguistics and Cross-Cultural Communication",
              "O.E. Klepikov, Head of the MGIMO Neuromarketing Laboratory, Founder of PSYCHEA and inFolio Research Group",
            ],
          },
          {
            heading: "A Sustainable University Marketing and Entrepreneurship Ecosystem Based on Advanced Neurotechnologies: Courses, Competitions and Hackathons",
            lead: "The project has achieved the following results:",
            items: [
              "The third Neuro Startup innovation student business project competition and the first MGIMO GPT Challenge 2025 inter-university prompt hackathon in marketing and business were held to develop prompt engineering skills and creative use of large language models.",
              "The Center for Generative Neural Networks developed an advanced prompt engineering course that summarizes four years of accumulated practices, techniques and examples of effective AI use. The course emphasizes an integrated approach, including work with local LLMs and model selection for specific tasks.",
              "The Industry Neuromarketing specialization was launched within the applied master’s program Industry Marketing of Goods and Services. Practical classes and graduation projects are carried out in the Laboratory using specialized equipment.",
              "The continuing education program Neurotechnologies in Modern Business was launched, including modules in Neuromarketing and Generative Neural Networks in Marketing, implemented at the Neuromarketing Laboratory and the Center for Generative Neural Networks.",
              "The Neuromarketing Laboratory and the Center for Generative Neural Networks developed a prototype deep psychodiagnostic and career guidance screening system based on LLMs and interactive chatbot communication.",
              "The Neuromarketing Laboratory launched a free service for MGIMO students: neuroprofiling and individual career trajectory planning. It has been tested with a focus group of more than 50 students from IMIP programs and is now being scaled to bachelor’s and master’s students from other faculties.",
              "An innovative English-language textbook for marketers was developed and integrated into applied master’s programs in Marketing and Digital Marketing. The textbook is designed for smartphone use, adapts strongly to individual learners and includes substantial AI-powered interactivity.",
              "The IMIP MGIMO AI Projects portal was launched to publish information on innovative AI, generative neural network and neuromarketing projects.",
            ],
          },
          {
            heading: "Center for Neurolinguistic Research of Cognitive Potential",
            lead: "The following results were obtained:",
            items: [
              "Launch of the innovative master’s program Cognitive Studies and Neurotechnologies in International Relations.",
              "Implementation of a series of experiments within the neurolinguistic research program.",
              "A research project on improving educational practices in neurolinguistics. The study aims to identify differences in how professional interpreters and senior undergraduate and graduate students work with coherence issues in texts, and to develop methodological recommendations for training highly qualified interpreters. The final product will be recommendations based on experiments, including eye-tracking technology. In the future, the results can be used to change approaches to teaching translation and foreign languages and to create new courses and professional development programs.",
              "The intelligent robotic language-teaching assistant LIRA was developed to improve the preparation of foreign-language teaching materials using AI.",
            ],
          },
          {
            heading: "Applied Linguistics, Large Language Models, Research, Platform Solutions and VR",
            lead: "The project has achieved the following results:",
            items: [
              "A joint project for certification of linguistic competencies, MGIMO Professional Language Test, was launched.",
              "A terminology database platform was created with two main modules: extensible glossaries of professional English terminology and a text analysis tool. The team is working on an update that will allow users to upload documents and automatically highlight complex or new vocabulary with links to relevant glossaries. A pilot version is planned for November 2025.",
              "Work is underway to scale foreign-language learning using virtual reality. The project is focused on creating and integrating interactive VR scenarios into the educational process for mastering language skills.",
            ],
          },
          {
            heading: "Automated Analysis and Quality Assessment of Electronic Learning Materials Using AI",
            paragraphs: [
              "The project is aimed at creating automated tools for analyzing the quality of electronic educational materials to support methodologists, authors and customers of educational programs, disciplines and modules. Further development will create technical tools that improve electronic materials. These practices may also have economic value in new educational data markets, such as licensing one university’s learning materials for use by other universities.",
              "The goal is to develop new technical tools that can both perform preliminary quality analysis of educational materials for methodologists and provide automated assessment based on specified criteria, evaluation rules and data.",
            ],
            lead: "Achieved results:",
            items: [
              "A data representation structure for electronic learning materials was designed, including course program elements, lecture, practical and independent-study materials, assessment materials and other information needed to evaluate course quality. Import from Moodle was also implemented.",
              "A set of six groups of criteria for assessing the quality of electronic learning materials was developed, including assessment of individual course elements and their coherence; an initial set of eight criteria was implemented in software.",
              "The composition and quality of a test sample of 26 courses at MGIMO-Odintsovo were analyzed.",
              "Reports on system design and development progress were presented at conferences of the Association for Digital Development of Educational Organizations in June 2025 and the Association of Leading Universities in July 2025.",
              "An application was submitted to the Start-AI competition, first track, of the Foundation for Assistance to Innovations.",
            ],
          },
        ],
      },
      atlas: {
        shortTitle: "MGIMO Atlases",
        cardCopy: "Geoinformation technologies, spatial analysis, databases and analytics products for international activity.",
        title: "MGIMO Atlases. Geoinformation Technologies for International Activity and Socio-Economic Development (Platform Solutions and Databases)",
        summary: "The project focuses on developing and commercially distributing information and analytical products based on geoinformation technologies to support international activity and socio-economic development. Using spatial analysis and digital data processing, the platform provides users with tools for visualization and model-based management and investment decisions, with adaptable interfaces and configurable analytical materials.",
        sourceUrl: "https://2030.mgimo.ru/projects/2025-2036/atlas",
        imageAlt: "MGIMO Atlases",
        sections: [
          {
            heading: "Project Description",
            paragraphs: [
              "The project focuses on developing and commercially distributing information and analytical products based on geoinformation technologies to support international activity and socio-economic development. Using spatial analysis and digital data processing, the platform provides users with tools for visualization and model-based management and investment decisions, with adaptable interfaces and configurable analytical materials.",
            ],
          },
          {
            heading: "Team",
            items: [
              "A.L. Shakhov, Head of the Office for Scientific and Innovation Projects",
              "M.G. Mironyuk, First Deputy Dean of the Faculty of Social Sciences at HSE University",
              "A.V. Malgin, Vice-Rector for Development",
              "V.Yu. Salamatov, Director of the Institute of International Trade and Sustainable Development",
              "V.A. Bezverbny, Acting Head of the Department of National Economy and Economic Regulation",
              "E.V. Pogrebnyak, Vice-Rector for Digital Transformation, Head of Strategic Technological Project 2 and the Digital Department",
            ],
          },
          {
            heading: "Tourist Atlas: A Guide for Investors and Executives",
            lead: "Interim results:",
            items: [
              "Development of the geoinformation system continued, with updated data on tourist regions, risks and the regulatory framework.",
              "Investor needs and risk factors were studied; the results were integrated into the platform to support management decisions.",
            ],
          },
          {
            heading: "Foreign Trade and Logistics Atlas",
            lead: "The project has achieved the following results:",
            items: [
              "A historical indicator database is being formed to determine the export potential of goods in importer-country markets.",
              "The export potential index for goods in importer-country markets is being calculated.",
              "Parameters for calculating goods’ export potential in importer-country markets are being modeled.",
              "Changes in export potential under changes in source data are being modeled as part of student training.",
            ],
          },
          {
            heading: "Database and Research on Global Demography, Migration, Labor Markets and Human Capital",
            paragraphs: [
              "The main goal of the MGIMO and FNISC RAS consortium is to combine the scientific and educational potential of two leading Russian organizations for fundamental and applied research in digital demography, transformation of labor resources and development of human capital under global technological competition.",
              "According to the approved terms of reference, the project is planned as a four-year cycle from 2025 to 2028 and involves a sequential large-scale research and development program. The first significant results are expected in October 2025 and will form the basis for subsequent research and confirm practical feasibility.",
            ],
          },
          {
            heading: "Spatial Modeling Services for Technology Markets Based on Microdata",
            paragraphs: [
              "The project is an integrated system for collecting and integrating microdata from distributed sources, including corporate reporting, patent statistics, scientific publications and venture investments. A unified ontological model is used to ensure interoperability and coordinated use of diverse datasets. The project also implements data verification and enrichment mechanisms using modern machine-learning methods. Special attention is paid to educational technologies in data analysis, using specialized tools and a microdata methodology.",
              "The goal of the project is to develop the National Trade Statistics database for China, India and Turkey.",
            ],
            lead: "Achieved results:",
            items: [
              "Parsers were created for national foreign-trade statistics websites of China, India and Turkey, and current-year data was collected.",
              "Procedures were defined for harmonizing source national statistics and bringing them to a comparable format.",
              "Negotiations were held with industrial partners who use analytical products: Gazprombank, Moscow Export Center and the Industrial Development Fund.",
            ],
          },
        ],
      },
      "digital-systems": {
        shortTitle: "Digital Technical Systems",
        cardCopy: "An intelligent analytics platform for international relations, the global economy and technology markets.",
        title: "Digital Technical Systems for Data Analysis and Research in International Relations, the Global Economy and Technology Markets",
        summary: "The project is aimed at creating an intelligent analytical platform that integrates artificial intelligence, machine learning and big data processing technologies to monitor and forecast international processes, including the global economy, technology markets and geopolitical risks. The platform aggregates information from various sources and produces detailed analytical products for strategic planning, risk management and support for Russian companies in foreign markets.",
        sourceUrl: "https://2030.mgimo.ru/projects/2025-2036/digital-systems",
        imageAlt: "MGIMO digital technical systems",
        sections: [
          {
            heading: "Project Description",
            paragraphs: [
              "The project is aimed at creating an intelligent analytical platform that integrates artificial intelligence, machine learning and big data processing technologies to monitor and forecast international processes, including the global economy, technology markets and geopolitical risks. The platform aggregates information from various sources and produces detailed analytical products for strategic planning, risk management and support for Russian companies in foreign markets.",
            ],
          },
          {
            heading: "Team",
            items: [
              "A.A. Baikov, Vice-Rector for Research, Head of Strategic Technological Project 1",
              "V.E. Taran, Deputy Dean of the Faculty of International Relations for International Programs",
              "N.Yu. Silaev, Director of the Laboratory for Intelligent Data Analysis",
              "M.Yu. Arkhipova, Professor at the Department of Finance and Financial Management",
              "E.V. Pogrebnyak, Vice-Rector for Digital Transformation, Head of Strategic Technological Project 2 and the Digital Department",
            ],
          },
          {
            heading: "Development of an Intelligent Data Analysis System for International Relations Through Integration with Existing Technical Solutions",
            lead: "The following work has been completed:",
            items: [
              "Development of an external interface for the Intelligent Data Analysis System in international relations was completed.",
              "Technical preparation was carried out on MGIMO server capacities to deploy the external interface.",
              "Negotiations were held and a commercial proposal was received from Kribrum JSC for MGIMO to purchase a system license for a broad group of users.",
            ],
          },
          {
            heading: "Applied Research Based on an Information and Analytical Platform for International Relations",
            lead: "The project has achieved the following interim results:",
            items: [
              "A pilot knowledge base on global UAV technologies and experience was designed, including its architecture and operating principles: the system can detect major drone models, manufacturers, incidents, news and cooperation episodes in global media in Russian and foreign languages.",
              "An architecture for research on the development of U.S. commercial space technologies was developed; introductory and working meetings of the research team were held. For the first time, a MGIMO Student Scientific Society unit was integrated into the project as an educational internship.",
              "A classifier matrix was created for a pilot knowledge base on technological development in selected African countries. The IMI Africa research program is carrying out preparatory research to identify key trends in technological development before the knowledge base is created.",
              "New sources were connected to the Intelligent Data Analysis System for monitoring global media; existing sources were reviewed and malfunctioning crawlers were fixed.",
              "Automatic tagging of events and concepts such as meetings, calls and protests was introduced and operates with 90% accuracy.",
            ],
            paragraphs: [
              "Further work is underway with ISP RAS to improve the functionality of MGIMO’s Intelligent Data Analysis System for international relations: in 2025, technical specifications for modifications and improvements were prepared and 70% of the planned 2025 work was completed.",
            ],
          },
          {
            heading: "Data Products and Statistical Services to Support Russian Technology Companies in Foreign Markets",
            paragraphs: [
              "The key vector of the project is optimizing the collection and analysis of commercially relevant information using machine data analysis and AI. The project is integrated in nature and aims to develop a practical methodology for creating customer-oriented data products that facilitate business decision-making based on machine analysis of open-source data arrays.",
            ],
            lead: "Interim results:",
            items: [
              "Reference datasets on countries and international economic statistics were created and used in Digital Department modules, including International Technology Markets, Data Economy and an end-to-end programming module.",
            ],
          },
        ],
      },
    },
  },
};

const assetMap = {
  ru: {
    dark: {
      mgimo: "./assets/logos/mgimo-ru-dark.svg",
      priority: "./assets/logos/priority-ru-dark.svg",
      ministry: "./assets/logos/minobrnauki-ru-dark.png",
      hero: "./assets/hero/hero-dark-ru.png",
    },
    light: {
      mgimo: "./assets/logos/mgimo-ru-light.svg",
      priority: "./assets/logos/priority-ru-light.svg",
      ministry: "./assets/logos/minobrnauki-ru-light.png",
      hero: "./assets/hero/hero-light-ru.png",
    },
  },
  en: {
    dark: {
      mgimo: "./assets/logos/mgimo-en-dark.svg",
      priority: "./assets/logos/priority-en-dark.svg",
      ministry: "./assets/logos/minobrnauki-en-dark.png",
      hero: "./assets/hero/hero-dark-en.png",
    },
    light: {
      mgimo: "./assets/logos/mgimo-en-light.svg",
      priority: "./assets/logos/priority-en-light.svg",
      ministry: "./assets/logos/minobrnauki-en-light.png",
      hero: "./assets/hero/hero-light-en.png",
    },
  },
};

const projectAssets = {
  neiro: {
    page: "./project-neiro.html",
    icon: "neuro",
    dark: "./assets/projects/project-neiro-dark.png",
    light: "./assets/projects/project-neiro-light.png",
  },
  atlas: {
    page: "./project-atlas.html",
    icon: "atlas",
    dark: "./assets/projects/project-atlas-dark.png",
    light: "./assets/projects/project-atlas-light.png",
  },
  "digital-systems": {
    page: "./project-digital-systems.html",
    icon: "platform",
    dark: "./assets/projects/project-digital-systems-dark.png",
    light: "./assets/projects/project-digital-systems-light.png",
  },
};

const state = {
  theme: localStorage.getItem(STORAGE.theme) || "auto",
  lang: localStorage.getItem(STORAGE.lang) || detectLanguage(),
};

function detectLanguage() {
  const languages = navigator.languages && navigator.languages.length ? navigator.languages : [navigator.language || "ru"];
  return languages.some((lang) => String(lang).toLowerCase().startsWith("ru")) ? "ru" : "en";
}

function systemTheme() {
  return window.matchMedia && window.matchMedia("(prefers-color-scheme: light)").matches ? "light" : "dark";
}

function resolvedTheme() {
  return state.theme === "auto" ? systemTheme() : state.theme;
}

function getPath(obj, path) {
  return path.split(".").reduce((acc, key) => {
    if (acc == null) return "";
    if (/^\d+$/.test(key)) return acc[Number(key)];
    return acc[key];
  }, obj);
}

function setImage(id, src, alt) {
  const image = document.getElementById(id);
  if (!image) return;
  if (image.getAttribute("src") !== src) image.setAttribute("src", src);
  image.setAttribute("alt", alt);
}

function createElement(tag, className, text) {
  const element = document.createElement(tag);
  if (className) element.className = className;
  if (text != null) element.textContent = text;
  return element;
}

function createContactMapPopup(dictionary) {
  const popup = createElement("div", "contact-map-popup");
  popup.append(
    createElement("strong", null, dictionary.contact.mapMarker),
    createElement("span", null, dictionary.contact.address),
  );
  return popup;
}

function renderContactMap(dictionary) {
  const mapNode = document.getElementById("contactMap");
  if (!mapNode || !window.L) return;

  const theme = resolvedTheme();
  const tileUrl = CONTACT_TILESETS[theme];
  const mapShell = mapNode.closest(".contact-map-shell");

  if (!contactMap) {
    contactMap = L.map(mapNode, {
      center: CONTACT_LOCATION.coordinates,
      zoom: CONTACT_LOCATION.zoom,
      zoomControl: false,
      attributionControl: true,
      scrollWheelZoom: true,
      keyboard: true,
    });
    contactMap.attributionControl.setPrefix(false);
    L.control.zoom({ position: "topright" }).addTo(contactMap);

    const markerIcon = L.divIcon({
      className: "mgimo-map-div-icon",
      html: '<span class="mgimo-map-marker"><img src="./assets/favicon/mgimo-building.svg" alt=""></span>',
      iconSize: [54, 54],
      iconAnchor: [27, 27],
      popupAnchor: [0, -32],
      tooltipAnchor: [0, -30],
    });

    contactMarker = L.marker(CONTACT_LOCATION.coordinates, {
      icon: markerIcon,
      keyboard: true,
      title: dictionary.contact.mapMarker,
      alt: dictionary.contact.mapMarker,
    }).addTo(contactMap);
    contactMarker.bindPopup(createContactMapPopup(dictionary), {
      closeButton: false,
      className: "mgimo-map-popup-shell",
    });
    contactMarker.bindTooltip(dictionary.contact.mapMarker, {
      direction: "top",
      opacity: 1,
      className: "mgimo-map-tooltip",
    });
  }

  if (contactMapTheme !== theme) {
    mapShell?.classList.remove("is-map-ready");
    const nextLayer = L.tileLayer(tileUrl, {
      subdomains: "abcd",
      minZoom: 2,
      maxZoom: 20,
      detectRetina: true,
      crossOrigin: true,
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> &copy; <a href="https://carto.com/attributions">CARTO</a>',
    });
    nextLayer.once("load", () => mapShell?.classList.add("is-map-ready"));
    nextLayer.addTo(contactMap);
    if (contactTileLayer) contactMap.removeLayer(contactTileLayer);
    contactTileLayer = nextLayer;
    contactMapTheme = theme;
    mapNode.dataset.mapTheme = theme;
  }

  if (contactMarker) {
    contactMarker.setPopupContent(createContactMapPopup(dictionary));
    contactMarker.setTooltipContent(dictionary.contact.mapMarker);
    const markerElement = contactMarker.getElement();
    markerElement?.setAttribute("title", dictionary.contact.mapMarker);
    markerElement?.setAttribute("aria-label", dictionary.contact.mapMarker);
  }

  window.requestAnimationFrame(() => contactMap?.invalidateSize(false));
}

let cooperationDialogTrigger = null;

function setFieldError(form, fieldName, message = "") {
  const field = form.elements.namedItem(fieldName);
  const error = form.querySelector(`[data-error-for="${fieldName}"]`);
  if (field instanceof HTMLElement) {
    if (message) field.setAttribute("aria-invalid", "true");
    else field.removeAttribute("aria-invalid");
  }
  if (error) error.textContent = message;
}

function validateCooperationForm(form) {
  const dictionary = content[state.lang].cooperation;
  const fullName = form.elements.namedItem("full_name");
  const phone = form.elements.namedItem("phone");
  const email = form.elements.namedItem("email");
  const organization = form.elements.namedItem("organization");
  const message = form.elements.namedItem("message");
  const consent = form.elements.namedItem("consent");
  const checks = [
    { field: fullName, name: "full_name", valid: fullName.value.trim().length >= 2, error: dictionary.validation.name },
    { field: phone, name: "phone", valid: phone.value.trim().length > 0, error: dictionary.validation.required },
    { field: email, name: "email", valid: email.value.trim().length > 0 && email.validity.valid, error: dictionary.validation.email },
    { field: organization, name: "organization", valid: organization.value.trim().length > 0, error: dictionary.validation.required },
    { field: message, name: "message", valid: message.value.trim().length >= 10, error: dictionary.validation.message },
    { field: consent, name: "consent", valid: consent.checked, error: dictionary.validation.consent },
  ];
  checks.forEach(({ name, valid, error }) => setFieldError(form, name, valid ? "" : error));
  const invalid = checks.find(({ valid }) => !valid);
  invalid?.field.focus();
  return !invalid;
}

function resetCooperationView(dialog) {
  const form = dialog.querySelector("#cooperationForm");
  const success = dialog.querySelector("#cooperationSuccess");
  form.hidden = false;
  success.hidden = true;
  dialog.dataset.submitted = "";
}

function ensureCooperationDialog() {
  if (document.getElementById("cooperationDialog")) return;
  const dialog = createElement("dialog", "cooperation-dialog");
  dialog.id = "cooperationDialog";
  dialog.setAttribute("aria-labelledby", "cooperationDialogTitle");
  dialog.setAttribute("aria-describedby", "cooperationDialogIntro");
  dialog.innerHTML = `
    <div class="cooperation-dialog-shell">
      <header class="cooperation-dialog-header">
        <div>
          <p class="eyebrow" data-i18n="projectPage.eyebrow"></p>
          <h2 id="cooperationDialogTitle" data-i18n="cooperation.title"></h2>
          <p id="cooperationDialogIntro" data-i18n="cooperation.intro"></p>
        </div>
        <button class="dialog-close" type="button" data-dialog-close data-i18n-aria-label="cooperation.close" aria-label="Close"><span aria-hidden="true"></span></button>
      </header>
      <form id="cooperationForm" class="cooperation-form" action="https://formsubmit.co/project_office@inno.mgimo.ru" method="post" novalidate>
        <div class="cooperation-form-grid">
          <label class="form-field form-field--full">
            <span data-i18n="cooperation.project"></span>
            <select name="project" id="cooperationProject">
              <option value="" data-i18n="cooperation.projectNone"></option>
              <option value="neiro" data-i18n="projectDetails.neiro.shortTitle"></option>
              <option value="atlas" data-i18n="projectDetails.atlas.shortTitle"></option>
              <option value="digital-systems" data-i18n="projectDetails.digital-systems.shortTitle"></option>
            </select>
          </label>
          <label class="form-field">
            <span data-i18n="cooperation.fullName"></span>
            <input name="full_name" type="text" minlength="2" maxlength="150" autocomplete="name" required aria-describedby="cooperation-error-name">
            <small id="cooperation-error-name" class="form-error" data-error-for="full_name"></small>
          </label>
          <label class="form-field">
            <span data-i18n="cooperation.phone"></span>
            <input name="phone" type="tel" maxlength="50" autocomplete="tel" required aria-describedby="cooperation-error-phone">
            <small id="cooperation-error-phone" class="form-error" data-error-for="phone"></small>
          </label>
          <label class="form-field">
            <span data-i18n="cooperation.email"></span>
            <input name="email" type="email" maxlength="254" autocomplete="email" required aria-describedby="cooperation-error-email">
            <small id="cooperation-error-email" class="form-error" data-error-for="email"></small>
          </label>
          <label class="form-field">
            <span data-i18n="cooperation.organization"></span>
            <input name="organization" type="text" maxlength="200" autocomplete="organization" required aria-describedby="cooperation-error-organization">
            <small id="cooperation-error-organization" class="form-error" data-error-for="organization"></small>
          </label>
          <label class="form-field form-field--full">
            <span data-i18n="cooperation.message"></span>
            <textarea name="message" rows="5" minlength="10" maxlength="3000" required aria-describedby="cooperation-error-message"></textarea>
            <small id="cooperation-error-message" class="form-error" data-error-for="message"></small>
          </label>
          <label class="consent-field form-field--full">
            <input name="consent" type="checkbox" value="agreed" required aria-describedby="cooperation-error-consent">
            <span><span data-i18n="cooperation.consentBefore"></span><a href="./personal-data-consent.html" target="_blank" rel="noopener noreferrer"><span data-i18n="cooperation.consentLink"></span></a><span data-i18n="cooperation.consentAfter"></span></span>
          </label>
          <small id="cooperation-error-consent" class="form-error form-field--full" data-error-for="consent"></small>
          <input class="form-honeypot" name="_honey" type="text" tabindex="-1" autocomplete="off" hidden>
          <input name="_subject" type="hidden" value="[СТП МГИМО] Новая заявка на сотрудничество">
          <input name="_template" type="hidden" value="table">
        </div>
        <div id="cooperationStatus" class="cooperation-status" role="status" aria-live="polite" hidden></div>
        <div class="cooperation-actions">
          <button class="button button-primary" type="submit"><span data-i18n="cooperation.submit"></span><span aria-hidden="true">→</span></button>
        </div>
      </form>
      <section id="cooperationSuccess" class="cooperation-success" hidden aria-live="polite">
        <span class="cooperation-success-mark" aria-hidden="true">✓</span>
        <h3 data-i18n="cooperation.successTitle"></h3>
        <p data-i18n="cooperation.successCopy"></p>
        <button class="button button-primary" type="button" data-dialog-close><span data-i18n="cooperation.successClose"></span><span aria-hidden="true">→</span></button>
      </section>
    </div>`;
  document.body.appendChild(dialog);

  const form = dialog.querySelector("#cooperationForm");
  const projectSelect = dialog.querySelector("#cooperationProject");
  const status = dialog.querySelector("#cooperationStatus");
  const submitButton = form.querySelector('button[type="submit"]');
  const submitLabel = submitButton.querySelector("span[data-i18n]");
  const currentProject = document.documentElement.dataset.project || "";
  if (PROJECT_ORDER.includes(currentProject)) projectSelect.value = currentProject;

  const clearError = (event) => {
    if (event.target.name) setFieldError(form, event.target.name);
    status.hidden = true;
  };
  form.querySelectorAll("input, select, textarea").forEach((field) => {
    field.addEventListener("input", clearError);
    field.addEventListener("change", clearError);
  });

  const closeDialog = () => dialog.close();
  dialog.querySelectorAll("[data-dialog-close]").forEach((button) => button.addEventListener("click", closeDialog));
  dialog.addEventListener("click", (event) => {
    if (event.target === dialog) dialog.close();
  });
  dialog.addEventListener("close", () => {
    form.querySelectorAll("[aria-invalid]").forEach((field) => field.removeAttribute("aria-invalid"));
    form.querySelectorAll("[data-error-for]").forEach((error) => { error.textContent = ""; });
    status.hidden = true;
    document.documentElement.classList.remove("dialog-open");
    cooperationDialogTrigger?.focus();
    cooperationDialogTrigger = null;
  });

  document.querySelectorAll("[data-open-cooperation]").forEach((trigger) => {
    trigger.addEventListener("click", (event) => {
      event.preventDefault();
      cooperationDialogTrigger = trigger;
      if (dialog.dataset.submitted === "true") resetCooperationView(dialog);
      document.documentElement.classList.add("dialog-open");
      dialog.showModal();
      window.requestAnimationFrame(() => form.elements.namedItem("full_name").focus());
    });
  });

  form.addEventListener("submit", async (event) => {
    event.preventDefault();
    status.hidden = true;
    if (!validateCooperationForm(form)) return;
    const dictionary = content[state.lang];
    submitButton.disabled = true;
    submitLabel.dataset.i18n = "cooperation.sending";
    submitLabel.textContent = dictionary.cooperation.sending;

    const formData = new FormData(form);
    const projectId = projectSelect.value;
    formData.set("project", projectId ? dictionary.projectDetails[projectId].shortTitle : dictionary.cooperation.projectNone);
    formData.set("source_page", window.location.href);
    formData.set("language", state.lang);
    formData.set("_subject", COOPERATION_FORM.subject);
    formData.set("_template", "table");

    try {
      const response = await fetch(COOPERATION_FORM.endpoint, {
        method: "POST",
        headers: { Accept: "application/json" },
        body: formData,
      });
      const payload = await response.json().catch(() => ({}));
      const success = response.ok && (payload.success === true || payload.success === "true");
      if (!success) throw new Error(payload.message || "Form submission failed");
      form.reset();
      if (PROJECT_ORDER.includes(currentProject)) projectSelect.value = currentProject;
      form.hidden = true;
      dialog.querySelector("#cooperationSuccess").hidden = false;
      dialog.dataset.submitted = "true";
      dialog.querySelector("#cooperationSuccess [data-dialog-close]").focus();
    } catch (error) {
      status.replaceChildren(document.createTextNode(`${dictionary.cooperation.error} `));
      const fallback = createElement("a", null, dictionary.cooperation.emailFallback);
      fallback.href = `mailto:${COOPERATION_FORM.email}?subject=${encodeURIComponent(COOPERATION_FORM.subject)}`;
      status.appendChild(fallback);
      status.dataset.state = "error";
      status.hidden = false;
    } finally {
      submitButton.disabled = false;
      submitLabel.dataset.i18n = "cooperation.submit";
      submitLabel.textContent = content[state.lang].cooperation.submit;
    }
  });
}

function applyText() {
  const dictionary = content[state.lang];
  document.documentElement.lang = state.lang;

  document.querySelectorAll("[data-i18n]").forEach((node) => {
    const value = getPath(dictionary, node.dataset.i18n);
    if (typeof value === "string") node.textContent = value;
  });
  document.querySelectorAll("[data-i18n-aria-label]").forEach((node) => {
    const value = getPath(dictionary, node.dataset.i18nAriaLabel);
    if (typeof value === "string") node.setAttribute("aria-label", value);
  });
}

function applyThemeAndAssets() {
  const theme = resolvedTheme();
  const assets = assetMap[state.lang][theme];
  const dictionary = content[state.lang];
  document.documentElement.dataset.theme = state.theme;
  document.documentElement.dataset.resolvedTheme = theme;

  setImage("logo-mgimo", assets.mgimo, dictionary.logos.mgimo);
  setImage("logo-priority", assets.priority, dictionary.logos.priority);
  setImage("logo-minobrnauki", assets.ministry, dictionary.logos.ministry);
  setImage("heroImage", assets.hero, dictionary.hero.alt);

  const themeButton = document.getElementById("themeToggle");
  const langButton = document.getElementById("langToggle");
  if (themeButton) {
    const next = theme === "dark" ? "light" : "dark";
    themeButton.setAttribute("aria-label", state.lang === "ru" ? `Переключить на ${next === "light" ? "светлую" : "тёмную"} тему` : `Switch to ${next} theme`);
    themeButton.dataset.targetTheme = next;
    themeButton.title = state.lang === "ru" ? `Тема: ${theme === "dark" ? "тёмная" : "светлая"}` : `Theme: ${theme}`;
  }
  if (langButton) {
    langButton.textContent = state.lang === "ru" ? "EN" : "RU";
    langButton.setAttribute("aria-label", state.lang === "ru" ? "Switch to English" : "Переключить на русский");
  }
}

function renderHome() {
  const dictionary = content[state.lang];
  document.title = dictionary.metaTitle;
  setMetaDescription(dictionary.metaDescription);
  renderProjectGrid(dictionary);
  renderContactMap(dictionary);
}

function renderConsentPage() {
  const dictionary = content[state.lang].consentPage;
  document.title = dictionary.metaTitle;
  setMetaDescription(dictionary.metaDescription);
}

function renderProjectGrid(dictionary) {
  const grid = document.getElementById("projectGrid");
  if (!grid) return;
  const theme = resolvedTheme();
  grid.replaceChildren(...PROJECT_ORDER.map((projectId) => {
    const project = dictionary.projectDetails[projectId];
    const asset = projectAssets[projectId];
    const card = createElement("article", "project-card project-card-preview");

    const link = createElement("a", "project-card-link");
    link.href = asset.page;
    link.setAttribute("aria-label", `${dictionary.projects.more.replace(" →", "")}: ${project.shortTitle}`);

    const visual = createElement("div", "project-preview");
    const image = createElement("img");
    image.src = asset[theme];
    image.alt = project.imageAlt;
    image.loading = "lazy";
    visual.appendChild(image);

    const body = createElement("div", "project-body");
    const icon = createElement("span", "letter-box");
    icon.dataset.icon = asset.icon;
    icon.setAttribute("aria-hidden", "true");
    const text = createElement("div");
    text.appendChild(createElement("h3", null, project.shortTitle));
    text.appendChild(createElement("p", null, project.cardCopy));
    body.append(icon, text);

    const more = createElement("span", "project-more", dictionary.projects.more);
    link.append(visual, body, more);
    card.appendChild(link);
    return card;
  }));
}

function renderProjectPage() {
  const projectId = document.documentElement.dataset.project;
  const dictionary = content[state.lang];
  const project = dictionary.projectDetails[projectId];
  const asset = projectAssets[projectId];
  if (!project || !asset) return;

  document.title = `${project.shortTitle} | ${dictionary.metaTitle}`;
  setMetaDescription(project.summary);
  document.getElementById("project-title").textContent = project.title;
  document.getElementById("project-summary").textContent = project.summary;
  setImage("projectHeroImage", asset[resolvedTheme()], project.imageAlt);
  renderProjectContent(project, dictionary);
}

function renderProjectContent(project, dictionary) {
  const container = document.getElementById("projectContent");
  if (!container) return;
  const blocks = project.sections.map((section) => {
    const article = createElement("article", "project-section-block");
    article.appendChild(createElement("h3", null, section.heading));
    if (section.lead) article.appendChild(createElement("p", "section-lead", section.lead));
    (section.paragraphs || []).forEach((paragraph) => article.appendChild(createElement("p", null, paragraph)));
    if (section.items?.length) {
      const list = createElement("ul");
      section.items.forEach((item) => list.appendChild(createElement("li", null, item)));
      article.appendChild(list);
    }
    return article;
  });
  container.replaceChildren(...blocks);
}

function setMetaDescription(value) {
  const metaDescription = document.querySelector('meta[name="description"]');
  if (metaDescription) metaDescription.content = value;
}

function render() {
  applyText();
  applyThemeAndAssets();
  const page = document.documentElement.dataset.page;
  if (page === "project") {
    renderProjectPage();
  } else if (page === "consent") {
    renderConsentPage();
  } else {
    renderHome();
  }
}

document.getElementById("themeToggle")?.addEventListener("click", () => {
  const current = resolvedTheme();
  state.theme = current === "dark" ? "light" : "dark";
  localStorage.setItem(STORAGE.theme, state.theme);
  render();
});

document.getElementById("langToggle")?.addEventListener("click", () => {
  state.lang = state.lang === "ru" ? "en" : "ru";
  localStorage.setItem(STORAGE.lang, state.lang);
  render();
});

window.matchMedia?.("(prefers-color-scheme: light)").addEventListener("change", () => {
  if (state.theme === "auto") render();
});

ensureCooperationDialog();
render();
