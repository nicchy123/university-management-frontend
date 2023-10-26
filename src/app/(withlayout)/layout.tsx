"use client"
import Contents from "@/components/ui/Contents";
import Sidebar from "@/components/ui/Sidebar";
import { isLoggedIn } from "@/services/auth.service.";
import { Layout, Spin } from "antd";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  const router = useRouter()
  const userLoggedin = isLoggedIn()
  const [loading, setLoading] = useState<boolean>(false)
  useEffect(() => {
    if (!userLoggedin) router.push("/login");
    setLoading(true);
  }, [router, loading]);
  if (!setLoading) {
    return <Spin />;
  }
  return (
    <Layout>
      <Sidebar />
      <Contents>{children}</Contents>
    </Layout>
  );
};

export default DashboardLayout;
