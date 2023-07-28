import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Avatar, Grid } from "@mui/material";

export default function MediaCard() {
  const title = "배고파_홍콩_EP.08 홍콩에서 찾은 백종원 20년 단골집을 찾았는데";
  const uploaderName = "백종원 PAIK JONG WON";
  const views = "조회수 494,590회";

  return (
    <Card sx={{ maxWidth: 300 }}>
      <CardMedia
        sx={{ height: 140 }}
        image="https://i.imgur.com/YS4TgYU.png"
        title="green iguana"
      />
      <CardContent>
        <Grid container spacing={4}>
          <Grid item xs={2}>
            <Avatar
              alt="Profile Picture"
              src="https://yt3.ggpht.com/J3OI66Bc7T3nheyKJKAkXR6tb-_bpCsoRMTFoslOBCXI3DpVY8eFY4LZWzww3BEgkRjMOEoI=s176-c-k-c0x00ffffff-no-rj-mo"
              sx={{ width: 35, height: 35 }} 
            />
          </Grid>
          <Grid item xs={10} container direction="column">
            <Grid item>
            <Typography 
                variant="subtitle2" 
                component="div"
                sx={{
                  display: '-webkit-box',
                  WebkitLineClamp: 2,
                  WebkitBoxOrient: 'vertical',
                  overflow: 'hidden',
                  textOverflow: 'ellipsis'
                }}
              >
                {title}
              </Typography>
            </Grid>
            <Grid item>
              <Typography variant="body2" color="text.secondary">
                {uploaderName}
              </Typography>
            </Grid>
            <Grid item>
              <Typography variant="body2" color="text.secondary">
                {views}
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
}
