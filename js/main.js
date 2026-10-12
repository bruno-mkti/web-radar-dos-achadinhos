(function () {
  "use strict";

  const config = window.RADAR_CONFIG || {};
  const whatsappUrl = typeof config.whatsappInviteUrl === "string"
    ? config.whatsappInviteUrl.trim()
    : "";
  const hasWhatsAppUrl = /^https:\/\/(chat\.whatsapp\.com|whatsapp\.com|wa\.me)\//i.test(whatsappUrl);

  const toast = document.getElementById("config-toast");
  const closeToast = document.getElementById("close-toast");
  const whatsappButtons = document.querySelectorAll(".js-whatsapp");

  function showConfigToast() {
    if (!toast) return;
    toast.classList.add("visible");
  }

  function trackEvent(eventName, params) {
    // O evento só é enviado quando o Google tag (gtag) está realmente disponível.
    if (typeof window.gtag === "function") {
      window.gtag("event", eventName, params || {});
    }
  }

  whatsappButtons.forEach(function (button) {
    if (hasWhatsAppUrl) {
      button.href = whatsappUrl;
      button.addEventListener("click", function () {
        trackEvent("click_whatsapp", {
          link_url: whatsappUrl,
          link_text: (button.innerText || "Entrar no WhatsApp").trim(),
          page_location: window.location.href
        });
      });
    } else {
      button.href = "#";
      button.removeAttribute("target");
      button.addEventListener("click", function (event) {
        event.preventDefault();
        showConfigToast();
      });
    }
  });

  if (closeToast) {
    closeToast.addEventListener("click", function () {
      toast.classList.remove("visible");
    });
  }

  const year = document.getElementById("current-year");
  if (year) year.textContent = new Date().getFullYear();

  // FAQ: ao abrir uma pergunta, fecha as demais para manter a leitura organizada.
  const faqItems = document.querySelectorAll(".faq-list details");
  faqItems.forEach(function (item) {
    item.addEventListener("toggle", function () {
      if (!item.open) return;
      faqItems.forEach(function (other) {
        if (other !== item) other.open = false;
      });
    });
  });

  // Exibe a CTA fixa no celular após a pessoa passar pela primeira tela.
  const mobileCta = document.getElementById("mobile-cta");
  const hero = document.querySelector(".hero");
  if (mobileCta && hero && "IntersectionObserver" in window) {
    mobileCta.classList.add("cta-observed");
    const observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        mobileCta.style.transform = entry.isIntersecting ? "translateY(110%)" : "translateY(0)";
        mobileCta.style.opacity = entry.isIntersecting ? "0" : "1";
        mobileCta.style.pointerEvents = entry.isIntersecting ? "none" : "auto";
      });
    }, { threshold: 0.05 });
    observer.observe(hero);
    mobileCta.style.transition = "transform .25s ease, opacity .25s ease";
  }
})();
