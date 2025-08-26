import { Check } from "lucide-react";
import { cn } from "@/lib/utils";

interface SuccessIconProps {
  className?: string;
  size?: number;
}

export function SuccessIcon({ className, size = 120 }: SuccessIconProps) {
  return (
    <div className={cn(
      "relative flex items-center justify-center",
      "bg-gradient-cosmic rounded-full",
      "shadow-glow-primary",
      className
    )} 
    style={{ width: size, height: size }}>
      {/* Outer glow ring */}
      <div className="absolute inset-0 rounded-full bg-gradient-cosmic opacity-20 blur-md animate-pulse"></div>
      
      {/* Inner background */}
      <div className="relative flex items-center justify-center bg-surface/80 rounded-full" 
           style={{ width: size * 0.7, height: size * 0.7 }}>
        <Check 
          size={size * 0.35} 
          className="text-primary-foreground drop-shadow-lg animate-in fade-in-0 zoom-in-0 duration-500" 
          strokeWidth={3}
        />
      </div>
    </div>
  );
}