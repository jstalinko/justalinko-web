import { Outlet, Link,Form } from "@remix-run/react";
import type { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
    return [
        { title: "All Posts - JUSTALINKO" },
        { name: "description", content: "Justalinko personal page" },
    ];
};


export default function blog() {

    return (
        <div className="h-screen ">
            <div className="container w-1/8 mx-auto mt-5  ">
                <div className="p-5 border-b-2 border-b-black">
                    <h1 className="text-center underline text-4xl font-bold bg-gradient-to-r from-orange-700 via-blue-600 to-green-400 text-transparent bg-clip-text bg-300% animate-gradient ">JUSTALINKO</h1>
                    <p className="text-center mt-5">
                        Full-Stack Developer, Tech Enthusiast, and Crazy Thinker.
                    </p>

                </div>
                <hr />
                <nav className="mt-5">
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
                 
                    <Outlet/>
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
               <Form action="/?index" method="POST">
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
                </Form>
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

