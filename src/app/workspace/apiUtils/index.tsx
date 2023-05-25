const localHost = "http://localhost:3000/";
const getMessage = async () => {
  return await fetch(localHost + "api/openai");
};

const PostMessage = async (res: any) => {
  return await fetch(localHost + "api/openai", {
    mode: "cors",
    method: "POST",
    body: JSON.stringify(res),
  });
};

export { getMessage, PostMessage };
