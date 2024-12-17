type Props = {};

const users = [
  { id: 1, group: "admin", name: "Alice" },
  { id: 2, group: "user", name: "Bob" },
  { id: 3, group: "admin", name: "Charlie" },
];
console.log(users);

const groupBy = <T,>(users: T[], key: keyof T) => {
  console.log(users[0][key]);
};

export default function SecondExercise({}: Props) {
  groupBy([{ id: 1, group: "admin", name: "Alice" }], "name");

  return <>SecondExercise</>;
}
