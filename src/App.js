function App(){
    return(
        <div>
            <div className="box-border mt-[84px] ml-[160px] h-[214px] w-[508px] bg-[#E9F3FE] rounded-[25px] border border-black flex flex-row flex-wrap flex-1 gap-[15px]"> {/*card*/}
                    <div className="box-border bg-[#FFFFFF] w-[155px] h-[181px] mt-[16px] ml-[4px] border rounded-[25px] relative"> {/*image*/}
                        <div className="w-[31px] h-[31px]  bg-[#FAFAFA] ml-[113px] mt-[8px] absolute top-0 rounded-[50%] ">
                            <svg className="w-[13px] h-[12px] fill-current text-[#F5CA53] mt-[9px] ml-[8px]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
                            </svg>
                        </div>
                        <img className="w-[140px] h-[118px] mt-[25px] ml-[10px]" src="https://s3-alpha-sig.figma.com/img/a0cb/9c7f/7bf4c3043a795aa98880ca1c1d48be30?Expires=1710720000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=PocRrH5pcg-6XEksJFOBsUhgVFLQRtpbEIaS~AXh-ph9kx2Ewkqu7BRdhwfEdTy9tBBRhmVQJklChNKTPpQtlZHETSzl3U4KAX8DYyqUSEonK0tVlTUYXKW5wpe1zENKY64Pg4UXfKN9iy55PL48uS5U4Y4qmQN~byELThcdktCFctI1Dou2SS~5V8N0L17m8yc4SDvuIBfs5b9h4Bi8zvqqUCDIcPnCoBMMe9G6QzozrQmnuT5Zi--OjGWWal2BqbjmYjaMfwlTuxemx0NRjf7pEIFly01r5kbRhOY4dQQujGYI5u3gOnox5hhdGL0JtwFtuq~CT-eF0TuE8HrrCQ__" alt="img"></img>
                        <p className="w-[119px] bg-[#F4F4F4] rounded-[20px] mt-[11px] ml-[19px]">
                        <p className="w-[64px] h-[4px] bg-[#A4E8FD] rounded-[20px]" ></p>
                        </p>
                    </div>
                    <div className="flex flex-col gap-[32px]"> {/*Title*/}
                        <div className="flex flex-col gap-[11px]">
                        <div className="w-[103px] h-[22px] border rounded-[5px] bg-[#F3F3F3] mt-[41px]">
                            <p className="mt-[5px] font-bold font-Montserrat text-center text-[11px] text-[#E58158] leading-[13.41px] tracking-[-1%]">After Effects</p>
                        </div>
                        <span className="w-[216px] h-[48px] font-bold font-Montserrat text-[25px] text-[#2B62CF] leading-[24.25px] tracking-[-1%]">Animation in UI Design (Part 2)</span>
                        </div>
                        <div className="flex flex-row gap-[22px]">
                            <div className="w-[109px] h-[18px]">
                                <svg className="text-[#699BF7] h-[18px] w-[18px] inline-block" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                                </svg>
                            <span className="w-[89px] h-[13px] font-bold font-Montserrat text-[11px] text-[#699BF7] leading-[13.41px] tracking-[-1%]">Vishal Pulikottil</span>
                            </div>
                            <div className="w-[80px] h-[15px]">
                                <svg className="text-[#699BF7] inline-block w-[15px] h-[15px]" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" >
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                                </svg>
                                <span className="w-[61px] h-[13px] font-bold font-Montserrat text-[11px] text-[#699BF7] leading-[13.41px] tracking-[-1%]">15 minutes</span>
                            </div>
                        </div>
                    </div>
                    <div> {/*dots*/}
                    <div>
                        <p className="w-[16px] h-[2px] border-2 mt-[8px] text-lg font-medium text-[#699BF7] bg-[#E9F3FE] ml-[33px]">...</p>
                    </div>
                    </div>
            </div>
        </div>
    )
}
export default App;