import { useEffect, useRef, useState } from "react";
import { ArrowUpRight, Send, X } from "lucide-react";
import { site } from "../config/site";

const initialValues = { name: "", email: "", details: "", botcheck: "" };

function validate(values) {
  const errors = {};
  if (!values.name.trim()) errors.name = "Please enter your name.";
  if (!values.email.trim()) errors.email = "Please enter your email address.";
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email.trim()))
    errors.email = "Enter a valid email address.";
  if (!values.details.trim())
    errors.details = "Tell me a little about your project.";
  return errors;
}

export default function ContactForm() {
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState({ type: "", message: "" });
  const [submitting, setSubmitting] = useState(false);
  const formRef = useRef(null);

  useEffect(() => {
    if (!status.message) return;
    const timer = window.setTimeout(
      () => setStatus({ type: "", message: "" }),
      5000,
    );
    return () => window.clearTimeout(timer);
  }, [status]);

  const update = (event) => {
    const { name, value } = event.target;
    setValues((current) => ({ ...current, [name]: value }));
    setErrors((current) => ({ ...current, [name]: "" }));
    if (status.type) setStatus({ type: "", message: "" });
  };

  const submit = async (event) => {
    event.preventDefault();
    if (submitting) return;
    if (values.botcheck) return;
    const nextErrors = validate(values);
    setErrors(nextErrors);
    const firstError = Object.keys(nextErrors)[0];
    if (firstError) {
      formRef.current?.querySelector(`[name="${firstError}"]`)?.focus();
      return;
    }
    if (!site.web3formsAccessKey) {
      setStatus({
        type: "error",
        message:
          "The contact form is not configured. Please email me directly instead.",
      });
      return;
    }
    setSubmitting(true);
    setStatus({ type: "", message: "" });
    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: site.web3formsAccessKey,
          name: values.name.trim(),
          email: values.email.trim(),
          message: values.details.trim(),
          botcheck: "",
        }),
      });
      const result = await response.json();
      if (!response.ok || !result.success) throw new Error("Submission failed");
      setValues(initialValues);
      setStatus({
        type: "success",
        message: "Your message was sent. Thank you for reaching out.",
      });
    } catch {
      setStatus({
        type: "error",
        message:
          "Your message could not be sent. Please email me directly instead.",
      });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <form className="contact-form" ref={formRef} onSubmit={submit} noValidate>
      <div className="form-heading">
        <span>PROJECT INQUIRY</span>
        <Send size={18} aria-hidden="true" />
      </div>
      <div className="form-fields">
        <div className="form-field">
          <label htmlFor="contact-name">
            Your name <span>*</span>
          </label>
          <input
            id="contact-name"
            name="name"
            type="text"
            autoComplete="name"
            value={values.name}
            onChange={update}
            aria-invalid={!!errors.name}
            aria-describedby={errors.name ? "name-error" : undefined}
            required
            placeholder="How should I address you?"
          />
          {errors.name && (
            <p className="field-error" id="name-error">
              {errors.name}
            </p>
          )}
        </div>
        <div className="form-field">
          <label htmlFor="contact-email">
            Email address <span>*</span>
          </label>
          <input
            id="contact-email"
            name="email"
            type="email"
            autoComplete="email"
            value={values.email}
            onChange={update}
            aria-invalid={!!errors.email}
            aria-describedby={errors.email ? "email-error" : undefined}
            required
            placeholder="you@company.com"
          />
          {errors.email && (
            <p className="field-error" id="email-error">
              {errors.email}
            </p>
          )}
        </div>
        <div className="form-field">
          <label htmlFor="contact-details">
            Project details <span>*</span>
          </label>
          <textarea
            id="contact-details"
            name="details"
            rows="5"
            value={values.details}
            onChange={update}
            aria-invalid={!!errors.details}
            aria-describedby={errors.details ? "details-error" : undefined}
            required
            placeholder="What are you looking to build?"
          />
          {errors.details && (
            <p className="field-error" id="details-error">
              {errors.details}
            </p>
          )}
        </div>
        <div className="honeypot" aria-hidden="true">
          <label htmlFor="contact-botcheck">Leave this field empty</label>
          <input
            id="contact-botcheck"
            name="botcheck"
            type="text"
            autoComplete="off"
            tabIndex="-1"
            value={values.botcheck}
            onChange={update}
          />
        </div>
      </div>
      <button
        className="button button-primary form-submit"
        type="submit"
        disabled={submitting}
      >
        {submitting ? "Sending…" : "Send Message"}{" "}
        <ArrowUpRight size={17} aria-hidden="true" />
      </button>
      {status.message && (
        <div className={`form-status ${status.type}`} role="status">
          {status.message}{" "}
          {status.type === "error" && (
            <a href={`mailto:${site.email}`}>
              Email Ammad <ArrowUpRight size={14} aria-hidden="true" />
            </a>
          )}
          <button
            className="form-status-dismiss"
            type="button"
            aria-label="Dismiss message"
            onClick={() => setStatus({ type: "", message: "" })}
          >
            <X size={16} aria-hidden="true" />
          </button>
        </div>
      )}
    </form>
  );
}
