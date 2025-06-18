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
} from "@/components/ui/sidebar"

// Menu items.
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
        title: "All Categories",
        url: "#",
        icon: BookOpen,
    },
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
        value: 25,
        icon: BarChart,
    },
    {
        title: "Categories",
        value: 15,
        icon: Layers,
    },
    {
        title: "Topics",
        value: 35,
        icon: List,
    },
];

export default function AppSidebar() {
    return (
        <Sidebar>

            <SidebarContent>
                <SidebarGroup  >
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
                                <SidebarMenuButton>
                                    <BookOpen className="mr-2 h-4 w-4" />
                                    <span>All</span>
                                </SidebarMenuButton>
                                <SidebarMenuSub>
                                    {categories.map((cat) => (
                                        <SidebarMenuSubItem key={cat.title}>
                                            <SidebarMenuSubButton asChild>
                                                <a href={cat.url} className="flex items-center gap-2">
                                                    <cat.icon className="h-4 w-4" />
                                                    <span>{cat.title}</span>
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
