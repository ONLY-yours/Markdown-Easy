import { ChatOpenAI } from "langchain/chat_models/openai";
import { HumanChatMessage, SystemChatMessage } from "langchain/schema";

const chat = new ChatOpenAI({
    openAIApiKey:'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',
  streaming: true,
});

const optimizeContent = async (words: string) => {
  return await chat.call([
    new SystemChatMessage(
      "你是一个 MarkDown 助手,希望你能将下面的内容转化为 MarkDown 的标准格式，文档可能包含 MardDown 的符号,也可能不包含,需要你进行判定，返回标准的 Markdown 格式内容。"
    ),
    new HumanChatMessage(""+words)
  ],undefined,[{
    handleLLMNewToken(token: string) {
        console.log({ token });
      },
  }]);
};

export default optimizeContent