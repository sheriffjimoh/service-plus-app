import { Box, Text, Button } from 'native-base';
import React from 'react';

export default function SectionHeader({ title } : any) {
    return (
        <Box flexDirection="row" justifyContent="space-between">
          <Text fontSize="18px" fontWeight="500" color="#000" mb={3}>{ title }</Text>
            <Button size="sm" variant="ghost" colorScheme="primary">
              <Text fontSize="14px"  fontWeight="400">  View All</Text>
            </Button>
        </Box>
    );
    }