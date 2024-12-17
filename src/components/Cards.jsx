//import React from 'react';

function Cards() {
    const data = [
        {
            image: "https://imgs.search.brave.com/l3mpnkKzXI5pBB0zwav2RLJcEYeVp4LJ_96Xt80_Qa4/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTUz/MDcyMTM5L3Bob3Rv/L2EtaHAtZG00LTMw/MDBlYS1sYXB0b3At/cGhvdG9ncmFwaGVk/LWR1cmluZy1hLXN0/dWRpby1zaG9vdC1m/b3Itb2ZmaWNpYWwt/d2luZG93cy1tYWdh/emluZS5qcGc_cz02/MTJ4NjEyJnc9MCZr/PTIwJmM9eW4tcDhw/Q25QQy1oRUQtdS1V/U3NpcVFna1RGMWho/RFNfMkxjT0habkJM/az0",
            name: "Laptop",
            description: "lorem gypsum nothing like anything",
            stock:true
        },
        {
            image: "https://imgs.search.brave.com/9dSnTHwTrquLejZigP4qWKZ4dRwvVeP2MqZC2sXXbBI/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTM2/NDYyMDMwOS9waG90/by9pcGhvbmUtMTMt/cHJvLmpwZz9zPTYx/Mng2MTImdz0wJms9/MjAmYz0yaDVRNDZ3/aC1lUnlQd2g0S0tu/SmhDS0ZXcWNkMmx0/Z3Y5dGRhVUxEZGJj/PQ",
            name: "Mobile",
            description: "lorem gypsum nothing like anything",
            stock:false
        },
    ];

    const handleClick=()=>{
        return alert("chalra hoon bhai!");
    }
    return (
        <div className="grid grid-cols-1 gap-4">
            {data.map((elem, index) => (
                <div
                    key={index}
                    className="bg-zinc-200 flex flex-col justify-center items-center p-4 rounded-md"
                >
                    <div className="w-40 h-32 px-3 bg-zinc-300 rounded-md overflow-hidden">
                        <img
                            className="object-cover w-full h-full"
                            src={elem.image}
                            alt={elem.name}
                        />
                    </div>
                    <h1 className="font-semibold text-black-100 text-md mt-2">
                        {elem.name}
                    </h1>
                    <p className="text-sm font-serif w-40 text-center">
                        {elem.description}
                    </p>
                    <button onClick={handleClick} className={`${elem.stock?"bg-blue-600": "bg-red-600"} text-white text-md rounded-md px-4 py-2 mt-3`}>
                        {elem.stock?"In Stock" : "out of stock"}
                    </button>
                </div>
            ))}
        </div>
    );
}

export default Cards;
