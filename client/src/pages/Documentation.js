import React, { useState, useEffect, useRef } from 'react';

function Documentation(){
    return(
        <div>
            <h1>Documentation: How to use this React App</h1>
            <p>To use this React App, all you need to do is fill out the forms, and click the add button below!. Some are optional, such as the fieldsets that have a 
                add button right next to the fields, so don't worry about filling those out unless you want to. Those fields also have a function to individually delete 
                the item that you added, so don't worry about messing up! But make sure that you fill out the necessary fields! Once you're done, you can see all a preview of 
                the information that you've added, so click on the "Generate PDF" button when you've decided to either print it or export it as a pdf. If you do end up wanting 
                to change some fields later on, or just want to tailor your resume according to the job you're applying for, you can always click on the delete button next to 
                that specific section. Have fun!
            </p>
        </div>
    );
}

export default Documentation;