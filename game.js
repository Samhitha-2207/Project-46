class Game{
    constructor(){
        
    }
    getGameState(){
        var gameStateRef  = database.ref('gameState');
        gameStateRef.on("value",function(data){
            gameState = data.val();
        })
    }
    updateGameState(state){
        database.ref('/').update({
            gameState: state
        });
    }
    async start(){
        player = new Player();

        var playerCountRef = await database.ref('playerCount').once("value");
        if(playerCountRef.exists()){
            playerCount = playerCountRef.val();
            playerCount = player.getPlayerCount();
        }

        form = new Form()
        form.display();
        
        var goalkeeper = createSprite(1800,500);
        goalkeeper.addImage(playerImg);

        var defender1 = createSprite(1500,250);
        defender1.addImage(playerImg);

        var defender2 = createSprite(1500,750);
        defender2.addImage(playerImg);

        var midfielder1 = createSprite(1000,225);
        midfielder1.addImage(playerImg);

        var midfielder2 = createSprite(1000,725);
        midfielder2.addImage(playerImg);

        var striker1 = createSprite(300,200);
        striker1.addImage(playerImg);

        var striker2 = createSprite(300,700);
        striker2.addImage(playerImg);
    }
    play(){
        Player.getPlayerInfo();
        player.getRankInfo();

        console.log("Hello world!");
    }
    end(){
        
    }
}