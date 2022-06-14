import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useNavigate } from "react-router-dom";

export default function PokemonCard({ pokemons }) {
  console.log(pokemons)
  const navigate = useNavigate();
  const handleRedirect = (id) => {
    navigate("/pokemon/"+id);
  };
  return (
    
    <div className="cards">
      {
        pokemons.map(item => (
          <div key={item.id}>
            <Card sx={{ margin: "1rem" }}>
              <CardMedia
                component="img"
                height="130"
                image={item.imageUrl}
                alt="pikachu"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {item.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                 
                </Typography>
                <CardActions sx={{ float: "right" }}>
                  <Button onClick={()=>handleRedirect(item.id)}>Detail</Button>
                </CardActions>
              </CardContent>
            </Card>
          </div>
        ))
      }

    </div>
   )

}
