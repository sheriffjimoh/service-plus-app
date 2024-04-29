import React from 'react';
import {  Box, Stack,} from "native-base";
import { ScrollView } from 'react-native';
import CustomButton from '../../components/custome-button';
import ServiceCard from '../../components/service-card';
import ScreenHeader from '../../components/screen-header';
import { useStateContext } from '../../context/StateContext';
import { services } from "../../utils"


export default function BookmarkScreen() {
  
    const { serviceData } = useStateContext();
    return (
        <Box py="5" bg="white" px="5" height="full">
          <ScreenHeader title="My  BookMark" />
        <Box>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        <Stack direction="row" space={4} >
            {services.map((item, index) => (
                <CustomButton key={index}  isActive={item =="All"} text={item} onPress={() => console.info('pressed')} />
            ))}
             </Stack>
        </ScrollView>
        </Box>
       

       <ScrollView showsVerticalScrollIndicator={false}>
      
        <Stack space={4} mt="4"  height="full">
            {serviceData?.map((service: { imageSource: any; cleanerName: any; service: any; price: any; rating: any; reviews: any; }, index: any) => (
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
        </ScrollView>
        
    </Box>
    );
}
  