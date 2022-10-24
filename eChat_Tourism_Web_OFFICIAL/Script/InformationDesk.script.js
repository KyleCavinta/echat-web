$(function(){

    $('.btn-tribe').on('click', function(){
        $('#tribe-modal').modal('show')
    })

    $('.btn-eChat').on('click', function(){
        $('#eChat-modal').modal('show')
    })

    $('.btn-video').on('click', function(){
        $('#video-modal').modal('show')
    })

    var myModalEl = document.getElementById('video-modal')
    myModalEl.addEventListener('hidden.bs.modal', function (event) {
        $('#video-play')[0].pause()
    })
})