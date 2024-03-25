import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

interface AddressProps {
  title: string;
}

const Address = ({ title }: AddressProps) => {
  return (
    <Box sx={{ marginBottom: "20px" }}>
      <Typography variant="h5" sx={{ fontWeight: 700, marginBottom: "16px" }}>
        {title}
      </Typography>
      <Box>
        <Typography variant="h6">Person 1</Typography>
        <Typography variant="h6">England</Typography>
        <Typography variant="h6">71-101 Szczecin, England</Typography>
        <Typography variant="h6">Email: demo@gmail.com</Typography>
        <Typography variant="h6">Phone: +0000</Typography>
      </Box>
    </Box>
  );
};

export default Address;
