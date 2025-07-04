
import React, { useState } from 'react';
import { MessageCircle, Users, User, Video, Settings, Hash } from 'lucide-react';
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";

const navigationItems = [
  { title: "Messages", icon: MessageCircle, id: "messages" },
  { title: "Teams", icon: Users, id: "teams" },
  { title: "Social", icon: User, id: "social" },
  { title: "Video Calls", icon: Video, id: "video" },
  { title: "Settings", icon: Settings, id: "settings" },
];

const channels = [
  { name: "general", id: "general" },
  { name: "development", id: "development" },
  { name: "design", id: "design" },
  { name: "random", id: "random" },
];

interface AppSidebarProps {
  activeSection?: string;
  onSectionChange?: (section: string) => void;
}

export function AppSidebar({ activeSection = "messages", onSectionChange }: AppSidebarProps) {
  return (
    <Sidebar className="border-r border-white/20 bg-white/10 backdrop-blur-lg">
      <SidebarContent className="p-4">
        <div className="mb-6">
          <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            CommFlow
          </h1>
        </div>

        <SidebarGroup>
          <SidebarGroupLabel className="text-gray-700 font-medium mb-3">
            Navigation
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu className="space-y-2">
              {navigationItems.map((item) => (
                <SidebarMenuItem key={item.id}>
                  <SidebarMenuButton
                    onClick={() => onSectionChange?.(item.id)}
                    className={`w-full flex items-center space-x-3 px-3 py-2 rounded-lg transition-all duration-200 ${
                      activeSection === item.id
                        ? 'bg-blue-100 text-blue-700 shadow-sm'
                        : 'hover:bg-white/50 text-gray-700'
                    }`}
                  >
                    <item.icon className="h-5 w-5" />
                    <span>{item.title}</span>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        <SidebarGroup className="mt-8">
          <SidebarGroupLabel className="text-gray-700 font-medium mb-3">
            Channels
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu className="space-y-1">
              {channels.map((channel) => (
                <SidebarMenuItem key={channel.id}>
                  <SidebarMenuButton className="w-full flex items-center space-x-3 px-3 py-2 rounded-lg hover:bg-white/50 text-gray-600 transition-all duration-200">
                    <Hash className="h-4 w-4" />
                    <span>{channel.name}</span>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
