import React from "react";
import { Card, CardContent, CardMedia, Typography, Button, Grid } from "@material-ui/core";
import Image from "next/image";

{/* Import projects images */}
import fcc from '../public/assets/fcclogo.png';
import ututo from '../public/assets/ututo.png'

function OpenSource() {
  return (
    <div id="opensource" className="w-full md:h-screen p-2 pt-16">
      <div className="max-w-[1240px] m-auto">
        <p className="uppercase text-xl tracking-widest text-[#000] mb-5">Open Source Projects</p>
        <p className="py-2 text-gray-600">
          I am passionate about contributing to open source projects and actively participate in various initiatives within the community. My involvement ranges from submitting code enhancements, fixing bugs, and collaborating with fellow developers to improve the overall functionality and usability of different projects. 
        </p>
        <br/>
        <Grid container spacing={2}>
        <Grid item xs={12} sm={6} md={3}>
            <Card>
              <CardContent>
                <Typography variant="h6" color="textPrimary" gutterBottom>
                  Chief Coordinator <br/>at Ututo
                </Typography>
                <CardMedia style={{ width: '100%', height: '150px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <Image src={ututo} alt="Ututo Logo" width={300} height={150} />
                </CardMedia>
                <br/>
                <Button variant="contained" color="primary" href="https://ututo.ar" target="_blank" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  View Project
                </Button>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Card>
              <CardContent>
                <Typography variant="h6" color="textPrimary" gutterBottom>
                  Community Writer <br/>at Free Code Camp
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
          {/* Repeat the above Grid item structure for other cards */}
        </Grid>
      </div>
    </div>
  );
}

export default OpenSource;
