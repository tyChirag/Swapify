import React from "react"

const Trades = () => {

    const trades = [

        {

            user: "Simran",

            item: "MacBook Air",

            status: "Pending"

        },

        {

            user: "Aman",

            item: "PS5",

            status: "Completed"

        },

        {

            user: "Priya",

            item: "Study Table",

            status: "In Progress"

        }

    ]

    return(

        <div className="min-h-screen bg-gray-100 p-10">

            <h1 className="text-4xl font-bold mb-8">

                My Trades

            </h1>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

                {

                    trades.map((trade,index) => (

                        <div

                            key={index}

                            className="bg-white rounded-2xl shadow-lg p-6 hover:scale-105 transition"

                        >

                            <h2 className="text-2xl font-bold">

                                {trade.item}

                            </h2>

                            <p className="text-gray-500 mt-3">

                                User: {trade.user}

                            </p>

                            <p className="mt-2">

                                Status:

                                <span className="text-blue-600 font-semibold ml-2">

                                    {trade.status}

                                </span>

                            </p>

                            <button

                                className="mt-5 w-full bg-blue-600 text-white py-3 rounded-xl hover:bg-blue-700"

                            >

                                Open Chat

                            </button>

                        </div>

                    ))

                }

            </div>

        </div>

    )

}

export default Trades