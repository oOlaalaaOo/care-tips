/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateCareTipInput = {
  id?: string | null,
  tip: string,
  careTipCategoryID: string,
  createdAt?: string | null,
  updatedAt?: string | null,
};

export type ModelCareTipConditionInput = {
  tip?: ModelStringInput | null,
  careTipCategoryID?: ModelIDInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelCareTipConditionInput | null > | null,
  or?: Array< ModelCareTipConditionInput | null > | null,
  not?: ModelCareTipConditionInput | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type CareTip = {
  __typename: "CareTip",
  id: string,
  tip: string,
  careTipCategoryID: string,
  careTipCategory?: CareTipCategory | null,
  createdAt: string,
  updatedAt: string,
};

export type CareTipCategory = {
  __typename: "CareTipCategory",
  id: string,
  name: string,
  description?: string | null,
  image?: string | null,
  careTips?: ModelCareTipConnection | null,
  createdAt: string,
  updatedAt: string,
};

export type ModelCareTipConnection = {
  __typename: "ModelCareTipConnection",
  items?:  Array<CareTip | null > | null,
  nextToken?: string | null,
};

export type UpdateCareTipInput = {
  id: string,
  tip?: string | null,
  careTipCategoryID?: string | null,
  createdAt?: string | null,
  updatedAt?: string | null,
};

export type DeleteCareTipInput = {
  id: string,
};

export type CreateCareTipCategoryInput = {
  id?: string | null,
  name: string,
  description?: string | null,
  image?: string | null,
  createdAt?: string | null,
  updatedAt?: string | null,
};

export type ModelCareTipCategoryConditionInput = {
  name?: ModelStringInput | null,
  description?: ModelStringInput | null,
  image?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelCareTipCategoryConditionInput | null > | null,
  or?: Array< ModelCareTipCategoryConditionInput | null > | null,
  not?: ModelCareTipCategoryConditionInput | null,
};

export type UpdateCareTipCategoryInput = {
  id: string,
  name?: string | null,
  description?: string | null,
  image?: string | null,
  createdAt?: string | null,
  updatedAt?: string | null,
};

export type DeleteCareTipCategoryInput = {
  id: string,
};

export type ModelCareTipFilterInput = {
  id?: ModelIDInput | null,
  tip?: ModelStringInput | null,
  careTipCategoryID?: ModelIDInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelCareTipFilterInput | null > | null,
  or?: Array< ModelCareTipFilterInput | null > | null,
  not?: ModelCareTipFilterInput | null,
};

export type ModelCareTipCategoryFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  description?: ModelStringInput | null,
  image?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelCareTipCategoryFilterInput | null > | null,
  or?: Array< ModelCareTipCategoryFilterInput | null > | null,
  not?: ModelCareTipCategoryFilterInput | null,
};

export type ModelCareTipCategoryConnection = {
  __typename: "ModelCareTipCategoryConnection",
  items?:  Array<CareTipCategory | null > | null,
  nextToken?: string | null,
};

export type CreateCareTipMutationVariables = {
  input: CreateCareTipInput,
  condition?: ModelCareTipConditionInput | null,
};

