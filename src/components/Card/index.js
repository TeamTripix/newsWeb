import * as React from "react";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
class index extends React.Component {
  render() {
    const {
      author,
      content,
      // description,
      publishedAt,
      // source,
      title,
      url,
      urlToImage,
    } = this.props.newsData;
    return (
      <Card sx={{ marginBottom: '1rem',width: 275, minHeight: "35rem", position: "relative" }}>
        <CardMedia
          component="img"
          height="194"
          image={urlToImage}
          alt="Paella dish"
        />
        <CardContent>
          <Typography>
            {title.length >= 81 ? `${title.slice(0, 81)}...` : title}
          </Typography>
          <Typography
            sx={{
              marginBottom: "20px",
              fontSize: "10px",
            }}
          >
            <p sx={{ fontSize: "10px" }}>
              Author: <b>{author === null ? "N/A" : author}</b>
            </p>
            <p>published at : {publishedAt === null ? "N/A" : publishedAt}</p>
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {content === "" ? 'N/A': content.length >= 200 ? `${content.slice(0, 200)}...` : content}
          </Typography>
          <Button
            target="_blank"
            sx={{
              marginTop: "10px",
              position: "absolute",
              bottom: "15px",
              left: "16px",
            }}
            href={url}
            variant="contained"
            size="small"
          >
            Read More
          </Button>
        </CardContent>
      </Card>
    );
  }
}

export default index;
