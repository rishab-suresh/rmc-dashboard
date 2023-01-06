import useCount from "./useCount";

const useTable = ({ Name, Login, Productive, Idle, Break }) => {
  const productiveCounter = useCount(0, Productive);
  const idleCounter = useCount(0, Idle);
  const breakCounter = useCount(0, Break);

  return (
    <tr>
      <td>{Name}</td>
      <td>{Login}</td>
      <td>{productiveCounter}</td>
      <td>{idleCounter}</td>
      <td>{breakCounter}</td>
    </tr>
  );
};

export default useTable;