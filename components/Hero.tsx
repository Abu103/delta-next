"use client";
import { Fragment, useState } from "react";
import { Card } from "./ui/card";
import Image from "next/image";
import { mockvideos } from "@/mock/videos";
import { Skeleton } from "./ui/skeleton";
import { BookmarkCheck, BookmarkPlus, CirclePlay } from "lucide-react";
import Link from "next/link";
import { Badge } from "./ui/badge";

type Video = {
  videoId: string;
  title: string;
  channelTitle: string;
  thumbnail: string;
  publishedAt: string;
  category: string;
  tags: string[];
  url: string;
};

const mockVideos: Video[] = mockvideos.map((v) => ({
  videoId: v.$id,
  title: v.title,
  channelTitle: v.author,
  thumbnail: v.imageurl,
  publishedAt: v["date-published"] ?? "",
  category: v.category,
  tags: v.tags,
  url: v.youtubelink,
}));

const Hero = () => {
  const [videos] = useState<Video[]>(mockVideos);
  const [bookmarkedItems, setBookmarkedItems] = useState<Record<string, boolean>>({});

  return (
    <Fragment>
      <div className="mt-20 mb-10 w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 place-items-center max-w-[100%]">
        {videos.length === 0 ? (
          Array.from({ length: 6 }).map((_, i) => (
            <div key={i} className="flex flex-col space-y-3">
              <Skeleton className="h-[125px] w-[250px] rounded-xl" />
              <div className="space-y-2">
                <Skeleton className="h-4 w-[250px]" />
                <Skeleton className="h-4 w-[200px]" />
              </div>
            </div>
          ))
        ) : (
          videos.map((video) => (
            <Card
              className="w-[90vw] max-w-[600px] h-[320px] md:w-[45vw] lg:w-[32vw] flex flex-col items-center justify-start gap-4 p-4 shadow-md"
              key={video.videoId}
            >
              <div className="relative w-full aspect-video overflow-hidden rounded-2xl bg-gray-700">
                <Image
                  loading="lazy"
                  src={video.thumbnail}
                  alt={video.title}
                  fill
                  className="object-cover rounded-2xl"
                  unoptimized
                />
              </div>

              <div className="text-start w-full">
                <h3 className="text-lg font-semibold line-clamp-2 px-2">{video.title}</h3>
                <div className="flex justify-between px-2 py-3">
                  <p className="text-md text-muted-foreground line-clamp-1 pt-1">{video.channelTitle}</p>
                  <div className="flex gap-3">
                    {bookmarkedItems[video.videoId] ? (
                      <BookmarkCheck
                        strokeWidth={1}
                        size={22}
                        className="cursor-pointer"
                        onClick={() =>
                          setBookmarkedItems((prev) => ({
                            ...prev,
                            [video.videoId]: false,
                          }))
                        }
                      />
                    ) : (
                      <BookmarkPlus
                        strokeWidth={1}
                        size={22}
                        className="cursor-pointer"
                        onClick={() =>
                          setBookmarkedItems((prev) => ({
                            ...prev,
                            [video.videoId]: true,
                          }))
                        }
                      />
                    )}
                    <Link href={video.url} target="_blank">
                      <CirclePlay strokeWidth={1.2} size={22 } />
                    </Link>
                  </div>
                </div>
                <div className="flex gap-2 px-2 flex-wrap">
                  {video.tags.map((item, i) => {
                    if (i === 3) return;
                    return (
                      <Badge key={i} variant="secondary" className="cursor-pointer">{item}</Badge>
                    )
                  })}
                </div>
              </div>
            </Card>
          ))
        )}
      </div>
    </Fragment>
  );
};

export default Hero;
