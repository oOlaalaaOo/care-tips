/* eslint-disable @next/next/no-img-element */
import React from "react";
import type { NextPage } from "next";
import { listCareTipCategorys } from "../graphql/queries";
import API from "@aws-amplify/api";
import Storage from "@aws-amplify/storage";
import UserTopNavbar from "../components/user-top-navbar/user-top-navbar";
import WithAuth from "../hoc/with-auth";

const CategoryCard = ({
  name,
  careTips,
  image,
}: {
  name: string;
  careTips: any[];
  image: string;
}) => {
  const [imgUrl, setImageUrl] = React.useState<any>(null);

  const getImage = async (_image: string) => {
    const s3Image = await Storage.get(_image);

    setImageUrl(s3Image);
  };

  React.useEffect(() => {
    if (!image) return;

    getImage(image);
  }, [image]);

  return (
    <div className='w-6/12 my-5 px-3'>
      <div className='border w-full p-5 rounded'>
        {imgUrl !== null && (
          <div className='w-full rounded' style={{ height: "250px" }}>
            <img
              src={String(imgUrl)}
              alt={name}
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
          </div>
        )}

        <h1 className='text-2xl mt-5'>{name}</h1>

        <ul className='list-disc ml-5 mt-5'>
          {careTips.map((tip: any) => (
            <li key={tip.id}>{tip.tip}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

const Home: NextPage = () => {
  const [categories, setCategories] = React.useState<any[]>([]);

  const fetchCategories = async () => {
    try {
      const resp = await API.graphql({ query: listCareTipCategorys });

      setCategories(resp.data.listCareTipCategorys.items);
    } catch (err) {
      console.log("err", err);
    }
  };

  React.useEffect(() => {
    fetchCategories();
  }, []);

  return (
    <>
      <UserTopNavbar />

      <div className='w-full flex flex-col min-h-screen items-center'>
        <div className='flex flex-row flex-wrap w-10/12'>
          {categories.map((category) => (
            <CategoryCard
              name={category.name}
              careTips={category.careTips.items}
              image={category.image}
              key={category.id}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default WithAuth(Home);
