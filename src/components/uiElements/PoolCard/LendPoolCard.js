import React from 'react'
import './style.css'
import { useHistory } from 'react-router-dom'





export default function LendPoolCard({openModal, item, size}) {

    const history = useHistory();

    const poolStatus = {
        status_1 : 'Active',
        status_2 : 'Collecting',
        status_3 : 'Closed',
        status_4 : 'Defaulted',
        status_5 : 'Cancelled',
        status_6 : 'Terminated',
        
    }

    const lendFunc = (data) => {
        openModal();
        //alert('Lend Operation')
    }

    const lendMoreFunc = (data) => {
        openModal();
        //alert('Lend More Operation')
    }

    const viewMoreFunc = (data) => {
       history.push('/lend-pool-details-collecting');
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
                            <div className="poolCardUserPoolStatus poolCardUserPoolStatusCollecting">
                                {item.pool_status}
                            </div> : ''
                        }

                        {item.pool_status === poolStatus.status_3 ? 
                            <div className="poolCardUserPoolStatus poolCardUserPoolStatusClosed">
                                {item.pool_status}
                            </div> : ''
                        }

                        {item.pool_status === poolStatus.status_4 ? 
                            <div className="poolCardUserPoolStatus poolCardUserPoolStatusDefaulted">
                                {item.pool_status}
                            </div> : ''
                        }

                        {item.pool_status === poolStatus.status_5 ? 
                            <div className="poolCardUserPoolStatus poolCardUserPoolStatusCancelled">
                                {item.pool_status}
                            </div> : ''
                        }

                        {item.pool_status === poolStatus.status_6 ? 
                            <div className="poolCardUserPoolStatus poolCardUserPoolStatusTerminated">
                                {item.pool_status}
                            </div> : ''
                        }

                                   
                    </div>


                </div>
            




                {item.pool_status === poolStatus.status_1 ? 

                    <React.Fragment>

                    <div className="poolCardLine">
                        <div className="poolCardLineHint">
                        Borrowed
                        </div>
                        <div className="poolCardLineValue">
                        {item.borrowed}
                        </div>
                    </div>

                    <div className="poolCardLine">
                        <div className="poolCardLineHint">
                        Repayment progress
                        </div>
                        <div className="poolCardLineValue">
                        {item.repayment_progress}

                            <div className="poolCardProgressLine">
                                <div style={{width: item.repayment_progress}} className="poolCardProgressLineInner">
                                
                                </div>
                            </div>

                        </div>
                    </div>

                    <div className="poolCardLine">
                        <div className="poolCardLineHint">
                        You lent
                        </div>
                        <div className="poolCardLineValue poolCardLineValueLent">
                        {item.lent}
                        </div>
                    </div>

                    <div className="poolCardLine">
                        <div className="poolCardLineHint">
                        Estimated end date
                        </div>
                        <div className="poolCardLineValue">
                        {item.estimated_end_date}
                        </div>
                    </div>

                    <div className="poolCardButton poolCardButtonView" onClick={ () => viewMoreFunc('data') }>
                            View more
                    </div>
                    </React.Fragment>

                    : ''
                
                }


                {item.pool_status === poolStatus.status_2 ? 

                    <React.Fragment>

                    {item.participating  === false ? 


                    <div className="poolCardLine">
                        <div className="poolCardLineHint">
                        Borrow Rate
                        </div>
                        <div className="poolCardLineValue">
                        {item.borrow_rate}
                        </div>
                    </div>
                    
                    
                    : ''}

                    

                    <div className="poolCardLine">
                        <div className="poolCardLineHint">
                        Borrowing
                        </div>
                        <div className="poolCardLineValue">
                        {item.borrowing}
                        </div>
                    </div>

                    <div className="poolCardLine">
                        <div className="poolCardLineHint">
                        Locked collateral
                        </div>
                        <div className="poolCardLineValue">
                        {item.locked_collateral}
                        </div>
                    </div>

                    <div className="poolCardLine">
                        <div className="poolCardLineHint">
                        Collection progress
                        </div>
                        <div className="poolCardLineValue">
                        {item.collection_progress}

                            <div className="poolCardProgressLine">
                                <div style={{width: item.collection_progress}} className="poolCardProgressLineInner">
                                
                                </div>
                            </div>

                        </div>
                    </div>

                    {item.participating  === true ?

                    <div className="poolCardLine">
                        <div className="poolCardLineHint">
                        You lent
                        </div>
                        <div className="poolCardLineValue poolCardLineValueLent">
                        {item.lent}
                        </div>
                    </div>
                    
                    : ''
                    
                    }

                    <div className="poolCardButtonWrapper">

                    {item.participating  === false ? 

                    <div className="poolCardButton poolCardButtonLend poolCardButtonHalf" onClick={ () => lendFunc('data') }>
                        Lend
                    </div>

                    : 

                    <div className="poolCardButton poolCardButtonLend poolCardButtonHalf" onClick={ () => lendMoreFunc('data') }>
                        Lend more
                    </div>
                    
                    }

                <div className="poolCardButton poolCardButtonView poolCardButtonHalf" onClick={ () => viewMoreFunc('data') }>
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
                        Repayment progress
                        </div>
                        <div className="poolCardLineValue">
                        {item.repayment_progress}

                            <div className="poolCardProgressLine">
                                <div style={{width: item.repayment_progress}} className="poolCardProgressLineInner">
                                
                                </div>
                            </div>

                        </div>
                    </div>

                    <div className="poolCardLine">
                        <div className="poolCardLineHint">
                        You lent
                        </div>
                        <div className="poolCardLineValue poolCardLineValueLent">
                        {item.lent}
                        </div>
                    </div>

                    <div className="poolCardLine">
                        <div className="poolCardLineHint">
                        Profit
                        </div>
                        {item.profit >= 0 ? 
                        
                        <div className="poolCardLineValue poolCardLineValueProfitGreen">

                            +{item.profit} DOT
                        
                        </div>

                        :
                        
                        <div className="poolCardLineValue poolCardLineValueProfitRed">

                            {item.profit} DOT
                        
                        </div>

                        }

                        </div>

                        <div className="poolCardLine">
                            <div className="poolCardLineHint">
                            Ended on
                            </div>
                            <div className="poolCardLineValue">
                            {item.ended_on}
                            </div>
                        </div>
                        
                    

                    <div className="poolCardButton poolCardButtonView" onClick={ () => viewMoreFunc('data') }>
                            View more
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
                    {item.repayment_progress}

                        <div className="poolCardProgressLine">
                            <div style={{width: item.repayment_progress}} className="poolCardProgressLineInner">
                            
                            </div>
                        </div>

                    </div>
                </div>

                <div className="poolCardLine">
                    <div className="poolCardLineHint">
                    You lent
                    </div>
                    <div className="poolCardLineValue poolCardLineValueLent">
                    {item.lent}
                    </div>
                </div>

                <div className="poolCardLine">
                    <div className="poolCardLineHint">
                    Profit
                    </div>
                    {item.profit >= 0 ? 
                    
                    <div className="poolCardLineValue poolCardLineValueProfitGreen">

                        +{item.profit} DOT
                    
                    </div>

                    :
                    
                    <div className="poolCardLineValue poolCardLineValueProfitRed">

                        {item.profit} DOT
                    
                    </div>

                    }

                    </div>

                    <div className="poolCardLine">
                        <div className="poolCardLineHint">
                        Ended on
                        </div>
                        <div className="poolCardLineValue">
                        {item.ended_on}
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
                    {item.repayment_progress}

                        <div className="poolCardProgressLine">
                            <div style={{width: item.repayment_progress}} className="poolCardProgressLineInner">
                            
                            </div>
                        </div>

                    </div>
                </div>

                <div className="poolCardLine">
                    <div className="poolCardLineHint">
                    You lent
                    </div>
                    <div className="poolCardLineValue poolCardLineValueLent">
                    {item.lent}
                    </div>
                </div>

                <div className="poolCardLine">
                    <div className="poolCardLineHint">
                    Profit
                    </div>
                    {item.profit >= 0 ? 
                    
                    <div className="poolCardLineValue poolCardLineValueProfitGreen">

                        +{item.profit} DOT
                    
                    </div>

                    :
                    
                    <div className="poolCardLineValue poolCardLineValueProfitRed">

                        {item.profit} DOT
                    
                    </div>

                    }

                    </div>

                    <div className="poolCardLine">
                        <div className="poolCardLineHint">
                        Ended on
                        </div>
                        <div className="poolCardLineValue">
                        {item.ended_on}
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
                    {item.repayment_progress}

                        <div className="poolCardProgressLine">
                            <div style={{width: item.repayment_progress}} className="poolCardProgressLineInner">
                            
                            </div>
                        </div>

                    </div>
                </div>

                <div className="poolCardLine">
                    <div className="poolCardLineHint">
                    You lent
                    </div>
                    <div className="poolCardLineValue poolCardLineValueLent">
                    {item.lent}
                    </div>
                </div>

                <div className="poolCardLine">
                    <div className="poolCardLineHint">
                    Profit
                    </div>
                    {item.profit >= 0 ? 
                    
                    <div className="poolCardLineValue poolCardLineValueProfitGreen">

                        +{item.profit} DOT
                    
                    </div>

                    :
                    
                    <div className="poolCardLineValue poolCardLineValueProfitRed">

                        {item.profit} DOT
                    
                    </div>

                    }

                    </div>

                    <div className="poolCardLine">
                        <div className="poolCardLineHint">
                        Ended on
                        </div>
                        <div className="poolCardLineValue">
                        {item.ended_on}
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
