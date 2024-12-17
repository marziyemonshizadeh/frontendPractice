import Card from "../shared/card";

export default function FirstExercise() {
  return (
    <>
      FirstExercise
      {/* first exersice */}
      <Card mode="profile" name="name" age={30} bio={"bio"} />
      <Card
        mode="product"
        description="name"
        price={30000}
        name={"name"}
        age={30}
      />
    </>
  );
}
