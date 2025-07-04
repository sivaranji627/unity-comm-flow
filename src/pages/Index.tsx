
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from '@/components/AppSidebar';
import { MainContent } from '@/components/MainContent';
import { Header } from '@/components/Header';

const Index = () => {
  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full bg-gradient-to-br from-blue-50 to-indigo-100">
        <AppSidebar />
        <div className="flex-1 flex flex-col">
          <Header />
          <MainContent />
        </div>
      </div>
    </SidebarProvider>
  );
};

export default Index;
