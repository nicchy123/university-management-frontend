import ActionBar from "@/components/ui/ActionBar";
import Link from "next/link";
import React from "react";

const SuperAdmin = () => {
  return (
    <div>
      <h1>Admin List</h1>
      <ActionBar title="Admin List">
        <Link href={"/super-admin/admin/create"}></Link>
      </ActionBar>
    </div>
  );
};

export default SuperAdmin;
