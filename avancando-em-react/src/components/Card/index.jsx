// eslint-disable-next-line react/prop-types
const Card = ({ name, age, role }) => {
  return (
    <>
      <h2>{role}</h2>
      <p>
        {name}, {age}
      </p>
    </>
  );
};

export default Card;
