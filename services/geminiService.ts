
import { GoogleGenAI, GenerateContentResponse } from "@google/genai";
import { PRODUCTS } from "../constants";

const SYSTEM_INSTRUCTION = `
You are the "CarWipes Expert Advisor". Your goal is to help users maintain their cars by recommending the best products from our catalog.
Available Products:
${PRODUCTS.map(p => `- ${p.name} (Category: ${p.category}, Description: ${p.description})`).join('\n')}

Guidelines:
1. Always respond in English.
2. Be professional and passionate about automotive detailing.
3. For heavy-duty interior cleaning, recommend the detailmate Koch Chemie Pol Star set or Gentlemonkeys kit.
4. For quick cockpit refreshes, suggest Koch Chemie Refresh Cockpit Care or Poliboy Wet Wipes.
5. For high-end paint drying, recommend Liquid Elements Silverback (1200GSM) or Nuke Guys Gamma Dryer.
6. For streak-free glass cleaning, recommend Nuke Guys Waffle Cloths or SONAX Glass 3.
7. For bulk multi-purpose needs, recommend the Liquid Elements 5-pack or the HOMEXCEL 100-pack.
8. Keep responses concise. Always name 1-2 specific products with their full names.
9. Mention that all products can be checked directly on Amazon for the latest pricing.
`;

export async function getCarCareAdvice(userMessage: string): Promise<string> {
  // Create a new instance right before the call to ensure the latest key from process.env.API_KEY is used
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

  try {
    const response: GenerateContentResponse = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: userMessage,
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
        temperature: 0.7,
      },
    });
    // Access the text property directly as per latest SDK guidelines
    return response.text || "I'm sorry, I couldn't process that. Try asking about glass cleaning or drying towels!";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "I'm having some technical issues right now. Please try again later!";
  }
}
