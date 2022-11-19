import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Link from 'next/link';
import { Store } from '../../utils/store';

export default function ProductCard({product}) {

  const { state, dispatch } = React.useContext(Store)

  const addToCartHandler = () => {
    const existItem = state.cart.cartItems.find((item) => { return item.slug === product.slug })
    const quantity = existItem ? existItem.quantity + 1 : 1;

    if (product.countInStock < quantity) {
      alert('Ooops, this product is out of stock')
    }

    dispatch({
      type: 'CART_ADD_ITEM',
      payload: { ...product, quantity },
    })
  }
  return (
    <Card>
      <Link href={`/product/${product.slug}`}>
          <CardMedia
            component="img"
            alt="green iguana"
            height="140"
            image={product.image}
          />
      </Link>
      <CardContent>
        <Link href={`/product/${product.slug}`}>
            <Typography gutterBottom variant="h5" component="div">
                {product.name}
            </Typography>
        </Link>
        <Typography variant="body2" color="text.secondary">
          {product.description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" onClick={addToCartHandler}>Add to card</Button>
      </CardActions>
    </Card>
  );
}
