import BlogCard from "../components/BlogCard";
import './blog.css';
function Blog() {
    return (
        <>
            <h1 style={{textAlign: "center"}}>Blog Page</h1>
            <div className="blog-card">
                <BlogCard />
                <BlogCard />
                <BlogCard />
                <BlogCard />
                <BlogCard />
                <BlogCard />
            </div>
        </>
    )
}

export default Blog;