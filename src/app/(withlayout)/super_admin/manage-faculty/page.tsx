import ActionBar from '@/components/ui/ActionBar';
import Link from 'next/link';
import React from 'react';

const ManageFaculty = () => {
    return (
      <div>
        <ActionBar title="Faculty List">
          <Link href={"/super-admin/faculty/create"}></Link>
        </ActionBar>
      </div>
    );
};

export default ManageFaculty;