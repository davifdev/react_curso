import styles from "./style.module.css";

const RenderList = () => {
  const fruits = [
    {
      id: 1,
      name: "Laranja",
    },
    {
      id: 2,
      name: "Uva",
    },
    {
      id: 3,
      name: "Maçã",
    },
  ];

  return (
    <>
      <div className={styles.container}>
        {fruits.map((fruit) => (
          <p key={fruit.id}>{fruit.name}</p>
        ))}
      </div>
    </>
  );
};

export default RenderList;
