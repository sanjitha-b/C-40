class Player{
constructor(){
this.index = 0
this.distance = 0
this.name = null

}

readcount(){
    var playercountRef = database.ref("playercount")
    playercountRef.on("value", function(data){
playercount = data.val()


    })
}
updatecount(count){
database.ref("/").update({
    playercount:count
})

}
update(){
var playerindex = "players/player"+ this.index
database.ref(playerindex).set({
name:this.name, 
distance:this.distance

})


}
static
getplayerInfo(){
var inforef= database.ref("players")
inforef.on("value", function(data){
    allplayers = data.val()
})
}
}