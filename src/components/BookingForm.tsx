import { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { format } from "date-fns";
import { nb } from "date-fns/locale";
import { CalendarIcon, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { cn } from "@/lib/utils";
import { useToast } from "@/hooks/use-toast";
import { submitLead } from "@/lib/api";
import { trackEvent } from "@/lib/analytics";

const BookingForm = () => {
  const { toast } = useToast();
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [birthdate, setBirthdate] = useState("");
  const [phone, setPhone] = useState("");
  const [preferredDate, setPreferredDate] = useState<Date>();
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const isSubmitting = useRef(false);

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!name.trim() || name.trim().split(/\s+/).length < 2)
      newErrors.name = "Vennligst fyll inn fornavn og etternavn";
    if (!birthdate.trim() || !/^\d{6}$/.test(birthdate.trim()))
      newErrors.birthdate = "Fyll inn fødselsdato med 6 siffer (f.eks. 261277)";
    if (!phone.trim() || !/^\d{8}$/.test(phone.replace(/\s/g, "")))
      newErrors.phone = "Vennligst fyll inn et gyldig 8-sifret telefonnummer";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (isSubmitting.current) return;
    if (!validate()) return;

    if (!navigator.onLine) {
      toast({
        title: "Ingen internettforbindelse",
        description: "Sjekk tilkoblingen din og prøv igjen.",
        variant: "destructive",
      });
      return;
    }

    isSubmitting.current = true;
    setIsLoading(true);

    try {
      await submitLead({
        name: name.trim(),
        birthdate: birthdate.trim(),
        phone: phone.trim(),
        preferred_date: preferredDate ? format(preferredDate, "yyyy-MM-dd") : "Ikke valgt",
        timestamp: new Date().toISOString(),
        source: "SmartLook Optikk – 40% kampanje",
      });

      trackEvent("Lead", {
        name: name.trim(),
        phone: phone.trim(),
        source: "SmartLook Optikk – 40% kampanje",
      });

      setName("");
      setBirthdate("");
      setPhone("");
      setPreferredDate(undefined);
      navigate("/takk");
    } catch (error) {
      console.error("Error sending webhook:", error);
      toast({
        title: "Noe gikk galt",
        description: "Vennligst prøv igjen eller ring oss på 48 60 89 39.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
      isSubmitting.current = false;
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 max-w-md mx-auto">
      <div>
        <Input
          placeholder="Fornavn og etternavn"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="h-12 bg-secondary/50 border-border text-base text-foreground placeholder:text-muted-foreground"
          maxLength={100}
        />
        {errors.name && <p className="text-destructive text-sm mt-1">{errors.name}</p>}
      </div>
      <div>
        <Input
          type="text"
          inputMode="numeric"
          placeholder="Fødselsdato (ddmmåå, f.eks. 261277)"
          value={birthdate}
          onChange={(e) => setBirthdate(e.target.value.replace(/\D/g, "").slice(0, 6))}
          className="h-12 bg-secondary/50 border-border text-base text-foreground placeholder:text-muted-foreground"
          maxLength={6}
        />
        {errors.birthdate && <p className="text-destructive text-sm mt-1">{errors.birthdate}</p>}
      </div>
      <div>
        <Input
          type="tel"
          inputMode="numeric"
          placeholder="Telefonnummer (8 siffer)"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          className="h-12 bg-secondary/50 border-border text-base text-foreground placeholder:text-muted-foreground"
          maxLength={20}
        />
        {errors.phone && <p className="text-destructive text-sm mt-1">{errors.phone}</p>}
      </div>

      <div>
        <Popover>
          <PopoverTrigger asChild>
            <Button
              variant="outline"
              className={cn(
                "w-full h-12 justify-start text-left font-normal text-base bg-secondary/50 border-border",
                !preferredDate && "text-muted-foreground"
              )}
            >
              <CalendarIcon className="mr-2 h-4 w-4" />
              {preferredDate
                ? format(preferredDate, "EEEE d. MMMM yyyy", { locale: nb })
                : "Velg ønsket dato (valgfritt)"}
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-auto p-0" align="start">
            <Calendar
              mode="single"
              selected={preferredDate}
              onSelect={setPreferredDate}
              disabled={(date) => {
                const today = new Date();
                today.setHours(0, 0, 0, 0);
                return date < today || date.getDay() === 0;
              }}
              initialFocus
              className={cn("p-3 pointer-events-auto")}
            />
          </PopoverContent>
        </Popover>
        <p className="text-xs text-muted-foreground mt-1">
          Vi kontakter deg for å bekrefte endelig tidspunkt
        </p>
      </div>

      <Button
        type="submit"
        size="lg"
        disabled={isLoading}
        className="w-full h-14 text-lg font-semibold bg-primary text-primary-foreground hover:bg-primary/90 active:scale-[0.97] transition-all duration-200 shadow-lg shadow-primary/25"
      >
        {isLoading ? (
          <>
            <Loader2 className="mr-2 h-5 w-5 animate-spin" />
            Sender...
          </>
        ) : (
          "Bestill time nå"
        )}
      </Button>

      <div className="text-center pt-2">
        <a
          href="https://www.smartlookoptikk.no/bestill-synstest?single=true&current_optician=5176"
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm text-muted-foreground hover:text-primary transition-colors underline"
        >
          Eller bestill direkte på smartlookoptikk.no
        </a>
      </div>

      <p className="text-xs text-muted-foreground text-center leading-relaxed">
        Ved å sende inn skjemaet godtar du at vi kontakter deg for timebestilling.
      </p>
    </form>
  );
};

export default BookingForm;
