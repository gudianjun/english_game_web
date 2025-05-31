import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function GameCard(props: { gameName: string, gameDescription: string, gameImage: string }) {
  return (
    <Card sx={{ width: 345 ,
       
    }}>
      <CardMedia
        sx={{ height: 140 }}
        image={props.gameImage}
        title={props.gameName}
      />
      <CardContent >
        <Typography gutterBottom variant="h5" component="div"
        sx={{
            fontSize: '20px',
            fontWeight: 'bold',
            color: 'text.primary',
            textAlign: 'left',
        }}
        >
          {props.gameName}
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary',

textAlign: 'left',
         }}>
            {props.gameDescription}
        </Typography>
      </CardContent>
      <CardActions sx={{
        display: 'flex',
        justifyContent: 'flex-end',
      }}>
        <Button size="small">Play</Button>
      </CardActions>
    </Card>
  );
}