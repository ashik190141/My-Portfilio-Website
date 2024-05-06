/* eslint-disable react/no-unescaped-entities */
import React from "../../public/skills/react.jpg";
import Next from "../../public/skills/Next.jpg";
import Mongoose from "../../public/skills/mongoose.jfif";
import JavaScript from "../../public/skills/javascript.jpg";
import TypeScript from "../../public/skills/TypeScript.png";

const Blog = () => {
    return (
      <div>
        <div className="max-w-6xl mx-auto flex flex-col gap-5 my-20">
          {/* React */}
          <div className="grid grid-cols-3 bg-base-100 shadow-xl items-center rounded-r-md">
            <figure className=" w-full">
              <img src={React} alt="Movie" />
            </figure>
            <div className="col-span-2 mx-5 place-content-center">
              <h2 className="card-title py-1">
                React: Building UIs Like Lego Bricks
              </h2>
              <p className="text-justify">
                Want to create dynamic web apps? React is your friend! This
                JavaScript library lets you build user interfaces with reusable
                components, like Lego bricks. Changes you make to a single
                component update the entire app, keeping your code clean and
                efficient. React's popularity means a huge community and tons of
                resources to help you get started. So, if you are looking for a
                powerful and fun way to build modern web experiences, dive into
                React!
              </p>
            </div>
          </div>

          {/* Next */}
          <div className="grid grid-cols-3 bg-base-100 shadow-xl items-center rounded-r-md">
            <figure className="w-full">
              <img src={Next} alt="Movie" />
            </figure>
            <div className="col-span-2 mx-5 place-content-center text-justify">
              <h2 className="py-1 card-title">
                Next.js: React on Steroids for Speedy Sites
              </h2>
              <p className="text-justify">
                Next.js takes React to the next level! This React framework
                streamlines development with built-in features like server-side
                rendering (SSR) for blazing-fast load times and SEO benefits.
                Static Site Generation (SSG) pre-renders pages at build time,
                ensuring top speed for content that rarely changes. Plus,
                Next.js handles routing and data fetching, letting you focus on
                building amazing user experiences. Build lightning-fast,
                SEO-friendly web apps with ease that's the power of Next.js!
              </p>
            </div>
          </div>

          {/* Mongoose */}
          <div className="grid grid-cols-3 bg-base-100 shadow-xl items-center rounded-r-md">
            <figure>
              <img src={Mongoose} alt="Movie" />
            </figure>
            <div className="col-span-2 mx-5 place-content-center text-justify">
              <h2 className="card-title py-1">
                Mongoose: Taming Your MongoDB with JavaScript
              </h2>
              <p>
                MongoDB stores data flexibly, but wrangling it can feel wild.
                Mongoose steps in, acting as an Object Data Modeling (ODM) layer
                for MongoDB in JavaScript. Think of it as a zookeeper for your
                data! Mongoose lets you define structures for your data (like
                blueprints) and provides a familiar way to interact with it
                using JavaScript. Say goodbye to raw queries and hello to
                intuitive functions for adding, finding, and updating your data.
                Mongoose keeps your MongoDB interactions organized and saves you
                development time.
              </p>
            </div>
          </div>

          {/* JavaScript */}
          <div className="grid grid-cols-3 bg-base-100 shadow-xl items-center rounded-r-md">
            <figure>
              <img src={JavaScript} alt="Movie" />
            </figure>
            <div className="col-span-2 mx-5 place-content-center text-justify">
              <h2 className="card-title py-1">
                JavaScript: The Web's Powerhouse
              </h2>
              <p>
                JavaScript (JS) is not just for silly animations anymore! This
                versatile scripting language brings websites to life. It
                manipulates data, creates dynamic content, and interacts with
                users. Think of those smooth transitions, interactive forms, and
                in-page updates that is often JS at work. Easy to learn yet
                powerful, JS is essential for web developers. It works
                seamlessly with HTML and CSS, the building blocks of websites.
                Master JS and unlock the potential to create engaging and
                dynamic web experiences!.
              </p>
            </div>
          </div>

          {/* TypeScript */}
          <div className="grid grid-cols-3 bg-base-100 shadow-xl items-center rounded-r-md">
            <figure>
              <img src={TypeScript} alt="Movie" />
            </figure>
            <div className="col-span-2 mx-5 place-content-center text-justify">
              <h2 className="card-title py-1">
                TypeScript: Supercharging JavaScript with Type Safety
              </h2>
              <p>
                Imagine writing JavaScript with superpowers! TypeScript takes
                your familiar JS code and adds optional static typing. This
                means you define what kind of data your variables hold (numbers,
                strings, etc.) Like a superhero's costume, types ensure your
                code is robust and catches errors early. This leads to cleaner,
                more maintainable code. Plus, TypeScript integrates seamlessly
                with JavaScript, so your existing skills apply. For larger
                projects or those seeking a more predictable coding experience,
                TypeScript offers a powerful upgrade to JavaScript.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Blog;