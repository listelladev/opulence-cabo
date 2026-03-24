"use client";

import { LangProvider } from "@/components/LangContext";

export function Providers({ children }: { children: React.ReactNode }) {
  return <LangProvider>{children}</LangProvider>;
}
