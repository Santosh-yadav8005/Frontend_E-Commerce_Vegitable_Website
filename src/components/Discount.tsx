import Product from "./Product";
const productData = [
    {
        img: "/product-6.jpg",
        name: "Organic",
        price: "Rs.20/-",
    },
    {
        img: "/product-7.jpg",
        name: "Organic",
        price: "Rs.20/-",
    },
    {
        img: "/product-8.jpg",
        name: "Organic",
        price: "Rs.20/-",
    },
    {
        img: "/product-9.jpg",
        name: "Organic",
        price: "Rs.20/-",
    },

];

const Discount = () => {
    return (
        <div className="py-20">
            <div className="container">
                <h2 className="text-xl md:text-4xl pb-4 sm:pb-0">Discount</h2>

                {/* Grid*/}
                <div className="pt-10 grid sm:grid-cols-2 gap-8 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
                    <div className="ralative w-fit mx-auto">
                       
                        <div className="relative inline-block hover:shadow-2xl cursor-pointer text-2xl">
                            <img className="h-full object-cover" src="/discount-bg.jpg" alt="Img" />
                             <div className="absolute top-[20%] left-[0%] text-white p-10 text-xl text-align-center">
                                Rs.20/
                                <p>Under Products</p>
                                <p>Limited Time Only</p>
                                </div>
                        </div>


                    </div>

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

export default Discount;






