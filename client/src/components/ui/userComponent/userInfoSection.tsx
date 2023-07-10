import UserStyle from "./_user.module.scss"
import TableStyles from "../table/_table.module.scss"
import TableRow from "../table/tablebody";

type userInfoSectionProps = {
    tableHeader: Array<string>;
    tableClass?: string;
    tableHeaderClass?: string;
    tableTitleClass?: string;
    tableTitle?: string;
    tableHeaderContainerClass?: string;
    tableContainerClass?: string;
    tdatas: Array<string>;
    secondTableHeader?: Array<string>;
    secondTableDatas?: Array<string>;
}
const UserInfoSection = (props: userInfoSectionProps) => {

    /* Dividing the Table Row into 2 to fit the design specification */
    
    const theadRowOne = props.tableHeader?.length >= 8 ? props.tableHeader?.slice(0, 5) : props.tableHeader?.slice(0, 4);
    const tdataRowOne = props.tdatas?.length >= 8 ? props.tdatas?.slice(0, 5) : props.tdatas?.slice(0, 4);

    const theadRowSecond = props.tableHeader?.length >= 8 ? props.tableHeader?.slice(5, props.tableHeader.length) : props.tableHeader?.slice(4, props.tableHeader.length);


    const tdataRowSecond = props.tdatas?.length >= 8 ? props.tdatas?.slice(5, props.tdatas.length) : props.tdatas?.slice(4, props.tdatas.length);

    /* If the Table Data is greater than 5 then, we should have a second Row since the maximun th and td are 5 */
    const secondRow = (props.tableHeader.length > 5 && props.tdatas.length > 5) ? true : false;

    return (
        <section className={`${TableStyles.table_container} ${UserStyle.tableContainer} `}>
            <div className={UserStyle.userDetails__sectionTitle}>{props.tableTitle}</div>

            <table className={UserStyle.table}>
                <thead>
                    <tr className={UserStyle.tableHeaderRow}>
                        {theadRowOne.map((header: string, index: number) => {
                            return (
                                <th
                                    key={index}
                                    className={UserStyle.thead}
                                >
                                    {header}
                                </th>
                            );
                        })}
                    </tr>
                </thead>
                <tbody>
                    <TableRow tableRowClass={`${UserStyle.tableHeaderRow}`}>
                        {tdataRowOne?.map((td, index) => {
                            return <td key={index}>{td}</td>
                        })}
                    </TableRow>
                </tbody>
            </table>

            {secondRow && <table className={`${UserStyle.table} mt-1`}>
                <thead>
                    <tr className={`${UserStyle.tableHeaderRow}`}>
                        {theadRowSecond?.map((header: string, index: number) => {
                            return (
                                <th
                                    key={index}
                                    className={UserStyle.thead}
                                >
                                    {header}
                                </th>
                            );
                        })}
                    </tr>
                </thead>
                <tbody>
                    <TableRow tableRowClass={`${UserStyle.tableHeaderRow}`}>
                        {tdataRowSecond?.map((td, index) => {
                            return <td key={index}>{td}</td>
                        })}
                    </TableRow>
                </tbody>
            </table>}
        </section>
    )
}

export default UserInfoSection