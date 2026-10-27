const SERVICES = [
  {
    title: "Landing Page",
    time: "1–2 weeks",
    deliver: "1 page",
    price: "$4,000",
    body: "A single Framer page built to earn its traffic. For launches, fundraises, campaigns, and paid ads. One page, conversion-led, shipped fast. Built to scale into a full site later if you need it.",
  },
  {
    title: "Marketing Site",
    time: "4–6 weeks",
    deliver: "5+ pages",
    price: "$6,000",
    body: "A full website that tells your brand story and guides visitors through the right journey — Home, Product, Pricing, About. Built to scale with your company, not a quick patch job.",
  },
  {
    title: "Motion Design",
    time: "1–2 weeks",
    deliver: "Video, explainer, or animation",
    price: "$3,000",
    body: "Motion that makes your product feel alive and trustworthy. From launch videos and investor explainers to animation systems running across your site — the right motion for the right moment.",
  },
];

const TEMPLATES = [
  { name: "Orionix", cat: "Agency", price: "$99", theme: "orionix" },
  { name: "Fizens", cat: "Finance", price: "$99", theme: "fizens" },
  { name: "Intelly", cat: "AI", price: "$99", theme: "intelly" },
  { name: "AUREA", cat: "Agency", price: "$99", theme: "aurea" },
  { name: "James Nolan", cat: "Portfolio", price: "$99", theme: "james" },
  { name: "Candreva", cat: "Portfolio", price: "Free", theme: "candreva" },
  { name: "Brandon Paul", cat: "Photography", price: "Free", theme: "brandon" },
  { name: "KOKORO", cat: "Portfolio", price: "Free", theme: "kokoro" },
  { name: "Griddie", cat: "Portfolio", price: "Free", theme: "griddie" },
];

const STATS = [
  {
    n: "15+",
    k: "Project completed",
    t: "We've designed and shipped websites for founders, SaaS companies, and agencies around the world.",
  },
  {
    n: "4",
    k: "Ways we can help",
    t: "Landing pages, marketing sites, motion design, and Framer implementation — scoped, priced, and shipped by the same studio.",
  },
  {
    n: "2 wks",
    k: "Support after launch",
    t: "Every project includes two weeks of fixes after go-live. Anything beyond that is scoped and priced on its own.",
  },
];

const HOME_FAQ = [
  ["Who is this for?", "Founders, SaaS teams, and agency owners who need a site that looks like a $10k build without the $10k timeline. If you need something live in weeks, not months, you're in the right place."],
  ["How much does it cost?", "Landing pages start at $4k, full marketing sites at $6k. Motion design and Framer implementation are quoted based on scope. No hourly billing surprises — you get a fixed price before we start."],
  ["What do you actually help with?", "Four things: Landing Pages that convert, full Marketing Sites, Motion Design that makes a site feel alive instead of static, and Framer Implementation if you already have a design and just need it built right. Pick one, or all four."],
  ["How fast can you start?", "Usually right away. I keep my schedule open for quick turnarounds — if you need something live this month, tell me and I'll confirm what's realistic."],
  ["Are you a designer, or do you also build the site?", "Both. I design and build in Framer myself — no handoff, no waiting on a separate developer to \"translate\" the Figma file. What you approve is what ships."],
  ["How do we work together day to day?", "Simple: a kickoff call to lock scope, async updates as I build (no need for daily calls), and a review round before launch. You always know what's done and what's next — no chasing."],
  ["Can you build my site from scratch?", "Yes. Bring an idea, a rough deck, or nothing but a product — I'll shape it into a site that's ready to launch, not just \"pretty.\""],
  ["What happens after the site launches?", "Every project includes 2 weeks of support after launch for any fixes. Need anything beyond that? We'll just scope and price it separately."],
];

