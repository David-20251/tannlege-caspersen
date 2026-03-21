import { useState } from "react";
import { format } from "date-fns";
import { nb } from "date-fns/locale";
import { CalendarIcon, CheckCircle2, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { cn } from "@/lib/utils";
import { useToast } from "@/hooks/use-toast";

const ZAPIER_WEBHOOK_URL = ""; // User will paste their Zapier webhook URL here

const BookingForm = () => {
  const { toast } = useToast();
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [preferredDate, setPreferredDate] = useState<Date>();
  const [submitted, setSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!name.trim() || name.trim().split(/\s+/).length < 2)
      newErrors.name = "Vennligst fyll inn fornavn og etternavn";
    if (!phone.trim() || !/^(\+?\d{8,15})$/.test(phone.replace(/\s/g, "")))
      newErrors.phone = "Vennligst fyll inn et gyldig telefonnummer";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsLoading(true);

    const payload = {
      name: name.trim(),
      phone: phone.trim(),
      preferred_date: preferredDate ? format(preferredDate, "yyyy-MM-dd") : "Ikke valgt",
      timestamp: new Date().toISOString(),
      source: "SmartLook Optikk – 40% kampanje",
    };

    try {
      if (ZAPIER_WEBHOOK_URL) {
        await fetch(ZAPIER_WEBHOOK_URL, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          mode: "no-cors",
          body: JSON.stringify(payload),
        });
      }

      setSubmitted(true);
      toast({
        title: "Takk for din bestilling!",
        description: "Vi kontakter deg snart for å bekrefte timen.",
      });
    } catch (error) {
      console.error("Error sending webhook:", error);
      toast({
        title: "Noe gikk galt",
        description: "Vennligst prøv igjen eller ring oss på 48 60 89 39.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  if (submitted) {
    return (
      <div className="text-center py-12 animate-scale-in">
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-6">
          <CheckCircle2 className="w-8 h-8 text-primary" />
        </div>
        <h3 className="text-2xl font-bold mb-3 text-foreground">
          Takk, {name.split(" ")[0]}!
        </h3>
        <p className="text-muted-foreground max-w-md mx-auto leading-relaxed mb-6">
          Din forespørsel er registrert. Vi kontakter deg snart for å bekrefte din time.
          {preferredDate && (
            <> Du ønsker time <strong>{format(preferredDate, "EEEE d. MMMM", { locale: nb })}</strong>.</>
          )}
        </p>
        <a
          href="https://www.smartlookoptikk.no/bestill-synstest?single=true&current_optician=5176"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-primary font-medium hover:underline"
        >
          Eller bestill time direkte på smartlookoptikk.no →
        </a>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4 max-w-md mx-auto">
      <div>
        <Input
          placeholder="Fornavn og etternavn"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="h-12 bg-background border-border text-base"
          maxLength={100}
        />
        {errors.name && (
          <p className="text-destructive text-sm mt-1">{errors.name}</p>
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

      {/* Preferred date picker */}
      <div>
        <Popover>
          <PopoverTrigger asChild>
            <Button
              variant="outline"
              className={cn(
                "w-full h-12 justify-start text-left font-normal text-base",
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
        className="w-full h-14 text-lg font-semibold bg-primary text-primary-foreground hover:bg-primary/90 active:scale-[0.97] transition-all duration-200"
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
