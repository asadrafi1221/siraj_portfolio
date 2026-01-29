import { ModelId } from './types';

export const MODELS = [
  {
    id: ModelId.FLASH,
    name: 'Gemini 3 Flash',
    description: 'Fast, efficient, low latency.',
  },
  {
    id: ModelId.PRO,
    name: 'Gemini 3 Pro',
    description: 'Complex reasoning, higher quality.',
  },
];

export const INITIAL_MESSAGE = "Hello! I'm your AI assistant. How can I help you with your text today?";