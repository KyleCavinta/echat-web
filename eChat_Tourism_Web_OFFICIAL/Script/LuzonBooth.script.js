$(function() {

    $('.btn-landmark').on('click', function() {
        $('#landmark-modal').modal('show')
    })

    $('.btn-cuisine').on('click', function() {
        $('#cuisine-modal').modal('show')
    })

    $('.btn-map').on('click', function() {
        $('#map-modal').modal('show')
    })

    $('.btn-festival').on('click', function() {
        $('#festival-modal').modal('show')
    })

    $('.btn-tv2').on('click', function() {
        $('#video-modal').modal('show')
    })

    var myModalEl = document.getElementById('video-modal')
    myModalEl.addEventListener('hidden.bs.modal', function(event) {
        $('#video-play')[0].pause()
    })
})