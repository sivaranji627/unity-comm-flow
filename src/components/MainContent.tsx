
import React, { useState } from 'react';
import { MessagingSection } from './sections/MessagingSection';
import { TeamsSection } from './sections/TeamsSection';
import { SocialSection } from './sections/SocialSection';
import { VideoSection } from './sections/VideoSection';
import { SettingsSection } from './sections/SettingsSection';

export function MainContent() {
  const [activeSection, setActiveSection] = useState('messages');

  const renderSection = () => {
    switch (activeSection) {
      case 'messages':
        return <MessagingSection />;
      case 'teams':
        return <TeamsSection />;
      case 'social':
        return <SocialSection />;
      case 'video':
        return <VideoSection />;
      case 'settings':
        return <SettingsSection />;
      default:
        return <MessagingSection />;
    }
  };

  return (
    <main className="flex-1 p-6">
      {renderSection()}
    </main>
  );
}
