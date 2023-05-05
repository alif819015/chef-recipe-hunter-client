/* eslint-disable no-unused-vars */
import React from "react";
import useTitle from "../page/shared/useTitle";

const Blogs = () => {
  useTitle('blogs')
  return (
    <div className=" bg bg-orange-100 text-black">
      <div className="px-10 py-10">
        <h2 className="font-bold text-2xl">
          {" "}
          Differences Between Controlled and Uncontrolled Components.
        </h2>
        <p className="font-bold text-xl">Answer:</p>
        <p className="font-bold">Controlled Components:</p>
        <ol>
          <li>Data Flow: Data is managed by React component state.</li>
          <li>
            Value Initialization: Requires initial value to be set in state.
          </li>
          <li>
            Value Update: Value updates are handled by the component state.
          </li>
          <li>
            Validation: You can validate the input data before updating the
            state.
          </li>
          <li>Performance: Can have performance issues with large forms.</li>
          <li>
            Usage: Best for complex forms where you need more control over the
            data.
          </li>
          <br />

          <p className="font-bold">Uncontrolled Components:</p>
          <li>Data Flow: Data is managed by the DOM.</li>
          <li>
            Value Initialization: Initial value is set in the HTML markup.
          </li>
          <li>Value Update: Value updates are handled by the DOM.</li>
          <li>Validation: No built-in validation support.</li>
          <li>Performance: Better performance with large forms.</li>
        </ol>
      </div>
      <div className="px-10 py-10">
        <h2 className="font-bold text-2xl">
          {" "}
          How to validate React props using PropTypes
        </h2>
        <p className="font-bold text-xl">Answer:</p>
        <p>
          React PropTypes is a library used to validate the props passed to a
          component. It is an optional feature and needs to be installed
          separately using the prop-types package. Once installed, you can
          define the expected data type and structure for each prop using the
          PropTypes module. To use PropTypes, you simply import the PropTypes
          module and define the propTypes static property on your component. For
          example, if you have a component that receives a name prop of type
          string, In this example, the propTypes define that the name prop is
          required and should be of type string. If the component is used
          without passing a name prop or if the name prop is of a different
          type, a warning message will be shown in the console. You can define
          propTypes for any type of data, including arrays, objects, and even
          custom data types. By validating your props with PropTypes, you can
          catch errors and potential bugs early on in development, making your
          code more reliable and easier to maintain.
        </p>
      </div>
      <div className="px-10 py-10">
        <h2 className="font-bold text-2xl">
          {" "}
          Tell us the difference between nodejs and express js.
        </h2>
        <p className="font-bold text-xl">Answer:</p>
        <p>
          Node.js is a server-side runtime environment that is used to build
          server-side applications in JavaScript. It provides a platform for
          executing JavaScript code on the server-side and allows developers to
          use JavaScript for both client-side and server-side development.
          Node.js provides a number of built-in modules and APIs for building
          server-side applications, such as the HTTP module for building HTTP
          servers and the File System module for working with the file system.
          Express.js, on the other hand, is a web framework built on top of
          Node.js that simplifies the process of building web applications. It
          provides a number of features and APIs for building web applications,
          such as routing, middleware, and templating engines. Express.js is not
          a replacement for Node.js, but rather a tool that can be used to
          simplify the process of building web applications on top of Node.js.
          In summary, Node.js is a runtime environment for executing JavaScript
          code on the server-side, while Express.js is a web framework built on
          top of Node.js that simplifies the process of building web
          applications. While Node.js provides a platform for building
          server-side applications, Express.js provides a set of tools and
          features that simplify the process of building web applications on top
          of Node.js.
        </p>
      </div>
      <div className="px-10 py-10">
        <h2 className="font-bold text-2xl">
          {" "}
          What is a custom hook, and why will you create a custom hook?
        </h2>
        <p className="font-bold text-xl">Answer:</p>
        <p>
          <p>
            A custom hook is a reusable function in React that allows you to
            extract common logic from components and reuse it across multiple
            components. Essentially, a custom hook is a function that can manage
            state, handle side effects, or perform other operations, and can be
            used across multiple components in your application. There are
            several reasons why you might want to create a custom hook,
            including: Reusability: A custom hook allows you to encapsulate
            common logic that can be reused across multiple components in your
            application. This can help to reduce code duplication and make your
            code more maintainable. Abstraction: By creating a custom hook, you
            can abstract away complex logic and provide a simple interface that
            can be used by other components. This can make your code more
            modular and easier to work with. Separation of concerns: By
            separating logic into a custom hook, you can separate concerns
            between your presentation layer (i.e., components) and your business
            logic layer. This can make your code more organized and easier to
            maintain. Overall, custom hooks are a powerful feature of React that
            can help to improve code quality, reusability, and maintainability.
            By creating custom hooks, you can reduce code duplication and make
            your code more modular, making it easier to maintain and update over
            time.
          </p>
        </p>
      </div>
    </div>
  );
};

export default Blogs;
