"use client";
import UMBreadCrumb from "@/components/ui/UMBreadCrumb";
import UMTable from "@/components/ui/UMtable";
import { useDepartmentsQuery } from "@/redux/api/departmentApi";
import { Button } from "antd";
import Link from "next/link";
import { useState } from "react";

const ManageDepartmentPage = () => {
  const query: Record<string, any> = {};
  const [size, setSize] = useState<number>(10);
  const [page, setPage] = useState<number>(1);
  query.size = size;
  query.page = page;
  const { data, isLoading } = useDepartmentsQuery({ ...query });
  const departments = data?.departments;
  const meta = data?.meta;
  const columns = [
    {
      title: "title",
      dataIndex: "title",
    },
    {
      title: "createdAt",
      dataIndex: "createdAt",
      key: "createdAt",
      sorter: true
    },
    {
      title: "Action",
      render: function (data: any) {
        return (
          <Button onClick={() => console.log(data)} type="primary" danger>
            X
          </Button>
        );
      },
    },
  ];

  const onPaginationChange = (page: number, pageSize: number) => {
    setSize(pageSize);
    setPage(page);
    console.log("Page:", page, "PageSize:", pageSize);
  };
  const onTableChange = (pagination: any, filter: any, sorter: any) => {
    const { order, field } = sorter;
  };
  return (
    <div>
      <UMBreadCrumb
        items={[
          {
            label: "super_admin",
            link: "/super_admin",
          },
        ]}
      />
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <h1>Department List</h1>
        <Link href="/super_admin/department/create">
          <Button type="primary">Create</Button>
        </Link>
      </div>
      <UMTable
        loading={isLoading}
        columns={columns}
        dataSource={departments}
        pageSize={size}
        totalPages={meta?.total}
        showSizeChanger={true}
        onPaginationChange={onPaginationChange}
        onTableChange={onTableChange}
        showPagination={true}
      />
    </div>
  );
};

export default ManageDepartmentPage;
