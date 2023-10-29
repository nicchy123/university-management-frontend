import ActionBar from '@/components/ui/ActionBar';
import Link from 'next/link';
import React from 'react';

const Department = () => {
    return (
      <div>
        <ActionBar title="Department List">
          <Link href={"/super-admin/department/create"}></Link>
        </ActionBar>
      </div>
    );
};

export default Department;