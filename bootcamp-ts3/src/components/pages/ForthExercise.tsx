import DataTable from "../shared/DataTable";

type Props = {};

export default function ForthExercise({}: Props) {
  const users = [
    { id: 1, name: "Alice", age: 25 },
    { id: 2, name: "Bob", age: 30 },
  ];
  const userColumns = [
    { header: "ID", accessor: "id" },
    { header: "Name", accessor: "name" },
    { header: "Age", accessor: "age" },
  ];
  const products = [
    { id: 101, title: "Laptop", price: 999.9 },
    { id: 102, title: "Phone", price: 499.99 },
  ];
  const productColumns = [
    { header: "ID", accessor: "id" },
    { header: "Title", accessor: "title" },
    { header: "Price", accessor: "price" },
  ];

  return (
    <div>
      <h2 className="text-lg font-bold">ForthExercise</h2>
      <span className="text-pink-600">first table</span>

      <DataTable<(typeof users)[0], (typeof userColumns)[0] | any>
        data={users}
        columns={userColumns}
      />
      <span className="text-pink-600">second table</span>

      <DataTable<(typeof products)[0], (typeof userColumns)[0] | any>
        data={products}
        columns={productColumns}
      />
    </div>
  );
}
