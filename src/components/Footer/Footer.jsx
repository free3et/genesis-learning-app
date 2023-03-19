import logo_footer from "../../assets/logo_footer.svg";
import download from "../../assets/download_app.svg";
import instagram from "../../assets/instagram_logo.svg";
import youtube from "../../assets/youtube_logo.svg";

import {
  Grid,
  Container,
  Box,
  Typography,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";

export const Footer = () => {
  return (
    <Grid
      sx={{
        background: "#1f1f1f",
      }}
    >
      <Container>
        <Grid container justifyContent="space-around" spacing={5} mt={2}>
          <Grid item xs={6} md={3}>
            <img src={logo_footer} className="App-logo" alt="logo" />
          </Grid>

          <Grid item xs={6} md={3}>
            <List>
              <Typography
                variant="caption"
                textTransform="capitalize"
                color="#ffffff"
              >
                Company
              </Typography>
              <ListItem
                component="a"
                href="https://wisey.app/privacy-policy"
                sx={{ fontSize: ".7em", pt: 0.4 }}
                disablePadding
              >
                <ListItemText primary={"Privacy Policy"} />
              </ListItem>
              <ListItem
                component="a"
                href="https://wisey.app/refund-policy"
                disablePadding
                sx={{ fontSize: ".7em" }}
              >
                <ListItemText primary={"Refund Policy"} />
              </ListItem>
              <ListItem
                component="a"
                href="https://wisey.app/terms-of-use"
                disablePadding
                sx={{ fontSize: ".7em" }}
              >
                <ListItemText primary={"Terms of Use"} />
              </ListItem>
              <ListItem
                component="a"
                href="https://wisey.app/subscription-terms"
                disablePadding
                sx={{ fontSize: ".7em" }}
              >
                <ListItemText primary={"Subscription Terms"} />
              </ListItem>
              <ListItem
                component="a"
                href="https://wisey.app/cookie-policy"
                disablePadding
                sx={{ fontSize: ".7em" }}
              >
                <ListItemText primary={"Cookie Policy"} />
              </ListItem>
            </List>
          </Grid>
          <Grid item xs={6} md={3}>
            <Typography variant="caption" color="#ffffff">
              Download our app
            </Typography>
            <Box pt={2}>
              <a href="https://apps.apple.com/us/app/wisey-productivity-boost-app/id1621709982">
                <img
                  src={download}
                  alt="Download on the AppStore"
                  style={{ maxWidth: "130px" }}
                />
              </a>
            </Box>
          </Grid>
          <Grid item xs={6} md={3}>
            <Typography variant="caption" color="#ffffff">
              Follow us
            </Typography>
            <Box pt={2}>
              <a href="https://www.instagram.com/wisey_app/">
                <img
                  src={instagram}
                  alt="Instagram"
                  style={{ paddingRight: "10px" }}
                />
              </a>
              <a href="https://www.youtube.com/channel/UC5gaidrIGV3c6Ex2ZTLuBZA">
                <img src={youtube} alt="Youtube" />
              </a>
            </Box>
          </Grid>
        </Grid>
        <Grid
          container
          flexDirection="column"
          alignItems="center"
          pt={3}
          pb={2}
        >
          <Box>
            <Typography variant="caption" color="#ffffff">
              Koflimin Limited 26 Stavrou Street, Strovolos 2034, Nicosia
            </Typography>
          </Box>
          <Box>
            <Typography variant="caption" color="#ffffff">
              © 2022 Wisey. All rights reserved
            </Typography>
          </Box>
        </Grid>
      </Container>
    </Grid>
  );
};
