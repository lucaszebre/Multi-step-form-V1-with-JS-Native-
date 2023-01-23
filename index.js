window.onload = function(){
    let step = false;
    let i="1";
    let onlineservice=false;
    let largerstorage=false;
    let profile=false;
    let mainprice=0;
    let priceOnline=0;
    let priceLarger=0;
    let priceProfile=0;
    let choice="Arcade";
    let isyearly=false;
    let block="";
    let ischecked=false;

    // found the input that have been checked   
    
    const step1 = document.querySelector("#step1");
    const step2 = document.querySelector("#step2")
    const step3 = document.querySelector("#step3")
    const step4 = document.querySelector("#step4")
    const step5 = document.querySelector('#step5')
    const goback =document.getElementById("goback"); 
    const goback2 = document.getElementById("goback-pc");
    const Nextstep = document.getElementById("Nextstep2");
    const Nextstep2 = document.getElementById("Nextstep");
    function Affiche1(){
            step1.style.display="flex"
            step2.style.display="none"
            step3.style.display="none"
            step4.style.display="none"
            step5.style.display="none"
            goback.style.display="none"
            goback2.style.display="none"
    } 
    function Affiche2(){
        step2.style.display="block"
        step1.style.display="none"
        step3.style.display="none"
        step4.style.display="none"
        step5.style.display="none"
        goback.style.display="block"
        goback2.style.display="block"
    } 
    function Affiche3(){
        step2.style.display="none"
        step1.style.display="none"
        step3.style.display="block"
        step4.style.display="none"
        step5.style.display="none"
        goback.style.display="block"
        goback2.style.display="block"
    } 
    function Affiche4(){
        step2.style.display="none"
        step1.style.display="none"
        step3.style.display="none"
        step4.style.display="block"
        goback.style.display="block"
        step5.style.display="none"
        goback2.style.display="block"
        i="4"
    }
    function Affiche5(){
        step2.style.display="none"
        step1.style.display="none"
        step3.style.display="none"
        step4.style.display="none"
        step5.style.display="flex"
        goback.style.display="none"
        goback2.style.display="none"
        Nextstep.style.display="none"
        Nextstep2.style.display="none"
    }

    function ErrorNumber(){
        const errorNumber = document.querySelector("#number-error");
        if(number.value===""){
            number.style.border="red 1px solid";
            errorNumber.style.display="flex";
            step=false;
        }
        else{
            errorNumber.style.display="none";
            number.style.border="black 1px solid";
            step=true;
        }
    } 
    function ErrorEmail(){
        const errorEmail = document.querySelector("#email-error");
        if(email.value===""){
            email.style.border="red 1px solid";
            errorEmail.style.display="flex";
            step=false;
        }
        else{
            errorEmail.style.display="none";
            email.style.border="black 1px solid";
            step=true;
        }
    }
    function yearly(){
        document.getElementById('price3-step3').textContent="+$20/year";
        document.getElementById('price2-step3').textContent="+$20/year";
        document.getElementById('price-step3').textContent="+$10/year";
    }
    function monthly(){
        document.getElementById('price3-step3').textContent="+$2/mo";
        document.getElementById('price2-step3').textContent="+$2/mo";
        document.getElementById('price-step3').textContent="+$1/mo";
    }
    const ArrayCheck =['checkbox1','checkbox2','checkbox3']
function checked(){
    ArrayCheck.forEach((element) => {
        if(element === "checkbox1" && onlineservice){
            console.log(priceOnline);
            if(!isyearly){
                priceOnline=10;
                
            }else{
                priceOnline=1;
            }}
        else if( element ==='checkbox2' && profile ){
            if(!isyearly){
                priceProfile=20;
            }else{
                priceProfile=2;
            }
        }
        else if (element =='checkbox3' &&  largerstorage){
            if(!isyearly){
                priceLarger=20;
            }else{
                priceLarger=2;
            }
    }
}
    )
    
}
const button1= document.getElementById('1');
const button2= document.getElementById('2');
const button3= document.getElementById('3');
const button4= document.getElementById('4');
    function Button1(){
        button1.style.backgroundColor="pink"
        button4.style.backgroundColor=""
        button2.style.backgroundColor=""
        button3.style.backgroundColor=""
    }
    function Button2(){
                button2.style.backgroundColor="pink"
                button4.style.backgroundColor=""
                button1.style.backgroundColor=""
                button3.style.backgroundColor=""
    }
    function Button3(){
        button4.style.backgroundColor=""
                button1.style.backgroundColor=""
                button2.style.backgroundColor=""
                button3.style.backgroundColor="pink"
    }
    function Button4(){
        button4.style.backgroundColor="pink"
                button1.style.backgroundColor=""
                button2.style.backgroundColor=""
                button3.style.backgroundColor=""
    }
    document.addEventListener('click',function(e){
        e.preventDefault()
    

    // Step 1  Start 
    
    const name = document.querySelector("#name");
    const email = document.querySelector("#email");
    const number = document.querySelector("#number");
    function ErrorName(){
        const errorName = document.querySelector("#name-error");
        if(name.value===""){
            name.style.border="red 1px solid";
            errorName.style.display="flex";
            step=false;
        }
        else{
            errorName.style.display="none";
            name.style.border="black 1px solid";
            step=true;
        }
    } 

    // Step 1     End


    // Step 2 Start 

const arcade = document.querySelector(".block1");
const advanced = document.querySelector(".block2");
const pro = document.querySelector(".block3");
    
    switch(e.target.id){
        case 'block1':
            arcade.style.backgroundColor="rgb(249, 242, 243)";
            pro.style.backgroundColor="";
            advanced.style.backgroundColor="";
            i="2";
            choice="Arcade";
            if(toggleblock.style.justifyContent==="right"){
                mainprice=120;
                yearly();
        }
            else{
                mainprice=9;
                monthly();
            }
            block="1";
            break;
        case 'block2':
            advanced.style.backgroundColor="rgb(249, 242, 243)";
            arcade.style.backgroundColor="";
            pro.style.backgroundColor="";
            i="2";
            choice="Advanced";
            if(toggleblock.style.justifyContent==="right"){
                mainprice=90;
                yearly();

        
        }
            else{
                monthly();
                mainprice=12;
                
            }
            block="2"
            break;
        case 'block3':
        pro.style.backgroundColor="rgb(249, 242, 243)";
        arcade.style.backgroundColor="";
        advanced.style.backgroundColor="";
        i="2";
        choice="Pro";
        console.log(i);
        if(toggleblock.style.justifyContent==="right"){
            mainprice=150;
            yearly();
            
    }
        else{
            mainprice=15;
            monthly();
        }
        block="3"
        break;
    }
    

// Step 2 End 
// Step 3


const check1 =document.querySelector("#checkbox1");

if(e.target.id==="check1" || e.target.id==="price-step3" || e.target.id==="wrap-add-ons" || e.target.id==="checkbox1"){
    document.getElementById("checkbox1").checked = 
    !document.getElementById("checkbox1").checked;
    if(document.getElementById("checkbox1").checked){
        i="3";
        onlineservice=true;
        if(isyearly){
            priceOnline=10;
        }else{
            priceOnline=1;
        }
    }else{
        onlineservice=false;
        priceOnline=0;
    }
}else if(e.target.id==="check2" || e.target.id==="wrap-add-ons2" || e.target.id==="price2-step3" || e.target.id==="checkbox2"){
    document.getElementById("checkbox2").checked = 
    !document.getElementById("checkbox2").checked;
    if(document.getElementById("checkbox2").checked){
        i="3";
        largerstorage=true;
        if(isyearly){
            priceLarger=20;
        }else{
            priceLarger=2;
        }
    }else{
        largerstorage=false;
        priceLarger=0;
    }
}else if(e.target.id==="check3" || e.target.id==="wrap-add-ons3" || e.target.id==="price3-step3" || e.target.id==="checkbox3"){
    document.getElementById("checkbox3").checked = 
    !document.getElementById("checkbox3").checked;
    if(document.getElementById("checkbox3").checked){
        i="3";
        profile=true;
        if(isyearly){
            priceProfile=20;
        }else{
            priceProfile=2;
        }
    }
    else
    {
        profile=false;
        priceProfile=0;
    }
}



// Step 3

// Step 4  Start 
function Step4(){
    i="4"
    console.log(choice)
    if(isyearly){
        document.getElementById("enwrap").innerHTML=
    ` <div class="td1-finish">
    <span id="choice">${choice}</span><br>
    <a>Change</a>
    </div>
    <div class="pay">
    $<span id="">
    ${mainprice}/year
    </span>
    </div>`;
    }else{
    document.getElementById("enwrap").innerHTML=
    ` <div class="td1-finish">
    <span id="choice">${choice}</span><br>
    <a>Change</a>
    </div>
    <div class="pay">
    $<span id="">
    ${mainprice}/mo
    </span>
    </div>`;}}

function AddonsOnline(){ 
    i="4"
    if(onlineservice ){
        if(isyearly){
            document.getElementById("block2-finish").innerHTML=`<span>Online service</span>
        <span>$
            <span id="">
            ${priceOnline}/year
            </span>
        </span>`;
        }else{
        document.getElementById("block2-finish").innerHTML=`<span>Online service</span>
        <span>$
            <span id="">
            ${priceOnline}/mo
            </span>
        </span>`;
    

}}
else{
    document.getElementById("block2-finish").innerHTML=``;
}
}
function AddonsStorage(){
        i="4"
        if(largerstorage){
            if(isyearly){
                document.getElementById("block3-finish").innerHTML=`<span>Larger Storage</span>
            <span> $<span id="">${priceLarger}/year</span></span>`;
            }else{
    
            
            document.getElementById("block3-finish").innerHTML=`<span>Larger Storage</span>
            <span> $<span id="">${priceLarger}/mo</span></span>`;
        }
        }
        else
        {
            document.getElementById("block3-finish").innerHTML=``;
        }
        
}


function AddonsProfile(){
    i="4";
    if(profile){
        if(isyearly){
            document.getElementById("block4-finish").innerHTML=`<span>Profile</span>
        <span> $<span id="">${priceProfile}/year</span></span>`;
        }
        else{
            document.getElementById("block4-finish").innerHTML=`<span>Profile</span>
            <span> $<span id="">${priceProfile}/mo</span></span>`;
        }
    }
    else
    {
        document.getElementById("block4-finish").innerHTML=``;
    }
        
        
        
    

}


function Total(){
    i="4";
    let total=priceProfile+priceLarger+priceOnline+mainprice;
    document.getElementById('wrap-money').innerHTML=`<div class="Total">
    Total
    <span></span>
    </div>
    <div class="Montant">
    +${total}$<span></span>
    </div>`
}
        

// Step 4 ENd 

//  Management of the the four step 
    if(e.target.id==="Nextstep" || e.target.id==="Nextstep2"){
        // Step 1 Start 
        
        
        ErrorName();
        ErrorEmail();
        ErrorNumber();
        
        // Step 1 End
        switch(i){
            case '1':
                if(step){
                    Affiche2()
                    Button2()
                    i="2"
                    console.log("le compteur est");
                    console.log(i);
                }
                else{
                    Affiche2()
                    Button2()
                    i="2"
                    console.log("le compteur est");
                    console.log(i);
                }
                break;
            case '2':
                ischecked=true;
                Affiche3();
                Button3()
                i="3"
                console.log("le compteur est");
                console.log(i);
                break;
            case '3':
                if( document.getElementById("checkbox1").checked || document.getElementById("checkbox2").checked || document.getElementById("checkbox3").checked){
                    i="4"
            Step4();
            Affiche4();
            Button4()
            // AddonsOnline()
            AddonsOnline();
            AddonsStorage();
            AddonsProfile();

            
            // AddonsProfile()
            Total();
            console.log("le compteur est");
            console.log(i);
                }
                else{
                    i="4"
            Step4();
            Affiche4();
            Button4()
            // AddonsOnline()
            AddonsOnline();
            AddonsStorage();
            AddonsProfile();

            
            // AddonsProfile()
            Total();
            console.log("le compteur est");
            console.log(i);
                }
            break;
        case '4':
            console.log("le compteur est");
            console.log(i);
            Affiche5();
            
            console.log("FIn");
            break;
      
            }
    }
    else if(
        e.target.id==="goback" || e.target.id==="goback-pc"
    ){
        switch(i){
                case '4':
                Affiche3();
                i="3";
                Button3()
                console.log("le compteur est");
            console.log(i);
                break;

                case '3':
                Affiche2();
                Button2();
                i="2";
                console.log("le compteur est");
            console.log(i);
                break;

                case '2':
                Affiche1();
                Button1();
                i="1";
                console.log("le compteur est");
            console.log(i);
                break;
            }
    }
    

    
})

// toggle Start 
const wraptoggle = document.querySelector('.wrap-toggle');
const toggleblock = document.querySelector('.toggle-block');
const yearly1 = document.querySelector('.yearly1');
const yearly2 = document.querySelector('.yearly2');
const yearly3 = document.querySelector('.yearly3');
const priceAdvanced = document.querySelector('#price-advanced');
const priceAcarde = document.querySelector('#price-arcade');
const pricePro = document.querySelector('#price-pro');
wraptoggle.addEventListener("click",function(){
    if(toggleblock.style.justifyContent==="right"){
        checked();
        isyearly=false;
        toggleblock.style.justifyContent="left"
        yearly1.style.display="none";
        yearly2.style.display="none";
        yearly3.style.display="none";
        priceAcarde.textContent="$9/mo"
        pricePro.textContent="$12/mo"
        priceAdvanced.textContent="$15/mo"
        switch(block){
            case '1':
                    mainprice=9;
                    break;
            case '2':
                mainprice=12;
                break;
            case '3':
                mainprice=15;
                break;
        };
        
        monthly();


}
    else{
        checked();
        isyearly=true;
        toggleblock.style.justifyContent="right";
        yearly1.style.display="flex";
        yearly2.style.display="flex";
        yearly3.style.display="flex";
        priceAcarde.textContent="$120/yr";
        pricePro.textContent="$150/yr";
        priceAdvanced.textContent="$90/yr";
        switch(block){
            case '1':
                    mainprice=90;
                    break;
            case '2':
                mainprice=120;
                break;
            case '3':
                mainprice=150;
                break;
        };
        
        yearly();
    }
})




// Toggle end











// 1 2 3 4 Start








}
