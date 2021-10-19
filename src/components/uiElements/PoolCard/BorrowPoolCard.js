import React from 'react'
import './style.css'
import { useHistory } from 'react-router-dom'

export default function BorrowPoolCard({item, size, showModal2, openModal2, showModal3, openModal3}) {

    const history = useHistory();

    const poolStatus = {
        status_1 : 'Active',
        status_2 : 'Grace Period',
        status_3 : 'Collecting',
        status_4 : 'Closed',
        status_5 : 'Defaulted',
        status_6 : 'Cancelled',
        status_7 : 'Terminated',
        
    }

    const repayFunc = (e, data) => {
        openModal2();
    }

    const addCollateralFunc = (data) => {
        openModal3();
    }

    const viewMoreFunc = (data) => {
        history.push('/borrow-pool-details-grace')
    }   

  

    return (
        <React.Fragment>
            <div className={`poolCard poolCard${size}`}>
                <div className="poolCardUserLine">
                    <div className="poolCardUserAvatar">
                    
                    </div>
                    <div className="poolCardUserName">
                        {item.name}
                    </div>
                    <div className="poolCardUserUsername">
                        {item.username}
                    </div>

                    <div className="poolCardUserPoolDetails">
                        <div className="poolCardUserPoolType">
                            {item.pool_type}
                        </div>

                        {item.pool_status === poolStatus.status_1 ? 
                            <div className="poolCardUserPoolStatus poolCardUserPoolStatusActive">
                                {item.pool_status}
                            </div> : ''
                        }

                        {item.pool_status === poolStatus.status_2 ? 
                            <div className="poolCardUserPoolStatus poolCardUserPoolStatusGrace">
                                {item.pool_status}
                            </div> : ''
                        }


                        {item.pool_status === poolStatus.status_3 ? 
                            <div className="poolCardUserPoolStatus poolCardUserPoolStatusCollecting">
                                {item.pool_status}
                            </div> : ''
                        }

                        {item.pool_status === poolStatus.status_4 ? 
                            <div className="poolCardUserPoolStatus poolCardUserPoolStatusClosed">
                                {item.pool_status}
                            </div> : ''
                        }

                        {item.pool_status === poolStatus.status_5 ? 
                            <div className="poolCardUserPoolStatus poolCardUserPoolStatusDefaulted">
                                {item.pool_status}
                            </div> : ''
                        }

                        {item.pool_status === poolStatus.status_6 ? 
                            <div className="poolCardUserPoolStatus poolCardUserPoolStatusCancelled">
                                {item.pool_status}
                            </div> : ''
                        }

                        {item.pool_status === poolStatus.status_7 ? 
                            <div className="poolCardUserPoolStatus poolCardUserPoolStatusTerminated">
                                {item.pool_status}
                            </div> : ''
                        }

                        

                        
                        
                    </div>


                </div>
                <div className="poolCardLine">
                    <div className="poolCardLineHint">
                    Borrow Rate
                    </div>
                    <div className="poolCardLineValue">
                    {item.borrow_rate}
                    </div>
                </div>

                <div className="poolCardLine">
                    <div className="poolCardLineHint">
                    Borrowed Amount
                    </div>
                    <div className="poolCardLineValue">
                    {item.borrowed_amount}
                    </div>
                </div>



                {item.pool_status === poolStatus.status_1 ? 

                    <React.Fragment>

                    <div className="poolCardLine">
                        <div className="poolCardLineHint">
                        Next Payment
                        </div>
                        <div className="poolCardLineValue">
                        {item.next_payment}
                        </div>
                    </div>

                     <div className="poolCardLine">
                        <div className="poolCardLineHint">
                        Repayment progress
                        </div>
                        <div className="poolCardLineValue">
                        {item.progress_and_payment}

                            <div className="poolCardProgressLine">
                                <div style={{width: item.progress_and_payment}} className="poolCardProgressLineInner">
                                
                                </div>
                            </div>

                        </div>
                    </div>

                    <div className="poolCardButtonWrapper">

                        <div className="poolCardButton poolCardButtonActive poolCardButtonHalf" onClick={ (e) => repayFunc(e, 'data') }>
                            Repay
                        </div>

                        <div className="poolCardButton poolCardButtonView poolCardButtonHalf"  onClick={ item.pool_status === 'Collecting' ? () => history.push('/borrow-pool-details-collecting') : () => history.push('/borrow-pool-details-grace') }>
                            View more
                        </div>

                    </div>

                    </React.Fragment>

                    : ''
                
                }


                {item.pool_status === poolStatus.status_2 ? 

                    <React.Fragment>

                    <div className="poolCardLine">
                        <div className="poolCardLineHint">
                        Next Payment
                        </div>
                        <div className="poolCardLineValue">
                        {item.next_payment}
                        </div>
                    </div>

                    <div className="poolCardLine">
                        <div className="poolCardLineHint">
                        Repayment progress
                        </div>
                        <div className="poolCardLineValue">
                        {item.progress_and_payment}

                            <div className="poolCardProgressLine">
                                <div style={{width: item.progress_and_payment}} className="poolCardProgressLineInner">
                                
                                </div>
                            </div>

                        </div>
                    </div>

                    <div className="poolCardButtonWrapper">

                        <div className="poolCardButton poolCardButtonRepay poolCardButtonHalf" onClick={ (e) => repayFunc(e, 'data') }>
                            Repay
                        </div>

                        <div className="poolCardButton poolCardButtonView poolCardButtonHalf"  onClick={ item.pool_status === 'Collecting' ? () => history.push('/borrow-pool-details-collecting') : () => history.push('/borrow-pool-details-grace') }>
                            View more
                        </div>

                    </div>

                    

                    </React.Fragment>
            
                
                    : ''
                    
                }


                {item.pool_status === poolStatus.status_3 ?


                    <React.Fragment>
                        <div className="poolCardLine">
                            <div className="poolCardLineHint">
                            Collection progress
                            </div>
                            <div className="poolCardLineValue">
                            {item.progress_and_payment}

                                <div className="poolCardProgressLine">
                                    <div style={{width: item.progress_and_payment}} className="poolCardProgressLineInner">
                                    
                                    </div>
                                </div>

                            </div>
                        </div>

                        <div className="poolCardLine">
                            <div className="poolCardLineHint">
                            Ends in
                            </div>
                            <div className="poolCardLineValue">
                            {item.ends_date}
                            </div>
                        </div>


                        <div className="poolCardButtonWrapper">

                            <div className="poolCardButton poolCardButtonAdd poolCardButtonHalf" onClick={ () => addCollateralFunc('data') }>
                                Add collateral
                            </div>

                            <div className="poolCardButton poolCardButtonView poolCardButtonHalf"  onClick={ item.pool_status === 'Collecting' ? () => history.push('/borrow-pool-details-collecting') : () => history.push('/borrow-pool-details-grace') }>
                                View more
                            </div>

                        </div>

                  


                    </React.Fragment>

                    : ''
                
                }




                {item.pool_status === poolStatus.status_4 ?


                    <React.Fragment>

                        <div className="poolCardLine">
                            <div className="poolCardLineHint">
                            Repayment progress
                            </div>
                            <div className="poolCardLineValue">
                            {item.progress_and_payment}

                                <div className="poolCardProgressLine">
                                    <div style={{width: item.progress_and_payment}} className="poolCardProgressLineInner">
                                    
                                    </div>
                                </div>

                            </div>
                        </div>

                        <div className="poolCardLine">
                            <div className="poolCardLineHint">
                            Ended on
                            </div>
                            <div className="poolCardLineValue">
                            {item.ends_date}
                            </div>
                        </div>

                        <div className="poolCardButton poolCardButtonView" onClick={ () => viewMoreFunc('data') }>
                            View more
                        </div>

                    </React.Fragment>
                    
                    : ''

                }




                {item.pool_status === poolStatus.status_5 ?


                <React.Fragment>

                    <div className="poolCardLine">
                        <div className="poolCardLineHint">
                        Repayment progress
                        </div>
                        <div className="poolCardLineValue">
                        {item.progress_and_payment}

                            <div className="poolCardProgressLine">
                                <div style={{width: item.progress_and_payment}} className="poolCardProgressLineInner">
                                
                                </div>
                            </div>

                        </div>
                    </div>

                    <div className="poolCardLine">
                        <div className="poolCardLineHint">
                        Ended on
                        </div>
                        <div className="poolCardLineValue">
                        {item.ends_date}
                        </div>
                    </div>

                    <div className="poolCardButton poolCardButtonView" onClick={ () => viewMoreFunc('data') }>
                        View more
                    </div>

                </React.Fragment>

                : ''

                }



                {item.pool_status === poolStatus.status_6 ?


                <React.Fragment>

                    <div className="poolCardLine">
                        <div className="poolCardLineHint">
                        Repayment progress
                        </div>
                        <div className="poolCardLineValue">
                        {item.progress_and_payment}

                            <div className="poolCardProgressLine">
                                <div style={{width: item.progress_and_payment}} className="poolCardProgressLineInner">
                                
                                </div>
                            </div>

                        </div>
                    </div>

                    <div className="poolCardLine">
                        <div className="poolCardLineHint">
                        Ended on
                        </div>
                        <div className="poolCardLineValue">
                        {item.ends_date}
                        </div>
                    </div>

                    <div className="poolCardButton poolCardButtonView" onClick={ () => viewMoreFunc('data') }>
                        View more
                    </div>

                </React.Fragment>

                : ''

                }



                {item.pool_status === poolStatus.status_7 ?


                <React.Fragment>

                    <div className="poolCardLine">
                        <div className="poolCardLineHint">
                        Repayment progress
                        </div>
                        <div className="poolCardLineValue">
                        {item.progress_and_payment}

                            <div className="poolCardProgressLine">
                                <div style={{width: item.progress_and_payment}} className="poolCardProgressLineInner">
                                
                                </div>
                            </div>

                        </div>
                    </div>

                    <div className="poolCardLine">
                        <div className="poolCardLineHint">
                        Ended on
                        </div>
                        <div className="poolCardLineValue">
                        {item.ends_date}
                        </div>
                    </div>

                    <div className="poolCardButton poolCardButtonView" onClick={ () => viewMoreFunc('data') }>
                        View more
                    </div>

                </React.Fragment>

                : ''

                }


            </div>
        </React.Fragment>
    )
}
