import { useState } from "react";
import { HiArrowLongRight } from "react-icons/hi2";
import emailjs from "@emailjs/browser";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

const emailSchema = z.object({
  name: z.string().min(2, "Enter your name"),
  email: z.email("Enter a valid email address"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type EmailSchemaType = z.infer<typeof emailSchema>;

const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

const SOCIALS = [
  { label: "LINKEDIN", href: "https://www.linkedin.com/in/rojus-balciunas" },
  { label: "GITHUB", href: "https://github.com/RojusDEV" },
  { label: "X", href: "https://x.com/devRojka" },
];

const Connect = () => {
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<EmailSchemaType>({
    resolver: zodResolver(emailSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  const onSubmit = async (data: EmailSchemaType) => {
    setStatus("idle");
    try {
      await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        {
          name: data.name,
          email: data.email,
          message: data.message,
        },
        { publicKey: PUBLIC_KEY },
      );
      setStatus("success");
      reset();
    } catch (error) {
      console.error("EmailJS request failed:", error);
      setStatus("error");
    }
  };

  const fieldClass =
    "bg-field border-border focus:border-genoa focus:ring-genoa block w-full border-2 px-2.5 py-2 transition-colors outline-none focus:ring-2";
  const errorClass = "text-[0.75rem] font-semibold text-[#EC3013]";

  return (
    <section
      className="font-archivo mx-auto max-w-7xl scroll-mt-[5vh] px-5 md:mt-15.75 md:px-10"
      id="contact"
    >
      <div className="grid gap-3 pt-32 pb-6">
        <div className="border-border grid gap-2 border-b-2 pb-6 lg:border-none">
          <span className="text-eden text-sm font-extrabold uppercase">
            04 / GET IN TOUCH
          </span>
          <h2 className="text-ink text-3xl font-extrabold uppercase">
            CONNECT WITH ME
          </h2>
        </div>

        <div className="lg:border-border lg:grid lg:grid-cols-2 lg:border-t-2">
          <div className="border-border grid content-start items-start gap-8 border-b-2 pb-6 lg:border-r-2 lg:border-b-0 lg:pt-6 lg:pr-8">
            <p className="block max-w-[40ch]">
              I am looking for my first developer role: junior, intern or
              working student. If you have something open, or want to talk about
              a project, write to me.
            </p>

            <ul className="grid lg:gap-4">
              {SOCIALS.map(({ label, href }) => (
                <li key={label}>
                  <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="border-border group focus-visible:ring-genoa flex items-center justify-between border-t-2 py-2 focus-visible:ring-2 focus-visible:outline-none lg:border-2 lg:px-4"
                  >
                    <span className="text-ink group-hover:text-genoa font-extrabold transition-colors duration-200">
                      {label}
                    </span>
                    <HiArrowLongRight className="group-hover:fill-genoa transition-transform duration-300 group-hover:translate-x-2" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-6.5 lg:pl-8">
            <form
              className="grid gap-2 text-start"
              onSubmit={handleSubmit(onSubmit)}
              noValidate
            >
              <label htmlFor="name" className="text-ink/70 text-[0.75rem]">
                Name
              </label>
              <input
                type="text"
                id="name"
                placeholder="Your name"
                aria-invalid={!!errors.name}
                className={fieldClass}
                {...register("name")}
              />
              {errors.name && (
                <p role="alert" className={errorClass}>
                  {errors.name.message}
                </p>
              )}

              <label htmlFor="email" className="text-ink/70 text-[0.75rem]">
                Email
              </label>
              <input
                type="email"
                id="email"
                autoComplete="email"
                placeholder="you@example.com"
                aria-invalid={!!errors.email}
                className={fieldClass}
                {...register("email")}
              />
              {errors.email && (
                <p role="alert" className={errorClass}>
                  {errors.email.message}
                </p>
              )}

              <label htmlFor="message" className="text-ink/70 text-[0.75rem]">
                Message
              </label>
              <textarea
                id="message"
                rows={5}
                aria-invalid={!!errors.message}
                className={`${fieldClass} resize-y`}
                style={{ maxHeight: "50rem", minHeight: "10rem" }}
                {...register("message")}
              />
              {errors.message && (
                <p role="alert" className={errorClass}>
                  {errors.message.message}
                </p>
              )}

              <button
                type="submit"
                disabled={isSubmitting}
                className="group text-pampas bg-genoa relative isolate cursor-pointer overflow-hidden px-4 py-3 text-start font-extrabold transition-colors duration-200"
              >
                <span className="bg-ink absolute inset-0 -z-10 origin-left scale-x-0 transition-transform duration-300 ease-out group-hover:scale-x-100" />
                {isSubmitting ? "Sending…" : "Send message"}
              </button>

              {status === "success" && (
                <p
                  role="status"
                  className="text-genoa text-[0.75rem] font-semibold"
                >
                  Message sent. I will get back to you soon.
                </p>
              )}
              {status === "error" && (
                <p role="alert" className={errorClass}>
                  Message could not be sent. Try again, or email me directly at
                  rojusbalciunas@gmail.com.
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Connect;
