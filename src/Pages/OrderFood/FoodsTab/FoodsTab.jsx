import { useState } from 'react';
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import FoodCardContainer from '../../Shared/FoodCardContainer/FoodCardContainer';
import './FoodTab.css'

const FoodsTab = () => {
    const [tabIndex, setTabIndex] = useState(0);
    return (
        <div className="my-20">
            <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
                <TabList>
                    <Tab>Salad</Tab>
                    <Tab>Pizza</Tab>
                    <Tab>Soups</Tab>
                    <Tab>Desserts</Tab>
                    <Tab>Drinks</Tab>
                </TabList>
                <TabPanel>
                    <FoodCardContainer categoryName='salad' />
                </TabPanel>
                <TabPanel>
                    <FoodCardContainer categoryName='pizza' />
                </TabPanel>
                <TabPanel>
                    <FoodCardContainer categoryName='soup' />
                </TabPanel>
                <TabPanel>
                    <FoodCardContainer categoryName='dessert' />
                </TabPanel>
                <TabPanel>
                    <FoodCardContainer categoryName='drinks' />
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default FoodsTab;