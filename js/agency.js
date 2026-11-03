(function () {
  var page = document.body.getAttribute("data-page");
  document.querySelectorAll("[data-nav]").forEach(function (link) {
    if (link.getAttribute("data-nav") === page) link.classList.add("active");
  });

  var burger = document.querySelector("[data-burger]");
  var menu = document.querySelector("[data-menu]");
  if (burger && menu) {
    burger.addEventListener("click", function () {
      var open = menu.classList.toggle("open");
      burger.setAttribute("aria-expanded", open ? "true" : "false");
    });
  }

  document.querySelectorAll("[data-drop]").forEach(function (drop) {
    var button = drop.querySelector("button");
    button.addEventListener("click", function (event) {
      event.stopPropagation();
      var willOpen = !drop.classList.contains("open");
      document.querySelectorAll("[data-drop].open").forEach(function (other) {
        other.classList.remove("open");
      });
      drop.classList.toggle("open", willOpen);
      button.setAttribute("aria-expanded", willOpen ? "true" : "false");
    });
  });

  document.addEventListener("click", function () {
    document.querySelectorAll("[data-drop].open").forEach(function (drop) {
      drop.classList.remove("open");
    });
  });

  var search = document.querySelector("[data-search]");
  var searchInput = search ? search.querySelector("input") : null;
  var results = search ? search.querySelector("[data-results]") : null;
  var pages = [
    { title: "Home", href: "index.html", text: "engineering ai cybersecurity assurance" },
    { title: "About", href: "about.html", text: "firm advantages delivery principles" },
    { title: "Cloud cost optimization", href: "article/cloud-cost-optimization/index.html", text: "finops cloud spend rightsizing" },
    { title: "Contact", href: "contact.html", text: "quote request email working session" }
  ];
  var root = document.body.getAttribute("data-root") || "";

  function renderResults(query) {
    var q = query.trim().toLowerCase();
    var matches = pages.filter(function (item) {
      return !q || (item.title + " " + item.text).toLowerCase().indexOf(q) !== -1;
    });
    results.innerHTML = "";
    if (!matches.length) {
      var empty = document.createElement("p");
      empty.textContent = "No matching pages.";
      results.appendChild(empty);
      return;
    }
    matches.forEach(function (item) {
      var link = document.createElement("a");
      link.href = root + item.href;
      link.textContent = item.title;
      results.appendChild(link);
    });
  }

  function openSearch() {
    if (!search) return;
    search.classList.add("open");
    renderResults("");
    searchInput.focus();
  }

  function closeSearch() {
    if (!search) return;
    search.classList.remove("open");
  }

  document.querySelectorAll("[data-open-search]").forEach(function (button) {
    button.addEventListener("click", openSearch);
  });
  if (search) {
    search.addEventListener("click", function (event) {
      if (event.target === search) closeSearch();
    });
    searchInput.addEventListener("input", function () {
      renderResults(searchInput.value);
    });
    search.querySelector("form").addEventListener("submit", function (event) {
      event.preventDefault();
      var first = results.querySelector("a");
      if (first) window.location.href = first.href;
    });
  }

  document.addEventListener("keydown", function (event) {
    if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === "k") {
      event.preventDefault();
      openSearch();
    }
    if (event.key === "Escape") closeSearch();
  });

  var industryButtons = Array.prototype.slice.call(document.querySelectorAll("[data-ind]"));
  function showIndustry(name) {
    industryButtons.forEach(function (button) {
      button.classList.toggle("on", button.getAttribute("data-ind") === name);
    });
    document.querySelectorAll("[data-panel]").forEach(function (panel) {
      panel.hidden = panel.getAttribute("data-panel") !== name;
    });
  }
  industryButtons.forEach(function (button) {
    button.addEventListener("click", function () {
      showIndustry(button.getAttribute("data-ind"));
    });
  });
  document.querySelectorAll("[data-ind-step]").forEach(function (button) {
    button.addEventListener("click", function () {
      if (!industryButtons.length) return;
      var current = industryButtons.findIndex(function (item) { return item.classList.contains("on"); });
      var step = Number(button.getAttribute("data-ind-step"));
      var next = (current + step + industryButtons.length) % industryButtons.length;
      showIndustry(industryButtons[next].getAttribute("data-ind"));
    });
  });

  document.querySelectorAll("[data-quote]").forEach(function (form) {
    form.addEventListener("submit", function (event) {
      event.preventDefault();
      if (!form.checkValidity()) {
        form.reportValidity();
        return;
      }
      var note = form.querySelector("[data-note]");
      if (note) note.classList.add("show");
      form.reset();
    });
  });

  var tocLinks = Array.prototype.slice.call(document.querySelectorAll("[data-toc] a"));
  if (tocLinks.length) {
    var sections = tocLinks.map(function (link) {
      return document.querySelector(link.getAttribute("href"));
    }).filter(Boolean);
    function spy() {
      var mark = window.scrollY + 140;
      var atBottom = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 8;
      var current = sections[0];
      sections.forEach(function (section) {
        var top = section.getBoundingClientRect().top + window.scrollY;
        if (top <= mark) current = section;
      });
      if (atBottom) current = sections[sections.length - 1];
      tocLinks.forEach(function (link) {
        link.classList.toggle("on", current && link.getAttribute("href") === "#" + current.id);
      });
    }
    tocLinks.forEach(function (link) {
      link.addEventListener("click", function () {
        tocLinks.forEach(function (other) {
          other.classList.toggle("on", other === link);
        });
      });
    });
    document.addEventListener("scroll", spy, { passive: true });
    spy();
  }
})();
