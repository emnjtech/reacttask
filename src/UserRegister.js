
import React, { useEffect } from 'react'
import { useState } from 'react'
import DummyText from './dummyText'
import eye from './assets/eye.png'
import eyex from './assets/eyex.png'

export default function UserRegister() {
  const [nameInput, setNameInput] = useState("")
  const [emailInput, setEmailInput] = useState("")
  const [pwdInput, setPwdInput] = useState("")
  const [showName, setShowName] = useState(false);
  const [showEmail,setShowEmail] = useState(false)
  const [showPwd,setShowPwd] = useState(false)
  const [error,setError] = useState(false)
  const [nameError,setNameError] =useState(false)
  const [pwdError,setPwdError] = useState(false)
  const [selectOptn,setSelectOptn] = useState("")
  const onNameFocus = () => setShowName(true);
  const onEmailFocus = () =>  setShowEmail(true);
  const onPwdFocus = () => setShowPwd(true);
  const [btnEnable,setBtnEnable] = useState(false)
  const [eyeToggle,setEyeToggle] = useState(false)
  function checkEmail(email) {
    return /\S+@\S+\.\S+/.test(email);
  }
  
  function checkName(name) {
    return /^[A-Za-z0-9 -]*$/.test(name);
  }
  
const handleChangeName = (e)=>{
  if (!checkName(e.target.value)){
    setNameError(true)
    
  }
  else{
    setNameError(false)
    setNameInput(e.target.values)
  }
}

  const handleChange = event => {
    if (!checkEmail(event.target.value)) {
      setError(true);
      
     
    } else {
      setError(false);
      setEmailInput(event.target.value)

    }


  };


  function checkPwd(password) {
    return /^(?=.*).{8,}$/.test(password);
  }
  
  const handleChangePwd = event => {
    if (!checkPwd(event.target.value)) {
      setPwdError(true);
      

     
    } else {
      setPwdError(false);
      setPwdInput(event.target.value)

    }

  };

  const handleNext = (e)=>{
    e.preventDefault()
    setSelectOptn("")
    setPwdInput("")
    setNameInput("")
    setEmailInput("")
    alert("Thank you for checking out my Developer task")
  }

useEffect(()=>{
const btnFunction = () =>{
 if (nameInput?.trim().length === 0 || emailInput?.trim().length === 0 ||pwdInput?.trim().length === 0 || selectOptn === "" || nameError === true || pwdError === true || error === true)
    {
      setBtnEnable(false)
      console.log(btnEnable)
    }
    else
    {
      setBtnEnable(true)
    }
}
btnFunction()
console.log(selectOptn)
console.log(btnEnable)
//eslint-disable-next-line
},[nameInput,emailInput,pwdInput,selectOptn,nameError,pwdError,error])

  return (
    <div className='wrapper'>
    <div className='container'>
        <div className='dataSide'>
  
            <div className='registerAndLogin'>
              <h1>Let's set up your account</h1>
              <p className='accountInstr'>Already have an account?<a href='link'> Sign In</a> </p>
            <form>
              <div  className={nameError? 'InputTxtError':'InputTxt'}>
                <label className={showName? 'focusLabel' : 'noFocusLabel'}>Your name</label>
                <input type='text' placeholder={!showName? 'Your name' : ''}  onFocus={onNameFocus}  onChange={handleChangeName}/>
                {nameError? <p className='errorP'>Enter a name</p>  : ""}
                </div>
                <div className={error? 'InputTxtError':'InputTxt'}>
                <label className={showEmail? 'focusLabel' : 'noFocusLabel'}>Email address</label>
                <input type='email' placeholder={!showEmail? 'Email address' : ''} onFocus={onEmailFocus}  onChange={handleChange} />
                {error? <p className='errorP'>Please enter a valid email address</p> : ""}
                </div>

         


                <div className='SelectInput' >
                
                
                <select className="selectOptn"  onChange={(e) => setSelectOptn(e.target.value)}>
                <option hidden="hidden" value={""}>I would describe my user type as</option>
                <option value="Developer">Developer</option>
                <option value="Designer">UI/UX Designer</option>
                <option value="Fullstack Developer">Fullstack Developer</option>
                <option value="Front-end Developer">Front-end Developer</option>
                <option value="Back-end Developer">Back-end Developer</option>




                </select>
                
                </div>

                <div className={pwdError? 'InputTxtError':'InputTxt'}>
                <label className={showPwd? 'focusLabel' : 'noFocusLabel'}>Password</label>
                <input type={!eyeToggle? 'password' : 'text'} placeholder={!showPwd? 'Password' : ''} onFocus={onPwdFocus} onChange={handleChangePwd} />
                <img src={!eyeToggle? eye : eyex} alt="eye" className='inputIcon' onClick={(()=>setEyeToggle(!eyeToggle))}/>
                <p className={pwdError? 'errorP' : 'noErrorP'}>Minimum of 8 characters</p>
                </div>

               
               
                <div className='submitBtn'><button disabled={btnEnable ===true? false:true} onClick={handleNext}>Next</button> </div>
                <div className='terms'><p>By clicking the "Next" button, you agree to creating a free account, and the <a href="#link">Terms of Service</a> and <a href="#link">Privacy policy.</a></p></div>
            
              </form>
              </div>
            
        </div>
        <div className='dummySide'>
          <DummyText />
        </div>





    </div>
    </div>
  )
}



