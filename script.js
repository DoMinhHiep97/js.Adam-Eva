let Apple= function (piece) {
this.piece=piece;
this.getApple=function () {
    return this.piece;
};
this.decreaseApple=function () {
    return this.piece--;
}
};
let apple=new Apple(10);
let Human=function (name,gender,weight) {
this.name=name;
this.gender=gender;
this.weight=weight;
this.speak=function () {
    console.log("My name:"+this.name+",My gender:"+this.gender+",My weight:"+this.weight);
};
this.eat=function () {
    if(apple.getApple()>0){
        this.weight++;
        apple.decreaseApple();
    }else{
        alert("cant't eat more");
    }
};
this.check=function () {
    alert(apple.getApple());
};
this.checkApple=function () {
    alert(apple.decreaseApple());
}
};
let adam= new Human("Adam","Male",75);
adam.speak();
adam.eat();
adam.check();
adam.checkApple();
let eve=new Human("Eva","Female",50);
eve.speak();
eve.eat();
eve.check();
eve.checkApple();

