import React from "react";
import type { NextPage } from "next";
import AppButton from "../../../components/app-button/app-button";
import API from "@aws-amplify/api";
import { listCareTipCategorys } from "../../../graphql/queries";
import { useRouter } from "next/dist/client/router";
import AppModal from "../../../components/app-modal/app-modal";
import { deleteCareTipCategory } from "../../../graphql/mutations";
import AdminTopNavbar from "../../../components/admin-top-navbar/admin-top-navbar";
import WithAdminAuth from "../../../hoc/with-admin-auth";

const AdminCategories: NextPage = () => {
  const router = useRouter();

  const [categories, setCategories] = React.useState<any[]>([]);
  const [selectedCategory, setSelectedCategory] = React.useState<any>(null);

  const fetchCategories = async () => {
    try {
      const resp = await API.graphql({ query: listCareTipCategorys });

      console.log("resp", resp);
      setCategories(resp?.data.listCareTipCategorys.items);
    } catch (err) {
      console.log("err", err);
    }
  };

  React.useEffect(() => {
    fetchCategories();
  }, []);

  const deleteCategory = async (id: string) => {
    try {
      await API.graphql({
        query: deleteCareTipCategory,
        variables: {
          input: {
            id,
          },
        },
      });
    } catch (err) {
      console.log("err", err);
    } finally {
      await fetchCategories();
      setSelectedCategory(null);
    }
  };

  return (
    <>
      <AdminTopNavbar />

      <div className='flex flex-col w-full min-h-screen items-center my-10'>
        <div className='flex flex-col w-10/12'>
          <div className='w-full mb-5'>
            <h1 className='text-4xl'>Manage Categories</h1>
          </div>

          <div className='mt-5'>
            <div className='flex justify-end mb-3'>
              <AppButton
                label='New Category'
                onClick={() => router.push("/admin/categories/add")}
              />
            </div>

            <div className='flex flex-row flex-wrap py-3 border'>
              <div className='w-3/12 px-2 font-bold'>Name</div>
              <div className='w-4/12 px-2 font-bold'>Description</div>
              <div className='w-3/12 px-2 font-bold'>Updated At</div>
              <div className='w-2/12 px-2 font-bold'>Action</div>
            </div>
            {categories.map((category) => (
              <div
                className='flex flex-row flex-wrap py-3 border'
                key={category.id}>
                <div className='w-3/12 px-2'>{category.name}</div>
                <div className='w-4/12 px-2'>{category.description}</div>
                <div className='w-3/12 px-2'>{category.updatedAt}</div>
                <div className='w-2/12 px-2 flex flex-row'>
                  <AppButton
                    label='Edit'
                    size='sm'
                    theme='secondary'
                    onClick={() =>
                      router.push(`/admin/categories/edit/${category.id}`)
                    }
                  />
                  <AppButton
                    label='Delete'
                    size='sm'
                    theme='secondary'
                    onClick={() => setSelectedCategory(category)}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <AppModal
        show={selectedCategory}
        onClose={() => setSelectedCategory(null)}>
        <>
          <h1 className='text-2xl mb-5'>Delete Category?</h1>
          <p>
            Please click &quot;Delete&quot; button to delete{" "}
            <span className='italic'>
              &quot;
              {selectedCategory?.name}&quot;
            </span>
          </p>
          <div className='flex justify-end mt-10'>
            <AppButton
              label='Cancel'
              theme='secondary'
              onClick={() => setSelectedCategory(null)}
            />
            <AppButton
              label='Delete'
              onClick={() => deleteCategory(selectedCategory?.id)}
            />
          </div>
        </>
      </AppModal>
    </>
  );
};

export default WithAdminAuth(AdminCategories);
