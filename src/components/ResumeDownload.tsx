import { Button } from "@mui/material";
import { Download } from "@mui/icons-material";

const ResumeDownload = () => {
  const handleDownload = () => {
    // In a real application, this would be a link to an actual PDF file
    const pdfUrl = "/resume.pdf";
    const link = document.createElement("a");
    link.href = pdfUrl;
    link.download = "Vishwajeet_Kondi_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <Button
      variant="contained"
      startIcon={<Download />}
      onClick={handleDownload}
      sx={{ mt: 2 }}
    >
      Download Resume
    </Button>
  );
};

export default ResumeDownload;
