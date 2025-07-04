
import React from 'react';
import { Video, Calendar, Clock, Users } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';

const upcomingCalls = [
  {
    id: 1,
    title: 'Design Review Meeting',
    time: '3:00 PM - 4:00 PM',
    participants: ['Sarah Chen', 'Alex Rodriguez', 'Emma Thompson'],
    status: 'Upcoming',
  },
  {
    id: 2,
    title: 'Sprint Planning',
    time: '5:00 PM - 6:00 PM',
    participants: ['Alex Rodriguez', 'Mike Johnson', 'Lisa Park'],
    status: 'Upcoming',
  },
];

const availableUsers = [
  {
    id: 1,
    name: 'Sarah Chen',
    avatar: 'https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=100&h=100&fit=crop&crop=faces',
    status: 'Available for call',
    lastSeen: 'Online',
  },
  {
    id: 2,
    name: 'Emma Thompson',
    avatar: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=100&h=100&fit=crop&crop=faces',
    status: 'Available for call',
    lastSeen: 'Online',
  },
  {
    id: 3,
    name: 'Mike Johnson',
    avatar: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=100&h=100&fit=crop&crop=faces',
    status: 'In a meeting',
    lastSeen: 'Busy until 4 PM',
  },
];

export function VideoSection() {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-gray-800 mb-2">Video Calls</h2>
        <p className="text-gray-600">Schedule and join video calls with your team</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Upcoming Calls */}
        <Card className="bg-white/60 backdrop-blur-sm border-white/20">
          <CardHeader>
            <CardTitle className="flex items-center">
              <Calendar className="h-5 w-5 mr-2" />
              Upcoming Calls
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {upcomingCalls.map((call) => (
              <div key={call.id} className="p-4 bg-white/50 rounded-lg">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-medium text-gray-900">{call.title}</h3>
                  <Badge variant="secondary" className="bg-blue-100 text-blue-700">
                    {call.status}
                  </Badge>
                </div>
                <div className="flex items-center text-gray-600 mb-3">
                  <Clock className="h-4 w-4 mr-1" />
                  <span className="text-sm">{call.time}</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex -space-x-2">
                    {call.participants.slice(0, 3).map((participant, index) => (
                      <Avatar key={index} className="h-6 w-6 border-2 border-white">
                        <AvatarFallback className="text-xs">{participant.charAt(0)}</AvatarFallback>
                      </Avatar>
                    ))}
                    {call.participants.length > 3 && (
                      <div className="h-6 w-6 bg-gray-200 rounded-full border-2 border-white flex items-center justify-center">
                        <span className="text-xs text-gray-600">+{call.participants.length - 3}</span>
                      </div>
                    )}
                  </div>
                  <Button size="sm" className="bg-green-500 hover:bg-green-600">
                    <Video className="h-4 w-4 mr-1" />
                    Join
                  </Button>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Available Users */}
        <Card className="bg-white/60 backdrop-blur-sm border-white/20">
          <CardHeader>
            <CardTitle className="flex items-center">
              <Users className="h-5 w-5 mr-2" />
              Team Availability
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {availableUsers.map((user) => (
              <div key={user.id} className="flex items-center justify-between p-3 bg-white/50 rounded-lg">
                <div className="flex items-center space-x-3">
                  <Avatar className="h-10 w-10">
                    <AvatarImage src={user.avatar} />
                    <AvatarFallback>{user.name.charAt(0)}</AvatarFallback>
                  </Avatar>
                  <div>
                    <h3 className="font-medium text-gray-900">{user.name}</h3>
                    <p className="text-sm text-gray-600">{user.lastSeen}</p>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <Badge 
                    variant="secondary" 
                    className={`text-xs ${
                      user.status === 'Available for call' 
                        ? 'bg-green-100 text-green-700' 
                        : 'bg-red-100 text-red-700'
                    }`}
                  >
                    {user.status === 'Available for call' ? 'Available' : 'Busy'}
                  </Badge>
                  {user.status === 'Available for call' && (
                    <Button size="sm" variant="outline">
                      <Video className="h-4 w-4 mr-1" />
                      Call
                    </Button>
                  )}
                </div>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
