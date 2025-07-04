
import React from 'react';
import { Users, Plus, MoreHorizontal } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';

const teams = [
  {
    id: 1,
    name: 'Design Team',
    members: 8,
    description: 'UI/UX designers working on product design',
    avatar: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=100&h=100&fit=crop&crop=faces',
    status: 'Active',
  },
  {
    id: 2,
    name: 'Development Team',
    members: 12,
    description: 'Frontend and backend developers',
    avatar: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=100&h=100&fit=crop&crop=faces',
    status: 'Active',
  },
  {
    id: 3,
    name: 'Marketing Team',
    members: 6,
    description: 'Marketing and growth specialists',
    avatar: 'https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=100&h=100&fit=crop&crop=faces',
    status: 'Active',
  },
];

export function TeamsSection() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-gray-800 mb-2">Teams</h2>
          <p className="text-gray-600">Collaborate with your team members</p>
        </div>
        <Button className="bg-blue-500 hover:bg-blue-600">
          <Plus className="h-4 w-4 mr-2" />
          Create Team
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {teams.map((team) => (
          <Card key={team.id} className="bg-white/60 backdrop-blur-sm border-white/20 hover:shadow-lg transition-shadow">
            <CardHeader className="pb-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <Avatar className="h-12 w-12">
                    <AvatarImage src={team.avatar} />
                    <AvatarFallback><Users className="h-6 w-6" /></AvatarFallback>
                  </Avatar>
                  <div>
                    <CardTitle className="text-lg">{team.name}</CardTitle>
                    <p className="text-sm text-gray-600">{team.members} members</p>
                  </div>
                </div>
                <Button variant="ghost" size="icon">
                  <MoreHorizontal className="h-4 w-4" />
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 mb-4">{team.description}</p>
              <div className="flex items-center justify-between">
                <Badge variant="secondary" className="bg-green-100 text-green-700">
                  {team.status}
                </Badge>
                <Button variant="outline" size="sm">
                  View Team
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
