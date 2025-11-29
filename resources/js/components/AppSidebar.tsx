import * as React from "react"
import { Calendar, Home, Inbox, Search } from "lucide-react"
import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarGroup,
    SidebarGroupContent,
    SidebarHeader,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
    SidebarRail,
} from '@/components/ui/sidebar';
import { ProfileButton } from '@/components/Buttons/ProfileButton';
import { usePage } from '@inertiajs/react';
import { User } from '@/types/User';

const items = [
    {
        title: "My events",
        url: "#",
        icon: Home,
    },
    {
        title: "Event",
        url: "/events",
        icon: Inbox,
    },
    {
        title: "Competition",
        url: "#",
        icon: Calendar,
    },
    {
        title: "My competitions",
        url: "#",
        icon: Search,
    },
]

type AppSidebarProps = React.ComponentProps<typeof Sidebar> & {
    user: User;
};

export function AppSidebar({user, ...props }: AppSidebarProps) {

    return (
        <Sidebar collapsible="icon" {...props}>
            <SidebarHeader>
                <SidebarMenu>
                    <SidebarMenuItem>
                        <SidebarMenuButton size="lg" asChild={true}>
                            <a href="#">
                                <img src="/logo.png" className="size-8 rounded" alt="Logo" />
                                <div className="flex flex-col gap-0.5 leading-none">
                                    <span className="font-medium text-blue-600">moveTogether</span>
                                </div>
                            </a>
                        </SidebarMenuButton>
                    </SidebarMenuItem>
                </SidebarMenu>
            </SidebarHeader>
            <SidebarContent>
                <SidebarGroup>
                    <SidebarGroupContent>
                        <SidebarMenu>
                            {items.map((item) => (
                                <SidebarMenuItem key={item.title}>
                                    <SidebarMenuButton asChild={true}>
                                        <a href={item.url}>
                                            <item.icon />
                                            <span>{item.title}</span>
                                        </a>
                                    </SidebarMenuButton>
                                </SidebarMenuItem>
                            ))}
                        </SidebarMenu>
                    </SidebarGroupContent>
                </SidebarGroup>
            </SidebarContent>
            <SidebarFooter>
                <ProfileButton user={user} />
            </SidebarFooter>
            <SidebarRail />
        </Sidebar>
    )
}
