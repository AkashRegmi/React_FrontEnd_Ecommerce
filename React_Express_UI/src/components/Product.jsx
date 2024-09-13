import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function Product() {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="140"
        image="https://i.ebayimg.com/images/g/JesAAOSwtqxjNFaR/s-l1600.webp"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Nike Air Force 1
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
        Nike Air Force 1 shoes are iconic sneakers known for their classic design, durability, and comfort. Originally released in 1982 as basketball shoes, they have since become a streetwear staple. 
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Price $200</Button>
        <Button size="small">Buy</Button>
      </CardActions>
    </Card>
  );
}