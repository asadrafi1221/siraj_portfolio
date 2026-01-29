import { GoogleGenAI, Chat, GenerateContentResponse } from "@google/genai";
import { ModelId, Message } from '../types';

// Singleton instance to hold the chat state if needed, 
// though we usually recreate it per session context in the UI.
let currentChat: Chat | null = null;
let currentModelId: ModelId | null = null;

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

/**
 * Initializes a new chat session or returns the existing one if the model hasn't changed.
 * This function effectively resets the chat context if the model changes.
 */
export const getChatSession = (modelId: ModelId, history: Message[] = []): Chat => {
  // Map internal message history to Gemini history format if needed
  // For simplicity in this demo, we'll start a fresh chat or rely on the UI 
  // to manage history and re-send context if we were building a stateless robust system.
  // However, `ai.chats.create` maintains its own history in memory for that instance.
  
  // If we are switching models, we generally need a new chat instance.
  if (!currentChat || currentModelId !== modelId) {
    currentModelId = modelId;
    currentChat = ai.chats.create({
      model: modelId,
      config: {
        systemInstruction: "You are a helpful, clear, and precise AI assistant. Format your responses with Markdown.",
      },
      // We could map existing history here if we wanted to persist context across reloads
      // history: history.map(m => ({ role: m.role, parts: [{ text: m.text }] })) 
    });
  }
  return currentChat;
};

/**
 * Sends a message to the Gemini API and yields streaming chunks.
 */
export async function* streamMessage(
  modelId: ModelId, 
  userMessage: string
): AsyncGenerator<string, void, unknown> {
  try {
    const chat = getChatSession(modelId);
    
    // We strictly use sendMessageStream with the message string as per guidelines
    const responseStream = await chat.sendMessageStream({ message: userMessage });

    for await (const chunk of responseStream) {
      const c = chunk as GenerateContentResponse;
      if (c.text) {
        yield c.text;
      }
    }
  } catch (error) {
    console.error("Gemini API Error:", error);
    throw error;
  }
}

export const resetChat = () => {
  currentChat = null;
  currentModelId = null;
};