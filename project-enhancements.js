(() => {
  const projectConfig = {
    neiro: {
      graphic: {
        dark: "./assets/graphics/neiro/system-dark.svg",
        light: "./assets/graphics/neiro/system-light.svg",
      },
      meta: {
        ru: [
          ["Фокус", "нейромаркетинговые и нейролингвистические исследования"],
          ["Технологии", "LLM, айтрекинг, VR и генеративные нейросети"],
          ["Результат", "платформенные решения для исследований и образования"],
          ["Пользователи", "студенты, преподаватели, методологи и заказчики программ"],
        ],
        en: [
          ["Focus", "neuromarketing and neurolinguistic research"],
          ["Technologies", "LLM, eye tracking, VR and generative neural networks"],
          ["Result", "platform solutions for research and education"],
          ["Users", "students, faculty, methodologists and program customers"],
        ],
      },
      team: [
        { href: "https://mgimo.ru/people/hotyasheva/", photo: "./assets/team/neiro/hotyasheva.webp", fallback: "ОХ" },
        { href: "https://mgimo.ru/people/slesarev/", photo: "./assets/team/neiro/slesarev.webp", fallback: "МС" },
        { href: "https://mgimo.ru/people/pogrebnyak/", photo: "./assets/team/neiro/pogrebnyak.webp", fallback: "ЕП" },
        { href: "https://mgimo.ru/people/putintsev-is/", photo: "./assets/team/neiro/putintsev-is.webp", fallback: "ИП" },
        { href: "https://mgimo.ru/people/ches/", photo: "./assets/team/neiro/ches.webp", fallback: "НЧ" },
        { href: "https://mgimo.ru/people/ikonnikova/", photo: "./assets/team/neiro/ikonnikova.webp", fallback: "ВИ" },
        { href: "https://mgimo.ru/people/klepikov-oleg/", photo: "./assets/team/neiro/klepikov-oleg.webp", fallback: "ОК" },
      ],
      workModules: [
        { icon: "ai", itemIcons: ["launch", "ai", "education", "neuro", "business", "languages", "platform"] },
        { icon: "neuro", itemIcons: ["education", "research", "neuro", "ai"] },
        { icon: "languages", itemIcons: ["languages", "database", "platform", "education"] },
        { icon: "education", itemIcons: ["ai", "research", "database", "education"] },
      ],
      partners: {
        title: { ru: "Связанные площадки и продукты", en: "Related Platforms and Products" },
        items: [
          { name: "Нейро Стартап", href: "https://mgimo.business/neuro", preview: "./assets/sites/neuro-startup.webp" },
          { name: "ОМТУ", href: "https://omtu.info/", preview: "./assets/sites/omtu.webp" },
          { name: "neuro.mgimo.ru", href: "https://neuro.mgimo.ru/", preview: "./assets/sites/neuro-mgimo.webp" },
          { name: "mgimo.digital", href: "https://mgimo.digital/", preview: "./assets/sites/mgimo-digital.webp" },
          { name: "mgimo.ai", href: "https://mgimo.ai/", preview: "./assets/sites/mgimo-ai.webp" },
          { name: "kn.mgimo.ru", href: "https://kn.mgimo.ru/", preview: "./assets/sites/kn-mgimo.webp" },
          { name: "MGIMO PLT", href: "https://mgimo-plt.21-lms.ru/", preview: "./assets/sites/mgimo-plt.webp" },
        ],
      },
    },
    atlas: {
      graphic: {
        dark: "./assets/graphics/atlas/layers-dark.svg",
        light: "./assets/graphics/atlas/layers-light.svg",
      },
      meta: {
        ru: [
          ["Фокус", "геоинформационные технологии и пространственный анализ"],
          ["Технологии", "карты, базы данных, микроданные и моделирование"],
          ["Результат", "аналитические продукты и настраиваемые атласы"],
          ["Пользователи", "международные, инвестиционные и управленческие команды"],
        ],
        en: [
          ["Focus", "geoinformation technologies and spatial analysis"],
          ["Technologies", "maps, databases, microdata and modeling"],
          ["Result", "analytical products and configurable atlases"],
          ["Users", "international, investment and management teams"],
        ],
      },
      team: [
        { href: "https://mgimo.ru/people/shakhov/", photo: "./assets/team/atlas/shakhov.webp", fallback: "АШ" },
        { href: "https://www.hse.ru/org/persons/16958077/", photo: "./assets/team/atlas/mironyuk.webp?v=2", fallback: "ММ" },
        { href: "https://mgimo.ru/people/malgin/", photo: "./assets/team/atlas/malgin.webp", fallback: "АМ" },
        { href: "https://mgimo.ru/people/salamatov/", photo: "./assets/team/atlas/salamatov.webp", fallback: "ВС" },
        { href: "https://mgimo.ru/people/bezverbny/", photo: "./assets/team/atlas/bezverbny.webp", fallback: "ВБ" },
        { href: "https://mgimo.ru/people/pogrebnyak/", photo: "./assets/team/atlas/pogrebnyak.webp", fallback: "ЕП" },
      ],
      workModules: [
        { icon: "atlas", itemIcons: ["atlas", "research", "database", "route"] },
        { icon: "business", itemIcons: ["business", "research", "database", "platform"] },
        { icon: "government", itemIcons: ["government", "atlas", "research", "database"] },
        { icon: "research", itemIcons: ["database", "platform", "research", "business"] },
      ],
      partners: {
        title: { ru: "Консорциум и индустриальные пользователи", en: "Consortium and Industry Users" },
        items: [
          { name: "ФНИСЦ РАН", href: "https://www.fnisc.ru/", logo: "./assets/partners/fnisc-ran-padded.png?v=2", tone: "light", fit: "full", source: "https://www.fnisc.ru/fnisc_logo.html" },
          { name: "Газпромбанк", href: "https://www.gazprombank.ru/", logo: "./assets/partners/gazprombank.svg", tone: "light", fit: "wide", source: "https://ru.wikipedia.org/wiki/Газпромбанк" },
          { name: "Московский экспортный центр", href: "https://moscow-export.com/", logo: "./assets/partners/moscow-export.svg", tone: "dark", fit: "reduced", source: "https://moscow-export.com/" },
          { name: "ФРП", href: "https://frprf.ru/", logo: "./assets/partners/frp.png", tone: "light", fit: "wide", source: "https://frprf.ru/" },
        ],
      },
    },
    "digital-systems": {
      graphic: {
        dark: "./assets/graphics/digital-systems/pipeline-dark.svg",
        light: "./assets/graphics/digital-systems/pipeline-light.svg",
      },
      meta: {
        ru: [
          ["Фокус", "анализ данных и исследования международных процессов"],
          ["Технологии", "ИИ, машинное обучение, big data и мониторинг СМИ"],
          ["Результат", "интеллектуальная аналитическая платформа"],
          ["Пользователи", "исследовательские команды и технологические компании"],
        ],
        en: [
          ["Focus", "data analysis and research into international processes"],
          ["Technologies", "AI, machine learning, big data and media monitoring"],
          ["Result", "an intelligent analytical platform"],
          ["Users", "research teams and technology companies"],
        ],
      },
      team: [
        { href: "https://mgimo.ru/people/baykov/", photo: "./assets/team/digital-systems/baykov.webp", fallback: "АБ" },
        { href: "https://mgimo.ru/people/taran-vasiliy/", photo: "./assets/team/digital-systems/taran-vasiliy.webp", fallback: "ВТ" },
        { href: "https://mgimo.ru/people/silaev/", photo: "./assets/team/digital-systems/silaev.webp", fallback: "НС" },
        { href: "https://mgimo.ru/people/arkhipova-marina/", photo: "./assets/team/digital-systems/arkhipova-marina.webp", fallback: "МА" },
        { href: "https://mgimo.ru/people/pogrebnyak/", photo: "./assets/team/digital-systems/pogrebnyak.webp", fallback: "ЕП" },
      ],
      workModules: [
        { icon: "database", itemIcons: ["database", "ai", "radar", "research"] },
        { icon: "research", itemIcons: ["research", "atlas", "business", "government"] },
        { icon: "platform", itemIcons: ["database", "platform", "research", "radar"] },
      ],
      partners: {
        title: { ru: "Технологические партнёры", en: "Technology Partners" },
        items: [
          { name: "ИСП РАН", href: "https://www.ispras.ru/", logo: "./assets/partners/ispras-official-hd.png?v=3", tone: "light", fit: "wide", source: "https://www.ispras.ru/downloads/ISP_RAS_Catalogue_of_technologies_2021_ru.pdf" },
          { name: "Крибрум", href: "https://kribrum.ru/", logo: "./assets/partners/kribrum.svg", tone: "dark", fit: "wide", source: "https://kribrum.ru/" },
        ],
      },
    },
  };

  const portraitPositions = {
    neiro: ["50% 15%", "50% 10%", "50% 22%", "50% 18%", "50% 18%", "50% 12%", "50% 12%"],
    atlas: ["50% 20%", "50% 15%", "50% 25%", "50% 25%", "50% 22%", "50% 22%"],
    "digital-systems": ["50% 18%", "50% 18%", "50% 12%", "50% 10%", "50% 22%"],
  };

  Object.entries(projectConfig).forEach(([projectId, config]) => {
    config.team = config.team.map((member, index) => ({
      ...member,
      source: member.href,
      objectPosition: portraitPositions[projectId]?.[index] || "50% 50%",
    }));
  });

  const labels = {
    ru: {
      passport: "Паспорт проекта",
      work: "Направления и результаты",
      sourceSuffix: "Открыть источник",
    },
    en: {
      passport: "Project Passport",
      work: "Workstreams and Results",
      sourceSuffix: "Open source",
    },
  };

  let isEnhancing = false;

  function currentProjectId() {
    return document.documentElement.dataset.project;
  }

  function currentLang() {
    return document.documentElement.lang === "en" ? "en" : "ru";
  }

  function currentTheme() {
    return document.documentElement.dataset.resolvedTheme === "light" ? "light" : "dark";
  }

  function createElement(tag, className, text) {
    const node = document.createElement(tag);
    if (className) node.className = className;
    if (text != null) node.textContent = text;
    return node;
  }

  function externalize(link) {
    link.target = "_blank";
    link.rel = "noopener noreferrer";
    return link;
  }

  function iconNode(icon) {
    const span = createElement("span", "letter-box project-enhancement-icon");
    span.dataset.icon = icon;
    span.setAttribute("aria-hidden", "true");
    return span;
  }

  function splitPersonText(text) {
    const commaIndex = text.indexOf(",");
    if (commaIndex < 0) return { name: text, role: "" };
    return {
      name: text.slice(0, commaIndex).trim(),
      role: text.slice(commaIndex + 1).trim(),
    };
  }

  function protectTitleCompounds() {
    const title = document.getElementById("project-title");
    if (!title || title.querySelector(".no-break-compound")) return;
    const compound = "социально-экономического";
    const text = title.textContent || "";
    const index = text.indexOf(compound);
    if (index < 0) return;
    const span = createElement("span", "no-break-compound", compound);
    title.replaceChildren(text.slice(0, index), span, text.slice(index + compound.length));
  }

  function renderPassport(config) {
    document.getElementById("projectPassport")?.remove();
    const hero = document.querySelector(".project-page-hero");
    if (!hero) return;
    const lang = currentLang();
    const section = createElement("section", "project-passport");
    section.id = "projectPassport";
    section.setAttribute("aria-label", labels[lang].passport);
    const heading = createElement("h2", "visually-hidden", labels[lang].passport);
    section.appendChild(heading);
    config.meta[lang].forEach(([label, value]) => {
      const card = createElement("article", "passport-tile");
      card.append(createElement("strong", null, label), createElement("span", null, value));
      section.appendChild(card);
    });
    hero.insertAdjacentElement("afterend", section);
  }

  function makeDescription(article, config) {
    const section = article.cloneNode(true);
    section.className = "project-section-block project-section-block--description";
    const content = createElement("div", "project-description-copy");
    while (section.firstChild) content.appendChild(section.firstChild);
    const media = createElement("figure", "project-logic-figure");
    const img = document.createElement("img");
    img.src = config.graphic[currentTheme()];
    img.alt = "";
    img.loading = "eager";
    media.appendChild(img);
    section.append(content, media);
    return section;
  }

  function makeTeam(article, config) {
    const lang = currentLang();
    const section = createElement("section", "project-section-block project-section-block--team project-section-block--rich");
    const heading = article.querySelector("h3")?.textContent || (lang === "ru" ? "Команда" : "Team");
    section.appendChild(createElement("h3", null, heading));
    const grid = createElement("div", "team-grid");
    const itemTexts = [...article.querySelectorAll("li")].map((item) => item.textContent.trim()).filter(Boolean);
    itemTexts.forEach((text, index) => {
      const data = config.team[index] || {};
      const person = splitPersonText(text);
      const card = createElement("article", "team-person");
      card.title = text;
      const media = createElement("div", "team-photo-frame");
      if (data.photo) {
        const img = document.createElement("img");
        img.src = `${data.photo}${data.photo.includes("?") ? "&" : "?"}crop=3`;
        img.alt = "";
        img.loading = "lazy";
        img.style.objectPosition = data.objectPosition || "50% 50%";
        if (data.source) img.dataset.source = data.source;
        media.appendChild(img);
      } else {
        media.appendChild(createElement("span", "team-fallback", data.fallback || person.name.slice(0, 2)));
      }
      const body = createElement("div", "team-person-body");
      const name = data.href ? externalize(document.createElement("a")) : createElement("span");
      name.className = "team-person-name";
      if (data.href) name.href = data.href;
      name.textContent = person.name;
      body.appendChild(name);
      if (person.role) body.appendChild(createElement("p", "team-person-role", person.role));
      card.append(media, body);
      grid.appendChild(card);
    });
    section.appendChild(grid);
    return section;
  }

  function makeWorkGroup(articles, config) {
    const lang = currentLang();
    const section = createElement("section", "project-section-block project-section-block--work project-section-block--rich");
    section.appendChild(createElement("h3", null, labels[lang].work));
    const stack = createElement("div", "work-stack");
    articles.forEach((article, index) => {
      const moduleData = config.workModules[index] || { icon: "research", itemIcons: [] };
      const module = createElement("article", "work-module");
      const heading = createElement("header", "work-module-heading");
      heading.append(
        createElement("span", "work-module-number", String(index + 1).padStart(2, "0")),
        iconNode(moduleData.icon || "research"),
        createElement("h4", null, article.querySelector("h3")?.textContent || ""),
      );
      const content = createElement("div", "work-module-content");
      article.querySelectorAll(":scope > p").forEach((paragraph) => {
        content.appendChild(paragraph.cloneNode(true));
      });
      const items = [...article.querySelectorAll(":scope > ul > li")];
      if (items.length) {
        const grid = createElement("div", "work-result-grid");
        items.forEach((item, itemIndex) => {
          const card = createElement("article", "work-result-card");
          card.append(
            iconNode(moduleData.itemIcons?.[itemIndex] || moduleData.icon || "research"),
            createElement("p", null, item.textContent.trim()),
          );
          grid.appendChild(card);
        });
        content.appendChild(grid);
      }
      module.append(heading, content);
      stack.appendChild(module);
    });
    section.appendChild(stack);
    return section;
  }

  function makePartners(config) {
    const lang = currentLang();
    const data = config.partners;
    if (!data?.items?.length) return null;
    const section = createElement("section", "project-section-block project-section-block--partners project-section-block--rich");
    section.id = "projectPartners";
    if (data.items.some((item) => item.preview)) section.classList.add("project-section-block--sites");
    section.appendChild(createElement("h3", null, data.title[lang]));
    const grid = createElement("div", data.items.some((item) => item.preview) ? "partner-grid site-preview-grid" : "partner-grid");
    data.items.forEach((item) => {
      const link = externalize(document.createElement("a"));
      link.className = "partner-tile";
      link.href = item.href;
      link.title = item.name;
      link.setAttribute("aria-label", item.name);
      if (item.preview) {
        link.classList.add("partner-tile--site");
        const frame = createElement("span", "site-preview-frame");
        const img = document.createElement("img");
        img.src = `${item.preview}?capture=2`;
        img.alt = item.name;
        img.loading = "eager";
        frame.appendChild(img);
        link.append(frame, createElement("span", "partner-name", item.name));
      } else if (item.logo) {
        link.classList.add("partner-tile--logo");
        link.classList.add(`partner-tile--${item.tone || "light"}`);
        const frame = createElement("span", `partner-logo-frame partner-logo-frame--${item.tone || "light"} partner-logo-frame--${item.fit || "wide"}`);
        const img = document.createElement("img");
        img.src = item.logo;
        img.alt = item.name;
        img.loading = "eager";
        if (item.source) img.dataset.source = item.source;
        frame.appendChild(img);
        link.appendChild(frame);
      } else {
        link.appendChild(iconNode(item.icon || "platform"));
        link.appendChild(createElement("span", "partner-name", item.name));
      }
      grid.appendChild(link);
    });
    section.appendChild(grid);
    return section;
  }

  function enhanceProjectPage() {
    if (isEnhancing) return;
    const projectId = currentProjectId();
    const config = projectConfig[projectId];
    const container = document.getElementById("projectContent");
    if (!config || !container) return;
    protectTitleCompounds();

    const key = `${projectId}:${currentLang()}:${currentTheme()}:${container.querySelectorAll(":scope > article.project-section-block").length}`;
    if (container.dataset.enhancedKey === key && document.getElementById("projectPassport")) {
      const logicImage = container.querySelector(".project-logic-figure img");
      if (logicImage) logicImage.src = config.graphic[currentTheme()];
      return;
    }

    const originalArticles = [...container.querySelectorAll(":scope > article.project-section-block")];
    if (originalArticles.length < 2) return;

    isEnhancing = true;
    const description = originalArticles[0];
    const teamArticle = originalArticles.find((article) => /^(Команда|Team)/i.test(article.querySelector("h3")?.textContent || ""));
    const workArticles = originalArticles.filter((article) => article !== description && article !== teamArticle);
    const nodes = [
      makeDescription(description, config),
      teamArticle ? makeTeam(teamArticle, config) : null,
      workArticles.length ? makeWorkGroup(workArticles, config) : null,
      makePartners(config),
    ].filter(Boolean);
    container.replaceChildren(...nodes);
    container.dataset.enhancedKey = key;
    renderPassport(config);
    protectTitleCompounds();
    isEnhancing = false;
  }

  const observer = new MutationObserver(() => {
    if (!isEnhancing) window.requestAnimationFrame(enhanceProjectPage);
  });

  function start() {
    const container = document.getElementById("projectContent");
    if (container) observer.observe(container, { childList: true });
    enhanceProjectPage();
    ["themeToggle", "langToggle"].forEach((id) => {
      document.getElementById(id)?.addEventListener("click", () => window.setTimeout(enhanceProjectPage, 0));
    });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", start);
  } else {
    start();
  }
})();
