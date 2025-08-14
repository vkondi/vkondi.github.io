import { ExpandLess, ExpandMore } from "@mui/icons-material";
import { Button } from "@mui/material";

interface ShowMoreButtonProps {
  expanded: boolean;
  onClick: () => void;
  previewCount: number;
  totalCount: number;
}

const ShowMoreButton = ({
  expanded,
  onClick,
  previewCount,
  totalCount,
}: ShowMoreButtonProps) => (
  <Button
    onClick={onClick}
    startIcon={expanded ? <ExpandLess /> : <ExpandMore />}
    sx={{
      mt: 2,
      color: "text.secondary",
      "&:hover": {
        backgroundColor: (theme) =>
          theme.palette.mode === "dark"
            ? "rgba(255, 255, 255, 0.05)"
            : "rgba(0, 0, 0, 0.02)",
      },
    }}
  >
    {expanded ? "Show Less" : `Show ${totalCount - previewCount} More`}
  </Button>
);

export default ShowMoreButton;
