import { Select } from "antd";

const { Option } = Select;

const generateMonths = (): string[] => {
  const months = [];

  for (let i = 1; i < 13; i++) {
    months.push(i.toLocaleString());
  }
  return months;
};

function generateDays(): string[] {
  const days = [];

  for (let i = 1; i < 31; i++) {
    days.push(i.toLocaleString());
  }
  return days;
}

function generateYears(): string[] {
  const years = [];

  for (let i = 1930; i < 2023; i++) {
    years.push(i.toLocaleString());
  }
  return years;
}

export function Selector(props: any) {
  let data: string[] = [];
  if (props.type === "month") {
    data = generateMonths();
  } else if (props.type === "day") {
    data = generateDays();
  } else if (props.type === "year") {
    data = generateYears();
  } else {
    data = [];
  }

  return (
    <Select placeholder={props.type} style={{ width: 100 }} onChange={props.onChange}>
      {data.map((value, i) => (
        <Option key={i} value={value} name={props.name}>
          {value}
        </Option>
      ))}
    </Select>
  );
}
