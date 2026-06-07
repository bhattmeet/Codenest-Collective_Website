import { useEffect, useRef } from "react";

declare global {
  interface Window {
    /** MailerLite Universal queue function, set up by the script in index.html. */
    ml?: (...args: unknown[]) => void;
  }
}

interface MailerLiteFormProps {
  /** MailerLite form ID (the `data-form` attribute). */
  formId?: string;
  /** Override the visible submit button label. */
  buttonText?: string;
  /** Override the success message MailerLite renders after subscription. */
  successMessage?: string;
  /** Optional extra classes on the outer wrapper. */
  className?: string;
}

/**
 * Mounts a MailerLite embedded subscription form (`<div class="ml-embedded" data-form="…">`)
 * inside a wrapper we can target with our own CSS, and uses a MutationObserver to
 * rewrite the submit button label + success message text after MailerLite injects
 * its markup. The script tag in index.html loads the Universal SDK once; on SPA
 * route changes we call `ml('account', …)` again so the embed re-initialises.
 */
const MailerLiteForm = ({
  formId = "XGmsby",
  buttonText = "Get Started",
  successMessage = "We'll be in touch within 24 hours.",
  className = "",
}: MailerLiteFormProps) => {
  const containerRef = useRef<HTMLDivElement>(null);

  // Re-init the MailerLite Universal SDK when this component mounts.
  useEffect(() => {
    if (typeof window !== "undefined" && typeof window.ml === "function") {
      try {
        window.ml("account", "2412349");
      } catch {
        // Already initialised — safe to ignore.
      }
    }
  }, []);

  // Rewrite MailerLite's injected text nodes (button label + success copy)
  // so we don't need to fiddle with the MailerLite dashboard.
  useEffect(() => {
    const root = containerRef.current;
    if (!root) return;

    const overrideTexts = () => {
      // Submit button label
      const submitButtons = root.querySelectorAll<HTMLElement>(
        ".ml-form-embedSubmit button, button[type='submit']",
      );
      submitButtons.forEach((btn) => {
        // Don't override while the loading spinner is showing
        if (btn.querySelector(".loader")) return;
        if (btn.textContent?.trim() !== buttonText) {
          btn.textContent = buttonText;
        }
      });

      // Success state copy
      const successNodes = root.querySelectorAll<HTMLElement>(
        ".ml-form-successBody h4, .ml-form-successBody p, .ml-form-successContent h4, .ml-form-successContent p",
      );
      successNodes.forEach((node) => {
        if (node.dataset.cncOverridden === "true") return;
        node.textContent = successMessage;
        node.dataset.cncOverridden = "true";
      });
    };

    const observer = new MutationObserver(overrideTexts);
    observer.observe(root, { childList: true, subtree: true, characterData: true });
    // Initial pass in case MailerLite has already injected.
    overrideTexts();

    return () => observer.disconnect();
  }, [buttonText, successMessage]);

  return (
    <div ref={containerRef} className={`mailerlite-form-wrapper ${className}`.trim()}>
      <div className="ml-embedded" data-form={formId} />
    </div>
  );
};

export default MailerLiteForm;
