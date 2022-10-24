$(function() {

    $('.btn-landmark').on('click', function() {
        $('#modal-landmarks').modal('show')
    })

    $('.btn-festivals').on('click', function() {
        $('#modal-festivals').modal('show')
    })

    $('.btn-cusine').on('click', function() {
        $('#modal-cusine').modal('show')
    })

    $('.btn-map-info').on('click', function() {
        $('#modal-map-info').modal('show')
    })
    $('.btn-tv2').on('click', function() {
        $('#video-modal').modal('show')
    })

    var myModalEl = document.getElementById('video-modal')
    myModalEl.addEventListener('hidden.bs.modal', function(event) {
        $('#video-play')[0].pause()
    })
})