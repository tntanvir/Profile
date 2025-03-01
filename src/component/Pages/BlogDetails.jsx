import React from 'react';
import { useParams } from 'react-router-dom';

const blogs = [
    {
        id: 1,
        title: "Understanding Django Rest Framework",
        slug: "understanding-django-rest-framework",
        content: "Django Rest Framework (DRF) is a powerful and flexible toolkit for building Web APIs. DRF is built on top of Django and provides a set of tools that allow you to build and manage APIs with ease. In this article, we will explore some of the key features and concepts of DRF that make it one of the most popular frameworks for developing APIs. DRF simplifies the process of handling HTTP requests, rendering responses, and validating input data. It also provides a set of features like serialization, authentication, permissions, and pagination, which are essential for building modern APIs.\n\n### Key Features of Django Rest Framework\nDjango Rest Framework offers several key features that are designed to simplify the process of building APIs:\n\n1. **Serialization** - DRF allows you to convert complex data types, such as Django models, into JSON format, making it easy to send data over the web.\n2. **Authentication** - DRF provides built-in support for various authentication schemes, including basic authentication, session authentication, and token-based authentication.\n3. **Permissions** - You can easily define permissions to control which users have access to different parts of your API.\n4. **Views and ViewSets** - DRF provides class-based views that handle HTTP requests and responses, as well as ViewSets, which provide automatic routing for CRUD operations.\n5. **Pagination** - DRF supports automatic pagination of large datasets, helping to keep your API responses fast and efficient.\n6. **Throttling** - DRF allows you to limit the rate at which users can access your API, preventing abuse and ensuring fair usage.\n7. **Browsable API** - DRF includes a browsable API interface, which is a powerful feature for developers to test their APIs easily through a web browser.\n\n### Setting Up Django Rest Framework\nTo set up DRF in your Django project, first, you need to install the package by running the following command:\n\n```bash\npip install djangorestframework\n```\n\nOnce installed, you can add it to your Django project’s `INSTALLED_APPS` in the `settings.py` file:\n\n```python\nINSTALLED_APPS = [\n    ...,\n    'rest_framework',\n    ...\n]\n```\n\n### Creating a Simple API with DRF\nLet’s create a simple API to manage blog posts. We will start by defining a `Post` model, a serializer for converting the model data to JSON, and then create a view to handle API requests.\n\n1. **Create the Post model:**\n\n```python\nclass Post(models.Model):\n    title = models.CharField(max_length=200)\n    content = models.TextField()\n    created_at = models.DateTimeField(auto_now_add=True)\n    updated_at = models.DateTimeField(auto_now=True)\n\n    def __str__(self):\n        return self.title\n```\n\n2. **Create the serializer:**\n\n```python\nfrom rest_framework import serializers\nfrom .models import Post\n\nclass PostSerializer(serializers.ModelSerializer):\n    class Meta:\n        model = Post\n        fields = ['id', 'title', 'content', 'created_at', 'updated_at']\n```\n\n3. **Create the view:**\n\n```python\nfrom rest_framework.views import APIView\nfrom rest_framework.response import Response\nfrom rest_framework import status\nfrom .models import Post\nfrom .serializers import PostSerializer\n\nclass PostListCreateAPIView(APIView):\n    def get(self, request):\n        posts = Post.objects.all()\n        serializer = PostSerializer(posts, many=True)\n        return Response(serializer.data)\n\n    def post(self, request):\n        serializer = PostSerializer(data=request.data)\n        if serializer.is_valid():\n            serializer.save()\n            return Response(serializer.data, status=status.HTTP_201_CREATED)\n        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)\n```\n\n4. **Define the URL patterns:**\n\n```python\nfrom django.urls import path\nfrom .views import PostListCreateAPIView\n\nurlpatterns = [\n    path('posts/', PostListCreateAPIView.as_view(), name='post-list-create')\n]\n```\n\n### Conclusion\nDjango Rest Framework makes it easy to create APIs that integrate seamlessly with Django. Its rich feature set and flexibility allow you to create complex and secure APIs while minimizing the amount of boilerplate code you need to write. Whether you're building an API for a small project or a large-scale application, DRF is a great choice for your backend needs."
    },
    {
        id: 2,
        title: "JWT Authentication in Django",
        slug: "jwt-authentication-django",
        content: "JSON Web Tokens (JWT) provide a secure way to authenticate users in web applications. JWT allows you to securely transmit information between parties as a JSON object. In Django, we can use JWT to authenticate users by signing tokens that contain user information. This article will explain how to set up JWT authentication in Django using Django Rest Framework (DRF).\n\n### What is JWT?\nJWT is an open standard (RFC 7519) for securely transmitting information between parties as a JSON object. JWTs can be used for authentication, and the information in the token can be verified and trusted because it is signed with a secret key. The token is split into three parts:\n\n1. **Header** - Contains metadata about the token, such as the algorithm used to sign it (usually `HS256`).\n2. **Payload** - Contains the claims (i.e., the data you want to transmit). This data can include the user's ID, email, and any other information you need.\n3. **Signature** - Used to verify that the sender of the JWT is who it says it is and to ensure that the message wasn't changed along the way.\n\n### Setting Up JWT Authentication in Django\nTo implement JWT authentication in Django, you need to install the `djangorestframework-simplejwt` package, which is a DRF extension for working with JWT tokens.\n\n1. **Install the package:**\n\n```bash\npip install djangorestframework-simplejwt\n```\n\n2. **Add it to your Django settings:**\n\nIn your `settings.py`, configure the JWT authentication class:\n\n```python\nREST_FRAMEWORK = {\n    'DEFAULT_AUTHENTICATION_CLASSES': [\n        'rest_framework_simplejwt.authentication.JWTAuthentication',\n    ],\n}\n```\n\n3. **Create the views for obtaining and refreshing the token:**\n\n```python\nfrom rest_framework_simplejwt.views import TokenObtainPairView, TokenRefreshView\n\nurlpatterns = [\n    path('api/token/', TokenObtainPairView.as_view(), name='token_obtain_pair'),\n    path('api/token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),\n]\n```\n\n4. **Using the Token:**\nOnce a user has obtained a token, they can include it in the `Authorization` header of API requests. For example:\n\n```bash\nAuthorization: Bearer <access_token>\n```\n\n### Conclusion\nJWT is a powerful method of authentication that is stateless and secure. It allows you to authenticate users without the need for storing sessions on the server, making it ideal for modern web applications and APIs. By integrating JWT with Django Rest Framework, you can easily implement user authentication in your Django projects."
    }
];

const BlogDetails = () => {
    const { id } = useParams();  // Get the blog ID from the URL
    const blog = blogs.find(blog => blog.slug === id);  // Find the corresponding blog post

    if (!blog) {
        return <p className="text-center text-xl text-red-600">Blog not found</p>;
    }

    return (
        <div className="blog-details-container p-8 max-w-4xl mx-auto bg-white rounded-lg shadow-lg">
            <h1 className="text-5xl font-bold text-gray-800 mb-6">{blog.title}</h1>
            <div className="prose lg:prose-xl text-gray-700 mb-8">
                <p>{blog.content}</p>
            </div>
            <hr className="border-t-2 border-gray-300 mb-6" />
            <div className="text-right text-sm text-gray-500">
                <p>Posted on: {new Date().toLocaleDateString()}</p>
            </div>
        </div>
    );
};

export default BlogDetails;
