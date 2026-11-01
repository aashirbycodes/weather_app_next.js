
"use client";

import React, { useState } from "react";

const page = () => {
  const [postText, setPostText] = useState("");
  const [posts, setPosts] = useState([
    {
      id: 1,
      name: "Sarah Johnson",
      role: "UI/UX Designer at Google",
      time: "2h",
      avatar: "👩🏻",
      content:
        "Design is not just what it looks like. Design is how it works. Keep learning, keep growing! 🚀",
      image:
        "https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=900",
      likes: 245,
      comments: 32,
      liked: false,
    },
    {
      id: 2,
      name: "Michael Smith",
      role: "Software Engineer | React Developer",
      time: "5h",
      avatar: "👨🏻",
      content:
        "Just completed my latest React project! Building something every day makes you a better developer. Never stop coding! 💻",
      image:
        "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=900",
      likes: 128,
      comments: 18,
      liked: false,
    },
    {
      id: 3,
      name: "Emily Davis",
      role: "Digital Marketing Specialist",
      time: "1d",
      avatar: "👩🏼",
      content:
        "Success is the sum of small efforts repeated day in and day out. Happy Monday everyone! ✨",
      image: "",
      likes: 89,
      comments: 12,
      liked: false,
    },
  ]);

  const handlePost = () => {
    if (!postText.trim()) return;

    const newPost = {
      id: Date.now(),
      name: "Aashir Ali",
      role: "Frontend Developer | Web Developer",
      time: "Just now",
      avatar: "👨🏻",
      content: postText,
      image: "",
      likes: 0,
      comments: 0,
      liked: false,
    };

    setPosts([newPost, ...posts]);
    setPostText("");
  };

  const handleLike = (id) => {
    setPosts(
      posts.map((post) =>
        post.id === id
          ? {
              ...post,
              liked: !post.liked,
              likes: post.liked ? post.likes - 1 : post.likes + 1,
            }
          : post
      )
    );
  };

  const people = [
    { name: "David Wilson", role: "Product Designer", avatar: "👨🏼" },
    { name: "Sophia Miller", role: "Frontend Developer", avatar: "👩🏽" },
    { name: "James Brown", role: "Software Engineer", avatar: "👨🏽" },
  ];

  return (
    <div className="min-h-screen bg-[#f3f2ef] text-[#191919]">

      {/* NAVBAR */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-[1200px] mx-auto px-4 h-16 flex items-center justify-between gap-5">

          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="bg-[#0a66c2] text-white font-black text-2xl w-9 h-9 flex items-center justify-center rounded">
              in
            </div>
          </div>

          {/* Search */}
          <div className="hidden sm:flex items-center bg-[#edf3f8] rounded-md px-4 py-2 w-64">
            <span className="text-gray-500 mr-2">🔍</span>
            <input
              placeholder="Search"
              className="bg-transparent outline-none w-full text-sm"
            />
          </div>

          {/* Navigation */}
          <nav className="flex items-center gap-3 md:gap-7 text-gray-500">

            {[
              ["🏠", "Home"],
              ["👥", "My Network"],
              ["💼", "Jobs"],
              ["💬", "Messaging"],
              ["🔔", "Notifications"],
            ].map(([icon, label]) => (
              <button
                key={label}
                className={`hidden md:flex flex-col items-center text-xs hover:text-black transition ${
                  label === "Home"
                    ? "text-black border-b-2 border-black"
                    : ""
                }`}
              >
                <span className="text-xl">{icon}</span>
                {label}
              </button>
            ))}

            <button className="flex flex-col items-center text-xs hover:text-black">
              <div className="w-8 h-8 bg-yellow-200 rounded-full flex items-center justify-center text-lg">
                👨🏻
              </div>
              <span className="hidden md:block">Me ▾</span>
            </button>

            <button className="hidden lg:flex flex-col items-center text-xs border-l pl-5">
              <span className="text-xl">▦</span>
              For Business
            </button>

          </nav>
        </div>
      </header>

      {/* MAIN LAYOUT */}
      <main className="max-w-[1200px] mx-auto px-4 py-6">

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">

          {/* LEFT SIDEBAR */}
          <aside className="lg:col-span-3 space-y-3">

            {/* Profile Card */}
            <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">

              <div className="h-16 bg-gradient-to-r from-blue-300 to-blue-600"></div>

              <div className="px-4 pb-4">
                <div className="w-20 h-20 bg-yellow-200 border-4 border-white rounded-full -mt-10 flex items-center justify-center text-4xl">
                  👨🏻
                </div>

                <h2 className="font-bold text-lg mt-2">Aashir Ali</h2>

                <p className="text-sm text-gray-600 mt-1">
                  Frontend Developer | React.js | JavaScript
                </p>

                <p className="text-xs text-gray-500 mt-3">
                  Lahore, Punjab, Pakistan
                </p>

                <p className="text-xs text-[#0a66c2] font-semibold mt-2">
                  University of Lahore
                </p>
              </div>

              <div className="border-t border-gray-200 p-4 space-y-3">

                <div className="flex justify-between text-sm">
                  <span className="text-gray-500">Profile viewers</span>
                  <span className="text-[#0a66c2] font-bold">128</span>
                </div>

                <div className="flex justify-between text-sm">
                  <span className="text-gray-500">Post impressions</span>
                  <span className="text-[#0a66c2] font-bold">540</span>
                </div>

              </div>

              <div className="border-t border-gray-200 p-4">
                <p className="text-xs text-gray-500">
                  Access exclusive tools and insights
                </p>
                <p className="text-sm font-semibold mt-2">
                  ⭐ Try Premium for free
                </p>
              </div>

              <div className="border-t border-gray-200 p-4 text-sm font-semibold">
                🔖 My Items
              </div>

            </div>

            {/* Sidebar Links */}
            <div className="bg-white rounded-xl border border-gray-200 p-4 space-y-4">
              <h3 className="font-bold text-sm">Recent</h3>

              {["# webdevelopment", "# reactjs", "# javascript", "# programming"].map(
                (item) => (
                  <p
                    key={item}
                    className="text-sm text-gray-500 hover:text-[#0a66c2] cursor-pointer"
                  >
                    {item}
                  </p>
                )
              )}

              <div className="border-t pt-4">
                <p className="text-sm font-semibold text-[#0a66c2]">
                  Groups
                </p>
                <p className="text-sm font-semibold text-[#0a66c2] mt-3">
                  Events
                </p>
                <p className="text-sm font-semibold text-[#0a66c2] mt-3">
                  Followed Hashtags
                </p>
              </div>
            </div>

          </aside>

          {/* CENTER FEED */}
          <section className="lg:col-span-6 space-y-4">

            {/* Create Post */}
            <div className="bg-white rounded-xl border border-gray-200 p-4">

              <div className="flex gap-3">
                <div className="w-12 h-12 bg-yellow-200 rounded-full flex items-center justify-center text-2xl">
                  👨🏻
                </div>

                <input
                  value={postText}
                  onChange={(e) => setPostText(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" && !e.shiftKey) {
                      e.preventDefault();
                      handlePost();
                    }
                  }}
                  placeholder="Start a post, Aashir"
                  className="border border-gray-300 rounded-full px-5 py-3 w-full text-sm font-semibold outline-none hover:bg-gray-50 focus:ring-1 focus:ring-[#0a66c2]"
                />
              </div>

              <div className="flex justify-between mt-5 px-2">

                <button className="text-sm font-semibold text-gray-500 hover:bg-gray-100 rounded-lg px-2 py-2">
                  📷 Photo
                </button>

                <button className="text-sm font-semibold text-gray-500 hover:bg-gray-100 rounded-lg px-2 py-2">
                  🎥 Video
                </button>

                <button className="text-sm font-semibold text-gray-500 hover:bg-gray-100 rounded-lg px-2 py-2">
                  📅 Event
                </button>

                <button
                  onClick={handlePost}
                  className="bg-[#0a66c2] text-white px-5 py-2 rounded-full text-sm font-bold hover:bg-[#004182]"
                >
                  Post
                </button>

              </div>
            </div>

            {/* Feed Sorting */}
            <div className="flex items-center gap-2">
              <div className="flex-1 border-t border-gray-300"></div>
              <button className="text-xs text-gray-500">
                Sort by: <b>Top</b> ▾
              </button>
            </div>

            {/* Posts */}
            {posts.map((post) => (

              <article
                key={post.id}
                className="bg-white rounded-xl border border-gray-200 overflow-hidden"
              >

                {/* Post Header */}
                <div className="p-4">

                  <div className="flex justify-between">

                    <div className="flex gap-3">

                      <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-2xl">
                        {post.avatar}
                      </div>

                      <div>
                        <h3 className="font-bold text-sm hover:text-[#0a66c2] cursor-pointer">
                          {post.name}
                        </h3>

                        <p className="text-xs text-gray-500 mt-1">
                          {post.role}
                        </p>

                        <p className="text-xs text-gray-400 mt-1">
                          {post.time} · 🌐
                        </p>
                      </div>

                    </div>

                    <button className="text-gray-500 text-xl">•••</button>

                  </div>

                  {/* Post Content */}
                  <p className="text-sm leading-6 mt-4 whitespace-pre-wrap">
                    {post.content}
                  </p>

                </div>

                {/* Post Image */}
                {post.image && (
                  <img
                    src={post.image}
                    alt="Post"
                    className="w-full max-h-[380px] object-cover"
                  />
                )}

                {/* Reactions */}
                <div className="px-4 py-3 flex justify-between text-xs text-gray-500 border-b border-gray-200">
                  <span>👍 ❤️ 👏 {post.likes} reactions</span>
                  <span>{post.comments} comments · 8 reposts</span>
                </div>

                {/* Post Actions */}
                <div className="grid grid-cols-4 px-2 py-2">

                  <button
                    onClick={() => handleLike(post.id)}
                    className={`flex flex-col sm:flex-row items-center justify-center gap-1 sm:gap-2 py-3 rounded-lg hover:bg-gray-100 text-sm font-semibold ${
                      post.liked ? "text-[#0a66c2]" : "text-gray-600"
                    }`}
                  >
                    👍 <span>Like</span>
                  </button>

                  <button className="flex flex-col sm:flex-row items-center justify-center gap-1 sm:gap-2 py-3 rounded-lg hover:bg-gray-100 text-sm font-semibold text-gray-600">
                    💬 <span>Comment</span>
                  </button>

                  <button className="flex flex-col sm:flex-row items-center justify-center gap-1 sm:gap-2 py-3 rounded-lg hover:bg-gray-100 text-sm font-semibold text-gray-600">
                    🔁 <span>Repost</span>
                  </button>

                  <button className="flex flex-col sm:flex-row items-center justify-center gap-1 sm:gap-2 py-3 rounded-lg hover:bg-gray-100 text-sm font-semibold text-gray-600">
                    ➤ <span>Send</span>
                  </button>

                </div>

              </article>

            ))}

            <button className="w-full bg-white border border-gray-300 rounded-full py-3 text-sm font-bold hover:bg-gray-100">
              Load more posts
            </button>

          </section>

          {/* RIGHT SIDEBAR */}
          <aside className="hidden lg:block lg:col-span-3 space-y-3">

            {/* News */}
            <div className="bg-white rounded-xl border border-gray-200 p-4">

              <div className="flex justify-between items-center">
                <h3 className="font-bold">LinkedIn News</h3>
                <span className="text-gray-400">ⓘ</span>
              </div>

              <p className="text-xs text-gray-400 mt-1">
                Top stories · Trending
              </p>

              <div className="mt-5 space-y-5">

                {[
                  ["Tech industry sees major growth", "2h ago · 12,400 readers"],
                  ["AI changing the future of work", "4h ago · 8,200 readers"],
                  ["Remote jobs are increasing", "5h ago · 6,500 readers"],
                  ["New skills employers want", "1d ago · 4,800 readers"],
                  ["Startups attract new investment", "1d ago · 3,200 readers"],
                ].map(([title, info]) => (
                  <div key={title} className="cursor-pointer">
                    <h4 className="text-sm font-semibold hover:text-[#0a66c2]">
                      • {title}
                    </h4>
                    <p className="text-[11px] text-gray-500 mt-1">
                      {info}
                    </p>
                  </div>
                ))}

              </div>

              <button className="text-sm font-semibold text-gray-500 mt-5">
                Show more ↓
              </button>

            </div>

            {/* People You May Know */}
            <div className="bg-white rounded-xl border border-gray-200 p-4">

              <h3 className="font-bold text-sm mb-5">
                People you may know
              </h3>

              <div className="space-y-5">

                {people.map((person) => (
                  <div key={person.name} className="flex gap-3 items-start">

                    <div className="w-11 h-11 bg-gray-100 rounded-full flex items-center justify-center text-2xl">
                      {person.avatar}
                    </div>

                    <div className="flex-1">
                      <h4 className="font-bold text-sm">
                        {person.name}
                      </h4>

                      <p className="text-xs text-gray-500 mt-1">
                        {person.role}
                      </p>

                      <button className="mt-3 border border-gray-500 text-gray-600 px-5 py-1.5 rounded-full text-xs font-bold hover:bg-gray-100">
                        + Follow
                      </button>
                    </div>

                  </div>
                ))}

              </div>

              <button className="text-sm font-semibold text-gray-500 mt-5">
                Show all →
              </button>

            </div>

            {/* Footer */}
            <div className="text-center text-xs text-gray-500 leading-7 px-3">
              About · Accessibility · Help Center
              <br />
              Privacy & Terms · Advertising
              <br />
              Business Services · More
              <br />
              <span className="font-bold text-[#0a66c2]">
                Linked
                <span className="bg-[#0a66c2] text-white ml-0.5 px-1 rounded-sm">
                  in
                </span>
              </span>
              {" "}© 2026
            </div>

          </aside>

        </div>
      </main>
    </div>
  );
};

export default page;