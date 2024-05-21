const COOKIE_CONSENT_KEY = 'pikcc';
const COOKIE_CONSENT_ACCEPT = 'a';

export const hasCookieConsent = () => Boolean(localStorage.getItem(COOKIE_CONSENT_KEY));

export const cookiesAccepted = () => localStorage.getItem(COOKIE_CONSENT_KEY) === COOKIE_CONSENT_ACCEPT;

export const setCookieConsent = (consent) => localStorage.setItem(COOKIE_CONSENT_KEY, consent);

export const enableCCOnlyIfPossible = () => {
  if (cookiesAccepted()) {
    const ccOnlyTemplate = document.getElementById('cookie-consent-only');
    document.body.appendChild(ccOnlyTemplate.content.cloneNode(true));
  }
};

enableCCOnlyIfPossible();
