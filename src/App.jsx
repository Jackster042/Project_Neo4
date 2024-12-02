import React from "react";
import Hero from "./components/Hero";

const App = () => {
  return (
    <main className="relative min-h-screen w-screen overflow-hidden">
      <Hero />

      <section className="z-0 min-h-screen bg-blue-500 w-screen flex flex-col items-center justify-center text-center">
        {/* <h1 className="text-white text-3xl mb-4">Welcome to the App!</h1>
        <img
          src="path/to/your/image.jpg"
          alt="Description"
          className="mb-4 rounded"
        />
        <p className="text-white mb-4">
          This is a simple app to demonstrate functionality.
        </p>
        <button
          className="mt-4 p-2 bg-white text-blue-500 rounded"
          onClick={() =>
            document
              .querySelector(".bg-blue-500")
              .classList.toggle("bg-red-500")
          }
        >
          Change Background Color
        </button>
        <button
          className="mt-2 p-2 bg-green-500 text-white rounded"
          onClick={() => alert("Another action triggered!")}
        >
          Trigger Another Action
        </button> */}
      </section>
    </main>
  );
};

export default App;
