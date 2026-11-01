
"use client";

import React, { useState, useEffect } from "react";

const page = () => {
  // PLAYER STATE
  const [username, setUsername] = useState("Aashir");
  const [editName, setEditName] = useState(false);
  const [newName, setNewName] = useState("Aashir");

  const [coins, setCoins] = useState(12500);
  const [diamonds, setDiamonds] = useState(850);
  const [level, setLevel] = useState(48);
  const [xp, setXp] = useState(650);
  const [wins, setWins] = useState(128);

  // GAME STATE
  const [mode, setMode] = useState("Squad");
  const [selectedMap, setSelectedMap] = useState("Erangel");
  const [playing, setPlaying] = useState(false);
  const [seconds, setSeconds] = useState(0);

  // FRIENDS
  const [friends, setFriends] = useState([
    { id: 1, name: "ShadowX", status: "In Lobby", level: 56, avatar: "👤", invited: false },
    { id: 2, name: "SniperKing", status: "In Match", level: 42, avatar: "🧑", invited: false },
    { id: 3, name: "DarkWolf", status: "Online", level: 38, avatar: "👨", invited: false },
    { id: 4, name: "GhostRider", status: "Online", level: 61, avatar: "🧔", invited: false },
  ]);

  // MISSIONS
  const [missions, setMissions] = useState([
    { id: 1, title: "Play 3 Classic Matches", progress: 2, total: 3, reward: 200, claimed: false },
    { id: 2, title: "Eliminate 10 Enemies", progress: 6, total: 10, reward: 100, claimed: false },
    { id: 3, title: "Survive for 30 Minutes", progress: 18, total: 30, reward: 150, claimed: false },
  ]);

  // INVENTORY
  const [inventory, setInventory] = useState([
    { id: 1, name: "Assault Rifle", icon: "🔫", price: 2000, owned: true, equipped: true },
    { id: 2, name: "Combat Helmet", icon: "🪖", price: 1500, owned: false, equipped: false },
    { id: 3, name: "Military Backpack", icon: "🎒", price: 2500, owned: false, equipped: false },
    { id: 4, name: "Golden Outfit", icon: "🥷", price: 4000, owned: false, equipped: false },
  ]);

  const [activeTab, setActiveTab] = useState("HOME");
  const [notifications, setNotifications] = useState([]);
  const [showNotifications, setShowNotifications] = useState(false);

  // NOTIFICATION FUNCTION
  const notify = (message) => {
    setNotifications((prev) => [
      { id: Date.now() + Math.random(), message },
      ...prev,
    ]);
    setShowNotifications(true);
  };

  // MATCHMAKING TIMER
  useEffect(() => {
    if (!playing) return;

    const timer = setInterval(() => {
      setSeconds((prev) => prev + 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [playing]);

  const formatTime = (time) => {
    const min = Math.floor(time / 60);
    const sec = time % 60;
    return `${String(min).padStart(2, "0")}:${String(sec).padStart(2, "0")}`;
  };

  const toggleGame = () => {
    if (playing) {
      setPlaying(false);
      setSeconds(0);
      notify("Matchmaking cancelled!");
    } else {
      setPlaying(true);
      setSeconds(0);
      notify(`${mode} matchmaking started on ${selectedMap}!`);
    }
  };

  // FRIEND INVITATION
  const inviteFriend = (id) => {
    setFriends((prev) =>
      prev.map((friend) =>
        friend.id === id
          ? { ...friend, invited: !friend.invited }
          : friend
      )
    );

    const friend = friends.find((f) => f.id === id);
    notify(
      friend.invited
        ? `Invitation cancelled for ${friend.name}`
        : `Invitation sent to ${friend.name}!`
    );
  };

  // MISSION CLAIM
  const claimReward = (id) => {
    const mission = missions.find((m) => m.id === id);

    if (mission.claimed || mission.progress < mission.total) {
      return;
    }

    setCoins((prev) => prev + mission.reward);

    setMissions((prev) =>
      prev.map((m) =>
        m.id === id ? { ...m, claimed: true } : m
      )
    );

    notify(`${mission.reward} BP reward claimed!`);
  };

  // MISSION PROGRESS DEMO
  const progressMission = (id) => {
    setMissions((prev) =>
      prev.map((m) =>
        m.id === id && m.progress < m.total
          ? { ...m, progress: m.progress + 1 }
          : m
      )
    );

    notify("Mission progress updated!");
  };

  // INVENTORY PURCHASE
  const buyItem = (id) => {
    const item = inventory.find((i) => i.id === id);

    if (item.owned) {
      setInventory((prev) =>
        prev.map((i) => ({
          ...i,
          equipped: i.id === id,
        }))
      );

      notify(`${item.name} equipped!`);
      return;
    }

    if (coins < item.price) {
      notify("Not enough BP coins!");
      return;
    }

    setCoins((prev) => prev - item.price);

    setInventory((prev) =>
      prev.map((i) =>
        i.id === id
          ? { ...i, owned: true, equipped: true }
          : { ...i, equipped: false }
      )
    );

    notify(`${item.name} purchased successfully!`);
  };

  // BATTLE PASS XP
  const earnXP = () => {
    setXp((prev) => {
      const next = prev + 100;

      if (next >= 1000) {
        setLevel((lvl) => lvl + 1);
        notify("Congratulations! Battle Pass level increased!");
        return next - 1000;
      }

      notify("100 XP earned!");
      return next;
    });
  };

  // SAVE PROFILE
  const saveProfile = () => {
    if (!newName.trim()) {
      notify("Username cannot be empty!");
      return;
    }

    setUsername(newName.trim());
    setEditName(false);
    notify("Profile updated!");
  };

  const maps = [
    {
      name: "Erangel",
      type: "Classic Map",
      image: "https://images.unsplash.com/photo-1519681393784-d120267933ba?w=600",
    },
    {
      name: "Miramar",
      type: "Desert Map",
      image: "https://images.unsplash.com/photo-1509316785289-025f5b846b35?w=600",
    },
    {
      name: "Sanhok",
      type: "Jungle Map",
      image: "https://images.unsplash.com/photo-1448375240586-882707db888b?w=600",
    },
  ];

  return (
    <div className="min-h-screen bg-[#080b0e] text-white">

      {/* NAVBAR */}
      <header className="sticky top-0 z-50 bg-[#101419] border-b border-white/10">
        <div className="max-w-[1500px] mx-auto px-5 h-20 flex justify-between items-center">

          <div className="flex items-center gap-3">
            <div className="bg-[#f5a623] text-black font-black text-2xl px-3 py-1">
              B
            </div>
            <div>
              <h1 className="font-black text-xl tracking-widest">
                BATTLEGROUNDS
              </h1>
              <p className="text-[9px] tracking-[4px] text-[#f5a623]">
                PLAYER UNKNOWN
              </p>
            </div>
          </div>

          <nav className="hidden lg:flex gap-7 text-xs font-bold text-gray-400">
            {["HOME", "PLAY", "STORE", "MISSIONS", "INVENTORY"].map((item) => (
              <button
                key={item}
                onClick={() => {
                  setActiveTab(item);
                  document.getElementById(item)?.scrollIntoView({
                    behavior: "smooth",
                    block: "start",
                  });
                }}
                className={`hover:text-[#f5a623] ${
                  activeTab === item ? "text-[#f5a623]" : ""
                }`}
              >
                {item}
              </button>
            ))}
          </nav>

          <div className="flex items-center gap-3">

            <div className="hidden sm:block text-sm font-bold text-yellow-400">
              🪙 {coins.toLocaleString()}
            </div>

            <div className="hidden sm:block text-sm font-bold text-blue-400">
              🔷 {diamonds.toLocaleString()}
            </div>

            <button
              onClick={() => setShowNotifications(!showNotifications)}
              className="relative text-xl hover:text-[#f5a623]"
            >
              🔔
              {notifications.length > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 rounded-full text-[9px] px-1.5">
                  {notifications.length}
                </span>
              )}
            </button>

            <button
              onClick={() => {
                setActiveTab("PROFILE");
                document.getElementById("PROFILE")?.scrollIntoView({
                  behavior: "smooth",
                });
              }}
              className="flex items-center gap-2"
            >
              <div className="w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center">
                👤
              </div>
              <span className="hidden md:block text-sm font-bold">
                {username}
              </span>
            </button>

          </div>
        </div>
      </header>

      {/* NOTIFICATIONS */}
      {showNotifications && (
        <div className="fixed top-24 right-5 z-[60] w-80 bg-[#1b2229] border border-white/20 rounded-xl p-5 shadow-2xl">
          <div className="flex justify-between mb-4">
            <h3 className="font-bold">Notifications</h3>
            <button onClick={() => setShowNotifications(false)}>✕</button>
          </div>

          {notifications.length === 0 ? (
            <p className="text-sm text-gray-400">No notifications yet.</p>
          ) : (
            notifications.slice(0, 6).map((n) => (
              <p key={n.id} className="text-sm border-b border-white/10 py-3">
                🔔 {n.message}
              </p>
            ))
          )}

          <button
            onClick={() => setNotifications([])}
            className="text-xs text-[#f5a623] mt-4"
          >
            Clear all
          </button>
        </div>
      )}

      <main className="max-w-[1500px] mx-auto p-4 md:p-7">

        {/* HERO */}
        <section
          id="HOME"
          className="relative min-h-[450px] rounded-2xl overflow-hidden bg-cover bg-center"
          style={{
            backgroundImage:
              "linear-gradient(90deg,rgba(5,8,12,.95),rgba(5,8,12,.35)),url('https://images.unsplash.com/photo-1519608487953-e999c86e7455?w=1600')",
          }}
        >
          <div className="relative p-7 md:p-14 min-h-[450px] flex flex-col justify-center max-w-2xl">

            <span className="text-black bg-[#f5a623] w-fit px-3 py-1 text-xs font-black">
              SEASON 28
            </span>

            <h2 className="text-5xl md:text-7xl font-black italic mt-5">
              WINNER
              <span className="block text-[#f5a623]">WINNER</span>
              CHICKEN DINNER
            </h2>

            <p className="text-gray-300 mt-5">
              Drop into the battleground. Fight your enemies and become
              the last player standing.
            </p>

            <button
              onClick={toggleGame}
              className="mt-8 bg-[#f5a623] text-black font-black py-4 px-10 w-fit rounded hover:bg-yellow-400 transition"
            >
              {playing ? "✕ CANCEL MATCH" : "▶ PLAY NOW"}
            </button>

            {playing && (
              <div className="mt-5 bg-black/50 p-4 rounded-xl border border-[#f5a623] w-fit">
                <p className="text-[#f5a623] text-xs font-bold animate-pulse">
                  ● FINDING MATCH...
                </p>
                <h3 className="text-2xl font-black mt-2">
                  {formatTime(seconds)}
                </h3>
                <p className="text-xs text-gray-400 mt-1">
                  {mode} · {selectedMap}
                </p>
              </div>
            )}

          </div>
        </section>

        {/* STATS */}
        <section className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-7">
          {[
            ["🏆", "RANK", "DIAMOND III"],
            ["🎯", "K/D RATIO", "4.85"],
            ["🥇", "WINS", wins],
            ["📊", "LEVEL", level],
          ].map(([icon, title, value]) => (
            <div key={title} className="bg-[#13191f] p-5 rounded-xl border border-white/10">
              <span className="text-2xl">{icon}</span>
              <p className="text-xs text-gray-400 mt-3">{title}</p>
              <h3 className="text-xl font-black text-[#f5a623]">{value}</h3>
            </div>
          ))}
        </section>

        {/* GAME MODE */}
        <section id="PLAY" className="mt-12 scroll-mt-24">
          <h2 className="text-2xl font-black">SELECT GAME MODE</h2>
          <p className="text-xs text-gray-500 mt-1 mb-5">
            Choose your battle style
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {[
              ["Solo", "👤", "1 PLAYER"],
              ["Duo", "👥", "2 PLAYERS"],
              ["Squad", "⚔️", "4 PLAYERS"],
            ].map(([name, icon, players]) => (
              <button
                key={name}
                onClick={() => {
                  setMode(name);
                  notify(`${name} mode selected!`);
                }}
                className={`p-6 rounded-xl border text-left transition ${
                  mode === name
                    ? "border-[#f5a623] bg-[#f5a623]/10"
                    : "border-white/10 bg-[#13191f]"
                }`}
              >
                <span className="text-4xl">{icon}</span>
                <h3 className="text-xl font-black mt-4">{name.toUpperCase()}</h3>
                <p className="text-xs text-[#f5a623] mt-1">{players}</p>
                <p className="text-xs text-gray-400 mt-3">
                  {mode === name ? "✓ SELECTED" : "Click to select"}
                </p>
              </button>
            ))}
          </div>
        </section>

        {/* MAPS */}
        <section className="mt-12">
          <h2 className="text-2xl font-black mb-5">SELECT MAP</h2>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {maps.map((map) => (
              <button
                key={map.name}
                onClick={() => {
                  setSelectedMap(map.name);
                  notify(`${map.name} selected!`);
                }}
                className={`relative h-44 rounded-xl overflow-hidden border-2 ${
                  selectedMap === map.name
                    ? "border-[#f5a623]"
                    : "border-transparent"
                }`}
              >
                <img
                  src={map.image}
                  alt={map.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent" />
                <div className="absolute bottom-4 left-4 text-left">
                  <h3 className="text-xl font-black">{map.name.toUpperCase()}</h3>
                  <p className="text-xs text-gray-300">{map.type}</p>
                </div>
                {selectedMap === map.name && (
                  <span className="absolute top-3 right-3 bg-[#f5a623] text-black text-xs font-bold px-2 py-1">
                    SELECTED
                  </span>
                )}
              </button>
            ))}
          </div>
        </section>

        {/* FRIENDS */}
        <section className="mt-12 bg-[#13191f] rounded-xl border border-white/10 p-6">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-black">FRIENDS</h2>
            <span className="text-green-400 text-xs">● ONLINE</span>
          </div>

          <div className="grid sm:grid-cols-2 gap-5">
            {friends.map((friend) => (
              <div key={friend.id} className="flex justify-between items-center bg-[#1b2229] p-4 rounded-xl">
                <div className="flex items-center gap-3">
                  <span className="text-3xl">{friend.avatar}</span>
                  <div>
                    <h3 className="font-bold text-sm">{friend.name}</h3>
                    <p className="text-xs text-gray-400">
                      Level {friend.level} · {friend.status}
                    </p>
                  </div>
                </div>

                <button
                  onClick={() => inviteFriend(friend.id)}
                  disabled={friend.status === "In Match"}
                  className={`px-4 py-2 text-xs font-bold rounded ${
                    friend.invited
                      ? "bg-green-600 text-white"
                      : "bg-[#f5a623] text-black"
                  } disabled:opacity-30`}
                >
                  {friend.status === "In Match"
                    ? "BUSY"
                    : friend.invited
                    ? "INVITED ✓"
                    : "INVITE"}
                </button>
              </div>
            ))}
          </div>
        </section>

        {/* MISSIONS */}
        <section id="MISSIONS" className="mt-12 scroll-mt-24">
          <h2 className="text-2xl font-black mb-6">DAILY MISSIONS</h2>

          <div className="grid md:grid-cols-3 gap-5">
            {missions.map((mission) => {
              const completed = mission.progress >= mission.total;

              return (
                <div key={mission.id} className="bg-[#13191f] border border-white/10 p-5 rounded-xl">
                  <div className="flex justify-between">
                    <span className="text-sm font-bold">{mission.title}</span>
                    <span className="text-[#f5a623]">🪙 {mission.reward}</span>
                  </div>

                  <div className="flex justify-between text-xs text-gray-400 mt-5">
                    <span>Progress</span>
                    <span>{mission.progress}/{mission.total}</span>
                  </div>

                  <div className="h-2 bg-gray-700 rounded-full mt-2 overflow-hidden">
                    <div
                      className="h-full bg-[#f5a623] transition-all"
                      style={{
                        width: `${(mission.progress / mission.total) * 100}%`,
                      }}
                    />
                  </div>

                  <button
                    onClick={() =>
                      completed
                        ? claimReward(mission.id)
                        : progressMission(mission.id)
                    }
                    disabled={mission.claimed}
                    className="mt-5 w-full py-3 rounded font-bold text-xs bg-[#f5a623] text-black disabled:bg-green-700 disabled:text-white"
                  >
                    {mission.claimed
                      ? "REWARD CLAIMED ✓"
                      : completed
                      ? "CLAIM REWARD"
                      : "DEMO: INCREASE PROGRESS"}
                  </button>
                </div>
              );
            })}
          </div>
        </section>

        {/* STORE / INVENTORY */}
        <section id="INVENTORY" className="mt-12 scroll-mt-24">
          <h2 className="text-2xl font-black mb-2">WEAPON & ITEM STORE</h2>
          <p className="text-xs text-gray-400 mb-6">
            Purchase and equip your items
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {inventory.map((item) => (
              <div key={item.id} className="bg-[#13191f] border border-white/10 rounded-xl p-5 text-center">
                <div className="text-5xl">{item.icon}</div>
                <h3 className="font-bold mt-4 text-sm">{item.name}</h3>

                <p className="text-xs text-[#f5a623] mt-2">
                  {item.owned ? "OWNED" : `🪙 ${item.price}`}
                </p>

                <button
                  onClick={() => buyItem(item.id)}
                  className={`w-full py-2 mt-4 text-xs font-bold rounded ${
                    item.equipped
                      ? "bg-green-700 text-white"
                      : "bg-[#f5a623] text-black"
                  }`}
                >
                  {item.equipped
                    ? "EQUIPPED ✓"
                    : item.owned
                    ? "EQUIP"
                    : "BUY ITEM"}
                </button>
              </div>
            ))}
          </div>
        </section>

        {/* BATTLE PASS */}
        <section className="mt-12 bg-gradient-to-r from-[#302217] to-[#151a20] border border-[#f5a623]/30 rounded-2xl p-7">
          <div className="flex justify-between flex-wrap gap-4">
            <div>
              <span className="text-[#f5a623] text-xs font-bold">
                SEASON 28
              </span>
              <h2 className="text-3xl font-black mt-2">BATTLE PASS</h2>
              <p className="text-sm text-gray-400 mt-2">
                Earn XP and unlock new levels.
              </p>
            </div>

            <div className="text-right">
              <p className="text-[#f5a623] font-black text-2xl">
                LEVEL {level}
              </p>
              <p className="text-xs text-gray-400">{xp}/1000 XP</p>
            </div>
          </div>

          <div className="h-4 bg-black/50 rounded-full mt-7 overflow-hidden">
            <div
              className="h-full bg-[#f5a623] transition-all"
              style={{ width: `${(xp / 1000) * 100}%` }}
            />
          </div>

          <button
            onClick={earnXP}
            className="mt-6 bg-[#f5a623] text-black font-bold text-sm px-7 py-3 rounded hover:bg-yellow-400"
          >
            + EARN 100 XP (DEMO)
          </button>
        </section>

        {/* PROFILE */}
        <section id="PROFILE" className="mt-12 bg-[#13191f] border border-white/10 rounded-xl p-6 scroll-mt-24">
          <h2 className="text-2xl font-black mb-6">PLAYER PROFILE</h2>

          <div className="flex flex-wrap gap-6 items-center">
            <div className="w-24 h-24 bg-orange-500 rounded-full flex items-center justify-center text-5xl">
              👤
            </div>

            <div className="flex-1">
              {editName ? (
                <div className="flex flex-wrap gap-2">
                  <input
                    value={newName}
                    onChange={(e) => setNewName(e.target.value)}
                    className="bg-[#080b0e] border border-white/20 rounded px-4 py-2 outline-none"
                  />
                  <button
                    onClick={saveProfile}
                    className="bg-green-600 px-4 py-2 rounded text-sm font-bold"
                  >
                    SAVE
                  </button>
                  <button
                    onClick={() => setEditName(false)}
                    className="bg-gray-700 px-4 py-2 rounded text-sm"
                  >
                    CANCEL
                  </button>
                </div>
              ) : (
                <>
                  <h3 className="text-2xl font-black">{username}</h3>
                  <p className="text-gray-400 text-sm mt-1">
                    Player Level {level}
                  </p>
                  <button
                    onClick={() => {
                      setNewName(username);
                      setEditName(true);
                    }}
                    className="text-[#f5a623] text-sm mt-3"
                  >
                    ✏️ Edit Username
                  </button>
                </>
              )}
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
            <div className="bg-[#202830] p-4 rounded">
              <p className="text-xs text-gray-400">BP COINS</p>
              <h3 className="font-black text-yellow-400 mt-2">{coins.toLocaleString()}</h3>
            </div>
            <div className="bg-[#202830] p-4 rounded">
              <p className="text-xs text-gray-400">DIAMONDS</p>
              <h3 className="font-black text-blue-400 mt-2">{diamonds}</h3>
            </div>
            <div className="bg-[#202830] p-4 rounded">
              <p className="text-xs text-gray-400">TOTAL WINS</p>
              <h3 className="font-black text-[#f5a623] mt-2">{wins}</h3>
            </div>
            <div className="bg-[#202830] p-4 rounded">
              <p className="text-xs text-gray-400">PLAYER LEVEL</p>
              <h3 className="font-black text-green-400 mt-2">{level}</h3>
            </div>
          </div>
        </section>

        <footer className="text-center border-t border-white/10 mt-12 py-8">
          <h2 className="font-black tracking-widest">BATTLEGROUNDS</h2>
          <p className="text-xs text-gray-500 mt-3">
            PUBG Inspired Interactive Gaming Dashboard · 2026
          </p>
        </footer>

      </main>
    </div>
  );
};

export default page;