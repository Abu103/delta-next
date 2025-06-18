// app/page.tsx
"use client";

import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import AppSidebar from "@/components/Sidebar";
import { SidebarProvider, SidebarInset } from "@/components/ui/sidebar";
import { mockvideos } from "@/mock/videos";
import { useState } from "react";

export default function Home() {
  const [selectedCategory, setSelectedCategory] = useState('All');


  const mappedVideos = mockvideos.map((v) => ({
    videoId: v.$id,
    title: v.title,
    channelTitle: v.author,
    thumbnail: v.imageurl,
    publishedAt: v["date-published"] ?? "",
    category: v.category,
    tags: v.tags,
    url: v.youtubelink,
  }))

  const filteredVideos = selectedCategory === 'All'
    ? mappedVideos
    : mappedVideos.filter(video => video.category === selectedCategory);

  return (
    <SidebarProvider defaultOpen={false}>
      <div className="relative flex z-10 min-h-screen w-full flex-col">
        <Navbar />

        <AppSidebar
          side="left"
          variant="floating"
          collapsible="offcanvas"
          selectedCategory={selectedCategory}
          onCategorySelect={setSelectedCategory}
        />

        <SidebarInset className="flex-1">
          <Hero videos={filteredVideos} />
        </SidebarInset>
      </div>
    </SidebarProvider>
  );
}