import react from "react";
export default function Column(props) {
    return (
        <>
            <tr>
                <td className='table-header text-center'>
                    {props.name}
                </td>
                <td valign='top' className='p-0 border'>
                    <table cellSpacing={'50'} width={'100%'}>
                        <tbody>
                            <tr>
                                <td className='text-center border-2'>
                                    1
                                </td>
                                <td className='text-center border-2'>
                                    two
                                </td>
                                <td className='text-center border-2'>
                                    3
                                </td>
                                <td className='text-center border-2'>
                                    4
                                </td>
                                <td className='text-center border-2'>
                                    5
                                </td>
                                <td className='text-center border-2'>
                                    6
                                </td>
                                <td className='text-center border-2'>
                                    7
                                </td>
                                <td className='text-center border-2'>
                                    8
                                </td>
                                <td className='text-center border-2'>
                                    9
                                </td>
                                <td className='text-center border-2'>
                                    10
                                </td>
                            </tr>
                            <tr>
                                <td className='text-center border-2'>
                                    eleven
                                </td>
                                <td className='text-center border-2'>
                                    12
                                </td>
                                <td className='text-center border-2'>
                                    13
                                </td>
                                <td className='text-center border-2'>
                                    14
                                </td>
                                <td className='text-center border-2'>
                                    fifteen
                                </td>
                                <td className='text-center border-2'>
                                    16
                                </td>
                                <td className='text-center border-2'>
                                    17
                                </td>
                                <td className='text-center border-2'>
                                    18
                                </td>
                                <td className='text-center border-2'>
                                    19
                                </td>
                                <td className='text-center border-2'>
                                    twenty
                                </td>
                            </tr>
                        </tbody>
                    </table>

                </td>
            </tr>
        </>
    )
}