export type CreateCareTipMutation = {
  createCareTip?:  {
    __typename: "CareTip",
    id: string,
    tip: string,
    careTipCategoryID: string,
    careTipCategory?:  {
      __typename: "CareTipCategory",
      id: string,
      name: string,
      description?: string | null,
      image?: string | null,
      careTips?:  {
        __typename: "ModelCareTipConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateCareTipMutationVariables = {
  input: UpdateCareTipInput,
  condition?: ModelCareTipConditionInput | null,
};

export type UpdateCareTipMutation = {
  updateCareTip?:  {
    __typename: "CareTip",
    id: string,
    tip: string,
    careTipCategoryID: string,
    careTipCategory?:  {
      __typename: "CareTipCategory",
      id: string,
      name: string,
      description?: string | null,
      image?: string | null,
      careTips?:  {
        __typename: "ModelCareTipConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteCareTipMutationVariables = {
  input: DeleteCareTipInput,
  condition?: ModelCareTipConditionInput | null,
};

export type DeleteCareTipMutation = {
  deleteCareTip?:  {
    __typename: "CareTip",
    id: string,
    tip: string,
    careTipCategoryID: string,
    careTipCategory?:  {
      __typename: "CareTipCategory",
      id: string,
      name: string,
      description?: string | null,
      image?: string | null,
      careTips?:  {
        __typename: "ModelCareTipConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateCareTipCategoryMutationVariables = {
  input: CreateCareTipCategoryInput,
  condition?: ModelCareTipCategoryConditionInput | null,
};

export type CreateCareTipCategoryMutation = {
  createCareTipCategory?:  {
    __typename: "CareTipCategory",
    id: string,
    name: string,
    description?: string | null,
    image?: string | null,
    careTips?:  {
      __typename: "ModelCareTipConnection",
      items?:  Array< {
        __typename: "CareTip",
        id: string,
        tip: string,
        careTipCategoryID: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateCareTipCategoryMutationVariables = {
  input: UpdateCareTipCategoryInput,
  condition?: ModelCareTipCategoryConditionInput | null,
};

export type UpdateCareTipCategoryMutation = {
  updateCareTipCategory?:  {
    __typename: "CareTipCategory",
    id: string,
    name: string,
    description?: string | null,
    image?: string | null,
    careTips?:  {
      __typename: "ModelCareTipConnection",
      items?:  Array< {
        __typename: "CareTip",
        id: string,
        tip: string,
        careTipCategoryID: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteCareTipCategoryMutationVariables = {
  input: DeleteCareTipCategoryInput,
  condition?: ModelCareTipCategoryConditionInput | null,
};

export type DeleteCareTipCategoryMutation = {
  deleteCareTipCategory?:  {
    __typename: "CareTipCategory",
    id: string,
    name: string,
    description?: string | null,
    image?: string | null,
    careTips?:  {
      __typename: "ModelCareTipConnection",
      items?:  Array< {
        __typename: "CareTip",
        id: string,
        tip: string,
        careTipCategoryID: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type GetCareTipQueryVariables = {
  id: string,
};

export type GetCareTipQuery = {
  getCareTip?:  {
    __typename: "CareTip",
    id: string,
    tip: string,
    careTipCategoryID: string,
    careTipCategory?:  {
      __typename: "CareTipCategory",
      id: string,
      name: string,
      description?: string | null,
      image?: string | null,
      careTips?:  {
        __typename: "ModelCareTipConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListCareTipsQueryVariables = {
  filter?: ModelCareTipFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListCareTipsQuery = {
  listCareTips?:  {
    __typename: "ModelCareTipConnection",
    items?:  Array< {
      __typename: "CareTip",
      id: string,
      tip: string,
      careTipCategoryID: string,
      careTipCategory?:  {
        __typename: "CareTipCategory",
        id: string,
        name: string,
        description?: string | null,
        image?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type GetCareTipCategoryQueryVariables = {
  id: string,
};

export type GetCareTipCategoryQuery = {
  getCareTipCategory?:  {
    __typename: "CareTipCategory",
    id: string,
    name: string,
    description?: string | null,
    image?: string | null,
    careTips?:  {
      __typename: "ModelCareTipConnection",
      items?:  Array< {
        __typename: "CareTip",
        id: string,
        tip: string,
        careTipCategoryID: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListCareTipCategorysQueryVariables = {
  filter?: ModelCareTipCategoryFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListCareTipCategorysQuery = {
  listCareTipCategorys?:  {
    __typename: "ModelCareTipCategoryConnection",
    items?:  Array< {
      __typename: "CareTipCategory",
      id: string,
      name: string,
      description?: string | null,
      image?: string | null,
      careTips?:  {
        __typename: "ModelCareTipConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type OnCreateCareTipSubscription = {
  onCreateCareTip?:  {
    __typename: "CareTip",
    id: string,
    tip: string,
    careTipCategoryID: string,
    careTipCategory?:  {
      __typename: "CareTipCategory",
      id: string,
      name: string,
      description?: string | null,
      image?: string | null,
      careTips?:  {
        __typename: "ModelCareTipConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateCareTipSubscription = {
  onUpdateCareTip?:  {
    __typename: "CareTip",
    id: string,
    tip: string,
    careTipCategoryID: string,
    careTipCategory?:  {
      __typename: "CareTipCategory",
      id: string,
      name: string,
      description?: string | null,
      image?: string | null,
      careTips?:  {
        __typename: "ModelCareTipConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteCareTipSubscription = {
  onDeleteCareTip?:  {
    __typename: "CareTip",
    id: string,
    tip: string,
    careTipCategoryID: string,
    careTipCategory?:  {
      __typename: "CareTipCategory",
      id: string,
      name: string,
      description?: string | null,
      image?: string | null,
      careTips?:  {
        __typename: "ModelCareTipConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateCareTipCategorySubscription = {
  onCreateCareTipCategory?:  {
    __typename: "CareTipCategory",
    id: string,
    name: string,
    description?: string | null,
    image?: string | null,
    careTips?:  {
      __typename: "ModelCareTipConnection",
      items?:  Array< {
        __typename: "CareTip",
        id: string,
        tip: string,
        careTipCategoryID: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateCareTipCategorySubscription = {
  onUpdateCareTipCategory?:  {
    __typename: "CareTipCategory",
    id: string,
    name: string,
    description?: string | null,
    image?: string | null,
    careTips?:  {
      __typename: "ModelCareTipConnection",
      items?:  Array< {
        __typename: "CareTip",
        id: string,
        tip: string,
        careTipCategoryID: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteCareTipCategorySubscription = {
  onDeleteCareTipCategory?:  {
    __typename: "CareTipCategory",
    id: string,
    name: string,
    description?: string | null,
    image?: string | null,
    careTips?:  {
      __typename: "ModelCareTipConnection",
      items?:  Array< {
        __typename: "CareTip",
        id: string,
        tip: string,
        careTipCategoryID: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};
