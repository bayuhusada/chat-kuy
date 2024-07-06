import { useState } from "react";

const Chat = () => {
  const [chats, setChats] = useState([
    {
      msg: "test",
      id: 0,
    },
  ]);

  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setChats([
      ...chats,
      {
        msg: input,
        id: 1,
      },
    ]);

    await fetch("url", {
      method: "POST",
      body: JSON.stringify({
        msg: input,
      }),
    })
      .then((res) => {
        console.log(res);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });

    setInput("");
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-4 border rounded-lg shadow-lg bg-gray-700">
      <div className="h-80 overflow-y-auto p-2 flex-col">
        {chats.map((m) => (
          <div
            className={m.id == 0 ? "bg-yellow-200" : "bg-red-100"}
            key={m.msg}
          >
            {m.msg}
          </div>
        ))}
      </div>
      <form onSubmit={handleSubmit} className="mt-4 flex">
        <input
          value={input}
          type="text"
          onChange={(e) => setInput(e.target.value)}
          className="flex-grow p-2 border rounded-l-lg focus:outline-none"
          placeholder="Type a message..."
        />
        <button
          disabled={loading}
          type="submit"
          className="bg-slate-500 text-white p-2 rounded-r-lg hover:bg-blue-600"
        >
          {loading ? "...Loading" : "Send"}
        </button>
      </form>
    </div>
  );
};

export default Chat;
