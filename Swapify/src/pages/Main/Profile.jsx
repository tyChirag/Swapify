import React from 'react'

const Profile = () => {
  const items = [
    {
      name: "Vintage Watch",
      price: "$240",
      image:
        "https://images.unsplash.com/photo-1523170335258-f5ed11844a49",
    },
    {
      name: "Gaming Keyboard",
      price: "$120",
      image:
        "https://images.unsplash.com/photo-1511467687858-23d96c32e4ae",
    },
    {
      name: "Sneakers",
      price: "$180",
      image:
        "https://images.unsplash.com/photo-1542291026-7eec264c27ff",
    },
    {
      name: "Headphones",
      price: "$90",
      image:
        "https://images.unsplash.com/photo-1505740420928-5e560c06d30e",
    },
  ];

  return (
    <div className="min-h-screen bg-zinc-950 text-white p-6">
      {/* Main Container */}
      <div className="max-w-7xl mx-auto">
        {/* Top Profile Section */}
        <div className="bg-zinc-900 rounded-3xl p-8 border border-zinc-800 shadow-2xl">
          <div className="flex flex-col lg:flex-row gap-8 items-center lg:items-start">
            {/* Profile Image */}
            <img
              src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e"
              alt="Trader"
              className="
                w-40
                h-40
                rounded-3xl
                object-cover
                border-4
                border-cyan-500
                transition-all
                duration-500
                hover:scale-105
                hover:rotate-2
              "
            />

            {/* Info */}
            <div className="flex-1">
              <div className="flex flex-col lg:flex-row lg:justify-between gap-6">
                <div>
                  <h1 className="text-5xl font-bold">
                    Rahul 
                  </h1>

                  <p className="text-cyan-400 mt-3 text-lg">
                    Item Trader • Collectibles • Electronics
                  </p>

                  <p className="text-zinc-400 mt-5 max-w-2xl leading-7">
                    Experienced trader specializing in rare collectibles,
                    gaming accessories, watches, and premium gadgets.
                    Open to trades, negotiations, and worldwide shipping.
                  </p>
                </div>

                {/* Buttons */}
                <div className="flex gap-4">
                  <button
                    className="
                      px-6
                      py-3
                      rounded-2xl
                      bg-cyan-500
                      text-black
                      font-semibold
                      transition-all
                      duration-300
                      hover:scale-105
                      hover:shadow-2xl
                      hover:bg-cyan-400
                    "
                  >
                    Contact Trader
                  </button>

                  <button
                    className="
                      px-6
                      py-3
                      rounded-2xl
                      bg-zinc-800
                      transition-all
                      duration-300
                      hover:bg-zinc-700
                      hover:scale-105
                    "
                  >
                    Follow
                  </button>
                </div>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-5 mt-10">
                <div className="bg-zinc-800 rounded-2xl p-5 text-center">
                  <h2 className="text-3xl font-bold">124</h2>
                  <p className="text-zinc-400 mt-2">Trades</p>
                </div>

                <div className="bg-zinc-800 rounded-2xl p-5 text-center">
                  <h2 className="text-3xl font-bold">98%</h2>
                  <p className="text-zinc-400 mt-2">Positive Reviews</p>
                </div>

                <div className="bg-zinc-800 rounded-2xl p-5 text-center">
                  <h2 className="text-3xl font-bold">4.9</h2>
                  <p className="text-zinc-400 mt-2">Rating</p>
                </div>

                <div className="bg-zinc-800 rounded-2xl p-5 text-center">
                  <h2 className="text-3xl font-bold">6Y</h2>
                  <p className="text-zinc-400 mt-2">Experience</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Listed Items */}
        <div className="mt-12">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-4xl font-bold">
              Listed Items
            </h2>

            <button
              className="
                px-5
                py-3
                rounded-2xl
                bg-zinc-800
                transition-all
                duration-300
                hover:bg-cyan-500
                hover:text-black
                hover:scale-105
              "
            >
              View All
            </button>
          </div>

          {/* Item Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {items.map((item, index) => (
              <div
                key={index}
                className="
                  group
                  bg-zinc-900
                  rounded-3xl
                  overflow-hidden
                  border
                  border-zinc-800
                  transition-all
                  duration-500
                  hover:scale-105
                  hover:shadow-2xl
                  hover:border-cyan-500
                "
              >
                <div className="overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="
                      h-64
                      w-full
                      object-cover
                      transition-all
                      duration-500
                      group-hover:scale-110
                    "
                  />
                </div>

                <div className="p-5">
                  <div className="flex justify-between items-center">
                    <h3 className="text-xl font-semibold">
                      {item.name}
                    </h3>

                    <span className="text-cyan-400 font-bold">
                      {item.price}
                    </span>
                  </div>

                  <button
                    className="
                      mt-5
                      w-full
                      py-3
                      rounded-xl
                      bg-cyan-500
                      text-black
                      font-semibold
                      transition-all
                      duration-300
                      hover:bg-cyan-400
                      hover:scale-105
                    "
                  >
                    Trade Now
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Reviews */}
        <div className="mt-14 bg-zinc-900 rounded-3xl p-8 border border-zinc-800">
          <h2 className="text-3xl font-bold mb-8">
            Trader Reviews
          </h2>

          <div className="space-y-6">
            <div className="bg-zinc-800 rounded-2xl p-5">
              <p className="text-zinc-300">
                “Smooth trade and very fast shipping. Product
                arrived exactly as described.”
              </p>

              <h4 className="mt-4 font-semibold text-cyan-400">
                — Michael
              </h4>
            </div>

            <div className="bg-zinc-800 rounded-2xl p-5">
              <p className="text-zinc-300">
                “Professional trader with genuine collectibles.
                Highly recommended.”
              </p>

              <h4 className="mt-4 font-semibold text-cyan-400">
                — Sarah
              </h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile
