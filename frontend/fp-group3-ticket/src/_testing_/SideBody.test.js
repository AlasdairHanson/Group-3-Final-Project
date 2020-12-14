import React from 'react';
import { create } from 'react-test-renderer';
import SideBody from '../Components/SideBar/SideBody';

describe(`Side body render tests with content`, () => {

    const ticketData = { 
        id: 1,
        acc_id: 2,
        title: "Title", 
        topic: "Topic", 
        desc: "Description", 
        time: "Time",
        status: "Status",
        trainee: "Trainee",
        trainer: "Trainer",
        priority: "Priority",
        cohort: "Cohort"
    }
    
    let testedSideBody;

    it(`Should render "Text" in Side Body p tag`, () => {
        const TestInstance = create(<SideBody {...ticketData}/>)
        testedSideBody = TestInstance.root;
        const ptag = testedSideBody.findByType(`p`);
        expect(ptag.children).toEqual([ticketData.priority]);
    });

})