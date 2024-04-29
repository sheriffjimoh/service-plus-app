import React from 'react';
import { Box, Stack } from 'native-base';
import SectionHeader from './section-header';
import ServiceCard from './service-card';
import services from '../services.json'
export default function Recommendation() {

    return (
        <Box mt="5">
        <SectionHeader title="Recommended services" />
        <Stack space={4} >
            {services.map((service, index) => (
                <ServiceCard
                    key={index}
                    imageSource={service.imageSource}
                    cleanerName={service.cleanerName}
                    service={service.service}
                    price={service.price}
                    rating={service.rating}
                    reviews={service.reviews}
                />
            ))
         }
         
           
        </Stack>
        
    </Box>
    );
}