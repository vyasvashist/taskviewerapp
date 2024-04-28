
import { NextResponse } from 'next/server';
import client from '@/db';
import { NewCardProps } from '../create/route';

async function deleteCard({id}:NewCardProps) {
    try {
    const deleteUser = await client.card.delete({
        where: {id},
      })
      return true;
    }catch(e){
        console.error('Error updating card:', e);
        return false; // Indicate failure
    }
}

export async function POST(request: Request) {
    const requestData: NewCardProps = await request.json();
    console.log("request data is: ",requestData);
    try {
        // const requestdata = await request.json();
        //   return NextResponse.json({ success: true }, { status: 200 });
        const success = await deleteCard(requestData);
        if (success) {
            return NextResponse.json({ message: "Card updated successfully" });
        } else {
            return NextResponse.json({ message: "Failed to update card" });
        }
    } catch (e) {
        return NextResponse.json({ message: "error in request" });
    }
}