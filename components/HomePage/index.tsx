import { blogPosts } from "@/constants/blogPosts";
import BlogCard from "./BlogCard";
import Box from "@mui/material/Box";

const HomePage = () => {
  return (
    <Box sx={{ padding: 2 }}>
      {blogPosts.map((post, index) => (
        <BlogCard
          key={index}
          title={post.title}
          description={post.description}
          timestamp={post.timestamp}
          image={post.image}
        />
      ))}
    </Box>
  );
};

export default HomePage;
