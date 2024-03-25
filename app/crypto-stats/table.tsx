type TableProps = {
  [key: string]: string | number;
};

const Table = ({ title, price, view }: TableProps) => {
  return (
    <tbody>
      <tr
        style={{
          background: "#F9F9F9",
          color: "#000",
        }}
      >
        <td style={{ padding: "10px 15px", fontSize: "14px" }}>{title}</td>
        <td style={{ padding: "10px 15px", fontSize: "14px" }}>{price}</td>
        <td
          style={{
            padding: "10px 15px",
            fontSize: "14px",
            cursor: "pointer",
            color: "#0D6EFD",
          }}
        >
          {view}
        </td>
      </tr>
    </tbody>
  );
};

export default Table;
