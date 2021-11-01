/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateCareTip = /* GraphQL */ `
  subscription OnCreateCareTip {
    onCreateCareTip {
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
export const onUpdateCareTip = /* GraphQL */ `
  subscription OnUpdateCareTip {
    onUpdateCareTip {
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
export const onDeleteCareTip = /* GraphQL */ `
  subscription OnDeleteCareTip {
    onDeleteCareTip {
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
export const onCreateCareTipCategory = /* GraphQL */ `
  subscription OnCreateCareTipCategory {
    onCreateCareTipCategory {
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
export const onUpdateCareTipCategory = /* GraphQL */ `
  subscription OnUpdateCareTipCategory {
    onUpdateCareTipCategory {
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
export const onDeleteCareTipCategory = /* GraphQL */ `
  subscription OnDeleteCareTipCategory {
    onDeleteCareTipCategory {
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
