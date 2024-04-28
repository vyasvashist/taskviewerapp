import { NextResponse } from 'next/server';
import client from '@/db';
// import { TaskCardProps } from '@/components/TaskCard';

export interface NewCardProps {
    id: number,
    tag?: string;
    heading?: string;
    description?: string;
    notes?: string;
    carduser: string;
    date? : string;
    apiRouteURL?:string;
}

async function createCard({ tag, heading, description, notes, carduser, date }: NewCardProps) {
    try {
        // Perform database update logic here
        const res = await client.card.create({
            data: { 
                tag, 
                heading, 
                description, 
                notes, 
                carduser, 
                date 
            },
        });

        // Log the result
        // console.log(res);

        return true; // Indicate success
    } catch (error) {
        console.error('Error updating card:', error);
        return false; // Indicate failure
    }
}

export async function POST(request: Request) {
    const requestData: NewCardProps = await request.json();
    console.log("request data is: ",requestData);
    try {
        // const requestdata = await request.json();
        //   return NextResponse.json({ success: true }, { status: 200 });
        const success = await createCard(requestData);
        if (success) {
            return NextResponse.json({ message: "Card updated successfully" });
        } else {
            return NextResponse.json({ message: "Failed to update card" });
        }
    } catch (e) {
        return NextResponse.json({ message: "error in request" });
    }
}