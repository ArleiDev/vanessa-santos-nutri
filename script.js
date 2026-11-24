/* =========================================================
   Vanessa Santos • Nutricionista — interações, i18n, animações
   ========================================================= */
(() => {
  const WHATSAPP = "5522998436704";

  /* ---------------- Traduções ---------------- */
  const I18N = {
    pt: {
      _lang: "pt-BR",
      _title: "Vanessa Santos | Nutricionista",
      _wa: "Olá, Vanessa! Vim pelo site e gostaria de agendar uma consulta.",
      _waSingle: "Olá, Vanessa! Vim pelo site e tenho interesse na consulta avulsa.",
      _waPackage: "Olá, Vanessa! Vim pelo site e tenho interesse no pacote de 3 consultas.",
      "brand.role": "Nutricionista",
      "nav.about": "Sobre mim", "nav.focus": "Meu foco", "nav.how": "Como funciona", "nav.plans": "Planos",
      "cta.schedule": "Agendar", "cta.whatsapp": "Agendar pelo WhatsApp", "cta.how": "Como funciona",
      "hero.pill": "Nutrição • Saúde da mulher",
      "hero.title1": "Cuidar de você", "hero.title2": "é o começo.",
      "hero.lead": "Acompanhamento nutricional <strong>personalizado</strong> para saúde hormonal, composição corporal, emagrecimento e <strong>qualidade de vida</strong>.",
      "facts.mode": "Presencial", "facts.modeSub": "ou online",
      "facts.pos": "Pós-graduada", "facts.posSub": "Emagrecimento e Metabolismo",
      "badge.text": "AGENDE SUA CONSULTA • AGENDE SUA CONSULTA • ",
      "glass.a1": "Bioimpedância", "glass.a2": "+ dobras cutâneas",
      "glass.b1": "Saúde da mulher", "glass.b2": "SOP • Menopausa",
      "ribbon.a": ["Saúde hormonal", "SOP", "Menopausa", "Endometriose", "Emagrecimento"],
      "ribbon.b": ["Recomposição corporal", "Qualidade de vida", "Plano personalizado", "Presencial ou online"],
      "feat.1t": "Avaliação completa", "feat.1d": "Bioimpedância, dobras cutâneas e análise de exames para entender o seu corpo de verdade.",
      "feat.2t": "Plano feito para você", "feat.2d": "Estratégia alimentar construída para sua rotina, preferências e objetivo — sem fórmula pronta.",
      "feat.3t": "Você não fica sozinha", "feat.3d": "Orientações, acompanhamento da evolução e suporte durante todo o processo.",
      "about.eyebrow": "Sobre mim", "about.title1": "Muito prazer,", "about.title2": "eu sou a Vanessa.",
      "about.lead": "Sou nutricionista e acredito em uma nutrição que se adapta à vida real.",
      "about.p1": "Meu acompanhamento é individualizado e considera rotina, hábitos, objetivos, composição corporal e necessidades de cada paciente.",
      "about.p2": "Meu trabalho é voltado principalmente para a saúde da mulher, com estratégias personalizadas e acompanhamento ao longo do processo.",
      "about.c1": "Pós-graduada em Emagrecimento e Metabolismo",
      "about.c2": "Pós-graduanda em Saúde da Mulher e Estética",
      "about.c3": "CRN4 23101806 • Presencial ou online",
      "about.stamp": "Nutrição que se adapta à vida real",
      "bub.1": "ciclo irregular", "bub.2": "cansaço constante", "bub.3": "inchaço", "bub.4": "ondas de calor", "bub.5": "dificuldade para emagrecer",
      "focus.eyebrow": "Para quem é", "focus.title1": "Meu", "focus.title2": "foco",
      "focus.sub": "Estratégias personalizadas para cada fase e necessidade da mulher.",
      "focus.c1tag": "Hormônios", "focus.c1t": "Saúde hormonal & Menopausa", "focus.c1d": "Alimentação estratégica para equilibrar os hormônios e atravessar cada fase com mais bem-estar.",
      "focus.c2tag": "Ciclo", "focus.c2t": "SOP & Endometriose", "focus.c2d": "Nutrição que ajuda a controlar sintomas, inflamação e a regular o seu ciclo.",
      "focus.c3tag": "Corpo", "focus.c3t": "Emagrecimento & Recomposição", "focus.c3d": "Perder gordura e ganhar massa magra de forma sustentável, sem dietas restritivas.",
      "focus.c4tag": "Bem-estar", "focus.c4t": "Saúde & Qualidade de vida", "focus.c4d": "Mais energia, disposição e uma relação leve e saudável com a comida.",
      "how.eyebrow": "Passo a passo", "how.title1": "Como", "how.title2": "funciona",
      "how.sub": "Um acompanhamento individualizado, com estratégia, suporte e ajustes ao longo do processo.",
      "chip.1": "📍 Presencial ou online", "chip.2": "⚖️ Bioimpedância", "chip.3": "📏 Dobras cutâneas", "chip.4": "🧪 Análise de exames", "chip.5": "🥗 Receitas", "chip.6": "💊 Suplementação",
      "step.1t": "Avaliação completa", "step.1d": "Na primeira consulta, conheço sua história, rotina, alimentação, sintomas, exames e objetivos. Avalio sua composição corporal com bioimpedância e dobras cutâneas.",
      "step.2t": "Plano personalizado", "step.2d": "A estratégia alimentar é construída para sua realidade, preferências, rotina e objetivo — sem fórmula pronta.",
      "step.3t": "Acompanhamento próximo", "step.3d": "Você não fica sozinha após a consulta: recebe orientações, acompanhamento da evolução e suporte durante o processo.",
      "step.4t": "Ajustes e evolução", "step.4d": "A cada etapa, avaliamos resultados, dificuldades e mudanças no seu momento para ajustar o planejamento.",
      "goal.t": "O objetivo do acompanhamento",
      "goal.d": "Cuidar da sua saúde, melhorar sua relação com a alimentação e construir resultados sustentáveis, respeitando sua individualidade e seu momento.",
      "plans.eyebrow": "Investimento", "plans.title1": "Planos de", "plans.title2": "acompanhamento",
      "plans.sub": "Escolha o formato que melhor combina com o seu momento.",
      "plan.1label": "Consulta avulsa", "plan.1desc": "Avaliação completa + planejamento nutricional individualizado.",
      "plan.best": "Mais escolhido", "plan.2label": "Pacote de acompanhamento", "plan.2big": "3 consultas",
      "plan.2desc": "Equivale a R$ 140,00 por consulta.", "plan.cta": "Quero agendar",
      "inc.t": "O que está incluso",
      "inc.1": "Avaliação com bioimpedância e dobras cutâneas",
      "inc.2": "Análise de exames laboratoriais, quando disponíveis",
      "inc.3": "Plano alimentar personalizado + orientações e receitas",
      "inc.4": "Suplementação, quando necessária, e ajustes ao longo do acompanhamento",
      "follow.t": "Acompanhamento",
      "follow.d": "Primeiro retorno em aproximadamente 30 dias. Depois, os intervalos são ajustados conforme sua evolução e necessidade.",
      "cta.eyebrow": "Presencial ou online", "cta.title1": "Vamos", "cta.title2": "começar?",
      "cta.sub": "Seu objetivo merece um planejamento feito para você.",
      "footer.tag": "Nutrição personalizada com foco em saúde da mulher.", "footer.top": "Voltar ao topo ↑",
    },

    en: {
      _lang: "en",
      _title: "Vanessa Santos | Nutritionist",
      _wa: "Hi Vanessa! I found you through your website and would like to book an appointment.",
      _waSingle: "Hi Vanessa! I found you through your website and I'm interested in a single consultation.",
      _waPackage: "Hi Vanessa! I found you through your website and I'm interested in the 3-consultation package.",
      "brand.role": "Nutritionist",
      "nav.about": "About me", "nav.focus": "My focus", "nav.how": "How it works", "nav.plans": "Plans",
      "cta.schedule": "Book now", "cta.whatsapp": "Book via WhatsApp", "cta.how": "How it works",
      "hero.pill": "Nutrition • Women's health",
      "hero.title1": "Taking care of you", "hero.title2": "is the beginning.",
      "hero.lead": "<strong>Personalized</strong> nutritional care for hormonal health, body composition, weight loss and <strong>quality of life</strong>.",
      "facts.mode": "In person", "facts.modeSub": "or online",
      "facts.pos": "Postgraduate", "facts.posSub": "Weight Loss & Metabolism",
      "badge.text": "BOOK A CONSULTATION • BOOK A CONSULTATION • ",
      "glass.a1": "Bioimpedance", "glass.a2": "+ skinfold assessment",
      "glass.b1": "Women's health", "glass.b2": "PCOS • Menopause",
      "ribbon.a": ["Hormonal health", "PCOS", "Menopause", "Endometriosis", "Weight loss"],
      "ribbon.b": ["Body recomposition", "Quality of life", "Personalized plan", "In person or online"],
      "feat.1t": "Complete assessment", "feat.1d": "Bioimpedance, skinfolds and lab test analysis to truly understand your body.",
      "feat.2t": "A plan made for you", "feat.2d": "An eating strategy built around your routine, preferences and goals — no one-size-fits-all.",
      "feat.3t": "You're never alone", "feat.3d": "Guidance, progress tracking and support throughout the whole journey.",
      "about.eyebrow": "About me", "about.title1": "Nice to meet you,", "about.title2": "I'm Vanessa.",
      "about.lead": "I'm a nutritionist and I believe in nutrition that adapts to real life.",
      "about.p1": "My care is individualized and takes into account each patient's routine, habits, goals, body composition and needs.",
      "about.p2": "My work focuses mainly on women's health, with personalized strategies and close follow-up throughout the process.",
      "about.c1": "Postgraduate in Weight Loss and Metabolism",
      "about.c2": "Postgraduate student in Women's Health and Aesthetics",
      "about.c3": "CRN4 23101806 • In person or online",
      "about.stamp": "Nutrition that adapts to real life",
      "bub.1": "irregular cycle", "bub.2": "constant fatigue", "bub.3": "bloating", "bub.4": "hot flashes", "bub.5": "struggling to lose weight",
      "focus.eyebrow": "Who it's for", "focus.title1": "My", "focus.title2": "focus",
      "focus.sub": "Personalized strategies for every stage and need of a woman's life.",
      "focus.c1tag": "Hormones", "focus.c1t": "Hormonal health & Menopause", "focus.c1d": "Strategic eating to balance your hormones and go through each stage with more well-being.",
      "focus.c2tag": "Cycle", "focus.c2t": "PCOS & Endometriosis", "focus.c2d": "Nutrition that helps manage symptoms, inflammation and regulate your cycle.",
      "focus.c3tag": "Body", "focus.c3t": "Weight loss & Recomposition", "focus.c3d": "Lose fat and gain lean mass sustainably, without restrictive diets.",
      "focus.c4tag": "Well-being", "focus.c4t": "Health & Quality of life", "focus.c4d": "More energy, vitality and a light, healthy relationship with food.",
      "how.eyebrow": "Step by step", "how.title1": "How it", "how.title2": "works",
      "how.sub": "Individualized care, with strategy, support and adjustments along the way.",
      "chip.1": "📍 In person or online", "chip.2": "⚖️ Bioimpedance", "chip.3": "📏 Skinfolds", "chip.4": "🧪 Lab test review", "chip.5": "🥗 Recipes", "chip.6": "💊 Supplementation",
      "step.1t": "Complete assessment", "step.1d": "In the first appointment, I get to know your history, routine, diet, symptoms, lab tests and goals. I assess your body composition with bioimpedance and skinfolds.",
      "step.2t": "Personalized plan", "step.2d": "Your eating strategy is built for your reality, preferences, routine and goals — no ready-made formulas.",
      "step.3t": "Close follow-up", "step.3d": "You're not on your own after the appointment: you get guidance, progress tracking and support throughout the process.",
      "step.4t": "Adjustments & progress", "step.4d": "At every stage, we review results, challenges and changes in your life to fine-tune the plan.",
      "goal.t": "The goal of our work together",
      "goal.d": "To take care of your health, improve your relationship with food and build sustainable results, respecting your individuality and your moment.",
      "plans.eyebrow": "Investment", "plans.title1": "Care", "plans.title2": "plans",
      "plans.sub": "Choose the format that best fits where you are right now.",
      "plan.1label": "Single consultation", "plan.1desc": "Complete assessment + individualized nutrition plan.",
      "plan.best": "Most popular", "plan.2label": "Follow-up package", "plan.2big": "3 consultations",
      "plan.2desc": "Equivalent to R$ 140.00 per consultation.", "plan.cta": "Book now",
      "inc.t": "What's included",
      "inc.1": "Bioimpedance and skinfold assessment",
      "inc.2": "Lab test analysis, when available",
      "inc.3": "Personalized meal plan + guidance and recipes",
      "inc.4": "Supplementation when needed, and adjustments throughout the follow-up",
      "follow.t": "Follow-up",
      "follow.d": "First follow-up in about 30 days. After that, intervals are adjusted according to your progress and needs.",
      "cta.eyebrow": "In person or online", "cta.title1": "Shall we", "cta.title2": "begin?",
      "cta.sub": "Your goal deserves a plan made just for you.",
      "footer.tag": "Personalized nutrition focused on women's health.", "footer.top": "Back to top ↑",
    },

    es: {
      _lang: "es",
      _title: "Vanessa Santos | Nutricionista",
      _wa: "¡Hola, Vanessa! Te encontré por tu sitio web y me gustaría agendar una consulta.",
      _waSingle: "¡Hola, Vanessa! Te encontré por tu sitio web y me interesa la consulta individual.",
      _waPackage: "¡Hola, Vanessa! Te encontré por tu sitio web y me interesa el paquete de 3 consultas.",
      "brand.role": "Nutricionista",
      "nav.about": "Sobre mí", "nav.focus": "Mi enfoque", "nav.how": "Cómo funciona", "nav.plans": "Planes",
      "cta.schedule": "Agendar", "cta.whatsapp": "Agendar por WhatsApp", "cta.how": "Cómo funciona",
      "hero.pill": "Nutrición • Salud de la mujer",
      "hero.title1": "Cuidar de ti", "hero.title2": "es el comienzo.",
      "hero.lead": "Acompañamiento nutricional <strong>personalizado</strong> para salud hormonal, composición corporal, pérdida de peso y <strong>calidad de vida</strong>.",
      "facts.mode": "Presencial", "facts.modeSub": "u online",
      "facts.pos": "Posgrado", "facts.posSub": "Adelgazamiento y Metabolismo",
      "badge.text": "AGENDA TU CONSULTA • AGENDA TU CONSULTA • ",
      "glass.a1": "Bioimpedancia", "glass.a2": "+ pliegues cutáneos",
      "glass.b1": "Salud de la mujer", "glass.b2": "SOP • Menopausia",
      "ribbon.a": ["Salud hormonal", "SOP", "Menopausia", "Endometriosis", "Pérdida de peso"],
      "ribbon.b": ["Recomposición corporal", "Calidad de vida", "Plan personalizado", "Presencial u online"],
      "feat.1t": "Evaluación completa", "feat.1d": "Bioimpedancia, pliegues cutáneos y análisis de exámenes para conocer tu cuerpo de verdad.",
      "feat.2t": "Un plan hecho para ti", "feat.2d": "Estrategia alimentaria construida para tu rutina, preferencias y objetivo — sin fórmulas listas.",
      "feat.3t": "No estás sola", "feat.3d": "Orientaciones, seguimiento de tu evolución y apoyo durante todo el proceso.",
      "about.eyebrow": "Sobre mí", "about.title1": "Mucho gusto,", "about.title2": "soy Vanessa.",
      "about.lead": "Soy nutricionista y creo en una nutrición que se adapta a la vida real.",
      "about.p1": "Mi acompañamiento es individualizado y considera la rutina, los hábitos, los objetivos, la composición corporal y las necesidades de cada paciente.",
      "about.p2": "Mi trabajo está enfocado principalmente en la salud de la mujer, con estrategias personalizadas y seguimiento a lo largo del proceso.",
      "about.c1": "Posgrado en Adelgazamiento y Metabolismo",
      "about.c2": "Cursando posgrado en Salud de la Mujer y Estética",
      "about.c3": "CRN4 23101806 • Presencial u online",
      "about.stamp": "Nutrición que se adapta a la vida real",
      "bub.1": "ciclo irregular", "bub.2": "cansancio constante", "bub.3": "hinchazón", "bub.4": "sofocos", "bub.5": "dificultad para adelgazar",
      "focus.eyebrow": "Para quién es", "focus.title1": "Mi", "focus.title2": "enfoque",
      "focus.sub": "Estrategias personalizadas para cada etapa y necesidad de la mujer.",
      "focus.c1tag": "Hormonas", "focus.c1t": "Salud hormonal & Menopausia", "focus.c1d": "Alimentación estratégica para equilibrar las hormonas y vivir cada etapa con más bienestar.",
      "focus.c2tag": "Ciclo", "focus.c2t": "SOP & Endometriosis", "focus.c2d": "Nutrición que ayuda a controlar síntomas, inflamación y a regular tu ciclo.",
      "focus.c3tag": "Cuerpo", "focus.c3t": "Pérdida de peso & Recomposición", "focus.c3d": "Perder grasa y ganar masa magra de forma sostenible, sin dietas restrictivas.",
      "focus.c4tag": "Bienestar", "focus.c4t": "Salud & Calidad de vida", "focus.c4d": "Más energía, vitalidad y una relación ligera y saludable con la comida.",
      "how.eyebrow": "Paso a paso", "how.title1": "Cómo", "how.title2": "funciona",
      "how.sub": "Un acompañamiento individualizado, con estrategia, apoyo y ajustes a lo largo del proceso.",
      "chip.1": "📍 Presencial u online", "chip.2": "⚖️ Bioimpedancia", "chip.3": "📏 Pliegues cutáneos", "chip.4": "🧪 Análisis de exámenes", "chip.5": "🥗 Recetas", "chip.6": "💊 Suplementación",
      "step.1t": "Evaluación completa", "step.1d": "En la primera consulta conozco tu historia, rutina, alimentación, síntomas, exámenes y objetivos. Evalúo tu composición corporal con bioimpedancia y pliegues cutáneos.",
      "step.2t": "Plan personalizado", "step.2d": "La estrategia alimentaria se construye para tu realidad, preferencias, rutina y objetivo — sin fórmulas listas.",
      "step.3t": "Seguimiento cercano", "step.3d": "No te quedas sola después de la consulta: recibes orientaciones, seguimiento de tu evolución y apoyo durante el proceso.",
      "step.4t": "Ajustes y evolución", "step.4d": "En cada etapa evaluamos resultados, dificultades y cambios en tu momento para ajustar la planificación.",
      "goal.t": "El objetivo del acompañamiento",
      "goal.d": "Cuidar tu salud, mejorar tu relación con la alimentación y construir resultados sostenibles, respetando tu individualidad y tu momento.",
      "plans.eyebrow": "Inversión", "plans.title1": "Planes de", "plans.title2": "acompañamiento",
      "plans.sub": "Elige el formato que mejor se adapta a tu momento.",
      "plan.1label": "Consulta individual", "plan.1desc": "Evaluación completa + planificación nutricional individualizada.",
      "plan.best": "El más elegido", "plan.2label": "Paquete de acompañamiento", "plan.2big": "3 consultas",
      "plan.2desc": "Equivale a R$ 140,00 por consulta.", "plan.cta": "Quiero agendar",
      "inc.t": "Qué incluye",
      "inc.1": "Evaluación con bioimpedancia y pliegues cutáneos",
      "inc.2": "Análisis de exámenes de laboratorio, cuando estén disponibles",
      "inc.3": "Plan alimentario personalizado + orientaciones y recetas",
      "inc.4": "Suplementación, cuando sea necesaria, y ajustes a lo largo del acompañamiento",
      "follow.t": "Seguimiento",
      "follow.d": "Primer control en aproximadamente 30 días. Después, los intervalos se ajustan según tu evolución y necesidad.",
      "cta.eyebrow": "Presencial u online", "cta.title1": "¿Empezamos", "cta.title2": "juntas?",
      "cta.sub": "Tu objetivo merece una planificación hecha para ti.",
      "footer.tag": "Nutrición personalizada con enfoque en la salud de la mujer.", "footer.top": "Volver arriba ↑",
    },
  };

  const $ = (s, c = document) => c.querySelector(s);
  const $$ = (s, c = document) => [...c.querySelectorAll(s)];

  /* ---------------- Idioma ---------------- */
  const store = {
    get() { try { return localStorage.getItem("vs-lang"); } catch { return null; } },
    set(v) { try { localStorage.setItem("vs-lang", v); } catch {} },
  };

  function detectLang() {
    const saved = store.get();
    if (saved && I18N[saved]) return saved;
    const param = new URLSearchParams(location.search).get("lang");
    if (param && I18N[param]) return param;
    return "pt"; // idioma padrão do site
  }

  function buildRibbon(el, items) {
    // duplica para loop contínuo do marquee
    const chunk = items.map((t) => `<span>${t}</span>`).join("");
    el.innerHTML = chunk.repeat(4);
  }

  function waLink(msg) {
    return `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(msg)}`;
  }

  let current = "pt";
  function applyLang(lang, animate = true) {
    const dict = I18N[lang];
    if (!dict) return;
    current = lang;
    const run = () => {
      document.documentElement.lang = dict._lang;
      document.title = dict._title;
      $$("[data-i18n]").forEach((el) => {
        const v = dict[el.dataset.i18n];
        if (typeof v === "string") el.textContent = v;
      });
      $$("[data-i18n-html]").forEach((el) => {
        const v = dict[el.dataset.i18nHtml];
        if (typeof v === "string") el.innerHTML = v;
      });
      $$("[data-i18n-ribbon]").forEach((el) => buildRibbon(el, dict[el.dataset.i18nRibbon]));
      $$(".js-wa").forEach((a) => {
        const plan = a.dataset.plan;
        a.href = waLink(plan === "single" ? dict._waSingle : plan === "package" ? dict._waPackage : dict._wa);
      });
      $$(".lang__btn").forEach((b) => b.classList.toggle("is-active", b.dataset.lang === lang));
      const idx = ["pt", "en", "es"].indexOf(lang);
      const btn = $(".lang__btn");
      if (btn) $(".lang__pill").style.transform = `translateX(${idx * btn.offsetWidth}px)`;
      document.body.classList.remove("i18n-fade");
      requestAnimationFrame(syncHeroPhoto);
    };
    if (animate) {
      document.body.classList.add("i18n-fade");
      setTimeout(run, 200);
    } else run();
    store.set(lang);
  }

  $$(".lang__btn").forEach((b) => b.addEventListener("click", () => {
    if (b.dataset.lang !== current) applyLang(b.dataset.lang);
  }));

  /* ---------------- Foto da hero alinhada ao h1 ---------------- */
  function syncHeroPhoto() {
    const text = $(".hero__text"), h1 = $(".hero__title"), visual = $(".hero__visual");
    if (!text || !h1 || !visual) return;
    if (window.innerWidth <= 960) { visual.style.removeProperty("--pill-offset"); return; }
    // distância do topo do bloco de texto até o topo visual do h1 (cap-height)
    const fs = parseFloat(getComputedStyle(h1).fontSize);
    const lh = parseFloat(getComputedStyle(h1).lineHeight) || fs;
    const capInset = (lh - fs) / 2 + fs * 0.08;
    visual.style.setProperty("--pill-offset", `${h1.offsetTop + Math.max(0, capInset)}px`);
  }

  /* ---------------- Header ---------------- */
  const header = $(".header");
  const waFloat = $(".wa-float");
  const onScroll = () => {
    const y = window.scrollY;
    header.classList.toggle("is-scrolled", y > 30);
    waFloat.classList.toggle("is-visible", y > 600);
  };

  const burger = $(".burger");
  burger.addEventListener("click", () => {
    const open = header.classList.toggle("menu-open");
    burger.setAttribute("aria-expanded", open);
  });
  $$(".mobile-menu a").forEach((a) => a.addEventListener("click", () => {
    header.classList.remove("menu-open");
    burger.setAttribute("aria-expanded", false);
  }));

  // link ativo do menu
  const sections = $$("main section[id]");
  const navLinks = $$(".nav a");
  const spy = new IntersectionObserver((entries) => {
    entries.forEach((e) => {
      if (e.isIntersecting) navLinks.forEach((l) => l.classList.toggle("is-active", l.getAttribute("href") === `#${e.target.id}`));
    });
  }, { rootMargin: "-45% 0px -50% 0px" });
  sections.forEach((s) => spy.observe(s));

  /* ---------------- Reveal on scroll ---------------- */
  const io = new IntersectionObserver((entries) => {
    entries.forEach((e) => {
      if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); }
    });
  }, { threshold: 0.15, rootMargin: "0px 0px -40px 0px" });
  $$("[data-anim]").forEach((el) => io.observe(el));

  /* ---------------- Parallax (scroll + mouse) ---------------- */
  const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const scrollDecor = $$(".decor[data-depth]");
  const mouseDecor = $$("[data-depth]:not(.decor)");
  let ticking = false;

  function parallax() {
    const vh = window.innerHeight;
    scrollDecor.forEach((el) => {
      const r = el.parentElement.getBoundingClientRect();
      if (r.bottom < -200 || r.top > vh + 200) return;
      const center = r.top + r.height / 2 - vh / 2;
      el.style.setProperty("--py", `${(-center * parseFloat(el.dataset.depth)).toFixed(1)}px`);
    });
    ticking = false;
  }
  window.addEventListener("scroll", () => {
    onScroll();
    if (!reduce && !ticking) { requestAnimationFrame(parallax); ticking = true; }
  }, { passive: true });

  if (!reduce && window.matchMedia("(pointer: fine)").matches) {
    window.addEventListener("mousemove", (e) => {
      const x = e.clientX / window.innerWidth - 0.5;
      const y = e.clientY / window.innerHeight - 0.5;
      mouseDecor.forEach((el) => {
        const d = parseFloat(el.dataset.depth) * 28;
        el.style.setProperty("--mx", `${(-x * d).toFixed(1)}px`);
        el.style.setProperty("--my", `${(-y * d).toFixed(1)}px`);
      });
    }, { passive: true });

    // Tilt 3D nos cards
    $$("[data-tilt]").forEach((card) => {
      card.addEventListener("mousemove", (e) => {
        const r = card.getBoundingClientRect();
        const px = (e.clientX - r.left) / r.width - 0.5;
        const py = (e.clientY - r.top) / r.height - 0.5;
        card.style.transform = `perspective(900px) rotateX(${(-py * 8).toFixed(2)}deg) rotateY(${(px * 10).toFixed(2)}deg) translateY(-6px)`;
      });
      card.addEventListener("mouseleave", () => { card.style.transform = ""; });
    });
  }

  /* ---------------- Init ---------------- */
  $("#year").textContent = new Date().getFullYear();
  applyLang(detectLang(), false);
  onScroll();
  parallax();
  window.addEventListener("resize", () => { syncHeroPhoto(); applyLang(current, false); });
  window.addEventListener("load", () => {
    syncHeroPhoto();
    document.body.classList.add("is-loaded");
  });
  if (document.fonts && document.fonts.ready) document.fonts.ready.then(syncHeroPhoto);
})();
