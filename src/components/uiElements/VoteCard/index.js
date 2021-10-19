import React from 'react'
import './style.css'

export default function VoteCard({openModal, item}) {
    return (
        <React.Fragment>
            <div className="voteCard">
                <div className="voteCardAvatar">
                
                </div>

                <div className="voteCardTitle">
                {item.txt_1}
                </div>

                <div className="voteCardUsername">
                {item.txt_2}
                </div>

                <div className="voteCardDate">
                {item.txt_3}
                </div>

                <div className="voteCardButtons">
                    <div className="voteCardButton voteCardButtonVote button" onClick={openModal}>
                        Vote
                    </div>
                    <div className="voteCardButton voteCardButtonDismiss button" onClick={() => alert("Remove card")}>
                        Dismiss
                    </div>
                </div>



            </div>
        </React.Fragment>
    )
}
