import { LoaderFunction } from "@remix-run/node";
import { Link, useLoaderData } from "@remix-run/react";
import { db } from "utils/db.server";
export const loader: LoaderFunction = async () => {
    const data = {
      posts: await db.post.findMany({
        select: { id: true, title: true, createdAt: true, content: true },
        orderBy: { createdAt: "desc" },
      }),
    }
  
    return data;
  }
export default function blogIndex() {
    const {posts} = useLoaderData<typeof loader>();
    return (
        <div>
           <h1 className="text-black text-3xl mx-1 font-extrabold  relative inline-block stroke-current mb-4">📚 BLOG
                <svg className="absolute-bottom-0.5 w-full max-h-1.5" viewBox="0 0 55 5" xmlns="http://www.w3.org/2000/svg"
                  preserveAspectRatio="none">
                  <path d="M0.652466 4.00002C15.8925 2.66668 48.0351 0.400018 54.6853 2.00002" strokeWidth="2"></path>
                </svg>
              </h1>

              <Link to="/blog/new" className="ml-3 bg-black text-white hover:bg-gray-600 p-2 rounded">➕ New Post</Link>  


             {posts.map((post:any) => (
              <div className="mt-3 p-3 border-b-2 " key={post.id}>
                <Link to={'/blog/'+post.id}>
                <div className="w-full  hover:bg-gray-200">
                  <h2 className="text-black text-2xl mx-1 font-extrabold  relative inline-block stroke-current">✅ {post.title}</h2>
                    <span className="text-sm">
                        📅 {new Date(post.createdAt).toDateString()}
                    </span>
                  <p >
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; {post.content.slice(0, 150)}...
                  </p>
                </div>
                </Link>
                </div>
             ))}
               
        </div>
    );
} 