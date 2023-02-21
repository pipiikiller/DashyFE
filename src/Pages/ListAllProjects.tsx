import { faker } from "@faker-js/faker";
import { Button, Table, Tag } from "antd";
import ButtonGroup from "antd/es/button/button-group";
import { ColumnsType } from "antd/es/table";

interface ProjectData {
  id: string;
  name: string;
  address: string;
  postcode: string;
  clientIds: string[];
  employeeIds: string[];
}

const columns: ColumnsType<ProjectData> = [
  {
    title: "IDs",
    dataIndex: "id",
    key: "id",
  },
  {
    title: "Name",
    dataIndex: "name",
    key: "name",
  },
  {
    title: "Address",
    dataIndex: "address",
    key: "address",
  },
  {
    title: "Postcode",
    dataIndex: "postcode",
    key: "postcode",
  },
  {
    title: "Client Ids",
    dataIndex: "clientIds",
    key: "clientIds",
    render: (_, { clientIds }) => (
      <>
        {clientIds.map((id) => {
          return <Tag>{id.toUpperCase()}</Tag>;
        })}
      </>
    ),
  },
  {
    title: "Employee Ids",
    dataIndex: "employeeIds",
    key: "employeeIds",
    render: (_, { employeeIds }) => (
      <>
        {employeeIds.map((id) => {
          return <Tag>{id.toUpperCase()}</Tag>;
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

const seedData = (): ProjectData[] => {
  const dat: ProjectData[] = [];

  for (let i = 0; i < 5; i++) {
    dat.push({
      id: faker.random.alphaNumeric(7),
      name: faker.name.firstName(),
      address: `${faker.address.buildingNumber()}  ${faker.address.street()}`,
      postcode: faker.address.zipCode(),
      clientIds: [faker.random.alphaNumeric(4), "E1828912"],
      employeeIds: [faker.random.alphaNumeric(4), faker.random.alphaNumeric(4)],
    });
  }

  return dat;
};

const data = seedData();

export function ListAllProjectsPage() {
  return (
    <div>
      <Table columns={columns} dataSource={data}></Table>
    </div>
  );
}
