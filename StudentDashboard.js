import React from 'react';
import './StudentDashboard.css'

export default function StudentDashboard(){
    return(
        <>
        <div>
            <nav>
                <div className="firstDiv">
                    <div style={{display:"flex",flexDirection:"row"}}>
                    <img src="https://apsencollege.co.in/images/HomeLogo.png" alt="image4" style={{width:"80px",marginLeft:"30px"}}/>
                    <img src="https://eskooly.com/bb/uploads/students/no-image.png" alt="image5" style={{width:"58px",marginLeft:"850px",height:"48px",marginTop:"8px"}}/>
                    <p style={{color:"white",marginLeft:"10px",marginTop:"15px"}}>Kiran</p>
                    </div>
                </div>
            </nav>
            <div style={{display:"flex",flexDirection:"row"}}>
            <div className='newDivOne'>
                <div className='firstDivChildOne'>
                    <img src="https://eskooly.com/bb/assets/images/unnamed.png" alt="image1" style={{width:"80px",marginTop:"20px",marginLeft:"80px"}}/>
                    <p style={{color:"white",fontSize:"20px",marginLeft:"80px"}}>Welcome</p>
                </div>
                <div className='firstDivChildTwo'>
                    <div>
                    <p style={{fontSize:"14px",marginLeft:"40px"}}>Dashboard</p>
                    <p style={{marginTop:"20px",fontSize:"14px",marginLeft:"40px"}}>Admission Letter</p>
                    <p style={{marginTop:"20px",fontSize:"14px",marginLeft:"40px"}}>TimeTable</p>
                    <p style={{marginTop:"20px",fontSize:"14px",marginLeft:"40px"}}>TimeTable</p>
                    <p style={{marginTop:"20px",fontSize:"14px",marginLeft:"40px"}}>TimeTable</p>
                    </div>
                </div>
            </div>
            <div>
                <div className='newDivOneTwo'>
                    <img src="https://eskooly.com/bb/uploads/students/no-image.png" alt="image2" style={{marginTop:"20px",marginLeft:"110px"}}/>
                    <p style={{marginLeft:"150px"}}>Kiran</p>
                    <div className='newDivTwo'>
                        <p style={{color:"white",marginLeft:"30px"}}>Reg No<span style={{marginLeft:"70px"}}>2110991744</span></p>
                        <p style={{color:"white",marginTop:"5px",marginLeft:"30px"}}>Gender<span style={{marginLeft:"70px"}}>Female</span></p>
                        <p style={{color:"white",marginTop:"5px",marginLeft:"30px"}}>Class<span  style={{marginLeft:"90px"}}>3</span></p>
                        <p style={{color:"white",marginTop:"5px",marginLeft:"30px"}}>Discount in Fee<span style={{marginLeft:"15px"}}>0%</span></p>
                    </div>
                 </div>
            </div>
            <div>
                <div className='newDivThree'>
                <p style={{color:"white",marginLeft:"50px",paddingTop:"10px",fontSize:"14px"}}>Welcome Kiran</p>
                <img src="https://eskooly.com/bb/assets/images/admin-message.png" alt="image3" style={{width:"200px",marginLeft:"330px",paddingTop:"0px"}}/>
                </div>

                <div>
                    <p style={{color:"#9698d6",fontSize:"20px",marginLeft:"60px",marginTop:"50px"}}>2. Examination Report</p>
                    <div style={{width:"500px",height:"80px",boxShadow:"1px 1px 3px black",borderRadius:"20px",marginLeft:"50px",marginTop:"20px"}}>
                        <p style={{marginLeft:"140px",paddingTop:"20px",color:"#9698d6"}}>No Examinations Results Yet!</p>
                    </div>
                </div>
                <div>
                <p style={{color:"#9698d6",fontSize:"20px",marginLeft:"60px",marginTop:"30px"}}>3. Class Mouckups/Tests Detail</p>
                <div style={{width:"500px",height:"80px",boxShadow:"1px 1px 3px black",borderRadius:"20px",marginLeft:"50px",marginTop:"20px"}}>
                        <tr>
                            <td style={{fontSize:"14px",paddingLeft:"50px",paddingTop:"5px",color:"#F7464A"}}>Subject</td>
                            <td style={{fontSize:"14px",paddingLeft:"20px",color:"#F7464A"}}>Tests</td>
                            <td style={{fontSize:"14px",paddingLeft:"20px",color:"#F7464A"}}>Total Marks</td>
                            <td style={{fontSize:"14px",paddingLeft:"20px",color:"#F7464A"}}>Obtain Marks</td>
                            <td style={{fontSize:"14px",paddingLeft:"20px",color:"#F7464A"}}>Percentage</td>
                        </tr>
                    </div>
                </div>
                <div>
                <p style={{color:"#9698d6",fontSize:"20px",marginLeft:"60px",marginTop:"30px"}}>4. Fee Report</p>
                <div style={{width:"500px",height:"80px",boxShadow:"1px 1px 3px black",borderRadius:"20px",marginLeft:"50px",marginTop:"20px"}}>
                        <tr>
                            <td style={{fontSize:"14px",paddingLeft:"40px",paddingTop:"5px",color:"#F7464A"}}>Sr#</td>
                            <td style={{fontSize:"14px",paddingLeft:"20px",color:"#F7464A"}}>Fee Month</td>
                            <td style={{fontSize:"14px",paddingLeft:"20px",color:"#F7464A"}}>Submission Date</td>
                            <td style={{fontSize:"14px",paddingLeft:"20px",color:"#F7464A"}}>Total Amount</td>
                            <td style={{fontSize:"14px",paddingLeft:"20px",color:"#F7464A"}}>Deposit</td>
                        </tr>
                    </div>
                </div>
            </div>
            </div>
        </div>
        </>
    )
}