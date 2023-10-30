"use client"
import UMBreadCrumb from "@/components/ui/UMBreadCrumb";
import UMTable from "@/components/ui/UMtable";
import { Button } from "antd";
import Link from "next/link";

const ManageDepartmentPage = () => {
    const columns = [
      {
        title: "Name",
        dataIndex: "name",
        key: "name",
      },
      {
        title: "Age",
        dataIndex: "age",
        key: "age",
        // @ts-ignore
        sorter: (a: number, b: number) => a.age - b.age,
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
    const departments = [
      { name: "nasir", age: "10" },
      { name: "nasir", age: "20" },
    ];
    const onPaginationChange = (page: number, pageSize: number) => {
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
        loading={false}
        columns={columns}
        dataSource={departments}
        pageSize={10}
        totalPages={100}
        showSizeChanger={true}
        onPaginationChange={onPaginationChange}
        onTableChange={onTableChange}
        showPagination={true}
      />
    </div>
  );
};

export default ManageDepartmentPage;
