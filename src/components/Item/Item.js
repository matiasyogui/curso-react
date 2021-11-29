import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";

export const Item = ({ item }) => {
  return (
    <div>
      <Card sx={{ maxWidth: 345 }}>
        <CardMedia
          component="img"
          height="200"
          image={item.image}
          alt={item.nombre}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {item.nombre}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            ${item.precio}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {item.descripcion}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {item.category}
          </Typography>
        </CardContent>
        <CardActions>
          <Link to={`/detail/${item.id}`}>
            <Button>Ver màs!</Button>
          </Link>
        </CardActions>
      </Card>
    </div>
  );
};
