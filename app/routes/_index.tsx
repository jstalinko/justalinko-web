import type { LoaderFunction, MetaFunction } from "@remix-run/node";
import { Link, useLoaderData } from "@remix-run/react";
import { db } from "utils/db.server";
import { randomTextColor } from "utils/common";
export const meta: MetaFunction = () => {
  return [
    { title: "JUSTALINKO - All You can {H}ate" },
    { name: "description", content: "Justalinko personal page" },
  ];
};

export const loader: LoaderFunction = async () => {
  const data = {
    posts: await db.post.findMany({
      select: { id: true, title: true, createdAt: true, content: true },
      orderBy: { createdAt: "desc" },
      take: 10,
    }),
  }

  return data;
}

export default function Index() {
  const { posts } = useLoaderData<typeof loader>();
  return (
    <div className="h-screen ">
      <div className="container w-1/8 mx-auto mt-5  ">
        <div className="p-5 border-b-2 border-b-black">
          <h1 className="text-center underline text-4xl font-bold bg-gradient-to-r from-orange-700 via-blue-600 to-green-400 text-transparent bg-clip-text bg-300% animate-gradient ">🕶️ JUSTALINKO</h1>
          <p className="text-center mt-5">
            Full-Stack Developer, Tech Enthusiast, and Crazy Thinker.
          </p>

        </div>
        <hr />

        <nav className="p-5">

          <ul className="flex justify-center space-x-5">
            <li className="bg-black text-white p-2 hover:underline">
              <Link to="/">Home</Link>
            </li>
            <li className="bg-black text-white p-2 hover:underline">
              <Link to="https://github.com/jstalinko" target="_blank">Repository</Link>
            </li>
            <li className="bg-black text-white p-2 hover:underline">
              <Link to="/blog">Blog</Link>
            </li>
          </ul>
        </nav>


        <div className="mt-5 flex flex-row">

          <div className="basis-3/4 ">
            <section className="p-5">
              <h2 className="text-black text-2xl mx-1 font-extrabold  relative inline-block stroke-current">💁 Who's ?  <svg className="absolute-bottom-0.5 w-full max-h-1.5" viewBox="0 0 55 5" xmlns="http://www.w3.org/2000/svg"
                preserveAspectRatio="none">
                <path d="M0.652466 4.00002C15.8925 2.66668 48.0351 0.400018 54.6853 2.00002" strokeWidth="2"></path>
              </svg></h2>
              <p className="mt-2 bg-gradient-to-r from-red-500 via-blue-900 to-yellow-600 text-transparent bg-clip-text bg-300% animate-gradient">
                Alin Koko Mansuby is a Web Developer based on Jepara, Central Java , Indonesia with a passion for building digital services/stuff he wants. Experienced in writing PHP programming language since high school, has handled various projects using either framework or native PHP.

                He has a knack for all things launching products, from planning and designing all the way to solving real-life problems with code. He like to write code and thinking about new idea and create the innovation for future, Actually he is quite lazy ,so he often makes automation tools for him project.
              </p>
            </section>

            <section className="p-5">
              <h2 className="text-black text-2xl mx-1 font-extrabold  relative inline-block stroke-current">🤸 What I can do?
                <svg className="absolute-bottom-0.5 w-full max-h-1.5" viewBox="0 0 55 5" xmlns="http://www.w3.org/2000/svg"
                  preserveAspectRatio="none">
                  <path d="M0.652466 4.00002C15.8925 2.66668 48.0351 0.400018 54.6853 2.00002" strokeWidth="2"></path>
                </svg>
              </h2>
              <p className="mt-2 bg-gradient-to-r from-orange-500 via-green-500 to-blue-500 text-transparent bg-clip-text bg-300% animate-gradient">
                Even though I don't have a college degree, I've done a lot of things that maybe people out there don't do.
                Names without titles are often doubted by others. So, therefore I never to work with company and choose my way to work as freelancer and make my own project.

                Besides I can write code, I also can analyze weaknesses, analyze vulnerabilities, and sometimes find crazy solutions from problems found, like make automation tools to speed up work,and even made my own framework.

                When I working as freelancer , I work by my self so from there i learning new things and my talent keeps growing with time.
                I did it indirectly, Writing Code, Testing It and deploy it by my self.
              </p>
            </section>

            <section className="p-5">

              <h2 className="text-black text-2xl mx-1 font-extrabold  relative inline-block stroke-current">
                📄 Latest Posts
                <svg className="absolute-bottom-0.5 w-full max-h-1.5" viewBox="0 0 55 5" xmlns="http://www.w3.org/2000/svg"
                  preserveAspectRatio="none">
                  <path d="M0.652466 4.00002C15.8925 2.66668 48.0351 0.400018 54.6853 2.00002" strokeWidth="2"></path>
                </svg>
              </h2>
              <ul className="mt-2">
                {posts.map((post: any) => (
                  <li className={'flex justify-between p-2 border-b-2 border-b-black hover:text-amber-800 hover:border-b-amber-600 '} key={post.id}>
                    <Link to={'/blog/' + post.id}>📖 {post.title}</Link>
                    <span>[{new Date(post.createdAt).toLocaleDateString()}]</span>
                  </li>
                ))}

              </ul>
              <Link to="/blog" className="mt-2 block text-center text-black font-bold hover:text-amber-800">📚 More Posts</Link>

            </section>


          </div>
          <div className="basis-1/4 ">
            <div className="w-100 rounded-lg p-5 border-black border-2 hover:shadow-lg mb-4">
              <h1 className="text-black text-2xl mx-1 font-extrabold  relative inline-block stroke-current">📍 FIND ME
                <svg className="absolute-bottom-0.5 w-full max-h-1.5" viewBox="0 0 55 5" xmlns="http://www.w3.org/2000/svg"
                  preserveAspectRatio="none">
                  <path d="M0.652466 4.00002C15.8925 2.66668 48.0351 0.400018 54.6853 2.00002" strokeWidth="2"></path>
                </svg>
              </h1>
              <ul className="mt-2">
                <li className="flex justify-between p-1">
                  <Link to="https://instagram.com/alinkomnsby">
                    <i className="mdi mdi-instagram"></i>
                    <span> @alinkomnsby</span>
                  </Link>
                </li>
                <li className="flex justify-between p-1">
                  <Link to="mailto:hrd@justalinko.com">
                    <i className="mdi mdi-email"></i>
                    <span>hrd@justalinko.com</span>
                  </Link>
                </li>
                <li className="flex justify-between p-1">
                  <Link to="https://github.com/jstalinko" target="_blank" >
                    <i className="mdi mdi-github"></i>
                    <span>@justalinko / @jstalinko</span>
                  </Link>
                </li>
                <li className="flex justify-between p-1">

                  <Link to="https://justalinko.com/blog" target="_blank" >
                    <i className="mdi mdi-search-web"></i>
                    <span>justalinko.com</span>
                  </Link>
                </li>


              </ul>

            </div>

            <div className="w-100 rounded-lg p-5 border-black border-2 hover:shadow-lg mb-4">
              <h1 className="text-black text-2xl mx-1 font-extrabold  relative inline-block stroke-current">🔨 TECH-STACK
                <svg className="absolute-bottom-0.5 w-full max-h-1.5" viewBox="0 0 55 5" xmlns="http://www.w3.org/2000/svg"
                  preserveAspectRatio="none">
                  <path d="M0.652466 4.00002C15.8925 2.66668 48.0351 0.400018 54.6853 2.00002" strokeWidth="2"></path>
                </svg>
              </h1>
              <ul className="mt-2">
                <li className="p-1">
                  <i className="mdi mdi-language-php"></i>
                  <span> PHP Languange</span>

                </li>
                <li className="p-1">

                  <i className="mdi mdi-laravel"></i>
                  <span> Laravel Framework</span>

                </li>
                <li className="p-1">

                  <i className="mdi mdi-code-tags"></i>
                  <span> CodeIgniter Framework</span>

                </li>
                <li className="p-1">

                  <i className="mdi mdi-nodejs"></i>
                  <span> NodeJS</span>

                </li>
                <li className="p-1">

                  <i className="mdi mdi-nuxt"></i>
                  <span> NuxtJS </span>

                </li>
                <li className="p-1">

                  <i className="mdi mdi-vuejs"></i>
                  <span> Vue.js </span>

                </li>
                <li className="p-1">

                  <i className="mdi mdi-bash"></i>
                  <span> Bash Shell Script</span>

                </li>
                <li className=" p-1">

                  <i className="mdi mdi-react"></i>
                  <span> Remix React</span>

                </li>


              </ul>

            </div>

            <div className="w-100 rounded-lg p-5 border-black border-2 hover:shadow-lg">
              <h1 className="text-black text-2xl mx-1 font-extrabold  relative inline-block stroke-current">👋 GET IN TOUCH
                <svg className="absolute-bottom-0.5 w-full max-h-1.5" viewBox="0 0 55 5" xmlns="http://www.w3.org/2000/svg"
                  preserveAspectRatio="none">
                  <path d="M0.652466 4.00002C15.8925 2.66668 48.0351 0.400018 54.6853 2.00002" strokeWidth="2"></path>
                </svg>
              </h1>
               <form action="https://formspree.io/f/xoqyqgqk" method="POST">
              <div className="mt-2">
                <label htmlFor="name">Name</label>
                <input type="text" name="name" id="name" className="w-full p-2 border-2 border-black shadow" />
                </div>
                <div className="mt-2">
                <label htmlFor="email">Email</label>
                <input type="email" name="email" id="email" className="w-full p-2 border-2 border-black shadow" />
                </div>
                <div className="mt-2">
                <label htmlFor="message">Message</label>
                <textarea name="message" id="message" className="w-full p-2 border-2 border-black shadow"></textarea>
                </div>
                <div className="mt-2">
                <button type="submit" className="w-full bg-black text-white p-2 hover:bg-gray-800">Send</button>
                </div>
                </form>
              </div>
          </div>
        </div>

        <footer className="mt-10 mb-5 p-5 border-t-2 border-t-black bg-gradient-to-r from-red-500  via-red-300 to-purple-400 ">
          <p className="text-center text-white">
            &copy; 2021 JUSTALINKO. All rights reserved.
          </p>


        </footer>


      </div>
    </div>
  );
}
