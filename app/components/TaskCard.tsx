"use client"

import { useState,useEffect } from "react";
import axios from 'axios'; 
import { useRouter } from 'next/navigation'



export interface TaskCardProps {
    id?: number,
    tag?: string;
    heading?: string;
    description?: string;
    notes?: string;
    carduser?: string;
    date? : string;
    apiRouteURL:string;
    // editModevalue?:boolean;
}
const TaskCard: React.FC<TaskCardProps> = ({ id, tag, heading, description, notes, carduser, date, apiRouteURL}) => {
    const [tagValue, setTagValue] = useState(tag);
    const [headingValue, setHeadingValue] = useState(heading);
    const [descriptionValue, setDescriptionValue] = useState(description);
    const [notesValue, setNotesValue] = useState(notes);
    const [carduserValue, setCardUserValue] = useState(carduser);
    const [dateValue, setDateValue] = useState(date);
    const [hasChanges, setHasChanges] = useState(false);
    const router = useRouter();
    
    //   const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    //     setInputValue(e.target.value);
    //   }
      // send tagValue and other S

    //   useEffect(() => {
    //     setHasChanges(
    //         tag !== tagValue ||
    //         heading !== headingValue ||
    //         description !== descriptionValue ||
    //         notes !== notesValue ||
    //         carduser !== carduserValue ||
    //         date !== dateValue
    //     );
    // }, [tag, tagValue, heading, headingValue, description, descriptionValue, notes, notesValue, carduser, carduserValue, date, dateValue]);
    
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>, setter: Function) => {
        setter(e.target.value);
        setHasChanges(true) // Set it has changes
    }
      const handleButtonClick = (apiRouteURL:string) => {
        console.log("api route URL is ",apiRouteURL);
        
        try{
            // Send a request to update the database
            axios.post(apiRouteURL, {
                id:id,
                tag:tagValue,
                heading: headingValue,
                description:descriptionValue,
                notes:notesValue,
                carduser:carduserValue,
                date:dateValue,
                // Add other updated variables here
            }).then(response => {
                // Handle success response
                console.log('Database updated successfully:', response.data);
                setHasChanges(false);
                router.push('/dashboard')
                alert("Success")
                router.refresh()
                
                // setHeadingValue(headingValue); // Reset input value
            }).catch(error => {
                // Handle error
                console.error('Error updating database:', error);
                alert("Error update Database")
                // router.push('/dashboard')
            });
        } catch(e){
            console.error('Error :', e);
        }
    };
    return (
        <div className="max-w-64 border-l-visible rounded-2xl border-2 border-slate h-[22rem]">
            <div className="px-6 py-2 DM_SANS " >
                <div className="my-3 ">
                    <input type="text"
                        className="w-full py-1 px-4 focus:outline-none bg-turquoiseLight border-none rounded-md  text-turquoise text:turquoise tracking-wide"
                        placeholder="Tag"
                        defaultValue={tag}
                        onChange={(e) => handleInputChange(e,setTagValue)}
                        
                    />
                </div>
                <div className="rounded-md my-2">
                    <input
                        className="w-full  focus:outline-none bg-transparent border-none font-medium text-lg text-black placeholder-black tracking-wide"
                        placeholder="Enter Text"
                        defaultValue={heading}
                        onChange={(e) => handleInputChange(e,setHeadingValue)}
                        
                    />
                    <textarea rows={4} className="my-1 block w-full text-sm font-light text-gray-500 focus:outline-none border-none rounded-lg border tracking-wide scrollbar resize-none"
                        placeholder="Description"
                        defaultValue={description}
                        onChange={(e) => handleInputChange(e,setDescriptionValue)}
                        
                    />
                </div>
                <div className="my-1">
                    <label htmlFor="textarea" className="text-sm text-gray-400 ">Notes:</label>
                    <textarea rows={3} className=" block w-full textarea text-sm text-gray font-light focus:outline-none border placeholder-black tracking-wide scrollbar resize-none"
                        placeholder="Type here"
                        defaultValue={notes}
                        onChange={(e) => handleInputChange(e,setNotesValue)}
                        
                    />
                </div>
                <div className="mt-6 ">
                    <div className="flex flex-wrap">
                        <div className="circle"></div>
                        <div className="ml-2 focus:outline-none text-sm ">
                            <input
                                className="ml-1 focus:outline-none w-20 border-none placeholder-black "
                                placeholder="to assigned "
                                defaultValue={carduser}
                                onChange={(e) => handleInputChange(e,setCardUserValue)}
                                
                            />
                        </div>
                        <input
                            className="ml-10 focus:outline-none w-12 border-none text-sm text-sm font-light text-gray-500 text-gray-500 "
                            placeholder="DD/MM "
                            defaultValue={date}
                            onChange={(e) => handleInputChange(e,setDateValue)}
                            
                        />
                    </div>
                </div>
                <div className="flex w-full justify-center mt-2">
                {(hasChanges) && (<button className="mr-20"
                    onClick={() => handleButtonClick(apiRouteURL)}
                >
                    <svg className="h-5 w-5 text-gray-700"  width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z"/>  <polyline points="9 11 12 14 20 6" />  <path d="M20 12v6a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2v-12a2 2 0 0 1 2 -2h9" /></svg>
                    {/* {editMode ? "Submit" : "Edit"} */}
                </button>)}

                <button
                className=""
                onClick={() => handleButtonClick("api/card/delete")}
                >
                    <svg className="h-4 w-4 text-gray-700"  width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z"/>  <line x1="4" y1="7" x2="20" y2="7" />  <line x1="10" y1="11" x2="10" y2="17" />  <line x1="14" y1="11" x2="14" y2="17" />  <path d="M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12" />  <path d="M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3" /></svg>
                </button>
                </div>
            </div>
        </div>
    )
}
// className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-2 rounded"
export default TaskCard;