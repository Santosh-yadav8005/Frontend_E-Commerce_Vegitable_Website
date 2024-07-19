import Product from "./Product";
const productData = [
    {
        img: "/product-1.jpg",
        name: "Organic",
        price: "Rs.100/-"
    },
    {
        img: "/product-2.jpg",
        name: "Organic",
        price: "Rs.100/-"
    },
    {
        img: "/product-3.jpg",
        name: "Organic",
        price: "Rs.100/-"
    },
    {
        img: "/product-4.jpg",
        name: "Organic",
        price: "Rs.100/-"
    },
    {
        img: "/product-5.jpg",
        name: "Organic",
        price: "Rs.100/-"
    },
    {
        img: "/product-6.jpg",
        name: "Organic",
        price: "Rs.100/-"
    },
    {
        img: "/product-7.jpg",
        name: "Organic",
        price: "Rs.100/-"
    },
    {
        img: "/product-8.jpg",
        name: "Organic",
        price: "Rs.100/-"
    },
    {
        img: "/product-9.jpg",
        name: "Organic",
        price: "Rs.100/-"
    },
    {
        img: "/product-10.jpg",
        name: "Organic",
        price: "Rs.100/-"
    },
];


const FeatureProduct = () => {
  return (
    <div className="pt-20">
        <div className="container">
            <div className="sm:flex justify-between items-center">
                <div className="text-xl md:text-4xl pb-4 sm:ph-0">
                    Feature Product
                </div>
            <div className="flex gap-8 items-center text-[14px] md:text-lg">
                <button className="border-b border-[#000]">
                    Best Sellers
                </button>
                <button>Most Popular</button>
            </div>
            </div>

            {/* Grid */}
        <div className="pt-10 grid sm:grid-cols-2 gap-8 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
            {productData.map((product) => (
                <Product 
                key={product.name}
                img={product.img}
                name={product.name}
                price={product.price}
                />
            ))}
        </div>

        </div>      
    </div>
  );
};

export default FeatureProduct;
