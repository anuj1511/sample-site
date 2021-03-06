import React from 'react'
import { Avatar, AvatarGroup, Box, Divider, ImageList, ImageListItem, List, ListItem, ListItemAvatar, ListItemText, Typography } from '@mui/material'

const Rightbar = () => {
    return (
        <Box
            flex={2}
            p={2}
            sx={{
                display: {
                    xs: "none", sm: "block"
                }
            }}
        >
            <Box position="fixed" width={300}>
                <Typography variant="h6" sx={{ fontWeight: 300 }}>
                    Online Friends
                </Typography>
                <AvatarGroup max={7}>
                    <Avatar alt="Remy Sharp" src="https://source.unsplash.com/random/900×700/?fruit" />
                    <Avatar alt="Travis Howard" src="https://source.unsplash.com/random/900×700/?fruit" />
                    <Avatar alt="Cindy Baker" src="https://source.unsplash.com/random/900×700/?fruit" />
                    <Avatar alt="Agnes Walker" src="https://source.unsplash.com/random/900×700/?fruit" />
                    <Avatar alt="Trevor Henderson" src="https://source.unsplash.com/random/900×700/?fruit" />
                    <Avatar alt="Trevor Henderson" src="https://source.unsplash.com/random/900×700/?fruit" />
                    <Avatar alt="Trevor Henderson" src="https://source.unsplash.com/random/900×700/?fruit" />
                    <Avatar alt="Trevor Henderson" src="https://source.unsplash.com/random/900×700/?fruit" />
                    <Avatar alt="Trevor Henderson" src="https://source.unsplash.com/random/900×700/?fruit" />
                    <Avatar alt="Trevor Henderson" src="https://source.unsplash.com/random/900×700/?fruit" />
                </AvatarGroup>
                <Typography variant="h6" sx={{ fontWeight: 300 }} mt={2} mb={2}>
                    Latest Posts
                </Typography>
                <ImageList cols={3} rowHeight={150} gap={5}>
                    <ImageListItem m={3}>
                        <img
                            src="https://source.unsplash.com/random/900×700/?fruit"
                            loading="lazy"
                        />
                    </ImageListItem>
                    <ImageListItem>
                        <img
                            src="https://source.unsplash.com/random/900×700/?fruit"
                            loading="lazy"
                        />
                    </ImageListItem>
                    <ImageListItem>
                        <img
                            src="https://source.unsplash.com/random/900×700/?fruit"
                            loading="lazy"
                        />
                    </ImageListItem>
                </ImageList>
                <Typography variant="h6" sx={{ fontWeight: 300 }} mt={2} mb={2}>
                    Latest Conversations
                </Typography>
                <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
                    <ListItem alignItems="flex-start">
                        <ListItemAvatar>
                            <Avatar alt="Remy Sharp"
                                src="https://source.unsplash.com/random/900×700/?fruit" />
                        </ListItemAvatar>
                        <ListItemText
                            primary="Brunch this weekend?"
                            secondary={
                                <React.Fragment>
                                    <Typography
                                        sx={{ display: 'inline' }}
                                        component="span"
                                        variant="body2"
                                        color="text.primary"
                                    >
                                        Ali Connors
                                    </Typography>
                                    {" — I'll be in your neighborhood doing errands this…"}
                                </React.Fragment>
                            }
                        />
                    </ListItem>
                    <Divider variant="inset" component="li" />
                    <ListItem alignItems="flex-start">
                        <ListItemAvatar>
                            <Avatar alt="Travis Howard"
                                src="https://source.unsplash.com/random/900×700/?fruit" />
                        </ListItemAvatar>
                        <ListItemText
                            primary="Summer BBQ"
                            secondary={
                                <React.Fragment>
                                    <Typography
                                        sx={{ display: 'inline' }}
                                        component="span"
                                        variant="body2"
                                        color="text.primary"
                                    >
                                        to Scott, Alex, Jennifer
                                    </Typography>
                                    {" — Wish I could come, but I'm out of town this…"}
                                </React.Fragment>
                            }
                        />
                    </ListItem>
                    <Divider variant="inset" component="li" />
                    <ListItem alignItems="flex-start">
                        <ListItemAvatar>
                            <Avatar alt="Cindy Baker"
                                src="https://source.unsplash.com/random/900×700/?fruit" />
                        </ListItemAvatar>
                        <ListItemText
                            primary="Oui Oui"
                            secondary={
                                <React.Fragment>
                                    <Typography
                                        sx={{ display: 'inline' }}
                                        component="span"
                                        variant="body2"
                                        color="text.primary"
                                    >
                                        Sandra Adams
                                    </Typography>
                                    {' — Do you have Paris recommendations? Have you ever…'}
                                </React.Fragment>
                            }
                        />
                    </ListItem>
                </List>
            </Box>
        </Box>
    )
}

export default Rightbar