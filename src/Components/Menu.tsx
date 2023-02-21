import {
  DashboardOutlined,
  HomeOutlined,
  LogoutOutlined,
  ProjectFilled,
  ProjectOutlined,
  UserAddOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Menu, MenuProps } from "antd";
import { useNavigate } from "react-router-dom";

const items: MenuProps["items"] = [
  {
    label: "Home",
    key: "/",
    icon: <HomeOutlined />,
  },
  {
    label: "Users",
    key: "/users",
    icon: <UserOutlined />,
    children: [
      {
        label: "List Users",
        key: "/listUsers",
        icon: <UserOutlined />,
      },
      {
        label: "Add User",
        key: "/addUser",
        icon: <UserAddOutlined />,
      },
    ],
  },
  {
    label: "Projects",
    key: "/projects",
    icon: <ProjectOutlined />,
    children: [
      {
        label: "List Projects",
        key: "/listProjects",
        icon: <ProjectOutlined />,
      },
      {
        label: "Add Project",
        key: "/addProject",
        icon: <ProjectFilled />,
      },
    ],
  },
  {
    label: "Log Out",
    key: "/logout",
    icon: <LogoutOutlined />,
  },
];

export function AppMenu() {
  const navigate = useNavigate();
  //   const [current, setCurrent] = useState("/");

  const onClick: MenuProps["onClick"] = (e: { key: any }) => {
    console.log("click ", e);
    if (e.key === "/logout") {
      console.log("LOGGG OUT");
    } else {
      //   setCurrent(e.key);
      navigate(e.key);
    }
  };
  return (
    <Menu
      mode="vertical"
      selectedKeys={[window.location.pathname]}
      items={items}
      onClick={onClick}
    ></Menu>
  );
}
