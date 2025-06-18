import {
    Home,
    Flame,
    Bookmark,
    BookOpen,
    Rocket,
    Cpu,
    Car,
    HeartPulse,
    Laptop,
    Shield,
    Zap,
    Microscope,
    Hammer,
    Gamepad,
    Anchor,
    Bot,
    Code,
    Film,
    BarChart,
    Layers,
    List,
} from "lucide-react";

import {
    Sidebar,
    SidebarContent,
    SidebarGroup,
    SidebarGroupContent,
    SidebarGroupLabel,
    SidebarHeader,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
    SidebarMenuSub,
    SidebarMenuSubButton,
    SidebarMenuSubItem,
    SidebarTrigger,
} from "@/components/ui/sidebar";
import { mockvideos } from "@/mock/videos";
const items = [
    {
        title: "Home",
        url: "#",
        icon: Home,
    },
    {
        title: "Trending",
        url: "#",
        icon: Flame,
    },
    {
        title: "Bookmarks",
        url: "#",
        icon: Bookmark,
    },
];

const categories = [
    {
        title: "Aerospace",
        url: "#",
        icon: Rocket,
    },
    {
        title: "Artificial Intelligence",
        url: "#",
        icon: Cpu,
    },
    {
        title: "Automobile",
        url: "#",
        icon: Car,
    },
    {
        title: "Biomedical",
        url: "#",
        icon: HeartPulse,
    },
    {
        title: "Computer Science",
        url: "#",
        icon: Laptop,
    },
    {
        title: "CyberSec Hacking",
        url: "#",
        icon: Shield,
    },
    {
        title: "Electrical Electronics",
        url: "#",
        icon: Zap,
    },
    {
        title: "Forensics",
        url: "#",
        icon: Microscope,
    },
    {
        title: "Mechanical Civil",
        url: "#",
        icon: Hammer,
    },
    {
        title: "Gaming",
        url: "#",
        icon: Gamepad,
    },
    {
        title: "Marine",
        url: "#",
        icon: Anchor,
    },
    {
        title: "Robotics",
        url: "#",
        icon: Bot,
    },
    {
        title: "Open Source",
        url: "#",
        icon: Code,
    },
    {
        title: "Documentaries",
        url: "#",
        icon: Film,
    },
];

const quickStats = [
    {
        title: "Total Videos",
        value: mockvideos.length,
        icon: BarChart,
    },
    {
        title: "Categories",
        value: [...new Set(mockvideos.map(item => item.category))].length,
        icon: Layers,
    },
    {
        title: "Topics",
        value: [...new Set(mockvideos.flatMap(item => item.tags))].length,
        icon: List,
    },
];

export interface AppSidebarProps {
    side?: "left" | "right";
    variant?: "sidebar" | "floating" | "inset";
    collapsible?: "offcanvas" | "icon";
    selectedCategory: string;
    onCategorySelect: (category: string) => void;
}

export default function AppSidebar({ side = "left", variant = "floating", collapsible = "offcanvas", onCategorySelect,selectedCategory }: AppSidebarProps) {
    return (
        <Sidebar className="overflow-hidden left-0 top-0 bottom-0 right-0 z-90 bg-white/80 backdrop-blur-2xl dark:bg-black/70" side={side} variant={variant} collapsible={collapsible} suppressHydrationWarning>
            <SidebarContent>
                <SidebarGroup>
                    <SidebarHeader className="flex flex-row justify-between items-center">
                        <SidebarGroupLabel className="text-3xl font-semibold pt-5">
                            Delta
                        </SidebarGroupLabel>
                        <SidebarTrigger className="relative top-2" />
                    </SidebarHeader>
                </SidebarGroup>

                <SidebarGroup>
                    <SidebarGroupLabel>Navigation</SidebarGroupLabel>
                    <SidebarGroupContent>
                        <SidebarMenu>
                            <SidebarMenuItem>
                                <SidebarMenuButton>
                                    <Home className="mr-2 h-4 w-4" />
                                    <span>Menu</span>
                                </SidebarMenuButton>
                                <SidebarMenuSub>
                                    {items.map((item) => (
                                        <SidebarMenuSubItem key={item.title}>
                                            <SidebarMenuSubButton asChild>
                                                <a href={item.url} className="flex items-center gap-2">
                                                    <item.icon className="h-4 w-4" />
                                                    <span>{item.title}</span>
                                                </a>
                                            </SidebarMenuSubButton>
                                        </SidebarMenuSubItem>
                                    ))}
                                </SidebarMenuSub>
                            </SidebarMenuItem>
                        </SidebarMenu>
                    </SidebarGroupContent>
                </SidebarGroup>

                <SidebarGroup>
                    <SidebarGroupLabel>Categories</SidebarGroupLabel>
                    <SidebarGroupContent>
                        <SidebarMenu>
                            <SidebarMenuItem>
                                <SidebarMenuButton asChild>
                                    <button
                                        onClick={() => onCategorySelect('All')}
                                        className={`flex items-center gap-2 w-full text-left px-2 py-1 rounded ${selectedCategory === 'All' ? "bg-blue-100 dark:bg-blue-800" : ""
                                            }`}
                                    >
                                        <BookOpen className="mr-2 h-4 w-4" />
                                        <span>All</span>
                                    </button>
                                </SidebarMenuButton>
                                <SidebarMenuSub>
                                    {categories.map((cat) => (
                                        <SidebarMenuSubItem key={cat.title}>
                                            <SidebarMenuSubButton asChild>
                                                <button
                                                    onClick={() => onCategorySelect(cat.title)}
                                                    className={`flex items-center gap-2 w-full text-left px-2 py-1 rounded ${selectedCategory === cat.title ? "bg-blue-100 dark:bg-blue-800" : ""
                                                        }`}
                                                >
                                                    <cat.icon className="h-4 w-4" />
                                                    <span>{cat.title}</span>
                                                </button>
                                            </SidebarMenuSubButton>
                                        </SidebarMenuSubItem>
                                    ))}
                                </SidebarMenuSub>
                            </SidebarMenuItem>
                        </SidebarMenu>
                    </SidebarGroupContent>
                </SidebarGroup>

                <SidebarGroup>
                    <SidebarGroupLabel>Quick Stats</SidebarGroupLabel>
                    <SidebarGroupContent>
                        <div className="space-y-2 px-4 py-2 text-sm text-muted-foreground">
                            {quickStats.map((stat) => (
                                <div
                                    key={stat.title}
                                    className="flex items-center justify-between"
                                >
                                    <div className="flex items-center gap-2">
                                        <stat.icon className="h-4 w-4 text-muted-foreground" />
                                        <span>{stat.title}</span>
                                    </div>
                                    <span className="font-semibold">{stat.value}</span>
                                </div>
                            ))}
                        </div>
                    </SidebarGroupContent>
                </SidebarGroup>
            </SidebarContent>
        </Sidebar>
    );
}