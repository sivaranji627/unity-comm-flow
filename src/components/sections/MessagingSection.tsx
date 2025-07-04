
import React, { useState } from 'react';
import { Send, Paperclip, Smile } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Card, CardContent } from '@/components/ui/card';

const messages = [
  {
    id: 1,
    user: 'Sarah Chen',
    avatar: 'https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=100&h=100&fit=crop&crop=faces',
    message: 'Hey team! Just finished the new design mockups. What do you think?',
    time: '2:30 PM',
    isCurrentUser: false,
  },
  {
    id: 2,
    user: 'You',
    avatar: '',
    message: 'They look amazing! The color scheme really works well.',
    time: '2:32 PM',
    isCurrentUser: true,
  },
  {
    id: 3,
    user: 'Alex Rodriguez',
    avatar: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=100&h=100&fit=crop&crop=faces',
    message: 'Agreed! Can we schedule a call to discuss the implementation?',
    time: '2:35 PM',
    isCurrentUser: false,
  },
];

export function MessagingSection() {
  const [newMessage, setNewMessage] = useState('');

  const handleSend = () => {
    if (newMessage.trim()) {
      console.log('Sending message:', newMessage);
      setNewMessage('');
    }
  };

  return (
    <div className="h-full flex flex-col">
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-gray-800 mb-2">Messages</h2>
        <p className="text-gray-600">Chat with your team in real-time</p>
      </div>

      <Card className="flex-1 flex flex-col bg-white/60 backdrop-blur-sm border-white/20">
        <CardContent className="flex-1 flex flex-col p-6">
          {/* Messages Area */}
          <div className="flex-1 space-y-4 mb-6 overflow-y-auto">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${message.isCurrentUser ? 'justify-end' : 'justify-start'}`}
              >
                <div className={`flex items-start space-x-3 max-w-md ${message.isCurrentUser ? 'flex-row-reverse space-x-reverse' : ''}`}>
                  <Avatar className="h-8 w-8">
                    <AvatarImage src={message.avatar} />
                    <AvatarFallback>{message.user.charAt(0)}</AvatarFallback>
                  </Avatar>
                  <div className={`rounded-lg p-3 ${message.isCurrentUser ? 'bg-blue-500 text-white' : 'bg-white shadow-sm'}`}>
                    {!message.isCurrentUser && (
                      <p className="text-sm font-medium text-gray-900 mb-1">{message.user}</p>
                    )}
                    <p className={`text-sm ${message.isCurrentUser ? 'text-white' : 'text-gray-800'}`}>
                      {message.message}
                    </p>
                    <p className={`text-xs mt-1 ${message.isCurrentUser ? 'text-blue-100' : 'text-gray-500'}`}>
                      {message.time}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Message Input */}
          <div className="flex items-center space-x-2 p-4 bg-white/50 rounded-lg">
            <Button variant="ghost" size="icon" className="text-gray-500">
              <Paperclip className="h-4 w-4" />
            </Button>
            <Input
              value={newMessage}
              onChange={(e) => setNewMessage(e.target.value)}
              placeholder="Type your message..."
              className="flex-1 border-none bg-transparent focus:ring-0"
              onKeyPress={(e) => e.key === 'Enter' && handleSend()}
            />
            <Button variant="ghost" size="icon" className="text-gray-500">
              <Smile className="h-4 w-4" />
            </Button>
            <Button onClick={handleSend} className="bg-blue-500 hover:bg-blue-600">
              <Send className="h-4 w-4" />
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
