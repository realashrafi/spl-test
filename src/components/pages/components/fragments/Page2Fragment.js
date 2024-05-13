import React from 'react';
import CustomizedTables from "../tables/CustomizedTables";
import CollapsibleTable from "../tables/CollapsibleTable";

function Page2Fragment() {
    return (
        <div className={' flex flex-col justify-between items-center'}>
            <CustomizedTables/>
            <CollapsibleTable/>
        </div>
    );
}

export default Page2Fragment;