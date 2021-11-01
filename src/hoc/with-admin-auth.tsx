import Auth from "@aws-amplify/auth";
import { useRouter } from "next/dist/client/router";
import React from "react";

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
const WithAdminAuth = (WrappedComponent: any) => {
  const NewComponent = (props: any) => {
    const router = useRouter();
    const [loading, setLoading] = React.useState(true);

    React.useEffect(() => {
      (async () => {
        setLoading(true);

        try {
          const user = await Auth.currentAuthenticatedUser();

          if (user.attributes["custom:isAdmin"] === "0") {
            await Auth.signOut();

            router.replace("/admin/auth/login");
          }
        } catch (err) {
          console.log("err", err);
          router.replace("/admin/auth/login");
        } finally {
          setLoading(false);
        }
      })();
    }, []);

    return loading === false ? <WrappedComponent {...props} /> : null;
  };

  return NewComponent;
};

export default WithAdminAuth;
