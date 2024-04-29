import React from 'react';
import { NativeBaseProvider, Box, Stack,} from "native-base";
import { useNavigation } from '@react-navigation/native';
import SectionHeader from '../../components/section-header';
import { ScrollView } from 'react-native';
import services from '../../services.json';
import CustomButton from '../../components/custome-button';
import ServiceCard from '../../components/service-card';
import ScreenHeader from '../../components/screen-header';

export default function BookmarkScreen() {
  const navigation = useNavigation();

 
    const data = [ "All","Cleaning","Repairing","Painting", "Laundry", "Appliance", "Plumbing", "Movers", "Saloon"];

    return (
        <Box py="5" bg="white" px="5" height="full">
          <ScreenHeader title="My  BookMark" />
        <Box>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        <Stack direction="row" space={4} >
            {data.map((item, index) => (
                <CustomButton key={index}  isActive={item =="All"} text={item} onPress={() => console.info('pressed')} />
            ))}
             </Stack>
        </ScrollView>
        </Box>
       

       <ScrollView showsVerticalScrollIndicator={false}>
      
        <Stack space={4} mt="4"  height="full">
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
        </ScrollView>
        
    </Box>
    );
}
  