const STORE_FAQ = [
  ["I've never used Framer. Will I actually be able to set a template up myself?", "Yes. If you can edit a Google Slide, you can edit this. Framer is drag-and-drop, no code — you'll spend more time picking your own images than fighting the editor."],
  ["What happens right after I purchase?", "You'll get a Remix link in your invoice and email — click it, and the template gets added straight to your Framer account. From there you can customize and preview everything before you touch a domain or publish anything."],
  ["Do I need a paid Framer plan?", "You can build and customize for free. You'll only need a paid Framer plan when you're ready to publish on your own domain — the CMS features in these templates work best on the Pro plan."],
  ["How fast can I realistically get this live?", "Most people are live within a few days of focused work. If your content is ready to drop in, same-day is realistic."],
  ["What if I get stuck?", "Start with the docs — most setup questions are answered there. If you're still hitting an error, email and I'll help you sort it out. If you'd rather not touch the setup at all, there's a Done-For-You package for $1,500."],
  ["Do you offer refunds?", "Since it's a digital product, there are no refunds once it's delivered. If something's not working as expected, say so — I'll help you sort it out."],
  ["Can I use this template for a client project?", "The license covers one live site. If you're building it for a client or a separate project, you'll need a separate license per site."],
  ["Will I get future updates for free?", "Free, for life. When the template gets updated, you get the new version at no extra cost."],
];

const QUOTES = [
  {
    author: "– Tim Hafner, OpenServ",
    text: "\"I'm thrilled with how the final website turned out— just as I envisioned it. Communication was top-notch throughout the project; Kota was always very quick to respond and super clear about what was going on, and worked very hard to meet our ambitious goals. Extremely professional. Kota absolutely nailed my expectations and project goals, and I couldn’t be happier with the work that was done! Thanks again, 10/10 would recommend!\"",
  },
  {
    author: "- Aryaman Chhaya, BETTER",
    text: "\"Kota and his wonderful team built: https://tradebetter.app He was extremely polite and helpful from the very start, and was even understanding enough to take payments in staged based on the trust of a mutual professional partner. His team helped me from the ground up refine and carefully build an eye-catching and outstanding landing page for our Web3/Crypto based company, with wonderful animations, themes and font selections. All - from the partitioning to the images chosen - show expertise!\"",
  },
  {
    author: "– LoganCee Studio",
    text: "\"KOTA is really professional, dedicated and thoughtful. He is always meticulous and puts 100% passion into every product created. Hope to continue to accompany and cooperate with you for a long time for the next of our projects.\"",
  },
];

function previewHTML(theme, name) {
  const titles = {
    orionix: "We make Creative Things.",
    fizens: "Start managing your finance.",
    intelly: "Realtime analytics with your AI.",
    aurea: "AUREA",
    james: "JAMES NOLAN",
    candreva: "CANDREVA",
    brandon: "BRANDON PAUL",
    kokoro: "KOKORO",
    griddie: "GRIDDIE",
  };
  const title = titles[theme] || name;
  if (theme === "intelly" || theme === "fizens") {
    return `<div class="pv theme-${theme}"><div class="top"><span>${name}</span><span>Menu</span></div><h3>${title}</h3><div class="cards3"><i></i><i></i><i></i></div></div>`;
  }
  if (theme === "aurea" || theme === "brandon" || theme === "candreva") {
    return `<div class="pv theme-aurea"><div class="top"><span>${name}</span><span>Index</span></div><h3>${title}</h3><div class="shot"></div></div>`;
  }
  if (theme === "james" || theme === "kokoro" || theme === "griddie") {
    return `<div class="pv theme-james"><div class="top"><span>${name}</span><span>Work</span></div><h3>${title}</h3></div>`;
  }
  return `<div class="pv theme-orionix"><div class="top"><span>orionix</span><span>Menu</span></div><h3>${title}</h3><div class="cards3"><i></i><i></i><i></i></div></div>`;
}

function splitWords(el) {
  const text = el.textContent;
  el.textContent = "";
  text.split(/(\s+)/).forEach((part) => {
    if (!part) return;
    if (!part.trim()) {
      el.append(part);
      return;
    }
    const span = document.createElement("span");
    span.className = "w";
    span.textContent = part;
    el.append(span);
  });
}

