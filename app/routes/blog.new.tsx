import { ActionFunctionArgs,ActionFunction } from "@remix-run/node"
import { Form,redirect } from "@remix-run/react"
import { db } from "utils/db.server";

export const action: ActionFunction = async ({request}: ActionFunctionArgs) => {
    const form = await request.formData();
    const title = form.get('title');
    const author = form.get('author');
    const content = form.get('content');
    await db.post.create({
        data: {
            title: title as string,
            author: author as string,
            content: content as string
        }
    });


    return redirect('/blog');
};

export default function newBlog(){

    return (
        <div>
          <div className="basis-3/4 ">
            <section className="p-4 m-3 border-t-2 border-l-2 border-black rounded-lg h-screen">
                <h2 className="text-black text-3xl mx-1 font-extrabold  relative inline-block stroke-current">✅ Create New Post<svg className="absolute-bottom-0.5 w-full max-h-1.5" viewBox="0 0 55 5" xmlns="http://www.w3.org/2000/svg"
                    preserveAspectRatio="none">
                    <path d="M0.652466 4.00002C15.8925 2.66668 48.0351 0.400018 54.6853 2.00002" strokeWidth="2"></path>
                </svg></h2>
                <div>
                    <Form method="POST" action="/blog/new">
                        <div className="mt-2">
                            <label className="block text-sm font-medium text-gray-700">Title</label>
                            <input type="text" name="title" id="title" className="mt-1 p-2 block w-full border border-black shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
                        </div>
                        <div className="mt-2">
                            <label className="block text-sm font-medium text-gray-700">Author</label>
                            <input type="text" name="author" id="author" className="mt-1 p-2 block w-full border border-black shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
                        </div>
                        <div className="mt-2">
                            <label className="block text-sm font-medium text-gray-700">Content</label>
                            <textarea name="content" id="content" rows={3} className="mt-1 p-2 block w-full border border-black shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"></textarea>
                        </div>
                        <div className="mt-2">
                            <button type="submit" className="bg-black text-white hover:bg-gray-600 p-2 rounded">Create Post</button>
                        </div>
                    </Form>
                </div>
            </section>
        </div>
        </div>
    )
}