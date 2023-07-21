function getGradePoint(value){
    if(value=="A+") return 10;
    if(value=="A") return 9;
    if(value=="B+") return 8;
    if(value=="B") return 7;
    if(value=="C+") return 6;
    if(value=="C") return 5;
    if(value=="D+") return 4;
    if(value=="D") return 3;
    if(value=="E") return 0;
};
let rowCount=(document.getElementById("ContentPlaceHolder1_wucResult1_dlResult_Repeater1_0").rows.length)-2
let GradePoints=0;
let GradeC=0;
let Count=0;
let Excluded=[]
for(let i=0;i<=rowCount;i++){
    let tempGrade=document.getElementById(`ContentPlaceHolder1_wucResult1_dlResult_Repeater1_0_lblGrade_${i}`).innerText;
    let tempC=document.getElementById(`ContentPlaceHolder1_wucResult1_dlResult_Repeater1_0_lblCredits_${i}`).innerText;
    tempC=parseInt(tempC)
    if(tempGrade.length==2 || tempGrade.length==1){
        let temp=getGradePoint(tempGrade);
        let Temp=temp*tempC
        GradePoints=GradePoints+Temp;
        GradeC=GradeC+tempC;
        Count++;
    }
    else{
          let Skipped=document.getElementById("ContentPlaceHolder1_wucResult1_dlResult_Repeater1_0").rows[i+1].cells.item(1).innerText;
        Excluded.push(Skipped)
        alert(`Skipping ${Skipped} as No Result was Found`);
    }
}
let Result=GradePoints/GradeC;
alert(`Your SGPA=${Result}\nfor total Subjects: ${Count}\nExcluding Result of ${Excluded}`)
Result
