import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import { useStyles } from "./style";
import { Link } from "react-router-dom";

function ChamberCard({data, image, title}) {
  const classes = useStyles();
  console.log(data, image, title)
  return (
    <Card className={classes.chamber_card}>
      <CardActionArea>
        <Link to={`/sp/${data.map_id}`}>
          <CardMedia
            className={classes.chamber_img}
            image={image}
            title={title}
          />
        </Link>
      </CardActionArea>
      <div className={classes.level_title_helper}></div>
      <div className={classes.level_title}>{title}</div>
      <CardContent className={classes.first_place}>
        <Grid container direction="row" justifyContent="space-between">
          <Typography variant="body2">
            {data[0].user_name}
          </Typography>
          <Typography variant="body2">{data[0].score}</Typography>
        </Grid>
      </CardContent>
      {data.map((score, i) => {
        if (i > 0) {
          return (
            <CardContent
              key={score.score + score.user_name}
              className={classes.card_content}
            >
              <Grid container direction="row" justifyContent="space-between">
                <Typography variant="caption">
                  {score.user_name}
                </Typography>
                <Typography variant="caption">{score.score}</Typography>
              </Grid>
            </CardContent>
          );
        }
      })}
    </Card>
  );
}

export default ChamberCard;
