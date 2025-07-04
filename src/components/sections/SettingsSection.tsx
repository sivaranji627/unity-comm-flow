
import React from 'react';
import { User, Bell, Shield, Palette, Globe } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Switch } from '@/components/ui/switch';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

export function SettingsSection() {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-gray-800 mb-2">Settings</h2>
        <p className="text-gray-600">Manage your account and preferences</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Profile Settings */}
        <Card className="bg-white/60 backdrop-blur-sm border-white/20">
          <CardHeader>
            <CardTitle className="flex items-center">
              <User className="h-5 w-5 mr-2" />
              Profile
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center space-x-4">
              <Avatar className="h-16 w-16">
                <AvatarImage src="https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=100&h=100&fit=crop&crop=faces" />
                <AvatarFallback>JD</AvatarFallback>
              </Avatar>
              <div>
                <h3 className="font-medium text-gray-900">Jane Doe</h3>
                <p className="text-sm text-gray-600">jane.doe@company.com</p>
                <Button variant="outline" size="sm" className="mt-2">
                  Change Photo
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Notification Settings */}
        <Card className="bg-white/60 backdrop-blur-sm border-white/20">
          <CardHeader>
            <CardTitle className="flex items-center">
              <Bell className="h-5 w-5 mr-2" />
              Notifications
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium">Message Notifications</p>
                <p className="text-sm text-gray-600">Get notified of new messages</p>
              </div>
              <Switch defaultChecked />
            </div>
            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium">Call Notifications</p>
                <p className="text-sm text-gray-600">Get notified of incoming calls</p>
              </div>
              <Switch defaultChecked />
            </div>
            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium">Email Digest</p>
                <p className="text-sm text-gray-600">Daily summary of activities</p>
              </div>
              <Switch />
            </div>
          </CardContent>
        </Card>

        {/* Privacy Settings */}
        <Card className="bg-white/60 backdrop-blur-sm border-white/20">
          <CardHeader>
            <CardTitle className="flex items-center">
              <Shield className="h-5 w-5 mr-2" />
              Privacy
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium">Show Online Status</p>
                <p className="text-sm text-gray-600">Let others see when you're online</p>
              </div>
              <Switch defaultChecked />
            </div>
            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium">Read Receipts</p>
                <p className="text-sm text-gray-600">Show when you've read messages</p>
              </div>
              <Switch defaultChecked />
            </div>
          </CardContent>
        </Card>

        {/* Appearance Settings */}
        <Card className="bg-white/60 backdrop-blur-sm border-white/20">
          <CardHeader>
            <CardTitle className="flex items-center">
              <Palette className="h-5 w-5 mr-2" />
              Appearance
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <p className="font-medium mb-2">Theme</p>
              <div className="flex space-x-2">
                <Button variant="outline" size="sm">Light</Button>
                <Button variant="outline" size="sm">Dark</Button>
                <Button variant="outline" size="sm">Auto</Button>
              </div>
            </div>
            <div>
              <p className="font-medium mb-2">Language</p>
              <Button variant="outline" className="w-full justify-start">
                <Globe className="h-4 w-4 mr-2" />
                English (US)
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
