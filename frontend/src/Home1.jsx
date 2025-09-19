
import React from "react";

const idds = [
    {
        id: "1",
        category: "Technology",
        image:
            "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=400&h=200&fit=crop",
        author: "Sarah Johnson",
        title: "Getting Started with React and Tailwind CSS",
        description:
            "Learn how to build beautiful and responsive user interfaces using React and Tailwind CSS. This comprehensive guide covers everything from setup to deployment.",
        readingTime: "8 min",
    },
    {
        id: "2",
        category: "Technology",
        image:
            "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=400&h=200&fit=crop",
        author: "Michael Chen",
        title: "The Future of Web Development",
        description:
            "Exploring the latest trends and technologies that are shaping the future of web development. From AI integration to new frameworks, discover what's next.",
        readingTime: "5 min",
    },
    {
        id: "3",
        category: "Lifestyle",
        image:
            "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=200&fit=crop",
        author: "Emily Rodriguez",
        title: "Mindful Living in a Digital Age",
        description:
            "In our hyper-connected world, finding balance and mindfulness has become more important than ever. Here are practical strategies for maintaining mental...",
        readingTime: "6 min",
    },
];

function Home() {
    return (
        <div className="min-h-screen bg-gray-50 p-6">
            <div className="text-center mb-10">
                <h2 className="text-4xl font-bold">WELCOME TO BLOGVERSE</h2>
                <p className="text-gray-700 font-medium max-w-2xl mx-auto mt-4">
                    Discover amazing stories, insights, and ideas from our community of writers.
                    Sign in to create your own posts and save your favorites.
                </p>
            </div>

            <div className="flex flex-wrap justify-center gap-8">
                {idds.map((idd) => (
                    <div
                        key={idd.id}
                        className="border border-gray-300 rounded-lg overflow-hidden shadow hover:shadow-lg transition-shadow duration-300 w-80"
                    >
                        <img
                            src={idd.image}
                            alt={idd.title}
                            className="w-full h-48 object-cover"
                        />
                        <div className="flex justify-evenly items-center text-sm text-gray-500 mt-2">
                                <span>By {idd.author}</span>
                                <span>{idd.readingTime} read</span>
                            </div>
                        <div className="p-4 flex flex-col gap-2">
                           
                            <h3 className="text-xl font-bold">{idd.title}</h3>
                            <p className="text-gray-600 text-sm">{idd.description}</p>
                            
                            <a
                                href="#"
                                className="text-blue-500 hover:underline text-sm font-medium mt-2"
                            >
                                Read More →
                            </a>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Home;
