const op = document.getElementById('li')  
const opp = document.getElementById('lid')  
function Value(){
    if(op.value == "OPL"){
opp.innerText = "----LICENSE START----"+
"Year: <COPYRIGHT YEAR>    "+
    "Author: <Copyright Author>    "+
    "Software: <Software Author>"+
    "******'Protected Under Open source protector Personal License(OPL)'******"+
    "This software is as it is without warranty of any kind."+

    "This License Allows::::"+
    "Anyone using the software is allowed to use,copy,modify,merge,publish and distribute within "+
    "LIMITATIONS.To deal with it is hereby granted but for individual only and this license must be included with every copy of this software"+
   // "Sub-Licensing is allowed"
    +"----LICENSE END----"
    }else if(op.value == "OCL"){
        opp.innerText = "----LICENSE START----"+
        "Year: <COPYRIGHT YEAR>    "+
    "Author: <Copyright Author>    "+
    "Software: <Software Author>     "+
    "******'Protected Under Open source protector Commercial License(OCL)'******"+
    "This software is as it is without warranty of any kind."+

    "This License Allows::::    "+
    "Anyone using the software is allowed to use,copy,modify,merge,publish and distribute without "+
    "LIMITATIONS.To deal with it is hereby granted for commercial and Trademark company use cases and this license must be included with every copy of this software."+
    "Sub-Licensing is allowed."+
    "SOURCE CODE including binaries must be published openly with  "+
    "*Modifier:<MODIFIER NAME>* this tag with the license and required value inplace of <>         "
    +"----LICENSE END----"
    }else if(op.value == "ONL"){
        opp.innerText = "----LICENSE START----"+
        "Year: <COPYRIGHT YEAR>    "+
    "Author: <Copyright Author>    "+
    "Software: <Software Author>     "+
    "******'Protected Under Open source protector Non-Profit License(ONL)'******"+
    "This software is as it is without warranty of any kind."+

    "This License Allows::::    "+
    "Anyone using the software is allowed to use,copy,modify,merge,publish and distribute without "+
    "LIMITATIONS[ONLY NON PROFIT ORGANIZATIONS].To deal with it is hereby granted for non-profit orgs and this license must be included with every copy of this software."+
    "Sub-Licensing is allowed."+
   // "SOURCE CODE including binaries must be published openly"+
    "   "
    +"----LICENSE END----"
 
    }else if(op.value == "OPUL"){
        opp.innerText = "----LICENSE START----"+
        "Year: <COPYRIGHT YEAR>    "+
    "Author: <Copyright Author>    "+
    "Software: <Software Author>     "+
    "******'Protected Under Open source protector Public License(OPUL)'******"+
    "This software is as it is without warranty of any kind."+

    "This License Allows::::    "+
    "Anyone using the software is allowed to use,copy,modify,merge,publish and distribute without "+
    "LIMITATIONS.To deal with it is hereby granted for both commercial and non commercial use cases  and this license must be included with every copy of this software."+
    "Sub-Licensing is allowed."+
    "SOURCE CODE including binaries must be published openly with  "+
    "*Modifier:<MODIFIER NAME>* this tag with the license and required value inplace of <>         "
    +"----LICENSE END----"
    }
    console.log(op.value)
  }