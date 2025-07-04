
import React from 'react';
import { Heart, MessageCircle, Share, MoreHorizontal } from 'lucide-react';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';

const posts = [
  {
    id: 1,
    user: 'Sarah Chen',
    avatar: 'https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=100&h=100&fit=crop&crop=faces',
    time: '2 hours ago',
    content: 'Just finished an amazing design workshop! Really excited about the new project we\'re starting next week. 🎨',
    likes: 12,
    comments: 3,
    status: 'Available',
  },
  {
    id: 2,
    user: 'Alex Rodriguez',
    avatar: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=100&h=100&fit=crop&crop=faces',
    time: '4 hours ago',
    content: 'Working from the coffee shop today ☕ The new deployment went smoothly!',
    likes: 8,
    comments: 2,
    status: 'Busy',
  },
  {
    id: 3,
    user: 'Emma Thompson',
    avatar: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=100&h=100&fit=crop&crop=faces',
    time: '6 hours ago',
    content: 'Team lunch was great! Nothing beats good food and great company 🍕',
    likes: 15,
    comments: 7,
    status: 'Available',
  },
];

export function SocialSection() {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-gray-800 mb-2">Social Feed</h2>
        <p className="text-gray-600">Stay connected with your team</p>
      </div>

      <div className="max-w-2xl space-y-6">
        {posts.map((post) => (
          <Card key={post.id} className="bg-white/60 backdrop-blur-sm border-white/20">
            <CardHeader className="pb-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <Avatar className="h-10 w-10">
                    <AvatarImage src={post.avatar} />
                    <AvatarFallback>{post.user.charAt(0)}</AvatarFallback>
                  </Avatar>
                  <div>
                    <div className="flex items-center space-x-2">
                      <h3 className="font-medium text-gray-900">{post.user}</h3>
                      <Badge 
                        variant="secondary" 
                        className={`text-xs ${
                          post.status === 'Available' 
                            ? 'bg-green-100 text-green-700' 
                            : 'bg-yellow-100 text-yellow-700'
                        }`}
                      >
                        {post.status}
                      </Badge>
                    </div>
                    <p className="text-sm text-gray-600">{post.time}</p>
                  </div>
                </div>
                <Button variant="ghost" size="icon">
                  <MoreHorizontal className="h-4 w-4" />
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-gray-800 mb-4">{post.content}</p>
              <div className="flex items-center space-x-6">
                <Button variant="ghost" size="sm" className="text-gray-600 hover:text-red-500">
                  <Heart className="h-4 w-4 mr-1" />
                  {post.likes}
                </Button>
                <Button variant="ghost" size="sm" className="text-gray-600 hover:text-blue-500">
                  <MessageCircle className="h-4 w-4 mr-1" />
                  {post.comments}
                </Button>
                <Button variant="ghost" size="sm" className="text-gray-600 hover:text-green-500">
                  <Share className="h-4 w-4 mr-1" />
                  Share
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
