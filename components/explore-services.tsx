import React from 'react';
import { Box, Stack } from 'native-base';
import SectionHeader from './section-header';
import ServiceCard from './service-card';
import services from '../services.json'
import CustomButton from './custome-button';
import { ScrollView } from 'react-native';
export default function ExploreService() {

    // recreate this with only data, no icon 



    const data = [ "All","Cleaning","Repairing","Painting", "Laundry", "Appliance", "Plumbing", "Movers", "Saloon"];

    return (
        <Box mt="5">
        <SectionHeader title="Discover & Explore Services" />

        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        <Stack direction="row" space={4} >
            {data.map((item, index) => (
                <CustomButton key={index}  isActive={item =="All"} text={item} onPress={() => console.info('pressed')} />
            ))}
             </Stack>
            </ScrollView>
       
        <Stack space={4} mt="4" >
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