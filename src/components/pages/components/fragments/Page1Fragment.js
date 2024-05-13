import React from 'react';
import BasicTable from "../tables/BasicTable";
import DataTable from "../tables/DataTable";
import DenseTable from "../tables/DenseTable";
import EnhancedTable from "../tables/EnhancedTableHead";
import CustomizedTables from "../tables/CustomizedTables";
import CollapsibleTable from "../tables/CollapsibleTable";


const Page1Fragment = () => {
    return (
        <div className={' flex flex-col justify-between items-center'}>
            <BasicTable/>
            <DataTable/>
            <DenseTable/>
            <EnhancedTable/>
            <CustomizedTables/>
            <CollapsibleTable/>
        </div>
    );
};

export default Page1Fragment;