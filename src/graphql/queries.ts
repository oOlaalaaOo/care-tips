/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getCareTip = /* GraphQL */ `
  query GetCareTip($id: ID!) {
    getCareTip(id: $id) {
      id
      tip
      careTipCategoryID
      careTipCategory {
        id
        name
        description
        image
        careTips {
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const listCareTips = /* GraphQL */ `
  query ListCareTips(
    $filter: ModelCareTipFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listCareTips(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        tip
        careTipCategoryID
        careTipCategory {
          id
          name
          description
          image
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getCareTipCategory = /* GraphQL */ `
  query GetCareTipCategory($id: ID!) {
    getCareTipCategory(id: $id) {
      id
      name
      description
      image
      careTips {
        items {
          id
          tip
          careTipCategoryID
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const listCareTipCategorys = /* GraphQL */ `
  query ListCareTipCategorys(
    $filter: ModelCareTipCategoryFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listCareTipCategorys(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        name
        description
        image
        careTips {
          items {
            id
            tip
            careTipCategoryID
            createdAt
            updatedAt
          }
          nextToken
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
