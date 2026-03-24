"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Home,
  Send,
  Users as UsersIcon,
  BarChart3,
} from "lucide-react";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";

type NavItem = {
  label: string;
  href: string;
  icon: React.ComponentType<{ className?: string }>;
  disabled?: boolean;
};

const navItems: NavItem[] = [
  { label: "Dashboard", href: "/dashboard", icon: Home },
  { label: "Campaigns", href: "/dashboard/campaigns", icon: Send },
  { label: "Subscribers", href: "/dashboard/subscribers", icon: UsersIcon },
  { label: "Analytics", href: "/dashboard/analytics", icon: BarChart3 },
];

function NavLink({
  href,
  label,
  icon: Icon,
  isActive,
  disabled,
}: {
  href: string;
  label: string;
  icon: React.ComponentType<{ className?: string }>;
  isActive: boolean;
  disabled?: boolean;
}) {
  if (disabled) {
    return (
      <span className="flex w-full items-center gap-3 rounded-lg px-3 py-2 text-sm text-muted-foreground/40 cursor-not-allowed select-none">
        <Icon className="size-4" />
        {label}
      </span>
    );
  }

  return (
    <Link
      href={href}
      className={`flex w-full items-center gap-3 rounded-lg px-3 py-2 text-sm transition-colors ${
        isActive
          ? "bg-primary/10 text-primary font-medium"
          : "text-muted-foreground hover:bg-accent hover:text-accent-foreground"
      }`}
    >
      <Icon className="size-4" />
      {label}
    </Link>
  );
}

export function SidebarNav() {
  const pathname = usePathname();

  return (
    <nav className="flex flex-col gap-1">
      {navItems.map((item) => (
        <NavLink
          key={item.href}
          {...item}
          isActive={pathname === item.href}
        />
      ))}
    </nav>
  );
}