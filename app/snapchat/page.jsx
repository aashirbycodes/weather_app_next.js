
"use client";

import React, { useState } from "react";

const page = () => {
  const [activeTab, setActiveTab] = useState("Chat");
  const [message, setMessage] = useState("");

  const friends = [
    { name: "Emma Watson", msg: "Hey! What's up?", time: "2m", avatar: "👩🏻", unread: 2, online: true },
    { name: "Alex Johnson", msg: "Sent you a snap 🔥", time: "5m", avatar: "👨🏻", unread: 1, online: true },
    { name: "Sophia Miller", msg: "Haha that's funny 😂", time: "12m", avatar: "👩🏽", unread: 0, online: false },
    { name: "James Wilson", msg: "Good morning!", time: "20m", avatar: "👨🏽", unread: 0, online: true },
    { name: "Olivia Brown", msg: "See you tomorrow ❤️", time: "1h", avatar: "👩🏼", unread: 0, online: false },
    { name: "Noah Davis", msg: "Sent a photo", time: "2h", avatar: "👦🏻", unread: 0, online: false },
    { name: "Ava Taylor", msg: "Typing...", time: "3h", avatar: "👩🏾", unread: 0, online: true },
  ];

  const stories = [
    { name: "Emma", avatar: "👩🏻", color: "bg-pink-200" },
    { name: "Alex", avatar: "👨🏻", color: "bg-blue-200" },
    { name: "Sophia", avatar: "👩🏽", color: "bg-purple-200" },
    { name: "James", avatar: "👨🏽", color: "bg-green-200" },
    { name: "Olivia", avatar: "👩🏼", color: "bg-orange-200" },
    { name: "Noah", avatar: "👦🏻", color: "bg-cyan-200" },
  ];

  const [activeFriend, setActiveFriend] = useState(friends[0]);

  return (
    <div className="min-h-screen bg-[#f7f7f7] text-gray-900">

      {/* Navbar */}
      <header className="h-20 bg-white border-b border-gray-200 flex items-center justify-between px-6 md:px-10 sticky top-0 z-50">

        <div className="flex items-center gap-3">
          <div className="w-11 h-11 bg-[#FFFC00] rounded-xl flex items-center justify-center text-2xl">
            👻
          </div>
          <h1 className="text-2xl font-black tracking-tight">Snapchat</h1>
        </div>

        <div className="hidden md:flex items-center bg-gray-100 rounded-full px-5 py-3 w-96">
          <span className="text-gray-400 mr-3">🔍</span>
          <input
            placeholder="Search friends, stories..."
            className="bg-transparent outline-none w-full text-sm"
          />
        </div>

        <div className="flex items-center gap-5">
          <button className="text-xl hover:scale-110 transition">⚙️</button>
          <button className="text-xl hover:scale-110 transition">🔔</button>
          <div className="w-10 h-10 rounded-full bg-yellow-300 flex items-center justify-center font-bold">
            A
          </div>
        </div>
      </header>

      <div className="flex">

        {/* Sidebar */}
        <aside className="hidden lg:flex w-64 bg-white min-h-[calc(100vh-80px)] border-r border-gray-200 p-6 flex-col">

          <button className="bg-[#FFFC00] rounded-xl py-3 font-bold text-sm shadow-sm hover:bg-yellow-300 transition">
            + New Snap
          </button>

          <nav className="mt-10 space-y-3">
            {[
              ["👻", "Chat"],
              ["📸", "Stories"],
              ["🎥", "Spotlight"],
              ["🗺️", "Snap Map"],
              ["👥", "Friends"],
              ["💾", "Memories"],
            ].map(([icon, name]) => (
              <button
                key={name}
                onClick={() => setActiveTab(name)}
                className={`w-full flex items-center gap-4 px-4 py-3 rounded-xl text-sm font-semibold transition ${
                  activeTab === name
                    ? "bg-[#FFFC00]"
                    : "hover:bg-gray-100 text-gray-600"
                }`}
              >
                <span className="text-xl">{icon}</span>
                {name}
              </button>
            ))}
          </nav>

          <div className="mt-auto bg-yellow-50 rounded-2xl p-5">
            <div className="text-3xl mb-3">⭐</div>
            <h3 className="font-bold">Snapchat+</h3>
            <p className="text-xs text-gray-500 mt-2">
              Unlock exclusive features and customize your Snapchat.
            </p>
            <button className="mt-4 bg-black text-white w-full py-2 rounded-full text-xs font-bold">
              Explore
            </button>
          </div>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-5 md:p-8 min-w-0">

          {/* Welcome */}
          <div className="flex justify-between items-center mb-8">
            <div>
              <h2 className="text-3xl font-black">
                Good afternoon, Aashir! 👋
              </h2>
              <p className="text-gray-500 text-sm mt-2">
                Stay connected with your friends.
              </p>
            </div>

            <button className="hidden sm:block bg-black text-white px-6 py-3 rounded-full text-sm font-bold hover:bg-gray-800">
              + Add Friends
            </button>
          </div>

          {/* Stories */}
          <section className="mb-10">
            <div className="flex justify-between items-center mb-5">
              <h3 className="text-xl font-bold">Stories</h3>
              <button className="text-sm text-gray-500 hover:text-black">
                View all →
              </button>
            </div>

            <div className="flex gap-5 overflow-x-auto pb-3">
              <div className="flex flex-col items-center min-w-16">
                <div className="w-16 h-16 rounded-full border-2 border-dashed border-gray-400 flex items-center justify-center text-2xl bg-white">
                  +
                </div>
                <span className="text-xs mt-2 font-medium">My Story</span>
              </div>

              {stories.map((story) => (
                <div key={story.name} className="flex flex-col items-center min-w-16 cursor-pointer">
                  <div className="w-16 h-16 rounded-full border-[3px] border-yellow-400 p-1">
                    <div className={`w-full h-full rounded-full ${story.color} flex items-center justify-center text-3xl`}>
                      {story.avatar}
                    </div>
                  </div>
                  <span className="text-xs mt-2 font-medium">{story.name}</span>
                </div>
              ))}
            </div>
          </section>

          {/* Chat Section */}
          <section>
            <div className="flex justify-between items-center mb-5">
              <h3 className="text-xl font-bold">Recent Chats</h3>
              <button className="text-sm text-gray-500">See all →</button>
            </div>

            <div className="grid grid-cols-1 xl:grid-cols-3 gap-5">

              {/* Friends List */}
              <div className="bg-white rounded-2xl border border-gray-200 p-4 xl:col-span-1">

                <div className="flex items-center justify-between mb-5">
                  <h3 className="font-bold">Messages</h3>
                  <span className="text-xs text-gray-400">7 friends</span>
                </div>

                <div className="space-y-2">
                  {friends.map((friend) => (
                    <button
                      key={friend.name}
                      onClick={() => setActiveFriend(friend)}
                      className={`w-full flex items-center gap-3 p-3 rounded-xl text-left transition ${
                        activeFriend.name === friend.name
                          ? "bg-yellow-50"
                          : "hover:bg-gray-50"
                      }`}
                    >
                      <div className="relative">
                        <div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center text-2xl">
                          {friend.avatar}
                        </div>
                        {friend.online && (
                          <span className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-2 border-white rounded-full"></span>
                        )}
                      </div>

                      <div className="flex-1 min-w-0">
                        <div className="flex justify-between">
                          <h4 className="font-bold text-sm truncate">
                            {friend.name}
                          </h4>
                          <span className="text-[10px] text-gray-400">
                            {friend.time}
                          </span>
                        </div>
                        <p className="text-xs text-gray-500 truncate mt-1">
                          {friend.msg}
                        </p>
                      </div>

                      {friend.unread > 0 && (
                        <span className="bg-[#FFFC00] text-black w-5 h-5 rounded-full text-xs flex items-center justify-center font-bold">
                          {friend.unread}
                        </span>
                      )}
                    </button>
                  ))}
                </div>
              </div>

              {/* Chat Window */}
              <div className="xl:col-span-2 bg-white rounded-2xl border border-gray-200 flex flex-col min-h-[520px]">

                {/* Chat Header */}
                <div className="flex items-center justify-between p-5 border-b border-gray-100">
                  <div className="flex items-center gap-3">
                    <div className="w-11 h-11 bg-pink-100 rounded-full flex items-center justify-center text-2xl">
                      {activeFriend.avatar}
                    </div>
                    <div>
                      <h4 className="font-bold">{activeFriend.name}</h4>
                      <p className="text-xs text-green-500">
                        {activeFriend.online ? "● Online" : "Offline"}
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-4 text-xl">
                    <button className="hover:scale-110">📞</button>
                    <button className="hover:scale-110">📹</button>
                    <button className="hover:scale-110">⋮</button>
                  </div>
                </div>

                {/* Chat Messages */}
                <div className="flex-1 p-6 space-y-5 flex flex-col justify-end">

                  <div className="text-center">
                    <span className="text-[10px] bg-gray-100 text-gray-500 px-4 py-2 rounded-full">
                      TODAY
                    </span>
                  </div>

                  <div className="flex items-end gap-2">
                    <div className="w-8 h-8 bg-pink-100 rounded-full flex items-center justify-center">
                      {activeFriend.avatar}
                    </div>
                    <div>
                      <div className="bg-gray-100 px-4 py-3 rounded-2xl rounded-bl-none text-sm">
                        Hey! How are you doing? 😊
                      </div>
                      <span className="text-[10px] text-gray-400 ml-2">
                        2:30 PM
                      </span>
                    </div>
                  </div>

                  <div className="flex justify-end">
                    <div>
                      <div className="bg-[#FFFC00] px-4 py-3 rounded-2xl rounded-br-none text-sm">
                        I'm good! What about you? 😎
                      </div>
                      <span className="text-[10px] text-gray-400 flex justify-end mr-2 mt-1">
                        2:31 PM ✓✓
                      </span>
                    </div>
                  </div>

                  <div className="flex items-end gap-2">
                    <div className="w-8 h-8 bg-pink-100 rounded-full flex items-center justify-center">
                      {activeFriend.avatar}
                    </div>
                    <div>
                      <div className="bg-gray-100 px-4 py-3 rounded-2xl rounded-bl-none text-sm">
                        Let's hang out this weekend! 🎉
                      </div>
                      <span className="text-[10px] text-gray-400 ml-2">
                        2:32 PM
                      </span>
                    </div>
                  </div>

                  <div className="flex justify-end">
                    <div className="bg-yellow-50 px-4 py-3 rounded-2xl text-sm">
                      Sounds like a plan! 🔥
                    </div>
                  </div>

                </div>

                {/* Message Input */}
                <div className="p-4 border-t border-gray-100">
                  <div className="flex items-center gap-3 bg-gray-100 rounded-full px-4 py-2">
                    <button className="text-xl">📎</button>
                    <input
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      onKeyDown={(e) => {
                        if (e.key === "Enter") setMessage("");
                      }}
                      placeholder="Send a message..."
                      className="flex-1 bg-transparent outline-none text-sm py-2"
                    />
                    <button className="text-xl">😊</button>
                    <button
                      onClick={() => setMessage("")}
                      className="bg-[#FFFC00] rounded-full w-10 h-10 font-bold hover:bg-yellow-300"
                    >
                      ➤
                    </button>
                  </div>
                </div>

              </div>
            </div>
          </section>
        </main>

        {/* Right Sidebar */}
        <aside className="hidden 2xl:block w-72 bg-white border-l border-gray-200 p-6">

          <div className="text-center border-b border-gray-100 pb-7">
            <div className="w-24 h-24 bg-yellow-200 rounded-full mx-auto flex items-center justify-center text-5xl">
              👨🏻
            </div>
            <h3 className="font-black text-lg mt-4">Aashir Ali</h3>
            <p className="text-xs text-gray-400 mt-1">@aashirbycodes</p>
            <button className="mt-4 bg-gray-100 px-6 py-2 rounded-full text-xs font-bold hover:bg-gray-200">
              Edit Profile
            </button>
          </div>

          <div className="py-7 border-b border-gray-100">
            <h3 className="font-bold mb-5">Your Activity</h3>
            <div className="grid grid-cols-2 gap-3">
              <div className="bg-yellow-50 rounded-xl p-4">
                <h2 className="text-2xl font-black">24</h2>
                <p className="text-xs text-gray-500 mt-1">Friends</p>
              </div>
              <div className="bg-blue-50 rounded-xl p-4">
                <h2 className="text-2xl font-black">12</h2>
                <p className="text-xs text-gray-500 mt-1">Stories</p>
              </div>
            </div>
          </div>

          <div className="py-7">
            <h3 className="font-bold mb-4">Quick Actions</h3>
            <div className="space-y-3">
              <button className="w-full flex items-center gap-3 text-sm text-gray-600 hover:text-black">
                👤 Add Friends
              </button>
              <button className="w-full flex items-center gap-3 text-sm text-gray-600 hover:text-black">
                📸 Create Story
              </button>
              <button className="w-full flex items-center gap-3 text-sm text-gray-600 hover:text-black">
                ⚙️ Settings
              </button>
              <button className="w-full flex items-center gap-3 text-sm text-gray-600 hover:text-black">
                ❓ Help Center
              </button>
            </div>
          </div>

          <div className="bg-[#FFFC00] rounded-2xl p-5">
            <h3 className="font-black">Stay Connected!</h3>
            <p className="text-xs mt-2 text-gray-700">
              Share moments, connect with friends and make memories.
            </p>
            <div className="text-4xl mt-4">👻</div>
          </div>

        </aside>

      </div>
    </div>
  );
};

export default page;