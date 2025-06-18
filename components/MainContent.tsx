"use client";

import { useSidebar } from "@/components/ui/sidebar";

export default function MainContent({
  children,
}: {
  children: React.ReactNode;
}) {
  const { state } = useSidebar(); // "expanded" | "collapsed"

  return (
    <main
      className={`flex-1 transition-all duration-200 ease-in-out ${
        state === "expanded" ? "pl-64" : "pl-12" // Adjust to match sidebar width
      }`}
    >
      {children}
    </main>
  );
}
