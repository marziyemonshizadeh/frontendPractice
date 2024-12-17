import React from "react";

// type Props = {
//     user:
//     renderItem
// }

function List<T>({
  data,
  renderItem,
}: {
  data: T[];
  renderItem: (user: T) => React.ReactNode;
}) {
  return data.map((user) => {
    return renderItem(user);
  });
}

export default List;