function paintWords() {
  const line = window.innerHeight * 0.68;
  document.querySelectorAll(".quote .w").forEach((word) => {
    const top = word.getBoundingClientRect().top;
    word.classList.toggle("on", top < line);
  });
  const quotes = [...document.querySelectorAll(".quote")];
  let active = 0;
  quotes.forEach((q, i) => {
    const r = q.getBoundingClientRect();
    if (r.top < window.innerHeight * 0.55) active = i;
  });
  document.querySelectorAll(".authors span").forEach((span, i) => {
    span.classList.toggle("on", i === active);
  });
}

function setService(index) {
  const data = SERVICES[index];
  const title = document.querySelector("[data-svc-title]");
  if (!title || title.dataset.i === String(index)) return;
  title.dataset.i = String(index);
  title.textContent = data.title;
  document.querySelector("[data-svc-time]").textContent = data.time;
  document.querySelector("[data-svc-deliver]").textContent = data.deliver;
  document.querySelector("[data-svc-price]").textContent = data.price;
  document.querySelector("[data-svc-body]").textContent = data.body;
  const stage = document.querySelector(".svc-stage");
  stage.classList.remove("s0", "s1", "s2");
  stage.classList.add("s" + index);
  document.querySelectorAll(".svc-names button").forEach((btn, i) => {
    btn.classList.toggle("active", i === index);
  });
  const project = document.querySelector("[data-project-type]");
  if (project) project.value = data.title;
}

function bindServices() {
  const section = document.querySelector(".services");
  if (!section) return;
  const onScroll = () => {
    if (window.innerWidth <= 980) return;
    const rect = section.getBoundingClientRect();
    const total = section.offsetHeight - window.innerHeight;
    const scrolled = Math.min(Math.max(-rect.top, 0), total);
    const index = Math.min(SERVICES.length - 1, Math.floor((scrolled / total) * SERVICES.length));
    setService(index);
  };
  document.querySelectorAll(".svc-names button").forEach((btn) => {
    btn.addEventListener("click", () => {
      const i = Number(btn.dataset.index);
      if (window.innerWidth <= 980) {
        setService(i);
        return;
      }
      const top = section.offsetTop + (section.offsetHeight - window.innerHeight) * (i / SERVICES.length) + 8;
      window.scrollTo({ top, behavior: "smooth" });
    });
  });
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();
}

function bindTemplates() {
  const stage = document.querySelector("[data-template-stage]");
  if (!stage) return;
  const featured = TEMPLATES.slice(0, 5);
  let index = 0;
  const screen = stage.querySelector("[data-screen]");
  const lens = stage.querySelector("[data-lens]");
  const name = document.querySelector("[data-tpl-name]");
  const cat = document.querySelector("[data-tpl-cat]");
  const dots = [...stage.querySelectorAll(".ring button")];

  function render(i) {
    index = i;
    const item = featured[i];
    const html = previewHTML(item.theme, item.name);
    screen.innerHTML = html;
    lens.innerHTML = html;
    name.textContent = item.name;
    cat.textContent = `${item.cat} / ${item.price}`;
    dots.forEach((dot, n) => dot.classList.toggle("on", n === i));
  }

  dots.forEach((dot, n) => dot.addEventListener("click", () => render(n)));
  render(0);
  let timer = setInterval(() => render((index + 1) % featured.length), 4200);
  stage.addEventListener("mouseenter", () => clearInterval(timer));
  stage.addEventListener("mouseleave", () => {
    timer = setInterval(() => render((index + 1) % featured.length), 4200);
  });
}

function bindStats() {
  const num = document.querySelector("[data-stat-num]");
  if (!num) return;
  let i = 0;
  const kicker = document.querySelector("[data-stat-k]");
  const copy = document.querySelector("[data-stat-t]");
  function show(next) {
    i = (next + STATS.length) % STATS.length;
    num.textContent = STATS[i].n;
    kicker.textContent = STATS[i].k;
    copy.textContent = STATS[i].t;
  }
  document.querySelector("[data-stat-prev]").addEventListener("click", () => show(i - 1));
  document.querySelector("[data-stat-next]").addEventListener("click", () => show(i + 1));
}

