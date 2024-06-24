import ContactForm from "@/components/ContactForm";

export default function ContactPage() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-gray-100 py-10">
      <section className="max-w-4xl w-full text-left mb-10">
        <h2 className="text-5xl font-bold mb-6 text-gray-800 text-center">
          Contact Me
        </h2>
        <ContactForm />
      </section>
    </main>
  );
}