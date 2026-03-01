(function () {
  const STORAGE_KEY = "lishe_legal_acceptance";
  const CONSENT_VERSION = "2026-03-01";
  const STYLE_ID = "lishe-legal-consent-styles";

  function readConsent() {
    try {
      const raw = window.localStorage.getItem(STORAGE_KEY);
      if (!raw) return null;

      const parsed = JSON.parse(raw);
      if (!parsed || parsed.version !== CONSENT_VERSION) return null;

      return parsed;
    } catch (error) {
      return null;
    }
  }

  function writeConsent() {
    try {
      window.localStorage.setItem(
        STORAGE_KEY,
        JSON.stringify({
          version: CONSENT_VERSION,
          acceptedAt: new Date().toISOString(),
        })
      );
    } catch (error) {
      // If storage is unavailable, the dialog will reappear on the next visit.
    }
  }

  function injectStyles() {
    if (document.getElementById(STYLE_ID)) return;

    const style = document.createElement("style");
    style.id = STYLE_ID;
    style.textContent = `
      body.consent-open { overflow: hidden; }
      .legal-consent[hidden] { display: none !important; }
      .legal-consent {
        position: fixed;
        inset: 0;
        z-index: 2000;
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 24px;
      }
      .legal-consent__backdrop {
        position: absolute;
        inset: 0;
        background: rgba(17, 20, 35, 0.72);
        backdrop-filter: blur(6px);
        -webkit-backdrop-filter: blur(6px);
      }
      .legal-consent__dialog {
        position: relative;
        width: min(100%, 560px);
        border-radius: 24px;
        background: #ffffff;
        color: #1A1B2E;
        padding: 28px;
        box-shadow: 0 24px 80px rgba(17, 20, 35, 0.28);
      }
      .legal-consent__eyebrow {
        margin-bottom: 12px;
        color: #1D9E6F;
        font-size: 0.76rem;
        font-weight: 700;
        letter-spacing: 0.12em;
        text-transform: uppercase;
      }
      .legal-consent__title {
        margin: 0 0 12px;
        font-size: 1.5rem;
        line-height: 1.15;
      }
      .legal-consent__text {
        margin: 0 0 16px;
        color: #4A4B6A;
        line-height: 1.65;
      }
      .legal-consent__text a {
        color: #1D9E6F;
        text-decoration: none;
        font-weight: 600;
      }
      .legal-consent__text a:hover { text-decoration: underline; }
      .legal-consent__button {
        width: 100%;
        border: none;
        outline: none;
        box-shadow: none;
        appearance: none;
        -webkit-appearance: none;
      }
      .legal-consent__button:focus,
      .legal-consent__button:focus-visible {
        outline: none;
        box-shadow: none;
      }
      .legal-consent__note {
        margin: 12px 0 0;
        color: #6B6C86;
        font-size: 0.86rem;
        line-height: 1.5;
      }
      @media (max-width: 640px) {
        .legal-consent { padding: 16px; }
        .legal-consent__dialog {
          padding: 22px 18px;
          border-radius: 20px;
        }
        .legal-consent__title { font-size: 1.3rem; }
      }
    `;

    document.head.appendChild(style);
  }

  function showModal(modal) {
    document.body.classList.add("consent-open");
    modal.hidden = false;
    modal.setAttribute("aria-hidden", "false");
  }

  function hideModal(modal) {
    document.body.classList.remove("consent-open");
    modal.hidden = true;
    modal.setAttribute("aria-hidden", "true");
  }

  document.addEventListener("DOMContentLoaded", function () {
    const modal = document.querySelector("[data-legal-consent]");
    if (!modal) return;

    injectStyles();

    if (readConsent()) {
      hideModal(modal);
      return;
    }

    const acceptButton = modal.querySelector("[data-legal-consent-accept]");
    if (!acceptButton) return;

    acceptButton.addEventListener("click", function () {
      writeConsent();
      hideModal(modal);
    });

    showModal(modal);
    window.setTimeout(function () {
      acceptButton.focus();
    }, 0);
  });
})();
