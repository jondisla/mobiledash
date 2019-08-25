$(document).ready(function(){
    const $this = $(this);
    console.log('works')
    
    $('.card-text').click(function(){
        var value = $(`.card-text`).html();
        var anArray = [];
        $this.find(value).each(function(){
            anArray.push($(this).html());
            for(var i = 0; i < anArray.length; i++){
                console.log(anArray[i])
            }
        });
        // console.log(anArray);
        
    })
})
