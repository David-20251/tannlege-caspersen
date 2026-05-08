import { useState } from "react";

const ContactFormSection = () => {
  const [formData, setFormData] = useState({
    navn: "",
    telefon: "",
    epost: "",
    melding: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      // Submit the form data
      const response = await fetch("/api/submit-lead", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.navn,
          phone: formData.telefon,
          email: formData.epost,
          message: formData.melding,
          timestamp: new Date().toISOString(),
        }),
      });

      if (response.ok) {
        setSubmitted(true);
        setFormData({
          navn: "",
          telefon: "",
          epost: "",
          melding: "",
        });
        // Reset success message after 3 seconds
        setTimeout(() => setSubmitted(false), 3000);
      } else {
        alert("Noe gikk galt. Vennligst prøv igjen.");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("Noe gikk galt. Vennligst prøv igjen.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="w-full bg-primary py-12 md:py-16">
      <div className="max-w-2xl mx-auto px-6">
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-2" style={{ fontFamily: "'DM Serif Display', serif" }}>
          Kontakt oss i dag
        </h2>
        <p className="text-white/80 mb-8">
          så finner vi en tid som passer for deg.
        </p>

        {submitted && (
          <div className="mb-6 p-4 bg-white/20 border border-white/40 rounded-lg text-white text-center">
            ✓ Takk! Vi har mottatt din melding og kontakter deg snart.
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="navn"
            placeholder="Navn"
            value={formData.navn}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 rounded bg-white text-foreground placeholder:text-foreground/50 focus:outline-none focus:ring-2 focus:ring-white/30"
          />

          <input
            type="tel"
            name="telefon"
            placeholder="Telefon"
            value={formData.telefon}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 rounded bg-white text-foreground placeholder:text-foreground/50 focus:outline-none focus:ring-2 focus:ring-white/30"
          />

          <input
            type="email"
            name="epost"
            placeholder="E-postadresse"
            value={formData.epost}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 rounded bg-white text-foreground placeholder:text-foreground/50 focus:outline-none focus:ring-2 focus:ring-white/30"
          />

          <textarea
            name="melding"
            placeholder="Melding"
            value={formData.melding}
            onChange={handleChange}
            rows={4}
            className="w-full px-4 py-3 rounded bg-white text-foreground placeholder:text-foreground/50 focus:outline-none focus:ring-2 focus:ring-white/30 resize-none"
          />

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-white text-primary font-bold py-3 rounded hover:bg-white/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {loading ? "Sender..." : "Send"}
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactFormSection;
