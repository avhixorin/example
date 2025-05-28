import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function JoinUs() {
  const waitlistUsers = [
    { initials: "JD", color: "bg-purple-500" },
    { initials: "AS", color: "bg-blue-500" },
    { initials: "MK", color: "bg-blue-600" },
  ];

  return (
    <section className="relative py-16 px-6 w-full">
      <div className="relative z-10 container mx-auto max-w-7xl text-center">
        <div className="flex flex-col sm:flex-row gap-4 mb-8 w-full items-stretch">
          <div className="flex-1">
            <Input
              type="email"
              placeholder="Enter your email"
              className="h-12 w-full bg-black/30 border-white/20 text-white placeholder:text-white/70 focus:border-white/40 focus:ring-white/20"
            />
          </div>

          <Button className="h-12 px-8 bg-black hover:bg-gray-800 text-white font-medium rounded-lg transition-colors duration-200 whitespace-nowrap cursor-pointer">
            Join the Waitlist
          </Button>
        </div>

        {/* Waitlist */}
        <div className="flex items-center justify-center gap-4">
          <div className="flex -space-x-2">
            {waitlistUsers.map((user, index) => (
              <div
                key={index}
                className={`w-10 h-10 ${user.color} rounded-full flex items-center justify-center text-white text-sm font-semibold border-2 border-white/20 shadow-lg`}
              >
                {user.initials}
              </div>
            ))}
          </div>

          <p className="text-black/90 font-medium">
            100+ people on the waitlist
          </p>
        </div>
      </div>
    </section>
  );
}
