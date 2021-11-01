import "../styles/globals.css";
import type { AppProps } from "next/app";
import Amplify from "aws-amplify";
// import awsconfig from "../aws-exports";

Amplify.configure({
  ...{
    aws_project_region: "ap-southeast-1",
    aws_appsync_graphqlEndpoint:
      "https://sxezwc6iuvc53idzrussryby34.appsync-api.ap-southeast-1.amazonaws.com/graphql",
    aws_appsync_region: "ap-southeast-1",
    aws_appsync_authenticationType: "API_KEY",
    aws_appsync_apiKey: "da2-ze76lboqiza77iqbubenzhz2cm",
    aws_cognito_identity_pool_id:
      "ap-southeast-1:886998c5-47c2-429b-bee2-6e97ea688256",
    aws_cognito_region: "ap-southeast-1",
    aws_user_pools_id: "ap-southeast-1_b8L3QSC4q",
    aws_user_pools_web_client_id: "6rkjj57o1tp6h2nj55kc897paf",
    oauth: {},
    aws_cognito_login_mechanisms: ["PREFERRED_USERNAME"],
    aws_cognito_signup_attributes: [],
    aws_cognito_mfa_configuration: "OFF",
    aws_cognito_mfa_types: ["SMS"],
    aws_cognito_password_protection_settings: {
      passwordPolicyMinLength: 8,
      passwordPolicyCharacters: [],
    },
    aws_cognito_verification_mechanisms: ["EMAIL"],
    aws_user_files_s3_bucket:
      "abing0318ea77ba164254838f74de6500ad1f133218-staging",
    aws_user_files_s3_bucket_region: "ap-southeast-1",
  },
  ssr: true,
});

const MyApp = ({ Component, pageProps }: AppProps): JSX.Element => (
  <Component {...pageProps} />
);

export default MyApp;
