import Button from '@material-ui/core/Button';
import ArrowRight from '@material-ui/icons/ArrowRight';
import xlsx from 'json-as-xlsx';
import { MDBDataTable } from 'mdbreact';
import React, { useEffect, useState } from 'react';
import ApiService from '../../services/apiService';
const TablePage = () => {
    const [results, setResults] = useState([]);

    function exportData() {

        const excelData = [
            {
                sheet: "Covid Data",
                columns: data.columns.map(r => ({ label: r.label, value: r.field })),
                content: results,
            }
        ]

        let settings = {
            fileName: "Covid Data",
            extraLength: 3,
            writeOptions: {},
        }
        let callback = function (sheet) {
            console.log("Download complete:", sheet)
        }

        xlsx(excelData, settings, callback)
    }
    useEffect(() => {
        const loadResults = async () => {

            const response = await ApiService.getAllData();
            const data = JSON.parse(await response.text()).data
            // After fetching data stored it in posts state.
            for (let item of data) {
                for (let field in item) {
                    // eslint-disable-next-line
                    if (item[field] == true || item[field] == false) {
                        item[field] = !!item[field] ? 'Y' : 'N'
                    }
                }
            }
            setResults(data);

        }

        // Call the function
        loadResults();
    }, []);
    const data = {
        columns: [
            {
                label: 'First Name',
                field: 'first_name',
                sort: 'asc',
            },
            {
                label: 'Last Name',
                field: 'last_name',
                sort: 'asc',
            },
            {
                label: 'Date Of Birth',
                field: 'date_of_birth',
                sort: 'asc',
            },
            {
                label: 'Address',
                field: 'address',
                sort: 'asc',
            },
            {
                label: 'City',
                field: 'city',
                sort: 'asc',
            },
            {
                label: 'Zipcode',
                field: 'zipcode',
                sort: 'asc',
            },
            {
                label: 'Landline',
                field: 'landline',
                sort: 'asc',
            },
            {
                label: 'Phone',
                field: 'phone',
                sort: 'asc',
            },
            {
                label: 'Infected',
                field: 'infected',
                sort: 'asc',
            },
            {
                label: 'Extra',
                field: 'extra',
                sort: 'asc',
            },


        ],
    };

    return (
        <div style={{ display: 'flex', flexDirection: 'column' }}>
            <Button variant="contained" endIcon={<ArrowRight />} onClick={() => { exportData() }}
                style={{ alignItems: 'right' }}>
                Export to Excel
            </Button>
            <MDBDataTable
                striped
                bordered
                small
                data={{ ...data, rows: results }}
            >


            </MDBDataTable>
        </div>
    );
}

export default TablePage;