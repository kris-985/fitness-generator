import BlogCard from "./BlogCard";
import Box from "@mui/material/Box";

const HomePage = () => {
  return (
    <Box sx={{ padding: 2 }}>
      <BlogCard
        title="My first news"
        description="My first description"
        timestamp="24.09.2024"
        image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmCy16nhIbV3pI1qLYHMJKwbH2458oiC9EmA&s"
      />
    </Box>
  );
};

export default HomePage;
