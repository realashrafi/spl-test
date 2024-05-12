import React from 'react';
import BasicTable from "./components/BasicTable";
import DataTable from "./components/DataTable";
import DenseTable from "./components/DenseTable";
import EnhancedTable from "./components/EnhancedTableHead";
import CustomizedTables from "./components/CustomizedTables";
import CollapsibleTable from "./components/CollapsibleTable";


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