function bindNavTheme() {
  const nav = document.querySelector(".nav");
  const menu = document.querySelector(".menu");
  const zones = [...document.querySelectorAll("[data-nav]")];
  if (!nav || !zones.length) return;
  const apply = () => {
    const y = 48;
    let theme = "dark";
    for (const zone of zones) {
      const r = zone.getBoundingClientRect();
      if (r.top <= y && r.bottom >= y) {
        theme = zone.dataset.nav;
        break;
      }
    }
    nav.classList.toggle("light", theme === "light");
    nav.classList.toggle("dark", theme !== "light");
    menu.classList.toggle("light", theme === "light");
  };
  window.addEventListener("scroll", apply, { passive: true });
  apply();
}

function bindMenu() {
  const btn = document.querySelector(".menu-btn");
  const menu = document.querySelector(".menu");
  if (!btn || !menu) return;
  const close = () => {
    btn.setAttribute("aria-expanded", "false");
    menu.classList.remove("open");
  };
  btn.addEventListener("click", () => {
    const open = btn.getAttribute("aria-expanded") === "true";
    btn.setAttribute("aria-expanded", open ? "false" : "true");
    menu.classList.toggle("open", !open);
  });
  menu.querySelectorAll("a, button").forEach((el) => el.addEventListener("click", close));
  document.addEventListener("click", (event) => {
    if (!menu.contains(event.target) && !btn.contains(event.target)) close();
  });
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") close();
  });
}

const MODAL_COPY = {
  project: ["Start a project", "Tell me what you’re launching. You’ll get a fixed price before any work starts."],
  contact: ["Get in touch", "For new work, collaborations, or a question about a template."],
  call: ["Book a 30-minute call", "Share a time that works. I’ll reply with a confirmation."],
  ask: ["Ask a question", "Send it through and I’ll get back to you at the email you leave."],
  bundle: ["Get all access", "The template bundle is $249. Leave your details and I’ll send the remix link."],
  template: ["Get this template", "Leave your email and I’ll send the remix link for this template."],
};

function bindModal() {
  const modal = document.querySelector(".modal");
  if (!modal) return;
  const title = modal.querySelector("[data-modal-title]");
  const sub = modal.querySelector("[data-modal-sub]");
  const form = modal.querySelector("form");
  const success = modal.querySelector(".success");
  const typeField = modal.querySelector("[data-project-type]");
  const callOnly = modal.querySelectorAll("[data-call-only]");
  const projectOnly = modal.querySelectorAll("[data-project-only]");

  function open(kind, extra) {
    const copy = MODAL_COPY[kind] || MODAL_COPY.contact;
    title.textContent = copy[0];
    sub.textContent = extra ? `${copy[1]} ${extra}` : copy[1];
    form.classList.remove("hide");
    success.classList.remove("show");
    form.dataset.kind = kind;
    callOnly.forEach((el) => { el.hidden = kind !== "call"; });
    projectOnly.forEach((el) => { el.hidden = kind === "ask"; });
    if (kind === "bundle") typeField.value = "Template bundle";
    if (kind === "template" && extra) {
      if (![...typeField.options].some((opt) => opt.value === extra)) {
        typeField.add(new Option(extra, extra));
      }
      typeField.value = extra;
    }
    modal.classList.add("open");
    modal.querySelector("input, textarea").focus();
  }

  document.querySelectorAll("[data-open]").forEach((btn) => {
    btn.addEventListener("click", () => open(btn.dataset.open, btn.dataset.extra || ""));
  });
  modal.querySelector(".x").addEventListener("click", () => modal.classList.remove("open"));
  modal.addEventListener("click", (event) => {
    if (event.target === modal) modal.classList.remove("open");
  });
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") modal.classList.remove("open");
  });
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    if (!form.reportValidity()) return;
    const data = Object.fromEntries(new FormData(form).entries());
    const subject = encodeURIComponent(title.textContent + (data.type ? ` — ${data.type}` : ""));
    const body = encodeURIComponent(
      `Name: ${data.name || ""}\nEmail: ${data.email || ""}\nType: ${data.type || ""}\nWhen: ${data.when || ""}\n\n${data.message || ""}`
    );
    form.classList.add("hide");
    success.classList.add("show");
    success.querySelector("a").href = `mailto:hello@madebykota.com?subject=${subject}&body=${body}`;
  });
}

