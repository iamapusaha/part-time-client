import axios from 'axios';
import { useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import CategoryItems from './CategoryItems';
// import PropTypes from 'prop-types';

const JobCategory = () => {
    const [jobs, setJobs] = useState([])
    const handleCategory = (category) => {
        axios.get(`http://localhost:5000/jobs/${category}`)
            .then(res => {
                setJobs(res.data)
            })
    }
    return (
        <div>
            <Tabs>
                <TabList>
                    <Tab onClick={() => handleCategory('web-development')}>web development</Tab>
                    <Tab onClick={() => handleCategory('digital-marketing')}>digital marketing</Tab>
                    <Tab onClick={() => handleCategory('graphics-design')}>graphics design</Tab>
                </TabList>

                <TabPanel>
                    {
                        jobs.map(job => <CategoryItems key={job.id} job={job}></CategoryItems>)
                    }
                </TabPanel>
                <TabPanel>
                    {
                        jobs.map(job => <CategoryItems key={job.id} job={job}></CategoryItems>)
                    }
                </TabPanel>
                <TabPanel>
                    {
                        jobs.map(job => <CategoryItems key={job.id} job={job}></CategoryItems>)
                    }
                </TabPanel>
            </Tabs>
        </div>
    );
};

JobCategory.propTypes = {

};

export default JobCategory;