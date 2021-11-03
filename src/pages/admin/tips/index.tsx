import React from "react";
import type { NextPage } from "next";
import AppButton from "../../../components/app-button/app-button";
import API from "@aws-amplify/api";
import { useRouter } from "next/dist/client/router";
import { deleteCareTip } from "../../../graphql/mutations";
import AppModal from "../../../components/app-modal/app-modal";
import AdminTopNavbar from "../../../components/admin-top-navbar/admin-top-navbar";
import WithAdminAuth from "../../../hoc/with-admin-auth";

const listCareTips = /* GraphQL */ `
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

const AdminTips: NextPage = () => {
  const router = useRouter();

  const [tips, setTips] = React.useState<any[]>([]);
  const [selectedTip, setSelectedTip] = React.useState<any>(null);

  const fetchTips = async () => {
    try {
      const resp: any = await API.graphql({ query: listCareTips });

      setTips(resp.data.listCareTips.items);
    } catch (err) {
      console.log("err", err);
    }
  };

  React.useEffect(() => {
    fetchTips();
  }, []);

  const deleteTip = async (id: string) => {
    try {
      await API.graphql({
        query: deleteCareTip,
        variables: {
          input: {
            id,
          },
        },
      });
    } catch (err) {
      console.log("err", err);
    } finally {
      await fetchTips();
      setSelectedTip(null);
    }
  };

  return (
    <>
      <AdminTopNavbar />

      <div className='flex flex-col w-full min-h-screen items-center my-10'>
        <div className='flex flex-col w-10/12'>
          <div className='w-full mb-5'>
            <h1 className='text-4xl'>Manage Tips</h1>
          </div>

          <div className='mt-5'>
            <div className='flex justify-end mb-3'>
              <AppButton
                label='New Tip'
                onClick={() => router.push("/admin/tips/add")}
              />
            </div>
            <div className='flex flex-row flex-wrap py-3 border'>
              <div className='w-4/12 px-2 font-bold'>Tip</div>
              <div className='w-3/12 px-2 font-bold'>Category</div>
              <div className='w-3/12 px-2 font-bold'>Updated At</div>
              <div className='w-2/12 px-2 font-bold'>Action</div>
            </div>
            {tips.map((tip) => (
              <div className='flex flex-row flex-wrap py-3 border' key={tip.id}>
                <div className='w-4/12 px-2'>{tip.tip}</div>
                <div className='w-3/12 px-2'>{tip.careTipCategory.name}</div>
                <div className='w-3/12 px-2'>{tip.updatedAt}</div>
                <div className='w-2/12 px-2 flex flex-row'>
                  <AppButton
                    label='Edit'
                    size='sm'
                    theme='secondary'
                    onClick={() => router.push(`/admin/tips/edit/${tip.id}`)}
                  />
                  <AppButton
                    label='Delete'
                    size='sm'
                    theme='secondary'
                    onClick={() => setSelectedTip(tip)}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <AppModal show={selectedTip} onClose={() => setSelectedTip(null)}>
        <>
          <h1 className='text-2xl mb-5'>Delete Tip?</h1>
          <p>
            Please click &quot;Delete&quot; button to delete{" "}
            <span className='italic'>
              &quot;
              {selectedTip?.tip}&quot;
            </span>
          </p>
          <div className='flex justify-end mt-10'>
            <AppButton
              label='Cancel'
              theme='secondary'
              onClick={() => setSelectedTip(null)}
            />
            <AppButton
              label='Delete'
              onClick={() => deleteTip(selectedTip?.id)}
            />
          </div>
        </>
      </AppModal>
    </>
  );
};

export default WithAdminAuth(AdminTips);
