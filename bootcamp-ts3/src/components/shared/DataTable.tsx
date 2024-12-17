// have error = T not defined
// type Props = {
//     data: T[];
//     renderItem: (user: T) => React.ReactNode;
// };
import { createColumnHelper } from "@tanstack/react-table";

type Person = {
  firstName: string;
  lastName: string;
  age: number;
  visits: number;
  status: string;
  progress: number;
};

// const defaultData: Person[] = [
//   {
//     firstName: "tanner",
//     lastName: "linsley",
//     age: 24,
//     visits: 100,
//     status: "In Relationship",
//     progress: 50,
//   },
//   {
//     firstName: "tandy",
//     lastName: "miller",
//     age: 40,
//     visits: 40,
//     status: "Single",
//     progress: 80,
//   },
//   {
//     firstName: "joe",
//     lastName: "dirte",
//     age: 45,
//     visits: 20,
//     status: "Complicated",
//     progress: 10,
//   },
// ];

const columnHelper = createColumnHelper<Person>();

function DataTable<T, B>({
  data: propdata,
  columns: propcolumn,
}: {
  data: T[];
  columns: B[];
}) {
  console.log(propdata);
  console.log(propcolumn);

  return (
    <table className="border w-full">
      <thead>
        <tr>
          {propcolumn?.map((item) => {
            return <th>{item.header}</th>;
          })}
        </tr>
      </thead>
      <tbody>
        <tr>
          {/* {propdata?.map((item) => {
            return <th>{item.id}</th>;
          })} */}
          <td></td>
        </tr>
      </tbody>
    </table>
  );
}

export default DataTable;
