import TaskCard from "@/components/TaskCard";

export default async function Home() {

    return(
        <div>
            <div className="flex my-8 justify-center">        
                <TaskCard tag="Tag" heading={"Heading"} description={"enter text"} notes={"enter text"} carduser={"user_name"} date={"DD/MM"} apiRouteURL="api/card/create"></TaskCard>
            </div>
        </div>
    )

}