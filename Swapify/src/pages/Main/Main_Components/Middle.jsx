import React from "react";

const statsData = [
  {
    id: 1,
    number: "12K+",
    title: "Items Swapped",
    desc: "Total items exchanged",
    icon: "🔄",
    color: "text-blue-600",
    bg: "bg-blue-100",
  },
  {
    id: 2,
    number: "8K+",
    title: "Happy Users",
    desc: "Across the community",
    icon: "👥",
    color: "text-green-600",
    bg: "bg-green-100",
  },
  {
    id: 3,
    number: "3K+",
    title: "Daily Trades",
    desc: "Happening every day",
    icon: "📈",
    color: "text-yellow-500",
    bg: "bg-yellow-100",
  },
];

const worksData = [
  {
    id: 1,
    title: "Upload",
    desc: "List items you no longer use in just a few steps.",
    icon: "☁️",
  },
  {
    id: 2,
    title: "Match",
    desc: "Find people who want your item and have what you need.",
    icon: "🤝",
  },
  {
    id: 3,
    title: "Swap",
    desc: "Connect, chat and exchange items safely.",
    icon: "🔄",
  },
];

const featuredItems = [
  {
    id: 1,
    name: "PlayStation 5",
    wants: "Gaming Laptop",
    location: "Delhi",
    image:
      "https://images.unsplash.com/photo-1606813907291-d86efa9b94db?q=80&w=500&auto=format&fit=crop",
  },
  {
    id: 2,
    name: "iPhone 15",
    wants: "MacBook",
    location: "Mumbai",
    image:
      "https://images.unsplash.com/photo-1695048133142-1a20484d2569?q=80&w=500&auto=format&fit=crop",
  },
  {
    id: 3,
    name: "Hero MTB Cycle",
    wants: "Smart TV",
    location: "Bangalore",
    image:
      "https://images.unsplash.com/photo-1507035895480-2b3156c31fc8?q=80&w=500&auto=format&fit=crop",
  },
  {
    id: 4,
    name: "Study Table",
    wants: "Office Chair",
    location: "Pune",
    image:
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=500&auto=format&fit=crop",
  },
];

const Middle = () => {
  return (
    <div className="px-8 py-8 bg-gray-50">

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

        {statsData.map((item) => (
          <div
            key={item.id}
            className="bg-white rounded-3xl p-6 shadow-sm border hover:shadow-md transition-all"
          >
            <div
              className={`w-14 h-14 ${item.bg} rounded-full flex items-center justify-center text-2xl`}
            >
              {item.icon}
            </div>

            <h1 className={`text-4xl font-bold mt-4 ${item.color}`}>
              {item.number}
            </h1>

            <h2 className="text-xl font-semibold mt-2">
              {item.title}
            </h2>

            <p className="text-gray-500 mt-1">
              {item.desc}
            </p>
          </div>
        ))}
      </div>

      {/* How It Works */}
      <div className="mt-14">

        <h1 className="text-3xl font-bold text-center mb-10">
          How Swapify Works
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

          {worksData.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-3xl p-6 shadow-sm border hover:shadow-md transition-all"
            >
              <div className="text-5xl">
                {item.icon}
              </div>

              <h1 className="text-2xl font-bold mt-4">
                {item.title}
              </h1>

              <p className="text-gray-500 mt-2">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Categories */}
      <div className="mt-14">

        <h1 className="text-2xl font-bold mb-6">
          Browse Categories
        </h1>

        <div className="flex flex-wrap gap-4">

          {[
            "💻 Electronics",
            "👕 Fashion",
            "⚽ Sports",
            "🪑 Furniture",
            "📚 Books",
            "🎮 Gaming",
          ].map((cat, index) => (
            <button
              key={index}
              className="px-5 py-3 bg-white rounded-full border shadow-sm hover:bg-blue-50 transition-all"
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Featured Items */}
      <div className="mt-14">

        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold">
            Featured Items
          </h1>

          <button className="text-blue-600 font-semibold">
            View All →
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">

          {featuredItems.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-3xl p-4 shadow-sm border hover:shadow-md transition-all"
            >
              <img
                src={item.image}
                alt=""
                className="h-40 w-full object-cover rounded-2xl"
              />

              <h1 className="text-xl font-bold mt-4">
                {item.name}
              </h1>

              <p className="text-sm text-gray-500 mt-1">
                Wants: {item.wants}
              </p>

              <p className="text-sm text-gray-400 mt-1">
                📍 {item.location}
              </p>

              <button className="mt-4 w-full bg-blue-600 text-white py-2 rounded-xl hover:bg-blue-700 transition-all">
                Request Swap
              </button>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
};

export default Middle;