class Form{
    constructor(){
        this.image = createImg("images/form_background.jpeg");
        this.input = createInput("Name");
        this.greeting = createElement('h2');
        this.titleName = createElement('h2');
        this.playButton = createButton("Click to play");
        this.resetButton = createButton("Click to reset");
        //this.image = loadImage("images/form_background.jpeg");
        
    }

    hide(){
        this.input.hide();
        this.greeting.hide();
        this.playButton.hide();
        this.resetButton.hide();
        this.titleName.hide();
    }

    display(){
        this.image.position(0,0);
        this.image.class("imgIncreasedSize");
        //image(this.image,500,500,2000,1000);

        this.titleName.class("titleFont");
        this.titleName.html("Varsity Footballers!!");
        this.titleName.position(570,50);

        this.playButton.position(850,600);
        this.playButton.class("increaseSize");

        this.resetButton.position(850,300);
        this.resetButton.class("increaseSize");

        this.greeting.position(670,650);

        this.input.position(750,450);
        this.input.class("increaseSize");

        if(mousePressedOver(this.playButton)){()=>{
            this.input.hide();
            this.greeting.hide();
            this.playButton.hide();
            this.greeting.html("Please wait while your teammates join");
            this.greeting.position(430,500);
            player.name = this.input.value();
            playerCount+=1;
            player.index = playerCount;
            player.updatePlayerCount(1);
            player.updateTeam();
        }}

        if(mousePressedOver(this.resetButton)){()=>{
            game.updateGameState(0);
        }}
    }
}