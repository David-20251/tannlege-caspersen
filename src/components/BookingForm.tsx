import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { CheckCircle2 } from "lucide-react";

const BookingForm = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phone, setPhone] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!firstName.trim()) newErrors.firstName = "Vennligst fyll inn fornavn";
    if (!lastName.trim()) newErrors.lastName = "Vennligst fyll inn etternavn";
    if (!phone.trim() || !/^(\+?\d{8,15})$/.test(phone.replace(/\s/g, "")))
      newErrors.phone = "Vennligst fyll inn et gyldig telefonnummer";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      setSubmitted(true);
    }
  };

  if (submitted) {
    return (
      <div className="text-center py-12 animate-scale-in">
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-6">
          <CheckCircle2 className="w-8 h-8 text-primary" />
        </div>
        <h3 className="text-2xl font-bold mb-3 text-foreground">
          Takk, {firstName}!
        </h3>
        <p className="text-muted-foreground max-w-md mx-auto leading-relaxed">
          Ditt tilbud er registrert. Vi sender deg en SMS-bekreftelse og kontakter deg snart for å finne en passende tid til synsprøve.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4 max-w-md mx-auto">
      <div>
        <Input
          placeholder="Fornavn"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          className="h-12 bg-background border-border text-base"
          maxLength={100}
        />
        {errors.firstName && (
          <p className="text-destructive text-sm mt-1">{errors.firstName}</p>
        )}
      </div>
      <div>
        <Input
          placeholder="Etternavn"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          className="h-12 bg-background border-border text-base"
          maxLength={100}
        />
        {errors.lastName && (
          <p className="text-destructive text-sm mt-1">{errors.lastName}</p>
        )}
      </div>
      <div>
        <Input
          type="tel"
          placeholder="Telefonnummer"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          className="h-12 bg-background border-border text-base"
          maxLength={20}
        />
        {errors.phone && (
          <p className="text-destructive text-sm mt-1">{errors.phone}</p>
        )}
      </div>
      <Button
        type="submit"
        size="lg"
        className="w-full h-14 text-lg font-semibold bg-primary text-primary-foreground hover:bg-primary/90 active:scale-[0.97] transition-all duration-200"
      >
        Ja, jeg vil benytte tilbudet!
      </Button>
      <p className="text-xs text-muted-foreground text-center leading-relaxed">
        Ved å sende inn skjemaet godtar du at vi kontakter deg angående din timebestilling.
      </p>
    </form>
  );
};

export default BookingForm;
