"use client"
import UMBreadCrumb from '@/components/ui/UMBreadCrumb';
import { getUserInfo } from '@/services/auth.service.';
import { Button } from 'antd';
import Link from 'next/link';
import React from 'react';

const ManageStudent = () => { 
    const {role} = getUserInfo() as any;
    return (
      <div>
        <UMBreadCrumb
          items={[
            {
              label: `${role}`,
              link: `/${role}`,
            },
          ]}
        />
        manage-student
        <Link href={'/super_admin/manage-student/create'}>
        <Button>
          Create Student
        </Button>
        </Link>
      </div>
    );
};

export default ManageStudent;