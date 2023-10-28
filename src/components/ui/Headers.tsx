import { getUserInfo } from '@/services/auth.service.';
import { removeFromLocastorage } from '@/utils/local-storage';
import  {Button, Dropdown, Layout,  Row}  from 'antd';
const { Header: AntHeaders } = Layout;
import type { MenuProps } from "antd";
import { useRouter } from 'next/navigation';
const Headers = () => {
  const {role}  = getUserInfo() as any;
  const router = useRouter()
    const handleLogout = ()=>{
      removeFromLocastorage();
      router.push("/login")
    }
    const items: MenuProps["items"] = [
      {
        key: "1",
        label: (
          <Button onClick={ handleLogout} type="text" danger>
            Logout
          </Button>
        ),
      },
    ];
    return (
      <AntHeaders style={{display:"flex", justifyContent:"end", margin:"0px", alignItems:"center"}}>
        <Row>
            <Button style={{marginRight:"10px"}}>{role}</Button>
          <Dropdown menu={{ items }} placement="bottomRight" arrow>
            <Button>Profile</Button>
          </Dropdown>
        </Row>
      </AntHeaders>
    );
};

export default Headers;