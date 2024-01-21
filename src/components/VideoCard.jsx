import { Link } from "react-router-dom"
import { Typography, Card, CardContent, CardMedia } from "@mui/material"
import { CheckCircle } from "@mui/icons-material"

import { demoThumbnailUrl, demoVideoUrl, demoVideoTitle, demoChannelTitle, demoChannelUrl } from "../utils/constants"

const VideoCard = ({video: {id: {videoId}, snippet }}) => {
  
  
  return (
    <Card sx={{width: { md: '320px', xs: '100%'}, 
    boxShadow: '5px 5px 10px rgba(255, 255, 255, 0.2)', borderRadius: '10px'}}>
      <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
        <CardMedia
          component="img"
          image={snippet?.thumbnails?.high?.url}
          alt={snippet?.title}
          sx={{width: 358, height: 180}}
        >
        </CardMedia>
      </Link>
      <CardContent sx={{
        backgroundColor: '#1e1e1e',
        height: '106px',
        fontFamily: "'Roboto', sans-serif",
      }}> 
        <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
          <Typography variant="subtitle" fontWeight="bold" color="#FFF">
            {snippet?.title.slice(0, 60) || demoVideoTitle.slice(0, 60)}
          </Typography>
        </Link>
        <br />
        <Link to={snippet?.channelId ? `/channel/${snippet?.channelId}` : demoChannelUrl}>
          <Typography variant="subtitle" fontWeight="bold" color="gray">
            {snippet?.channelTitle || demoChannelTitle}
            <CheckCircle sx={{fontSize: 12, color: 'gray', ml: 5}} />
          </Typography>
        </Link>
      </CardContent>
    </Card>
  )
}

export default VideoCard
