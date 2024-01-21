import { Box, CardContent, CardMedia, Typography, autocompleteClasses } from "@mui/material"

import { CheckCircle } from "@mui/icons-material"
import { Link } from "react-router-dom"

import { demoProfilePicture } from "../utils/constants"


const ChannelCard = ({channelDetail}) => {
  return (
    <Box
      sx={{
        boxShadow: 'none',
        borderRadius: '20px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: { xs: '356px', md: '320px'},
        height: '326px',
        margin: 'auto'
      }}
    >
      <Link to={`channel/${channelDetail?.id?.channelId}`}>
        <CardContent sx={{
          display: 'flex', flexDirection: 'column', justifyContent: 'center',
          textAlign: 'center', color: '#fff', 
        }}>
          <CardMedia
            component="img"
            image={channelDetail?.snippet?.thumbnails?.high?.url || demoProfilePicture}
            alt={channelDetail?.snipped?.title}
            sx={{
              borderRadius: '50%', height: '180px', with: '180px',
              mb: 2, border: '1px solid', boxShadow: '5px 5px 10px rgba(255, 255, 255, 0.2)'
            }}
          />
        </CardContent>
        <Typography variant="h6" sx={{color: '#fff'}}>
            {channelDetail?.snippet?.title}
            <CheckCircle sx={{fontSize: 14, color: 'gray', ml: 5}} />
        </Typography>

        {channelDetail?.stadistics?.subscriberCount && 
          <Typography>
            {parseInt(channelDetail?.stadistics?.subscriberCount).toLocaleString()} Subcribers
          </Typography>
        }
      </Link>
    </Box>
  )
}

export default ChannelCard
