import { useState, useEffect } from "react";

interface UrgencyBannerProps {
  onBookClick: () => void;
}

const UrgencyBanner = ({ onBookClick }: UrgencyBannerProps) => {
  const [remainingHours, setRemainingHours] = useState(0);

  useEffect(() => {
    const calculateRemainingHours = () => {
      const now = new Date();
      const dayOfWeek = now.getDay(); // 0 = Sunday, 1 = Monday, etc.
      const hourOfDay = now.getHours();

      // Monday = 1, so if it's Monday or later in the week (1-5)
      // If it's Saturday (6) or Sunday (0), calculate from the previous Monday
      const daysFromMonday = dayOfWeek === 0 ? -1 : dayOfWeek - 1;

      if (daysFromMonday < 0) {
        // It's Sunday - no more slots available
        setRemainingHours(0);
        return;
      }

      // Start with a base number on Monday (between 15-20 slots, representing hours)
      // Use a consistent seed based on the Monday of this week
      const mondayDate = new Date(now);
      mondayDate.setDate(now.getDate() - daysFromMonday);
      mondayDate.setHours(0, 0, 0, 0);

      // Generate consistent "random" starting hours for the week (15-20)
      const weekSeed = Math.floor(mondayDate.getTime() / (24 * 60 * 60 * 1000));
      const startingHours = 15 + (weekSeed % 6); // 15-20 hours

      // Calculate hours booked per day (~3.5 hours per day on average)
      // So by Friday we're mostly booked out, by Saturday completely
      const hoursPerDay = startingHours / 5; // Distribute across 5 work days
      const hoursBookedByDay = Math.floor(daysFromMonday * hoursPerDay);

      // Add a small amount for time of day (a bit more booked as day progresses)
      const hoursBookedByTime = Math.floor((hourOfDay / 24) * hoursPerDay);

      // Total hours booked
      const hoursBooked = hoursBookedByDay + hoursBookedByTime;

      // Calculate remaining
      const remaining = Math.max(0, startingHours - hoursBooked);

      setRemainingHours(remaining);
    };

    calculateRemainingHours();

    // Update every hour
    const interval = setInterval(calculateRemainingHours, 60 * 60 * 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed left-0 right-0 z-30 bg-primary text-white py-2 px-6 shadow-lg" style={{ top: "64px" }}>
      <div className="max-w-5xl mx-auto flex items-center justify-between gap-4">
        <div className="flex items-center gap-3 flex-1">
          <span className="text-sm md:text-base font-semibold">
            {remainingHours > 0 ? (
              <>Begrenset kapasitet — Bare {remainingHours} ledige timer igjen denne uken</>
            ) : (
              <>Premium konsultasjoner for denne uken er booket — Book for neste uke</>
            )}
          </span>
        </div>
        <button
          onClick={onBookClick}
          className="bg-white text-primary px-4 py-2 rounded-lg font-bold text-sm hover:bg-gray-100 transition-colors whitespace-nowrap"
        >
          Book nå
        </button>
      </div>
    </div>
  );
};

export default UrgencyBanner;
