import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

type IBlogCard = {
  title: string;
  description: string;
  timestamp: string;
  image: string;
};

const BlogCard = ({ title, description, timestamp, image }: IBlogCard) => {
  return (
    <Card sx={{ marginBottom: 2 }}>
      <CardMedia component={"img"} height={"200"} image={image} alt="" />

      <CardContent>
        <Typography variant="subtitle2" color="text.secondary" gutterBottom>
          {timestamp} via my fitness generator blog
        </Typography>

        <Typography variant="h6" component="div">
          {title}
        </Typography>

        <Typography variant="subtitle2" color="text.secondary" gutterBottom>
          {description}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default BlogCard;
