
import React, { useState } from 'react';
import WelcomeScreen from './components/WelcomeScreen';
import ChatScreen from './components/ChatScreen';
import { User } from './types';

const App: React.FC = () => {
  const [user, setUser] = useState<User | null>(null);

  const handleStart = (nickname: string, age: string) => {
    if (nickname.trim() && age.trim()) {
      setUser({ nickname, age });
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-200 flex flex-col items-center justify-center p-4 font-sans">
      {user ? <ChatScreen user={user} /> : <WelcomeScreen onStart={handleStart} />}
    </div>
  );
};

export default App;
