// T1AS — script principal (version accessible WCAG 2.2 AA)
document.addEventListener("DOMContentLoaded", function () {

  // ---------- Menu mobile accessible au clavier ----------
  var toggle = document.querySelector(".nav-toggle");
  var mobileNav = document.querySelector(".mobile-nav");
  var closeBtn = document.querySelector(".mobile-nav-close");

  function focusables() {
    return mobileNav.querySelectorAll("a[href], button:not([disabled])");
  }

  function openMenu() {
    mobileNav.hidden = false;
    mobileNav.classList.add("open");
    toggle.setAttribute("aria-expanded", "true");
    document.body.style.overflow = "hidden";
    closeBtn.focus();
  }

  function closeMenu(returnFocus) {
    mobileNav.classList.remove("open");
    mobileNav.hidden = true;
    toggle.setAttribute("aria-expanded", "false");
    document.body.style.overflow = "";
    if (returnFocus) toggle.focus();
  }

  if (toggle && mobileNav && closeBtn) {
    toggle.addEventListener("click", openMenu);
    closeBtn.addEventListener("click", function () { closeMenu(true); });

    mobileNav.querySelectorAll("a").forEach(function (a) {
      a.addEventListener("click", function () { closeMenu(false); });
    });

    // Échap ferme le menu, Tab reste dans le menu (pas de piège : Échap permet d'en sortir)
    mobileNav.addEventListener("keydown", function (e) {
      if (e.key === "Escape") { closeMenu(true); return; }
      if (e.key !== "Tab") return;
      var items = focusables();
      var first = items[0], last = items[items.length - 1];
      if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
      else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
    });
  }

  // ---------- Header : léger fond au scroll ----------
  var header = document.querySelector(".site-header");
  if (header) {
    window.addEventListener("scroll", function () {
      header.style.boxShadow = window.scrollY > 10 ? "0 4px 16px rgba(13,43,110,0.08)" : "none";
    });
  }

  // ---------- Lien d'évitement : donne le focus au contenu ----------
  var skip = document.querySelector(".skip-link");
  var main = document.querySelector("#contenu");
  if (skip && main) {
    skip.addEventListener("click", function () { main.focus(); });
  }

  // ---------- Formulaire de contact : erreurs claires et lisibles ----------
  var form = document.querySelector("#contact-form");
  if (form) {
    var feedback = document.querySelector("#form-feedback");
    var rules = [
      { id: "name", test: function (v) { return v.length > 0; },
        msg: "Indiquez votre nom complet, par exemple Jean Dupont." },
      { id: "email", test: function (v) { return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v); },
        msg: "Indiquez une adresse email valide, par exemple jean@monentreprise.ch." },
      { id: "message", test: function (v) { return v.length > 0; },
        msg: "Décrivez votre besoin en quelques mots dans le champ Message." }
    ];

    function setError(field, errorEl, msg) {
      if (msg) {
        field.setAttribute("aria-invalid", "true");
        errorEl.textContent = msg;
        errorEl.hidden = false;
      } else {
        field.removeAttribute("aria-invalid");
        errorEl.textContent = "";
        errorEl.hidden = true;
      }
    }

    // On revalide un champ dès qu'on le corrige
    rules.forEach(function (r) {
      var field = form.querySelector("#" + r.id);
      var errorEl = form.querySelector("#" + r.id + "-erreur");
      field.addEventListener("input", function () {
        if (field.getAttribute("aria-invalid") === "true" && r.test(field.value.trim())) {
          setError(field, errorEl, null);
        }
      });
    });

    form.addEventListener("submit", function (e) {
      e.preventDefault();
      var firstInvalid = null, count = 0;

      rules.forEach(function (r) {
        var field = form.querySelector("#" + r.id);
        var errorEl = form.querySelector("#" + r.id + "-erreur");
        var ok = r.test(field.value.trim());
        setError(field, errorEl, ok ? null : r.msg);
        if (!ok) { count++; if (!firstInvalid) firstInvalid = field; }
      });

      if (firstInvalid) {
        feedback.className = "form-feedback is-error";
        feedback.textContent = count === 1
          ? "Le formulaire contient 1 erreur. Corrigez le champ indiqué puis renvoyez."
          : "Le formulaire contient " + count + " erreurs. Corrigez les champs indiqués puis renvoyez.";
        firstInvalid.focus();
        return;
      }

      var name = form.querySelector("#name").value.trim();
      feedback.className = "form-feedback is-success";
      feedback.textContent = "Merci " + name + ", votre message a bien été envoyé. Nous revenons vers vous sous 24h ouvrées.";
      form.reset();
    });
  }

  // ---------- Année dynamique dans le footer ----------
  var yearEl = document.querySelector("#current-year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();
});
