var myCV = new mydetails("Kurt Riley","Web designer","kurt.riley@example.com",
"(667) 905-5001","1743 Preston Rd","2/4/1988","OBJECTIVE","Highly motivated university graduate seeking a full-time position with an agency where I can develop my knowledge in the field to help achieve organizational goals.",
"EDUCATION","GRADUATION","2006-20011<br>Informatic in Universidad de Georgetown","INTERMEDIATE","UDC","MATRICULATION","School Without Walls High School","LANGUAJES","English,Spanish,French",
"EXPERIENCE","WORK","I work 1 year in a hospital as informatic tecnic",
"SKILLS","HTML5","CSS3","JAVASCRIPT","BOOTSTRAP","C","JAVA","ADOBE CC","AUTOCAD","MS-OFFICE 365","CONTACT")

function mydetails(name,det,gmail,phone,adrs,birthday,headobj,objective,headedu,matric,school,inter,college,grad,uni,lang,idioms,headexp,work,hospital,
headskills,html,css,jscript,boot,c,java,adobe,autocad,office,contact)
{
this.name=name;
this.det=det;
this.gmail=gmail;
this.phone=phone;
this.adrs=adrs;
this.birthday=birthday;
this.headobj=headobj;
this.objective=objective;
this.headedu=headedu;
this.matric=matric;
this.school=school;
this.inter=inter;
this.college=college;
this.grad=grad;
this.uni=uni;
this.lang=lang;
this.idioms=idioms;
this.headexp=headexp;
this.work=work;
this.hospital=hospital;
this.headskills=headskills;
this.html=html;
this.css=css;
this.jscript=jscript;
this.boot=boot;
this.c=c;
this.java=java;
this.abode=adobe;
this.autocad=autocad;
this.office=office;
this.contact=contact;

document.getElementById("name").innerHTML=name;
document.getElementById("det").innerHTML=det;
document.getElementById("gmail").innerHTML=gmail;
document.getElementById("phone").innerHTML=phone;
document.getElementById("adrs").innerHTML=adrs;
document.getElementById("birthday").innerHTML=birthday;

document.getElementById("objective").childNodes[2].innerHTML=headobj;
document.getElementById("objective").childNodes[4].innerHTML=objective;

document.getElementById("education").childNodes[2].innerHTML=headedu;
document.getElementById("levels").childNodes[1].innerHTML=matric;
document.getElementById("levels").childNodes[3].innerHTML=school;
document.getElementById("levels").childNodes[5].innerHTML=inter;
document.getElementById("levels").childNodes[7].innerHTML=college;
document.getElementById("levels").childNodes[9].innerHTML=grad;
document.getElementById("levels").childNodes[11].innerHTML=uni;
document.getElementById("levels").childNodes[13].innerHTML=lang;
document.getElementById("levels").childNodes[15].innerHTML=idioms;

document.getElementById("experience").childNodes[2].innerHTML=headexp;
document.getElementById("levels2").childNodes[1].innerHTML=work;
document.getElementById("levels2").childNodes[3].innerHTML=hospital;

document.getElementById("skills").childNodes[2].innerHTML=headskills;
document.getElementById("hhtml").innerHTML=html;
document.getElementById("css").innerHTML=css;
document.getElementById("jscript").innerHTML=jscript;
document.getElementById("boot").innerHTML=boot;
document.getElementById("c").innerHTML=c;
document.getElementById("java").innerHTML=java;
document.getElementById("adobe").innerHTML=adobe;
document.getElementById("autocad").innerHTML=autocad;
document.getElementById("office").innerHTML=office;

document.getElementById("CONTACT").childNodes[2].innerHTML=contact;
}


function blueclr(){

    document.getElementById("cntnr").style.backgroundColor= "#0800FF";
    document.getElementById("e1").style.backgroundColor= "#0800FF";
    document.getElementById("e2").style.backgroundColor= "#0800FF";
    document.getElementById("e3").style.backgroundColor= "#0800FF";
    document.getElementById("e4").style.backgroundColor= "#0800FF";
    document.getElementById("e5").style.backgroundColor= "#0800FF";
    document.getElementById("skills").style.color= "#0800FF";
    document.getElementById("percent").style.backgroundColor= "#0800FF";
    document.getElementById("CONTACT").style.color= "#0800FF";
    document.getElementById("map").style.backgroundColor= "#0800FF";

    document.getElementById("objective").style.color= "#13385f";
    document.getElementById("objctv").style.color= "#13385f";
    document.getElementById("education").style.color= "#13385f";
    document.getElementById("experience").style.color= "#13385f";
    document.getElementById("skills").style.color= "#13385f";
    document.getElementById("CONTACT").style.color= "#13385f";
    document.getElementById("p1").style.color= "#13385f";
    document.getElementById("p1").style.borderLeftColor= "rgb(0, 179, 104)";
    document.getElementById("p2").style.color= "#13385f";
    document.getElementById("p2").style.borderLeftColor= "rgb(0, 179, 104)";
    document.getElementById("p3").style.color= "#13385f";
    document.getElementById("p3").style.borderLeftColor= "rgb(0, 179, 104)";
    document.getElementById("p4").style.color= "#13385f";
    document.getElementById("p4").style.borderLeftColor= "rgb(0, 179, 104)";
    document.getElementById("p5").style.color= "#13385f";
    document.getElementById("p5").style.borderLeftColor= "rgb(0, 179, 104)";
    document.getElementById("s1").style.backgroundColor= "#13385f";
    document.getElementById("s2").style.backgroundColor= "#13385f";
    document.getElementById("s3").style.backgroundColor= "#13385f";
    document.getElementById("s4").style.backgroundColor= "#13385f";
    document.getElementById("s5").style.backgroundColor= "#13385f";
    document.getElementById("s6").style.backgroundColor= "#13385f";    
    document.getElementById("s7").style.backgroundColor= "#13385f";
    document.getElementById("s8").style.backgroundColor= "#13385f";
    document.getElementById("s9").style.backgroundColor= "#13385f";
}