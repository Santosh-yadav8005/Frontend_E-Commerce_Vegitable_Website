import BlogCard from "./BlogCard"
const blogData = [
    {
        img: "/post-1.jpg",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum, amet.",
    },
    {
        img: "/post-2.jpg",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum, amet.",
    },
    {
        img: "/post-3.jpg",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum, amet.",
    },
    {
        img: "/post-4.jpg",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum, amet.",
    },
]

const Blogs = () => {
  return (
    <div className="py20">
        <div className="container">
            <h2 className="text-xl md:text-4xl pb-4 sm:pb-0">Our Blogs </h2>

            {/* Grid */}
            <div className="pt-10 grid sm:grid-cols-2 gap-8 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 pb-10">
            {blogData.map((blog, index) => (
                <BlogCard 
                key={index}
                img={blog.img}
                desc={blog.desc}
                />
            ))}
        </div>
        </div>
      
    </div>
  )
}

export default Blogs
