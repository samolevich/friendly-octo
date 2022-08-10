import { useSelector } from "react-redux";
import { Image, Table, Typography } from "antd";

const columns = [
  {
    title: "Photo",
    dataIndex: "photo",
    key: "photo",
    render: image => <Image src={image} alt="photo" width={90} />,
  },
  { title: "Name", dataIndex: "name", key: "name" },
  {
    title: "Gender",
    dataIndex: "gender",
    key: "gender",
    filters: [
      { text: "Female", value: "Female" },
      { text: "Male", value: "Male" },
    ],
    onFilter: (value, record) => record.gender.includes(value),
  },
  {
    title: "Age",
    dataIndex: "age",
    key: "age",
    sorter: (a, b) => a.age - b.age,
  },
  {
    title: "E-mail",
    dataIndex: "email",
    key: "email",
    render: text => <Typography.Text copyable>{text}</Typography.Text>,
  },
  {
    title: "Phone",
    dataIndex: "phone",
    key: "phone",
    render: text => <Typography.Text copyable>{text}</Typography.Text>,
  },
  {
    title: "Cell",
    dataIndex: "cell",
    key: "cell",
    render: text => <Typography.Text copyable>{text}</Typography.Text>,
  },
  {
    title: "Address",
    dataIndex: "address",
    key: "address",
  },
  {
    title: "City",
    dataIndex: "city",
    key: "city",
  },
  {
    title: "State",
    dataIndex: "state",
    key: "state",
  },
];

const Board = () => {
  const users = useSelector(state => state.usersReducer.users);

  let uniqueCountryList = [];
  const transformUsers = users.map(user => {
    if (!uniqueCountryList.includes(user.location.country))
      uniqueCountryList.push(user.location.country);
    return {
      ...user,
      name: `${user.name.title} ${user.name.first} ${user.name.last}`,
      age: user.dob.age,
      gender: user.gender.replace(/^\w/, c => c.toUpperCase()),
      country: user.location.country,
      state: user.location.state,
      city: user.location.city,
      address: `${user.location.street.number} ${user.location.street.name}`,
      photo: user.picture.large,
      key: `${user.name.first}-${user.name.last}-${user.age}-${user.phone}-${user.cell}`,
    };
  });

  const filterListByCountry = uniqueCountryList.map(country => ({
    text: country,
    value: country,
  }));

  const transformColumns = [
    ...columns,
    {
      title: "Country",
      dataIndex: "country",
      key: "country",
      filters: [...filterListByCountry],
      onFilter: (value, record) => record.country.includes(value),
    },
  ];
  return (
    <Table
      dataSource={transformUsers}
      columns={transformColumns}
      pagination={{
        defaulPageSize: "8",
        showSizeChanger: true,
        pageSizeOptions: [2, 4, 8, 12, 16, 20, 30, 50],
      }}
    />
  );
};

export default Board;
