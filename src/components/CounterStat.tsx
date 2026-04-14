import { useCounter } from "@/hooks/use-counter";
import type { LucideIcon } from "lucide-react";

interface CounterStatProps {
  icon: LucideIcon;
  value: number;
  suffix: string;
  label: string;
}

export function CounterStat({ icon: Icon, value, suffix, label }: CounterStatProps) {
  const { count, ref } = useCounter(value, 2000);

  return (
    <div ref={ref} className="text-center">
      <div className="w-12 h-12 mx-auto mb-3 rounded-lg bg-accent/10 flex items-center justify-center">
        <Icon size={22} className="text-accent" />
      </div>
      <p className="text-2xl font-bold text-foreground font-heading">
        {count}{suffix}
      </p>
      <p className="text-xs text-muted-foreground mt-1">{label}</p>
    </div>
  );
}
