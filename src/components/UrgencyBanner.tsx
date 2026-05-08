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

      // Calculate total hours elapsed since Monday 00:00
      const hoursSinceMonday = daysFromMonday * 24 + hourOfDay;

      // Calculate how many hours should be booked (roughly 2-3 per day)
      const hoursBooked = Math.floor(hoursSinceMonday * 2.5);

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
    <div className="fixed top-16 left-0 right-0 z-40 bg-primary text-white py-3 px-6 shadow-lg">
      <div className="max-w-5xl mx-auto flex items-center justify-between gap-4">
        <div className="flex items-center gap-3 flex-1">
          <span className="text-sm md:text-base font-semibold">
            {remainingHours > 0 ? (
              <>Bare {remainingHours} ledige timer igjen denne uken — bestill nå!</>
            ) : (
              <>Alle timer er booket denne uken. Bestill for neste uke!</>
            )}
          </span>
        </div>
        <button
          onClick={onBookClick}
          className="bg-white text-primary px-4 py-2 rounded-lg font-bold text-sm hover:bg-gray-100 transition-colors whitespace-nowrap"
        >
          Bestill nå
        </button>
      </div>
    </div>
  );
};

export default UrgencyBanner;
