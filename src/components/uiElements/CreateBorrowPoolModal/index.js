import React from 'react'
import { useState } from 'react'

import { useHistory } from 'react-router-dom'
import dai from './images/dai.png'
import compound from './images/compound.png'
import '@hassanmojab/react-modern-calendar-datepicker/lib/DatePicker.css';
import { Calendar, utils} from '@hassanmojab/react-modern-calendar-datepicker';
import './style.css'
import DropdownMenu from '../DropdownMenu'

export default function CreateBorrowPoolModal({showModal, openModal}) {

    const history = useHistory();

    const icon = dai;
    const icon2 = compound;

    const depositTokenFunc = (data) => {
        const depositData = {
            borrowAmount,
            borrowAsset,
            collateralAsset,
            collaterizationRatio,
            interestRate,
            selectedDayRange,
            repaymentPeriod,
            description
        }
        console.log(depositData);
        openModal();
        setFormStep(1);
        alert("Transaction is pending! Redirect after finished.")
        history.push('/borrow-pool-details-grace');
    }

    const dropdownData = [
        {
            value: 'ETH',
            icon: 'https://icons.iconarchive.com/icons/cjdowner/cryptocurrency-flat/256/Ethereum-ETH-icon.png'
        },
        {
            value: 'USDC',
            icon: 'https://messari.io/asset-images/4515ba15-2719-4183-b0ca-b9255d55b67e/128.png?v=2'
        },
    ]





    const [dropdownSelected, setDropdownSelected] = useState(dropdownData[0])
    const [dropdownSelected2, setDropdownSelected2] = useState(dropdownData[0])



    const [formStep, setFormStep] = useState(1);

    const setStep = (index) => {
        setFormStep(index);
    }

    const [selectedDayRange, setSelectedDayRange] = useState({
        from: null,
        to: null
      });

    const [showCalendar, setshowCalendar] = useState(false)

    const openCalendar = () => {
        setshowCalendar(prev => !prev)
      }


    const [repaymentPeriod, setRepaymentPeriod] = useState('1 week')
    const [loanPeriod, setLoanPeriod] = useState('1 week')
    

    const changeLoanPeriod = (index) => {
        setLoanPeriod(index);
    }

    const changeRepaymentPeriod = (index) => {
        setRepaymentPeriod(index);
    }

    
    const [borrowAmount, setBorrowAmount] = useState('')
    const [borrowAsset, setborrowAsset] = useState('dai')
    const [collateralAsset, setcollateralAsset] = useState('compound 1')
    const [collaterizationRatio, setCollaterizationRatio] = useState('')
    const [interestRate, setInterestRate] = useState('')
    const [description, setDescription] = useState('')



    


    return (
        <React.Fragment>
            {showModal ?
                <React.Fragment>
                <div className="pageModalOverlay">

                    <div className="borrowPoolWindow">

                        <div className="borrowPoolWindowHeader">
                            Create an Open Borrow Pool

                            <div className="borrowPoolWindowHeaderButton" onClick={openModal}>

                            </div>
                        </div>





                    {formStep === 1 ? 

                    <div className="borrowPoolStep">

                        <div className="borrowPoolStepTitle1">
                            The Open Borrow Pool
                        </div>
                        <div className="borrowPoolStepTitle2">
                            Sublime lets borrowers create their own individual loan pools that are open to everyone.
                        </div>
                        <div className="borrowPoolStepParagraph">
                            <ul>
                                <li>Set the pool size & tokens supported</li>
                                <li>Set the interest rate you are offering - fixed or variable</li>
                                <li>Set the time period - fixed or indefinite terms, repayment schedule</li>
                                <li>Decide the collateral amount</li>
                            </ul>
                        </div>

                        <div className="borrowPoolStepButton" onClick={() => setStep(2)}>
                            Create Open Borrow Pool
                        </div>

                    </div>
                    
                    : null}





                    {formStep === 2 ?


                        <div className="borrowPoolStep">

                            <div className="borrowPoolAmountArea">
                                <div className="borrowPoolAmountAreaTitle">
                                    Amount
                                </div>

                                <input type="text" className="borrowPoolAmountAreaField" placeholder="Enter the Amount" onChange={e => setBorrowAmount(e.target.value)} value={borrowAmount} />

                                

                                

                            </div>

                            <DropdownMenu dropdownSelected={dropdownSelected} setDropdownSelected={setDropdownSelected} dropdownData={dropdownData} />
                               

                            <div className="borrowPoolButtonsWrapper">

                                <div className="borrowPoolSmallButton borrowPoolBackButton" onClick={() => setStep(1)}>Back</div>
                                <div className="borrowPoolSmallButton borrowPoolNextButton" onClick={() => setStep(3)}>Next</div>

                            </div>

                        </div>
                    
                    
                    : null}



                    {formStep === 3 ?

                        <div className="borrowPoolStep">
                            <div className="borrowPoolStepHint">
                                Collateral Asset
                            </div>

                            <DropdownMenu dropdownSelected={dropdownSelected2} setDropdownSelected={setDropdownSelected2} dropdownData={dropdownData} />
                            

                            <div className="borrowPoolAmountArea">
                                <div className="borrowPoolAmountAreaTitle">
                                    Collaterization Ratio
                                </div>

                                <input type="text" className="borrowPoolAmountAreaField" placeholder="Enter Collaterization Ratio" value={collaterizationRatio} onChange={e => setCollaterizationRatio(e.target.value)} />

                                <div className="borrowPoolAmountAreaRight">%</div>

                            </div>


                           
                            <div className="borrowPoolBadge">
                                <div className="borrowPoolBadgeHint">
                                    Amount getting borrowed
                                    
                                </div>
                                <div className="borrowPoolBadgeValue">
                                    {borrowAmount} DAI
                                </div>
                                <div className="borrowPoolBadgeHint">
                                    Collaterization Ratio
                                    
                                </div>
                                <div className="borrowPoolBadgeValue">
                                    {collaterizationRatio}%
                                </div>

                            </div>

                      


                            <div className="borrowPoolButtonsWrapper">

                                <div className="borrowPoolSmallButton borrowPoolBackButton" onClick={() => setStep(2)}>Back</div>
                                <div className="borrowPoolSmallButton borrowPoolNextButton" onClick={() => setStep(4)}>Next</div>

                            </div>
                        </div>
                    
                
                    :null}



                    {formStep === 4 ?
                    
                        <div className="borrowPoolStep">

                            <div className="borrowPoolAmountArea">

                                <div className="borrowPoolAmountAreaTitle">
                                    Interest Rate
                                </div>

                                <input type="text" className="borrowPoolAmountAreaField" placeholder="eg. 34%" value={interestRate} onChange={e => setInterestRate(e.target.value)} />

                                <div className="borrowPoolAmountAreaRight">%</div>

                            </div>





                            <div className="borrowPoolAmountArea borrowPoolAmountAreaLink">

                    <div className="borrowPoolAmountAreaTitle">
                    Loan Period
                    </div>

                    <div className="calendatButtonsMainWrapper">
                    <div className="calendarButtonsNav calendarButtonsNavLeft button">
                    <i class="fas fa-long-arrow-alt-left"></i>
                    </div>

                    <div className="calendarButtonsWrapper calendarButtonsWrapper2">
                       
                       <div className={loanPeriod === '1 week' ? 'calendarButtonActive calendarButtonActive2' : 'calendarButton calendarButton2'} onClick={() => changeLoanPeriod('1 week')}>
                           1 week
                       </div>
                       <div className={loanPeriod === '2 weeks' ? 'calendarButtonActive calendarButtonActive2' : 'calendarButton calendarButton2'}  onClick={() => changeLoanPeriod('2 weeks')}>
                           2 weeks
                       </div>
                       <div className={loanPeriod === '3 weeks' ? 'calendarButtonActive calendarButtonActive2' : 'calendarButton calendarButton2'}  onClick={() => changeLoanPeriod('3 weeks')}>
                           3 weeks
                       </div>
                       <div className={loanPeriod === '4 weeks' ? 'calendarButtonActive calendarButtonActive2' : 'calendarButton calendarButton2'}  onClick={() => changeLoanPeriod('4 weeks')}>
                           4 weeks
                       </div>
                       <div className={loanPeriod === '5 weeks' ? 'calendarButtonActive calendarButtonActive2' : 'calendarButton calendarButton2'}  onClick={() => changeLoanPeriod('5 weeks')}>
                           5 weeks
                       </div>
   
   
                       </div>
   
   
   

                    <div className="calendarButtonsNav calendarButtonsNavRight button">
                    <i class="fas fa-long-arrow-alt-right"></i>
                    </div>
                    </div>

               
                    </div>



                        

                           


                            <div className="borrowPoolAmountArea borrowPoolAmountAreaLink">

                                <div className="borrowPoolAmountAreaTitle">
                                Repayment Period
                                </div>

                            
                            <div className="calendarButtonsWrapper">
                                <div className={repaymentPeriod === '1 week' ? 'calendarButtonActive' : 'calendarButton'} onClick={() => changeRepaymentPeriod('1 week')}>
                                    1 week
                                </div>
                                <div className={repaymentPeriod === '2 weeks' ? 'calendarButtonActive' : 'calendarButton'}  onClick={() => changeRepaymentPeriod('2 weeks')}>
                                    2 weeks
                                </div>
                                <div className={repaymentPeriod === '1 month' ? 'calendarButtonActive' : 'calendarButton'}  onClick={() => changeRepaymentPeriod('1 month')}>
                                    1 month
                                </div>
                                <div className={repaymentPeriod === 'lone period' ? 'calendarButtonActive calendarButtonActiveLone' : 'calendarButton calendarButtonLone'}  onClick={() => changeRepaymentPeriod('lone period')}>
                                    End on lone period
                                </div>

                                
                            </div>

                              

                            </div>


                    
                    

                            <div className="borrowPoolGreyPad">

                                <div className="borrowPoolGreyPadLine">

                                    <div className="borrowPoolGreyPadLineHint">
                                    Collateral needed based on current price
                                    </div>

                                    <div className="borrowPoolGreyPadLineValue">
                                    1 week
                                    </div>
                                
                                </div>

                                <div className="borrowPoolGreyPadLine">

                                    <div className="borrowPoolGreyPadLineHint">
                                    Loan amount requested
                                    </div>

                                    <div className="borrowPoolGreyPadLineValue">
                                    -
                                    </div>

                                    </div>


                                <div className="borrowPoolGreyPadLine">

                                    <div className="borrowPoolGreyPadLineHint">
                                    Total Repayment
                                    </div>

                                    <div className="borrowPoolGreyPadLineValue">
                                    -
                                    </div>
                                
                                </div>


                                <div className="borrowPoolGreyPadLine">

                                    <div className="borrowPoolGreyPadLineHint">
                                    Each Instalment
                                    </div>

                                    <div className="borrowPoolGreyPadLineValue">
                                    -
                                    </div>
                                
                                </div>


                                <div className="borrowPoolGreyPadLine">

                                    <div className="borrowPoolGreyPadLineHint">
                                    Total Interest
                                    </div>

                                    <div className="borrowPoolGreyPadLineValue">
                                    -
                                    </div>
                                
                                </div>
    
                            </div>


                            <div className="borrowPoolSmallHint">
                            Lenders will have 3 days to deposit liquidity in this pool
                            </div>

                            <div className="borrowPoolButtonsWrapper">

                            <div className="borrowPoolSmallButton borrowPoolBackButton" onClick={() => setStep(3)}>Back</div>
                            <div className="borrowPoolSmallButton borrowPoolNextButton" onClick={() => depositTokenFunc('data')}>Create Pool</div>

                            </div>


                        </div>
                    
                    : ''}



                    {formStep === 5 ?



                        <div className="borrowPoolStep">
                            <div className="borrowPoolNoteWrapper">
                                <div className="borrowPoolNoteTitle">
                                    You can add a description for the pool here
                                </div>

                                <textarea className="borrowPoolNoteTextArea" placeholder="eg. funds will be used for yield farming" value={description} onChange={e => setDescription(e.target.value)}>
                                 
                                </textarea>
                            </div>

                            <div className="borrowPoolStepButton" onClick={() => depositTokenFunc('data')}>
                                Deposit token amount and create pool
                            </div>
                        </div>
                    
                    
                    
                    :null}


                    </div>



                </div>


               

                

                </React.Fragment>

                : null
            }
            
        </React.Fragment>
    )
}
