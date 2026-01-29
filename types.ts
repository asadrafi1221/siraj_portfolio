export interface Message {
  id: string;
  role: 'user' | 'model';
  text: string;
  isStreaming?: boolean;
  timestamp: number;
}

export enum ModelId {
  FLASH = 'gemini-3-flash-preview',
  PRO = 'gemini-3-pro-preview',
}

export interface ChatSession {
  id: string;
  title: string;
  messages: Message[];
  modelId: ModelId;
  updatedAt: number;
}