/* =========================================================
   Formulário de agendamento → mensagem estruturada no WhatsApp
   ========================================================= */
(() => {
  const VS = window.VS;
  if (!VS) return;

  /* ---------------- Traduções do formulário ---------------- */
  VS.extend({
    pt: {
      "bk.eyebrow": "Agendamento", "bk.title1": "Vamos cuidar", "bk.title2": "de você?",
      "bk.sub": "Preencha rapidinho e sua mensagem chega pronta no WhatsApp da Vanessa.",
      "bk.s1": "Escolha o plano", "bk.s2": "Conte um pouco sobre você", "bk.s3": "Envie pelo WhatsApp",
      "bk.plan": "Plano", "bk.planSingleDesc": "Avaliação + plano individualizado", "bk.planPackageName": "Pacote • 3 consultas",
      "bk.name": "Nome completo", "bk.namePh": "Seu nome", "bk.phone": "WhatsApp",
      "bk.mode": "Modalidade", "bk.modeIn": "📍 Presencial", "bk.modeOn": "💻 Online",
      "bk.goal": "Objetivo principal", "bk.goal0": "Selecione…", "bk.goal1": "Saúde hormonal", "bk.goal2": "Menopausa",
      "bk.goal3": "SOP", "bk.goal4": "Endometriose", "bk.goal5": "Emagrecimento", "bk.goal6": "Recomposição corporal",
      "bk.goal7": "Saúde e qualidade de vida", "bk.goal8": "Outro",
      "bk.period": "Melhor período", "bk.p1": "Manhã", "bk.p2": "Tarde", "bk.p3": "Noite",
      "bk.notes": "Algo que a Vanessa deva saber?", "bk.optional": "(opcional)", "bk.notesPh": "Ex.: sintomas, exames recentes, rotina…",
      "bk.submit": "Enviar pelo WhatsApp", "bk.note": "Você será direcionada ao WhatsApp com a mensagem pronta — é só tocar em enviar.",
      "bk.errPlan": "Escolha um plano.", "bk.errName": "Informe seu nome.", "bk.errPhone": "Informe um número válido com DDD.", "bk.errMode": "Escolha a modalidade.",
      "bk.doneT": "Quase lá!", "bk.doneD": "Abrimos o WhatsApp com sua mensagem. Se não abriu, toque no botão abaixo.", "bk.retry": "Abrir WhatsApp",
      "msg.head": "Olá, Vanessa! Gostaria de agendar uma consulta 🍎",
      "msg.title": "AGENDAMENTO PELO SITE",
      "msg.name": "Nome", "msg.phone": "WhatsApp", "msg.plan": "Plano", "msg.mode": "Modalidade",
      "msg.goal": "Objetivo", "msg.period": "Melhor período", "msg.notes": "Observações",
      "msg.single": "Consulta avulsa — R$ 150,00", "msg.package": "Pacote de acompanhamento (3 consultas) — R$ 420,00",
      "msg.inperson": "Presencial", "msg.online": "Online", "msg.flex": "Sem preferência",
    },
    en: {
      "bk.eyebrow": "Booking", "bk.title1": "Shall we take", "bk.title2": "care of you?",
      "bk.sub": "Fill in quickly and your message arrives ready on Vanessa's WhatsApp.",
      "bk.s1": "Choose your plan", "bk.s2": "Tell us a bit about you", "bk.s3": "Send via WhatsApp",
      "bk.plan": "Plan", "bk.planSingleDesc": "Assessment + individualized plan", "bk.planPackageName": "Package • 3 consultations",
      "bk.name": "Full name", "bk.namePh": "Your name", "bk.phone": "WhatsApp",
      "bk.mode": "Format", "bk.modeIn": "📍 In person", "bk.modeOn": "💻 Online",
      "bk.goal": "Main goal", "bk.goal0": "Select…", "bk.goal1": "Hormonal health", "bk.goal2": "Menopause",
      "bk.goal3": "PCOS", "bk.goal4": "Endometriosis", "bk.goal5": "Weight loss", "bk.goal6": "Body recomposition",
      "bk.goal7": "Health and quality of life", "bk.goal8": "Other",
      "bk.period": "Best time", "bk.p1": "Morning", "bk.p2": "Afternoon", "bk.p3": "Evening",
      "bk.notes": "Anything Vanessa should know?", "bk.optional": "(optional)", "bk.notesPh": "E.g. symptoms, recent lab tests, routine…",
      "bk.submit": "Send via WhatsApp", "bk.note": "You'll be taken to WhatsApp with your message ready — just tap send.",
      "bk.errPlan": "Please choose a plan.", "bk.errName": "Please enter your name.", "bk.errPhone": "Please enter a valid number with area/country code.", "bk.errMode": "Please choose a format.",
      "bk.doneT": "Almost there!", "bk.doneD": "We opened WhatsApp with your message. If it didn't open, tap the button below.", "bk.retry": "Open WhatsApp",
      "msg.head": "Hi Vanessa! I'd like to book an appointment 🍎",
      "msg.title": "BOOKING FROM WEBSITE",
      "msg.name": "Name", "msg.phone": "WhatsApp", "msg.plan": "Plan", "msg.mode": "Format",
      "msg.goal": "Goal", "msg.period": "Best time", "msg.notes": "Notes",
      "msg.single": "Single consultation — R$ 150.00", "msg.package": "Follow-up package (3 consultations) — R$ 420.00",
      "msg.inperson": "In person", "msg.online": "Online", "msg.flex": "No preference",
    },
    es: {
      "bk.eyebrow": "Agenda", "bk.title1": "¿Cuidamos", "bk.title2": "de ti?",
      "bk.sub": "Completa rapidito y tu mensaje llega listo al WhatsApp de Vanessa.",
      "bk.s1": "Elige el plan", "bk.s2": "Cuéntanos un poco sobre ti", "bk.s3": "Envía por WhatsApp",
      "bk.plan": "Plan", "bk.planSingleDesc": "Evaluación + plan individualizado", "bk.planPackageName": "Paquete • 3 consultas",
      "bk.name": "Nombre completo", "bk.namePh": "Tu nombre", "bk.phone": "WhatsApp",
      "bk.mode": "Modalidad", "bk.modeIn": "📍 Presencial", "bk.modeOn": "💻 Online",
      "bk.goal": "Objetivo principal", "bk.goal0": "Selecciona…", "bk.goal1": "Salud hormonal", "bk.goal2": "Menopausia",
      "bk.goal3": "SOP", "bk.goal4": "Endometriosis", "bk.goal5": "Pérdida de peso", "bk.goal6": "Recomposición corporal",
      "bk.goal7": "Salud y calidad de vida", "bk.goal8": "Otro",
      "bk.period": "Mejor horario", "bk.p1": "Mañana", "bk.p2": "Tarde", "bk.p3": "Noche",
      "bk.notes": "¿Algo que Vanessa deba saber?", "bk.optional": "(opcional)", "bk.notesPh": "Ej.: síntomas, exámenes recientes, rutina…",
      "bk.submit": "Enviar por WhatsApp", "bk.note": "Serás dirigida a WhatsApp con el mensaje listo — solo toca enviar.",
      "bk.errPlan": "Elige un plan.", "bk.errName": "Escribe tu nombre.", "bk.errPhone": "Escribe un número válido con código de área.", "bk.errMode": "Elige la modalidad.",
      "bk.doneT": "¡Casi listo!", "bk.doneD": "Abrimos WhatsApp con tu mensaje. Si no se abrió, toca el botón de abajo.", "bk.retry": "Abrir WhatsApp",
      "msg.head": "¡Hola, Vanessa! Me gustaría agendar una consulta 🍎",
      "msg.title": "AGENDA DESDE EL SITIO WEB",
      "msg.name": "Nombre", "msg.phone": "WhatsApp", "msg.plan": "Plan", "msg.mode": "Modalidad",
      "msg.goal": "Objetivo", "msg.period": "Mejor horario", "msg.notes": "Observaciones",
      "msg.single": "Consulta individual — R$ 150,00", "msg.package": "Paquete de acompañamiento (3 consultas) — R$ 420,00",
      "msg.inperson": "Presencial", "msg.online": "Online", "msg.flex": "Sin preferencia",
    },
  });

  const $ = (s, c = document) => c.querySelector(s);
  const $$ = (s, c = document) => [...c.querySelectorAll(s)];
  const modal = $("#booking");
  const form = $("#booking-form");
  const done = $(".booking__done");
  const retry = $("#booking-retry");
  let lastFocus = null;

  /* ---------------- Abrir / fechar ---------------- */
  function open(plan) {
    lastFocus = document.activeElement;
    form.hidden = false;
    done.hidden = true;
    $$(".field.has-error", form).forEach((f) => f.classList.remove("has-error"));
    if (plan) {
      const r = form.querySelector(`input[name="plan"][value="${plan}"]`);
      if (r) r.checked = true;
    }
    modal.classList.add("is-open");
    modal.setAttribute("aria-hidden", "false");
    document.body.classList.add("modal-open");
    document.querySelector(".header")?.classList.remove("menu-open");
    setTimeout(() => {
      const first = plan ? form.elements.name : form.querySelector('input[name="plan"]');
      first?.focus({ preventScroll: true });
    }, 350);
  }

  function close() {
    modal.classList.remove("is-open");
    modal.setAttribute("aria-hidden", "true");
    document.body.classList.remove("modal-open");
    lastFocus?.focus?.({ preventScroll: true });
  }

  // Todos os botões "Agendar" abrem o formulário (exceto contato direto: rodapé e botão flutuante)
  document.addEventListener("click", (e) => {
    const a = e.target.closest(".js-wa");
    if (!a || a.hasAttribute("data-direct")) return;
    e.preventDefault();
    open(a.dataset.plan);
  });
  $$("[data-close]", modal).forEach((el) => el.addEventListener("click", close));
  document.addEventListener("keydown", (e) => {
    if (!modal.classList.contains("is-open")) return;
    if (e.key === "Escape") close();
    if (e.key === "Tab") {
      // mantém o foco dentro do modal
      const f = $$("button, a[href], input, select, textarea", modal).filter((el) => el.offsetParent !== null);
      if (!f.length) return;
      const first = f[0], last = f[f.length - 1];
      if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
      else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
    }
  });

  /* ---------------- Máscara de telefone (BR) ---------------- */
  const phone = form.elements.phone;
  phone.addEventListener("input", () => {
    const raw = phone.value;
    if (raw.trim().startsWith("+")) return; // número internacional: deixa livre
    const d = raw.replace(/\D/g, "").slice(0, 11);
    let out = d;
    if (d.length > 2) out = `(${d.slice(0, 2)}) ${d.slice(2)}`;
    if (d.length > 7) out = `(${d.slice(0, 2)}) ${d.slice(2, d.length - 4)}-${d.slice(-4)}`;
    phone.value = out;
  });

  /* ---------------- Validação ---------------- */
  function fieldOf(el) { return el.closest(".field"); }
  function setError(el, bad) { fieldOf(el).classList.toggle("has-error", bad); return !bad; }

  function validate() {
    const els = form.elements;
    let ok = true;
    ok = setError(form.querySelector('input[name="plan"]'), !els.plan.value) && ok;
    ok = setError(els.name, els.name.value.trim().length < 2) && ok;
    ok = setError(els.phone, els.phone.value.replace(/\D/g, "").length < 10) && ok;
    ok = setError(form.querySelector('input[name="mode"]'), !els.mode.value) && ok;
    if (!ok) {
      const firstErr = form.querySelector(".field.has-error");
      firstErr?.scrollIntoView({ behavior: "smooth", block: "center" });
      firstErr?.querySelector("input, select, textarea")?.focus({ preventScroll: true });
    }
    return ok;
  }
  // limpa o erro assim que a pessoa corrige
  form.addEventListener("input", (e) => fieldOf(e.target)?.classList.remove("has-error"));
  form.addEventListener("change", (e) => fieldOf(e.target)?.classList.remove("has-error"));

  /* ---------------- Mensagem estruturada ---------------- */
  function buildMessage() {
    const t = VS.t, els = form.elements;
    const goalOpt = els.goal.selectedOptions[0];
    const periodInput = form.querySelector('input[name="period"]:checked');
    const lines = [
      t("msg.head"),
      "",
      `*${t("msg.title")}*`,
      "",
      `👤 *${t("msg.name")}:* ${els.name.value.trim()}`,
      `📱 *${t("msg.phone")}:* ${els.phone.value.trim()}`,
      `📋 *${t("msg.plan")}:* ${t("msg." + els.plan.value)}`,
      `📍 *${t("msg.mode")}:* ${t("msg." + els.mode.value)}`,
      `🎯 *${t("msg.goal")}:* ${els.goal.value ? goalOpt.textContent.trim() : "—"}`,
      `🕐 *${t("msg.period")}:* ${periodInput ? t("bk." + periodInput.value) : t("msg.flex")}`,
    ];
    const notes = els.notes.value.trim();
    if (notes) lines.push(`📝 *${t("msg.notes")}:* ${notes}`);
    return lines.join("\n");
  }

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    if (!validate()) return;
    const url = `https://wa.me/${VS.phone}?text=${encodeURIComponent(buildMessage())}`;
    retry.href = url;
    window.open(url, "_blank", "noopener");
    form.hidden = true;
    done.hidden = false;
    done.querySelector(".btn")?.focus({ preventScroll: true });
  });

  // ao trocar de idioma com o modal aberto, os textos já mudam via data-i18n
})();
