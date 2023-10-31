import React from 'react';
type IDParams = {
  params: string;
};
const EditDepartmentPage = ({ params }: IDParams) => {
  console.log(params);
  return (
    <div>
      <h1>{params?.id}</h1>
    </div>
  );
};

export default EditDepartmentPage;