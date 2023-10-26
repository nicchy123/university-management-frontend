"use client";
import { Button, Col, Row } from "antd";
// import loginImage from "../../assets/login-image.png";
// import Image from "next/image";
import { SubmitHandler } from "react-hook-form";
import FormInput from "@/components/forms/formInput";
import Form from "@/components/forms/form";
import { useUserLoginMutation } from "@/redux/api/authApi";
import storeUserInfo from "@/services/auth.service.";
import { useRouter } from "next/navigation";
const Login = () => {
    type FormValues = {
      id: string;
      password: string;
    };
    
  const router = useRouter();
  const [userLogin] = useUserLoginMutation();
  const onSubmit: SubmitHandler<FormValues> = async (data) => {
    try {
      const response = await userLogin({ ...data }).unwrap();
      if (response?.accessToken) {
        storeUserInfo(response?.accessToken);
        router.push("/profile");
      }
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <Row
      justify="center"
      align="middle"
      style={{
        minHeight: "100vh",
      }}
    >
      <Col sm={12} md={16} lg={10}>
        {/* <Image src={loginImage} width={500} alt="login image" /> */}
      </Col>
      <Col sm={12} md={8} lg={8}>
        <h1
          style={{
            margin: "15px 0px",
          }}
        >
          First login your account
        </h1>
        <div>
          <Form submitHandler={onSubmit}>
            <div>
              <FormInput name="id" type="text" size="large" label="User Id" />
            </div>
            <div
              style={{
                margin: "15px 0px",
              }}
            >
              <FormInput
                name="password"
                type="password"
                size="large"
                label="User Password"
              />
            </div>
            <Button type="primary" htmlType="submit">
              Login
            </Button>
          </Form>
        </div>
      </Col>
    </Row>
  );
};

export default Login;
