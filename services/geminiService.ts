
import { GoogleGenAI, GenerateContentResponse } from "@google/genai";

// Ensure the API key is available, but do not expose it in the UI.
if (!process.env.API_KEY) {
  throw new Error("API_KEY environment variable not set");
}

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

/**
 * Generates a short story based on a user-provided prompt.
 * @param prompt The user's prompt for the story.
 * @returns The generated story as a string.
 */
export async function generateStory(prompt: string): Promise<string> {
  try {
    const response: GenerateContentResponse = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: `Write a short, creative story (around 200-300 words) based on this prompt: "${prompt}"`,
      config: {
        temperature: 0.8,
        topP: 0.95,
        topK: 64,
      }
    });

    const text = response.text;
    if (text) {
      return text.trim();
    } else {
      // This case might happen if the response is blocked or empty.
      throw new Error("The API returned an empty response. The prompt may have been inappropriate.");
    }
  } catch (error) {
    console.error("Error calling Gemini API:", error);
    // Provide a more user-friendly error message.
    throw new Error("Failed to generate story. Please try again later or with a different prompt.");
  }
}
