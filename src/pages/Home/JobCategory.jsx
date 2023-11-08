import axios from 'axios';
import { useEffect, useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import CategoryItems from './CategoryItems';
// import PropTypes from 'prop-types';

const JobCategory = () => {
    const [jobs, setJobs] = useState([])
    const [defaultCategory, setDefaultCategory] = useState('web-development');
    const handleCategory = (category) => {
        axios.get(`http://localhost:5000/jobs/${category}`, { withCredentials: true })
            .then(res => {
                setJobs(res.data)
            })
    }
    useEffect(() => {
        setDefaultCategory('web-development')
        handleCategory(defaultCategory);
    }, [defaultCategory]);
    return (
        <div className='my-16'>
            <Tabs>
                <TabList>
                    <Tab onClick={() => handleCategory('web-development')}>web development</Tab>
                    <Tab onClick={() => handleCategory('digital-marketing')}>digital marketing</Tab>
                    <Tab onClick={() => handleCategory('graphics-design')}>graphics design</Tab>
                </TabList>

                <TabPanel>
                    <div className='grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-5 mt-5'>
                        {
                            jobs.map((job, idx) => <CategoryItems key={idx} job={job}></CategoryItems>)
                        }
                    </div>
                </TabPanel>
                <TabPanel>
                    <div className='grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-5 mt-5'>
                        {
                            jobs.map((job, idx) => <CategoryItems key={idx} job={job}></CategoryItems>)
                        }
                    </div>
                </TabPanel>
                <TabPanel>
                    <div className='grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-5 mt-5'>
                        {
                            jobs.map((job, idx) => <CategoryItems key={idx} job={job}></CategoryItems>)
                        }
                    </div>
                </TabPanel>
            </Tabs>
        </div>
    );
};

JobCategory.propTypes = {

};

export default JobCategory;