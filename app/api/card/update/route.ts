// app/api/user/route.ts
import { NextResponse } from 'next/server';
import client from '@/db';
import { TaskCardProps } from '@/components/TaskCard';

// export async function GET(request: Request) {
//     //   const { username, password } = await request.json();
//     return NextResponse.json({ success: true }, { status: 200 });
// }

async function updatecard({ id, tag, heading, description, notes, carduser, date }: Partial<TaskCardProps>) {
    try {
        // Perform database update logic here
        const res = await client.card.update({
            where: { id },
            data: { tag, heading, description, notes, carduser, date },
        });

        // Log the result
        // console.log(res);

        return true; // Indicate success
    } catch (error) {
        console.error('Error updating card:', error);
        return false; // Indicate failure
    }
}

//update db 
export async function POST(request: Request) {
    const requestData: Partial<TaskCardProps> = await request.json();
    try {
        // const requestdata = await request.json();
        //   return NextResponse.json({ success: true }, { status: 200 });
        const success = await updatecard(requestData);
        if (success) {
            return NextResponse.json({ message: "Card updated successfully" });
        } else {
            return NextResponse.json({ message: "Failed to update card" });
        }
    } catch (e) {
        return NextResponse.json({ message: "error in request" });
    }
}