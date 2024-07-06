import React from 'react';


const Chat = () => {
  return (
    <div className="max-w-md mx-auto mt-10 p-4 border rounded-lg shadow-lg bg-gray-700">
      <div className="h-80 overflow-y-auto p-2">
      </div>
      <form className="mt-4 flex">
        <input
          type="text"
          className="flex-grow p-2 border rounded-l-lg focus:outline-none"
          placeholder="Type a message..."
        />
        <button type="submit" className="bg-slate-500 text-white p-2 rounded-r-lg hover:bg-blue-600">
          Send
        </button>
      </form>
    </div>
  );
};

export default Chat;
