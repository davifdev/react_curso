import { memo } from "react";

/* eslint-disable react/prop-types */
 const Count = ({count}) => {
  return (
    <>
      <h1>Hook useCallback e useMemo</h1>
      <h3>{count}</h3>
    </>
  );
};

export default memo(Count)
