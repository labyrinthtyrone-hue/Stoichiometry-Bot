
export interface User {
  nickname: string;
  age: string;
}

export enum MessageSender {
  USER = 'user',
  BOT = 'bot',
}

export interface Message {
  id: string;
  text: string;
  sender: MessageSender;
  suggestions?: string[];
}
