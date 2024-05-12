import React from 'react';
import CustomizedTables from "./components/CustomizedTables";
import CollapsibleTable from "./components/CollapsibleTable";

function Page2Fragment() {
    return (
        <div className={' flex flex-col justify-between items-center'}>
            <CustomizedTables/>
            <CollapsibleTable/>
        </div>
    );
}

export default Page2Fragment;