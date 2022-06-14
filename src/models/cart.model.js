
import { number } from '@hapi/joi';
import { Schema, model } from 'mongoose';

const bookSchema = new Schema(
{

    userId: {
      type: String
    },
    book: [{
      productId: {
        type: String
      },
      description: {
        type: String
      },
      bookName: {
        type: String
      },
      author: {
        type: String
      },
      quantity: {
        type: Number
      },
      price: {
        type: Number
      }
    }],
    cart_total: {
      type: Number
    },
    isPurchased: {
      type: Boolean,
      default: false
    }
  },
  {
    timestamps: true
}
);

export default model('Book', bookSchema);