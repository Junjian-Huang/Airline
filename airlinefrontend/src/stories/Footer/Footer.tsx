import React from "react";
import { FooterSocialIcon, SocialIconProps } from "../SocialIcon/SocialIcon";
import { Box, Grid, Hidden, Link } from "@material-ui/core";
import {
  SOCIAL_MEDIA,
  LinkedIn_LOGO,
  PRIVACY_POLICY,
  TERMS_OF_USE,
} from "../assets/Resources/resources";

import "./Footer.css";

export const Footer = () => {

    return (
        <footer className="footer">
            <Hidden xsDown>
                <Grid container direction="row" justifyContent="space-between" alignItems="flex-start" spacing={4}>
                    <Grid item xs={4}>
                        <FooterSocialIcon {...LinkedIn_LOGO} />
                        {`Copyright © MSA Student Junjian Huang, 2021. All rights reserved`}
                    </Grid>
                    <Grid item xs={4}>
                        {SOCIAL_MEDIA.map((icon: SocialIconProps) => {
                            return (
                                <FooterSocialIcon key={icon.name} {...icon} />
                            )
                        })}
                    </Grid>
                </Grid>
            </Hidden>
            {/* Mobile view of footer, looks very different :) */}
            <Hidden smUp>
                <Grid container direction="column" >
                    <Grid item>
                        <Grid container direction="column" justifyContent="space-between" spacing={3}>
                            <Grid item>
                                <Box marginLeft={2}>
                                    {`© JJ Huang MSA Airline project 2021`}
                                </Box>
                            </Grid>
                            <Grid item>
                                <Link color="inherit" href={PRIVACY_POLICY}>Privacy policy</Link>
                            </Grid>
                            <Grid item>
                                <Link color="inherit" href={TERMS_OF_USE}>Terms of use</Link>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item>
                        <Box marginLeft={8}>
                            {SOCIAL_MEDIA.map((icon: SocialIconProps) => {
                                return (
                                    <FooterSocialIcon key={icon.name} {...icon} />
                                )
                            })}
                        </Box>
                    </Grid>
                </Grid>
            </Hidden>
        </footer >
    );
}

