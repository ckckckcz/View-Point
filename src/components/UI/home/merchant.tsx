import product1 from "../../../assets/img/product/lightweight.png";

// Definisikan tipe untuk produk
interface Product {
  id: number;
  name: string;
  image: string;
  price: string;
  rating: number;
}

export default function Merchant() {
  // Data produk
  const products: Product[] = [
    {
      id: 1,
      name: "Other Brands Lightweight Girth Set, Grey",
      image: product1,
      price: "$99.60",
      rating: 5.0
    },
    {
      id: 2,
      name: "Merlano Large Light Horse Racing Saddle, Made-to-Order",
      image: product1,
      price: "$75.30",
      rating: 4.5
    },
    {
      id: 3,
      name: "Other Brands Lightweight Girth Set, Blue",
      image: product1,
      price: "$40.00",
      rating: 4.7
    },
    {
      id: 4,
      name: "Other Brands Lightweight Girth Set, Grey",
      image: product1,
      price: "$99.60",
      rating: 5.0
    },
    {
      id: 5,
      name: "Merlano Large Light Horse Racing Saddle, Made-to-Order",
      image: product1,
      price: "$75.30",
      rating: 4.5
    },
    {
      id: 6,
      name: "Other Brands Lightweight Girth Set, Blue",
      image: product1,
      price: "$40.00",
      rating: 4.7
    },
  ];

  return (
    <section className="bg-white">
        <div className="py-8 px-4 mx-auto max-w-screen-xl lg:text-left lg:py-16">
            <h1 className="mb-4 text-4xl lg:text-center text-left font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl">
                Our Gear
            </h1>
            <div className="grid grid-cols-1 lg:grid lg:grid-cols-3 md:grid md:grid-cols-2 lg:gap-10 md:gap-5 lg:mt-10 mt-0">
            {products.map((product) => (
                <div key={product.id} className="w-full max-w-sm bg-white border border-gray-200 rounded-xl shadow mb-5">
                <a href="#" className="flex justify-center">
                    <img className="p-8 rounded-t-xl" src={product.image} alt="product image" />
                </a>
                <div className="px-5 pb-5">
                    <a href="#">
                    <h5 className="text-xl font-semibold tracking-tight text-gray-900">{product.name}</h5>
                    </a>
                    <div className="flex items-center mt-2.5 mb-5">
                    <div className="flex items-center space-x-1 rtl:space-x-reverse">
                        {[...Array(5)].map((_, index) => (
                        <svg
                            key={index}
                            className={`w-4 h-4 ${index < product.rating ? "text-yellow-300" : "text-gray-200"}`}
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="currentColor"
                            viewBox="0 0 22 20"
                        >
                            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                        </svg>
                        ))}
                        <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded ms-3">
                        {product.rating}
                        </span>
                    </div>
                    </div>
                    <div className="flex items-center justify-between">
                    <span className="text-3xl font-bold text-gray-900">{product.price}</span>
                    <a
                        href="#"
                        className="text-white bg-[#00165b] hover:bg-[#000151] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-xl text-sm px-5 py-2.5 text-center"
                    >
                        Add to cart
                    </a>
                    </div>
                </div>
                </div>
            ))}
            </div>
        </div>
    </section>
  );
}