function bindReel() {
  const reel = document.querySelector(".reel");
  if (!reel) return;
  const play = reel.querySelector(".play");
  play.addEventListener("click", () => {
    reel.classList.toggle("playing");
    if (reel.classList.contains("playing")) {
      const bar = reel.querySelector(".bar span");
      bar.style.animation = "none";
      void bar.offsetWidth;
      bar.style.animation = "";
      window.setTimeout(() => reel.classList.remove("playing"), 12000);
    }
  });
}

function bindLoader() {
  const loader = document.querySelector(".loader");
  if (!loader) return;
  const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const pct = loader.querySelector("[data-pct]");
  if (reduce) {
    loader.classList.add("hide");
    document.body.classList.remove("is-loading");
    return;
  }
  const start = performance.now();
  const dur = 1400;
  function tick(now) {
    const p = Math.min(1, (now - start) / dur);
    const eased = 1 - Math.pow(1 - p, 3);
    pct.textContent = String(Math.round(eased * 100));
    if (p < 1) requestAnimationFrame(tick);
    else {
      loader.classList.add("go");
      setTimeout(() => {
        loader.classList.add("hide");
        document.body.classList.remove("is-loading");
      }, 700);
    }
  }
  requestAnimationFrame(tick);
}

function renderQuotes() {
  const mount = document.querySelector("[data-quotes]");
  const authors = document.querySelector("[data-authors]");
  if (!mount) return;
  mount.innerHTML = QUOTES.map((q) => `<p class="quote">${q.text}</p>`).join("");
  authors.innerHTML = QUOTES.map((q) => `<span>${q.author}</span>`).join("");
  mount.querySelectorAll(".quote").forEach(splitWords);
}

function renderFaq(selector, items) {
  const root = document.querySelector(selector);
  if (!root) return;
  const cols = [[], []];
  items.forEach((item, i) => cols[i % 2].push(item));
  root.innerHTML = cols.map((col) => `
    <div>
      ${col.map(([q, a], idx) => `
        <article class="acc${idx === 0 && col === cols[0] ? " open" : ""}">
          <button class="q" aria-expanded="${idx === 0 && col === cols[0] ? "true" : "false"}">
            <span>${q}</span><span class="pm" aria-hidden="true">${idx === 0 && col === cols[0] ? "×" : "+"}</span>
          </button>
          <p class="a">${a}</p>
        </article>
      `).join("")}
    </div>
  `).join("");
  root.querySelectorAll(".acc .q").forEach((btn) => {
    btn.addEventListener("click", () => {
      const acc = btn.closest(".acc");
      const open = acc.classList.toggle("open");
      btn.setAttribute("aria-expanded", open ? "true" : "false");
      btn.querySelector(".pm").textContent = open ? "×" : "+";
    });
  });
}

function renderStore() {
  const grid = document.querySelector("[data-store]");
  if (!grid) return;
  grid.innerHTML = TEMPLATES.map((item) => `
    <button class="product" data-open="template" data-extra="${item.name}">
      <div class="preview">${previewHTML(item.theme, item.name)}</div>
      <div class="meta">
        <span><strong>${item.name}</strong><br><em>${item.cat}</em></span>
        <span class="price-tag">${item.price}</span>
      </div>
    </button>
  `).join("");
}

function boot() {
  renderQuotes();
  renderFaq("[data-faq]", HOME_FAQ);
  renderFaq("[data-store-faq]", STORE_FAQ);
  renderStore();
  bindServices();
  bindTemplates();
  bindStats();
  bindNavTheme();
  bindMenu();
  bindModal();
  bindReel();
  bindLoader();
  if (document.querySelector(".quote")) {
    paintWords();
    window.addEventListener("scroll", paintWords, { passive: true });
  }
  document.querySelectorAll("[data-top]").forEach((btn) => {
    btn.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));
  });
}

document.addEventListener("DOMContentLoaded", boot);
