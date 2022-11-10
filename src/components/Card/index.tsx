import { Card, CardMedia, CardContent } from "@mui/material"
import Checkbox from "../CheckBox"
import { useTheme } from "@mui/material/styles"

export default function CardItem({ img, label, checked }: { img: string; label: string; checked: boolean }) {
  const theme = useTheme()
  return (
    <Card
      sx={{
        maxWidth: "229px",
        [theme.breakpoints.down("sm")]: {
          maxWidth: "none"
        },
        boxShadow: checked ? "0px 0px 0px 2px #65E9D9" : ""
      }}
    >
      <CardMedia component="img" height="100px" image={img} alt="Cover" />
      <CardContent>
        <Checkbox checked={checked} sx={{ paddingTop: "18.25px", paddingBottom: "18.25px", paddingLeft: "18.25px" }} label={label} />
      </CardContent>
    </Card>
  )
}
