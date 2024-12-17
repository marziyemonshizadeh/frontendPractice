/* first exersice */
import React from "react";

type FirstCardProps = {
  mode: "profile";
  name: string;
  age: number;
  bio: string;
};
type SecondCardProps = {
  mode: "product";
  description: string;
  price: number;
  name: string;
  age: number;
};

export default function Card(props: FirstCardProps | SecondCardProps) {
  if (props.mode == "product") {
    return <div>profile</div>;
  } else {
    return <div>product</div>;
  }
}
