import React from "react";

export default function Form() {
  return (
    <form action="/api/form" method="GET">
      <div>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          className="border border-gray-600"
          name="name"
        />
      </div>
      <div>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          className="border border-gray-600"
          name="email"
        />
      </div>
      <button type="submit" className="border border-gray-800">
        Enviar
      </button>
    </form>
  );
}
