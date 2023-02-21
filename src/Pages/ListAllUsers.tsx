import { faker } from "@faker-js/faker";
import { Button, Table, Tag } from "antd";
import ButtonGroup from "antd/es/button/button-group";
import { ColumnsType } from "antd/es/table";

interface UserData {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  dob: string;
  roles: string[];
  createdAt: string;
}

const columns: ColumnsType<UserData> = [
  {
    title: "IDs",
    dataIndex: "id",
    key: "id",
  },
  {
    title: "First Name",
    dataIndex: "firstName",
    key: "firstName",
  },
  {
    title: "Last Name",
    dataIndex: "lastName",
    key: "firstName",
  },
  {
    title: "CreatedAt",
    dataIndex: "createdAt",
    key: "createdAt",
  },
  {
    title: "Email",
    dataIndex: "email",
    key: "email",
  },
  {
    title: "DOB",
    dataIndex: "dob",
    key: "dob",
  },
  {
    title: "Roles",
    dataIndex: "roles",
    render: (_, { roles }) => (
      <>
        {roles.map((role) => {
          let color = "geekblue";
          if (role === "ADMIN") {
            color = "volcano";
          }
          return <Tag color={color}>{role.toUpperCase()}</Tag>;
        })}
      </>
    ),
  },
  {
    title: "Actions",
    render: () => (
      <ButtonGroup>
        <Button>Edit</Button>
        <Button type="primary" danger>
          Delete
        </Button>
      </ButtonGroup>
    ),
  },
];

const seedData = (): UserData[] => {
  const dat: UserData[] = [];

  for (let i = 0; i < 5; i++) {
    dat.push({
      id: faker.random.alphaNumeric(7),
      firstName: faker.name.firstName(),
      lastName: faker.name.lastName(),
      email: faker.internet.email(),
      dob: faker.date
        .birthdate()
        .getDate()
        .toLocaleString(),
      createdAt: faker.date
        .past()
        .getDate()
        .toLocaleString(),
      roles: ["USER", "ADMIN"],
    });
  }

  return dat;
};

const data = seedData();

export function ListAllUsersPage() {
  return (
    <div>
      <Table columns={columns} dataSource={data}></Table>
    </div>
  );
}
