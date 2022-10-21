const obj={
    name:"Shobika",
    age:21,
    city:"Chennai",
    State:"TamilNadu",
   
};

const obj1 = {
    name:"Sruthi",
    age:21,
    city:"Coimbatore",
    State:"TamilNadu",
}

const vowels = {
    a:true,
    e:true,
    i:true,
    o:true,
    u:true
};

Object.prototype.myHasOwnProperty = function(key)
{
    const key1 = Object.keys(this);
    
    if(key1.includes(key))
    {
        return true;
    }
    else{
        return false;
        }

}

console.log(vowels.myHasOwnProperty("i"));