"use client";
import { Fragment, useState } from "react";
import { Card } from "./ui/card";
import Image from "next/image";
import { BookmarkCheck, BookmarkPlus, CirclePlay } from "lucide-react";
import Link from "next/link";
import { Badge } from "./ui/badge";
import NoResultsPlaceholder from "./noCategory";

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

type HeroProps = {
  videos: Video[];
};

const Hero = ({ videos }: HeroProps) => {
  const [bookmarkedItems, setBookmarkedItems] = useState<Record<string, boolean>>({});

  const toggleBookmark = (videoId: string) => {
    setBookmarkedItems(prev => ({
      ...prev,
      [videoId]: !prev[videoId],
    }));
  };

  return (
    <Fragment>
      <div>
        <div className="mt-20 mb-10 w-[100vw] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 place-items-center max-w-[100%] px-4">
          {videos.length === 0 ? (
              <NoResultsPlaceholder />
          ) : (
            videos.map((video) => (
              <Card
                className="w-[90vw] max-w-[600px] h-[380px] md:w-[45vw] lg:w-[32vw] flex flex-col items-center justify-start gap-4 p-4 shadow-lg rounded-xl"
                key={video.videoId}
              >
                <div className="w-full h-[200px] overflow-hidden rounded-xl bg-black">
                  <Image
                    loading={video === videos[0] ? "eager" : "lazy"}
                    priority={video === videos[0]}
                    fetchPriority="high"
                    src={`${video.thumbnail}?tr=w-356,h-200,f-webp`}
                    alt={video.title}
                    width={356}
                    height={200}
                    decoding="async"
                    aria-label={`Watch ${video.title}`}
                    className="w-full h-full object-cover rounded-xl"
                    sizes="(max-width: 768px) 90vw, (max-width: 1024px) 45vw, 32vw"
                  />
                </div>

                <div className="text-start w-full p-4">
                  <h3 className="text-xl font-semibold line-clamp-2">{video.title}</h3>
                  <p className="text-sm from-accent-foreground line-clamp-1 pt-2">{video.channelTitle}</p>
                  <div className="flex justify-between items-center pt-3">
                    <div className="flex gap-2 flex-wrap">
                      {video.tags.slice(0, 3).map((item, i) => (
                        <Badge
                          key={i}
                          variant="secondary"
                          className="cursor-pointer"
                        >
                          {item}
                        </Badge>
                      ))}
                    </div>
                    <div className="flex gap-3 items-center ml-1">
                      {bookmarkedItems[video.videoId] ? (
                        <BookmarkCheck
                          strokeWidth={1.5}
                          size={24}
                          className="cursor-pointe"
                          onClick={() => toggleBookmark(video.videoId)}
                        />
                      )

                        : (
                          <BookmarkPlus
                            strokeWidth={1.5}
                            size={24}
                            className="cursor-pointer"
                            onClick={() => toggleBookmark(video.videoId)}
                          />
                        )
                      }
                      <Link href={video.url} aria-label={`Watch ${video.title} on YouTube`} target="_blank" rel="noopener noreferrer">
                        <CirclePlay
                          strokeWidth={1.5}
                          size={24}

                        />
                      </Link>
                    </div>
                  </div>
                </div>
              </Card>
            ))
          )}
        </div>
      </div>
    </Fragment>
  );
};

export default Hero;