import { useState, type FormEvent } from "react";

/**
 * Codenest's brand-styled "Get Started" form.
 *
 * Background: MailerLite ships two snippets — the Universal popups/tracker
 * (`assets.mailerlite.com/js/universal.js`) and the inline embed code. The
 * lightweight `<div class="ml-embedded" data-form="…">` div on its own is
 * NOT picked up by the Universal script: it only auto-renders popups and
 * promotions, never inline forms. The full embed code is a giant block of
 * pre-rendered HTML + a separate webforms loader.
 *
 * Instead of fighting with that, this component renders our own dark form
 * (which matches the design spec exactly) and POSTs directly to the
 * MailerLite subscribe endpoint that the official embed code calls under
 * the hood:
 *
 *   POST https://assets.mailerlite.com/jsonp/{accountId}/forms/{formId}/subscribe
 *     body (FormData):
 *       fields[email]:  the email address
 *       ml-submit:      "1"
 *       anticsrf:       "true"
 *
 *   200 → { "success": true }  → the subscriber lands in the MailerLite
 *                                form's audience just like the embed.
 *
 * The form-internal ID (not the public slug) is what the endpoint accepts.
 * We discovered the right ID by fetching the form's JSONP metadata at
 *   https://assets.mailerlite.com/jsonp/{accountId}/forms/{slug}
 * and reading `data.id`.
 */

interface MailerLiteFormProps {
  /** Override the visible submit button label. */
  buttonText?: string;
  /** Override the success message rendered after subscription. */
  successMessage?: string;
  /** Optional extra classes on the outer wrapper. */
  className?: string;
}

const ACCOUNT_ID = "2412349";
const FORM_ID = "189545505126090108"; // internal id for the "XGmsby" form

const MailerLiteForm = ({
  buttonText = "Get Started",
  successMessage = "We'll be in touch within 24 hours.",
  className = "",
}: MailerLiteFormProps) => {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!email.includes("@")) {
      setErrorMsg("Please enter a valid email address.");
      setStatus("error");
      return;
    }
    setStatus("submitting");
    setErrorMsg("");

    try {
      const fd = new FormData();
      fd.append("fields[email]", email);
      fd.append("ml-submit", "1");
      fd.append("anticsrf", "true");

      const res = await fetch(
        `https://assets.mailerlite.com/jsonp/${ACCOUNT_ID}/forms/${FORM_ID}/subscribe`,
        { method: "POST", body: fd },
      );

      // MailerLite returns 200 with { success: true } on a valid email,
      // or a 4xx + an HTML error page on bad input. We surface a generic
      // message on anything non-200.
      if (!res.ok) {
        throw new Error(`MailerLite returned ${res.status}`);
      }
      const json = (await res.json().catch(() => ({}))) as { success?: boolean };
      if (json.success === false) {
        throw new Error("Subscription was rejected");
      }
      setStatus("success");
      setEmail("");
    } catch (err) {
      console.error("MailerLite subscribe failed:", err);
      setErrorMsg("Something went wrong. Please try again, or email us directly.");
      setStatus("error");
    }
  };

  // Success state — replaces the form entirely
  if (status === "success") {
    return (
      <div
        className={`mailerlite-form-wrapper ${className}`.trim()}
        style={{ fontFamily: "Arial, Helvetica, sans-serif" }}
      >
        <div
          role="status"
          style={{
            border: "1px solid rgba(80, 136, 250, 0.45)",
            borderRadius: 4,
            padding: "18px 22px",
            background: "transparent",
            color: "#5088FA",
            fontWeight: 600,
            fontSize: 15,
            lineHeight: 1.5,
            textAlign: "left",
          }}
        >
          {successMessage}
        </div>
      </div>
    );
  }

  return (
    <div
      className={`mailerlite-form-wrapper ${className}`.trim()}
      style={{ fontFamily: "Arial, Helvetica, sans-serif" }}
    >
      <form
        onSubmit={handleSubmit}
        noValidate
        style={{
          display: "flex",
          flexDirection: "column",
          gap: 10,
          width: "100%",
        }}
      >
        <div
          className="cnc-mailerlite-row"
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 10,
            width: "100%",
          }}
        >
          <input
            type="email"
            name="email"
            inputMode="email"
            autoComplete="email"
            required
            placeholder="you@company.com"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value.replace(/\s/g, ""));
              if (status === "error") setStatus("idle");
            }}
            disabled={status === "submitting"}
            style={{
              flex: "1 1 auto",
              minWidth: 0,
              height: 46,
              padding: "0 14px",
              fontFamily: "Arial, Helvetica, sans-serif",
              fontSize: 15,
              color: "#ffffff",
              background: "#0a0a0a",
              border: "1px solid #333",
              borderRadius: 4,
              outline: "none",
              boxShadow: "none",
              appearance: "none",
              WebkitAppearance: "none",
            }}
            aria-label="Email address"
          />
          <button
            type="submit"
            disabled={status === "submitting"}
            style={{
              flex: "0 0 auto",
              minWidth: 180,
              height: 46,
              padding: "0 24px",
              fontFamily: "Arial, Helvetica, sans-serif",
              fontSize: 15,
              fontWeight: 600,
              color: "#ffffff",
              background: "#5088FA",
              border: "none",
              borderRadius: 4,
              cursor: status === "submitting" ? "not-allowed" : "pointer",
              opacity: status === "submitting" ? 0.7 : 1,
              boxShadow: "0 8px 22px -8px rgba(80, 136, 250, 0.55)",
              transition: "background 0.18s ease, transform 0.18s ease",
            }}
            onMouseEnter={(e) => {
              if (status !== "submitting") e.currentTarget.style.background = "#3F75E8";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "#5088FA";
            }}
          >
            {status === "submitting" ? "Sending…" : buttonText}
          </button>
        </div>

        {status === "error" && errorMsg && (
          <div
            role="alert"
            style={{
              fontSize: 12,
              color: "#ff8a8a",
              fontFamily: "Arial, Helvetica, sans-serif",
              paddingTop: 2,
            }}
          >
            {errorMsg}
          </div>
        )}
      </form>
    </div>
  );
};

export default MailerLiteForm;
