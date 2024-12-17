import List from "../shared/List";

type Props = {};

export default function ThirdExercise({}: Props) {
  const users = [
    { id: 1, name: "Alica", age: 20 },
    { id: 2, name: "Alex", age: 50 },
  ];
  return (
    <>
      ThirdApp
      <List
        data={users}
        renderItem={(user) => <div key={user?.id}>{user.age}</div>}
      />
    </>
  );
}
