import { ChatOpenAI } from "langchain/chat_models/openai";
import { HumanChatMessage, SystemChatMessage } from "langchain/schema";

const SystemChatPrompt = `你是一个 markdown 助手,希望你能将下面的内容转化为 markdown 的标准格式，文档可能包含 markdown 的符号,也可能不包含,需要你进行判定，返回标准的 markdown 格式内容。下面有几个规则希望你能记住：
1. 如果出现可能是代码块的语句,请根据代码内容判断该串代码属于什么语言，并将这些内容通过 markdown 的代码块格式返回
2. 如果出现了类似链接或者是http、https的链接,希望你根据上下文进行推断并返回 markdown 的链接标准格式
3. 如果出现了 注意、提醒 等字样,可以结合当前语句，返回块引用的方式将其包裹
`;

// if (!process.env.OPENAI_API_KEY) {
  // throw new Error("Missing env var from OpenAI");
// }

const chatStream = new ChatOpenAI({
  openAIApiKey: process.env.OPENAI_API_KEY,
  streaming: true,
});

export const config = {
  runtime: 'edge',
};

const optimizeContentStream = async (words: string) => {
  return await chatStream.call(
    [new SystemChatMessage(SystemChatPrompt), new HumanChatMessage("" + words)],
    undefined,
    [
      {
        handleLLMNewToken(token: string) {
          console.log({ token });
        },
      },
    ]
  );
};

const chat = new ChatOpenAI({
  openAIApiKey: process.env.OPENAI_API_KEY,
});

const optimizeContent = async (words: string) => {
  return await chat.call([
    new SystemChatMessage(SystemChatPrompt),
    new HumanChatMessage("" + words),
  ]);
};

export { optimizeContentStream, optimizeContent};
