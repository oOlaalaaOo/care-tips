/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createCareTip = /* GraphQL */ `
  mutation CreateCareTip(
    $input: CreateCareTipInput!
    $condition: ModelCareTipConditionInput
  ) {
    createCareTip(input: $input, condition: $condition) {
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
export const updateCareTip = /* GraphQL */ `
  mutation UpdateCareTip(
    $input: UpdateCareTipInput!
    $condition: ModelCareTipConditionInput
  ) {
    updateCareTip(input: $input, condition: $condition) {
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
export const deleteCareTip = /* GraphQL */ `
  mutation DeleteCareTip(
    $input: DeleteCareTipInput!
    $condition: ModelCareTipConditionInput
  ) {
    deleteCareTip(input: $input, condition: $condition) {
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
export const createCareTipCategory = /* GraphQL */ `
  mutation CreateCareTipCategory(
    $input: CreateCareTipCategoryInput!
    $condition: ModelCareTipCategoryConditionInput
  ) {
    createCareTipCategory(input: $input, condition: $condition) {
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
export const updateCareTipCategory = /* GraphQL */ `
  mutation UpdateCareTipCategory(
    $input: UpdateCareTipCategoryInput!
    $condition: ModelCareTipCategoryConditionInput
  ) {
    updateCareTipCategory(input: $input, condition: $condition) {
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
export const deleteCareTipCategory = /* GraphQL */ `
  mutation DeleteCareTipCategory(
    $input: DeleteCareTipCategoryInput!
    $condition: ModelCareTipCategoryConditionInput
  ) {
    deleteCareTipCategory(input: $input, condition: $condition) {
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
