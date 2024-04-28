import React from 'react';
import { Box, Text } from 'native-base';
import SectionHeader from './section-header';
import CleanBroomIcon from './icons/clean-broom-icon';
import RepairingIcon from './icons/repairing-tool-icon';
import PaintingIcon from './icons/painting-icon';
import LaundryIcon from './icons/laundry-icon';
import ApplianceIcon from './icons/appliance-icon';
import PlumbingIcon from './icons/plumbing-icon';
import MoversIcon from './icons/movers-icon';
import SaloonIcon from './icons/saloon-icon';
import { Pressable } from 'react-native';

export default function Categories() {

    const data = [
        {
            title: "Cleaning",
            icon: <CleanBroomIcon size={24} />
        },
        {
            title: "Repairing",
            icon: <RepairingIcon size={24} />
        },
        {
            title: "Painting",
            icon: <PaintingIcon size={24} />
        },
        {
            title: "Laundry",
            icon: <LaundryIcon size={24} />
        },
        {
            title: "Appliance",
            icon: <ApplianceIcon size={24} />
        },
        {
            title: "Plumbing",
            icon: <PlumbingIcon size={24} />
        },
        {
            title: "Movers",
            icon: <MoversIcon size={24} />
        },
        {
            title: "Saloon",
            icon: <SaloonIcon size={24} />
        }
    ];

    const Category = ({ title, icon }: any) => {
        return (
            <Pressable style={{ margin: 5, marginTop: 10}}>
                <Box bg="#000000" borderRadius="full" width={12} height={12} justifyContent="center" alignItems="center" marginBottom={3}>
                    {icon}
                </Box>
                <Text textAlign="center">{title}</Text>
            </Pressable>
        );
    }

    return (
        <Box mt="5">
            <SectionHeader title="Categories" />
            <Box mt="3" flexDirection="row" flexWrap="wrap" justifyContent="space-between">
                {data.map((item, index) => (
                    <Category key={index} title={item.title} icon={item.icon} />
                ))}
            </Box>
        </Box>
    );
}
