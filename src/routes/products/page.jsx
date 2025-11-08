import { useLocation } from "react-router-dom";

export default function ProductsPage({ isAdding }) {
  const location = useLocation();

  const adding = location.pathname.includes("/products/new") || isAdding;

  return (
    <div className="p-6">
      <h1 className="text-2xl font-semibold mb-6">
        {adding ? "Add New Product" : "All Products"}
      </h1>
      {adding ? (
        <form className="space-y-4 max-w-md">
          <input
            type="text"
            placeholder="Product Name"
            className="w-full p-2 border rounded-lg"
          />
          <textarea
            placeholder="Description"
            className="w-full p-2 border rounded-lg"
          />
          <button className="bg-blue-600 text-white px-4 py-2 rounded-lg">
            Save Product
          </button>
        </form>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {[1, 2, 3].map((p) => (
            <div
              key={p}
              className="border rounded-xl p-4 shadow-sm hover:shadow-md transition"
            >
              <h2 className="font-semibold">Product {p}</h2>
              <p className="text-gray-500">Short description here</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
