// app/signup/page.tsx

import CreateNewButton from "@/components/CreateNewButton";
import TaskCard from "@/components/TaskCard";
import client from '@/db';

async function getCardDetails(){
    try{
        const cards = await client.card.findMany({});
        return cards;
    }
    catch(e){
        console.log(e);
        return [];
    }
}

export default async function Home() {
    const cardsData = await getCardDetails();
    console.log(cardsData);
    cardsData.sort((a, b) => a.id - b.id);
    return (
        <div>
            <div className="flex my-8 justify-center">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-16 justify-center">
                    {/* <h1>Sign Up</h1> */}
                    {cardsData.map((card) => (
                        <TaskCard key={card.id} id={card.id} tag={card.tag} heading={card.heading} description={card.description} notes={card.notes} carduser={card.carduser} date={card.date} apiRouteURL="api/card/update"/>
                    ))}
                    {/* Add your sign-up form or content here */}
                </div>
            </div>
            <div className="fixed bottom-0 right-0 h-32 w-24 ">
                    <CreateNewButton title="+" />                
            </div>
        </div>
    );
}