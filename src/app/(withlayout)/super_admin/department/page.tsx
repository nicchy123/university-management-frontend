"use client";
import UMBreadCrumb from "@/components/ui/UMBreadCrumb";
import UMTable from "@/components/ui/UMtable";
import { useDepartmentsQuery } from "@/redux/api/departmentApi";
import { Button, Input } from "antd";
import Link from "next/link";
import { useState } from "react";
import {
  DeleteOutlined,
  EditOutlined,
  EyeOutlined,
  ReloadOutlined,
} from "@ant-design/icons";
import ActionBar from "@/components/ui/ActionBar";
const ManageDepartmentPage = () => {
  const query: Record<string, any> = {};
  const [size, setSize] = useState<number>(10);
  const [page, setPage] = useState<number>(1);
  const [sortBy, setsortBy] = useState<string>("");
  const [sortOrder, setsortOrder] = useState<string>("");
  const [searchTerm, setseatchTerm] = useState<string>("");
  query.size = size;
  query.page = page;
  query.sortBy = sortBy;
  query.sortOrder = sortOrder;
  query.searchTerm = searchTerm;
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
      sorter: true,
    },
    {
      title: "Action",
      render: function (data: any) {
        return (
          <>
            <Button onClick={() => console.log(data)} type="primary" danger>
              <EyeOutlined />
            </Button>
            <Button
              style={{ margin: "0px 10px" }}
              onClick={() => console.log(data)}
              type="primary"
              danger
            >
              <EditOutlined />
            </Button>
            <Button onClick={() => console.log(data)} type="primary" danger>
              <DeleteOutlined />
            </Button>
          </>
        );
      },
    },
  ];

  const onPaginationChange = (page: number, pageSize: number) => {
    setSize(pageSize);
    setPage(page);
  };
  const onTableChange = (pagination: any, filter: any, sorter: any) => {
    const { order, field } = sorter;
    setsortBy(field as string);
    setsortOrder(order === "ascend" ? "asc" : "desc");
  };
  const resetFielters = () => {
    setsortBy("");
    setsortOrder("");
    setseatchTerm("");
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

      <ActionBar title="Department List">
        <div>
          <Link href="/super_admin/department/create">
            <Button type="primary">Create</Button>
          </Link>

          {!!sortBy ||
            !!sortOrder ||
            (!!searchTerm && (
              <Button
                onClick={resetFielters}
                style={{ marginLeft: "20px" }}
                type="primary"
              >
                <ReloadOutlined />
              </Button>
            ))}
        </div>
      </ActionBar>
      <Input
        onChange={(e) => setseatchTerm(e.target.value)}
        placeholder="Search"
        style={{ marginBottom: "10px", width: "40%" }}
      />
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
