import React from "react";
import { Card, CardContent, CardMedia, Typography, Button, Grid } from "@material-ui/core";
import Image from "next/image";

{/* Import projects images */}
import Slack from '../public/assets/slack.png';
import fcc from '../public/assets/fcclogo.png';

function OpenSource() {
  return (
    <div id="opensource" className="w-full md:h-screen p-2 pt-16">
      <div className="max-w-[1240px] m-auto">
        <p className="uppercase text-xl tracking-widest text-[#000] mb-5">Open Source Projects</p>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6} md={3}>
            <Card>
              <CardContent>
                <Typography variant="h6" color="textPrimary" gutterBottom>
                  Contributing Writer at Free Code Camp
                </Typography>
                <CardMedia style={{ width: '100%', height: '150px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <Image src={fcc} alt="Free Code Camp Logo" width={300} height={150} />
                </CardMedia>
                <br/>
                <Button variant="contained" color="primary" href="https://www.freecodecamp.org/news/author/jpromanonet" target="_blank" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  View Project
                </Button>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Card>
              <CardContent>
                <Typography variant="h6" color="textPrimary" gutterBottom>
                  Maintainer at Slackware Argentina
                </Typography>
                <CardMedia style={{ width: '100%', height: '150px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <Image src={Slack} alt="Slackware Logo" width={150} height={150} />
                </CardMedia>
                <br/>
                <Button variant="contained" color="primary" href="https://github.com/slack-ar" target="_blank" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  View Project
                </Button>
              </CardContent>
            </Card>
          </Grid>
          {/* Repeat the above Grid item structure for other cards */}
        </Grid>
      </div>
    </div>
  );
}

export default OpenSource;
