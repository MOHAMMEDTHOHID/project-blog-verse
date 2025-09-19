import { useState } from "react";

function Home() {
    const [ids] = useState([
        {
            img: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=400&h=200&fit=crop",
            id: "card-2", text: "hello"
        },

        {img:"https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=400&h=200&fit=crop",
            id: "card-3", text: "hello"
        },

        {   img:"https://images.unsplash.com/photo-1627398242454-45a1465c2479?w=400&h=200&fit=crop",
            id: "card-4", text: "hello"
        },

        {   img:"https://images.unsplash.com/photo-1561070791-2526d30994b5?w=400&h=200&fit=crop",
            id: "card-5", text: "hello"
        },

        {   img:"https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=200&fit=crop",
            id: "card-6", text: "hello"
        },

        {   img:"https://images.unsplash.com/photo-1555255707-c07966088b7b?w=400&h=200&fit=crop",
            id: "card-1", text: "hello"
        },

    ]);

    return (
        <div>
            <div className="flex flex-col items-center">
                <h2 className="font-semibold text-4xl">WELCOME TO BLOGVERSE</h2>
                <p className="font-medium flex flex-col items-center max-w-2xl">
                    Discover amazing stories, insights, and ideas from our community of writers.
                    Sign in to create your own posts and save your favorites.
                </p>
            </div>

            <div className=" flex flex-wrap gap-3 px-40">
                {ids.map((item) => (
                    <div key={item.id} className="border w-[30%] h-[70%]  border-b-cyan-800 p-4 w-64px ">
                        <img src={item.img } alt={item.id} className="h-auto w-max rounded-2xl "/>
                      <div className=" absolute ">  <h3 className="flex flex-wrap pt-3 pl-2 "><span  ><img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=40&h=40&fit=crop&crop=face" className="p-1.5 rounded-full"/></span>{item.text}</h3> </div>
                        <p className="relative"> 5hr ago</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Home;