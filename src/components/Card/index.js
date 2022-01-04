import * as React from "react";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Collapse from "@mui/material/Collapse";
import Typography from "@mui/material/Typography";
// import newsData from "../../data";

// // const ExpandMore = styled((props) => {
// //   const { expand, ...other } = props;
// //   return <IconButton {...other} />;
// // })(({ theme, expand }) => ({
// //   transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
// //   marginLeft: 'auto',
// //   transition: theme.transitions.create('transform', {
// //     duration: theme.transitions.duration.shortest,
// //   }),
// // }));

class index extends React.Component {
  // export class index extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {
      author,
      content,
      description,
      publishedAt,
      source,
      title,
      url,
      urlToImage,
    } = this.props.newsData;
    return (
      <div>
        <Card sx={{ width: 275 }}>
          <CardMedia
            component="img"
            height="194"
            image={urlToImage}
            alt="Paella dish"
          />
          <CardContent>
            <Typography
              sx={{
                marginBottom: "20px",
                // display: "blo",
                // justifyContent: "space-between",
                fontSize: "10px",
              }}
            >
              <p sx={{ fontSize: "10px" }}>
                Author: <b>{author}</b>
              </p>
              <p>published at : {publishedAt}</p>
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {content}
            </Typography>
          </CardContent>
        </Card>
      </div>
    );
  }
}

export default index;
