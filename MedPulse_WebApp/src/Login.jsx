import React, {useState} from "react";
import './index.css'; 
export default (props) => {
	const [input1, onChangeInput1] = useState('');
	const [input2, onChangeInput2] = useState('');
	return (
		<div className="flex flex-col bg-white">
			<div className="flex flex-col items-start self-stretch bg-[#F9F9F9] h-[900px]">
				<div className="flex items-start my-[139px] ml-44">
					<div className="flex flex-col shrink-0 items-start mt-[72px] mr-[311px]">
						<span className="text-[#1E1E1E] text-[80px] font-bold mb-[50px]" >
							{"Welcome Back!"}
						</span>
						<span className="text-black text-4xl font-bold w-[573px] mb-[206px] mx-3" >
							{"Access your\n\nMedical Simulation and Progress"}
						</span>
						<div className="flex items-start ml-[129px] gap-2.5">
							<button className="flex flex-col shrink-0 items-start bg-transparent text-left py-[13px] px-5 rounded-[30px] border border-solid border-[#1E1E1E33]"
								onClick={()=>alert("Pressed!")}>
								<span className="text-[#1E1E1E] text-base" >
									{"Log in"}
								</span>
							</button>
							<button className="flex flex-col shrink-0 items-start bg-[#3792DE] text-left py-[13px] px-5 rounded-[30px] border-0"
								onClick={()=>alert("Pressed!")}>
								<span className="text-white text-base" >
									{"Sign up"}
								</span>
							</button>
						</div>
					</div>
					<div className="flex flex-col shrink-0 items-start pt-5">
						<div className="flex flex-col items-center self-stretch mb-5">
							<span className="text-[#1E1E1E] text-[32px] font-bold" >
								{"Log In"}
							</span>
						</div>
						<button className="flex items-center bg-[#5985E5] text-left py-3 px-[72px] mb-5 mx-5 gap-2.5 rounded-[15px] border-0"
							onClick={()=>alert("Pressed!")}>
							<img
								src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/pjVvpt0A33/adh84wtg_expires_30_days.png"} 
								className="w-[33px] h-[34px] rounded-[15px] object-fill"
							/>
							<span className="text-white text-base font-bold" >
								{"Continue with Google"}
							</span>
						</button>
						<button className="flex items-center bg-transparent text-left py-3 px-[62px] mb-5 mx-5 gap-2.5 rounded-[15px] border border-solid border-[#1E1E1E33]"
							onClick={()=>alert("Pressed!")}>
							<img
								src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/pjVvpt0A33/7t3w94x2_expires_30_days.png"} 
								className="w-[33px] h-[34px] rounded-[15px] object-fill"
							/>
							<span className="text-[#1E1E1E] text-base font-bold" >
								{"Continue with Facebook"}
							</span>
						</button>
						<button className="flex items-center bg-transparent text-left py-3 px-[73px] mb-5 mx-5 gap-2.5 rounded-[15px] border border-solid border-[#1E1E1E33]"
							onClick={()=>alert("Pressed!")}>
							<img
								src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/pjVvpt0A33/29n7gpms_expires_30_days.png"} 
								className="w-[33px] h-[34px] rounded-[15px] object-fill"
							/>
							<span className="text-[#1E1E1E] text-base font-bold" >
								{"Continue with Twitter"}
							</span>
						</button>
						<div className="flex flex-col items-start relative pt-[3px] px-[159px] mb-5 mx-5">
							<div className="flex flex-col items-start bg-[#F9F9F9] py-[3px] px-[13px]">
								<span className="text-[#1E1E1E] text-sm" >
									{"or"}
								</span>
							</div>
							<img
								src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/pjVvpt0A33/efwxn1tj_expires_30_days.png"} 
								className="w-[359px] h-[1px] absolute bottom-1.5 left-0 object-fill"
							/>
						</div>
						<input
							placeholder={"Email Address"}
							value={input1}
							onChange={(event)=>onChangeInput1(event.target.value)}
							className="text-[#1E1E1E] bg-transparent text-xs py-3.5 px-5 mb-5 mx-5 rounded-[10px] border border-solid border-[#1E1E1E33]"
						/>
						<input
							placeholder={"Password"}
							value={input2}
							onChange={(event)=>onChangeInput2(event.target.value)}
							className="text-[#1E1E1E] bg-transparent text-xs py-3.5 px-5 mb-5 mx-5 rounded-[10px] border border-solid border-[#1E1E1E33]"
						/>
						<button className="flex flex-col items-start bg-[#3792DE] text-left py-[13px] px-[156px] mb-5 mx-5 rounded-[10px] border-0"
							onClick={()=>alert("Pressed!")}>
							<span className="text-white text-base" >
								{"Log in"}
							</span>
						</button>
						<div className="flex flex-col items-center self-stretch mb-[45px]">
							<span className="text-[#1E1E1E] text-sm" >
								{"Forget Password?"}
							</span>
						</div>
						<span className="text-[#1E1E1E] text-sm mx-[78px]" >
							{"Don’t Have an account? Signup Now."}
						</span>
					</div>
				</div>
			</div>
		</div>
	)
}