import { Tooltip } from "@mui/material";
import { Link } from "@tanstack/react-router";
import ReadMoreIcon from "@mui/icons-material/ReadMore";

const SeeAllIcon = ({ title, navTo }: { title: string; navTo: string }) => {
  return (
    <Tooltip title={title}>
      <Link
        to={navTo}
        style={{
          justifyContent: "center",
          alignItems: "center",
          display: "flex",
          color: "inherit",
        }}
      >
        <ReadMoreIcon />
      </Link>
    </Tooltip>
  );
};

export default SeeAllIcon;
