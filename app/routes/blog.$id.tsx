import { MetaFunction, useParams,useLoaderData, Link,useLocation } from "@remix-run/react";
import { LoaderFunction, LoaderFunctionArgs } from "@remix-run/node";
import { db } from "utils/db.server";

export const loader: LoaderFunction = async ({params}: LoaderFunctionArgs) => {
    
 
    const data = {
        post: await db.post.findUnique({
            where: {id: Number(params.id)},
        })
    }
    return data; 
};



export const meta: MetaFunction = () => {

    return [
      { title: `TITLE POST - JUSTALINKO`},
      { name: "description", content: "Justalinko personal page" },
    ];
  };

export default function blogDetail() {

    const {post} = useLoaderData<typeof loader>();
    return (

        <Content title={post.title}>
       <div className="mt-5 ">
            <div className="flex justify-between">
            <span className="p-2">
                Written by : 🙎 {post.author}
            </span>
            <span className="p-2">
               Published Date : 📅 {post.createdAt}
            </span>
            </div>

            <p className="mt-4">
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;#️⃣ {post.content}
            </p>
            <div className="mt-5">
                
                <div className="flex justify-center gap-1">
                    <span className="p-2">Share to :</span>
                    <Link className="bg-blue-700 hover:bg-blue-500 text-white font-bold py-2 px-4 rounded" to={`https://facebook.com/sharer/sharer.php?u=`}>
                        <i className="mdi mdi-facebook"></i>
                    </Link>
                    <Link className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" to={`https://twitter.com/intent/tweet?url=`}>
                        <i className="mdi mdi-twitter"></i>
                    </Link>
                    <Link className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded" to={`https://api.whatsapp.com/send?text=`}>
                        <i className="mdi mdi-whatsapp"></i>
                        </Link>
                    
                    </div>
                    </div>
        </div>
        </Content>
    );
}

export function Content({ children , title }: { children: React.ReactNode,title: string }) {
    return (
        <div className="basis-3/4 ">
            <section className="p-4 m-3 border-t-2 border-l-2 border-black rounded-lg h-screen">
                <h2 className="text-black text-3xl mx-1 font-extrabold  relative inline-block stroke-current">✅ {title}<svg className="absolute-bottom-0.5 w-full max-h-1.5" viewBox="0 0 55 5" xmlns="http://www.w3.org/2000/svg"
                    preserveAspectRatio="none">
                    <path d="M0.652466 4.00002C15.8925 2.66668 48.0351 0.400018 54.6853 2.00002" strokeWidth="2"></path>
                </svg></h2>
                <div>
                    {children}
                </div>
            </section>
        </div>
    );
};
