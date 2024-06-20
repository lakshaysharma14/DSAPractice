// Polyfill for Map
Array.prototype.mymap = function(cb){
    let res = [];
    
    for(let i=0;i<this.length;i++){
        res.push(cb(this[i],i,this));
    }
    
    return res;
}

// Polyfill for Filter
Array.prototype.myfilter = function(cb){
    let res = [];
    
    for(let i=0;i<this.length;i++){
       if(cb(this[i],i,this))
        res.push(this[i]);
    }
    return res;
}

// Polyfill for Reduce
Array.prototype.myreduce = function(cb,ival){
    let acc = ival
    
    for(let i=0;i<this.length;i++){
       acc = acc ? cb(acc,this[i],this) : this[i];
    }
    return acc;
}

// Polyfill for Call
Function.prototype.mycall = function(context = {}, ...args){

    if(typeof this!== 'function'){
        throw new Error(this + 'It is not callable');
    }

    context.fn = this;
    return context.fn(...args);
}


// Polyfill for Apply
Function.prototype.myapply = function(context = {}, args = []){
    if(typeof this!== 'function'){
        throw new Error(this + 'It is not callable');
    }
    
    if(!Array.isArray(args)){
        throw new Error("args must be array");
    }

    context.fn = this;
    return context.fn(...args);
}

// Pollyfill for Bind

// Polyfill for Promise

// Polyfill for Promise.all