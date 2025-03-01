import React from 'react';

const Blog = () => {
    const blogData = {
        "author": {
            "name": "Sarah Khan",
            "role": "Full Stack Developer"
        },
        "title": "Understanding RESTful APIs: A Beginner's Guide",
        "published_on": "2025-03-01",
        "content": {
            "introduction": "A RESTful API (Representational State Transfer) is a set of conventions for building web services. REST is a stateless and scalable approach to designing networked applications. In this article, we will break down what RESTful APIs are, their key principles, and how they are used in modern web development.",
            "steps": [
                {
                    "title": "What is REST?",
                    "description": "REST stands for Representational State Transfer, and it's an architectural style that uses stateless communication over HTTP. A REST API uses HTTP methods like GET, POST, PUT, and DELETE to interact with resources.",
                    "code": ""
                },
                {
                    "title": "Key Principles of REST",
                    "description": "RESTful APIs are designed around certain principles: statelessness, client-server architecture, and uniform interface. These principles help ensure scalability and flexibility in your API design.",
                    "code": ""
                },
                {
                    "title": "Setting Up a RESTful API in Express",
                    "description": "To set up a RESTful API in Express, we need to define routes, handle requests, and structure our server. Here’s an example of setting up a basic API to manage users.",
                    "code": "app.get('/users', (req, res) => { res.json(users); });"
                }
            ],
            "technologies": [
                "Express",
                "Node.js",
                "REST APIs"
            ]
        },
        "hiring_info": {
            "message": "Looking for Full Stack Developers! Contact Sarah."
        }
    };

    const { author, title, published_on, content, hiring_info } = blogData;

    return (
        <div className="max-w-3xl mx-auto p-6 bg-white rounded-lg shadow-md">
            <header className="mb-6">
                <h1 className="text-3xl font-semibold text-gray-800">{title}</h1>
                <p className="text-sm text-gray-500 mt-2">
                    <strong>Author:</strong> {author.name} - {author.role}
                </p>
                <p className="text-sm text-gray-500">
                    <strong>Published on:</strong> {published_on}
                </p>
            </header>

            <section className="mb-6">
                <h2 className="text-2xl font-semibold text-gray-700">Introduction</h2>
                <p className="text-gray-700">{content.introduction}</p>
            </section>

            <section className="mb-6">
                <h2 className="text-2xl font-semibold text-gray-700">Steps</h2>
                <ol className="list-decimal pl-6">
                    {content.steps.map((step, index) => (
                        <li key={index} className="mb-4">
                            <h3 className="text-xl font-semibold text-gray-800">{step.title}</h3>
                            <p className="text-gray-700">{step.description}</p>
                            {step.code && (
                                <pre className="bg-gray-100 p-4 mt-2 rounded-md">
                                    <code>{step.code}</code>
                                </pre>
                            )}
                        </li>
                    ))}
                </ol>
            </section>

            <section className="mb-6">
                <h2 className="text-2xl font-semibold text-gray-700">Technologies Used</h2>
                <ul className="list-disc pl-6">
                    {content.technologies.map((tech, index) => (
                        <li key={index} className="text-gray-700">{tech}</li>
                    ))}
                </ul>
            </section>

            <section>
                <h2 className="text-2xl font-semibold text-gray-700">Hiring Information</h2>
                <p className="text-gray-700">{hiring_info.message}</p>
            </section>
        </div>
    );
};

export default Blog;
