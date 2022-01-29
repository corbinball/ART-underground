import { gql } from '@apollo/client';

export const QUERY_ARTWORKS = gql`
  query getArtworks($category: ID) {
    artworks(category: $category) {
      _id
      name
      description
      price
      quantity
      image
      category {
        _id
      }
    }
  }
`;

export const QUERY_CHECKOUT = gql`
  query getCheckout($artworks: [ID]!) {
    checkout(artworks: $artworks) {
      session
    }
  }
`;

export const QUERY_ALL_ARTWORKS = gql`
  {
    artworks {
      _id
      name
      description
      price
      quantity
      category {
        name
      }
    }
  }
`;

export const QUERY_CATEGORIES = gql`
  {
    categories {
      _id
      name
    }
  }
`;

export const QUERY_USER = gql`
  {
    user {
      firstName
      lastName
      orders {
        _id
        purchaseDate
        artworks {
          _id
          name
          description
          price
          quantity
          image
        }
      }
    }
  }
`;
