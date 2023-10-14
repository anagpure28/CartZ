import { Box, Heading, Text } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { Button, Result } from 'antd';

export default function NotFound() {
  return (
    <div>
      <Box textAlign="center" py={70} px={6}>
        <Result
          status="404"
          title="404"
          subTitle="Sorry, the server cannot find the requested resource"
          extra={<Link to="/"><Button type="primary">Back Home</Button></Link>}
        />
      </Box>
    </div>
  )
}